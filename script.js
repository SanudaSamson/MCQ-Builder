const container = document.getElementById("container");
const subContainer = document.getElementById("subContainer");

const btnLayout1 =  document.getElementById("layout1")
const btnLayout2 =  document.getElementById("layout2")
const btnLayout3 =  document.getElementById("layout3")
const btnLayout4 =  document.getElementById("layout4")

const btnChoice1 = document.getElementById("btnChoice1")
const btnChoice2 = document.getElementById("btnChoice2")

function enableBtn1(){
  btnLayout1.style.display = "block"
  btnLayout2.style.display = "block"
  btnChoice2.style.cursor = "not-allowed"
  btnChoice2.disabled = "true"
  btnChoice1.style.border = "2px solid red"
  btnChoice2.style.color = "#b6b5b5"
}
function enableBtn2(){
  btnLayout3.style.display = "block"
  btnLayout4.style.display = "block"
  btnChoice1.style.cursor = "not-allowed"
  btnChoice1.disabled = "true"
  btnChoice2.style.border = "2px solid red"
  btnChoice1.style.color = "#b6b5b5"

}
// function resetBtn(){
//   btnLayout1.style.display = "none"
//   btnLayout2.style.display = "none"
//   btnChoice2.disabled = ""
//   btnLayout3.style.display = "none"
//   btnLayout4.style.display = "none"
//   btnChoice1.disabled = ""
//   container.innerHTML = "<table id='fetch' border='0'></table>"
//   subContainer.style.display = "flex";
//   container.style.display = "none"
//   btnChoice1.style.cursor = "pointer"
//   btnChoice2.style.cursor = "pointer"
// }

function Export2Word(element, filename = ''){
  if(container.innerText == ""){
    alert("Please type at least 1 MCQ to export.");
  }
  else{
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+container.innerHTML+postHtml;
    

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
  }
    
}

var table = document.getElementById('fetch');
table.width = "100%";

var editTB;

function CreateTable(){
        var table = document.getElementById("fetch");
        var row = table.insertRow(table.lastIndex);
        var row1 = table.insertRow(table.lastIndex);
        var cellQ = row.insertCell(0);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);

        cellQ.colSpan = "4";
        cellQ.style.padding= "5px 0px";
        cellQ.width = "100%";
        cell4.colSpan = "2";
        cell1.style.padding= "2px 0px 2px 20px";
        cell2.style.padding= "2px 0px 2px 20px";
        cell3.style.padding= "2px 0px 2px 20px";
        cell4.style.padding= "2px 0px 2px 20px";
        cellQ.innerText = "Question";
        cell1.width = "25%";
        cell2.width = "25%";
        cell3.width = "25%";
        cell4.width = "25%";
        cell1.innerHTML = "1. ";
        cell2.innerHTML = "2. ";
        cell3.innerHTML = "3. ";
        cell4.innerHTML = "4. ";
        subContainer.style.display = "none";
        container.style.display = "flex";

    }

function CreateTable1(){
        var table = document.getElementById("fetch");
        var row = table.insertRow(table.lastIndex);
        var row1 = table.insertRow(table.lastIndex);
        var row2 = table.insertRow(table.lastIndex);
        var row3 = table.insertRow(table.lastIndex);
        var row4 = table.insertRow(table.lastIndex);
        var cellQ = row.insertCell(0);
        var cell1 = row1.insertCell(0);
        var cell2 = row2.insertCell(0);
        var cell3 = row3.insertCell(0);
        var cell4 = row4.insertCell(0);

        cellQ.colSpan = "4";
        cellQ.style.padding= "10px 0px 2px 0px";
        cellQ.width = "100%";
        cell1.colSpan = "4";
        cell1.width = "100%";
        cell2.colSpan = "4";
        cell2.width = "100%";
        cell3.colSpan = "4";
        cell3.width = "100%";
        cell4.colSpan = "4";
        cell4.width = "100%";
        cell1.style.padding= "2px 0px 2px 20px";
        cell2.style.padding= "2px 0px 2px 20px";
        cell3.style.padding= "2px 0px 2px 20px";
        cell4.style.padding= "2px 0px 2px 20px";

        cellQ.innerText = "Question";
        cell1.innerHTML = "1. ";
        cell2.innerHTML = "2. ";
        cell3.innerHTML = "3. ";
        cell4.innerHTML = "4. ";

        subContainer.style.display = "none";
        container.style.display = "flex";

    }

