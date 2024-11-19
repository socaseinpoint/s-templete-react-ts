import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Lobby from '@/routes/Lobby'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Lobby />
    </QueryClientProvider>
  )
}

export default App
