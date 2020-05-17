var abc = document.getElementById("count");
var button = document.getElementById("liking");
var counts = 0;
function thumbup(){
    counts += 1;
    button.innerHTML= "Liked!";
    abc.innerHTML = counts + " Person Likes This!";
}

function addComment() {
    var comment= document.getElementById('commentContent').value;

    var node = document.createElement("div");
    node.innerHTML ="<br>"
    node.style.backgroundColor="#fff";
    node.style.margin="10px 10px 10px 10px";
    node.style.padding="0 20px 20px 10px";
    var textnode = document.createTextNode(comment);
    node.appendChild(textnode);
    if (comment===""){
        alert("Please add a comment");
    }
    else{
        var latestComment = document.getElementById("commentBox");
        latestComment.insertBefore(node, latestComment.childNodes[0]); 
    }       
}


var get_border = document.getElementById("border");
var data = document.getElementById("data");
var buttona =  document.getElementById("edit");
var buttonb = document.getElementById("save");
function get_a() {
    
    document.getElementById("edit").style.display="none";
     document.getElementById("save").style.display="block";
    //buttona.style.visibility='visible';
    //buttonb.style.visibility='hidden';
    get_border.style.border = "2px solid pink";
    data.style.border = "2px solid pink";
    get_border.contentEditable= 'true';
    data.contentEditable= 'true';
}

function get_b(){
    
    document.getElementById("edit").style.display="block";
    document.getElementById("save").style.display="none";
    get_border.contentEditable= 'false';
    data.contentEditable= 'false';
    //buttonb.style.visibility='visible';
    //buttona.style.visibility='hidden';
  }
