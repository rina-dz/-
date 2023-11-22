import './Footer.css';
import telegram from '../../image/header__telegram.svg';
import viber from '../../image/header__viber.svg';
import whatsapp from '../../image/header__whatsapp.svg';

function Footer() {

    return (
        <footer className='footer'>
            <ul className='footer__container'>
                <h4 className='footer__title'>О компании</h4>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Партнёрская программа</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Вакансии</li></a>
            </ul>
            <ul className='footer__container'>
                <h4 className='footer__title'>Меню</h4>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Расчёт стоимости</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Услуги</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Виджеты</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Интеграции</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Наши клиенты</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Кейсы</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Благодарственные письма</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Сертификаты</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Блог на Youtube</li></a>
                <a className='footer__link link' target="_blank" rel="noreferrer"
                    href='https://www.google.ru/'><li>Вопрос / Ответ</li></a>
            </ul>
            <ul className='footer__contacts-container'>
                <h4 className='footer__title'>Контакты</h4>
                <li className='footer__number'>+7 555 555-55-55</li>
                <div className='footer__icons-container'>
                    <a target="_blank" rel="noreferrer" href='https://web.telegram.org/'><li>
                        <img className='footer__icon link' src={telegram} alt='telegram' />
                    </li></a>
                    <a target="_blank" rel="noreferrer" href='https://www.viber.com/ru/'><li>
                        <img className='footer__icon link' src={viber} alt='viber' />
                    </li></a>
                    <a target="_blank" rel="noreferrer" href='https://www.whatsapp.com/'><li>
                        <img className='footer__icon link' src={whatsapp} alt='whatsapp' />
                    </li></a>
                </div>
                <a className='footer__adress link' target="_blank" rel="noreferrer" href='https://www.google.com/maps/place/%D0%9F%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B9+%D0%BF%D1%80-%D0%B4,+3%D0%A11,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+127410/@55.873427,37.572755,17z/data=!3m1!4b1!4m6!3m5!1s0x46b5370d42c055a3:0xfe62d1376599cb4c!8m2!3d55.873427!4d37.5753299!16s%2Fg%2F11j9m76z8b?hl=ru&entry=ttu'><li>Москва, Путевой проезд 3с1, к 902</li></a>
                    <div className='footer__copyright'>
                        <p className='footer__copyright-text'>©WELBEX 2022. Все права защищены.</p>
                        <a className='footer__copyright-link link' target="_blank" rel="noreferrer"
                            href='https://www.google.ru/'> Политика конфиденциальности</a>
                    </div>
            </ul>
        </footer>
    );
}

export default Footer;
