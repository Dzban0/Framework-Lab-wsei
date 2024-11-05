import { useContext } from "react";
import AppContext from "../data/AppContext";
import PropTypes from "prop-types";

const FlexContainer = ({ element: Element }) => {
    const { items } = useContext(AppContext);

    return (
        <div className="d-flex flex-wrap">
            {items.map((item, index) => (
                <div key={index} className="flex-item p-2">
                    <Element person={item} />
                </div>
            ))}
        </div>
    );
};

FlexContainer.propTypes = {
    element: PropTypes.elementType.isRequired,
};

export default FlexContainer;
