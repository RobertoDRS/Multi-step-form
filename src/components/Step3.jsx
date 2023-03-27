import './Step3.css'

import Header from './litleComponents/Header'
import NextButton from './buttons/NextButton'
import BackButton from './buttons/BackButton'
import CheckAddOns from './litleComponents/CheckAddOns'

 const Step3 = () => {
    return (
        <div className='stepDiv'>

            <Header title="Escolha os adicionais" text="Os adicionais ajudam a melhorar sua experiência de jogo."/>

            <form id="form3" action="">
                <div className='form3Checks'>
                    <CheckAddOns title="Serviço online" text="Acesso a jogos multiplayer" price={1}/>
                    <CheckAddOns title="Armazenamento maior" text="Extra 1TB de armazenamento em nuvem" price={2}/>
                    <CheckAddOns title="Perfil personalizável" text="Tema personalizado em seu perfil" price={2}/>
                </div>

                <div className='divButtons'>
                    <BackButton/>
                    <NextButton/>
                </div>
            </form>

        </div>    
    )
 }

 export default Step3