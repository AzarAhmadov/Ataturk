import { FC, memo } from 'react'
import { HistoryProps } from '../../types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const History: FC<HistoryProps> = ({ img, text }) => {

    return (
        <section className='history'>
            <div className='history-detail'>
                <div className='img-area'>
                    <LazyLoadImage
                        alt={'Mustafa Kamal Atatürk'}
                        effect="blur"
                        wrapperProps={{
                            style: { transitionDelay: "100ms" },
                        }}
                        src={img} />
                </div>
                <div className='history-text'>
                    {text?.map((el, idx) => (
                        <p key={idx}>
                            {Object.values(el)[0]}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(History)
