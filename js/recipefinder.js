$(function(){ 




    function findRecipe() {
        var recipes = [
            {name: 'Almond Butter Cookies', keyword: 'cookies', link: '<a href="https://minimalistbaker.com/almond-butter-chocolate-chip-cookies/">Almond Butter Cookies</a>'},
            {name: 'Baked Sweet Potatoes', keyword: 'sweet potato', link: '<a href="https://minimalistbaker.com/baked-sweet-potatoes-2-ways/">Baked Sweet Potatoes</a>'},
        ];
        var results= [];
        
        recipes.forEach(function(recipe) {
            var searchTerm = $("#searchTerm").val();
            if (recipe.keyword === searchTerm){
                results.push(recipe);
                
            }

        });
        return results;
    }

    $("#searchSubmit").click(function(){
        var recipes = findRecipe();
        // create a loop that displays recipes.
        // if no results display "no results"
        if (recipes.length > 0){
            var sectionBrowse = $("#sectionBrowse");
            var recipeList = $("<ul>");
            recipes.forEach(function(recipes) {
                var listItem = $("<li>" + recipes.link + "</li>");
                recipeList.append(listItem);


            });
            sectionBrowse.append(recipeList);
        }

        else{
            console.info("No recipes found!");
        }
    });




});
