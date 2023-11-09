import data from './data.json' assert { type: 'json' };
const scoreStats={
    "AV":"",
    "AC":"",
    "PR":"",
    "UI":"",
    "scope":"",
    "conf":"",
    "integ":"",
    "avail":"",
    "health":"",
    "sens":""
}

document.addEventListener("DOMContentLoaded",function(){
    addClickEvent()
})
function addClickEvent(){
    const allButtons = document.querySelectorAll("input");
    for(const button of allButtons){
        button.addEventListener("click",function(){
            scoreStats[button.name] = button.value;
            updateScore()
        })
    }
}
function updateStyles(){
    const warning = document.getElementById("warning");
    warning.style.display="none";

}
function calculateBaseConf(){
    if(scoreStats.sens === "sens_N" && scoreStats.conf === "conf_N") return 0.0;
    else if(scoreStats.sens === "sens_N" && scoreStats.conf === "conf_L") return 0.22;
    else if(scoreStats.sens === "sens_N" && scoreStats.conf === "conf_H") return 0.56;

    else if(scoreStats.sens === "sens_L" && scoreStats.conf === "conf_N") return 0.00;
    else if(scoreStats.sens === "sens_L" && scoreStats.conf === "conf_L") return 0.65;
    else if(scoreStats.sens === "sens_L" && scoreStats.conf === "conf_H") return 0.75;

    else if(scoreStats.sens === "sens_H" && scoreStats.conf === "conf_N") return 0.00;
    else if(scoreStats.sens === "sens_H" && scoreStats.conf === "conf_L") return 0.85;
    else if(scoreStats.sens === "sens_H" && scoreStats.conf === "conf_H") return 0.95;

}
function calculateBaseInteg(){
    if(scoreStats.health === "health_N" && scoreStats.integ === "integ_N") return 0.0
    else if(scoreStats.health === "health_N" && scoreStats.integ === "integ_L") return 0.22
    else if(scoreStats.health === "health_N" && scoreStats.integ === "integ_H") return 0.56

    else if(scoreStats.health === "health_L" && scoreStats.integ === "integ_N") return 0.55
    else if(scoreStats.health === "health_L" && scoreStats.integ === "integ_L") return 0.60
    else if(scoreStats.health === "health_L" && scoreStats.integ === "integ_H") return 0.75

    else if(scoreStats.health === "health_H" && scoreStats.integ === "integ_N") return 0.85
    else if(scoreStats.health === "health_H" && scoreStats.integ === "integ_L") return 0.90
    else if(scoreStats.health === "health_H" && scoreStats.integ === "integ_H") return 0.95
}
function calculateBaseAvail(){
    if(scoreStats.health === "health_N" && scoreStats.avail === "avail_N") return 0.0;
    else if(scoreStats.health === "health_N" && scoreStats.avail === "avail_L") return 0.22;
    else if(scoreStats.health === "health_N" && scoreStats.avail === "avail_H") return 0.22;

    else if(scoreStats.health === "health_L" && scoreStats.avail === "avail_N") return 0.22;
    else if(scoreStats.health === "health_L" && scoreStats.avail === "avail_L") return 0.22;
    else if(scoreStats.health === "health_L" && scoreStats.avail === "avail_H") return 0.22;

    else if(scoreStats.health === "health_H" && scoreStats.avail === "avail_N") return 0.22;
    else if(scoreStats.health === "health_H" && scoreStats.avail === "avail_L") return 0.22;
    else if(scoreStats.health === "health_H" && scoreStats.avail === "avail_H") return 0.22;
}
function calculateScore(){
    updateStyles();
    const score = document.getElementById("score")
    let scopeStatus= data[scoreStats.scope];
    let baseConfidentiality = calculateBaseConf()
    let baseIntegrity = calculateBaseInteg()
    let baseAvailablity = calculateBaseAvail()

    let scoreBase = baseConfidentiality + baseIntegrity + baseAvailablity;
    let scoreExploitability = data[scoreStats.AV] * data[scoreStats.AC] * data[scoreStats.PR] * data[scoreStats.UI]
    let scoreFinal = (scopeStatus) * ((3.326258289*scoreBase)+ (1.1*scoreExploitability))
    score.innerHTML = scoreFinal.toFixed(1)


}
function updateScore() {
	const isContainValue = Object.values(scoreStats).every((val)=>val !== ""); // check if all buttons are checked
    if(isContainValue)
        calculateScore()
    
}