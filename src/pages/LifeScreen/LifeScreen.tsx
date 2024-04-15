import { FC, useEffect } from 'react'
import History from '../../components/History/History'

const LifeScreen: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main>
            <History
                text={`Atatürk'ün Selanik'te doğduğu evden ailenin orta halli, hatta bundan az üstün durumda olduğu anlaşılmaktadır.
                XIX. uncu yüzyılda hele taşralarda kayıtlar pek eksik olduğundan onun doğum günü bilinmemektedir. O, Rumi 1286 yılında doğmuş olarak kayıtlı olduğuna göre 1880 veya 1881 de doğmuş demektir. Adı Mustafa idi.
                19 Mayıs 1932 de Bay Reşit Saffet Atabinen'in kendisine "Doğum gününüzü kutlarım" yollu bir telgraf çekmesi, Atatürk'ün hoşuna gitmişti. Bundan az sonra Temmuz 1932 de Türk Tarih Kurumu'nun ilk kongresi sırasında Aydın Halkevi'nin tarih, dil, edebiyat komitesinin bir "Gazi Günü" kabul etmek istediğini söyleyip ona doğum gününü soran öğretmene Atatürk: "Bana onu sormayınız, ben doğduğum günü bilmiyorum" der ve "Gazi Günü" olarak da : "Samsun'a çıktığım günü" yapınız sözünü eklemiştir.`}
                title={`Mustafa Kemal Atatürk'ün doğduğu ev, Selanik`}
                img='https://cdn.ytur.net/fit-in/697x465/filters:quality(100)/filters:format(webp)/post/selanik-ataturk-evi-1-220313-104655-8546.jpg'
            />
            <History
                text={`
                Küçük Mustafa, öğrenim çağına gelince annesinin arzusu üzerine Hafız Mehmet Efendi'nin mahalle mektebinde ilköğrenimine başladı. Kısa bir süre sonra babasının isteğiyle devrinin şartlarına göre modern eğitim veren Şemsi Efendi Mektebine geçti. Bu sırada babasını kaybetti. Bir süre Rapla Çiftliği'nde dayısının yanında kaldıktan sonra Selânik'e dönüp okulunu bitirdi. Selânik Mülkiye Rüştiyesine kaydoldu ve kısa bir süre sonra, 1893 yılında, Selanik Askerî Rüştiyesine girdi. Çok sevdiği matematik dersinin öğretmeni Yüzbaşı Mustafa Efendi’den, “Kemal” adını aldı.
                Böylece adı “Mustafa Kemal” oldu. Selanik Askerî Rüştiyesini bitirdikten sonra 1896 yılında Manastır Askerî İdadisine başladı. Edebiyata olan ilgisi, onda gelecekteki hitabet ve yazılı anlatım ustalığının temelini oluşturdu. Manastır Askerî İdadisindeki tarih öğretmeni Kolağası Mehmet Tevfik Bey, Mustafa Kemal’in tarihe ve özellikle Türk tarihine ilgi duymasında başlıca etken oldu.1896-1899 yıllarında Manastır Askeri İdadisini bitirip, İstanbul’da Harp Okulu’nun piyade sınıfına yazıldı. Bu okuldaki öğrenciliği sırasında arkadaşlarıyla birlikte hürriyet fikirlerini yaymak amacıyla gizli olarak el basması bir gazete çıkardı. 1902 yılında Harp Okulundan teğmen rütbesiyle mezun olarak Harp Akademisine girdi. 1903 yılında ikinci sınıfa geçerek üsteğmenliğe yükseldi. 11 Ocak 1905'te yüzbaşı rütbesiyle Harp Akademisinden mezun oldu.
                `}
                title='Gençlik dönemi '
                img='https://img.ulusal.com.tr/rcman/Cw1280h720q95gc/storage/files/images/2023/03/02/ataturkun-harp-okulunda-aldigi-dersler-ve-notlari-3B48.jpg'
            />

            <History
                text={`
                Mustafa Kemal, Harp Okulu ve Harp Akademisindeki öğrenciliği sırasında ülke ve millet sorunlarıyla yakından ilgilenmiş, aydın ve ileri fikirli bir subay olarak tanınmıştı. Bu nedenle Harp Akademisinden mezuniyetini takiben yönetim karşıtı fikirlerinden dolayı kısa bir süre gözaltında tutuldu. 1905 yılında Şam'daki 5. Ordu emrine atandı. Aynı yıl bazı arkadaşlarıyla birlikte, gizli olarak, Vatan ve Hürriyet Cemiyeti’ni kurdu. Bu cemiyetin Beyrut, Yafa ve Kudüs’te şubeleri açıldı.
                1906 yılında gizlice Selanik’e giderek aynı cemiyetin bir şubesini açtıktan sonra geri döndü. Selanik’teki şube aynı yıl Osmanlı Hürriyet Cemiyeti’ne katıldı. Selanik’te gizli olarak faaliyet gösteren bu cemiyet, 1907 yılında Osmanlı İttihat ve Terakki Cemiyeti ile birleşti.1907'de Kolağası (Kıdemli Yüzbaşı) rütbesini aldı.
                `}
                title='Harp okulu'
                img='https://www.kulturportali.gov.tr/contents/images/%c5%9fam.jpg?format=jpg&quality=50&width=1200'
            />
        </main>
    )
}

export default LifeScreen
