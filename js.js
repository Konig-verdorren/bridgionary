let mainBody = document.getElementById("mainbody");
let sidebar = document.getElementById("sideBody");

function bridge(name, url, imageurl, desc) {
    //main body
    let mainDiv = document.createElement("div")
    mainDiv.id = "bridgesMain"
    mainDiv.onclick = function() {window.location = `./bridges/${url}.html`}
    //main body img
    let mainDivImg = document.createElement("img")
    mainDivImg.id = "mainDivImg"
    mainDivImg.src = "bridges/img/" + imageurl
        //mainbody Name
    let mainDivName = document.createElement("a")
    mainDivName.id = "mainDivName"
    mainDivName.innerText = name
        //mainbody description
    let mainDivDesc = document.createElement("a")
    mainDivDesc.id = "mainDivDesc"
    mainDivDesc.innerText = "\n" + desc
        //appends
    mainDiv.appendChild(mainDivImg)
    mainDiv.appendChild(mainDivName)
    mainDivName.appendChild(mainDivDesc)
    mainBody.appendChild(mainDiv)

    //sidebar
    let sideDiv = document.createElement("div")
    sideDiv.id = "bridgesSide"
    sideDiv.onclick = function() {window.location = `./bridges/${url}.html`};
    //main body img
    let sideDivImg = document.createElement("img")
    sideDivImg.id = "sideDivImg"
    sideDivImg.src = "bridges/img/" + imageurl
        //mainbody Name
    let sideDivName = document.createElement("a")
    sideDivName.id = "sideDivName"
    sideDivName.innerText = name
        //mainbody description
    let sideDivDesc = document.createElement("a")
    sideDivDesc.id = "sideDivDesc"
    sideDivDesc.innerText = "\n" + desc
        //append
    sideDiv.appendChild(sideDivImg)
    sideDiv.appendChild(sideDivName)
    sideDivName.appendChild(sideDivDesc)
    sidebar.appendChild(sideDiv)
}

//ok ok lesten the thing above me ^ is desgusting but it works and its fats. so stfu
