import './CardPlan.css'

const CardPlan = ({img, title, valor}) => {

    return (
        <div className='cardPlan' htmlFor={title}>

           <label htmlFor={title}>
                <input type="radio" name="plan" id={title}/>
                <img src={img} alt={title} />
                <div className='divSec-cardPlan'>
                    <span style={{fontWeight: 'bold', color:'hsl(213, 96%, 18%)'}}>{title}</span>
                    <span style={{color: 'hsl(231, 11%, 63%)'}}>{valor}</span>
                </div>
           </label>
           
        </div>
    )
}

export default CardPlan