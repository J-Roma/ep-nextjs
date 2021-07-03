import Navbar from '../../components/experimenta/Navbar'
import Description from '../../components/experimenta/Description'
import styles from '../../styles/Home.module.css'
import Objetive from '../../components/experimenta/Objetive'
import Characteristics from '../../components/experimenta/Characteristics'
import Form from '../../components/experimenta/Form'
import Footer from '../../components/experimenta/Footer'

const Experimenta = () => {
    return (
        <div className={styles.bg}>
            <Navbar/>
            <Description/>
            <Objetive/>
            <Characteristics/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Experimenta
