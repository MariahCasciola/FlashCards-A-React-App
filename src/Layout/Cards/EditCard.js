import React from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
    // useHistory
    const history = useHistory();

    // get for deckId & cardId
    const { deckId, cardId } = useParams();

    // create card & deck variable for state
    const [card, setCard] = useState({ front: "", back: "" });
    const [deck, setDeck] = useState({ cards: [] });

    // run useEffect to read both the deck and cards
    useEffect(() => {
        readDeck(deckId).then(setDeck);
        readCard(cardId).then(setCard);
    }, [deckId, cardId])

    // create a submit handler for our cards
    function submitHandler(card) {
        updateCard(card).then(imDone);
    }

    // ? perhaps a done or finish handler.....maybe? 
    function imDone() {
        history.push(`/decks/${deck.id}`);
    };

    // pass in the card form
    const cardDisplay = card.id ? (
        <CardForm
            onSubmit={submitHandler}
            onDone={imDone}
            deckName={deck.name}
            initialState={card}
            buttonLabelDone="Cancel" 
        />
    ) : (
        <p>Loading...... 😀</p>
    )

    // breadcrumb for the cards
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">
                    <span className="oi oi-home" /> Home
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    Edit Card {cardId}
                </li>
                </ol>
            </nav>
            <h3> EditCard</h3>;
            {cardDisplay}
        </>
    )

}

export default EditCard;
