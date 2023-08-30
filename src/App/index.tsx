// React
import { Suspense } from 'react'

// Wouter
import { Route } from 'wouter'

// Styles
import { main } from './app.css'

// Pages
import Stories from '../Page/Stories'
import Comments from '../Page/Comments'
import Favorites from '../Page/Favorites'

// Components
import Header from '../Components/Header'

// App
export default function App () {
  return (
    <>
      <Header />

      <main className={main}>
        <Suspense fallback={null}>
          <Route path="/" component={Stories} />

          <Route path="/favorites" component={Favorites} />

          <Route path="/article/:id" component={Comments} />
        </Suspense>
      </main>
    </>
  )
}
