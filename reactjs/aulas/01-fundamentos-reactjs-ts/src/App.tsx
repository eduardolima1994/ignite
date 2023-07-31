import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/55820803?v=4',
      name: 'Eduardo Lima',
      role: 'Dev @PMDG'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 🙌' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },        
    ],
    publishedAt: new Date('2023-07-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://encurtador.com.br/psvLQ',
      name: 'Tifany Souza',
      role: 'Esteticista @Emagrecentro'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 🙌' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'jane.design/doctorcare' },        
    ],
    publishedAt: new Date('2023-07-10 20:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
