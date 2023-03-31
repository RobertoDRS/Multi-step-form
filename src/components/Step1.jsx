import './Step1.css'

import Header from './litleComponents/Header'
import NextButton from './buttons/NextButton'
import InputMask from 'react-input-mask'

import { useContext } from 'react'
import { FormContext } from '../context/form'

 const Step1 = () => {

    const [formState, dispatch] = useContext(FormContext)

    return (
        <div className='stepDiv'>

            <Header title="Informações pessoais" text="Forneça seu nome, endereço de e-mail e número de telefone."/>

            <form id="form1" action="" onSubmit={(e) => e.preventDefault}>
                <label htmlFor="name">Nome</label>

                <input id='name' type="text" placeholder='Digite seu nome' name='name'
                value={formState.name} onChange={(e) => dispatch({type: 'NAME_CHANGE', payload: e.target.value})} required/>

                <label htmlFor="email">Endereço de email</label>
                <input id='email' type="email" placeholder='Digite seu email' name='email'
                value={formState.email} onChange={(e) => dispatch({type: 'EMAIL_CHANGE', payload: e.target.value})} required/>

                <label htmlFor="phoneNumber">Numero de telefone</label>
                <InputMask id='phoneNumber' type="tel"  mask="(99) 99999-9999" placeholder='Digite seu número de telefone' name='phoneNumber'
                value={formState.tel} onChange={(e) => dispatch({type: 'TEL_CHANGE', payload: e.target.value})} required/>

                

                <div className='divButtons'>
                    <div></div>
                    <NextButton/>
                </div>
            </form>

        </div>   
    )
 }

 export default Step1