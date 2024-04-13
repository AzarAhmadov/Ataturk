import { FC } from 'react'
import Cards from '../Cards/Cards'
import signature from '../../../public/images/imza.png'

const CardsArea: FC = () => {
    return (
        <section className='cards-area'>
            <img src={'https://beylikduzu.com/wp-content/uploads/ataturk-imza-kirmizi-png.png'} alt={'imza'} />
            <Cards />
            <p className='text'>
                "Mənim naciz bədənim bir gün torpaq olacaqdır,
                ancaq Türkiyə Cümhuriyyəti əbədi olaraq yaşayacaqdır"
            </p>
        </section>
    )
}

export default CardsArea
