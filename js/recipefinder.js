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
                    link: '<a href="https://www.feastingonfruit.com/banana-mocha-chip-muffins/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Banana Mocha Chip Muffins</a>',
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
                 {
                    name: 'Sweet Potato and Crispy Quinoa Salad',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="https://wendypolisi.com/sweet-potato-pomegranate-crispy-quinoa-salad/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Sweet Potato and Quinoa Salad</a>',
                    picture: '<img src="https://wendypolisi.com/wp-content/uploads/2016/01/sweet-potato-pomegranate-crispy-quinoa-salad.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Vegan Couscous Salad',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="https://www.lazycatkitchen.com/vegan-couscous-salad-roasted-parsnips/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Vegan Couscous Salad</a>',
                    picture: '<img src="https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2018/01/vegan-couscous-salad-lunch-800x1200.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Detox Salad with Lentils',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="http://www.occasionallyeggs.com/2018/01/cold-weather-detox-salad-with-crispy.html" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Detox Salad with Lentils</a>',
                    picture: '<img src="https://4.bp.blogspot.com/-1yZXVKVe1MI/Wku7oQniqiI/AAAAAAAADAo/PVPkgE1lM8w4kuXODwUdWBdObRQEoJLBACLcBGAs/s1600/vegan-detox-salad.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Kale Salad with Avocado Dressing',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="http://www.3scoopsofsugar.com/kale-carrot-cabbage-salad-with-avocado-dressing/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Kale Salad with Avocado Dressing</a>',
                    picture: '<img src="https://i0.wp.com/www.3scoopsofsugar.com/wp-content/uploads/2017/12/kalecarrotcabbagesalad15ps.jpg?w=667" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Confetti Beet Salad',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="https://www.spicesinmydna.com/2017/12/27/confetti-beet-salad/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Confetti Beet Salad</a>',
                    picture: '<img src="https://www.spicesinmydna.com/wp-content/uploads/2017/12/5F4A7243-3.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Pasta with Porcini Bolognese',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="http://www.euphoricvegan.com/2018/01/pappardelle-with-porcini-bolognese.html" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Pasta with Porcini Bolognese</a>',
                    picture: '<img src="https://1.bp.blogspot.com/-DHnmSlUMccY/WlEtwI8bxEI/AAAAAAAAS0Y/KlYvZC7E29Qh-LgQinx2MIM_VXBK47XAQCLcBGAs/s1600/IMGP0438_edited1.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Pasta Carbonara',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="https://simpleveganblog.com/vegan-pasta-carbonara/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Pasta Carbonara</a>',
                    picture: '<img src="https://simpleveganblog-lne9w9dshg8v.stackpathdns.com/wp-content/uploads/2018/07/Vegan-pasta-carbonara-2.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Soy Ginger Soba Noodles',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="http://thewoodenskillet.com/soy-ginger-soba-noodles-avocado-edamame/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Soy Ginger Soba Noodles</a>',
                    picture: '<img src="https://i2.wp.com/thewoodenskillet.com/wp-content/uploads/2016/11/1-IMG_9766.jpg?w=1067" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Vegan Mac and Cheese',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="https://www.connoisseurusveg.com/vegan-mac-and-cheese/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Vegan Mac and Cheese</a>',
                    picture: '<img src="https://www.connoisseurusveg.com/wp-content/uploads/2017/12/vegan-mac-and-cheese-2-of-3.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Broccoli Pesto with Pasta',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="https://veganheaven.org/recipe/broccoli-pesto-with-pasta-and-cherry-tomatoes/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Broccoli Pesto with Pasta</a>',
                    picture: '<img src="https://veganheaven.org/wp-content/uploads/2017/12/Broccoli-Pesto-with-Pasta-and-Cherry-Tomatoes-3.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Spinach Pesto Lasagna',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="https://vegetariangastronomy.com/spinach-pesto-lasagna-creamy-mushroom-sauce-vegan/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Spinach Pesto Lasagna</a>',
                    picture: '<img src="https://vegetariangastronomy.com/wp-content/uploads/2017/12/creamy-spinach-mushroom-lasagna-vegan-7.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Black Bean Veggie Burger',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="https://www.noracooks.com/the-best-black-bean-veggie-burger/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Black Bean Veggie Burger</a>',
                    picture: '<img src="https://i1.wp.com/www.noracooks.com/wp-content/uploads/2017/12/IMG_4675.jpg?w=667&ssl=1" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Buffalo Tofu Sandwich',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="http://myvibrantkitchen.com/vegan-buffalo-tofu-chicken-sandwich/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Buffalo Tofu Sandwich</a>',
                    picture: '<img src="https://i1.wp.com/myvibrantkitchen.com/wp-content/uploads/2018/01/vegan-buffalo-sauce-tofu-chicken-sandwich-1.jpg?resize=900%2C1350" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Chickpea Hummus Wrap',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="http://www.pepperdelight.com/roasted-chickpeas-hummus-wrap/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Chickpea Hummus Wrap</a>',
                    picture: '<img src="https://i1.wp.com/www.pepperdelight.com/wp-content/uploads/2017/12/pepper-delight-hummus-wrap-1.jpg?w=1516" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Jackfruit Carnitas Tacos',
                    keyword: 'main',
                    time: 'yes',
                    link: '<a href="http://www.kalememaybe.com/kalememaybe/2017/10/16/jackfruit-carnitas-tacos" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Jackfruit Carnitas Tacos</a>',
                    picture: '<img src="https://static1.squarespace.com/static/554d5698e4b0e4053a33b9e5/t/59e58a7dccc5c53e1f0986cb/1508215552769/IMG_8785.JPG?format=750w" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Roasted Cauliflower Tacos',
                    keyword: 'main',
                    time: 'no',
                    link: '<a href="http://www.laureninbalance.com/quinoa-roasted-cauliflower-tacos-with-cashew-roasted-red-pepper-sauce/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Roasted Cauliflower Tacos</a>',
                    picture: '<img src="http://www.laureninbalance.com/wp-content/uploads/2017/10/roasted-cauliflower-tacos-1.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Avocado Fries',
                    keyword: 'snack',
                    time: 'yes',
                    link: '<a href="https://mindfulavocado.com/avocado-fries-four-ingredients/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Avocado Fries</a>',
                    picture: '<img src="https://mindfulavocado.com/wp-content/uploads/2018/01/avocado-fries_006.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Crispy Rice Squares',
                    keyword: 'snack',
                    time: 'no',
                    link: '<a href="https://www.whoneedssalad.com/crispy-rice-squares/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Crispy Rice Squares</a>',
                    picture: '<img src="https://i0.wp.com/www.whoneedssalad.com/wp-content/uploads/2018/01/crispy-rice-squares.jpg?w=1616&ssl=1" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Caramel Peanut Butter Truffles',
                    keyword: 'snack',
                    time: 'no',
                    link: '<a href="http://oatsodelicious.com/2017/12/29/salted-caramel-peanut-butter-truffles/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Caramel Peanut Butter Truffles</a>',
                    picture: '<img src="http://oatsodelicious.com/wp-content/uploads/2017/12/IMG_20171229_151933-750x867.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Corn Fritters',
                    keyword: 'snack',
                    time: 'no',
                    link: '<a href="https://www.cookclickndevour.com/corn-fritters-recipe-no-deep-fry-sweet-corn-fritters-recipe" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Corn Fritters</a>',
                    picture: '<img src="https://www.cookclickndevour.com/wp-content/uploads/2016/07/corn-fritters-recipe-c1.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Thai Peanut Toasty',
                    keyword: 'snack',
                    time: 'yes',
                    link: '<a href="http://www.chefpriyanka.com/thai-peanut-toasty/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Thai Peanut Toasty</a>',
                    picture: '<img src="http://www.chefpriyanka.com/wp-content/uploads/2017/10/thai-toasty-1.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'Vegan Bavarian Pretzels',
                    keyword: 'snack',
                    time: 'no',
                    link: '<a href="https://wellvegan.com/snack/vegan-bavarian-pretzels-oktoberfest" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">Vegan Bavarian Pretzels</a>',
                    picture: '<img src="https://bg6fhgmkni-flywheel.netdna-ssl.com/wp-content/uploads/2017/09/bavarian-pretzels-3@15x-683x1024.jpg" display="block" style="width:200px;height:250px;">'
                },
                {
                    name: 'The Best Hummus',
                    keyword: 'snack',
                    time: 'yes',
                    link: '<a href="https://mindfulavocado.com/best-hummus-recipe/" id="buttonLink" target="_blank" class="btn btn-warning btn-xs active" role="button">The Best Hummus</a>',
                    picture: '<img src="https://mindfulavocado.com/wp-content/uploads/2017/09/hummus_004.jpg" display="block" style="width:200px;height:250px;">'
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
