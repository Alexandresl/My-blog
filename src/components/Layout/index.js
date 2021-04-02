import * as React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import GlobalStyles from '../../styles/global'
import * as S from './styled';



const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <navbar>
        <Profile />
      </navbar>
      <S.LayoutMain>{children}</S.LayoutMain>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
