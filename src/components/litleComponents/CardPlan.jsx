import './CardPlan.css'

import { useContext } from 'react'
import { FormContext } from '../../context/form'

const CardPlan = ({img, title, price}) => {

    const [formState, dispatch] = useContext(FormContext)

    console.log(formState)

    const checked = formState.plan === title ? true: false

    const priceFormatted = formState.billing === 'Monthly' ? `R$ ${price}/mês`: `R$ ${price*12}/ano`

    return (
        <div className={`cardPlan ${checked === true ? 'checked': ''}`} htmlFor={title}>

           <label htmlFor={title}>

                <input type="radio" name="plan" value={title} id={title} 
                onChange={(e) => dispatch({type: 'PLAN_CHANGE', payload: {plan: e.target.value, price}})} defaultChecked={checked} />

                <img src={img} alt={title} />
                <div className='divSec-cardPlan'>
                    <span style={{fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}}>{title}</span>
                    <span style={{color: 'hsl(231, 11%, 63%)'}}>{priceFormatted}</span>
                </div>
           </label>
           
        </div>
    )
}

export default CardPlan