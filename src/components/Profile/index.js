import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Profile = () => (
  <StaticQuery
    query={graphql`
      query MySiteMe {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({ site: { siteMetadata: { title }} }) => (
      <div className="Profile-wrapper">
        <h1>{title}</h1>
      </div>
    )}
  />
)

export default Profile
