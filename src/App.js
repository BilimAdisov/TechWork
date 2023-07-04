import { Canvas } from '@react-three/fiber'

import { Stars } from './components/3D/Stars'

export default function App() {
  return (
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
  )
}
