//어떤 자식 노드를 가지고 있는지 NodeList를 사용해 탐핵하고 
//childNodes속성을 사용해 자식 노드를 구할 수 있다. 

var demodiv = document.getElementById("demodiv");
var outputString = "";
if(demodiv.hasChildNodes()){
    var children = demodiv.childNodes;

    for(var i = 0; i<children.length; i++){
        outputString += "has cild " + children[i].nodeName + " ";
    }
}
console.log(outputString);