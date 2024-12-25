import React from 'react'
import { Outlet } from 'react-router-dom'

function Protectedroutes() {
  return (
    <div>
             <Outlet/>
    </div>
  )
}

export default Protectedroutes
