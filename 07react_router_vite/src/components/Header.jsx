import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
    <nav>
      <ul>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header
