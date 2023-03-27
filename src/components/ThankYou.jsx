import './ThankYou.css'

import thankYou from '../assets/images/icon-thank-you.svg'




 const ThankYou = () => {
    return (
        <div className='stepDiv thankYou'>
            <img src={thankYou} alt="" />
            <h2>Obrigado !</h2>
            <p>Obrigado por confirmar sua assinatura! Esperamos que você se divirta usando nossa
            plataforma. Se você precisar de suporte, por favor, sinta-se à vontade para nos enviar um e-mail para support@loremgaming.com.</p>
           
        </div>    
    )
 }

 export default ThankYou