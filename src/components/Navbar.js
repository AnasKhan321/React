import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(propos) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${propos.mode}  bg-${propos.mode}`} style={{backgroundColor:"#e3f2fd!important"}}>
      <div className="container-fluid">
        <a className={`navbar-brand`} href="#">{propos.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="about">About Us </a>
            </li>

          </ul>
         <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={propos.changemode}/>
        <label className={`form-check-label text-${propos.mode == 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark Mode </label>
        </div>


      <div className="form-check form-switch mx-2">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={propos.SkyBluemode}/>
        <label className={`form-check-label text-${propos.mode == 'light'?'dark':'light'} `} htmlFor="flexSwitchCheckChecked">Enable SkyBlue Dark  Mode </label>
      </div>
        </div>
      </div>


   
    </nav>


  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired 
};


Navbar.defaultProps = {
	title : "this si news "
}