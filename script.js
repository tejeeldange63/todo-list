let addData = document.getElementById('add');
addData.addEventListener('click',storeData);
let todayArr = [];
let futureArr = [];
let monthArr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
let count = 1;
function storeData(){
    let input = document.getElementById('inp');
    let inputDate = document.getElementById('deadline');
    let priority = document.getElementById('importance');
    console.log(input.value);
    console.log(inputDate.value);
    console.log(priority.value);
    let currDate = new Date();
    let div = document.createElement('div');
    div.setAttribute('class','info');
    div.innerHTML = `<div><span class="count">${count}. </span><span>${input.value}</span> </div> <div class="data">${inputDate.value}</div> <div><span class="priority">${priority.value}</span></div> <div class="last"> <span class="mark"><i class="fa-regular fa-square-check"></i></span> <span class="delete"><i class="fa-solid fa-trash"></i></span>  </div>`
    console.log(`${currDate.getFullYear()}-${monthArr[currDate.getMonth()]}-${currDate.getDate()}`);
    if(inputDate.value <= `${currDate.getFullYear()}-${monthArr[currDate.getMonth()]}-${currDate.getDate()}`){
        console.log(div);
        document.getElementsByClassName('today')[0].append(div);
    }
    if(inputDate.value > `${currDate.getFullYear()}-${monthArr[currDate.getMonth()]}-${currDate.getDate()}`){
        document.getElementsByClassName('future')[0].append(div);
    }
  
    ++count;
}
