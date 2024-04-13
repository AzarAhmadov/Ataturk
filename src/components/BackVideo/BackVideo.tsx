import { FC } from 'react'
import Video from '../../../public/video/ataturk.mp4'

const BackVideo: FC = () => {

    return (
        <div className='video'>
            <video
                src={Video}
                muted
                autoPlay
                loop
            />
        </div>
    )
}

export default BackVideo
