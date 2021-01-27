import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
  title:"",
  director:"",
  metascore:""
}

const UpdateMovieForm = props => {
  const { movieList, setMovieList } = props;

  const [ formValues, setFormValues ] = useState(initialFormValues);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(res => {
            setFormValues(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
        .put(`http://localhost:5000/api/movies/${id}`, formValues)
        .then(res => {
            setMovieList([...movieList, res.data]);
            history.push('/');
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
          <button>Update Movie Data!</button>
      </form>
    </div>
  )
}

export default UpdateMovieForm;
