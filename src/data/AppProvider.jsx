import { useReducer } from "react";
import PropTypes from "prop-types"; // Upewnij się, że ten import jest obecny
import { data } from "./randomData/module-data";
import AppReducer from './AppReducer';
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      {children}
    </AppContext.Provider>
  );
}

// Definicja propTypes
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
