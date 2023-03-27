import './Step2.css'

import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

import Header from './litleComponents/Header'
import NextButton from './buttons/NextButton'
import BackButton from './buttons/BackButton'
import CardPlan from './litleComponents/CardPlan'

 const Step2 = () => {
    return (
        <div className='stepDiv'>

            <Header title="Selecione seu plano" text="Você tem a opção de cobrança mensal ou anual."/>
            <form id="form2" >

                <div className='form2Cards'>
                    <CardPlan img={arcade} title="Arcade" valor={9}/>
                    <CardPlan img={advanced} title="Advanced" valor={12}/>
                    <CardPlan img={pro} title="Pro" valor={15}/>
                </div>
            

                <div className='form2Radios'>
                    <label htmlFor="monthly" style={{marginRight:'20px'}}>Mensal</label>

                    <div className='form2Radios-sec'>
                        <input type="radio" name="billing" id="monthly" defaultChecked/>
                        <input type="radio" name="billing" id="yearly" />
                    </div>
                    
                    <label htmlFor="yearly" style={{marginLeft:'20px'}}>Anual</label>
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