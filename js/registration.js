const popup=document.querySelector(".registration_end")
const close_but_pop=document.querySelector(".image_close")
const pop_container=document.querySelector(".registration_end1")

close_but_pop.addEventListener("click",()=>{
    popup.style.display = 'none'
})
popup.addEventListener("click",(e)=>{
    if(e.target===popup){
        popup.style.display = 'none'
    }
})
const deadline= new Date(2025,3,1,23,59,59)
const registration_link="https://www.facebook.com/"
function check_date(){
    let currentDate= new Date()
    if(currentDate>deadline){
        popup.style.display = "flex"
    }
    else{
        window.location.href =registration_link
    }
}
const paragraph=document.getElementById("parag")
console.log(paragraph)
function updateTime(){
    let currentDate= new Date()
    const month=currentDate.getMonth()
    let x
    if(month<=3){
        x=currentDate.getFullYear()
    }
    else{
        x=currentDate.getFullYear()+1
    }
    paragraph.innerText="See you at IndabaX Tunisia "+x+"!"
}

updateTime()
setInterval(updateTime, 1000);
