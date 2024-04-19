import { FC, memo } from 'react'
import { TopDescriptionProps } from '../../types/types'
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
                    {
                        desc2 && <p className='bottom-txt'>
                            {desc2}
                        </p>
                    }
                </div>
                <div className='img-row'>
                    <div>
                        <LazyLoadImage
                            alt={'Mustafa Kamal Atatürk'}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "200ms" },
                            }}
                            key={img1}
                            src={img1}
                        />
                    </div>
                    <div>
                        <LazyLoadImage
                            alt={'Mustafa Kamal Atatürk'}
                            effect="blur"
                            wrapperProps={{
                                style: { transitionDelay: "200ms" },
                            }}
                            key={img2}
                            src={img2}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(TopDescription)
