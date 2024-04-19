import { FC, useEffect, useState } from 'react';
import i18n from '../../i18n/i18n';
import { MdGTranslate } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const LanguageSwitcher: FC = () => {

    const [show, setShow] = useState(false)

    const ShowHandle = () => {
        setShow(!show)
    }

    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);
        }
    }, [])


    const handleChangeLanguage = async (lng: string) => {
        await i18n.changeLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
        window.location.reload()
    };

    return (
        <>
            <div className='lng'>
                <div onClick={ShowHandle} className='lang-icon'>
                    {
                        show ? <IoMdClose /> : <MdGTranslate />
                    }
                </div>
            </div>

            {
                <div className={`lng-list ${show ? 'active' : null}`}>
                    <ul>
                        <li onClick={ShowHandle}>
                            <button className={localStorage.getItem('selectedLanguage') === 'az' ? 'active' : ''} onClick={() => handleChangeLanguage('az')}> 🇦🇿 Azərbaycanca</button>
                        </li>
                        <li onClick={ShowHandle}>
                            <button className={localStorage.getItem('selectedLanguage') === 'tr' ? 'active' : ''} onClick={() => handleChangeLanguage('tr')}> 🇹🇷 Türkçe</button>
                        </li>
                        <li onClick={ShowHandle}>
                            <button className={localStorage.getItem('selectedLanguage') === 'en' ? 'active' : ''} onClick={() => handleChangeLanguage('en')}> 🇺🇸 English</button>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
};

export default LanguageSwitcher;
