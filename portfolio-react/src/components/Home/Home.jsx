import './Home.css';
import homeBanner from '../../assets/about.jpg';
import Social from '../Social/Social';
import Data from './Data'

function Home() {
  return (  
  <section className="home section" id="home">
    <div className="grid home_container">
      <div className="grid home-content">
        <Social />
        <Data></Data>
        <div className="w-100px h-100px profile_img" style={{ backgroundImage: `url(${homeBanner})` }}></div>
      </div>
    </div>
  </section> 
  )
}

export default Home
