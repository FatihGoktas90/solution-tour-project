

import React from 'react'

const Card = (data) => {
    console.log("ne geliyor",data);
  return (
    <div className='cards'>
        <div className="title">
            <h1>{data.title}</h1>
            
        </div>
        <img src={data.image}  />
        <div className="card-over">
            <p>
                {data.desc}
            </p>
        </div>

    </div>
  )
}

export default Card