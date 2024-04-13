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
                            Mustafa Kemal Atatürk
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

            <div className='arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path></svg>
            </div>
        </Container>
    )
}

export default Hero
