import App from '../App'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../components/error/ErrorPage'
import Header from '../components/Header/Header';
import Container from '../components/Container/Container';
import TopDescription from '../common/TopDescription';
import BattlesScreen from '../pages/BattlesScreen/BattlesScreen';
import LifeScreen from '../pages/LifeScreen/LifeScreen';

export const router = createBrowserRouter([
    {
        path: "/Ataturk",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/Ataturk/battles",
        element:
            <Container>
                <Header />
                <TopDescription
                    title='Atatürk’ün Qatıldığı Müharibələr'
                    desc1='Atatürk 1909-1923-cü illər arasında 10 müharibədə iştirak edib'
                    desc2=' "Müharibə lazımlı və həyati olmalıdır. Millətin həyatı təhlükəyə məruz qalmazsa, müharibə qətldir" '
                    img1='https://pbs.twimg.com/media/FAenTbAWQAMuSQd.jpg'
                    img2='https://i.pinimg.com/originals/f3/f4/8f/f3f48f17bee3246b572259dd1b13b2a2.jpg'
                />
                <BattlesScreen />
            </Container>,
    },
    {
        path: "/Ataturk/life",
        element:
            <Container>
                <Header />
                <TopDescription
                    title='Atatürk’ün Hayatı'
                    desc1='Atatürk 57 Yaşına kadar yaşamıştır. Ve 57 Yıllık hayatında bütün yaşadıkları sanki bir mucizedir.'
                    desc2='Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir.'
                    img1='https://upload.wikimedia.org/wikipedia/commons/a/a1/Atat%C3%BCrk_%28renkli%29.jpg'
                    img2='https://i.pinimg.com/736x/eb/e0/f5/ebe0f5037f4901bdf03c78b38f8314bc.jpg'
                />
                <LifeScreen />
            </Container>
        ,
    },
]);