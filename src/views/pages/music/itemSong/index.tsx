import { useState } from 'react'
import { faStar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface Song {
    title: string
    artist: string
    year: number
    reproductions: number
    duration: number
    albumImage: string
    album: string
    albumDate: number
    albumNumberSongs: number
    albumDuration: number
    genders: string[]
}
interface Data {
    isStarIconDisplayed: boolean
    song: Song
}

const ItemSong = ({ isStarIconDisplayed, song }: Data) => {
    const [isInfoDisplayed, setIsInfoDisplayed] = useState(false)

    const handleInfoDisplayed = () => {
        setIsInfoDisplayed(!isInfoDisplayed)
    }
    return (
        <div className='bg-white rounded-lg shadow-lg py-2 px-5'>
            <div className='grid grid-cols-2 gap-0'>
                <div>
                    <h3 className=' font-semibold'>{song.title}</h3>
                    <h3>{song.artist}</h3>
                </div>
                <div className='text-right pt-2'>
                    {isStarIconDisplayed ? (
                        <FontAwesomeIcon
                            className='text-3xl m-auto pr-2'
                            style={{ color: '#F6BF63' }}
                            icon={faStar}
                        />
                    ) : (
                        ''
                    )}
                    <FontAwesomeIcon
                        className='text-2xl m-auto'
                        icon={isInfoDisplayed ? faChevronUp : faChevronDown}
                        onClick={handleInfoDisplayed}
                    />
                </div>
            </div>
            <div className={`grid mt-3 ${isInfoDisplayed ? '' : 'hidden'}`}>
                <div className='grid grid-cols-3 gap-0 text-xs'>
                    <div>
                        <h5 className='font-semibold'>Año</h5>
                        <p>{song.year}</p>
                    </div>
                    <div className='text-center'>
                        <h5 className='font-semibold'>Reproducciones</h5>
                        <p>{song.reproductions.toLocaleString()}</p>
                    </div>
                    <div className='text-right'>
                        <h5 className='font-semibold'>Duración</h5>
                        <p>{song.duration}</p>
                    </div>
                </div>
                <div className='flex mt-3 mb-5'>
                    <img className='h-20' src={song.albumImage} alt='' />
                    <div className='grid grid-cols-1 gap-0 content-between pl-3 text-xs'>
                        <p>{song.album}</p>
                        <p>{song.albumDate}</p>
                        <p>{song.albumNumberSongs} Canciones</p>
                        <p>{song.albumDuration}</p>
                    </div>
                </div>
                <div className='text-xs mb-3'>
                    {song.genders.map((gender, index) => (
                        <span
                            key={`itemGender${index + 1}`}
                            className='bg-black text-white px-3 py-0.5 rounded mr-3'
                        >
                            {gender}
                        </span>
                    ))}

                    <span className='bg-black text-white px-3 py-0.5 rounded mr-3'>Noise Rock</span>
                </div>
            </div>
        </div>
    )
}

export default ItemSong
