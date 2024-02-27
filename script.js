const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function addTask(){
    //Barra de pesquisa vazia
    if(inputBox.value === ''){
        alert("You must write something");
    }
    //Adicionar tarefa
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);
        //Criando o checked
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //Apagar da barra após escrever
    inputBox.value = "";
    //Salvar dados no navegador
    saveData();
}

//Script para delete e checked
ListContainer.addEventListener("click", function(e){
    //Checked
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        //Salvar dados no computador
        saveData();
    }
    //Delete
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

//Salvar dados no computador
function saveData(){
    localStorage.setItem("data", ListContainer.innerHTML);
}

//Salvar mesmo quando o navegador for encerrado
function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//Enviar tarefa quando pressionar o Enter
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

