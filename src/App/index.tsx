import { Route } from 'wouter'
import { Suspense } from 'react'
import { main } from './app.css'
import Stories from '../Page/Stories'
import Comments from '../Page/Comments'
import { Header } from '../Components/Header'

// App
export default function App () {
  return (
    <>
      <Header />

      <main className={main}>
        <Suspense fallback={null}>
          <Route path="/" component={Stories} />

          <Route path="/article/:id" component={Comments} />
        </Suspense>
      </main>
    </>
  )
}
