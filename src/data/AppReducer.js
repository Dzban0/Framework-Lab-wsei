export default function AppReducer(state, action) {
    switch (action.type) {
        case 'add':
           return [...state, { id: state.length + 1, ...action.newItem }];
        case "edit": {
            return state.map(item =>
                item.id === action.id ? { ...item, ...action.updatedData } : item
            );
        }
        case "rate": {
            return state.map(item =>
                item.id === action.id
                    ? { ...item, rating: action.newRating }
                    : item
            );
        }
        case "delete": {
            return state.filter(item => item.id !== action.id);
        }
        default:
            return state;
    }
}
