import React from 'react'
import ItemHeroes from './ItemHeroes'

export default function Heroes() {
  return (
    <>
      <div className='heroes w-full h-auto'>
        <div className='w-[1280px] h-full m-auto py-[24px] bg-slate-300'>
          <ItemHeroes />
        </div>
      </div>
    </>
  )
}
