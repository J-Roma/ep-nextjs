import Navbar from '../../components/Navbar'
import Description from '../../components/Description'
import styles from '../../styles/Home.module.css'
import Objetive from '../../components/Objetive'
import Characteristics from '../../components/Characteristics'

const Experimenta = () => {
    return (
        <div className={styles.bg}>
            <Navbar/>
            <Description/>
            <Objetive/>
            <Characteristics/>
        </div>
    )
}

export default Experimenta
