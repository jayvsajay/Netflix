import React from 'react'
import './home.css'
import Featuredinfo from '../../featuredinfo/Featuredinfo'
import Chart from '../../Chart/Chart'
import {userData} from '../../dummydata'
import WidgetSm from '../../WidgetSm/WidgetSm'
import WidgetLg from '../../WidgetLg/WidgetLg'
import axios from 'axios'
import { useEffect,useMemo,useState } from "react";
function Home() {
  const Months =useMemo(()=>[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],[]
  )
  const [userstats,SetuserStats] = useState([])
  useEffect(()=>{
    const getUsers = async () => {
      try{
        const res = await axios.get('/users/stats',
        {headers:{
          authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjRiNjRkNGEwMzcwNDAwNGMyN2U4OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODUxMzYwNiwiZXhwIjoxNjY4OTQ1NjA2fQ.w-twfyu9AQWhfpMNqM8Yz-0FnIlhJdR7NMoepTU4l4o'
      }});
      const statsList = res.data.sort(function(a,b){
        return a._id - b._id;
      })
        statsList.map((item)=>
        SetuserStats((prev)=>[
          ...prev,
          {name:Months[item._id - 1], 'New User':item.total},
        ]))
      }catch(e){
        console.log(e)
      }
    }
    getUsers();
  },[Months])
  console.log(userstats)
  return (
    <div className='homepage'>
  <Featuredinfo/>
  <Chart title='User Analytics' data={userstats} grid dataKey='New User'/>
  <div className='homewidgets'>
    <WidgetSm/>
    <WidgetLg/>
  </div>
    </div>
  )
}

export default Home