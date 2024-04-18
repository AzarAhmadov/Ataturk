import { FC, memo } from 'react'
import { HistoryProps } from '../../types/types'

const History: FC<HistoryProps> = ({ img, text }) => {
    return (
        <section className='battles'>
            <div className='battles-detail'>
                <div className='img-area'>
                    <img src={img} />
                </div>
                {text}
            </div>
        </section>
    )
}

export default memo(History)
