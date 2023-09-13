// const promiseOne = new Promise(function(resolve,reject){
//     //Do an Async task
//     //DB Calls, crptography
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise consumed')
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Resolved 2')
// })



// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName: "zain", userEmail:"zain2606001@gmil.com"})
//     })
// }).then(function(userDetails){
//     console.log(userDetails)
// })


//  const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//      let error = false;
//      if(!error){
//         resolve({username:"zain",password:"123"})
//      }
//      else{
//         reject('ERROR: Something Went Wrong')
//      }
//     },1000)
//  })

//chaining is applied here
// promise4.then((user)=>{
//     console.log(user);
//     return user.username
//  })
//  .then((username)=>{
//       console.log(username)
//  })
//  .catch(function(error){ 
//      console.log(error)
//  })
//  .finally(()=>console.log('The Promise is Either Resolved or Rejected'))



 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
           resolve({username:"javascript",password:"123"})
        }
        else{
           reject('ERROR: js Went Wrong')
        }
       },1000)
 })

//  async , await do not directly handle the errors
// async function cPromiseFive(){
//     try{
//     const response = await promiseFive
//     console.log(response);
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// cPromiseFive()



// async function getAllusers(){
//    try{
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    }
//    catch(error){
//     console.log("E : ", error)
//    }
// }
// getAllusers()


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>console.log(error))