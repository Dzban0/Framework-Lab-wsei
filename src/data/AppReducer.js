export default function AppReducer(state, action){
    switch(action.type){
        case "edit":{
                //edit function
            return state;
        }
        case "rate":{
            
            return state.map(item=>
                item.id===action.id?{...item,rating:action.newRating}:item
            );
        }
        case "delete":{
            return state.filter(item=>item.id!==action.id); 
        }  
        default:
            return state;    
    }
}