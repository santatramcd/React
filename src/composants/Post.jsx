import React from 'react'

export default function Post({data, liker , supression}) {
  return (
    <div className='container' >
        <div className={data.liker ? 'p-2 bg-light border mt-2 active' : 'p-2 bg-light border mt-2'}>
            <h2>{data.titre}</h2>
            <p> {data.description} </p>
            <div>
                <button className='btn' onClick={()=>liker(data)}>{data.liker ? "Déjà liker" : "Liker"}</button>
                <button className='btn delete' onClick={()=>supression(data.id)}>Effacer</button>
            </div>
        </div>
    </div>
  )
}
