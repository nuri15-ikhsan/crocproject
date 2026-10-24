import s from './Header.module.css';
import znakBg from '../../assets/znak.png';

export function Header() {
  return (

    <header className={s.header}>
      
      <div className="container">
        <div className={s.headerBlock}>

          <a href="#" className={s.logo}>
           
            <div className={s.logoIconWrapper}>
             
              <img src={znakBg} className={s.logoIcon} alt="Логотип" />
            </div>
            <span className={s.logoText}>шагомер</span>
          </a>

          <nav className={s.nav}>
            <a href="#" className={s.navLink}>Главная</a>
            <a href="#" className={s.navLink}>Каталог</a>
            <a href="#" className={s.navLink}>Корзина</a>
          </nav>

          <a href="tel:88007002400" className={s.phone}>8 800 700-24-00</a>
        </div>
      </div>
    </header>
  );
}