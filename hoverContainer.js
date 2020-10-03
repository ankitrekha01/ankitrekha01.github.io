fetch("https://api.rootnet.in/covid19-in/stats/latest")
.then(res => res.json())
.then((data)=>{
    /*Hover Effect in the container*/
    document.getElementById("contConfirmed").onclick = function(){hoverEffectConf()};
    document.getElementById("contActive").onclick = function(){hoverEffectAc()};
    document.getElementById("contRecov").onclick = function(){hoverEffectRe()};
    document.getElementById("contDeath").onclick = function(){hoverEffectDe()};


function hoverEffectConf() {
    document.getElementById('contHover').style.left = pos;

    var start = setTimeout(() => {
        document.getElementById('contHover').classList.remove("contHover");
        document.getElementById('contConfirmed').classList.remove("contConfirmed");
        document.getElementById('contHover').style.backgroundColor = "rgba(11, 102, 238,0.158)";
    }, 0);
    setTimeout(() => {
        clearTimeout(start)
        document.getElementById('contHover').classList.add("contHover");
        document.getElementById('contConfirmed').classList.add("contConfirmed");
        document.getElementById('contHover').style.backgroundColor = "rgba(11, 102, 238)";
    }, 500)


    var x = document.querySelectorAll(".colorMap");
    for (i = 0; i < x.length; i++) {
        x[i].style.stroke = "rgba(11, 102, 238)";
    }

    document.getElementById("name").style.color="rgb(11, 102, 238)";
    document.getElementById("situation").style.color="rgba(11, 102, 238)";
    document.getElementById("situation").innerHTML = "Confirmed";
    document.getElementById("odometer").style.color = "rgb(11, 102, 238)";

    if(document.getElementById('name').innerHTML=="India")
    {
        document.getElementById("odometer").innerHTML = document.getElementsByClassName('contNumber')[0].innerHTML
    }
    data.data.regional.forEach(e => {
        if(e.loc==document.getElementById('name').innerHTML)
        {
            document.getElementById('odometer').innerHTML = e.totalConfirmed;
        }
    });
}


function hoverEffectAc() {
    document.getElementById('contHover').style.left = parseInt(pos)+extra+"%";
    document.getElementById('contHover').classList.remove("contHover");
    document.getElementById('contActive').classList.remove("contActive");

    var start = setTimeout(() => {
        document.getElementById('contHover').style.backgroundColor = "rgba(252, 4, 4,0.158)";
    }, 0);
    setTimeout(() => {
        clearTimeout(start)
        document.getElementById('contHover').classList.add("contHover");
        document.getElementById('contActive').classList.add("contActive");
        document.getElementById('contHover').style.backgroundColor = "rgba(252, 4, 4)";
    }, 500)


    var x = document.querySelectorAll(".colorMap");
    for (i = 0; i < x.length; i++) {
        x[i].style.stroke = "rgba(252, 4, 4)";
    }

    document.getElementById("name").style.color="rgba(252, 4, 4)";
    document.getElementById("situation").style.color="rgba(252, 4, 4)";
    document.getElementById("situation").innerHTML = "Active";
    document.getElementById("odometer").style.color = "rgba(252, 4, 4)";

    if(document.getElementById('name').innerHTML=="India")
    {
        document.getElementById("odometer").innerHTML = document.getElementsByClassName('contNumber')[1].innerHTML
    }

    data.data.regional.forEach(e => {
        if(e.loc==document.getElementById('name').innerHTML)
        {
            document.getElementById('odometer').innerHTML = e.totalConfirmed-e.discharged-e.deaths;
        }
    });
}


function hoverEffectRe() {
    document.getElementById('contHover').style.left = parseInt(pos)+extra*2+"%";
    document.getElementById('contHover').classList.remove("contHover");
    document.getElementById('contRecov').classList.remove("contRecov");

    var start = setTimeout(() => {
        document.getElementById('contHover').style.backgroundColor = "rgba(7, 182, 7,0.158)";
    }, 0);
    setTimeout(() => {
        clearTimeout(start)
        document.getElementById('contHover').classList.add("contHover");
        document.getElementById('contRecov').classList.add("contRecov");
        document.getElementById('contHover').style.backgroundColor = "rgba(7, 182, 7)";
    }, 500)


    var x = document.querySelectorAll(".colorMap");
    for (i = 0; i < x.length; i++) {
        x[i].style.stroke = "rgba(7, 182, 7)";
    }

    document.getElementById("name").style.color="rgba(7, 182, 7)";
    document.getElementById("situation").style.color="rgba(7, 182, 7)";
    document.getElementById("situation").innerHTML = "Recovered";
    document.getElementById("odometer").style.color = "rgba(7, 182, 7)";

    if(document.getElementById('name').innerHTML=="India")
    {
        document.getElementById("odometer").innerHTML = document.getElementsByClassName('contNumber')[2].innerHTML
    }

    data.data.regional.forEach(e => {
        if(e.loc==document.getElementById('name').innerHTML)
        {
            document.getElementById('odometer').innerHTML = e.discharged;
        }
    });
}


function hoverEffectDe() {
    document.getElementById('contHover').style.left = parseInt(pos)+extra*3+"%";
    document.getElementById('contHover').classList.remove("contHover");
    document.getElementById('contDeath').classList.remove("contDeath");

    var start = setTimeout(() => {
        document.getElementById('contHover').style.backgroundColor = "rgba(128, 128, 128,0.158)";
    }, 0);
    setTimeout(() => {
        clearTimeout(start)
        document.getElementById('contHover').classList.add("contHover");
        document.getElementById('contDeath').classList.add("contDeath");
        document.getElementById('contHover').style.backgroundColor = "rgba(128, 128, 128)";
    }, 500)


    var x = document.querySelectorAll(".colorMap");
    for (i = 0; i < x.length; i++) {
        x[i].style.stroke = "rgba(128, 128, 128)";
    }


    document.getElementById("name").style.color="rgba(128, 128, 128)";
    document.getElementById("situation").style.color="rgba(128, 128, 128)";
    document.getElementById("situation").innerHTML = "Deaths";
    document.getElementById("odometer").style.color = "rgba(128, 128, 128)";

    if(document.getElementById('name').innerHTML=="India")
    {
        document.getElementById("odometer").innerHTML = document.getElementsByClassName('contNumber')[3].innerHTML
    }

    data.data.regional.forEach(e => {
        if(e.loc==document.getElementById('name').innerHTML)
        {
            document.getElementById('odometer').innerHTML = e.deaths;
        }
    });
}

});
