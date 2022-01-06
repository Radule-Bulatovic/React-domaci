import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function App() {

  const [form, setForm] = useState({
    username: null,
    first: null,
    last: null,
    email: null,
    password: null,
    password_confirmation: null
  })

  const [errors, setErrors] = useState({
    username: null,
    first: null,
    last: null,
    email: null,
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
    let tempErrors = { ...errors };

    let usernameReg = /[a-zA-Z]{6,12}/
    if (!usernameReg.test(form.username)) {
      NotificationManager.error('Username must have between 6 and 12 characters!', 'Error!', 5000);
      tempErrors.username = true;
    } else {
      tempErrors.username = false;
    }

    if (!form.first) {
      NotificationManager.error('First name is required field!', 'Error!', 5000);
      tempErrors.first = true;
    } else {
      tempErrors.first = false;
    }

    if (!form.last) {
      NotificationManager.error('Last name is required field!', 'Error!', 5000);
      tempErrors.last = true;
    } else {
      tempErrors.last = false;
    }

    let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(form.email)) {
      NotificationManager.error('Email must have valid form!', 'Error!', 5000);
      tempErrors.email = true;
    } else {
      tempErrors.email = false;
    }

    let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/;
    if (!passwordReg.test(form.password)) {
      NotificationManager.error('Password is required field, and must have uppercase, lowercase, number and special character!', 'Error!', 5000);
      tempErrors.password = true;
    } else {
      tempErrors.password = false;
    }

    if (form.password !== form.password_confirmation || !form.password_confirmation) {
      NotificationManager.error('Password confirmation is required and must match password', 'Error!', 5000);
      tempErrors.password_confirmation = true;
    } else {
      tempErrors.password_confirmation = false;
    }

    setErrors({ ...tempErrors })
    if(Object.values(tempErrors).find(e => e === true)) return;

    let url = "https://jsonblob.com/api/928434760578252800";
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((response) => response.json())
      .then((data) => NotificationManager.success('You have successfuly registered!', 'Succes'))
      .catch((error) => NotificationManager.error('Server error!', 'Error!', 5000))
  }

  return (
    <div className="container" >
      <div className="row">
        <form className="card white-text blue-grey darken-1 col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="username" value={form.username} type="text" className={`white-text ${errors.username === true ? "invalid" : "valid"}`} />
              <label htmlFor="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col offset-m3 s3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="first" value={form.first} type="text" className={`white-text ${errors.first === true ? "invalid" : "valid"}`} />
              <label htmlFor="first">First name</label>
            </div>

            <div className="input-field col s3">
              <i className="material-icons prefix">account_circle</i>
              <input onChange={handleChange} id="last" value={form.last} type="text" className={`white-text ${errors.last === true ? "invalid" : "valid"}`} />
              <label htmlFor="last">Last name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">email</i>
              <input onChange={handleChange} id="email" value={form.email} type="email" className={`white-text ${errors.email === true ? "invalid" : "valid"}`} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">vpn_key</i>
              <input onChange={handleChange} id="password" value={form.password} type="password" className={`white-text ${errors.password === true ? "invalid" : "valid"}`} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 offset-m3">
              <i className="material-icons prefix">vpn_keyx</i>
              <input onChange={handleChange} id="password_confirmation" value={form.password_confirmation} type="password" className={`white-text ${errors.password_confirmation === true ? "invalid" : "valid"}`} />
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
      <NotificationContainer />
    </div >
  );
}

export default App;
