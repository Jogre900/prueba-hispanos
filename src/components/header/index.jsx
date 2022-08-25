import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Header({ className }) {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="d-flex">
          <li>
            <Link className="link" to="/">
              Vehiculos
            </Link>
          </li>
          <li>
            <Link className="link" to="/request">
              Crear petición
            </Link>
          </li>
          <li>
            <Link className="link" to="/pokemon">
              Pokemon
            </Link>
          </li>
          <li>
            <Link className="link" to="/drag">
              Drag
            </Link>
          </li>
          <li>
            <Link className="link" to="/heroes">
              Heroes
            </Link>
          </li>
          <li>
            <Link className="link" to="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className="link" to="/mui">
              Test MUI
            </Link>
          </li>
          <li>
            <Link className="link" to="/table">
              React-table
            </Link>
          </li>
          <li>
            <Link className="link" to="/form">
              Form Yup
            </Link>
          </li>
          <li>
            <Link className="link" to="/dot">
              Dot Test
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
