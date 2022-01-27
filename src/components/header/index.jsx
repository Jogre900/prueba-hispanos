import './styles.css'
export default function Header({ children, className }) {
  return <header className={className + ' d-flex header'}>{children}</header>
}
