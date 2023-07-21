import { Post } from './Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Eduardo Lima"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maxime cum. "
          />
          <Post
            author="Jhon Duo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, maxime cum. "
          />
        </main>
      </div>
    </div>
  )
}
