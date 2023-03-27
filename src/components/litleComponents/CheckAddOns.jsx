import './CheckAddOns.css'

const CheckAdicionais = ({title, text, price}) => {

    const id = title === "Serviço online" ? "onlineService": title === "Armazenamento maior" ? "largerStorage":
    "customizableProfile"

    return(
        <div>
            <label htmlFor={id} className='checkAddOns'>
                <div className='checkAddOns-sec'>
                    <input type="checkbox" name="addOns" id={id} />
                    <div className='checkAddOns-tert'>
                        <span style={{color:'hsl(213, 96%, 18%)', fontWeight:'bold'}}>{title}</span>
                        <span style={{color:'hsl(231, 11%, 63%)'}}>{text}</span>
                    </div>
                </div>

                <span>
                    {price}
                </span>
            </label>
        </div>
    )
}

export default CheckAdicionais