import BaseLayout from '@/components/BaseLayout'
import Battle from '@/components/Battle'
import PreloadedIframe from '@/components/PreloadedIframe'
// import Battle from '@/components/Battle'

const Lobby = () => {
  return (
    <BaseLayout>
      <Battle />
      <PreloadedIframe />
    </BaseLayout>
  )
}

export default Lobby
