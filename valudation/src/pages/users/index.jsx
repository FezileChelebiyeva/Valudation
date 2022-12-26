import React from 'react'
import { Helmet } from "react-helmet";

const UsersPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Users</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Users</h1>
    </div>
  )
}

export default UsersPage