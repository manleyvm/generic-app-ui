"use client"
import { useState } from 'react'
import './navbar.css'
import classes from './navbar.module.scss'

export default function Navbar({
  children
}: any) {

  const [islight, setIslight] = useState(false)
  const toggle = () => {
      setIslight(!islight)
  }

    return (<div className={classes.navbar}>
        {children}
        </div>)

  }