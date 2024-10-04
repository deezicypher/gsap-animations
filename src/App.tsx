import GSAPfrom from './animations/GSAPfrom'
import GSAPtimeline from './animations/GSAPtimeline'
import GSAPto from './animations/GSAPto'


function App() {
  

  return (
    <div className='p-10 flex flex-col min-h-screen gap-5'>
      <GSAPto/>     
      <GSAPfrom/>
      <GSAPtimeline/>
    </div>
  )
}

export default App
