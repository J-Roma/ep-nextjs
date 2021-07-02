import styles from '../styles/objetivos/Objetive.module.css'

const Objetive = () => {

    return (
        <div className={styles.bg}>
            <div className={styles.position}>
                <h1 className={styles.title}>¿Cúales son los objetivos de estos encuentros?</h1>
            </div>
            <div className={styles.content}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <img width="37" src="https://i.imgur.com/Bv0MAja.png" alt="uno" />
                        </div>
                        <div className="col-lg-10 fs-7">
                            <p className={styles.objetive}>
                                Motivar la observación del cielo e
                                incentivar la curiosidad sobre algunos
                                temas relacionados con la Astronomía
                                como planetas, estrellas y galaxias.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1">
                            <img width="37" src="https://i.imgur.com/BWVcri5.png" alt="uno" />
                        </div>
                        <div className="col-lg-10 fs-6">
                            <p className={styles.objetive}>
                                Motivar la observación del cielo e
                                incentivar la curiosidad sobre algunos
                                temas relacionados con la Astronomía
                                como planetas, estrellas y galaxias.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1">
                            <img width="37" src="https://i.imgur.com/rtn9KAz.png" alt="uno" />
                        </div>
                        <div className="col-lg-10 fs-7">
                            <p className={styles.objetive}>
                                Motivar la observación del cielo e
                                incentivar la curiosidad sobre algunos
                                temas relacionados con la Astronomía
                                como planetas, estrellas y galaxias.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}

export default Objetive
