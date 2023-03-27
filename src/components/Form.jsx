import './Form.css'

import Steps from './Steps'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Summary from './Summary'
import ThankYou from './ThankYou'


 const Form = () => {
    return (
        <main>
            <Steps/>
            <section>
                <ThankYou/>
            </section>
        </main>
        
    )
 }

 export default Form