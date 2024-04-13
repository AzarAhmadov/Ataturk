import { FC } from 'react'
import { TopDescriptionProps } from '../types/types'

const TopDescription: FC<TopDescriptionProps> = ({ title, desc1, desc2, img1, img2 }) => {
    return (
        <section className='top-detail'>
            <div className="row">
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {desc1}
                    </p>
                    <p className='bottom-txt'>
                        {desc2} 
                    </p>
                </div>
                <div className='img-row'>
                    <div>
                        <img src={img1} alt="Mustafa Kamal Atatürk" />
                    </div>
                    <div>
                        <img src={img2} alt="Mustafa Kamal Atatürk" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopDescription
