var newUL = document.getElementById("serverlog");


function copyToClipboard(str){
  var el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function buildList(data){
        // Create a text node
        copyToClipboard(data);
        var newTextNode = document.createElement("button"); 
        newTextNode.innerHTML = data;
        newTextNode.value = data;
        // Create a list element
        var newListItem = document.createElement("li");
        newTextNode.classList.add("scannsButtons");
        newTextNode.addEventListener("click", function(event){
//          console.log(event);
  //        console.log(event.path[0].value);
            copyToClipboard(event.path[0].value);
        });
        // Append text node and list item
        newListItem.appendChild(newTextNode); 

     
        newUL.appendChild(newListItem); 
        var items = document.querySelectorAll(".scannsButtons");
        var last = items[items.length-1];
        last.scrollIntoView();
      
};


var arrayBufferToString = function(buffer) {
    var str = '';
    var uArrayVal = new Uint8Array(buffer);
    for (var s = 0; s < uArrayVal.length; s++) {
      str += String.fromCharCode(uArrayVal[s]);
    }
    return str;
};


var addr="192.168.121.109";
var qrCanvas = new QRCode(document.getElementById("canvas"));

  function generateQR(addr, port){
    qrCanvas.makeCode("addr:"+addr+"port:"+port);

  }

  //var port= 2000 + Math.floor((9000 - 2000) * Math.random());
  var port=3000;
  generateQR(addr,port);

  var socket = io();
  socket.on('scann message', function(msg){
      document.getElementById("hide-when-connected").style.display = "none";
  });
  socket.on('connected', function(msg){
    document.getElementById("hide-when-connected").style.display = "none";
  });



