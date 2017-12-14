$(function(){ 
    var questionNum = 0;													// keep count of question, used for IF condition.
    var question = '<h3>What would you like to make?</h3>';				  // first question

    var output = document.getElementById('output');				// store id="output" in output variable
    output.innerHTML = question;													// ouput first question

    function bot() {
        var input = document.getElementById("input").value;
        console.log(input);

        if (questionNum == 0) {
            output.innerHTML = "<h3>Great...let's make " + input + "!</h3>";// output response
            document.getElementById("input").value = "";   		// clear text box
            question = '<h3>What is a fruit or vegetable you would like to use?</h3>';			    	// load next question
                setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
        }

//     else if (questionNum == 1) {
//     output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
//     document.getElementById("input").value = "";
//     question = '<h1>where are you from?</h1>';
//     setTimeout(timedQuestion, 2000);
//     }
    }

        function timedQuestion() {
            output.innerHTML = question;
        }

// //push enter key (using jquery), to run bot function.
        $(document).keypress(function(e) {
            if (e.which == 13) {
                bot();																						// run bot function when enter key pressed
                questionNum++;																		// increase questionNum count by 1
         }
    });





        function findRecipe() {
            var recipes = [
                {
                    name: 'Almond Butter Cookies',
                    keyword: 'cookies',
                    link: '<a href="https://minimalistbaker.com/almond-butter-chocolate-chip-cookies/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Almond Butter Cookies</a>',
                    picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/05/AMAZING-Almond-Butter-Chocolate-Chip-Cookies-vegan-glutenfree-cookies-lowsugar-grainfree-768x1152.jpg" display="block" style="width:250px;height:250px;">'
                },
                {
                    name: 'Baked Sweet Potatoes',
                    keyword: 'sweet potato',
                    link: '<a href="https://minimalistbaker.com/baked-sweet-potatoes-2-ways/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Baked Sweet Potatoes</a>',
                    picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/06/HEALTHY-Baked-Sweet-Potatoes-2-Ways-Savory-and-sweet-in-just-30-minutes-vegan-glutenfree-sweetpotato-healthy-minimalistbaker-dinner-768x1152.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Sweet Potato Tator Tots',
                    keyword: 'sweet potato',
                    link: '<a href="https://minimalistbaker.com/easy-baked-sweet-potato-tater-tots/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Sweet Potato Tator Tots</a>',
                    picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2014/06/Easy-Baked-Sweet-Potato-Tater-Tots-7-ingredients-vegan-and-SUPER-delicious.jpg" display="block" style="width:200px;height:250px;">'
                },
            ];
            var results= [];
        
            recipes.forEach(function(recipe) {
      
            var searchTerm = $("#input").val();
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
                var recipeList = $("<ul class='recipeList'>");
                var recipeCard = $("#recipeCard");
                // var listItem = $("#recipeCard");
                recipes.forEach(function(recipes) {
                    var recipeCard = $("<li class='recipeListItem'><div>" + recipes.picture + recipes.link + "</div></li>");
                    
                    recipeList.append(recipeCard);


            });
            sectionBrowse.append(recipeList);
        }

        else{
            console.info("No recipes found!");
        }
    });




});
