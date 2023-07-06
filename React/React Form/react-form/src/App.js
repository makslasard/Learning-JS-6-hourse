import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()

  const onSubmit = ({ data }) => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

      </form>
    </div>
  )
}

export default App; 
