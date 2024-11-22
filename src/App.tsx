import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from '@/routes/Home'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen items-center justify-center flex-col gap-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </QueryClientProvider>
  )
}

export default App
