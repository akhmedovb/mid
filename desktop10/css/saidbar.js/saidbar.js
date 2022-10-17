window.onload = function(){
    var wrapper = document.getElementsByClassName("content")[0]
    var left = document.getElementsByClassName("saidbar")[0]
    
    let hg = wrapper.clientHeight

    left.style.height = hg+"px"

    console.log(left, wrapper);
}

