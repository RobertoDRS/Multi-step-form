import './ConfirmButton.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'

 const ConfirmButton = () => {

    const [_, dispatch] = useContext(FormContext)

    return (
        <button id="confirmBtn" onClick={() => dispatch({type: 'NEXT_STEP'})}>
            Confirmar
        </button>
    )
 }

 export default ConfirmButton