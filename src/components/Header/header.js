import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import rightarrow from "../../images/right.png"


import '../../css/main.css'

const Header = ({ siteTitle, linkTo, destination }) => (
  <header className="header">
  
    <div className="header__text-box">
      <h1 className="header-primary" >
          {siteTitle}
      </h1>
    </div>
    <Link className="btn btn__header btn--animated" to={linkTo}>{destination}</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
