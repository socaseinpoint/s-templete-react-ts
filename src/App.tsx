import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Lobby from '@/routes/Lobby'
import PreloadedIframe from '@/components/PreloadedIframe'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Lobby />
      <PreloadedIframe />
    </QueryClientProvider>
  )
}

export default App
