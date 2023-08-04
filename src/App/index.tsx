import './App.css'
import { Route } from 'wouter'
import { Suspense } from 'react'
import { Header } from '../Components/Header'
import TopStoriesPage from '../Page/ToptoriesPage'

export default function App () {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Route path="/" component={TopStoriesPage} />
        </Suspense>
      </main>
    </>
  )
}
