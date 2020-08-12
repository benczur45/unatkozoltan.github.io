var API_KEY = '17871523-f4f6157e2d841a83f82aeeb38';
var limit = 20;

class Zoltán{
    constructor(string, keyword){
        this.string = string;
        this.keyword = keyword;
    };

    getImageUrl(){
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(this.keyword);
        var imageUrl = "";

        $.ajax({
            url: URL,
            dataType: 'json',
            async: false,
            success: function(data) {
                var index = Math.floor(Math.random() * limit);
                imageUrl =  data.hits[index].webformatURL;
            }
          });

          return imageUrl;

    }

}

var listázoltán = [
    new Zoltán("Unatkozoltán", "bored")
    ,new Zoltán("Talicskázoltán?", "wheelbarrow")
    ,new Zoltán("Kávézoltán?", "coffee")
    ,new Zoltán("Hugyozoltán?", "pee")
    ,new Zoltán("Hallgatózóltán?", "listening")
    ,new Zoltán("Dolgozoltán?", "working")
    ,new Zoltán("Táplálkozoltán?", "eat")

];
var index = Math.floor(Math.random() * (listázoltán.length+1));
document.getElementById('title').innerHTML = listázoltán[index].string;

imageUrl =  listázoltán[index].getImageUrl();
console.log(imageUrl);
document.getElementById("imgzoltan").src = imageUrl;