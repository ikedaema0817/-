"use strict";
let canvas;
let ctx;
let i = 1;

function init() {
    canvas = document.getElementById("myCanvas");
    canvas.style.position = "absolute";
    canvas.style.left = "42%";
    canvas.style.top = "100px";
    ctx = canvas.getContext("2d");
    draw();
}

function draw() {
    ctx.beginPath();
    ctx.font = "124px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText("羊が？",0,0);
    ctx.strokeStyle = "blue";
    ctx.strokeText("羊が？",0,0);
    ctx.stroke();
}
window.onload = function() {
    init();
};

//最初の描画
function init2() {
    canvas = document.getElementById("ans1");
    canvas.style.position = "absolute";
    canvas.style.left = "17%";
    canvas.style.top = "560px";
    ctx = canvas.getContext("2d");

    draw2();
}

function draw2() {
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(i+"匹",0,0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(i+"匹",0,0);
    ctx.stroke();
};

function init3() {
    canvas = document.getElementById("ans2");
    canvas.style.position = "fixed";
    canvas.style.left = "47%";
    canvas.style.top = "560px";
    ctx = canvas.getContext("2d");

    draw3();
}

function draw3() {
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(i+"匹",0,0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(i+"匹",0,0);
    ctx.stroke();
};

function init4() {
    canvas = document.getElementById("ans3");
    canvas.style.position = "absolute";
    canvas.style.left = "77%";
    canvas.style.top = "560px";
    ctx = canvas.getContext("2d");
    draw4();
}

function draw4() {
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(i+"匹",0,0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(i+"匹",0,0);
    ctx.stroke();
};

//----------------




$("#count").on("click",function(){
    let aaa = [];
    $("#count").css({
        "box-shadow": "none",
        "transform": "translate(0px, 5px)"
    })
    setTimeout(function(){
        $("#count").hide();
        $("#sheep1").show();
        $("#sheep2").show();
        $("#sheep3").show();
        $("#ans1").show();
        $("#ans2").show();
        $("#ans3").show();
        init2();
        init3();
        init4();
    },500);
})

