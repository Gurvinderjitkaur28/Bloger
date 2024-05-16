import React from 'react'
import { Navbar,TextInput,Button,DarkThemeToggle, NavbarCollapse} from "flowbite-react"
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";


const Header = () => { 
  const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2 dark:text-white '>
 <Link to="/" className="self-center text-sm whitespace-nowrap sm:text-lg font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                  Gurvinder
                </span>
                Blog
            </Link>

         <form>
            <TextInput 
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className=''
            />
         </form>
         
        

            <div className='flex gap-2 md:order-2'>
            <DarkThemeToggle>
          </DarkThemeToggle>
       <Link to='/signin'><Button  outline gradientDuoTone="purpleToBlue">
        SignIn
      </Button>
       </Link>
       
      </div>
      <Navbar.Toggle/>
      <NavbarCollapse>
          
          <Navbar.Link active={path=='/'}as={'div'}>
         <Link to='/'>Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path=='/about'}as={'div'}>
         <Link to='/about'>About</Link>
          </Navbar.Link>

          <Navbar.Link active={path=='/projects'}as={'div'}>
         <Link to='/projects'>Projects</Link>
          </Navbar.Link>

        </NavbarCollapse>
      
    </Navbar>

)
}

export default Header