import PropTypes from 'prop-types';

function ItemProfile ({ item }) {
    return(
        <li>{item.label}</li>
    );
};
ItemProfile.propTypes={
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        
    }).isRequired
};


export default ItemProfile;