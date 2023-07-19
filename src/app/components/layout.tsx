"use client"
import './globals.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { useState } from 'react'

import {
  Button,
  Header,
  HeaderName,
  HeaderMenuButton,
  // HeaderGlobalBar,
  // HeaderNavigation,
  // HeaderMenu,
  // HeaderMenuItem,
  HeaderSideNavItems,
  HeaderMenuItem,
  HeaderMenu,
  SideNav,
  SideNavItems,
  Theme
} from "@carbon/react";


export default function Layout({
  children,
}: any) {

  const [isSidebar, setIsSidebar] = useState(false)
  const toggleSidebar = () => {
    setIsSidebar(!isSidebar)
  }

  return (
    <html>
      <body>
      <Header aria-label="IBM Platform Name">
          <HeaderMenuButton aria-label={isSidebar ? 'Close menu' : 'Open menu'} onClick={toggleSidebar} isActive={isSidebar} aria-expanded={isSidebar} />
          <HeaderName href="#" prefix="IBM">
            [Platform]
          </HeaderName>
          <SideNav aria-label="Side navigation" 
          expanded={isSidebar} 
          isPersistent={false} 
          onSideNavBlur={toggleSidebar}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/dashboard">Link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                <HeaderMenuItem isActive href="#">
                  Sub-link 2
                </HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </Header>
      <main>{children}</main>
      </body>
    </html>
  )
}
