function run() {
    let input = document.getElementById("text-input").value;
    let frame = document.getElementById("run2");
    
    frame.contentDocument.open();
    frame.contentDocument.write(input);
    frame.contentDocument.close();
}

document.getElementById("text-input").addEventListener("keyup", run);

run();

function full() {
    let input = document.getElementById("input");
    let frame = document.getElementById("run");
    let button = event.target;
    
    button.innerHTML =
        button.innerHTML === "تكبير" ?
        "تصغير" :
        "تكبير";
    
    input.style.display = input.style.display === "none" ? "block" : "none";
    
    frame.style.height = frame.style.height === "100vh" ? "50vh" : "100vh";
}