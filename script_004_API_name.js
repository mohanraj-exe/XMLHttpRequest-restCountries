//API-JSON parsing via jsCode

//1.Creating request object
var request = new XMLHttpRequest();

//2.Open my request connection
request.open('GET','http://api.countrylayer.com/v2/name/In?access_key=836da021ba39c6a4712a61d8bcf88ee8');

//3.Send a request
request.send();

//4.Data after response
request.onload = function(){
    var data = JSON.parse(this.response);
    
    for(i=0; i<data.length; i++){
        console.log(data[i])
    }
}