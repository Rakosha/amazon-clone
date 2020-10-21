import React, {createContext, useContext, useReducer} from 'react';

// prepares data
export const StateContext = createContext();

// wrap our app and provide data to all the components
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info from the data layout
export const useStateValue = () => useContext(StateContext);