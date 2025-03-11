import './Hobbis.css'

function Hobbies() {
    return (
        <>
            <section className="hobbi">
                <h3 className="hobbies__title">Hobbies</h3>
                <div className="hobbies__line">
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/bailarin.png" loading="lazy"/></li>
                            <li className="hobbies__name">Bailar</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/cocina.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Cocinar</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/caminando.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Caminar</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/lector.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Leer</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/codigo.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Programar</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"><img src="/hobbis/escucha.png" loading="lazy"/></li>
                            <li className="hobbies__name">Escuchar Musica</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/toma-una-foto.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Tomar fotos</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/ver-la-pelicula.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Ver Peliculas</li>
                        </ul>
                    </div>
                    <div className="hobbies__box">
                        <ul>
                            <li className="hobbies__img"> <img src="/hobbis/casa-feliz.png" loading="lazy"/> </li>
                            <li className="hobbies__name">Pasar tiempo en familia.</li>
                        </ul>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Hobbies;