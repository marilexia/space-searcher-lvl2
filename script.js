function satelliteImage() {
    var userInputs = document.getElementById("input").value
    var twoInputs = userInputs.split(" ")
    var userInput1 = twoInputs[0]
    var userInput2 = twoInputs[1]

    var nasaEndpoint = `https://api.nasa.gov/planetary/earth/imagery?lon=${userInput2}&lat=${userInput1}&date=2014-02-01&cloud_score=True&api_key=8Oo4SZaMpE78kMhNwi1Pj82kEhVeFqBYjHJvXjOO`

    console.log(nasaEndpoint)
    fetch(nasaEndpoint)
        .then(function(data) {
            return data.json()
        })

    .then(function(json) {
        var imagePath = json.url
        console.log(json)


        console.log(json)


        var card = document.createElement("div");
        card.setAttribute("class", "card col-sm-6");
        card.style.height = "500px";
        card.style.width = "300px"
        card.style.margin = "1%";
        card.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        document.body.appendChild(card);

        var satelliteimg = document.createElement("img")
        satelliteimg.setAttribute("class", "card-img-top");
        satelliteimg.setAttribute("alt", "Card image cap");
        satelliteimg.setAttribute("src", imagePath)
        satelliteimg.style.height = "400px";
        satelliteimg.style.width = "275px";
        satelliteimg.style.paddingTop = "5%";
        satelliteimg.style.paddingBottom = "5%";
        satelliteimg.style.display = "block";
        satelliteimg.style.margin = "auto";
        card.appendChild(satelliteimg);

    })
}

function imageOfDay() {
    var imageEndpoint = `https://api.nasa.gov/planetary/apod?api_key=8Oo4SZaMpE78kMhNwi1Pj82kEhVeFqBYjHJvXjOO`

    console.log(imageEndpoint)
    fetch(imageEndpoint)
        .then(function(data) {
            return data.json()
        })

    .then(function(json) {
        var astronomypath = json.url
        console.log(json)


        console.log(json)

        var card = document.createElement("div");
        card.setAttribute("class", "card col-sm-6");
        card.style.height = "500px";
        card.style.width = "300px"
        card.style.margin = "1%";
        card.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        document.body.appendChild(card);

        var astronomyimg = document.createElement("img")
        astronomyimg.setAttribute("class", "card-img-top");
        astronomyimg.setAttribute("alt", "Card image cap");
        astronomyimg.setAttribute("src", astronomypath)
        astronomyimg.style.height = "400px";
        astronomyimg.style.width = "275px";
        astronomyimg.style.paddingTop = "5%";
        astronomyimg.style.paddingBottom = "5%";
        astronomyimg.style.display = "block";
        astronomyimg.style.margin = "auto";
        card.appendChild(astronomyimg);

    })
}

var whenClicked = false


function newYorkTimes() {
    // var userInput = document.getElementById("randomArticle").value
    const endpoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=space&fq=news_desk:(%22Science%22)&api-key=5b0537f47127488b86fa6f4be023fc8b` //insert your endpoint into this string

    fetch(endpoint)
        .then(

            function(data) {
                return data.json()
            })
        .then(
            function(json) {
                console.log("here")
                if (whenClicked == true) {
                    var me = document.getElementById("removeMe")
                    me.style.display = "none"
                    me.setAttribute("id", "")
                    var removeCaption = document.getElementById("caption")
                    removeCaption.style.display = "none"
                    removeCaption.setAttribute("id", "")
                    var removeSneakPeek = document.getElementById("sneakPeek")
                    console.log(sneakPeek)
                    removeSneakPeek.style.display = "none"
                    removeSneakPeek.setAttribute("id", "")
                    
                    var newsCard = document.getElementById("articleCard")
                    newsCard.style.display = "none"
                    newsCard.setAttribute("id", "")
                    
                    
                }
                console.log("here2")
                console.log(json)

                var randomize = Math.floor(Math.random() * (json.response.docs.length - 0 + 1)) + 0;


                var articleURL = json.response.docs[randomize].web_url
                console.log(articleURL)

                var snippet = json.response.docs[randomize].snippet
                console.log(snippet)


                console.log(caption)



                console.log(articleURL)
                whenClicked = true

                var card = document.createElement("div");
                card.setAttribute("class", "card col-sm-6");
                card.setAttribute("id", "articleCard");
                card.style.height = "500px";
                card.style.width = "300px"
                card.style.margin = "1%";
                card.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                document.body.appendChild(card);

                var articleURL2 = document.createElement('a')
                articleURL2.setAttribute('href', articleURL);
                articleURL2.setAttribute("id", "removeMe")
                articleURL2.innerHTML = "LINK TO FULL ARTICLE"
                articleURL2.style.textDecoration = "none";
                articleURL2.style.marginTop = "10%";
                articleURL2.style.fontFamily = "Share Tech Mono,white,monospace";
                articleURL2.style.fontSize = "24px";
                articleURL2.style.color = "#FFFFFF";    
                card.appendChild(articleURL2);
                
                var caption = document.createElement('p')
                caption.innerHTML = "SNEAK PEEK OF THE ARTICLE:"
                caption.setAttribute("id", "caption")
                caption.style.marginTop = "10%";
                caption.style.fontFamily = "Share Tech Mono,white,monospace";
                caption.style.color = "#FFFFFF";    
                card.appendChild(caption);


                var sneakPeek = document.createElement('h2');
                sneakPeek.innerHTML = snippet;
                sneakPeek.setAttribute("id", "sneakPeek");
                sneakPeek.style.fontFamily = "Source Sans Pro,white,sans-serif";
                sneakPeek.style.color = "#FFFFFF";   
                sneakPeek.style.fontSize = "12px";
                card.appendChild(sneakPeek);
                

            })
        .catch(
            err => {
                // console.log(err)
            })
}
