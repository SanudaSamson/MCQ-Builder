const btnCreateFile = document.getElementById("btnCreateFile")
const errMsg = document.getElementById("errMsg")

btnCreateFile.addEventListener("click", (e) => {
    const noOfChoices = document.getElementById("noOfChoices").value
    const fileName = document.getElementById("fileName").value

    if (fileName == ""){
        errMsg.innerText = "Please enter a file name"
    }
    else if(fileName.indexOf(" ") !== -1){
        errMsg.innerText = "File name cannot contain spaces"
    }
    else{
        localStorage.setItem("fileName", fileName)
        localStorage.setItem("noOfChoices", noOfChoices)
        window.location.assign("/mainPage.html");
    }
})
