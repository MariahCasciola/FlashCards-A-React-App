import React, { useState } from "react";

function CardForm({
    onSubmit,
    onDone,
    deckName = "Loading....",
    initialState,
    buttonLabelDone="Done" 
}) {
    // create card & deck variable for state
    const [card, setCard] = useState(initialState);

    // changer handler
    function changeHandler(){}


    // submit handler
    function submitHandler() {}

    return (
        <form onSubmit={submitHandler} className="card-form">
          <fieldset>
            <legend>{deckName}: Add Card</legend>
    
            <div className="form-group">
              <label htmlFor="front">Front</label>
              <textarea
                id="front"
                name="front"
                tabIndex="1"
                className="form-control"
                required={true}
                placeholder="Front side of card"
                value={card.front}
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
                value={card.back}
                onChange={changeHandler}
              />
            </div>
    
            <button
              className="btn btn-secondary mr-2"
              onClick={onDone}
              tabIndex="4"
            >
              {buttonLabelDone}
            </button>
            <button type="submit" className="btn btn-primary" tabIndex="3">
              Save
            </button>
          </fieldset>
        </form>
      );
}
export default CardForm;