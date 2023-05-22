import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";

function CreateEditDeckScreen({ type, deck, loadDeck }) {
  //no deck id required, api call is making a POST/PUT request, and will take any object that is put in the form
  const initialFormState =
    type === "Create"
      ? { name: "", description: "" }
      : { name: deck.name, description: deck.description };
  //declaring the forms initial state
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

  useEffect(() => {
    //not dry, but gets around the dependency list warning
    setFormData(
      type === "Create"
        ? { name: "", description: "" }
        : { name: deck.name, description: deck.description }
    );
  }, [type, deck]);

  const handleChange = ({ target }) => {
    //id tells us the name of the property
    //PARAMETER INSIDE setNewDeck: make a copy of deck and overriding one of the properties like target.id
    //target.value is whatever is currently in the input and textarea fields, because of values={newDeck.name} and values={newDeck.description}
    setFormData({
      ...formData,
      [target.id]: target.value,
    });
  };

  const handleCreate = async () => {
    const { id } = await createDeck(formData, new AbortController().signal);
    //clears the form after the submit
    setFormData({ ...initialFormState });
    history.push(`/decks/${id}`);
  };

  const handleEdit = async () => {
    const updatedDeck = {
      id: deck.id,
      ...formData,
    };
    await updateDeck(updatedDeck, new AbortController().signal);
    await loadDeck();
    history.push(`/decks/${deck.id}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //when will we know when to call create and when to call edit
    if (type === "Edit") {
      await handleEdit();
    } else if (type === "Create") {
      await handleCreate();
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <>
      {type === "Edit" ? (
        // edit deck breadcrumb
        <BreadCrumb
          title={`${type} Deck`}
          link={deck.name}
          href={`/decks/${deck.id}`}
        />
      ) : (
        // create deck breadcrumb
        <BreadCrumb title={`${type} Deck`} />
      )}
      <h1>{type} Deck</h1>
      <form onSubmit={handleSubmit} id="deckForm">
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
            <input
              id="name"
              className="form-control"
              type="text"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            Description
            <textarea
              id="description"
              className="form-control"
              type="text"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </label>
        </div>
      </form>{" "}
      <button className="btn btn-outline-info" type="submit" form="deckForm">
        Submit
      </button>
      <button className="btn btn-outline-danger" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}

export default CreateEditDeckScreen;
