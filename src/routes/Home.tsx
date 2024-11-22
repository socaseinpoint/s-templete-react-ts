import Button from '../components/ui/Button'

const Home = () => {
  return (
    <div>
      <p className="text-4xl font-bold">REACT + Tailwind Boilerplate</p>
      <Button onClick={() => alert('clicked')}>Click me</Button>
    </div>
  )
}

export default Home
