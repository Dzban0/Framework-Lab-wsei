import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from './data/AppContext';

function ExampleComponent() {
    const { items } = useContext(AppContext);

    // wykorzystanie items w logice komponentu
    return (
        <div>
            {/* wyświetlanie items */}
        </div>
    );
}

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