import ItemSong, { Song } from './itemSong'
import Player from './player'

const Music = () => {
    const songTest: Song = {
        title: 'The Scientist',
        artist: 'Colplay',
        year: 2003,
        reproductions: 157434845,
        duration: 41300,
        albumImage: 'https://upload.wikimedia.org/wikipedia/en/6/64/Black_Sabbath_-_Paranoid.jpg',
        album: 'Paranoid (2009 Remastered Version)',
        albumDate: 303805840,
        albumNumberSongs: 8,
        albumDuration: 413000,
        genders: ['Egg punk', 'Noise rock'],
    }
    return (
        <div style={{ height: 'calc(100vh - 212px)' }}>
            <h1 className='text-center mb-4'>LISTA DE REPRODUCCIÓN</h1>
            <ul>
                <li>
                    <ItemSong isStarIconDisplayed={false} song={songTest} />
                </li>
            </ul>
            <Player />
        </div>
    )
}

export default Music
