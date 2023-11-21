import './Header.css';
import logo_p1 from '../../image/header__logo-1.svg';
import logo_p2 from '../../image/header__logo-2.svg';
import telegram from '../../image/header__telegram.svg';
import viber from '../../image/header__viber.svg';
import whatsapp from '../../image/header__whatsapp.svg';

function Header() {


  return (
    <header className="header">
        <div className='header__logo-container'>
            <img className='header__logo-1' src={logo_p1} alt='логотип' />
            <img className='header__logo-2' src={logo_p2} alt='логотип' />
            <p className='header__text'>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
      <div className='header__navigation'>
        <a className='header__link link' target="_blank" rel="noreferrer" href='https://www.google.ru/'>Услуги</a>
        <a className='header__link link' target="_blank" rel="noreferrer" href='https://www.google.ru/'>Виджеты</a>
        <a className='header__link link' target="_blank" rel="noreferrer" href='https://www.google.ru/'>Интеграции</a>
        <a className='header__link link' target="_blank" rel="noreferrer" href='https://www.google.ru/'>Кейсы</a>
        <a className='header__link link' target="_blank" rel="noreferrer" href='https://www.google.ru/'>Сертификаты</a>
      </div>
      <p className='header__tel'>+7 555 555-55-55</p>
      <img className='header__images link' src={telegram} alt='telegram' />
      <img className='header__images link' src={viber} alt='viber' />
      <img className='header__images link' src={whatsapp} alt='whatsapp' />
    </header>
  );
}

export default Header;
