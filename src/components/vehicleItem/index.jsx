import { Link } from 'react-router-dom'
export default function VehicleItem({ marca, matricula }) {
  return (
    <>
      <Link to={`/detail/${matricula}`}>{marca}</Link>
    </>
  )
}
