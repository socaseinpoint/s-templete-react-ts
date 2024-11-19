import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl font-bold">REACT + Tailwind Boilerplate</p>
      </div>
    </QueryClientProvider>
  )
}

export default App
