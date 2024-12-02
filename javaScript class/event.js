let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
}
let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("you are inside div");
};

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() =>{
    console.group("button2 was clicked");
});

btn2.addEventListener("click",() =>{
    console.group("button2 was clicked -handler2");
});
//----background change-----//

let modeBtn = document.querySelector("#mode");
let currentMode = "light";
modeBtn.addEventListener("click",() =>{
    if(currentMode === "light"){
        currentMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currentMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currentMode);

});