import React from 'react';
const Footer = () => {
  return (
    <>
      <footer class="bg-sky-800" translate='no'>
        <section className='flex flex-wrap items-center justify-center py-6 lg:p-6'>
          <div className='flex justify-start'>
            <a href="https://www.instagram.com/" data-tippy-content="instagram"
              className='cursor-grab'>
              <img src='./assest/instagram.png'
                className='fill-current w-7 h-7 hover:scale-110' /></a>
            <a href="https://www.facebook.com/صوفاتك-658378061026720/" data-tippy-content="facebook"
              target='_blank'
              className='pl-10 cursor-grab hover:scale-110'>
              <img src='./assest/facebook.png'
                className='fill-current w-7 h-7' /></a>
            <a href="https://wa.me/+962795152466" data-tippy-content="WhatsApp"
              className='pl-10 cursor-grab hover:scale-110' >
              <img src='./assest/whatsapp.png'
                className='fill-current w-7 h-7' /></a>
          </div>
        </section>
        <section class="flex flex-wrap items-center justify-center">
          <a target='_blank' href="https://wrekat.vercel.app">
            <div class="flex items-center mb-3 text-amber-400">
              <p class="font-serif text-xs cursor-help hover:scale-110 leading-4">2022 <span class="font-serif">MHMAD
                WREKAT</span></p>
              <div class="border-l border-gray-800 cursor-help pl-2 ml-2">
                <p class="font-serif text-xs cursor-help hover:scale-110 leading-4">Inc. All Rights Reserved</p>
              </div>
            </div>
          </a>
        </section>
      </footer>
    </>
  )
}
export default Footer