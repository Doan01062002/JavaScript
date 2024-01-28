var litter = document.getElementById("litter");
var percent = document.getElementById("percent");

var changeBackground1 = document.getElementById("changeBackground1");
var changeBackground2 = document.getElementById("changeBackground2");

var countLitter = document.getElementById("countLitter");
var countPercent = document.getElementById("countPercent");

var countLi = 2;
var countPe = 0;

var backgroundWater1 = 0;
var backgroundWater2 = 0;

var addWater1 = document.getElementById("addWater1");
addWater1.disabled = false;
addWater1.addEventListener("click", function addWater01(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";

    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater1.style.backgroundColor = "rgb(222, 226, 226)";
    addWater1.disabled = true;
});
var addWater2 = document.getElementById("addWater2");
addWater2.disabled = false;
addWater2.addEventListener("click", function addWater02(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";

    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater2.style.backgroundColor = "rgb(222, 226, 226)";
    addWater2.disabled = true;
});
var addWater3 = document.getElementById("addWater3");
addWater3.disabled = false;
addWater3.addEventListener("click", function addWater03(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";

    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater3.style.backgroundColor = "rgb(222, 226, 226)";
    addWater3.disabled = true;
});
var addWater4 = document.getElementById("addWater4");
addWater4.disabled = false;
addWater4.addEventListener("click", function addWater04(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";
    
    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater4.style.backgroundColor = "rgb(222, 226, 226)";
    addWater4.disabled = true;
});
var addWater5 = document.getElementById("addWater5");
addWater5.disabled = false;
addWater5.addEventListener("click", function addWater05(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";
    
    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater5.style.backgroundColor = "rgb(222, 226, 226)";
    addWater5.disabled = true;
});
var addWater6 = document.getElementById("addWater6");
addWater6.disabled = false;
addWater6.addEventListener("click", function addWater06(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";

    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater6.style.backgroundColor = "rgb(222, 226, 226)";
    addWater6.disabled = true;
});
var addWater7 = document.getElementById("addWater7");
addWater7.disabled = false;
addWater7.addEventListener("click", function addWater07(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";
    
    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater7.style.backgroundColor = "rgb(222, 226, 226)";
    addWater7.disabled = true;
});
var addWater8 = document.getElementById("addWater8");
addWater8.disabled = false;
addWater8.addEventListener("click", function addWater08(){
    countLi -= 0.25;
    countPe += 12.5;
    backgroundWater1 += 46.5;

    if(backgroundWater1 < 250){
        backgroundWater1 += 46.5;
    }else{
        backgroundWater2 += 46.5;
    }

    changeBackground1.style.height = backgroundWater1+"px";
    changeBackground1.style.width = "240px";
    changeBackground2.style.height = backgroundWater2+"px";
    changeBackground2.style.width = "240px";

    countLitter.textContent = countLi + "L";
    countPercent.textContent = countPe + "%";
    addWater8.style.backgroundColor = "rgb(222, 226, 226)";
    addWater8.disabled = true;
});

