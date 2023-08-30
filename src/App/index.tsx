// React
import { Suspense } from 'react'

// Wouter
import { Route, Switch } from 'wouter'

// Styles
import { main } from './app.css'

// Pages
import Stories from '../Page/Stories'
import Comments from '../Page/Comments'
import NotFound from '../Page/NotFound'
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
          <Switch>
            <Route path="/" component={Stories} />

            <Route path="/favorites" component={Favorites} />

            <Route path="/article/:id" component={Comments} />

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  )
}
