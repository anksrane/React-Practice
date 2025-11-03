import React from 'react'
import {Header} from '../../components';
import {Hero} from '../../components';
import {Skills} from '../../components';
import {Journey} from '../../components';
import {Projects} from '../../components';

function Homepage() {
  return (
    <>
        <section><Header /></section>
        {/* <section><Hero /></section>
        <section><Skills /></section>
        <section><Journey /></section> */}
        <section><Projects/></section>
    </>
  )
}

export default Homepage
