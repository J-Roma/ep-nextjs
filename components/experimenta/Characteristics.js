import Slides from "./Slides"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const Characteristics = () => {
    return (
        <div style={{background: "#a460d1", height: "115vh"}}>
            <Slides/>
            <div className="container my-4">
                <h1 className="text-center text-white fw-bold display-5 mb-2"><u>Características</u></h1>
                <div className="row row-cols-3 aling-items-center text-center text-white fw-bold fs-4">
                    <div className="col-lg-4">
                        <p><FontAwesomeIcon className="fs-6" icon={faCircle}/> Para estudiante de 1 a 11</p>
                    </div>
                    <div className="col-md-4">
                        <p><FontAwesomeIcon className="fs-6" icon={faCircle}/> Incluye viaje por el universo + actividad experimental</p>
                    </div>
                    <div className="col-md-4">
                        <p><FontAwesomeIcon className="fs-6" icon={faCircle}/> Grupo de 20 personas acompañadas de un mediador</p>
                    </div>
                    <div className="col-md-4">
                        <p><FontAwesomeIcon className="fs-6" icon={faCircle}/> 1 sesion de 90 minutos</p>
                    </div>
                    <div className="col-md-4">
                        <p><FontAwesomeIcon className="fs-6" icon={faCircle}/> Conexion privada por Zoom</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Characteristics
