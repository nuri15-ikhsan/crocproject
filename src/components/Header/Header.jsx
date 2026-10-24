import s from './Header.module.css'
export function Header() {
    return (
        <header className={s.header} >
            <div className="container">
                <div className={s.header_block}>

                    <a href="#" className={s.logo}>
                        <div className={s.logo__icon}>
                            <img src="src/assets/znak.png" alt="" />
                        </div>
                        <span className={s.logo__text}>шагомер</span>
                    </a>


                    <nav className={s.nav}>
                        <a href="#" className={s.nav__link}>Главная</a>
                        <a href="#" className={s.nav__link}>Каталог</a>
                        <a href="#" className={s.nav__link}>Корзина</a>
                    </nav>


                    <a href="tel:88007002400" className={s.phone}>8 800 700-24-00</a>
                </div>
            </div>
        </header>
    )
}