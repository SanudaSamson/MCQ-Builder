const fileNameInput = document.getElementById("fileName")
const mainSection = document.getElementById("sectionMain")
const btnLayout1 = document.getElementById("layout1")
const btnLayout2 = document.getElementById("layout2")
const errMsg = document.getElementById("errMsg")
const subContainer = document.getElementById("subContainer")
const selectBullets = document.getElementById("bullets")
var questionNo = 0
var draggables = null

var numBullets = ["1","2","3","4","5"]
var romanBullets = ["I","II","III","IV","V"]
var letterBullets = ["A","B","C","D","E"]

var bullets = numBullets

/* 1. retrieve the file name and no of choices from local storage*/
var fileName = localStorage.getItem("fileName")
fileNameInput.value = fileName
const noOfChoices = Number(localStorage.getItem("noOfChoices"))

function getBulletType(){
    var bulletType = selectBullets.value
    if (bulletType == "I"){
        bullets = romanBullets
    }
    else if (bulletType == "A"){
        bullets = letterBullets
    }
    return bullets
}

function addLongCell(row, text){
    /* 
    1. add a cell to the row
    2. add text to that cell (cell.width = 100% )

    @params:row -> row you want to insert the cell into
    @params:text{string} -> text you want to add to cell

    @return: null
    */

    var cell = row.insertCell(0)

    cell.style.width = "100%"
    cell.colSpan = `${noOfChoices}`
    cell.innerHTML = `<p contenteditable='true'>${text}</p>`;
}
function addShortCell(row){
    /*
    1. add noOfChoices of cell to the row 
    2. add no of the choice(eg: "1.") to each cell respectively 

    @params:row -> row you want to insert the cells into

    @return: null
    */

    for(let i = 0; i<noOfChoices;i++){
        var cell = row.insertCell(i)
        cell.style.width = `${100/noOfChoices}%`
        cell.style.overflowWrap = "break-word"
        bullets = getBulletType()
        cell.innerHTML = `<p contenteditable='true'>${bullets[i]}. </p>`;
    }
}

// handling button layout1
function handleBtnLayout1(){
    var table = document.createElement("table")
    table.classList.add("draggable")
    table.draggable = "true"
    table.style.width = "100%"
    table.style.margin = "5px 0px"
    
    var rowQ = table.insertRow(table.lastIndex);
    questionNo++
    var rowC = table.insertRow(table.lastIndex);

    addLongCell(rowQ,`${questionNo}. Question`)
    addShortCell(rowC)

    mainSection.append(table)
    
    subContainer.style.display = "none";
    mainSection.style.display = "block";
}

// handling button layout2
function handleBtnLayout2(){
    var table = document.createElement("table")
    table.classList.add("draggable")
    table.draggable = "true"
    table.style.width = "100%"
    table.style.margin = "5px 0px"
    
    var rowQ = table.insertRow(table.lastIndex);
    questionNo++
    addLongCell(rowQ, `${questionNo}. Question`)
    for(let i=0;i<noOfChoices;i++){
        var rowC = table.insertRow(table.lastIndex);
        bullets = getBulletType()
        addLongCell(rowC, `${bullets[i]}. `)
    }

    mainSection.append(table)

    subContainer.style.display = "none";
    mainSection.style.display = "block";
}

// handling export part
function Export2Word(){
    if(mainSection.innerHTML == ""){
        alert("Please type at least 1 MCQ to export.");
    }
    else if (fileNameInput.value == ""){
        // errMsg.innerText = "Please enter a file name"
        alert("Please enter a file name")
        
    }
    else if(fileNameInput.value.indexOf(" ") !== -1){
        // errMsg.innerText = "File name cannot contain spaces"
        alert("File name cannot contain spaces")
    }
    else{
        var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
        var postHtml = "</body></html>";
        var html = preHtml+mainSection.innerHTML+postHtml;
        

        var blob = new Blob(['\ufeff', html], {
            type: 'application/msword'
        });
        
        // Specify link url
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        
        // Specify file name
        var fileName = fileNameInput.value+'.doc';
        
        // Create download link element
        var downloadLink = document.createElement("a");

        document.body.appendChild(downloadLink);
        
        if(navigator.msSaveOrOpenBlob ){
            navigator.msSaveOrOpenBlob(blob, fileName);
        }else{
            // Create a link to the file
            downloadLink.href = url;
            
            // Setting the file name
            downloadLink.download = fileName;
            
            //triggering the function
            downloadLink.click();
        }
        
        document.body.removeChild(downloadLink);
    }
}

// deleting a table when necessory
// you've press the alt key and click the table you want delete
mainSection.addEventListener("click", (e)=>{
    if (e.altKey){
        if (e.target.offsetParent.offsetParent.innerText[0] == questionNo){
            questionNo--
        }
        e.target.offsetParent.offsetParent.remove()
    }
})

// making table move on drag for device with pointing device
function moveTable(){
    draggables = document.querySelectorAll(".draggable")
    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging")
        })
        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging")
        })
    })

    mainSection.addEventListener("dragover", e=>{
        e.preventDefault()
        const afterElement = getDragAfterElement(mainSection, e.clientY)
        const draggable = document.querySelector(".dragging")
        if(afterElement == null){
            mainSection.append(draggable)
        }
        else{
            mainSection.insertBefore(draggable, afterElement)
        }
    })

    function getDragAfterElement(section, y){
        const draggableElements = [...section.querySelectorAll(".draggable:not(.dragging)")]
        return draggableElements.reduce((closest, child)=>{
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height/2
            if (offset < 0 && offset>closest.offset){
                return {offset:offset, element:child}
            }
            else{
                return closest
            } 
        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
}

btnLayout1.addEventListener("click", ()=>{
    moveTable()
})

btnLayout2.addEventListener("click", ()=>{
    moveTable()
})


