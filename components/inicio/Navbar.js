import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img className={styles.logo} src="https://encasa.parqueexplora.org/wp-content/uploads/2020/04/LOGO_EXPLORA-1.png" alt="logoParqueExplora"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto ">
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <h1 className={styles.title}>
                                        <a className="nav-link active" aria-current="page">Inicio</a>
                                    </h1>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/experimenta">
                                    <h1 className={styles.title}>
                                        <a className="nav-link">Experimenta</a>
                                    </h1>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/">

                                    <h1 className={styles.title}>
                                        <a className="nav-link">Conéctate</a>
                                    </h1>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <h1 className={styles.title}>
                                        <a className="nav-link">Prográmate</a>
                                    </h1>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <h1 className={styles.title}>
                                        <a className="nav-link">Conócenos</a>
                                    </h1>
                                </Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link href="/">
                                    <h1 className={styles.title}>
                                        <a className="nav-link">Suscríbete</a>
                                    </h1>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex mx-3">
                        <button className="btn -success" type="submit"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
                    </form>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
