function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    displaY(data.cards)
})

var deck=document.querySelector(".card-deck")
console.log(deck)


function displaY(mb){
    var deck=document.querySelector(".card-deck")
    console.log(deck)


    for(var i in mb){
        //console.log(i)
        var caddiv=document.createElement("div")
        var cading=document.createElement("img")
        cading.src=mb[i].img
        deck.appendChild(cading)
        deck.appendChild(caddiv)

        var cname=document.createElement("h2")
        cname.textContent=mb[i].name;
        caddiv.appendChild(cname)

        //rate area
        var rate=document.createElement("h3")
        rate.textContent=mb[i].rate;
        caddiv.appendChild(rate)
        
        //offer area

        var offer=document.createElement("h3")
        offer.textContent="off/-"+mb[i].offer;
        caddiv.appendChild(offer)

        //button area
        var btn=document.createElement("button")
        btn.classlist.add("btn,btn-success")
        btn.textContent=mb[i].button;
        caddiv.appendChild(btn)





    }
}
