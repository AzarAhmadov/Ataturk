import { FC, memo } from 'react'
import { HistoryProps } from '../../types/types'
import sanitizeHtml from "sanitize-html"
import { LazyLoadImage } from 'react-lazy-load-image-component'

const History: FC<HistoryProps> = ({ img, text }) => {

    const createMarkup = () => {
        if (typeof text === 'string') {
            return { __html: sanitizeHtml(text) };
        }
    }

    return (
        <section className='history'>
            <div className='history-detail'>
                <div className='img-area'>
                    <LazyLoadImage
                        alt={'Mustafa Kamal Atatürk'}
                        effect="blur"
                        wrapperProps={{
                            style: { transitionDelay: "300ms" },
                        }}
                        src={img} />
                </div>
                <div className='history-text' dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </section>
    )
}

export default memo(History)
