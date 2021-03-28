import * as React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"

const Layout = ({ children }) => {
  return (
    <>
      <navbar>
        <Profile />
      </navbar>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
