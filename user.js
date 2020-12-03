var header = document.getElementsByClassName('nZSzR');
var verified = false;

if(header.length > 0){
    verified = document.querySelector(".coreSpriteVerifiedBadge") ? true : false
}

if(header.length > 0){
    var wrap = document.createElement('span');
    var btn = document.createElement('button');

    btn.setAttribute('id', 'btn_id');
    // btn.setAttribute('style', 'background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);');
    btn.className = "fAR91 sqdOP L3NKy _4pI4F _8A5w5"
    btn.addEventListener('click', click_handler);
    btn.innerHTML = "InstaDP";

    wrap.appendChild(btn);
    wrap.setAttribute('style', 'margin: 0 -11px 0 8px;');
    
    if(verified){
        if(document.getElementById('btn_id') === null) //insert button only one time
            header[0].insertBefore(wrap, header[0].children[2]);
    }else{
        if(document.getElementById('btn_id') === null) //insert button only one time
            header[0].insertBefore(wrap, header[0].children[1]);  
    }
}

function click_handler() {
    window.open("https://www.instadp.com/fullsize/"+header[0].children[0].innerHTML);
}