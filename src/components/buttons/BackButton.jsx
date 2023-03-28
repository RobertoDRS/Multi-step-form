import './BackButton.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'

 const BackButton = () => {

    const [_, dispatch] = useContext(FormContext)

    return (
        <button id="backBtn" onClick={() => dispatch({type: 'BACK_STEP'})}>
            Voltar
        </button> 
    )
 }

 export default BackButton