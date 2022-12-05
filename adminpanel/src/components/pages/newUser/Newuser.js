import React, { useContext, useState } from 'react'
import './newuser.css'
import storage from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createUser } from '../../context/userContext/apiCalls';
import { UserContext } from '../../context/userContext/UserContext';

export default function Newuser() {
  const [user,setUser]=useState(null)

  const {dispatch} = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleupload=(e)=>{
    const file=e.target.files[0];
    const name=e.target.name;
    const fileName = new Date().getTime() + name;
        const storageRef = ref(storage, `/files/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
            console.log(error);
        },
        ()=> {
            getDownloadURL(uploadTask.snapshot.ref).then(file=>{
                setUser(prev=>{
                    return {...prev, [name]: file}
                });
            })
        })
  }
  const handleSubmit=(e)=>{
    e.preventdefault();
    createUser(user,dispatch)
  }
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter username" onChange={handleChange} />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter email id" onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter password" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label for='file'>Image Upload</label>
          <input type="file" id='file' name='profilePic' onChange={handleupload}/>
        </div>
      
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}