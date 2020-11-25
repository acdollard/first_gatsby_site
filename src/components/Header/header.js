import { Link } from "gatsby"
import React from "react"


import '../../css/main.css'

const Header = ({ siteTitle, linkTo, destination, className }) => (
  <header className={className}>
  
    <div className="header__text-box">
      <h1 className="header-primary" >
          {siteTitle}
      </h1>
    <Link className="btn btn__header btn--animated" to={linkTo}>{destination}</Link>
    </div>
  </header>
)

export default Header;
