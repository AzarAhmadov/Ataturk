import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/error/ErrorPage'
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import TopDescription from '../common/TopDescription/TopDescription';
import BattlesScreen from '../pages/BattlesScreen/BattlesScreen';
import LifeScreen from '../pages/LifeScreen/LifeScreen';
import Footer from '../common/Footer/Footer';
import FamilyScreen from '../pages/FamilyScreen/FamilyScreen';
import ScroolBtn from '../common/ScroolBtn/ScroolBtn';
import MobileMenu from '../components/MobileMenu/MobileMenu';

export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <>
                <App />
                <Footer />
                <ScroolBtn />
            </>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Ataturk/battles",
        element:
            <>
                <Header />
                <Container>
                    <TopDescription
                        title='Atatürk’ün Qatıldığı Müharibələr'
                        desc1='Atatürk 1909-1923-cü illər arasında 10 müharibədə iştirak edib'
                        desc2=' "Müharibə lazımlı və həyati olmalıdır. Millətin həyatı təhlükəyə məruz qalmazsa, müharibə qətldir" '
                        img1='https://pbs.twimg.com/media/FAenTbAWQAMuSQd.jpg'
                        img2='https://i.pinimg.com/originals/f3/f4/8f/f3f48f17bee3246b572259dd1b13b2a2.jpg'
                    />
                    <BattlesScreen />
                </Container>
                <MobileMenu />
                <ScroolBtn />
            </>,
    },
    {
        path: "/Ataturk/life",
        element:
            <>
                <Header />
                <Container>
                    <TopDescription
                        title='Atatürk’ün Hayatı'
                        desc1='Mustafa Kemal Atatürk (1881-1938)'
                        desc2='Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.'
                        img1='https://upload.wikimedia.org/wikipedia/commons/a/a1/Atat%C3%BCrk_%28renkli%29.jpg'
                        img2='https://images.saatchiart.com/saatchi/1848335/art/10488713/9551205-OQYGLFKS-7.jpg'
                    />
                    <LifeScreen />
                </Container>
                <MobileMenu />
                <ScroolBtn />
            </>
        ,
    },
    {
        path: "/Ataturk/family",
        element:
            <>
                <Header />
                <Container>
                    <TopDescription
                        title='Atatürk’ün ailəsi'
                        desc1={`Babası Ali Rıza Efendi, annesi Zübeyde Hanım'dır`}
                        desc2=''
                        img1='https://upload.wikimedia.org/wikipedia/commons/4/43/Z%C3%BCbeyde_Han%C4%B1m.jpg'
                        img2='https://upload.wikimedia.org/wikipedia/commons/9/99/Portrait_of_a_volunteer_officer_of_the_Ottoman_Civilian_Battalion.jpg'
                    />
                    <FamilyScreen />
                </Container>
                <MobileMenu />
                <ScroolBtn />
            </>
        ,
    },
]);