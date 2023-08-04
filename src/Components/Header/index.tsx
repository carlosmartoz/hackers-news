import { header, nav, heading, link } from './header.css'

export const Header = () => {
  return (
    <header className={header}>
      <nav className={nav}>
        <h1 className={heading}>
          <a className={link} href="/">
            Hacker News
          </a>
        </h1>
      </nav>
    </header>
  )
}
