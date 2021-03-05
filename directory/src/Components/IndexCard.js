import React from 'react'

const IndexCard = (props) => {
  const {data, index} = props

  return (
    <div className='card'>
      <div className='card-number'>
        <h1>{data[index].id}/25</h1>
      </div>
      <div>
        <h1 className='name'>{data[index].name.first} {data[index].name.last}</h1>
      </div>
      <h2 className='location'>From: {data[index].city}, {data[index].country}</h2>
      <h2 className='jobTitle'>Job Title: {data[index].title}</h2>
      <h2 className='employer'>Employer: {data[index].employer}</h2>
      <br/>
      <h2 className='movie'>Favorite Movies</h2>
      <ol className='movieList'>{data[index].favoriteMovies.map(elem => <li>{elem}</li>)}</ol>
    </div>
  ) 
}

export default IndexCard