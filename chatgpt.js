async function send(){

let prompt=document.getElementById("prompt").value;

let res=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"user",content:prompt}
]

})

})

let data=await res.json()

document.getElementById("response").innerText=
data.choices[0].message.content

}
