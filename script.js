const background_img = "graphics/background.png";
const bucketFull_img = "graphics/bucket_a.png";
const bucketEmpty_img = "graphics/bucket_b.png";
const window_img = "graphics/window_a.png";
const windowNeighbour_img = "graphics/window_b.png";
const stage1_img = "graphics/monster_1.png";
const stage2_img = "graphics/monster_2";
const stage3_img = "graphics/monster_3"
const stage4_img = "graphics/monster_4";
const stage5_img = "bilde path";
let monsterSatisfaction = 50;
let gameOver = false;
let bucketFull = true;

drawMonster();
function drawMonster(){
    document.getElementById('monsterImg').src = stage1_img;
    document.getElementById('windowID').src = window_img;
    document.getElementById('neighbourWindowID').src = windowNeighbour_img;
    document.getElementById('bucket').src = bucketFull_img;
}

function feedMonster(){
    if (bucketFull == true){
    document.getElementById('bucket').src = bucketEmpty_img;
    }

}

function sacrificeNeighbour(){
    document.getElementById('bucket').src = bucketFull_img;
    document.getElementById('neighbourWindowID').classList.add('neighbourWindowClass');
    bucketFull = true;
}

setInterval(neighbourInWindow, 20000)
function neighbourInWindow(){
    document.getElementById('neighbourWindowID').classList.remove('neighbourWindowClass');
    setTimeout(emptyWindow, 5000)
}
function emptyWindow(){
    document.getElementById('neighbourWindowID').classList.add('neighbourWindowClass');
}
