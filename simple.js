let data = [
    {name:"Anant",age:24},
    {name:"Vikash",age:24},
    {name:"Binay",age:14},
    {name:"jata",age:58}
]

function first(item){
    if(item){
        data.push(item)  
    }
    let output;
    setTimeout(() => {
        data.forEach(element => {
            output+= `<li>${element.name}</li>`
        });
        document.body.innerHTML = output
    }, 2000);
}

function second (){
    setTimeout(() => {
        data.push({name:"Amit",age:58})
    }, 3000);
}

second()
first()