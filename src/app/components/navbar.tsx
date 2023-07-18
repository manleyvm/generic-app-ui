"use client"
import { useState } from 'react'
import './navbar.css'

export default function Navbar({
  children
}: any) {

  const [islight, setIslight] = useState(false)
  const toggle = () => {
      setIslight(!islight)
  }

    return (<div className='navbar'>
        {children}
        </div>)

  }