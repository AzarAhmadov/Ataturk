import { FC, useEffect } from 'react'
import History from '../../components/History/History'
import Title from '../../common/Title/Title'

const FamilyScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Title title={`Atatürk'ün annesi Zübeyde Hanım`} />
            <History
                text={
                    <>
                        <p>
                            Atatürk'ün annesi Zübeyde Hanım, Hacı Sofu ailesinden Feyzullah Ağa'nın kızıdır. Zeki, sağduyulu, dine ve geleneklere bağlı bir kadındı. Oğlunun mahalle mektebine gelenekten olan ilâhilerle başlamasını istemişti. Ancak aşağıda göreceğimiz gibi oğlunun zamanın gerektirdiği biçimde yetişmesini engellememiş, hele kocası öldükten sonra onun iyi öğretim görmesine elinden geldiği kadar çalışmıştır.
                        </p>
                        <p>
                            Onun sağduyusu ve taşıdığı yüksek onur duygularının bir örneği aşağıdaki olayda görülür. O, daha Selanik'te bulundukları sırada oğlunun, kendi evinde, II inci Abdülhamit yönetimine karşı çalışan bir takım arkadaşlariyle yaptığı toplantıda nelerle uğraşıldığını öğrenince, padişaha karşı çalışmanın sonuçlarından ürkmüş, ancak Mustafa Kemal'in işi kendisine anlatması üzerine sorunu kavrayıp "gizli şeyleriniz varsa ben saklayayım, muvaffak olmak zordur, mahvolmak daha tabiidir" dedikten sonra şöyle konuşmuştur:"
                        </p>
                        <p>
                            "... evlâdım bir gün bu işler olduktan sonra seni namus ve haysiyet sahibi olanlarla görmezsem işte o zaman meyus olurum. Ben senin kadar okumadım, senin kadar bilmem, seni gördüğün, anladığın şeyleri yapmaktan menetmiye kalkışmam, yalnız dikkat et, esas muvaffak olmaktır, muvaffak olmaya çalış".
                        </p>
                    </>
                }
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfQ4_R0_0PqF0GSD-zZxOVQPJfL64scGhCEqXpMxe5ZlCICM6Cq7zN2ftzTvg8lwFmGA&usqp=CAU'
            />

            <Title title={`Atatürk'ün babası Ali Rıza Efendi`} />
            <History
                text={
                    <>
                        <p>
                            Selânik yerlilerindendi. Uzak dedeleri Vidin'den ayrılarak Serez'de yerleşmişler, oradan da Selânik'e gelmişlerdi. Ali Rıza Efendi, önce Selanik'te evkaf kâtipliği yapmıştır. Atatürk, onu az hatırladığını söylemekle birlikte zekâ ve azmini anar, modern düşünceli bir kimse olduğunu söylerdi. 1876 da Sırbistan'la savaş başladıktan sonra Selanik'te gönüllülerden bir "Asakiri Milliye" taburu kurulmuş ve Ali Efendi orada mülâzımı evvel (Üsteğmen) olmuştur.
                        </p>
                        <p>
                            II. Abdülhamid'in vehmi üzerine bu ve buna benzer birlikler dağıtıldıktan az sonra Ali Efendi'nin evkaftan çekilip rüsumat memuru olduğu anlaşılıyor. Daha sonra özel hayata atılıp kereste tüccarlığı yapmıştır.
                        </p>
                    </>
                }
                img='https://sozcuo01.sozcucdn.com/wp-content/uploads/2014/05/ali-r%C4%B1za-efendi-160.jpg'
            />
        </main>
    )
}

export default FamilyScreen
