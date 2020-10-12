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
      marginBottom: `1.45rem`,
    }}
  >
    <div class="header__logo-box">
        <img src={rightarrow} alt="logo-box" class="header__logo" />
        <h3 class="header__subtext">this guy</h3>
    </div>
    <div className="header__text-box">


      <h1 style={{ margin: 0 }}>
        <Link className="header-primary" to="/" >
          {siteTitle}
        </Link>
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
