import React, { useState, useEffect } from 'react';
import {Header} from '../../components';
import {ProjectDetails} from '../../components';
import {Loader as Loading} from '../../components';

function ProjectDetailsPage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if (loading) {
    return (
      <section className="loader-wrapper">
        <Loading />
      </section>
    );
  }

  return (
    <>
      <div><Header /></div>  
      <section className='project-details-section'><ProjectDetails /></section>  
    </>
  )
}

export default ProjectDetailsPage