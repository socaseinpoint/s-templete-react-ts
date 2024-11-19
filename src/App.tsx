import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Button from './components/ui/Button'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen items-center justify-center flex-col gap-4">
        <p className="text-4xl font-bold">REACT + Tailwind Boilerplate</p>
        <Button onClick={() => alert('clicked')}>Click me</Button>
      </div>
    </QueryClientProvider>
  )
}

export default App
