import { Button, Navbar } from 'flowbite-react'
import React from 'react'

function Header() {
  return (
    <div>
     <Navbar
  style={{background:'none'}}
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
   <h1 className='text-3xl font-bold'>Elfood<span className='text-primary'>.</span></h1>
   
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Button className="bg-primary hover:opacity-40 hover:bg-primary">
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse color='primary'>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Header
