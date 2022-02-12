import React from 'react';
import Nav from '../components/Nav';
import Home from './Home';
import Footer from '../components/Footer';
import Maincarosal from '../components/Maincarosal';
import { Slide } from "react-awesome-reveal";
const index = () => {
  return (
    <>
      <section translate='no' className='bg-gradient-to-r from-sky-200 to-sky-100 ...'>
        <Nav />
        <Slide triggerOnce delay={1000}>
        <Maincarosal />
        </Slide>
        <Home />
        <Footer />
      </section>
    </>
  )
};
export default index;