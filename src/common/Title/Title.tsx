import { FC, memo } from 'react'
import { HistoryProps } from '../../types/types'

const Title: FC<HistoryProps> = ({ title }) => {
    return (
        <h3 className='title'>
            {title}
        </h3>
    )
}

export default memo(Title)
