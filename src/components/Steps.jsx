import './Steps.css'

import DivStep from './litleComponents/DivStep'

 const Steps = () => {
    return (
        <aside className='steps'>
            <DivStep number={1} title="Etapa 1" text="Suas informações"/>
            <DivStep number={2} title="Etapa 2" text="Selecione o plano"/>
            <DivStep number={3} title="Etapa 3" text="Adicionais"/>
            <DivStep number={4} title="Etapa 4" text="Resumo"/>
            <DivStep number={5} title="Etapa 5" text="Conclusão"/>
        </aside>
    )
 }

 export default Steps