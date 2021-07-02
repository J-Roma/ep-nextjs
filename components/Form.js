import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
    const [state, handleSubmit] = useForm("meqvzper");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="bg">
            <div className="d-flex flex-row justify-content-center mt-5">
                <img src="https://i.imgur.com/MazAGkr.png" alt="planet1" /><h1> ¿Quieres más<br /> información?</h1><img src="https://i.imgur.com/uzn5Ab1.png" alt="planet2" />
            </div>
            <div className="text-center mt-3 mb-5">
                <h3> Déjanos tus datos y te contactaremos</h3>
            </div>
            <div className="formbox" >
                <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
                    <div className="col-md-6 text-center">
                        <label for="validationCustom01" className="form-label">Nombre</label>
                        <input id="name" name="name" type="text" className="form-control" id="validationCustom01" defaultValue="Alejanda Orozco" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <label for="validationCustom02" className="form-label">Cedula</label>
                        <input type="number" className="form-control" id="validationCustom02" defaultValue="1035729208" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <label for="validationCustomUsername" className="form-label">Telefono Celular</label>
                        <div className="input-group has-validation">
                            <input type="number" defaultValue="3212210928" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                            <div className="invalid-feedback">
                                Por favor coloca un numero valido.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <label for="validationCustom03" className="form-label">Correo</label>
                        <input id="email"
                            type="email"
                            name="email" defaultValue="alejandra.orozco@edu.co" className="form-control" id="validationCustom03" required />
                        <div className="invalid-feedback">
                            Por favor ingresa un correo valido.
                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <label for="validationCustom05" className="form-label px-5">Nombre de institución
                            educativa</label>
                        <input type="text" defaultValue="Insitucion Educativa" className="form-control" id="validationCustom05" required />
                        <div className="invalid-feedback">
                            Please provide a valid zip.
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <label for="validationCustom04" className="form-label">Estás interesado en una
                            navegación por el universo para:</label>
                        <select className="form-select" id="validationCustom04" required>
                            <option selected disabled value="">Choose...</option>
                            <option>Preescolar</option>
                            <option>Primaria</option>
                            <option>Bachillerato</option>
                        </select>
                        <div className="invalid-feedback">
                            Please select a valid state.
                        </div>
                    </div>
                    <div className="col-12 text-center py-3">
                        <button className="btn" type="submit">Enviar</button>
                    </div>
                </form>
                <div className="col-md-12 text-center text-white mt-3">
                    <a href="https://wa.link/bphdvo" target="_blank">
                        <img src="https://i.imgur.com/eFoIoZa.png" alt="whatsapp" />
                    </a>
                    <h4 className="title">Escribenos por Whatsapp</h4>

                </div>

            </div>
            <div className="aviso">
                <p>
                    Al diligenciar este formulario aceptas seguir recibiendo información del Parque Explora y nos autorizas para que incluyamos tus datos
                    personales en nuestras bases de datos, en calidad de responsable y encargado de los mismos, con la ﬁnalidad de enviarte información
                    sobre eventos y actividades. También te das por enterado de los derechos que tienes de consultarlos, actualizarlos, rectiﬁcarlos y
                    suprimirlos en cualquier momento, y conoces la política de manejo de datos de la Corporación, que se encuentran en la página web
                    www.parqueexplora.org/condiciones-legales. En ella se encuentran descritos los canales de atención para el ejercicio de tus derechos y la
                    presentación de quejas y reclamos. Así mismo comprendes que esta autorización es requerida de acuerdo a lo dispuesto por la ley 1581
                    de 2012 y sus decretos reglamentarios. Esta autorización la otorgas gratuitamente sin ninguna limitación de carácter temporal o territorial.
                </p>
            </div>
            <style jsx >
                {`
                    .bg {
                        height: 100%;
                    }

                    .title {
                        color: green;
                    }

                    h1 {
                        font-size: 54px;
                        color: #A239EA;
                        font-weight: 900;

                    }
                    h3 {
                        color: #A239EA;
                        font-weight: 900;
                    }
                    p {
                        color: #A239EA;
                        font-size: 1vw;
                        padding: 13px 0;
                    }
                    .aviso {
                        max-width: 800px;
                        margin: 0 auto;
                    }

                    .formbox {
                        width: 600px;
                        margin: 0 auto;
                    }

                    .form-control {
                        border: 0;
                        outline: none;
                        border-bottom: 2px solid #A239EA;
                        text-align: center

                    }
                    .form-select {
                        border: 0;
                        outline: none;
                        border-bottom: 2px solid #A239EA;
                        text-align: center

                    }  
                    
                    .btn {
                        background: #A239EA;
                        color: white
                    }

                    label {
                        font-weight: regular;
                        font-size: 18px;
                        color: #A239EA;
                    }

                `}
            </style>
        </div>
    )
}

export default Form
