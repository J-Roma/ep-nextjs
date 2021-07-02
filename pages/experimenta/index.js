import Navbar from '../../components/Navbar'
import Description from '../../components/Description'
import styles from '../../styles/Home.module.css'
import Objetive from '../../components/Objetive'

const Experimenta = () => {
    return (
        <div className={styles.bg}>
            <Navbar/>
            <Description/>
            <Objetive/>
        </div>
    )
}

export default Experimenta
