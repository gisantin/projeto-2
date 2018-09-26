
const inputList = document.getElementById("listComposerInput");
const buttonCreateList = document.querySelector(".list-composer__button");
const listTimeline = document.querySelector(".list-timeline");

buttonCreateList.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputList.value === undefined || inputList.value === null || inputList.value === "" || inputList.value === " ") {
        return false;
    }

    //div q abraça tdo mundo
    const div = document.createElement("div");
    div.className = "list-timeline__box"

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

    inputList.value = "";
    

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

    check.addEventListener("click", function(checkall){
        if(taskOk.classList.contains("list-timeline__p-check")){
            taskOk.classList.remove("list-timeline__p");
            
        }else{
            taskOk.classList.add("list-timeline__p-check");
        }
    })
    clear.addEventListener("click", function(){
        if(listTimeline.classList.contains("list-timeline")){
            listTimeline.remove();
        }else{
            buttonCreateList.add(inputList);
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
    

