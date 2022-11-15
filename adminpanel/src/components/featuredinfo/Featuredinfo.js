import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './featuredinfo.css'

function Featuredinfo() {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <span className='featuredTitle'>Revenu</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.45</span>
                <span className='featuredMoneyRate'>
                    -11.23 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className='featuredInfo'>Compared to last Month</span>
        </div>
        <div className='featuredItem'>
            <span className='featuredTitle'>Sales</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.45</span>
                <span className='featuredMoneyRate'>
                    -11.23 <ArrowDownward className='featuredIcon negative'/>
                </span>
            </div>
            <span className='featuredInfo'>Compared to last Month</span>
        </div>

        <div className='featuredItem'>
            <span className='featuredTitle'>Price</span>
            <div className='featuredMoneyContainer'>
                <span className='featuredMoney'>$2.45</span>
                <span className='featuredMoneyRate'>
                    -11.23 <ArrowUpward className='featuredIcon'/>
                </span>
            </div>
            <span className='featuredInfo'>Compared to last Month</span>
        </div>


    </div>
  )
}

export default Featuredinfo