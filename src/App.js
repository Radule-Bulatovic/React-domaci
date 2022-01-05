import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [form, setForm] = useState({
    username: null,
    first: null,
    last: null,
    password: null,
    password_confirmation: null
  })

  const [errors, setErrors] = useState({
    username: null,
    first: null,
    last: null,
    password: null,
    password_confirmation: null
  })

  const handleChange = (e) => {
    let temp = { ...form };
    temp[e.target.id] = e.target.value;
    setForm(temp);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.username) {
      console.log("Username is required field!");
      setErrors(prev => {return {...prev, username: true}})
    }else if(form.username.length < 6 || form.username.length > 12) {
      console.log("Username must be between 6 and 12 characters long!");
      setErrors(prev => {return {...prev, username: true}})
    }
    
    if(!form.first) console.log("First name is required field!");
    if(!form.last) console.log("Last name is required field!");




  }

  return (
    <div className="container" >
      <div className="row">
        <form className="card white-text blue-grey darken-1 col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="username" type="text" className={`validate white-text ${errors.username === true ? "invalid" : null}`} />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col offset-m3 s3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="first" type="tel" className={`validate white-text ${errors.first === true ? "invalid" : null}`} />
              <label htmlFor="first">First name</label>
            </div>

            <div className="input-field col s3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="last" type="tel" className={`validate white-text ${errors.last === true ? "invalid" : null}`} />
              <label htmlFor="last">Last name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">vpn_key</i>
              <input onChange={handleChange} id="password" type="tel" className={`validate white-text ${errors.password === true ? "invalid" : null}`} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">vpn_keyx</i>
              <input onChange={handleChange} id="password_confirmation" type="tel" className={`validate white-text ${errors.password_confirmation === true ? "invalid" : null}`} />
              <label htmlFor="password_confirmation">Confirm password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-m3">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
}

export default App;
