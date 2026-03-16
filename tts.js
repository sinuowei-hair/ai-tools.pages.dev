function speak(){

let text=document.getElementById("text").value

let speech=new SpeechSynthesisUtterance(text)

speech.lang="en-US"

speechSynthesis.speak(speech)

}
