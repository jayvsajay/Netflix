import React from 'react'
import './user.css';
import { Link, useLocation } from 'react-router-dom';
import { Publish } from '@material-ui/icons';
function User() {
  const location = useLocation();
  const user = location.state.user;
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h3 className='userTitle'>Edit User</h3>
        <Link to='/newuser'>
        <button className='userBtn'>Create</button>
        </Link>
       </div> <div className='userContainer'>
          <div className='userShow'>
          <div className='userShowTop'>
            <img src={user.profilePic || '/avatar.jpeg'} alt='' className='userShowImg'/>
              <div className='userShowTopTitle'>
                <spn className='userShowusername'>{user.username}</spn> 
              </div>
            </div>
          </div> 
          
          <div className='userUpdate'>
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                />
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={user.profilePic || '/avatar.jpeg'}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        
          
        </div>
      </div>
        <div>
          
        </div>
    </div>
  )
}

export default User