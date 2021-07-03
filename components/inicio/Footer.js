import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center footer-style mt-5" style={{background: "#eeeeee", paddingTop: "83px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <h3>Encuéntranos en:</h3>
                        <ul className="list-inline text-center align-content-center">
                            <li>
                                <img style={{ width: '30%' }} src='https://i.imgur.com/XzMVpIl.png' />
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 footer-col">
                        <h3>Contáctanos</h3>
                        <p>Corporación Parque Explora
                            +57(4) 516 83 00
                        </p>
                        <p>comunicaciones@parqueexplora.org</p>


                    </div>
                    <div className="col-md-4 footer-col">
                        <h3>Ubicación:</h3>
                        <ul className="list-inline d-flex flex-column justify-content-center">

                            <li className='text-center'>
                                <p>Carrera 52 # 73 - 75</p>
                            </li>
                            <li className='text-center'>
                                <p>
                                    Medellín - Colombia
                                </p>
                            </li>
                            <li className='text-center'>
                                <p>
                                    +57(4) 516 83 00
                                </p>
                            </li>

                        </ul>
                    </div>

                </div>
                <hr />

                <div className='row'>
                    <p className='col-sm text-center'>
                        @ 2021 PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS  
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
