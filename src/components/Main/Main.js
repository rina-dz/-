import './Main.css';

function Main() {

    //linear-gradient(right, #FCB045, #FF3F78);

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
                    <article>
                    <h3 className='main__gift-title'>Виджеты</h3>
                    <p className='main__gift-text'>30 готовых решений</p>
                    </article>
                    <article>
                    <h3 className='main__gift-title'>Dashboard</h3>
                    <p className='main__gift-text'>с показателями вашего бизнеса</p>
                    </article>
                    <article>
                    <h3 className='main__gift-title'>Skype Аудит</h3>
                    <p className='main__gift-text'>отдела продаж и CRM системы</p>
                    </article>
                    <article>
                    <h3 className='main__gift-title'>35 дней</h3>
                    <p className='main__gift-text'>использования CRM</p>
                    </article>
                </div>
                <button className='main__button link'>Получить консультацию</button>
            </div>
        </section>
    );
}

export default Main;
