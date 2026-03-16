async function translate(){

let text=document.getElementById("input").value

let res=await fetch("https://api.mymemory.translated.net/get?q="+text+"&langpair=en|zh")

let data=await res.json()

document.getElementById("output").innerText=
data.responseData.translatedText

}
