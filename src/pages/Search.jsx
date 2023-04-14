import React, { useState } from 'react'
import axios from 'axios'
import Movie from '../components/Movie'

const Search = () => {
    const [input, setInput] = useState('')
    const [movies, setMovies] = useState([])

    const search = async () => {
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bc82d6bf08fa029ebf385caf1382f11c&language=en-US&query=${input}&page=1`)
        console.log(data);
        setMovies(data.data.results)
    }

    return (
        <div>
            <div className='w-full text-white flex flex-col justify-center items-center'>
                <img
                    className='w-full h-[200px] object-cover'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
                    alt='/' />

                <form className='mt-5 w-[80%]'>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input  onChange={(e)=>{
                            setInput(e.target.value);
                            search()
                        }} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Movies, shows and more" required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

<div className='mt-3 flex justify-center items-center'>
                <div className='w-[80%]'>
                    {movies.map((item, id) => {
                        return <div
                        key={item.id}
                        className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] sm:h-[160px] md:h-[180px] lg:h-[200px] inline-block cursor-pointer relative p-2'>
                        <img onError={e => {
                    e.target.setAttribute('src', 'https://img.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg');
                }}
                            className='w-full h-auto block'
                            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                            alt={item?.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                {item?.title}
                            </p>
                        </div>
                    </div>
                    })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Search