import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import capData from './data/capData.json';
import PageCarosal from '../components/PageCarosal';
import { Slide } from "react-awesome-reveal";
const cap = () => {
  return (
  <>
    <Nav />
    <section translate='no' className='py-10 bg-gradient-to-r from-sky-200 to-sky-100 ...'>
      <Slide triggerOnce delay={1000}>
        <PageCarosal />
      </Slide>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-3 py-2 mx-auto lg:pt-12 lg:px-10">
          <div class="flex flex-wrap -m-1 md:-m-2">
            {
              capData.map(item => {
                return <>
                  <div class="flex flex-wrap lg:w-1/3 w-1/2">
                    <div class="relative w-full p-1 md:p-2">
                      <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={item.img}
                        onClick={() => { window.open(`${item.img}`, '_self') }}
                      />
                      <div className='absolute w-11/12 text-white rounded-full lg:top-5 top-2'>
                        <p className='pl-1'>
                          <span class="sm:px-2 sm:py-1 py-0 px-2 text-sm font-bold leading-none text-white bg-amber-600 rounded-full">{item.price} JD</span>
                          <a href="https://wa.me/+962795152466" data-tippy-content="WhatsApp" target='_blank'>
                            <span class="py-1 sm:px-2 sm:py-1 px-1 text-base font-bold leading-none float-left rounded-full bg-amber-600">
                              <img src='https://cdn-icons-png.flaticon.com/512/3523/3523887.png' className='w-6 h-6'></img>
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </section>
    </section>
    <Footer />
  </>
  )
}
  export default cap