import React from 'react'

function Conditionreturn() {
    const a = "after";
  
        if(a==="morning")
        {
            return <h1>this is morning </h1>
        }
        else if(a==="evening")
        {
            return <h2 className='text-danger'>this is evening</h2>
        }
        else if(a==="after")
        {
            return(
                <div className='bg-warning p-5'>
                    <h2 className='text-danger'>this is after noon</h2>
                </div>
            );
        }
        else
        {
            return <h1>this is default value</h1>
        }

    
}

export default Conditionreturn