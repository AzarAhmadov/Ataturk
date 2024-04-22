import { FC, useEffect, useRef, useState, memo } from 'react'
import Container from '../Container/Container'
import { BooksData } from '../../data/data'
import { BookProps } from '../../types/types';
interface SlideProps {
    CloseModal: () => void;
    currentData: BookProps | undefined;
}

const Slide: FC<SlideProps> = ({ CloseModal, currentData }) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1))
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                CloseModal();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [containerRef, CloseModal]);

    useEffect(() => {
        if (currentData) {
            const index = BooksData.findIndex(book => book.slide_img === currentData.slide_img && book.slide_txt === currentData.slide_txt)
            setCurrentSlide(index !== -1 ? index : 0)
        }
    }, [currentData])

    return (
        <section className={`slide ${currentData ? 'active' : null}`}>
            <Container>
                <div ref={containerRef} >
                    <button disabled={currentSlide === 0} onClick={prevSlide} className={`prev ${currentSlide === 0 ? 'disabled' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>

                    {
                        BooksData.map((el, idx) => (
                            <div key={idx} style={{ display: idx === currentSlide ? 'flex' : 'none' }}>
                                <img className={idx === currentSlide ? 'active' : ''} src={el.slide_img} alt={el.slide_txt} />
                                {/* <h4>
                                    {el.slide_txt}
                                </h4> */}
                            </div>
                        ))
                    }

                    <button onClick={nextSlide} className={`next ${currentSlide === BooksData.length - 1 ? 'disabled' : ''}`} disabled={currentSlide === BooksData.length - 1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>

                    <div onClick={CloseModal} className="close">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                </div>
            </Container>
        </section>

    )
}

export default memo(Slide)