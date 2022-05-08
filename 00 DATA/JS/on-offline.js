const checkbox = document.getElementById("checkbox");
const online = document.getElementById("online");
const offline = document.getElementById("offline");

const intcon = document.getElementById("intcon");

const video = document.getElementById("video");
const iframe = document.getElementById("iframe");

const connection = document.getElementById("connection");


// \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

// connection.innerHTML = ("<div class='toggleBox desflex'><div class='toggleConect mrg20'><label for="" id="offline" class="online ops0">offline</label>")




checkbox.addEventListener("click", () => {
    online.classList.toggle("ops0");
    offline.classList.toggle("ops0");
    video.classList.toggle("desnone");
    iframe.classList.toggle("desnone");
    intcon.classList.toggle("txtLineThrough")
    intcon.classList.toggle("ops5")
})

