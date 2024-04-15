import { FC } from 'react'
import { HistoryProps } from '../../types/types'

const History: FC<HistoryProps> = ({ img, text }) => {
    return (
        <section className='battles'>
            <div className='battles-detail'>
                <div className='img-area'>
                    <img src={img} />
                </div>
                <p>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default History
