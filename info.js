fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(res => res.json())
    .then((data) => {
        var unoffical_summary = data.data["unofficial-summary"][0]
        data.data.regional.forEach(element => {
            if (element.loc == document.getElementsByClassName('info-state')[0].innerHTML) {
                var infoStateName = document.getElementsByClassName('info-state-name')
                infoStateName[1].innerHTML = element.totalConfirmed.toLocaleString("en-us");
                infoStateName[2].innerHTML = (element.totalConfirmed - element.discharged - element.deaths).toLocaleString("en-us");
                infoStateName[3].innerHTML = element.discharged.toLocaleString("en-us");
                infoStateName[4].innerHTML = element.deaths.toLocaleString("en-us");
                infoStateName[5].innerHTML = ((element.totalConfirmed / unoffical_summary.total) * 100).toFixed(1) + "%";
                infoStateName[6].innerHTML = (((element.totalConfirmed - element.discharged - element.deaths) / element.totalConfirmed) * 100).toFixed(1) + "%";
                infoStateName[7].innerHTML = (element.discharged / element.totalConfirmed * 100).toFixed(1) + "%";
                infoStateName[8].innerHTML = (element.deaths / element.totalConfirmed * 100).toFixed(1) + "%";
            }
        });
    })