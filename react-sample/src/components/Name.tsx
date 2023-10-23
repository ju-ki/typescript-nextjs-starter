import React from 'react'

export default function Name() {
    const onChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }
  return (
    <div style={{ backgroundColor:"grey" }}>
        <label htmlFor='name'>名前</label>
        <input id='name' className='input-name' type='text' onChange={onChange} />
    </div>
  )
}
