import React from 'react'
const UpdateMovieForm = props => {

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  console.log(props)
  return (
    <div>
      <form onSubmit={handleSubmit} className="formGroup"></form>
    </div>
  )
}

export default UpdateMovieForm;
