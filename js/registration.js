const popup=document.querySelector(".registration_end")
const close_but_pop=document.querySelector(".image_close")
const close_not_yet=document.querySelector(".imgae_close1")
const pop_container=document.querySelector(".registration_end1")
const notyet=document.querySelector(".registration_notyet")
close_but_pop.addEventListener("click",()=>{
    popup.style.display = 'none'
})
close_not_yet.addEventListener('click', ()=>{
    notyet.style.display = 'none'
})
popup.addEventListener("click",(e)=>{
    if(e.target===popup){
        popup.style.display = 'none'
    }
})
notyet.addEventListener("click",(e)=>{
    if(e.target===notyet){
        notyet.style.display = 'none'
    }
})

const deadline_poster= new Date(2025,3,23)
const deadline_registration= new Date(2025,4,3)
const registration_open=new Date (2025,3,22)
const registration_link="https://forms.gle/T1njpkN4H1YGwVLy5"
const poster_link="https://forms.gle/EQoghUejPNMvYD8z9"
function check_date(){
    let currentDate= new Date()
    if(currentDate<registration_open){
        notyet.style.display= "flex"
    }
    else if(currentDate>=deadline_registration){
        popup.style.display = "flex"
    }
    else{
        window.location.href =registration_link
    }
}
function check_date_poster(){
    let currentDate= new Date()
    let poster_open=new Date(2025,3,10)
    if(currentDate<poster_open){
        notyet.style.display= "flex"
    }
    else if(currentDate>deadline_poster){
        popup.style.display= "flex"
    }
    else{
        window.open(poster_link, "_blank");
    }
}
const paragraph=document.getElementById("parag")
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
const question1=document.querySelector(".question1")
const answer1=document.querySelector(".answer1")
function questionchange(){
    let currentDate=new Date()
    let poster_open=new Date(2025,3,8)
    let x
    if(currentDate<poster_open){
        question1.innerText="When does the registration for the poster session begin?"
        answer1.innerText="the registration for poster session will be available on 10th April,2025"
    }
    else{
        question1.innerText="When is the deadline for the registration of the poster session?"
        answer1.innerText="Deadline for the registration is on 23th April,2025"
    }
}
questionchange()
setInterval(questionchange,1000)