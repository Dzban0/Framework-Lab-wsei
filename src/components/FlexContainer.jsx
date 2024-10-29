import {useReducer} from 'react';
import AppReducer from '../data/AppReducer'
import PropTypes from "prop-types";

const FlexContainer=({element:Element,data})=>{
    const [items, dispatch] = useReducer(AppReducer, data);
    return(
      <div className="d-flex flex-wrap">
        {items.map((item,index) =>(
            <div key={index} className="flex-ite p-2">
                <Element person={item} dispatch={dispatch}/>
            </div>
        ))}
      </div>
    );
}
FlexContainer.propTypes={
    element:PropTypes.elementType.isRequired,
    data:PropTypes.array.isRequired
}

export default FlexContainer