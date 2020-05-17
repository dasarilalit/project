function deletepost(ids){
    gotid=ids;
    console.log(gotid);

    document.getElementById('trashicon').style.display='block';


}

function whenclickedclose(){
    document.getElementById('trashicon').style.display='none';
}

function delfun(){
    document.getElementById(gotid).style.display="none";
    document.getElementById('trashicon').style.display="none";
}