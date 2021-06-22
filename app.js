

function Grades(name, course){
    this.name= name;
    this.course= course;
    this.grade = getRndInteger(0, 100);
    everyThingArr.push(this);

    // localStorage();
}

let everyThingArr= [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


let header= ['name', 'course', 'grade'];


let container = document.getElementById('parent');
let table = document.createElement('table');
container.appendChild(table);


let th= document.createElement('th');
table.appendChild(th);
for (let i = 0; i < header.length; i++) {
    td= document.createElement('td')
    th.appendChild(td)
    td.textContent= header[i];
    
}



Grades.prototype.render=function (){

    let tr1 = document.createElement('tr');
    table.appendChild(tr1);
     
    let td1 = document.createElement('td')
    tr1.appendChild(td1);
    td1.textContent= this.name;

   
     
    let td2 = document.createElement('td')
    tr1.appendChild(td2);
    td2.textContent= this.course;

     
    let td3 = document.createElement('td')
    tr1.appendChild(td3);
    td3.textContent= this.grade;


}


let form = document.getElementById('form');
form.addEventListener('submit', submit);
function submit(event) {

    event.preventDefault()
    let name = event.target.name.value;
    let course = event.target.Course.value;
    // console.log( event.target.Course.value);

let newGrade = new Grades(name, course);
newGrade.render();

}




// console.log(everyThingArr);
function localStorage() {

let stringarr = JSON.stringify(everyThingArr); 
localStorage.setItem("Grades", stringarr);  
}

function getLocal() {
    // var lastname = localStorage.getItem("key");
    let userData = localStorage.getItem("Grades");
    let parsed= JSON.parse(userData);
    if (parsed){
        for (let i = 0; i < everyThingArr.length; i++) {
            new Grades(parsed[i].name, parsed[i].course);            
        }
    }
}
getLocal()














