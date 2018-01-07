$(function(){ 
    var questionNum = 0;													// keep count of question, used for IF condition.
    var question = '<h3>Would you like to make a: main dish, breakfast, snack or dessert?</h3>';				  // first question

    var output = document.getElementById('output');				// store id="output" in output variable
    output.innerHTML = question;													// ouput first question

    function bot() {
        var input = document.getElementById("input").value;
        console.log(input);

        if (questionNum == 0) {
            output.innerHTML = "<h3>Great...let's make a " + input + "!</h3>";// output response
            document.getElementById("input").value = "";   		// clear text box
            question = '<h3>Do you need a recipe that is 30 minutes or less?</h3>';			    	// load next question
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
                    keyword: 'dessert',
                    time: 'yes',
                    link: '<a href="https://minimalistbaker.com/almond-butter-chocolate-chip-cookies/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Almond Butter Cookies</a>',
                    picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2017/05/AMAZING-Almond-Butter-Chocolate-Chip-Cookies-vegan-glutenfree-cookies-lowsugar-grainfree-768x1152.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Loaded Sweet Potato Boats',
                    keyword: 'main dish',
                    time: 'no',
                    link: '<a href="https://minimalistbaker.com/loaded-black-bean-sweet-potato-boats/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Black Bean Sweet Potato Boats</a>',
                    picture: '<img src="https://minimalistbaker.com/wp-content/uploads/2013/05/Loaded-Sweet-Potato-Boats.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Sweet Potato Tator Tots',
                    keyword: 'snack',
                    time: 'no',
                    link: '<a href="https://minimalistbaker.com/easy-baked-sweet-potato-tater-tots/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Sweet Potato Tator Tots</a>',
                    picture: '<img src="https://mbkr-minimalistbaker.netdna-ssl.com/wp-content/uploads/2014/06/Easy-Baked-Sweet-Potato-Tater-Tots-7-ingredients-vegan-and-SUPER-delicious.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Vegan Cinnamon Rolls',
                    keyword: 'breakfast',
                    time: 'no',
                    link: '<a href="https://minimalistbaker.com/the-worlds-easiest-cinnamon-rolls/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Vegan Cinnamon Rolls</a>',
                    picture: '<img src="https://minimalistbaker.com/wp-content/uploads/2013/09/EASY-7-Ingredient-Cinnamon-Rolls-minimalistbaker.com_.jpg" display="block" style="width:200px;height:250px;">'
                },
                 {
                    name: 'Peanut Butter Overnight Oats',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://deliciouslyella.com/2017/09/07/peanut-butter-overnight-oats/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Peanut Butter Overnight Oats</a>',
                    picture: '<img src="https://s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/08/08192126/c7.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Granola Bars',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://deliciouslyella.com/2017/09/05/sticky-almond-butter-granola-bars/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Almond Butter Granola Bars</a>',
                    picture: '<img src="https://s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/07/29093210/31.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Banana Peanut Butter Smoothie',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://deliciouslyella.com/2016/01/16/frozen-banana-peanut-butter-smoothie/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Banana Peanut Butter Smoothie</a>',
                    picture: '<img src="https://s3-eu-west-1.amazonaws.com/mae-deli/wp-content/uploads/2017/06/23122932/smoothie1-1.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Blueberry Bliss Muffins',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://servingrealness.com/blueberry-muffins-fuss-free-vegan/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Blueberry Bliss Muffins</a>',
                    picture: '<img src="https://servingrealness.com/wp-content/uploads/2017/11/muffin_closeup-5.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Tofu Scramble Enchiladas',
                    keyword: 'breakfast',
                    time: 'no',
                    link: '<a href="https://www.thissavoryvegan.com/black-bean-tofu-scramble-vegan-enchiladas/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Tofu Scramble Enchiladas</a>',
                    picture: '<img src="https://i1.wp.com/www.thissavoryvegan.com/wp-content/uploads/2018/01/tofu-scramble-black-bean-vegan-enchiladas-2.jpeg?resize=803%2C1024&ssl=1" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Baked Apple Cider Donuts',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://www.feastingonfruit.com/baked-apple-cider-donuts/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Baked Apple Cider Donuts</a>',
                    picture: '<img src="https://i1.wp.com/www.feastingonfruit.com/wp-content/uploads/2017/10/Baked-Apple-Cider-Donuts-3.jpg?w=1000&ssl=1" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Banana Mocha Chip Muffins',
                    keyword: 'breakfast',
                    time: 'no',
                    link: '<a href="https://www.feastingonfruit.com/banana-mocha-chip-muffins/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Banana Moch Chip Muffins</a>',
                    picture: '<img src="https://i2.wp.com/www.feastingonfruit.com/wp-content/uploads/2017/10/Banana-Mocha-Chip-Muffins3.jpg?w=1000&ssl=1" display="block" style="width:200px;height:250px;">'
                },
                   {
                    name: 'Chia Spiced Pancakes',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="http://myvibrantkitchen.com/vegan-chai-spice-pancakes-whipped-maple-butter/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Chia Spiced Pancakes</a>',
                    picture: '<img src="https://i2.wp.com/myvibrantkitchen.com/wp-content/uploads/2017/11/vegan-chai-spiced-pancakes-whipped-maple-butter-4.jpg?resize=900%2C1350" display="block" style="width:200px;height:250px;">'
                },
                 {
                    name: 'Blueberry Pancakes',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="https://www.connoisseurusveg.com/vegan-blueberry-buttermilk-pancakes/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Blueberry Pancakes</a>',
                    picture: '<img src="https://www.connoisseurusveg.com/wp-content/uploads/2017/06/vegan-blueberry-buttermilk-pancakes.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Nutella Pancakes',
                    keyword: 'breakfast',
                    time: 'yes',
                    link: '<a href="http://www.thelittleblogofvegan.com/2017/07/gluten-free-vegan-chocolate-nutella.html" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Nutella Pancakes</a>',
                    picture: '<img src="https://4.bp.blogspot.com/-5JoPEhRlNiE/WV4mI37ZsKI/AAAAAAAASmU/5rmAJ280ETIle1eswd5-0RdjRpK95_i4gCLcBGAs/s1600/nutella_pancakes_vegan.jpg" display="block" style="width:200px;height:250px;">'
                },
            ];
            var results= [];
        
            recipes.forEach(function(recipe) {
      
            var searchTerm = $("#input").val();
            if (recipe.keyword && recipe.time === searchTerm){
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
