import {missions} from './dialogs.mjs'
import {missionOptions, dImg, missionSelected, pDialog, dialogState, bNext, bPrev} from './utils.mjs'
import { nextDialog, prevDialog } from './main.mjs';

export function bruteForce(){
    let formResult;
    dImg.id = "mission-container5";
    dImg.innerHTML = `<form id="basicForm">
                        <label for="password">Escreva uma senha</label>
                        <input type="password" id="password" name="password" minlength ="10" maxlength = "20" required/>
                        <button id="subButton" type="submit">Checar</button>
                      </form>`;
    const form = document.getElementById("basicForm");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const formData = new FormData(form);

        const password = formData.get("password");
        
        formResult = passBreak(password);
        pDialog.innerHTML = `Utilizando o método de força bruta, um computador clássico demoraria <span class="style-span">${formResult.classic}</span> anos no máximo, mas um computador Quântico demoraria <span class="style-span">${formResult.quantum}</span> dias no máximo. Isso é revolucionário!`;
    })
}

function passBreak(formString){
    let tempClassico = (Math.pow(95, formString.length)/(2*Math.pow(10, 9)))/(3600*24*365);
    tempClassico = tempClassico.toFixed(0);
    let tempQuant = Math.sqrt((Math.pow(95, formString.length)/(2*Math.pow(10, 9))))/(3600*24);
    tempQuant = tempQuant.toFixed(0);
    const info = {
        classic: tempClassico,
        quantum: tempQuant
    };
    
    return info;
}

export function showMissions(){
    dImg.id = "mission-container";
    const lenArray = Object.keys(missions).length;
    for(let i = 0; i < (lenArray-1); i++){
        const btn = document.createElement("button");
        btn.id = "button-" + i;
        btn.type = "button";
        btn.classList.add("mission-options");
        btn.classList.add("no");
        btn.innerHTML = (i+1);
        btn.addEventListener("click", ()=>{
            dImg.replaceChildren();
            pDialog.innerHTML = missions[i+1][0].text;
            missionSelected.value = (i+1);
            dialogState.value = 0;
            bNext.disabled = false;
        });
        dImg.appendChild(btn);
    }
    bNext.disabled = true;
}

export function byteMission(){
    dImg.replaceChildren();
    dImg.id = "flex-row-container"
    for(let i = 0; i < 8; i++){
        const btn = document.createElement("div");
        btn.classList.add("grid-box");
        btn.id = "off";
        btn.innerHTML = `<img src="/imgs/bitOffSF.png" alt="Bit off"/>
                            <p>0</p>`;
        btn.addEventListener("click", ()=>{
            if(btn.id === "off"){
                btn.id = "on";
                btn.innerHTML = `<img src="/imgs/bitOnSF.png" alt="Bit off"/>
                                <p>1</p>`;
            } else if(btn.id === "on"){
                btn.id = "off";
                btn.innerHTML = `<img src="/imgs/bitOffSF.png" alt="Bit off"/>
                                 <p>0</p>`;
            }
        })
        dImg.appendChild(btn);
    }

}

export function randomMission(){
    bNext.disabled = true;
    const randomNumber = Math.floor(Math.random()*16);
    pDialog.innerHTML = `Ótimo! Cada combinação de bits pode representar informações. Para passar desse caminho, tente encontrar a combinação que representa o número: <span class="style-span">${randomNumber}</span>`
    dImg.replaceChildren();
    dImg.id = "grid-mission-box"
    const result = document.createElement("p");
    result.id = "result";
    result.innerHTML = "0";
    const submit = document.createElement("button");
    submit.innerHTML = "Checar";
    submit.addEventListener("click", ()=>{
        if(parseInt(result.innerHTML) == randomNumber){
            nextDialog();
            showMissions();
        }
        else{
            pDialog.innerHTML = `Que pena, você não conseguiu. O número é ${randomNumber}, tente novamente!`
        }
    })
    dImg.appendChild(result);
    for(let i = 0; i < 4; i++){
        const btn = document.createElement("div");
        btn.value = `${i}`;
        btn.id = `${i+1}`;
        btn.classList.add("off");
        btn.innerHTML = `<img src="/imgs/bitOffSF.png" alt="Bit off"/>
                            <p>0</p>`;
        btn.addEventListener("click", ()=>{
            if(btn.classList.contains("off")){
                btn.classList.replace("off", "on");
                btn.innerHTML = `<img src="/imgs/bitOnSF.png" alt="Bit off"/>
                                <p>1</p>`;
                result.innerHTML = (parseInt(result.innerHTML)+Math.pow(2 ,parseInt(btn.value)));
            } else if(btn.classList.contains("on")){
                btn.classList.replace("on", "off" );
                btn.innerHTML = `<img src="/imgs/bitOffSF.png" alt="Bit off"/>
                                 <p>0</p>`;
                result.innerHTML = (parseInt(result.innerHTML)-Math.pow(2, parseInt(btn.value)));
            }
        });
        dImg.appendChild(btn);
    }
    dImg.appendChild(submit);
}

