import { FC } from 'react'
import Cards from '../Cards/Cards'
import signature from '../../../public/images/signature.png'

const CardsArea: FC = () => {
    return (
        <section id='cards' className='cards-area'>
            <img src={signature} alt={'imza'} />
            <Cards />
            <p className='text'>
                "Mənim naciz bədənim bir gün torpaq olacaqdır,
                ancaq Türkiyə Cümhuriyyəti əbədi olaraq yaşayacaqdır"
            </p>
        </section>
    )
}

export default CardsArea
