import { Link } from 'react-router-dom';
import './pageNotFound.css';


export const PageNotFound = () => {
  return (
    <div className='page-not-found-container'>
      <h5 className='not-found-text'>Pagina web no encontrada</h5>
      <div className="button-image-container">
        <img className="not-found-image" src="/src/assets/not_found.svg" alt="Pagina no encotrada" />
        <Link to={"/"} className='back-btn-notFound' >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
