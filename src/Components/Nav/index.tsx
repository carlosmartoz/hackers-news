// Wouter
import { Link, useLocation } from 'wouter'

// Styles
import { menu, item, link } from './nav.css'

export const Nav = () => {
  // Hook to get the pathname of the site
  const [location] = useLocation()

  return (
    <>
      <nav>
        <ul className={menu}>
          <li className={item}>
            <Link href="/" className={location === '/' ? link.active : link.base}>
              All
            </Link>
          </li>

          <li className={item}>
            <Link href="/favorites" className={location === '/favorites' ? link.active : link.base}>
              Fav
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
