// let abc = [{id:1, count:2, }, {id:2, count:3, },{id:1, count:4, },{id:2, count:5, }]

// const output = [{id:1, count:6, },{id:2, count:8, }]


// function sum() {
//     let result = []
//     var isExist = false
//     for (var i = 0; i < abc.length;i++) {
//                 if (result && result.length == 0) {
//                     i = 0;
//                     result.push(abc[0])
//                 } else { 
//                     for (let j = 0; j < result.length; j++) {
//                         console.log('abc[i].id',abc[i].id)
//                         console.log('result[j].id',result[j].id)
//                         if (abc[i].id == result[j].id) {
//                             let value = result[j].count + abc[i].count
//                             console.log(value)
//                             result[j] = { id: abc[i].id, count: value }
                        
//                         }else{
//                             if (!isExist){
//                                 result.push(abc[i])
//                                 break
//                             }
//                         }
                        
//                     }
//                 }
        
//     }
//    return result
// }

// console.log(sum())



//function aaa (){



//let abc = [{id:1, count:2, }, {id:2, count:3, },{id:1, count:10, },{id:2, count:5, }];

// let result = abc.reduce(function(acc, obj) {
//   let existingObj = acc.find(function(item) {
//     return item.id === obj.id;
//   });
//   if (existingObj) {
//     existingObj.count += obj.count;
//   } else {
//     acc.push(obj);
//   }
//   return acc;
// }, [])


// console.log(result);

// }
// aaa()

function sinkArray(){
  let abc = [{id:1, count:2, }, {id:2, count:3, },{id:1, count:10, },{id:2, count:5, }];
   let output =[{id:1,count:12},{id:2,count:8} ]

  let result = abc.reduce((acc,curr)=>{
    let existingObj  = acc.find((item)=>{return item.id === curr.id})
    if(existingObj){
      existingObj.count += curr.count;
    }else{
      acc.push(curr)
    }

    return acc
    
  },[]).map((ele)=>{return ele})
  console.log('result',result)
  
  
}
//sinkArray()



function findUserWhoHaveAge() {
  const users = [
            {fistName:"Anant",lastName:"Yadav",age:24},
            {fistName:"Vikash",lastName:"Yadav",age:24},
            {fistName:"Pawan",lastName:"Yadav",age:31},
            {fistName:"Ananya",lastName:"Yadav",age:25}
            ]

  const result = users.reduce((acc,curr)=>{

  if(curr.age>26){
    acc.push(curr)
  }

  return acc
  },[])
  console.log(result)

}

//findUserWhoHaveAge()


function countAges() {
  const users = [
            {fistName:"Anant",lastName:"Yadav",age:24},
            {fistName:"Vikash",lastName:"Yadav",age:24},
            {fistName:"Pawan",lastName:"Yadav",age:31},
            {fistName:"Ananya",lastName:"Yadav",age:25}
            ]

  const result = users.reduce((acc,curr)=>{

    if(acc[curr.age]){
      acc[curr.age] = ++acc[curr.age];
    }
    else{
      acc[curr.age] = 1
    }
    return acc
  
  },{})
  console.log(result)

}

countAges()





function findName() {
  const users = [
            {fistName:"Anant",lastName:"Yadav",age:24},
            {fistName:"Vikash",lastName:"Yadav",age:24},
            {fistName:"Pawan",lastName:"Yadav",age:31},
            {fistName:"Ananya",lastName:"Yadav",age:25}
            ]

  const result = users.reduce((acc,curr)=>{

   if(curr.age > 24){
    acc.push(`${curr.fistName} ${curr.lastName}`)
   }
    return acc
  
  },[])
  console.log(result)

}

findName()


