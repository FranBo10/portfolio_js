

export const initialState = {darkMode : false};

export const actionTypes = () => {
    ADD_DARK_MODE: "ADD_DARK_MODE";
}

const reducer = 
(state, action) => {
    switch(action.type) {
    case "ADD_DARK_MODE": 
        return {darkMode : true}
    
    default: 
        return state
    }    
}