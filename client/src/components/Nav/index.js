import { Link } from 'react-router-dom'
import './index.scss'

export default function Index() {
  return (
    <nav>
      <div className='container'>
        <div className='row'>
          <h2 className='brand'> Notary </h2>
          <ul className='links'>
            <li>  <Link to='/'> Home  </Link>  </li>
            <li> <Link to='/add'> Add </Link>   </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
