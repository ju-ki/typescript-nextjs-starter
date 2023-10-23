import React from 'react'

export default function Message(props:{content:string}) {
    const {content} = props;
  return (
    <div>
      <p className='text'>{content}</p>
    </div>
  )
}
