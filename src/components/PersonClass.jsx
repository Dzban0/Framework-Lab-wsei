import PropTypes from 'prop-types';



const PersonClass = ({ person }) => {
    return(
        <div className="card mb-3">
            <div className="card-body">
                <p className="card-text">ID:{person.id}</p>
                <p className="card-text">Name:{person.name}</p>
                <p className="card-text">Birth:{person.birth}</p>
                <p className="card-text">Eyes:{person.eyes}</p>
            </div>
        </div>
    );
};
PersonClass.propTypes={
    person: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        birth: PropTypes.string.isRequired,
        eyes: PropTypes.string.isRequired
    }).isRequired
};


export default PersonClass;