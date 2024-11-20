import ReactDOM from 'react-dom'

const PreloadedIframe: React.FC = () => {
  const iframeContainer = document.getElementById('iframe-root')

  if (!iframeContainer) {
    console.error('Iframe root container not found!')
    return null
  }

  return ReactDOM.createPortal(
    <iframe
      src="https://hamster-kingdom-cocos.vercel.app"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 'none',
        zIndex: -1,
      }}
      title="Preloaded Iframe"
    />,
    iframeContainer,
  )
}

export default PreloadedIframe
