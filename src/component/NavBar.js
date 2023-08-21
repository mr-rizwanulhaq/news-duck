import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top container-fluid">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsDuck</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar 
