import { FC, useState } from 'react'
import { BooksData } from '../../data/data'
import { BookProps } from '../../types/types'
import { lazy } from 'react';
const Slide = lazy(() => import('../Slide/Slide'));

const Books: FC = () => {

    const [open, SetOpen] = useState<boolean>(false)
    const [currentData, setCurrentData] = useState<BookProps>()

    const Handlebook = (book: BookProps) => {
        setCurrentData(book)
        SetOpen(true)
    }

    const CloseModal = () => {
        SetOpen(false)
        setCurrentData(undefined)
    }

    return (
        <section>

            <ul className='books-list'>
                {BooksData.map((book, index) => (
                    <div key={index} onClick={() => SetOpen(!open)}>
                        <li key={index} onClick={() => Handlebook(book)}>
                            <img loading='lazy' src={book.slide_img} alt={book.slide_txt} />
                            <h4>{book.slide_txt}</h4>
                        </li>
                    </div>
                ))}
            </ul>

            <Slide currentData={currentData} CloseModal={CloseModal} />

        </section>
    )
}

export default Books
