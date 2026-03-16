async function generate(){

let prompt=document.getElementById("prompt").value

let res=await fetch("https://api.openai.com/v1/images/generations",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

prompt:prompt,
size:"1024x1024"

})

})

let data=await res.json()

document.getElementById("result").src=data.data[0].url

}
