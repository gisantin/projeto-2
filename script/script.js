
const inputList = document.getElementById("listComposerInput");
const buttonCreateList = document.querySelector(".list-composer__button");
const listTimeline = document.querySelector(".list-timeline");



let move = [];

buttonCreateList.addEventListener("click", function (e) {
    e.preventDefault();

    //console.log(listTimeline.children)

    var newInputList = inputList.value.replace(/\s\s+/g, '');

    if (newInputList === undefined || newInputList === null || newInputList=== "" || newInputList.length === 0 ) {
        return false;

    }

    //div q abraça tdo mundo
    const div = document.createElement("div");
    div.className = "list-timeline__box"
    div.setAttribute("dragable", true);

    //cria um novo elemento pra lista
    const newListP = document.createElement("p");
    newListP.className = "list-timeline__p";
    //passei o conteúdo do input pro paragrafo  
    newListP.innerHTML = inputList.value;

    const buttonDel = document.createElement("div");
    buttonDel.className = "list-timeline__del";
    buttonDel.innerHTML = `<button class="list-timeline__delete-button button">x</button>`

    div.appendChild(newListP);
    div.appendChild(buttonDel);

    listTimeline.insertBefore(div, listTimeline.childNodes[0]);
    move.push(listTimeline)


    inputList.value = "";


    div.addEventListener("dragstart", function(e){
        console.log(e.target);
        const take = e.target 
    })
   

    const botaoExcluir = document.querySelector(".list-timeline__delete-button");
    botaoExcluir.addEventListener("click", function (evento) {
        evento.preventDefault();
        div.remove();
    })

    const taskOk = document.querySelector(".list-timeline__p");
    /*taskOk.className = "list-timeline__p-check"*/

    taskOk.addEventListener("click", function (e){
        e.preventDefault();
        if(this.className === "list-timeline__p"){
            this.className = "list-timeline__p-check";

        }else{
            this.className = "list-timeline__p";
        }
    }) 

    const check = document.querySelector(".list-timeline__check");
    const clear = document.querySelector(".list-timeline__clear");
    /*const buttonCreateList = document.querySelector(".list-composer__button");*/

    check.addEventListener("click", function(checkall){
        if(taskOk.classList.contains("list-timeline__p-check")){
            taskOk.classList.remove("list-timeline__p");
            
        }else{
            taskOk.classList.add("list-timeline__p-check");
        }
    })
   clear.addEventListener("click", function(){
        if(listTimeline.classList.contains("list-timeline")){
            div.remove();
            /*buttonCreateList.add(inputList.value);*/
        }
    })

    buttonCreateList.addEventListener("click", function (e) {
        e.preventDefault();
        if (inputList.value === "" || inputList.value === " ") {
            return false;
            
        }
    })
})



    /*const buttonDoneAll = document.createElement("div");
    buttonDoneAll.className = "list-timeline__done-all";
    buttonDoneAll.innerHTML = `<button class="list-timeline__done-all button">All Done</button>`*/

    /*const buttonAllDone = document.querySelector(".list-timeline__all-done");
    buttonAllDone.addEventListener("click", function(e){
        e.preventDefault();
        if(this.className.checked === true){
            return this.className = "list-timeline__p-check";
        }else if( this.className.disabled === true){
           return this.className = "list-timeline__p";
        }*/
    

    /*let move = []
    let total = move.push()*/