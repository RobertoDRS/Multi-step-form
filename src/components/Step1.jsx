import './Step1.css'

import Header from './litleComponents/Header'
import NextButton from './buttons/NextButton'

 const Step1 = () => {


    return (
        <div className='stepDiv'>

            <Header title="Informações pessoais" text="Por favor fornecer seu nome, endereço de e-mail e número de telefone."/>

            <form id="form1" action="" onSubmit={(e) => e.preventDefault}>
                <label htmlFor="name">Nome</label>
                <input id='name' type="text" placeholder='Digite seu nome' name='name'/>

                <label htmlFor="email">Endereço de email</label>
                <input id='email' type="email" placeholder='Digite seu email' name='email'/>

                <label htmlFor="phoneNumber">Numero de telefone</label>
                <input id='phoneNumber' type="tel" placeholder='Digite seu número de telefone' name='phoneNumber'/>

                <div className='divButtons'>
                    <div></div>
                    <NextButton/>
                </div>
            </form>

        </div>   
    )
 }

 export default Step1