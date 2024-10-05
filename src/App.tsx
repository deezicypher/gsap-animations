import GSAPfrom from './animations/GSAPfrom'
import GSAPscrolltrigger from './animations/GSAPscrolltrigger'
import GSAPstagger from './animations/GSAPstagger'
import GSAPtimeline from './animations/GSAPtimeline'
import GSAPto from './animations/GSAPto'


function App() {
  

  return (
    <div className='p-10 flex flex-col min-h-screen '>
      <GSAPto/>     
      <GSAPfrom/>
      <GSAPtimeline/>
      <GSAPstagger/>
     <GSAPscrolltrigger/>
    </div>
  )
}

export default App
