import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { Modal } from '@mui/material'

const Movie = ({ item }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                })
            })
        } else {
            alert('Please log in to save a movie')
        }
    }

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str;
        }
    }

    return (
        <>
            <div id='ifImgNull' onClick={handleOpen} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img onError={e => {
                    e.target.setAttribute('src', 'https://img.freepik.com/free-photo/black-concrete-wall_24972-1046.jpg');
                }} className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='whitespace-pre-wrap white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                    <p onClick={saveShow}>{like ? <FaHeart className='absolute top-4 left-4 text-gray-400' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-400' />}</p>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex items-center justify-center'>
                {/* <div className='w-[80%] h-[80%] outline-none'><img className='w-[80%] h-[80%] absolute block 
                object-cover' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} /></div> */}
                <div className='w-[80%] h-[80%] outline-none'>
                    <div className='absolute w-[80%] h-[80%] bg-gradient-to-r from-black'></div>
                    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt={item?.title} />
                    <div className='absolute w-[80%] top-[30%] p-4 md:p-8'>
                        <h1 className='text-3xl md:text-5xl font-bold text-white'>{item?.title}</h1>
                        <div className='my-4'>
                            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                        </div>
                        <p className='text-gray-400 text-sm'>Released: {item?.release_date}</p>
                        <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(item?.overview, 150)}</p>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Movie