import styles from '../styles/Description.module.css'

const Description = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 py-5">
                <div className="col mx-auto">
                    <h1 className={styles.title}  >
                        Navegación <br />
                        por el universo <br />
                        para colegios
                    </h1>
                </div>
                <div className="col-lg-7 mx-auto">
                    <p className={styles.description}>
                        En este viaje en vivo conoceremos los logros y descubrimientos
                        que hicieron mujeres y hombres inquietos por observar los
                        misterios del cosmos. Acompañados por la curiosidad y el
                        asombro, seremos testigos de la diversidad de objetos que hay en
                        nuestro universo y, a través de historias, viajaremos por lugares ya
                        conocidos y por conocer.
                    </p>
                </div>
                <div>
                    <img src="" alt="whatsapp"/>
                </div>
            </div>
        </div>
    )
}

export default Description
