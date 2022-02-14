import React from 'react';
import Head from 'next/head';
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <Head>
        <title>صوفاتك</title>
        <link rel="icon" href="./assest/favicon.png" />
        <meta name="description" content="Hand Wool - Amman-Abunsair" />
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
      </Head>
      <section className='' translate='no'>
        <nav class=" flex items-center justify-between flex-wrap bg-sky-800 lg:p-6 p-2">
        <a href="https://wa.me/+962795152466" data-tippy-content="WhatsApp">
            <button translate='no'
              class="cursor-grab bg-gradient-to-r from-amber-300 to-amber-600 ... animate-bounce text-white font-bold py-2 px-4 rounded-full">
              أطلب الآن
            </button>
          </a>
          <div class="flex items-center flex-shrink-0 text-white lg:mr-6 mr-0">
            <Link href='/'>
              <div className='flex items-center flex-shrink-0 mr-0 text-white'>
              <img src='./assest/logoo.png'
                  class="fill-current h-12 w-12 cursor-grab lg:mr-2 mr-0" />
                  <span class="cursor-grab font-semibold text-xl tracking-tight lg:mx-6 mx-3">صوفاتك</span>
              </div>
            </Link>
          </div>
          <a href="https://www.facebook.com/صوفاتك-658378061026720/" data-tippy-content="facebook"
              target='_blank'
              className='cursor-grab hover:scale-110'>
              <img src='./assest/facebook.png'
                className='fill-current w-7 h-7' /></a>
        </nav>
      </section>
      <div className='lg:pt-0'>
        <img src='./assest/hero.jpg' class="w-full" />
        <div className='hidden sm:flex'>
        </div>
      </div>
      <section className='absolute w-full text-center sm:hidden top-20'>
        <section className='relative'>
          <div class="relative py-5 sm:hidden overflow-hidden rounded-lg  cursor-pointer">
          </div>
        </section>
      </section>
    </>
  )
}
export default Nav