const application_id = "c48b3ac7"
const application_key = "9cf2ee4bb2ccac9e82c5777fa2822457"
const input = document.querySelector('#Recipe input')
const button = document.querySelector('#Recipe button')
const container = document.querySelector('.card-container')

const getRecipe = async (query) => {
    const endpoint = `https://api.edamam.com/search?q=${query}&app_id=c48b3ac7&app_key=9cf2ee4bb2ccac9e82c5777fa2822457`
    
    const res = await fetch(endpoint);
    const data = await res.json();
    const { hits } = data;
    
    return hits;
}

const createRecipeCard = (image, name, recipeUrl) => {
    return `<div class="card">
        <div class="card--img"><img class = "img" src=${image}></div>
        <div class="card--text">
            <div class="card--title">
              ${name}
            </div>
            <a href=${recipeUrl} class="cta">View Recipe</a>
        </div>
    </div>`
}

const handleSearch = async () => {
    container.innerHTML = null  //clear the content from the screen
    const query = input.value
    const hits = await getRecipe(query)
    hits.forEach(hit => {
        console.log(hit)
        const { recipe } = hit
        const ele = document.createElement('div')
        const markup = createRecipeCard(recipe.image, recipe.label, recipe.url)
        ele.innerHTML = markup
        container.appendChild(ele)
    });
}

button.addEventListener('click', handleSearch)