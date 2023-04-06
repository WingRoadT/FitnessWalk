window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var lanid = urlParams.get('id');
    var placeid = urlParams.get('place');
    document.getElementById("title").innerHTML =lanid;
    fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) { 
        for (var i = 0; i < data.length; i++){
            var obj = data[i];
            if(placeid==obj.Title_en){
                if(lanid == "en"){
                    document.getElementById("title").innerHTML ="Walk: <br>" + obj.Title_en;
                    document.getElementById("district").innerHTML ="District: <br>" + obj.District_en;
                    document.getElementById("route").innerHTML =obj.Route_en;
                    document.getElementById("access").innerHTML ="Traffic: <br>" + obj.HowToAccess_en;
                    document.getElementById("map").innerHTML ="Map: <br>";
                    document.getElementById("lat").innerHTML ="Latitude: " + obj.Latitude;
                    document.getElementById("long").innerHTML ="Longitude: " + obj.Longitude;
                }
                else if(lanid == "tc"){
                    document.getElementById("title").innerHTML ="路徑: <br>" + obj.Title_tc;
                    document.getElementById("district").innerHTML ="地區: <br>" + obj.District_tc;
                    document.getElementById("route").innerHTML =obj.Route_tc;
                    document.getElementById("access").innerHTML ="交通: <br>" + obj.HowToAccess_tc;
                    document.getElementById("map").innerHTML ="地圖: <br>" ;
                    document.getElementById("lat").innerHTML ="緯度: " + obj.Latitude;
                    document.getElementById("long").innerHTML ="經度: " + obj.Longitude;
                }
                else {
                    document.getElementById("title").innerHTML ="路径: <br>" + obj.Title_sc;
                    document.getElementById("district").innerHTML ="地区: <br>" + obj.District_sc;
                    document.getElementById("route").innerHTML =obj.Route_sc;
                    document.getElementById("access").innerHTML ="交通: <br>" + obj.HowToAccess_sc;
                    document.getElementById("map").innerHTML ="地图: <br>";
                    document.getElementById("lat").innerHTML ="纬度:" + obj.Latitude;
                    document.getElementById("long").innerHTML ="经度： " + obj.Longitude;
                }
                var lat = parseFloat(obj.Latitude);
                var lng = parseFloat(obj.Longitude);
                
                var map = new google.maps.Map(document.getElementById('show'), {
                  center: {lat: lat, lng: lng},
                  zoom: 16
                });
                
                var marker = new google.maps.Marker({
                    position: {lat: lat, lng: lng},
                    map: map,
                  });
            }
        }    
    })
}

function goBack() {
    var urlParams = new URLSearchParams(window.location.search);
    var lanid = urlParams.get('id');
    window.location.href = "main.html?id=" + lanid;
}