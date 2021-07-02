import React from 'react';
import Swiper from 'react-id-swiper';
import styles from '../styles/objetivos/Objetive.module.css'

const Slides = () => {
    const [screen, setscreen] = React.useState(1)

    const params = {
        slidesPerView: screen,
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

export function getServerSideProps() {
    console.log(window.screen.width);
}