function CreateTable2(){
        var table = document.getElementById("fetch");
        var row = table.insertRow(table.lastIndex);
        var row1 = table.insertRow(table.lastIndex);
        var cellQ = row.insertCell(0);
        var cell1 = row1.insertCell(0);
        var cell2 = row1.insertCell(1);
        var cell3 = row1.insertCell(2);
        var cell4 = row1.insertCell(3);
        var cell5 = row1.insertCell(4);

        cellQ.colSpan = "5";
        cellQ.style.padding= "5px 0px";
        cellQ.width = "100%";
        cell1.style.padding= "2px 0px 2px 20px";
        cell2.style.padding= "2px 0px 2px 20px";
        cell3.style.padding= "2px 0px 2px 20px";
        cell4.style.padding= "2px 0px 2px 20px";
        cell5.style.padding= "2px 0px 2px 20px";
        cellQ.innerText = "Question";
        cell1.width = "20%";
        cell2.width = "20%";
        cell3.width = "20%";
        cell4.width = "20%";
        cell5.width = "20%";
        cell1.innerHTML = "1. ";
        cell2.innerHTML = "2. ";
        cell3.innerHTML = "3. ";
        cell4.innerHTML = "4. ";
        cell5.innerHTML = "5. ";
        subContainer.style.display = "none";
        container.style.display = "flex";

    }

function CreateTable3(){
  var table = document.getElementById("fetch");
  var row = table.insertRow(table.lastIndex);
  var row1 = table.insertRow(table.lastIndex);
  var row2 = table.insertRow(table.lastIndex);
  var row3 = table.insertRow(table.lastIndex);
  var row4 = table.insertRow(table.lastIndex);
  var row5 = table.insertRow(table.lastIndex);
  var cellQ = row.insertCell(0);
  var cell1 = row1.insertCell(0);
  var cell2 = row2.insertCell(0);
  var cell3 = row3.insertCell(0);
  var cell4 = row4.insertCell(0);
  var cell5 = row5.insertCell(0);

  cellQ.colSpan = "5";
  cellQ.style.padding= "10px 0px 2px 0px";
  cellQ.width = "100%";
  cell1.colSpan = "5";
  cell1.width = "100%";
  cell2.colSpan = "5";
  cell2.width = "100%";
  cell3.colSpan = "5";
  cell3.width = "100%";
  cell4.colSpan = "5";
  cell4.width = "100%";
  cell5.colSpan = "5";
  cell5.width = "100%";
  cell1.style.padding= "2px 0px 2px 20px";
  cell2.style.padding= "2px 0px 2px 20px";
  cell3.style.padding= "2px 0px 2px 20px";
  cell4.style.padding= "2px 0px 2px 20px";
  cell5.style.padding= "2px 0px 2px 20px";

  cellQ.innerText = "Question";
  cell1.innerHTML = "1. ";
  cell2.innerHTML = "2. ";
  cell3.innerHTML = "3. ";
  cell4.innerHTML = "4. ";
  cell5.innerHTML = "5. ";

  subContainer.style.display = "none";
  container.style.display = "flex";

}
table.onclick = function(event) {
  let target = event.target.closest('.cancel,.ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'cancel') {
    editdone(editTB.elem, false);
  } else if (target.className == 'ok') {
    editdone(editTB.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editTB) return;

    editmode(target);
  }

};

function editmode(td) {
  editTB = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
   
  textArea.style.width = "85%";
  textArea.rows = "1";
  textArea.style.resize = "none";
  textArea.placeholder = "Type Here";
  textArea.className = 'edit-area';
  textArea.addEventListener('input', autoResize);
  function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
};
  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="ok">OK</button><button class="cancel">CANCEL</button></div>'
  );
}
const delBtn = document.getElementById("delBtn");


function editdone(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editTB.data;
  }
  td.classList.remove('edit-td');
  editTB = null;
}

var modal = document.getElementById("myModal");
      
      var btn = document.getElementById("myBtn");
      
      var span = document.getElementsByClassName("close")[0];
      
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }


      let mybutton = document.getElementById("myBtn2");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }



