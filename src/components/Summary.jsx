import './Summary.css'

import Header from './litleComponents/Header'
import BackButton from './buttons/BackButton'
import ConfirmButton from './buttons/ConfirmButton'


 const Summary = () => {
    return (
        <div className='stepDiv'>

            <Header title="Finalização" text="Verifique novamente se tudo está certo antes de confirmar."/>

            <form id="form4" action="">
                <div className='form4Div'>
                    <div className='form4Div-sec' style={{borderBottom:'1px solid hsl(229, 24%, 87%)', 
                    paddingBottom:'30px'}}>
                        <div>
                            <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>Arcade(mensal)</span>
                            <button>Trocar</button>
                        </div>

                        <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>9</span>
                    </div>

                    <div className='form4Div-sec'>
                        <span>Serviço online</span>
                        <span>1</span>
                    </div>

                    <div className='form4Div-sec'>
                        <span>Mais armazenamento</span>
                        <span>2</span>
                    </div>

                </div>
                <div className='form4Div-sec margin-div' style={{padding:'1.2rem'}}>
                    <span style={{color:'hsl(231, 11%, 63%)'}}>Total(por ano)</span>
                    <span style={{fontSize: '1.3rem', color:'hsl(243, 100%, 62%)', fontWeight:'bold'}}>12</span>
                </div>

                <div className='divButtons'>
                    <BackButton/>
                    <ConfirmButton/>
                </div>
            </form>
        </div>    
    )
 }

 export default Summary