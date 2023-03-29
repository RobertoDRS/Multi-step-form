import './Summary.css'

import Header from './litleComponents/Header'
import BackButton from './buttons/BackButton'
import ConfirmButton from './buttons/ConfirmButton'

import { useContext } from 'react'
import { FormContext } from '../context/form'

 const Summary = () => {

    const [formState, dispatch] = useContext(FormContext)

    const planPrice = formState.plan === 'Arcade' ? 9: formState.plan === 'Advanced' ? 12: 15 

    const marginDiv = (formState.onlineService && formState.customizableProfile && formState.largerStorage) ? 'marginDiv-1':
    (formState.onlineService && formState.customizableProfile || formState.onlineService && formState.largerStorage ||
    formState.customizableProfile && formState.largerStorage) ? 'marginDiv-2': (formState.customizableProfile || formState.onlineService || formState.largerStorage) ? 'marginDiv-3': 'marginDiv-4'

    console.log(formState.billing)

    return (
        <div className='stepDiv'>

            <Header title="Finalização" text="Verifique novamente se tudo está certo antes de confirmar."/>

            <div>
                <div className='form4Div'>
                    <div className='form4Div-sec' style={{borderBottom:'1px solid hsl(229, 24%, 87%)', 
                    paddingBottom:'30px'}}>
                        <div>
                            <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>
                                {`${formState.plan}(${formState.billing === 'Monthly' ? 'Mensal': 'Anual' })`}
                            </span>
                        </div>

                        <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>
                            {formState.billing === 'Monthly' ? `R$ ${planPrice}/mês` : `R$ ${planPrice*12}/ano`}
                        </span>
                    </div>

                    {formState.onlineService && (
                    <div className='form4Div-sec'>
                        <span>Serviço online</span>
                        <span>{formState.billing == 'Monthly' ? 'R$ 1/mês': 'R$ 12/ano'}</span>
                    </div>)}


                    {formState.largerStorage && (
                    <div className='form4Div-sec'>
                        <span>Mais armazenamento</span>
                        <span>{formState.billing == 'Monthly' ? 'R$ 2/mês': 'R$ 24/ano'}</span>
                    </div>)}

                    {formState.customizableProfile && (
                    <div className='form4Div-sec'>
                        <span>Perfil customizável</span>
                        <span>{formState.billing == 'Monthly' ? 'R$ 2/mês': 'R$ 24/ano'}</span>
                    </div>)}

                </div>
                <div className={`form4Div-sec ${marginDiv}`} style={{padding:'1.2rem'}}>
                    <span style={{color:'hsl(231, 11%, 63%)'}}>Total({formState.billing === 'Monthly' ? 'por mês': 'por ano' })</span>
                    <span style={{fontSize: '1.3rem', color:'hsl(243, 100%, 62%)', fontWeight:'bold'}}>
                        {formState.billing === 'Monthly' ? `R$ ${formState.totalPrice}/mês` : `R$ ${formState.totalPrice * 12}/ano`}
                    </span>
                </div>

                <div className='divButtons'>
                    <BackButton/>
                    <ConfirmButton/>
                </div>
            </div>
        </div>    
    )
 }

 export default Summary