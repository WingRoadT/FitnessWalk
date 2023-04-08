window.onload = function() {
    
    var urlParams = new URLSearchParams(window.location.search);
    var buttonId = urlParams.get('id');
    if(buttonId == "en"){
        document.getElementById("header").innerHTML = "Result";
        document.getElementById("empty").innerHTML = "Clear Search Result";
    } 
    else if(buttonId == "tc"){
        document.getElementById("header").innerHTML = "搜尋結果";
        document.getElementById("empty").innerHTML = "清除搜尋結果";
    }
    else {
        document.getElementById("header").innerHTML = "搜寻结果";
        document.getElementById("empty").innerHTML = "清除搜寻结果";

    }
    var urlParams = new URLSearchParams(window.location.search);
    var search = urlParams.get('search');    

    fetch('data.json')
    .then(function(response) {
        return response.json();
        })
    .then(function(data) { 

        var filteredData = data.filter(function(item) {
            var regex = new RegExp(search, 'i');
            return regex.test(item.Title_en) || regex.test(item.District_en)|| (regex.test(item.Title_sc) || regex.test(item.Title_tc)) || (regex.test(item.District_sc) || regex.test(item.District_tc));
            
        });
        

        var searchResults = document.getElementById("result");
        searchResults.innerHTML = "";
        var urlParams = new URLSearchParams(window.location.search);
        var buttonId = urlParams.get('id');
        if(buttonId == "en"){
            for (var i = 0; i < filteredData.length; i++) {
                var obj = filteredData[i];
                var resultItem = document.createElement("div");
                resultItem.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_en + "</h2><p>" + obj.District_en + "</p></button>";
                document.getElementById('result').appendChild(resultItem);

            }
        }
        else if(buttonId == "tc"){
            for (var i = 0; i < filteredData.length; i++) {
                var obj = filteredData[i];
                var resultItem = document.createElement("div");
                resultItem.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_tc + "</h2><p>" + obj.District_tc + "</p></button>";                
                document.getElementById('result').appendChild(resultItem);
            }
        }
        else {
            for (var i = 0; i < filteredData.length; i++) {
                var obj = filteredData[i];
                var resultItem = document.createElement("div");
                resultItem.innerHTML = "<button onclick=\"detail(this.id)\" id=\"" + obj.Title_en + "\"><h2>" + obj.Title_sc + "</h2><p>" + obj.District_sc + "</p></button>";                
                document.getElementById('result').appendChild(resultItem);
            }
        }
    });
    
    

}

var urlParams = new URLSearchParams(window.location.search);
var lanId = urlParams.get('id');

function detail(place){
    if(lanId == "en"){
        window.location.href = "detail.html?id=en&place=" + place;
    }
    else if(lanId == "tc"){
        window.location.href = "detail.html?id=tc&place=" + place;
    }
    else {
        window.location.href = "detail.html?id=sc&place=" + place;
    }
}

function clearsearch() {

    if(lanId == "en"){
        window.location.href = "main.html?id=en";
    }
    else if(lanId == "tc"){
        window.location.href = "main.html?id=tc";
    }
    else {
        window.location.href = "main.html?id=sc";
    }
}
