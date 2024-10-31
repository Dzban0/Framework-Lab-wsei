import FlexContainer from "../components/FlexContainer";
import PersonClass from "../components/PersonClass";
import { data } from "../data/module-data";

const Lab3=()=>{
    return (
        <div>
            <h1>Lab3</h1>
            <FlexContainer element={PersonClass} data={data}/>
        </div>
    )
}

export default Lab3