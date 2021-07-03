import React from 'react'

const Presentation = () => {
    return (
        <div style={{background: "url('https://parqueexplora.org/sites/default/files/vEP5.png')", backgroundSize: "100% 100%"}}>
            <div class="container col-xxl-8 px-4 py-5 text-white">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6 ">
                        <img src="https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/177485/79d045e872fc659917b3d5a4883714e344ce2e57.XL2.jpg" class="d-block mx-lg-auto rounded rounded-circle border border-5 border-warning" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Explora: una visita sosegante</h1>
                        <p class="lead fw-bold">Abrimos todos los días de 9:00 a.m. a 5:00 p.m. con cierre de taquilla a las 3:30 p.m.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="https://encasa.parqueexplora.org/ " target="_blank" type="button" class="btn btn-lg px-4 text-white" style={{background: "#A239EA"}}>Ver mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
