import React from 'react'

export default function Greetings() {
    const username = "Abhishek Salvi"
    const date = new Date();
    const hour = date.getHours() 
    
    // const getHour = () => {
    //     const date = new Date();
    //     const hour = date.getHours()
        
    //    }
    // console.log(hour)
    return (
       
        <div className='App'>
            {hour < 12 ? `Good Morning ${username}` : `Good evening ${username}`}
        </div>
  )
}
