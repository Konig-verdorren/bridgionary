let mainBody = document.getElementById("mainbody");
let sidebar = document.getElementById("sideBody");

function bridge(name, url, imageurl, desc) {

    //sidebar
    let sideDiv = document.createElement("div")
    sideDiv.id = "bridgesSide"
    sideDiv.onclick = function() {
        window.location = `./bridges/${url}.html`
    };
    //main body img
    let sideDivImg = document.createElement("img")
    sideDivImg.id = "sideDivImg"
    sideDivImg.src = imageurl
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