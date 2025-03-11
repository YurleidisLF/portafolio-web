import './Skills.css';

function Skills() {
    return (
        <section className="skills" id="skills">
            <h3 className="skills__title">Skills</h3>
            <div className="skills__line">
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/html-1.svg" alt="HTML" />
                            <h2 className = "nombre-icon">HTML</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/css-3.svg" alt="CSS" />
                            <h2 className = "nombre-icon">CSS</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/javascript.png" alt="JavaScript" />
                            <h2 className = "nombre-icon">JavaScript</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/react-2.svg" alt="React" />
                            <h2 className = "nombre-icon">React.js</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/nodejs.svg" alt="React" />
                            <h2 className = "nombre-icon">Node.js</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/archivo-json.png" alt="JSON" />
                            <h2 className = "nombre-icon">Json</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/swift-15.svg" alt="Swift" />
                            <h2 className = "nombre-icon">Swift</h2>
                        </li>
                    </ul>
                </div>
                
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/mysql.svg" alt="MySQL" />
                            <h2 className = "nombre-icon">MySQL</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/visual-studio-code-1.svg" alt="VS Code" />
                            <h2 className = "nombre-icon">Vs Code</h2>
                        </li>
                    </ul>
                </div>
                <div className="skills__box">
                    <ul>
                        <li className="skills__img">
                            <img src="/iconos/github-icon-1.svg" alt="GitHub" />
                            <h2 className = "nombre-icon">GitHub</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
