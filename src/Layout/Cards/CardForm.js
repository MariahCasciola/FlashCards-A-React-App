import React, { useState } from "react";

function CardForm({
  submitHelper,
  onCancel,
  deckName = "Loading....",
  initialFormState,
  submitLabel,
  cancelLabel,
  headerLabel,
}) {
  // create card & deck variable for state
  const [formData, setFormData] = useState(initialFormState);

  // changer handler
  function changeHandler({ target }) {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function submitHandler(event) {
    event.preventDefault();
    //after submit, clear the formData
    submitHelper(formData).then(() => setFormData(initialFormState));
  }

  return (
    <form onSubmit={submitHandler} className="card-form">
      <fieldset>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            id="front"
            name="front"
            tabIndex="1"
            className="form-control"
            required={true}
            placeholder="Front side of card"
            value={formData.front}
            onChange={changeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            id="back"
            name="back"
            tabIndex="2"
            className="form-control"
            required={true}
            placeholder="Back side of card"
            value={formData.back}
            onChange={changeHandler}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary mr-2 btn-sm"
          tabIndex="3"
        >
          {submitLabel}
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={onCancel}
          tabIndex="4"
        >
          {cancelLabel}
        </button>
      </fieldset>
    </form>
  );
}
export default CardForm;
