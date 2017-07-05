$(function() {
    var recipes = [
        {name: 'Almond Butter Cookies', keyword: 'cookies', link: '<a href="https://minimalistbaker.com/almond-butter-chocolate-chip-cookies/"</a>'},
        {name: 'Baked Sweet Potatoes', keyword: 'sweet potato', link: '<a href="https://minimalistbaker.com/baked-sweet-potatoes-2-ways/"</a>'},
    ];
    var results= [];
    recipes.forEach(function(recipe){
        if (recipe.keyword == $("#searchTerm"){
            results.push(recipe);
        });
    });
});
