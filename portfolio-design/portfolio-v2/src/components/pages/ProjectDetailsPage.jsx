import React, { useEffect } from 'react';
import {Header} from '../../components';
import {ProjectDetails} from '../../components';

function ProjectDetailsPage() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
      <div><Header /></div>  
      <section><ProjectDetails /></section>  
    </>
  )
}

export default ProjectDetailsPage