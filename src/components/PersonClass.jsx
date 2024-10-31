import PropTypes from 'prop-types';
import RatingBar from './RatingBar';



const PersonClass = ({ person,dispatch }) => {
    const handleRate=()=>{
        const newRating=person.rating===10?0:person.rating+1;
        dispatch({
            type:"rate",
            id:person.id,
            newRating:newRating
        })
    }
        const handleEdit=()=>{
            dispatch({
                type: "edit",
                id: person.id
                    });
            alert(`Edit person with id:${person.id}`)
        };
        const handleDelete=()=>{
            dispatch({
                type: "delete",
                id: person.id
                    });
            alert(`Delete person with id:${person.id}`)
        };
    
    return(
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-text">ID:{person.id}</p>
                <p className="card-text">Name:{person.name}</p>
                <p className="card-text">Birth:{person.birth}</p>
                <p className="card-text">Eyes:{person.eyes}</p>

                <RatingBar rate={person.rating}/>
                <button className='btn btn-primary me-2' onClick={handleRate}>Rate</button>
                <button className='btn btn-secondary me-2' onClick={handleEdit}>Edit</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};
PersonClass.propTypes={
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        birth: PropTypes.string.isRequired,
        eyes: PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired
    }).isRequired,
    dispatch:PropTypes.func.isRequired,
};


export default PersonClass;