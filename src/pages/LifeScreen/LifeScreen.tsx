import { FC, useEffect, lazy, Suspense } from 'react'
const History = lazy(() => import('../../components/History/History'));
import Title from '../../common/Title/Title'
import Books from '../../components/Books/Books'
import Spinner from '../../components/Spinner/Spinner';

const LifeScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <Suspense fallback={<Spinner />}>
                <Title title={`Mustafa Kemal Atatürk’ün Hayatı`} />
                <History
                    img='https://i.pinimg.com/originals/c0/ba/9c/c0ba9c64ebda47bc4d3f9c49fe6cc3da.gif'
                    text={
                        <>
                            <p>
                                1881 yılında Selanik’te dünyaya gelen Atatürk’ün babası Ali Rıza Efendi annesi ise Zübeyde Hanım’dır. Zübeyde Hanım ve Ali Rıza Efendi’nin 6 çocuğundan dördüncüsü olan Mustafa Kemal, öğrenim hayatına, önce annesinin de isteğiyle Hafız Mehmed Efendi Mahalle Mektebi’nde başlamış ancak daha sonra, bu okuldan memnun olmaması sebebiyle babası tarafından Şemsi Efendi Mektebi’ne verilmiştir.
                            </p>
                            <p>
                                1893 yılında babası Ali Rıza Efendi’nin vefat etmesi üzerine eğitim hayatına ara vermek zorunda kalan Mustafa Kemal, annesi ile birlikte dayısının Langaza’daki çitliğine gitmiş ve yaklaşık 5 ay kadar burada kalmıştır.
                            </p>
                            <p>
                                5 ay süren çiftlik hayatından sonra yeniden Selanik’e dönen Mustafa Kemal, ortaokul eğitimini almak üzere önce Selanik Mülkiye Rüşdiyesi’nde daha sonra da annesinden gizli olarak sınavlarına girdiği Selanik Askeri Rüşdiyesi’nde eğitimine devam etmiştir. Kendisine matematik öğretmeni tarafından Kemal adının verilmesi de bu askeri ortaokulda gerçekleşmiştir.
                            </p>
                            <p>
                                Ortaokul eğitiminden sonra lise eğitimini almak için Selanik’ten ayrılan Mustafa Kemal, Manastır’a gitmiş ve buradaki Manastır Askeri İdadisi’nde eğitimi tamamlamıştır. Burada özellikle Tarih ve Edebiyat derslerinden oldukça etkilenen Mustafa Kemal, aynı zamanda Fransızca olan yabancı dilini geliştirme fırsatı da yakalamıştır.
                            </p>
                            <p>
                                Lise eğitiminden sonra yüksek öğrenimini tamamlamak için İstanbul’a gelen Mustafa Kemal; önce İstanbul Harp Okulu’na girerek 1902 senesinde buradan teğmen olarak mezun olmuş, daha sonra ise girdiği Harp Akademisi’nden 1905 yılında kurmay yüzbaşı olarak mezun olmuştur.
                            </p>
                            <p>
                                Öğrenim hayatı bittikten sonra ilk olarak Şam’da bulunan 5. Ordu’da stajını tamamlayan Mustafa Kemal; buradaki görevinin tamamladıktan sonra önce Manastır’da bulunan 3. Ordu karargahına daha sonra ise 3. Ordu Selanik 2. Redif Tümeni Kurmay Başkanlığı’na atanmıştır. Mustafa Kemal’in, 31 Mart Ayaklanmasını bastırmak için Harekât Ordusu ile birlikte İstanbul’a hareket etmesi de bu görevde iken gerçekleşmiştir.
                            </p>
                            <p>
                                1911 senesinde gönüllü olarak Trablusgarp Savaşı’na katılan Mustafa Kemal, burada Tobruk ve Derne bölgesinde savaştıktan sonra; Balkan Savaşları’na katılmış ve 1913 yılında Edirne’yi Bulgarlardan geri almıştır.
                            </p>
                            <p>
                                1914 yılında yarbay olduktan sonra kendi isteğiyle 1. Dünya Savaşı’na katılan Mustafa Kemal, Tekirdağ’da kurulacak olan 19. Tümen Komutanlığı’na atanmış ve Çanakkale Savaşı’nda büyük bir kahramanlık ile İtilaf güçlerinin Çanakkale’yi geçmelerine engel olmuştur. Çanakkale Savaşı’nın ardından 16. Kolordu Komutanlığına atanan Mustafa Kemal, Kafkas Cephesinde görevlendirilmiş ve bu dönemde Muş ile Bitlis’in Ruslardan geri alınmasını sağlamıştır.
                            </p>
                            <p>
                                1. Dünya Savaşı’nın ardından imzalanan Mondros Ateşkes Antlaşması sonrası, 9. Ordu Müfettişi olarak Samsun’a çıkan Mustafa Kemal burada Türk Kurtuluş Savaşı’nın fitilini ateşlemiş ve sırasıyla Erzurum ve Sivas Kongrelerini toplayarak vatanın kurtuluşu içi izlenecek yolları belirlemiştir. 1919 yılında Ankara’ya gelen Mustafa Kemal, 23 Nisan 1923 tarihinde açılan TBMM’nin meclis ve hükümet başkanlığına seçilmiştir.
                            </p>
                            <p>
                                1919 ile 1922 yılları arasında süren Kurtuluş Savaşı neticesinde Türk milletini bağımsızlığa kavuşturan Mustafa Kemal; önce 1922 yılında saltanatı kaldırmış daha sonra ise yeni Türk devletinin yönetim şeklini Cumhuriyet olarak belirlemiştir.
                            </p>
                            <p>
                                Bu tarihten itibaren Türkiye Cumhuriyeti’nin cumhurbaşkanı olarak görev yapan Mustafa Kemal; sosyal, siyasi, ekonomik ve hukuki nitelikleri olan bir dizi inkılapları gerçekleştirerek, bu yeni cumhuriyeti ve toplumu çağdaş bir devlet ve medeniyet haline getirmiş; Türkiye Cumhuriyeti’nin dünyanın saygın devletleri arasına sokmuştur.
                            </p>
                            <p>
                                1934 yılında çıkartılan Soyadı Kanunu ile birlikte TBMM tarafından kendisine Atatürk soyadı verilen Mustafa Kemal, özel hayatında ise 1923 yılında Latife Hanım ile evlenmiş ve bu evlilik 1925 yılına kadar sürmüştür. Ayrıca Mustafa Kemal Atatürk Afet, Sabiha, Fikriye, Ülkü, Nebile, Rukiye, Zehra isimli kızları ve Mustafa isminde bir erkek çocuğu evlat edinmiştir.
                            </p>
                            <p>
                                1937 yılından itibaren sağlığı bozulmaya başlayan Atatürk, son günlerini İstanbul’da doktorların gözetimi altında geçirmiş ve 10 Kasım 1938 Perşembe günü sabah 9’u 5 geçe Dolmabahçe Sarayı’nda hayatını kaybetmiştir.
                            </p>
                        </>
                    }
                />

                <Title title={`Mustafa Kemal Atatürk’ün yazdığı kitaplar`} />
                <Books />
            </Suspense>
        </main>
    )
}

export default LifeScreen
