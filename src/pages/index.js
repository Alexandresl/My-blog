import * as React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Página Home</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color: "red"}}>Home</Link>
      </li>
      <li>
        <Link to="/about"  activeStyle={{ color: "red"}}>About</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
