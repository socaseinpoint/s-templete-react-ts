import { useState } from 'react'

const Battle = () => {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <div className="w-full h-full">
      {isStarted && (
        <div className="absolute top-[50px] left-0 w-full h-[30px] bg-[#000] text-white flex justify-center items-center">
          <button type="button" onClick={() => setIsStarted(false)}>
            Stop Fight
          </button>
        </div>
      )}
      {isStarted ? (
        <iframe
          className="w-full h-full"
          src="https://hamster-kingdom-cocos.vercel.app"
          title="Hamster Kingdom"
        />
      ) : (
        <button
          className="absolute top-0 left-0 w-full h-full"
          type="button"
          onClick={() => setIsStarted(true)}
        >
          Start Fight
        </button>
      )}
    </div>
  )
}

export default Battle
