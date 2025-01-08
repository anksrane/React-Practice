import './Home.css';
import homeBanner from '../../assets/DV-Home-Hero-Image.jpg';

function Home() {
  return (
    // <div className='h-full'>
    //   {/* <h1>Home Page</h1> */}
    //     {/* <img src={homeBanner} alt="" className='w-full h-auto max-w-full'/> */}
    //     <img src={homeBanner} alt="" className='w-full h-auto max-w-full'/>
    // </div>
  <section className="fixed top-0 h-screen w-full flex items-center justify-center bg-gray-900">
    <img
      src={homeBanner} // Replace with your image file path
      alt={homeBanner}
      className="absolute inset-0 object-fill w-full h-full"
    />
    <div className="relative text-center text-white">
      <h1 className="text-2xl sm:text-4xl font-semibold">Hello, my name is</h1>
      <h2 className="text-3xl sm:text-5xl font-bold mt-2">Daniel Vaszka</h2>
    </div>
  </section>    
  )
}

export default Home
