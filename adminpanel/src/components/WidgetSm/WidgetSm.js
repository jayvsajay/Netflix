import { Visibility } from '@material-ui/icons'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './widgetSm.css'
function WidgetSm() {

    const [users,setUsers] = useState([])

    useEffect(()=>{

        const getuserdata = async () => {
            try {
                const res = await axios.get('/users?new=true',{
                    headers:{
                        authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjRiNjRkNGEwMzcwNDAwNGMyN2U4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODUxMzYwNiwiZXhwIjoxNjY4OTQ1NjA2fQ.w-twfyu9AQWhfpMNqM8Yz-0FnIlhJdR7NMoepTU4l4o'
                    },
                });
                setUsers(res.data)
            }catch(e){
                console.log(e)
            }
        }
        getuserdata();
    },[])
    console.log(users)
  return (
    <div className='widgetsm'>
        <span className='widgetTitle'>New Join Memeber</span>
        <div className='widgetItem'>
            <ul className='widgetListItem'>
                {users.map(user => (
                <li className='widgetList'>
                    <img className='widgetimage'
                     src={user.profilePic || 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
                      alt=''/>
                    <div className='widgetsmUser'>
                    <span className='widgetName'>{user.username}</span>
                   
                    </div>
                    <button className='widgetButton'>
                    <Visibility className='Icon'/>
                        display
                        </button>
                 
                </li>
            ))}
               
            </ul>
        </div>
    </div>
  )
}

export default WidgetSm