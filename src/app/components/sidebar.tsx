"use client"
import { useEffect, useState } from 'react'
import './sidebar.css'

export default function Sidebar ({ children, open } : any ) {

    const [islight, setIslight] = useState(false)
    const toggle = (val: boolean) => {
        setIslight(val)
    }
    useEffect( () => {
        // console.log(`counter updated ${open}`);
        toggle(open);
    }, [open]);
      
    return (
        <div className={`sidebar ${islight ? "blocklight" : "blockdark"}`}>
            {children}
        </div>)

  }