const loadMeal = (searchText) => {
    //fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
   const mealContainer = document.getElementById('meals-container')
   mealContainer.innerText = ''
    meals.forEach(meal => {
       // console.log(meal)

        const divElement = document.createElement('div')
        
        divElement.classList.add = 'col'
        divElement.innerHTML = `
       <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick = "loadMealId(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                      Details
                </button>
            </div>
      </div>
        
        `
        mealContainer.appendChild(divElement)
    });
}

const searchMeals = () => {
    const serchText = document.getElementById('serch-field').value
   // console.log(serchText)
    loadMeal(serchText);
}

const loadMealId = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    //console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => mealIdDisplay(data.meals[0]));
    
}

const mealIdDisplay = meal => {
    console.log(meal)
    const modelTitle = document.getElementById('mealDetailsTitle')
    modelTitle.innerText = meal.strMeal

    const mealDetailsImage = document.getElementById('mealDetailsBody')
    mealDetailsImage.innerHTML =`
    <img class = "img-fluid" src = "${meal.strMealThumb}">
    
    `
}



loadMeal('rice');