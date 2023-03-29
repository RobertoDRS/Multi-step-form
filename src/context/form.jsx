import {createContext, useReducer} from 'react'

const initialState = {
    step: 0, 
    name: '',
    email: '',
    tel: '',
    plan: 'Arcade',
    billing: 'Monthly',
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    totalPrice: 9
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
        
        case 'NAME_CHANGE':
            return{
                ...state,
                name: action.payload
            }

        case 'EMAIL_CHANGE':
            return{
                ...state,
                email: action.payload
            }

        case 'TEL_CHANGE':
            return{
                ...state,
                tel: action.payload
            }

        case 'PLAN_CHANGE':

            const formerPrice = state.plan === 'Arcade' ? 9: state.plan === 'Advanced' ? 12: 15
            const newPrice = parseInt(action.payload.price)

            return{
                ...state,
                plan: action.payload.plan,
                totalPrice: (state.totalPrice - formerPrice) + newPrice
            }

        case 'BILLING_CHANGE':
            return{
                ...state,
                billing: action.payload
            }

        case 'ADD_ON_CHECKED':

            const addOnsPrices = {
                onlineService: 1,
                largerStorage: 2, 
                customizableProfile: 2
            } 

            const addOn = action.payload.addOn
        
            return{
                ...state,
                [addOn]: state[addOn] === false ? true: false,
                totalPrice: state.totalPrice + (state[addOn] === false ? addOnsPrices[addOn]: -(addOnsPrices[addOn]))
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