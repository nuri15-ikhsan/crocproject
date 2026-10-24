import s from './Catalog.module.css';

export function Catalog() {
  return (
   
    <section className={s.featuresSection}>
      <div className="container">
        <h2 className={s.featuresTitle}>Почему выбирают шагомер</h2>

        <div className={s.featuresGrid}>
       
          <div className={s.featureCard}>
            <div className={s.iconWrapper}>
             <img src="src/assets/images.png" alt="" />
            </div>
            <h3 className={s.cardTitle}>Удобный каталог</h3>
            <p className={s.cardText}>
              Кроссовки и кеды для разных планов и прогулок без маршрута.
            </p>
          </div>

      
          <div className={s.featureCard}>
            <div className={s.iconWrapper}>
               <img src="src/assets/images.png" alt="" />
            </div>
            <h3 className={s.cardTitle}>Всегда на связи</h3>
            <p className={s.cardText}>
              Поддержка по телефону и почте: 8 800 700-24-00 · 10:00-20:00.
            </p>
          </div>

   
          <div className={s.featureCard}>
            <div className={s.iconWrapper}>
            <img src="src/assets/images.png" alt="" />
            </div>
            <h3 className={s.cardTitle}>Для твоего города</h3>
            <p className={s.cardText}>
              Город, прогулки и всё, что между ними — под одной крышей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}