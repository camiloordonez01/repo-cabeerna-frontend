import { faStar, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Player = () => {
    return (
        <div
            className='grid grid-cols-1 bg-warmGray-800'
            style={{
                position: 'absolute',
                bottom: '100px',
                left: '0',
                width: '100%',
                height: '82px',
            }}
        >
            <div className='grid grid-cols-10 py-2'>
                <div className='col-span-2 flex justify-center'>
                    <img
                        className='h-14'
                        src='https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg'
                        alt=''
                    />
                </div>
                <div className='col-span-6'>
                    <p style={{ color: '#F6BF63' }}>What Up?</p>
                    <p className='text-white'>4 Non Blondes</p>
                </div>
                <div className='col-span-1 flex justify-center'>
                    <FontAwesomeIcon
                        className='text-3xl m-auto pr-2'
                        style={{ color: '#F6BF63' }}
                        icon={faStar}
                    />
                </div>
                <div className='col-span-1 flex justify-center'>
                    <FontAwesomeIcon
                        className='text-3xl m-auto pr-2 text-white'
                        icon={faCircleCheck}
                    />
                </div>
            </div>
            <div>
                <div>
                    <span>02:30</span>
                    <span>05:45</span>
                </div>
                <div className='bg-gray-500'>
                    <hr style={{ width: '40%', height: '100%', background: '#F6BF63' }} />
                </div>

            </div>
        </div>
    )
}

export default Player
