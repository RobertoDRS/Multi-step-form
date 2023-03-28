import './DivStep.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'

 const DivStep = ({number, title, text}) => {

    const [formState, _] = useContext(FormContext)

    return (
            <div className= 'divStep'>
                <span className= {`number ${ (number - 1) === formState.step ? 'bgAzul': ''}`}>{number}</span>
                <div className='divStep-sec'>
                    <h3>{title}</h3>
                    <span>{text}</span>
                </div>
            </div>
    )
 }

 export default DivStep