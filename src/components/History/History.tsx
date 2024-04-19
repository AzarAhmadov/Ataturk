import { FC, memo } from 'react'
import { HistoryProps } from '../../types/types'
import sanitizeHtml from "sanitize-html"

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
                    <img src={img} />
                </div>
                <div className='history-text' dangerouslySetInnerHTML={createMarkup()} />
            </div>
        </section>
    )
}

export default memo(History)
