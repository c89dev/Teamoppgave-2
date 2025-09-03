// const stage1_img = "graphics/monster_1.png";
// const stage2_img = "graphics/monster_2";
// const stage3_img = "graphics/monster_3"
// const stage4_img = "graphics/monster_4";
// const stage5_img = "bilde path";


function monsterCounter(){
    if(gameOver != true){
    monsterSatisfaction--;
    monsterProgress();
    }

    console.log(monsterSatisfaction);
}

function monsterProgress(){

    monsterDisplay = document.getElementById("monsterImg");

    if(monsterSatisfaction < 50 && monsterSatisfaction > 40){
    monsterDisplay.src = stage1_img;
    }
    else if(monsterSatisfaction < 40 && monsterSatisfaction > 30){
        monsterDisplay.src = stage2_img;
    }
    else if(monsterSatisfaction < 30 && monsterSatisfaction > 20){
        monsterDisplay.src = stage3_img;
    }
    else if(monsterSatisfaction < 20 && monsterSatisfaction > 10){
        monsterDisplay.src = stage4_img;
    }
    else if(monsterSatisfaction < 1){
        gameOver = true;
        monsterDisplay.src = stage4_img;
        document.getElementById('gameOver').classList.remove('gameOverClass');
        attack.play();
    }

        
}

setInterval(monsterCounter, 1000)

