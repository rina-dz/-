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
                <li className='footer__adress'>Москва, Путевой проезд 3с1, к 902</li>
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
