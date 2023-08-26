// Styles
import { header, nav, title, link } from './header.css'

export const Header = () => {
  return (
    <>
      <header className={header}>
        <nav className={nav}>
          <h1 className={title}>
            <a className={link} href="/">
              Hackers News
            </a>
          </h1>
        </nav>
      </header>
    </>
  )
}
