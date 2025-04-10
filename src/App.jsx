import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [message, setMessage] = useState('Conectando com Supabase...')

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('empresa').select('*')
      if (error) {
        setMessage('Erro na conexão ou tabela "empresa" ainda não criada.')
      } else {
        setMessage(`Conectado! ${data.length} empresas encontradas.`)
      }
    }
    checkConnection()
  }, [])

  return (
    <div className="p-10 text-center text-xl">
      <h1 className="text-2xl font-bold mb-4">ISO KPI/KRI Manager</h1>
      <p>{message}</p>
    </div>
  )
}

export default App
