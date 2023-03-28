import './Form.css'

import Steps from './Steps'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Summary from './Summary'
import ThankYou from './ThankYou'

import { useContext } from 'react'
import { FormContext } from '../context/form'

 const Form = () => {

    const [formState, _] = useContext(FormContext)

    let step = <Step1/>

    switch(formState.step){
        case 0:
            step = <Step1/>
            break

        case 1:
            step = <Step2/>
            break

        case 2:
            step = <Step3/>
            break

        case 3:
            step = <Summary/>
            break

        case 4:
            step = <ThankYou/>
            break
    }

    return (
        <main>
            <Steps/>
            <section>
                {step}
            </section>
        </main>
        
    )
 }

 export default Form