import { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import RatingBar from "./RatingBar";
import AppContext from "../data/AppContext";

const PersonProfile = ({ person }) => {
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const handleRate = () => {
        const newRating = person.rating === 10 ? 0 : person.rating + 1;
        dispatch({
            type: "rate",
            id: person.id,
            newRating: newRating,
        });
    };

    const handleEdit = () => {
        navigate(`/lab4/edit/${person.id}`);
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete person with ID: ${person.id}?`
        );
        if (confirmDelete) {
            dispatch({
                type: "delete",
                id: person.id,
            });
            alert(`Deleted person with ID: ${person.id}`);
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">ID: {person.id}</p>
                <p className="card-text">Birth Date: {person.birth}</p>
                <p className="card-text">Eye Color: {person.eyes}</p>

                <RatingBar rate={person.rating} />

                <button className="btn btn-primary me-2" onClick={handleRate}>
                    Rate
                </button>
                <button className="btn btn-secondary me-2" onClick={handleEdit}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

PersonProfile.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        birth: PropTypes.string.isRequired,
        eyes: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default PersonProfile;
