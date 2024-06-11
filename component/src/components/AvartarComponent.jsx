import React from 'react'
import ImageComponent from './ImageComponent'

const AvartarComponent = ({username,image}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <ImageComponent avatar={image}/>
      <h1 className='text-4xl text-center font-bold'>{username}</h1>
    </div>
  )
}

export default AvartarComponent