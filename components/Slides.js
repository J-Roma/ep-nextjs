import Swiper from 'react-id-swiper';
import styles from '../styles/objetivos/Objetive.module.css'

const Slides = () => {
    const params = {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    return (
        <div className="container" style={{paddingTop: "15vh"}}>
            <Swiper {...params}>
                <div className="text-center">
                    <img className={styles.slide} src="https://i.imgur.com/oIuJDtm.png" alt="img1" />
                </div>
                <div className="text-center">
                    <img className={styles.slide} src="https://i.imgur.com/NOVv9Gj.png" alt="img2" />
                </div>
                <div className="text-center">
                    <img className={styles.slide} src="https://i.imgur.com/3LHcbCy.png" alt="img3" />
                </div>
            </Swiper>

        </div>
    )
}

export default Slides
