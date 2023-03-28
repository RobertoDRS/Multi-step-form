import './NextButton.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'


 const NextButton = () => {

    const [_, dispatch] = useContext(FormContext)

    return (
        <button id="nextBtn" onClick={() => dispatch({type: 'NEXT_STEP'})}>
            Próxima Etapa
        </button>
    )
 }

 export default NextButton