import React, { useState } from 'react';
import axios from 'axios';

const initialFormValues = {
  // id: Date.now(),
  title:"",
  director:"",
  metascore:"",
  // stars:[]
}

const AddMovie = props => {
  const { movieList, setMovieList } = props;

  const [ formValues, setFormValues ] = useState(initialFormValues);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/movies`, JSON.stringify(formValues))
      .then(res => {
        setMovieList([...movieList, res.data]);
      })
      .catch(err => {
        console.log(err)
      });
  }

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className="formGroup">
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
          <button>Add a Movie!</button>
      </form>
    </div>
  )
}

export default AddMovie
