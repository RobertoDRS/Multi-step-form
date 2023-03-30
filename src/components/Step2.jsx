import './Step2.css'

import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

import Header from './litleComponents/Header'
import NextButton from './buttons/NextButton'
import BackButton from './buttons/BackButton'
import CardPlan from './litleComponents/CardPlan'

import { useContext } from 'react'
import { FormContext } from '../context/form'

 const Step2 = () => {

    const [formState, dispatch] = useContext(FormContext)
    const checkedMonthly = formState.billing === 'Monthly' ? true: false
    const checkedYearly = formState.billing === 'Yearly' ? true: false


    return (
        <div className='stepDiv'>

            <Header title="Selecione seu plano" text="Você tem a opção de cobrança mensal ou anual."/>
            <form id="form2"  onSubmit={(e) => e.preventDefault} action="">

                <div className='form2Cards'>
                    <CardPlan img={arcade} title="Arcade" price={+9}/>
                    <CardPlan img={advanced} title="Advanced" price={+12}/>
                    <CardPlan img={pro} title="Pro" price={+15}/>
                </div>
            

                <div className='form2Radios'>
                    <label htmlFor="monthly" className={formState.billing === 'Monthly' && 'labelBilling'} 
                    style={{marginRight:'20px'}}>Mensal</label>

                    <div className='form2Radios-sec'>
                        <input type="radio" name="billing" id="monthly" value="Monthly" 
                        onChange={(e) => dispatch({type: 'BILLING_CHANGE', payload: e.target.value })}
                        defaultChecked={checkedMonthly}/>

                        <input type="radio" name="billing" id="yearly" value="Yearly"
                        onChange={(e) => dispatch({type: 'BILLING_CHANGE', payload: e.target.value })}
                        defaultChecked={checkedYearly}/>
                    </div>
                    
                    <label htmlFor="yearly" className={formState.billing === 'Yearly' && 'labelBilling'} 
                    style={{marginLeft:'20px'}}>Anual</label>
                </div>

                <div className='divButtons'>
                    <BackButton/>
                    <NextButton/>
                </div>

            </form>

        </div>   
    )
 }

 export default Step2