import React from 'react'

const SearchBar = () => {
    return (
        <form className=' flex items-center mx-auto border rounded-full p-2'>
            <input className=' outline-none border-none' placeholder='Search' />
            <button>Search</button>
        </form>
    )
}

export default SearchBar