import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";

function CreateEditDeckScreen({ type, deck }) {
  //no deck id required, api call is making a POSt request, and will take any object that is put in the form
  const initialFormState = { name: "", description: "" };
  //declaring the forms initial state
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

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

    //.then
    // createDeck(formData, new AbortController().signal)
    //   .then(({ id }) => id)
    //   .then((deckId) => {
    //     setFormData({ ...initialFormState });
    //     return deckId;
    //   })
    //   .then((deckId) => history.push(`/decks/${deckId}`));
  };

  //we need a param for this handler
  const handleEdit = async () => {
    //
    const updatedDeck = {
      id: deck.id,
      ...formData,
    };
    await updateDeck(updatedDeck, new AbortController().signal);
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
    <div>
      {/* pass type into BreadCrumb later */}
      <BreadCrumb type={type} />
      <h1>{type} Deck</h1>
      <form onSubmit={handleSubmit} id="deckForm">
        <label htmlFor="name">
          Name
          <input
            id="name"
            className="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            className="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
        </label>
      </form>
      <button onClick={handleCancel}>Cancel</button>
      <button type="submit" form="deckForm">
        Submit
      </button>
    </div>
  );
}

export default CreateEditDeckScreen;
