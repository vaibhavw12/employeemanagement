import React from 'react'
import './Dashboard.css'
import ProgressBar from './Progress_bar'

export default function Dashboard() {

    const productivity = [
        {day : 'Monday', unit : 4},
        {day :'Tuesday', unit : 60},
        {day :'Wednesday', unit : 53},
        {day :'Thrusday', unit : 87},
        {day :'Friday', unit : 15},
        {day :'Saturday', unit : 93},
        {day :'Sunday', unit : 21}
    ]
  return (
    <div>
        <div className='dashboard-header-box'>
            <header className='dashboard-header'>Employee Productivity Dashboard</header>
        </div>
        <div>
            <div className='displayUnits'>
            {productivity.map((day, index)=>(
                <div className='eachDay' key={index}>
                    <span className='each'>
                        <span style={{color:'whitesmoke',marginBottom:'1vh'}}>
                            production on {day.day}
                        </span>
                        <span>
                            {day.unit}%
                        </span>
                    </span> 
                    <span className='progressBar'>
                        <ProgressBar bgcolor="#36A54680"
                            progress={day.unit}>    
                        </ProgressBar>
                    </span>
                </div>   
            ))}
            </div>
        </div>
    </div>
  )
}
