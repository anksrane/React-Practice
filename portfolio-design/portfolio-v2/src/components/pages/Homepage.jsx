import React from 'react'
import {Header} from '../../components';
import {Hero} from '../../components';
import {Projects} from '../../components';
import {Skills} from '../../components'

function Homepage() {
  return (
    <>
        <div><Header /></div>
        <div><Hero /></div>
        {/* <div><Projects /></div> */}
        <div><Skills /></div>
    </>
  )
}

export default Homepage
