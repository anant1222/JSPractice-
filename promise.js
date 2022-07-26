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
    let output = '';
    setTimeout(() => {
        data.forEach(element => {
            output+= `<li>${element.name}</li>`
        });
        document.body.innerHTML = output
    }, 100);
}

function second (item){
    return new Promise ((res,rej)=>{
        if(item){
            res(item)
        }else{
            rej('kuch gadbad hain')
        }
    })
    
  
}
second({name:"Amit",age:58}).then((item)=>{
    setTimeout(() => {
        data.push(item)
        first()
    }, 3000);
}).catch((e)=>{window.alert(e)})