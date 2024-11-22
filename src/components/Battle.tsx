import { useEffect, useRef, useState } from 'react'
import HeroButton from '@/components/HeroButton'
import HeroStats from '@/components/HeroStats'

const Battle = () => {
  const [isStarted, setIsStarted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        console.log('!!!send start message')
        iframeRef.current?.contentWindow?.postMessage(
          {
            action: 'START_BATTLE',
          },
          '*',
        )
      }, 3000)
    }
  }, [isStarted])

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
          ref={iframeRef}
          className="w-full h-full"
          src="http://192.168.18.56:7456"
          title="Hamster Kingdom"
        />
      ) : (
        <div className="flex justify-center items-end w-full h-full px-[32px] pb-[24px]">
          <div className="flex flex-col gap-[24px] w-full">
            <HeroStats />
            <HeroButton onClick={() => setIsStarted(true)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Battle
