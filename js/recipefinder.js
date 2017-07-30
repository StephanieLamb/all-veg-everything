$(function(){ 




    function findRecipe() {
        var recipes = [
            {name: 'Almond Butter Cookies', keyword: 'cookies', link: '<a href="https://minimalistbaker.com/almond-butter-chocolate-chip-cookies/">Almond Butter Cookies</a>', picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/05/AMAZING-Almond-Butter-Chocolate-Chip-Cookies-vegan-glutenfree-cookies-lowsugar-grainfree-768x1152.jpg" style="width:250px;height:250px;">'},
            {name: 'Baked Sweet Potatoes', keyword: 'sweet potato', link: '<a href="https://minimalistbaker.com/baked-sweet-potatoes-2-ways/">Baked Sweet Potatoes</a>', picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/06/HEALTHY-Baked-Sweet-Potatoes-2-Ways-Savory-and-sweet-in-just-30-minutes-vegan-glutenfree-sweetpotato-healthy-minimalistbaker-dinner-768x1152.jpg" style="width:200px;height:250px;">'},
            {name: 'Sweet Potato Tator Tots', keyword: 'sweet potato', link: '<a href="https://minimalistbaker.com/easy-baked-sweet-potato-tater-tots/">Sweet Potato Tator Tots</a>', picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2014/06/Easy-Baked-Sweet-Potato-Tater-Tots-7-ingredients-vegan-and-SUPER-delicious.jpg" style="width:200px;height:250px;">'},
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
                var listItem = $("<li>" + recipes.picture + recipes.link + "</li>");
                recipeList.append(listItem);


            });
            sectionBrowse.append(recipeList);
        }

        else{
            console.info("No recipes found!");
        }
    });




});
