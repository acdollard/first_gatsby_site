import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import rightarrow from "../../images/right.png"

import '../../css/main.css'

const Header = ({ siteTitle }) => (
  <header
    className="header"
    style={{
      // background: '#28b485',
      // marginBottom: `1.45rem`,
    }}
  >

    <div className="header__text-box">
      <h1 className="header-primary" >
          {siteTitle}
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
