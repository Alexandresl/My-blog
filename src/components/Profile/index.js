import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import Avatar from '../Avatar';

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
      <Avatar />
      <h1>{title}</h1>
    </div>
  )
}

export default Profile
