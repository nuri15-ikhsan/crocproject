import s from './Banner.module.css';
import bannerBg from '../../assets/banner.png';

export function Banner() {
  return (

    <div className={s.banner}>
      
      <div className={s.hero__container}>
        
   
        <div className={s.hero__content}>
          <h1 className={s.hero__title}>
            Твой город.<br />
            Твой темп.
          </h1>
          
          <p className={s.hero__subtitle}>
            Кроссовки и кеды для больших планов и прогулок без маршрута.
          </p>
          
          <button type="button" className={s.hero__button}>
            Перейти в каталог
          </button>
        </div>

      
        <div className={s.hero__imageWrapper}>
          <img src={bannerBg} className={s.hero__image} />
        </div>

      </div>
    </div>
  );
}