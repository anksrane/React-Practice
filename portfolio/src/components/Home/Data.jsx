import DownloadButton from './DownloadButton';
import "./Home.css";
import hand from '../../assets/hand-svg.svg'

function splitText(text) {
  return text.split("").map((char, index) => (
    <span key={index}>{char}</span>
  ));
}

function Data({firstHalfRef,secondHalfRef, positionFirstRef,positionSecondRef}) {
  return (
    <div className='data-main-container'>
      <h1 className='name'>
      <span ref={firstHalfRef} className='firstName'>{splitText("Ankit")}</span> <span ref={secondHalfRef} className='lastName'>{splitText("Rane")}</span> <img src={hand} alt="" className='img-responsive'/></h1>
      <h5 className="position">
      <span ref={positionFirstRef} className='firstName'>{splitText("Frontend")}</span> <span ref={positionSecondRef} className='lastName'>{splitText("Developer")}</span></h5>
      <p className='info'>I am Frontend Developer based in India, and I am very passionate and dedicated to my work</p>
      <DownloadButton />
    </div>
  )
}

export default Data
