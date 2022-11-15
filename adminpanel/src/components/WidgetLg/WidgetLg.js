import React from 'react'
import './widgetLg.css'
function WidgetLg() {
  
  const Button= ({type})=>{
    return <button className={"widgetLgButton " + type}>{type}</button>;
    
  }
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Transaction history</h3>
      <table className='widgetLgTb'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
            alt=''
            className='widgetLgimg'/>
            <span className='widgetLgName'>Ajay</span>
          </td>
          <td className='widgetLgDate'>12:00pm</td>
          <td className='widgetLgAmount'>$1200</td>
          <td className='widgetStatus'>
          <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
            alt=''
            className='widgetLgimg'/>
            <span className='widgetLgName'>Ajay</span>
          </td>
          <td className='widgetLgDate'>12:00pm</td>
          <td className='widgetLgAmount'>$1200</td>
          <td className='widgetStatus'>
          <Button type="Pending" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetLgimg'/>
            <span className='widgetLgName'>Ajay</span>
          </td>
          <td className='widgetLgDate'>12:00pm</td>
          <td className='widgetLgAmount'>$1200</td>
          <td className='widgetStatus'>
          <Button type="Decline" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetLgimg'/>
            <span className='widgetLgName'>Ajay</span>
          </td>
          <td className='widgetLgDate'>12:00pm</td>
          <td className='widgetLgAmount'>$1200</td>
          <td className='widgetStatus'>
          <Button type="Approved" />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td>
            <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt=''
            className='widgetLgimg'/>
            <span className='widgetLgName'>Ajay</span>
          </td>
          <td className='widgetLgDate'>12:00pm</td>
          <td className='widgetLgAmount'>$1200</td>
          <td className='widgetStatus'>
          <Button type="Approved" />
          </td>
        </tr>
        
      </table>
      </div>

  )
}

export default WidgetLg