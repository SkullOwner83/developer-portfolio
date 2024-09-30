export const Header = () => {
    return (
        <header>
            <div className="Left-Container">
                <div className="Info-Container">
                    <div className="Photo-Container">

                    </div>

                    <div className="Biografy-Container">
                        <div>
                            <p className="Biografy-Name">JAVIER GUZMAN CRUZ</p>
                            <p className="Biografy-Description">Desarrollador de software</p>
                        </div>
                        
                        <div className="Buttons-Container">
                            <button className="Convencional-Button">Curriculum</button>
                            <button className="Outlined-Button">Contacto</button>
                        </div>
                    </div>
                </div>

                {/* Navbar menu options */}
                <ul>
                    <li>Iniciar juego</li>
                    <li>Acerca de mi</li>
                    <li>Tecnologías</li>
                    <li>Experiencia</li>
                    <li>Proyectos</li>
                </ul>
            </div>

            <div className="Right-Container">

            </div>
        </header>
    )
}