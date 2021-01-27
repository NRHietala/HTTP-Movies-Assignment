import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const initialFormValues = {
  title: "",
  director: "",
  metascore: "",
}

const UpdateMovieForm = props => {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const { id } = useParams();

  const handleSubmit = e => {
    e.preventDefault();

  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }

  console.log(props)

  return (
    <div>
      <form onSubmit={handleSubmit} className="formGroup"></form>
      <label className="formLabel">Title: 
          <input
          className="formInput"
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleChange}
          value={formValues.title}
          />
        </label>
        <br/>
        <label className="formLabel">Director: 
          <input
          className="formInput"
          type="text"
          name="director"
          placeholder="Enter Director"
          onChange={handleChange}
          value={formValues.director}
          />
        </label>
        <br/>
        <label className="formLabel">MetaScore:  
          <input
          className="formInput"
          type="text"
          name="metascore"
          placeholder="Enter Metascore"
          onChange={handleChange}
          value={formValues.metascore}
          />
        </label>
        <br/>
        <button>Update Movie Data!</button>
    </div>
  )
}

export default UpdateMovieForm;
