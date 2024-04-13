import { FC } from 'react'
import { HistoryProps } from '../../types/types'

const History: FC<HistoryProps> = ({ img, text, title }) => {
    return (
        <section className='battles'>
            <h3 className='title'>
                {title}
            </h3>
            <div className='battles-detail'>
                <img src={img} alt={title} />
                <p>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default History
