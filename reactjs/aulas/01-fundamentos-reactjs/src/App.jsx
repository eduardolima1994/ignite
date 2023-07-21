import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Eduardo Lima"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maxime cum. "
      />
      <Post
        author="Jhon Duo"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maxime cum. "
      />
    </div>
  )
}
