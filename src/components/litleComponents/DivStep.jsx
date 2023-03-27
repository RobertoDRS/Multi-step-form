import './DivStep.css'

 const DivStep = ({number, title, text}) => {
    return (
            <div className='divStep'>
                <span className='number'>{number}</span>
                <div className='divStep-sec'>
                    <h3>{title}</h3>
                    <span>{text}</span>
                </div>
            </div>
    )
 }

 export default DivStep