import { dImg, bPrev, bNext, pDialog, dialogState, missionOptions, missionSelected} from './utils.mjs';
import {missions} from './dialogs.mjs';

document.addEventListener("DOMContentLoaded", ()=>{
    pDialog.innerHTML = missions[0][0].text;
});

bPrev.addEventListener("click", prevDialog);

bNext.addEventListener("click", nextDialog);

export function prevDialog(){
    if(bNext.disabled === true){bNext.disabled = false;}
    if(dialogState.value === 0 && missionSelected.value === 0){
        bPrev.disabled = true;
        return;
    }else if(dialogState.value === 0 && missionSelected.value !== 0){
        missionSelected.value = 0;
        dialogState.value = 2;
        pDialog.innerHTML = missions[missionSelected.value][dialogState.value].text;
        if(dImg.innerHTML !== ""){
            dImg.replaceChildren();
        }
        if(missions[missionSelected.value][dialogState.value].minigame !== null){
            missions[missionSelected.value][dialogState.value].minigame();
        }
        if(missions[missionSelected.value][dialogState.value].img !== null){
            showImg(missions[missionSelected.value][dialogState.value].img);
        }
        return;
    }
    dialogState.value--;
    pDialog.innerHTML = missions[missionSelected.value][dialogState.value].text;
    if(dImg.innerHTML !== ""){
        dImg.replaceChildren();
    }
    if(missions[missionSelected.value][dialogState.value].minigame !== null){
        missions[missionSelected.value][dialogState.value].minigame();
    }
    if(missions[missionSelected.value][dialogState.value].img !== null){
        showImg(missions[missionSelected.value][dialogState.value].img);
    }
}

export function nextDialog(){
    dialogState.value++;
    if(bPrev.disabled === true){bPrev.disabled = false;}
    pDialog.innerHTML = missions[missionSelected.value][dialogState.value].text;
    if(dImg.innerHTML !== ""){
        dImg.replaceChildren();
    }
    if(missions[missionSelected.value][dialogState.value].minigame !== null){
        missions[missionSelected.value][dialogState.value].minigame();
    }
    if(missions[missionSelected.value][dialogState.value].img !== null){
        showImg(missions[missionSelected.value][dialogState.value].img);
    }
}

export function showImg(imgObj){
    dImg.replaceChildren();
    dImg.id = "flex-column-container"
    const len = imgObj.length;
    for(let i = 0; i < len; i++){
        const div = document.createElement("div");
        div.classList.add("grid-box");
        div.innerHTML = `<img src=${imgObj[i].link} alt=${imgObj[i].alt}/>
                         <p>${imgObj[i].alt}</p>`;
        dImg.appendChild(div);
    }
}