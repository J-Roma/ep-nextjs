import Navbar from '../components/inicio/Navbar'
import Entries from '../components/inicio/Entries'
import Presentation from '../components/inicio/Presentation'
import Footer from '../components/inicio/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Presentation/>
      <Entries/>
      <Footer/>

    </div>
  )
}
