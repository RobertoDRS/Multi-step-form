import {createContext, useReducer} from 'react'

const initialState = {
    step: 0
}


const formReducer = (state, action) => {

    switch(action.type) {

        case 'NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }

        case 'BACK_STEP':
            return {
                ...state,
                step: state.step - 1
            }
        
        default:
            return state
    }

}

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const value = useReducer(formReducer, initialState);

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};