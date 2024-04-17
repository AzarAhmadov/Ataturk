import { FC } from 'react'
import Video from '../../../public/video/ataturk.mp4'

const BackVideo: FC = () => {

    return (
        <div className='video'>
            <video autoPlay loop muted playsInline>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}

export default BackVideo
