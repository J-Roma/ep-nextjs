import Navbar from '../../components/Navbar'
import Description from '../../components/Description'
import styles from '../../styles/Home.module.css'
import Objetive from '../../components/Objetive'
import Characteristics from '../../components/Characteristics'
import Form from '../../components/Form'
const Experimenta = () => {
    return (
        <div className={styles.bg}>
            <Navbar/>
            <Description/>
            <Objetive/>
            <Characteristics/>
            <Form/>
        </div>
    )
}

export default Experimenta
