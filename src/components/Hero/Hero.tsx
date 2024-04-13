import { FC } from 'react'
import Container from '../Container/Container'
import BackVideo from '../BackVideo/BackVideo'

const Hero: FC = () => {
    return (
        <Container>
            <section className='hero'>
                <div className="hero-row">
                    <div className="left">
                        <h1>
                            Mustafa Kamal Atatürk
                        </h1>
                        <p>
                            “Türkiyə Cümhuriyyəti öndəri"
                        </p>
                    </div>
                    <div className="right">
                        <img src="https://agm.org.tr/wp-content/uploads/2021/12/1-2.jpg" alt="Mustafa Kemal Atatürk" />
                    </div>
                </div>
            </section>
            <BackVideo />
        </Container>
    )
}

export default Hero
