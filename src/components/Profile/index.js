import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query MySiteMe {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="Profile-wrapper">
      <h1>{title}</h1>
    </div>
  )
}

export default Profile
