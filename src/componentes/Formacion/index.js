import './Forma.css'

const Curso = ({ title, imgSrc, subtitle }) => (
  <div className="academic__courses__box">
    <ul className="academic__courses__list">
      <li className="academic__courses__item__title"><h4>{title}</h4></li>
      <li className="academic__courses__item__img"><img src={imgSrc} alt={title} loading="lazy" /></li>
      <li className="academic__courses__item__subtitle"><p>{subtitle}</p></li>
    </ul>
  </div>
);

function Formacion() {
  return (
    <>
      <section className="estudios">
        <h2 className="academic__title">Formación académica</h2>
        <div className="academic__courses">
          <Curso title="Desarrollado de aplicaciones iOS" imgSrc="/formacion-academica/t1.jpg" subtitle="2023" />
          <Curso title="Front-End" imgSrc="/formacion-academica/alura_logo.png" subtitle="2024" />
          <Curso title="Design Thinking" imgSrc="/formacion-academica/uDEMI.PNG" subtitle="2023" />
        </div>
      </section>
    </>
  )
}

export default Formacion;