export function showNotGate(){
    dImg.replaceChildren();
    dImg.id = "flex-row-container";
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const gate = document.createElement("div");
    btn1.id = "entry";
    btn1.innerHTML = `<img src = "/imgs/bitOff.png" alt="Bit off"/>`;
    btn1.value = "0";
    btn2.id = "exit";
    btn2.innerHTML = `<img src = "/imgs/bitOnF.png" alt="Bit on"/>`
    btn2.value = "1";
    btn1.addEventListener("click", ()=>{
        if(btn1.value === "0"){
            btn1.value = "1";
            btn1.innerHTML = `<img src = "/imgs/bitOn.png" alt="Bit on"/>`;
            btn2.innerHTML = `<img src = "/imgs/bitOffF.png" alt="Bit off"/>`;
        }else{
            btn1.value = "0";
            btn1.innerHTML = `<img src = "/imgs/bitOff.png" alt="Bit off"/>`;
            btn2.innerHTML = `<img src = "/imgs/bitOnF.png" alt="Bit on"/>`;
        }
    });
    gate.classList.add("gate-img");
    gate.innerHTML = `<img src = "/imgs/PortaLogicaNao.png" alt="Porta Logica Nao"/>`
    dImg.appendChild(btn1);
    dImg.appendChild(gate);
    dImg.appendChild(btn2);
}

export function showGates(){
    dImg.replaceChildren();
    const entries = document.createElement("div");
    const entry1 = document.createElement("button");
    const entry2 = document.createElement("button");
    const result = document.createElement("button");
    const gate = document.createElement("div");
    entry1.id = "entry-1";
    entry1.value = "0"
    entry1.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
    entry2.id = "entry-2";
    entry2.value = "0";
    entry2.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
    result.id = "exit";
    result.value = "0";
    result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`;
    entries.append(entry1, entry2);
    entries.id = "entries";
    if(dialogState.value === 4){
        gate.innerHTML = `<img src = "/imgs/PortaLogicaAnd.png" alt = "Porta AND"/>`;
        entry1.addEventListener("click", ()=>{
            if(entry1.value === "0"){
                entry1.value = "1";
                entry1.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry1.value === "1"){
                entry1.value = "0";
                entry1.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if(entry1.value === "1" && entry2.value === "1"){
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
                
            }else{
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }
        });
        entry2.addEventListener("click", ()=>{
            if(entry2.value === "0"){
                entry2.value = "1";
                entry2.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry2.value === "1"){
                entry2.value = "0";
                entry2.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if(entry1.value === entry2.value){
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
                
            }else{
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }
        });
    }
    if(dialogState.value === 5){
        gate.innerHTML = `<img src = "/imgs/PortaLogicaOr.png" alt = "Porta OR"/>`;
        result.value = "0";
        result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`;
        entry1.addEventListener("click", ()=>{
            if(entry1.value === "0"){
                entry1.value = "1";
                entry1.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry1.value === "1"){
                entry1.value = "0";
                entry1.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if(entry1.value === "0" && entry2.value === "0"){
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }else {
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
            }
        });
        entry2.addEventListener("click", ()=>{
            if(entry2.value === "0"){
                entry2.value = "1";
                entry2.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry2.value === "1"){
                entry2.value = "0";
                entry2.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if(entry1.value === "0" && entry2.value === "0"){
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }else {
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
            }
        });
    }
    if(dialogState.value === 6){
        gate.innerHTML = `<img src = "/imgs/PortaLogicaXOR.png" alt = "Porta XOR"/>`;
        result.value = "0";
        result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`;
        entry1.addEventListener("click", ()=>{
            if(entry1.value === "0"){
                entry1.value = "1";
                entry1.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry1.value === "1"){
                entry1.value = "0";
                entry1.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if((entry1.value === "0" && entry2.value === "0") || (entry1.value === "1" && entry2.value === "1")){
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }else {
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
            }
        });
        entry2.addEventListener("click", ()=>{
            if(entry2.value === "0"){
                entry2.value = "1";
                entry2.innerHTML = `<img src = "/imgs/bitOn.png" alt = "Bit on"/>`;
            }else if(entry2.value === "1"){
                entry2.value = "0";
                entry2.innerHTML = `<img src = "/imgs/bitOff.png" alt = "Bit off"/>`;
            }
            if((entry1.value === "0" && entry2.value === "0") || (entry1.value === "1" && entry2.value === "1")){
                result.value = "0";
                result.innerHTML = `<img src = "/imgs/bitOffF.png" alt = "Bit off"/>`
            }else {
                result.value = "1";
                result.innerHTML = `<img src = "/imgs/bitOnF.png" alt = "Bit on"/>`
            }
        });
    }
    gate.classList.add("gate-img");
    dImg.append(entries, gate, result);
            
}
