
export const TechnologyCard = ({ name, imgURL }) => {
  return (
    <div className="card">
        <div className="image-container">
            <img
                className="technology-img" 
                src={ imgURL }  
                alt={ `${ name } logo --Joaquin_Portfolio` } 
                style={{ filter: `drop-shadow(0 0 3px var(--${name})) `}}
            />
        </div>
        <div className="card-body">
            <h3 className="technology-name-text">{ name }</h3>
        </div>
    </div>
  )
}
