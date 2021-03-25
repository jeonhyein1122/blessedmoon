function allbox(id, id2){
    var n = document.getElementById(id);
    if(n.style.display !='none'){
        n.style.display = 'none';             
    }else{
        n.style.display='';               
    }
}

function btn(){
    btn[0] = document.getElementById('tr1');
    btn[1] = document.getElementById(tr2);

    document.write(btn[0]);
}
