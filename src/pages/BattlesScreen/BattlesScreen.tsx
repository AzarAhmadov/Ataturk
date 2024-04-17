import { FC, useEffect } from 'react'
import History from '../../components/History/History'
import Title from '../../common/Title/Title'

const BattlesScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>

            <Title title='Qurtuluş Savaşı' />
            <History
                text={
                    <>
                        <p>
                            Türk ordusunun büyük bir azimle savaştığı bir cephe olan Kurtuluş Savaşı Cephesi 31 Mart 1921 senesine kadar sürmüş ve çok kanlı geçmiştir. Mustafa Kemal Bu savaş sonrası `milletin makus talihini yenen bir savaş olmuştur` şeklinde bir ifade ile bu savaşın önemini anlatmıştır.
                        </p>
                    </>
                }
                img='https://www.gelincanlar.com/wp-content/uploads/2019/10/ataturk-askerlik-yillari.jpg'
            />

            <Title title='Çanakkale Savaşı' />
            <History
                text={
                    <>
                        <p>
                            Birinci Dünya Savaşı esnasında Osmanlı Devleti’nin savaştığı en güçlü cephelerden bir tanesi Çanakkale Cephesi olmuştur. Birinci Dünya Savaşı’nın en kanlı cephelerinden birisi olan Çanakkale Cephesi’nde Rusya’ya yardım etmek isteyen İngiltere ve Fransa ile savaşılmıştır.Fransa ve İngiltere’nin Rusya’ya yardım etmek istemesinin altında yatan neden ise Rusya’nın zayıflayan ekonomisini güçlendirerek Rusya’nın Osmanlı Devleti’ni savaş dışı bırakmasını sağlayabilmekti.
                        </p>
                        <p>
                            Bu amaçlar ile Fransa ve İngiltere Çanakkale Cephesi’ne bir saldırı düzenlediler. İlk olarak deniz savaşları ile başlayan Çanakkale Savaşı İngiliz ve Fransız’ların Çanakkale Boğazı’ndan geçiş sırasında ağır kayıplar vermesi ile ilerledi. Denizde ağır kayıplar veren bu devletler Gelibolu’ya asker çıkararak Osmanlı Devleti’ne karadan saldırmayı planlamışlarsa da Gelibolu’da Mustafa Kemal Atatürk’ün komutasındaki Türk ordusu, bu saldırıyı yine denizde olduğu gibi başarılı bir şekilde önlemeyi başarmıştır.
                        </p>
                        <p>
                            Gelibolu Yarımadası’nda Mustafa Kemal Atatürk’ün düşman askerlerine karşı gösterdiği başarısı onun albaylık rütbesine yükselmesini sağlamıştır. Bu savaşlar sırasında yaklaşık olarak 253.000 subay, er ve erbaş şehit olmuştur. Düşman orduları Fransız ve İtalyanlar ise yine aynı şekilde Türkler kadar çok kayıplar vermişler ve 1915 senesin 20 Aralık tarihinde Anafartalar ve Arıburnu’ndan kesin olarak çekilmişlerdir.
                        </p>
                    </>
                }
                img='https://foto.haberler.com/haber/2021/02/03/canakkale-savasi-tarihi-canakkale-savasi-kisaca-13906031_5274_amp.jpg'
            />

            <Title title='Doğu (Kafkas) Cephesi' />
            <History
                text={
                    <>
                        <p>
                            Mustafa Kemal Atatürk 11 Mart 1916 tarihinde Kolordu Komutanı olarak Diyarbakır, Muş ve Bitlis cephesinde Ruslara ve Ruslar ile birleşen Ermenilere karşı savaşmıştır. 8 Ağustos 1916 tarihinde Bitlis’de ve 14 Mayıs 1917 tarihinde Muş cephesinde düşmana karşı zafer elde edilmiş ve bu bölgeler düşman işgalinden kurtulmuştur. 1 Nisan 1916 tarihinde Mustafa Kemal Atatürk’e Doğu (Kafkas) Cephesi olarak da bilinen Diyarbakır, Muş ve Bitlis cephelerinde göstermiş olduğu başarısından dolayı Tuğgenerallık Rütbesi verilmiştir. Bu cephede gösterilen başarı sonrası Rus birlikleri geri çekilmiştir.
                        </p>
                    </>
                }
                img='https://iasbh.tmgrup.com.tr/5da3f2/650/344/0/0/720/377?u=https://isbh.tmgrup.com.tr/sbh/2020/12/13/1607858251827.jpg'
            />

            <Title title='Suriye-Filistin Cephesi' />
            <History
                text={
                    <>
                        <p>
                            1914 senesinde Süveyş Kanalı’na tamamen sahip olan İngilizler 1917 senesinde de Gazze’ye saldırmışlardır. Burada geçen savaşlar Birinci ve İkinci Gazze Savaşları olarak geçmektedir. Türklerin göstermiş olduğu başarısı sonrası İngilizler Gazze’de bir yenilgi elde etmişlerdir. Bu yenilgi sonrası takviye güçleri ile askeri gücünü kuvvetlendiren İngilizler, Filistin Cephesi’ne yoğun baskılar yapmışlardır.
                        </p>
                        <p>
                            Bu süre içerisinde 7. Ordu Komutanlığı’na atanmış olan Mustafa Kemal Atatürk Yıldırım Ordular Komutanı General Falkenhayn ile yaşadığı anlaşmazlık üzerine bu görevinden istifa etmiştir.
                            24 Ekim 1917 tarihinde İngilizler 138.000 asker ile taarruza geçmişler ve Birusseba-Gazze savaşını kazanmışlardır. 1918 senesinde Mustafa Kemal Atatürk istifa ettiği 7. Ordu Komutanlığı’na yeniden dönerek İngilizlere karşı orduyu komuta etmiştir. Asker sayısını 460.000 e çıkaran İngilizler ise Filistin’i ele geçirmeyi başarmışlardır.
                        </p>
                        <p>
                            Bu cephede Mustafa Kemal Atatürk, hem İngilizlere hem de Arap silahlı çetelerine karşı savaşmıştır. Sonunda İngilizleri durdurmayı başarmış ve 31 Ekim 1918 Mondros Mütarekesi sonrası Yıldırım Ordular Grubu Komutanlığı’na atanmıştır.
                        </p>
                    </>
                }
                img='https://sozcuo01.sozcucdn.com/wp-content/uploads/2018/07/ataturk-sinan-meydan.jpg'
            />

            <Title title='Sakarya Savaşı' />
            <History
                text='Mustafa Kemal Atatürk Yunanlara karşı savaşılan bu cepheye 18 Temmuz 1921 tarihinde bizzat gelerek gözlemlemiştir. Ordunun yeniden güçlendirilebilmesi için Sakarya’ya kadar çekilmesini söyleyen Atatürk Yunan ordularına karşı bir şans elde etmiştir. Bu cephede savaşırken Başkomutan unvanı alan Atatürk, 12 Ağustos 1921 günü bu unvanı ile ordunun başına geçmiştir.'
                img='https://tssf.gov.tr/wp-content/uploads/2021/09/Sakarya-Meydan-Muharebesinin-100uncu-yil-donumu.jpg '
            />


            <Title title='Trablusgarp Savaş' />
            <History
                title='Trablusgarp Savaş'
                text={
                    <>
                        <p>
                            1911-1921 Türk-İtalyan Savaşı olarak da geçen savaş Osmanlı İmparatorluğu ile İtalya arasında geçmiştir. Bu savaş genel olarak Adriyatik Denizi, Ege Adaları, Çanakkale boğazı ve Kızıldeniz üzerinde gerçekleşmiştir. Birinci Balkan Savaşı’nın da aynı zamanda başlaması üzerine sahip olduğu askeri gücü birçok savaş arasında paylaştırması sonucu başarısızlığa uğrayan Osmanlı İtalya’ya karşı yenilmiş ve bu yenilgi sonucu Trablusgarp, Fizan ve Sirenayka bölgelerini kaybetmiştir.
                        </p>
                        <p>
                            Daha sonra ise bu bölgelerin birleşmesi ile Libya Devleti kurulmuştur. Savaş sırasında her ne kadar İtalyan Güçleri Rodos ve Oniki Ada’yı kuşatmış olsalar da savaş sonrası imzalanan Uşi antlaşması ile Oniki Ada yeniden Osmanlı’ya verilmiştir.
                        </p>
                        <p>
                            Trablusgarp Savaşı sırasında Mustafa Kemal Atatürk binbaşı rütbesi ile Tobruk Muharebesini yöneterek askeri alandaki başarısını göstermiştir. 8 Ekim tarihinde başlayan Balkan Savaşları nedeni ile Osmanlı İtalya ile anlaşmaya razı olmuş ve savaştan çekilmiştir. Savaş sonucu İtalya’nın şartları kabul edildi ve 15 Ekim 1912’de İsviçre’nin Ouchy (Uşi) kentinde antlaşma imzalandı.
                        </p>
                    </>
                }
                img='https://www.murselcavus.com/wp-content/files/2019/07/TRABLUSGARP.png'
            />


            <Title title='İkinci Balkan Savaşı' />
            <History
                title='İkinci Balkan Savaşı'
                text={
                    <>
                        <p>
                            Balkan Savaşları sırasında dört ülkeye karşı birden savaşan Osmanlı Devleti, Balkan Savaşları’nı kaybetmiştir. Bu savaş sonrası Londra Antlaşması imzalanmıştır. Bu antlaşmaya göre, Osmanlı Devleti Balkan ve Trakya topraklarını kaybetmiştir. İkinci Balkan Savaşı’da Balkan Devletleri’nin kazandıkları toprakları kendi aralarında paylaşamamaları sonucu çıkmıştır. Bu sırada Trablusgarp’ta ordu komutasında görev yapan Mustafa Kemal Atatürk ise bu savaşın sonra ermesi ile İstanbul’a dönmüş ve İkinci Balkan Savaşı’nın patlak vermesi ile Gelibolu’da yeniden görevlendirilmiştir.
                        </p>
                        <p>
                            İkinci Balkan Savaşı sırasında Trakya’da gösterdiği başarısından dolayı Mustafa Kemal Atatürk Sofya ateşeliğine atanmıştır. Osmanlı Devleti’nin Birinci Balkan Savaşı ile Gelibolu ve Trakya’da kaybettiği toprakların bir kısmını İkinci Balkan Savaşı ile geri kazanmasında Mustafa Kemal’in askeri başarısı yine etkili olmuştur.
                        </p>
                    </>
                }
                img='https://avim.org.tr/images/uploads/Bulten/ii-balkan-savasi-ni-bitiren-bukres-anlasmasi-10-agustos-1913-h258685-030e8.jpg'
            />

            <Title title='Arnavutluk İsyanı' />
            <History
                title='Arnavutluk İsyanı'
                text='Bu isyanı bastırmak üzere görevlendirilen o dönemde Harbiye Nazırı olan Mahmut Şevket olmuştur. Mahmut Şevket komutasındaki isyanı durdurmak için görevlendirilen kuvvet içerisinde Mustafa Kemal Atatürk de bizzat bulunmuştur. Mahmut Şevket ve Atatürk’ün de dahil olduğu ordu isyanı bir ay içerisinde bastırmıştır.'
                img='https://upload.wikimedia.org/wikipedia/commons/9/9a/Shkup1912.jpg'
            />

            <Title title='31 Mart Vakası' />
            <History
                title='31 Mart Vakası'
                text={
                    <>
                        <p>
                            İkinci Meşrutiyetin ilanından sonra İstanbul’da oluşan yönetime karşı oluşturulmuş çok büyük çapta bir ayaklanmadır. Toplamda 13 gün sürmüştür. En başta askeri bir yapı ile başlayan ayaklanma daha sonra dini kesimlerinden araya girmesi ile dini bir boyut kazanmıştır. İstanbul’da hükümetin istifa etmesini sağlayan isyan ile isyancı askerler 7 gün boyunca İstanbul’u kuşatmışlardır. Bu askerlerin hangi amaç ile isyan ettikleri ve bu isyanın planlı ya da bilinçli bir isyan olup olmadığı hala bilinmemektedir.
                        </p>
                        <p>
                            31 Mart faciasının birebir içerisinde bulunan ve olayları gözlemleyen Atatürk, Orgeneral İzzettin Çalışlar ile isyan eden askerlere karşı savaşmışlardır. Atatürk’ün oluşturmuş olduğu Hareket Ordusu’nun başarısı ve 31 Mart Vakasında yaşananlar daha sonra Atatürk’ün dilinden Ulusal Gazetesinden yayımlanmıştır.
                        </p>
                    </>
                }
                img='https://www.gelincanlar.com/wp-content/uploads/2019/10/ataturk-savaslari.jpg'
            />

        </main>
    )
}

export default BattlesScreen
