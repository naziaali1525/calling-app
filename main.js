let numb = "";

function dial(digits) {
    numb += digits;
    console.log(numb);
    document.querySelector("input").value = numb;
}

function dialCall() {
    // document.querySelector(".card").style.height = "516px";
    document.querySelector(".card-body").style.background = " #71AFFF";
    document.querySelector(".card-body").innerHTML = `<div class="call-animation">  </div>
    <div class="outgoing-call"><p>Calling...</p>
    <div class = "disconnect" onclick = "cancel()">  </div> 
    </div>`
}

function cancel() {
    let dc = document.querySelector(".card-body").style.display = "none";
    if (dc.style.display === "none") {
        dc.style.display === "block";
    } else {
        
    }
}