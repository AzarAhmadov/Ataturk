import { FC } from 'react'
import Container from '../Container/Container'
import BackVideo from '../BackVideo/BackVideo'
import { Link } from 'react-router-dom'

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
                        <p className='bottom-txt'>
                            O, 57 illik həyatına 11 müharibə, 24 medal, 7 orden, 13 kitab, 1 ölkə və milyonlarla azad insan sığdıran böyük hərbçi, siyasət və dövlət xadimidir. Sevgi, hörmət, minnət və həsrətlə...
                        </p>
                    </div>
                    <div className="right">
                        <img src="https://agm.org.tr/wp-content/uploads/2021/12/1-2.jpg" alt="Mustafa Kemal Atatürk" />
                    </div>
                </div>
            </section>

            <BackVideo />

            <div className='arrow'>
                <a href='#cards'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path></svg>
                </a>
            </div>
        </Container>
    )
}

export default Hero
