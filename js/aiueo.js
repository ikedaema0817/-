"use strict";

let canvas;
let ctx;
let i = 0;
let aaa = [];

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
    ctx.fillText("羊が？", 0, 0);
    ctx.strokeStyle = "blue";
    ctx.strokeText("羊が？", 0, 0);
    ctx.stroke();
}
window.onload = function () {
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
    ctx.clearRect(0, 0, 200, 200);
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(aaa[0] + "匹", 0, 0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(aaa[0] + "匹", 0, 0);
    ctx.stroke();
};

function init3() {
    canvas = document.getElementById("ans2");
    canvas.style.position = "absolute";
    canvas.style.left = "47%";
    canvas.style.top = "560px";
    ctx = canvas.getContext("2d");
    draw3();
}

function draw3() {
    ctx.clearRect(0, 0, 200, 200);
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(aaa[1] + "匹", 0, 0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(aaa[1] + "匹", 0, 0);
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
    ctx.clearRect(0, 0, 200, 200);
    ctx.font = "64px san-serif";
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillStyle = "white";
    ctx.fillText(aaa[2] + "匹", 0, 0);
    ctx.strokeStyle = "blue";
    ctx.strokeText(aaa[2] + "匹", 0, 0);
    ctx.stroke();
};

//----------------

//--jを求める関数
function jj() {
    return (i - 5) + Math.ceil(Math.random() * 4);
}

//--kを求める関数
function kk() {
    return (i) + Math.ceil(Math.random() * 4);
}

//aaaに代入する関数
function aaaa() {
    aaa = [];
    aaa.push(i);
    aaa.splice(Math.ceil(Math.random() * 2) - 1, 0, jj());
    aaa.splice(Math.ceil(Math.random() * 2), 0, kk());
}


$("#count").on("click", function () {
    i++;
    aaaa();
    $("#count").css({
        "box-shadow": "none",
        "transform": "translate(0px, 5px)"
    })
    setTimeout(function () {
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
    }, 500);
})

$("#ans1").on("click", function () {
    if (aaa[0] == i) {
        i++;
        aaaa();
        init2();
        init3();
        init4();
    } else {
        $("#sleepy").slideDown('fast');
    }
})

$("#ans2").on("click", function () {
    if (aaa[1] == i) {
        i++;
        aaaa();
        init2();
        init3();
        init4();
    } else {
        $("#sleepy").slideDown('fast');
    }
})

$("#ans3").on("click", function () {
    if (aaa[2] == i) {
        i++;
        aaaa();
        init2();
        init3();
        init4();
    } else {
        $("#sleepy").slideDown('fast');
    }
})
