import React from 'react'

const ImageComponent = (props) => {
  return (
    <div>
      <img className="rounded-full w-[340px] h-[370px] pt-[30px]" src={props.avatar} alt={props.username}/>
    </div>
  )
}

export default ImageComponent
