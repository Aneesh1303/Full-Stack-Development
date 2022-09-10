const RecipeCrad = ({label, image, recipeURL}) => {
    return ( 
        <div className="card">
            <div className="card--img"><img className = "img" src={image} alt=""/></div>
            <div className="card--text">
                <div className="card--title">
                {label}
                </div>
                <div>
                    <a href={recipeURL} className="cta">View Recipe</a>
                </div>
            </div>
        </div>
     );
}
 
export default RecipeCrad;