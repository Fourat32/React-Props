import React from 'react'
import Handelename from './Handelename';
const Profile = ({fullName,bio,profession,alertme}) => {
  return (
    <div><Handelename/>
      <span>{fullName}</span><br></br>
      <span>{bio}</span><br/>
      <span>{profession}</span><br/>
      <button onClick={alertme}>alert</button>
      




    </div>
  )
}

export default Profile;