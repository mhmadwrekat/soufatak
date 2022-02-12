import React from 'react';
import Link from "next/link";
const Home = () => {
  return (
    <>
      <section translate='no'
        className='grid grid-cols-2 justify-items-center ... gap-10 py-10 mx-3 sm:mx-0 sm:grid-cols-2 sm:gap-5'>
        {/* Cap */}
        <section>
          <div class="flex flex-wrap justify-center">
            <Link href='/cap'>
              <div class="px-4 relative">
                <img src="./assest/cap.jpg" alt="..."
                  class="w-48 h-40 lg:w-96 lg:h-96 shadow-2xl rounded-full hover:scale-110 max-w-full align-middle border-none" />
                <section>
                  <div className='absolute w-9/12 px-3 py-2 bg-black rounded-full opacity-75 lg:px-6 lg:py-4 left-5 top-24 lg:w-8/12 lg:left-16 lg:top-60 cursor-grab'>
                    <h4 className='text-xs font-bold text-center lg:text-xl text-amber-500'>
                      طواقي ولفحات
                    </h4>
                  </div>
                </section>
              </div>
            </Link>
          </div>
        </section>
        {/* Socks */}
        <section>
          <div class="flex flex-wrap justify-center">
            <Link href='/socks'>
              <div class="px-4 relative">
                <img src="./assest/socks2.jpg" alt="..."
                  class="w-48 h-40 lg:w-96 lg:h-96 shadow-2xl hover:scale-110 rounded-full max-w-full align-middle border-none" />
                <section>
                  <div className='absolute w-8/12 px-3 py-2 bg-black rounded-full opacity-75 cursor-grab lg:px-6 lg:py-4 left-6 top-24 lg:w-8/12 lg:left-16 lg:top-60'>
                    <h4 className='text-xs font-bold text-center lg:text-xl text-amber-500'>
                      كلاكيل    </h4>
                  </div>
                </section>
              </div>
            </Link>
          </div>
        </section>
        {/* Dress */}
        <section className='lg:pt-16'>
          <div class="flex flex-wrap justify-center">
            <Link href='/dress'>
              <div class="px-4 relative">
                <img src="./assest/dress.jpg" alt="..."
                  class="w-48 h-40 lg:w-96 hover:scale-110 lg:h-96 shadow-2xl rounded-full max-w-full align-middle border-none" />
                <section>
                  <div className='absolute w-8/12 px-3 py-2 bg-black rounded-full opacity-75 cursor-grab lg:px-6 lg:py-4 left-6 top-24 lg:w-8/12 lg:left-16 lg:top-60'>
                    <h4 className='text-xs font-bold text-center lg:text-xl text-amber-500'>
                      فساتين    </h4>
                  </div>
                </section>
              </div>
            </Link>
          </div>
        </section>
        {/* Blooz */}
        <section className='lg:pt-16'>
          <div class="flex flex-wrap justify-center">
            <Link href='/blouse'>
              <div class="px-4 relative">
                <img src="./assest/blouse.jpg" alt="..."
                  class="w-48 h-40 lg:w-96 hover:scale-110 lg:h-96 shadow-2xl rounded-full max-w-full align-middle border-none" />
                <section>
                  <div className='absolute w-8/12 px-3 py-2 bg-black rounded-full opacity-75 cursor-grab lg:px-6 lg:py-4 left-6 top-24 lg:w-8/12 lg:left-16 lg:top-60'>
                    <h4 className='text-xs font-bold text-center lg:text-xl text-amber-500'>
                      بلايز    </h4>
                  </div>
                </section>
              </div>
            </Link>
          </div>
        </section>
      </section>
      <br></br>
      <br></br>
    </>
  )
}
export default Home