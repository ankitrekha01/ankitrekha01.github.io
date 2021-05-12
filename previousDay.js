fetch("https://api.covid19india.org/states_daily.json")
    .then(res => res.json())
    .then((data) => {
        var array = Object.keys(data.states_daily[0])
        var lastDayConfirmed=0;
        var lastDayRec = 0;
        var lastDayDeath = 0;
        array.forEach((e)=>{
            if(e!='date' && e!="status")
            {
                lastDayConfirmed += parseInt(data.states_daily[data.states_daily.length-3][e])/2;
                lastDayRec+=parseInt(data.states_daily[data.states_daily.length-2][e])/2;
                lastDayDeath+=parseInt(data.states_daily[data.states_daily.length-1][e])/2;
            }
        })
        var lastDayActive = Math.abs(lastDayConfirmed-lastDayRec-lastDayDeath);

        /*Data in the container*/
        document.getElementsByClassName('previousDayNum')[0].innerHTML = "+"+ parseInt(lastDayConfirmed).toLocaleString('en-IN');
        document.getElementsByClassName('previousDayNum')[2].innerHTML = "+"+ parseInt(lastDayRec).toLocaleString('en-IN');
        document.getElementsByClassName('previousDayNum')[3].innerHTML = "+"+ parseInt(lastDayDeath).toLocaleString('en-IN');
    })
