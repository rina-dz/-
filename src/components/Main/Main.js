import './Main.css';

function Main() {



    return (
        <section className='main'>
            <div className='main__title-container'>
                <h2 className='main__title'>Зарабатывайте больше</h2>
                <h2 className='main__colored-title'>с WELBEX</h2>
                <p className='main__text'>Развиваем и контролируем продажи за вас</p>
            </div>
            <div className='main__gifts-container'>
                <p className='main__gifts-title'>Вместе с <span className='main__gifts-span'>бесплатной консультацией</span> мы дарим:</p>
                <div className='main__gift-container'>
                    <article className='main__flex'>
                        <span className='main__gift-span'></span>
                        <h3 className='main__gift-title mobile'>Skype Аудит</h3>
                        <h3 className='main__gift-title desktop'>Виджеты</h3>
                        <p className='main__gift-text'>30 готовых решений</p>
                    </article>
                    <article className='main__flex'>
                        <span className='main__gift-span'></span>
                        <h3 className='main__gift-title mobile'>30 виджетов</h3>
                        <h3 className='main__gift-title desktop'>Dashboard</h3>
                        <p className='main__gift-text'>с показателями вашего бизнеса</p>
                    </article>
                    <article className='main__flex'>
                        <span className='main__gift-span'></span>
                        <h3 className='main__gift-title mobile'>Dashboard</h3>
                        <h3 className='main__gift-title desktop'>Skype Аудит</h3>
                        <p className='main__gift-text'>отдела продаж и CRM системы</p>
                    </article>
                    <article className='main__flex'>
                        <span className='main__gift-span'></span>
                        <h3 className='main__gift-title mobile'>Месяц аmoCRM</h3>
                        <h3 className='main__gift-title desktop'>35 дней</h3>
                        <p className='main__gift-text'>использования CRM</p>
                    </article>
                </div>
                <button className='main__button link'>Получить консультацию</button>
            </div>
        </section>
    );
}

export default Main;
