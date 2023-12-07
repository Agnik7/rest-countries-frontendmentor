import React from 'react';

export default function HomePage({darkTheme}) {

  return (
    <div className='w-full  bg-light-bg h-[50rem]'>
        <div>
          <h1>Search</h1>
        </div>
        <h1 className='text-[3rem]'>{(darkTheme)?"True":"False"}</h1>
    </div>
  )
}
