import './CheckAddOns.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'


const CheckAdicionais = ({title, text, price}) => {

    
    const [formState, dispatch] = useContext(FormContext)
    

    const id = title === "Serviço online" ? "onlineService": title === "Armazenamento maior" ? "largerStorage":
    "customizableProfile"

    const checked = formState[id]
    
    const priceFormatted = formState.billing === 'Monthly' ? `R$ ${price}/mês`: `R$ ${price*12}/ano`

    return(
        <div>
            <label htmlFor={id} className={`checkAddOns ${formState[id] === true ? 'checked': ''}`}>
                <div className='checkAddOns-sec'>

                    <input type="checkbox" name="addOns" id={id} value={id}
                    onChange={(e) => dispatch({type: 'ADD_ON_CHECKED', payload: {addOn: id, price}})} checked={checked} />

                    <div className='checkAddOns-tert'>
                        <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{title}</span>
                        <span style={{color:'hsl(231, 11%, 63%)'}}>{text}</span>
                    </div>
                </div>

                <span className='checkAddOns-spanPrice'>
                    {priceFormatted}
                </span>
            </label>
        </div>
    )
}

export default CheckAdicionais