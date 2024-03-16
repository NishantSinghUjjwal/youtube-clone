import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <nav className=' bg-white flex px-6 py-2 border'>
            <button onClick={toggle}>Menu</button>
            <span>Logo</span>
            <SearchBar />
        </nav>
    )
}

export default Navbar