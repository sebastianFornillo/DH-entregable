
const Card = ({estudiante}) => {

  return(
    <div className="card">
   <h3>Muchas gracias {estudiante}!! </h3>
  <h4 style={{color: 'green'}}> El formulario de inscripcion al programa amazonas se ha enviando con exito.</h4>
  </div>
)};


export default Card;