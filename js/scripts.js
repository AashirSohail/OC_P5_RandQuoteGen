document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("slider").value = "1";
});

function decide(){
    document.getElementById('happy').addEventListener("click", function() {
    quote_gen(1)
    console.log("Clicked Happy")
    });

    document.getElementById('inspire').addEventListener("click", function() {
    quote_gen(2)
    console.log("Clicked Inspire")
    });
}

function quote_gen(check){
    var x = document.getElementById("slider").value;
    var area = document.getElementById("quotes");
    //var unique_array = unique(x);
    area.innerHTML = " ";
    console.log(x);
    for (i = 0; i < x; i++) {
        var text = "";
        (check != 1 ? text = inspire_text() : text = happy_text());
        console.log(text);
        area.innerHTML += '<p class = "animated bounceInUp delay-0.5s">' + text + '</p>';
    };
}

function happy_text(){
   
    var start = [
           "The pursuit of happiness",
           "Now and then it's good to",
           "Happiness is a how",
           "If only we'd stop trying",
           "The place to be happy is here",
           "Very little is needed to make a happy life",
           "When what we are is",
           "Live life",

       ]

        var middle = [ 
            "is a most ridiculous phrase",
             "pause in our pursuit of happiness",
             "not a what; a talent",
             "to be happy",
             "and you know what",
             "it is all within yourself",
             "what we want to be",
             "like you enjoy everything",

        ]

        var end = [
            "if you pursue happiness you'll never find it.",
            "and just be happy.",
            "not an object.",
            "we could have a pretty good time.",
            "the time to be happy is now.",
            "in your way of thinking.",
            "that's happiness.",
            "Need nothing.",
        ]

        return start[Math.floor(Math.random() * 8)] + " "  + middle[Math.floor((Math.random() * 8)%7)] + " "  + end[Math.floor((Math.random() * 8)%6)];
}

function inspire_text(){
   
   
    var start = [
           "Only I can change my life",
           "Good, better, best",
           "Knowing is not enough",
           "With the new day",
           "It does not matter how slowly you go",
           "We know what we are",
           "It is during our darkest moments",
           "We must never"


       ]

        var middle = [ 
            "No one can",
            "Never let it rest",
            "we must apply",
            "comes new strength",
            "as long as you",
            "but know not",
            "that we must focus",
            "never back down"

        ]

        var end = [
            "do it for me.",
            "Til your good is better and your better is best.",
            "Willing is not enough; we must do.",
            "and new thoughts.",
            "do not stop.",
            "what we may be.",
            "to see the light.",
            "nor giveup."
        ]

   return start[Math.floor(Math.random() * 8)] + " " + middle[Math.floor((Math.random() * 8)%5)] + " "  + end[Math.floor((Math.random() * 8)%7)];
}

function quit(){
    var area = document.getElementById("quotes");
    area.innerHTML = " "
}