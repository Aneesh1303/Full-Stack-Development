import RecipeCrad from "./RecipeCard"

const List = ({hits}) => {
    return ( 
        <div className="card-container">
            {
                hits.map(({recipe}) =>
                    <RecipeCrad label={recipe.label} image = {recipe.image} recipeURL = {recipe.url}/>
                )
            }
        </div>
     );
}
 
export default List;