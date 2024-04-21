import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { toggleTheme } from '../../redux/slices/counterSlice'
import ThemeBtn from './ThemeBtn'

const Header = () => {
    return (
        <header className='  mb-3  p-2 p-md-4  '
        ><div className='container d-flex  justify-content-between align-items-center '>
                <Link className='fs-2  ' to='/'>TOOLKİT</Link>
                <nav className='d-flex align-items-center   gap-md-5 gap-2 me-3'>
                    <NavLink to={'/'}>Sayaç</NavLink>
                    <NavLink to={'/crud'}>CRUD</NavLink>

                </nav>
                <ThemeBtn />


            </div>
        </header>
    )
}

export default Header