import Forms from "./components/formulario"

import React from 'react';
export default function Home() {
return (
    <body >
      <div className='w-full flex flex-col justify-center items-center bg-white sm:h-screen h-auto py-10 sm:px-0 px-10'>
      <Forms/>
      </div>
      
    </body>
  );
}