import ReactDOM from 'react-dom'
import { Logo } from '@pmndrs/branding'
import './styles.scss'
import App from './App'
import {BsInstagram } from 'react-icons/bs'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a target='blank' href="https://www.instagram.com/aksoftdev/" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        <BsInstagram size={30}/>
      </a>
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '15em', fontWeight: 500, letterSpacing: '-0.05em' }}>Aksoft</h1>
      </div>
      <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h2 style={{ margin: 0, padding: 0, fontSize: '2em', fontWeight: 500, letterSpacing: '-0.05em' }}>Ведутся технические работы</h2>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>IT company</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>Байтик-Баатыра 86</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById('root')
)
