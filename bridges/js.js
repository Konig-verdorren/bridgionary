let sidebar = document.getElementById("sideBody");

function bridge(name, imageurl, desc) {

    //sidebar
    let sideDiv = document.createElement("div")
    sideDiv.id = "bridgesSide"
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