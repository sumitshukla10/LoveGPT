import React from "react";

import img from '../assets/img.jpg';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={img} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/sumitshukla10/vihaan6.0", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Get Your Summary with <br className='max-md:hidden' />
        <span className='blue_gradient '>LoveGPT-4 by Team Invalid</span>
      </h1>
      <h2 className='desc to-blue-500'>
        This AI model helps to summarise the bigger articles and paragraphs ,it helps to save time by providing the summary of given article and paragraph.
      </h2>
    </header>
  );
};

export default Hero;