import React, { useEffect, useState } from 'react';
import "./Battle.scss";
import fetchUserDetails from "../../api/userDetails";

function Battle() {
  const [username, setUsername] = useState("username")

  useEffect(() => {
    fetchUserDetails().then((user) => {
      setUsername(user.name)
    })
  }, [])

  return (
    <div className='Battle'>
      <div className='container'>
      <div className="userSide">
          {username}
      </div>
      <div className="vs">
        VS
      </div>
      <div className="opponentSide">
          AI
      </div>
      </div>
      <button className='select'>choose difficulty</button>
    </div>
  )
}

export default Battle