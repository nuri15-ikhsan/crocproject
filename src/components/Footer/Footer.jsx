import s from './Footer.module.css';


export function Footer() {
  return (
<footer className={s.footer}>
        <div className="container">
            
     
            <div className={s.footer__top}>
                
          
                <div className={s.footer__info}>
                    <a href="/" className={s.footer__logo}>шагомер</a>
                    <p className={s.footer__desc}>
                        Кроссовки и кеды для вашего темпа. Город, прогулки и всё, что между ними.
                    </p>
                </div>

  
            

            </div>

   
            <div className={s.footer__divider}></div>

     
            <div className={s.footer__bottom}>
                <div>© 2026 Шагомер</div>
                <a href="#">Политика конфиденциальности</a>
                <div>Россия · ₽</div>
            </div>

        </div>
    </footer>

  
  )
}
