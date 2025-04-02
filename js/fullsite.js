document.addEventListener("DOMContentLoaded",()=>{const navbarToggler=document.getElementById("navbar-toggler")
    const navbarLinks=document.getElementById("navbar-links")
    const logo=document.querySelector(".navbar-logo")
    const register=document.querySelector(".navbar-contact")
    const navbar=document.querySelector(".navbar")
    const sections=document.querySelectorAll('section[id], div[id="hero"], div[id="About-Section"], div[id="Hackaton-Section"], div[id="registration"]',)
    const navItems=document.querySelectorAll(".navbar-links li")
    navbarToggler.addEventListener("click",()=>{navbarLinks.classList.toggle("active")
    const icon=navbarToggler.querySelector("i")
    if(icon.classList.contains("fa-bars")){icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")}else{icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")}})
    const navLinks=document.querySelectorAll(".navbar-links a");navLinks.forEach(link=>{link.addEventListener("click",()=>{if(navbarLinks.classList.contains("active")){navbarLinks.classList.remove("active");const icon=navbarToggler.querySelector("i");icon.classList.remove("fa-times");icon.classList.add("fa-bars")}})});function updateActiveNavItem(){let currentSection=""
    sections.forEach((section)=>{const sectionTop=section.offsetTop-100
    const sectionHeight=section.offsetHeight
    if(window.scrollY>=sectionTop&&window.scrollY<sectionTop+sectionHeight){currentSection=section.getAttribute("id")}})
    navItems.forEach((item)=>{const link=item.querySelector("a")
    item.classList.remove("active")
    if(link&&link.getAttribute("href")===`#${currentSection}`){item.classList.add("active")}})}
    updateActiveNavItem()
    window.addEventListener("scroll",updateActiveNavItem)
    const dropdowns=document.querySelectorAll(".dropdown")
    dropdowns.forEach((dropdown)=>{})
    for(let i=0;i<6;i++){}
    window.addEventListener("scroll",()=>{if(window.scrollY>10){navbar.classList.add("scrolled")}else{navbar.classList.remove("scrolled")}})
    if(window.scrollY>10){navbar.classList.add("scrolled")}})
    document.addEventListener('DOMContentLoaded',function(){const footer=document.querySelector('#Footer footer');for(let i=0;i<10;i++){const particle=document.createElement('div');particle.className='floating-particle';const size=Math.random()*5+3;particle.style.width=size+'px';particle.style.height=size+'px';particle.style.top=Math.random()*100+'%';particle.style.left=Math.random()*100+'%';const duration=Math.random()*15+10;particle.style.animationDuration=duration+'s';particle.style.animationDelay=Math.random()*5+'s';footer.appendChild(particle)}});document.addEventListener('DOMContentLoaded',function(){const progressBar=document.getElementById('progressBar');const progressText=document.getElementById('progressText');const loadingScreen=document.getElementById('loadingScreen');const mainContent=document.getElementById('mainContent');const logoContainer=document.getElementById('logoContainer');const expandingCircle=document.getElementById('expandingCircle');const progcont=document.querySelector(".progress-container")
    const LOADING_DURATION=1500;let progress=0;const startTime=Date.now();const endTime=startTime+LOADING_DURATION;function updateProgress(){const currentTime=Date.now();const elapsedTime=currentTime-startTime;progress=Math.min(100,(elapsedTime/LOADING_DURATION)*100);progressBar.style.width=`${progress}%`;progressText.textContent=`Loading... ${Math.round(progress)}%`;if(progress<100){requestAnimationFrame(updateProgress)}else{progcont.classList.add('no_display')
    logoContainer.classList.add('completed');setTimeout(()=>{expandingCircle.classList.add('expand');setTimeout(()=>{loadingScreen.style.opacity='0';loadingScreen.style.pointerEvents='none';setTimeout(()=>{loadingScreen.style.display='none'},500)},500)},800)}}
    requestAnimationFrame(updateProgress)});window.onload=function(){window.scrollTo(0,0)};const lyeItems=[{id:1,content:"Image 1",imageUrl:"../assests/previous_year_edition/picture_1.jpg"},{id:2,content:"Image 2",imageUrl:"../assests/previous_year_edition/picture_2.jpg"},{id:3,content:"Image 3",imageUrl:"../assests/previous_year_edition/picture_3.jpg"},{id:4,content:"Image 4",imageUrl:"../assests/previous_year_edition/picture_4.jpg"},{id:5,content:"Image 5",imageUrl:"../assests/previous_year_edition/picture_5.jpg"},{id:6,content:"Image 6",imageUrl:"../assests/previous_year_edition/picture_6.jpg"},{id:7,content:"Image 7",imageUrl:"../assests/previous_year_edition/picture_7.jpg"},{id:8,content:"Image 8",imageUrl:"../assests/previous_year_edition/picture_8.jpg"},{id:9,content:"Image 9",imageUrl:"../assests/previous_year_edition/picture_9.jpg"},{id:10,content:"Image 10",imageUrl:"../assests/previous_year_edition/picture_10.jpg"}];const lyeScroller=document.getElementById('lyeScroller');const lyeScrollerContainer=document.getElementById('lyeScrollerContainer');function createLyeScrollItem(item,index){const scrollItem=document.createElement('div');scrollItem.className='lye-scroll-item';scrollItem.setAttribute('data-id',`lye-${item.id}-${index}`);const img=document.createElement('img');img.src=item.imageUrl;img.alt=item.content||'Last year edition image';img.className='lye-scroll-image';scrollItem.appendChild(img);return scrollItem}
    function initLyeScroller(){lyeScroller.innerHTML='';lyeItems.forEach((item,index)=>{lyeScroller.appendChild(createLyeScrollItem(item,'original'))});lyeItems.forEach((item,index)=>{lyeScroller.appendChild(createLyeScrollItem(item,'duplicate'))});checkLyeScrollerWidth()}
    lyeScrollerContainer.addEventListener('mouseenter',()=>{lyeScroller.style.animationPlayState='paused'});lyeScrollerContainer.addEventListener('mouseleave',()=>{lyeScroller.style.animationPlayState='running'});function checkLyeScrollerWidth(){const scrollerWidth=lyeScroller.offsetWidth;const containerWidth=lyeScrollerContainer.offsetWidth;if(scrollerWidth<containerWidth*3){lyeItems.forEach((item,index)=>{lyeScroller.appendChild(createLyeScrollItem(item,'extra'))})}}
    document.addEventListener('DOMContentLoaded',initLyeScroller);window.addEventListener('resize',checkLyeScrollerWidth);document.addEventListener('DOMContentLoaded',function(){const modal=document.getElementById('faq-modal');const readMoreBtn=document.getElementById('read-more-btn');const closeBtn=document.querySelector('.close-btn');const faqQuestions=document.querySelectorAll('.faq-question');readMoreBtn.addEventListener('click',function(){modal.style.display='block';document.body.style.overflow='hidden'});closeBtn.addEventListener('click',function(){modal.style.display='none';document.body.style.overflow='auto'});window.addEventListener('click',function(event){if(event.target===modal){modal.style.display='none';document.body.style.overflow='auto'}});document.addEventListener('keydown',function(event){if(event.key==='Escape'&&modal.style.display==='block'){modal.style.display='none';document.body.style.overflow='auto'}});faqQuestions.forEach(function(question){question.addEventListener('click',function(){faqQuestions.forEach(q=>{if(q!==this){q.classList.remove('active');q.nextElementSibling.classList.remove('active');const qIcon=q.querySelector('i');qIcon.classList.remove('fa-chevron-up');qIcon.classList.add('fa-chevron-down')}});this.classList.toggle('active');this.nextElementSibling.classList.toggle('active');const icon=this.querySelector('i');if(this.classList.contains('active')){icon.classList.remove('fa-chevron-down');icon.classList.add('fa-chevron-up')}else{icon.classList.remove('fa-chevron-up');icon.classList.add('fa-chevron-down')}})});if(faqQuestions.length>0){const firstQuestion=faqQuestions[0];const firstAnswer=firstQuestion.nextElementSibling;firstQuestion.classList.add('active');firstAnswer.classList.add('active');const icon=firstQuestion.querySelector('i');icon.classList.remove('fa-chevron-down');icon.classList.add('fa-chevron-up')}});const popup=document.querySelector(".registration_end")
    const close_but_pop=document.querySelector(".image_close")
    const close_not_yet=document.querySelector(".imgae_close1")
    const pop_container=document.querySelector(".registration_end1")
    const notyet=document.querySelector(".registration_notyet")
    close_but_pop.addEventListener("click",()=>{popup.style.display='none'})
    close_not_yet.addEventListener('click',()=>{notyet.style.display='none'})
    popup.addEventListener("click",(e)=>{if(e.target===popup){popup.style.display='none'}})
    notyet.addEventListener("click",(e)=>{if(e.target===notyet){notyet.style.display='none'}})
    const deadline_poster=new Date(2025,3,22,23,59,59)
    const deadline_registration=new Date(2025,4,2,23,59,59)
    const registration_open=new Date(2025,3,22)
    const registration_link="https://forms.gle/T1njpkN4H1YGwVLy5"
    const poster_link="https://forms.gle/EQoghUejPNMvYD8z9"
    function check_date(){let currentDate=new Date()
    if(currentDate<registration_open){notyet.style.display="flex"}else if(currentDate>=deadline_registration){popup.style.display="flex"}else{window.open(registration_link,"_blank")}}
    function check_date_poster(){let currentDate=new Date()
    if(currentDate>deadline_poster){popup.style.display="flex"}else{window.open(poster_link,"_blank")}}
    const paragraph=document.getElementById("parag")
    console.log(paragraph)
    function updateTime(){let currentDate=new Date()
    const month=currentDate.getMonth()
    let x
    if(month<=3){x=currentDate.getFullYear()}else{x=currentDate.getFullYear()+1}
    paragraph.innerText="See you at IndabaX Tunisia "+x+"!"}
    updateTime()
    setInterval(updateTime,1000);document.addEventListener("DOMContentLoaded",()=>{const triggers=document.querySelectorAll(".trigger")
    const boundaries=document.querySelectorAll(".section-boundary")
    const textSections=document.querySelectorAll(".text-section")
    const featuredImage=document.getElementById("featured-image")
    const scrollSection=document.querySelector(".scroll-section")
    const contentWrapper=document.querySelector(".content-wrapper")
    let currentSection="section1"
    let isInSection=!1
    let scrollDirection="down"
    let lastScrollTop=0
    let initialScrollPassed=!1
    const initialScrollThreshold=50
    let lastScrollDirection="down"
    function updateScrollDirection(){const st=window.pageYOffset||document.documentElement.scrollTop
    scrollDirection=st>lastScrollTop?"down":"up"
    lastScrollTop=st<=0?0:st}
    window.addEventListener("scroll",()=>{updateScrollDirection()
    if(isInSection&&!initialScrollPassed){const scrollY=window.scrollY
    const sectionTop=scrollSection.offsetTop
    if(scrollY>sectionTop+initialScrollThreshold){initialScrollPassed=!0
    contentWrapper.classList.remove("initial-state")
    setTimeout(()=>{if(lastScrollDirection==="down"){activateSection("section1")}else{const sectionHeight=scrollSection.offsetHeight
    const progress=(scrollY-sectionTop)/(sectionHeight-window.innerHeight)
    if(progress>0.8){activateSection("section5")}else{activateSection("section4")}}},600)}else if(scrollY<sectionTop&&initialScrollPassed){initialScrollPassed=!1
    contentWrapper.classList.add("initial-state")
    textSections.forEach((section)=>{section.classList.remove("active","exit")})}}})
    const sectionObserver=new IntersectionObserver((entries)=>{const entry=entries[0]
    if(entry.isIntersecting){console.log("Section entering viewport, direction:",scrollDirection)
    if(!isInSection){isInSection=!0
    lastScrollDirection=scrollDirection
    if(scrollDirection==="down"){featuredImage.classList.remove("image-exit","image-enter-bottom")
    featuredImage.classList.add("image-enter")
    setTimeout(()=>{featuredImage.classList.remove("image-enter")
    featuredImage.classList.add("image-active")
    contentWrapper.classList.add("initial-state")
    initialScrollPassed=!1},200)}else{featuredImage.classList.remove("image-exit","image-enter")
    featuredImage.classList.add("image-enter-bottom")
    setTimeout(()=>{featuredImage.classList.remove("image-enter-bottom")
    featuredImage.classList.add("image-active")
    const scrollY=window.scrollY
    const sectionTop=scrollSection.offsetTop
    const sectionHeight=scrollSection.offsetHeight
    const progress=(scrollY-sectionTop)/(sectionHeight-window.innerHeight)
    contentWrapper.classList.remove("initial-state")
    initialScrollPassed=!0
    if(progress>0.8){activateSection("section5")}else{activateSection("section4")}
    clearTimeouts()},200)}}}else{if(isInSection){isInSection=!1
    console.log("Section exiting viewport, direction:",scrollDirection)
    if(scrollDirection==="down"){featuredImage.classList.remove("image-active","image-enter","image-enter-bottom")
    featuredImage.classList.add("image-exit")}else{featuredImage.classList.remove("image-active","image-enter","image-enter-bottom")
    featuredImage.classList.add("image-exit")
    setTimeout(()=>{contentWrapper.classList.add("initial-state")
    initialScrollPassed=!1},300)}
    textSections.forEach((section)=>{section.classList.add("exit")
    setTimeout(()=>{section.classList.remove("active","exit")},500)})
    initialScrollPassed=!1}}},{threshold:0.1,},)
    const activeTimeouts=[]
    const originalSetTimeout=window.setTimeout
    window.setTimeout=(fn,delay)=>{const id=originalSetTimeout(fn,delay)
    activeTimeouts.push(id)
    return id}
    function clearTimeouts(){while(activeTimeouts.length){clearTimeout(activeTimeouts.pop())}}
    sectionObserver.observe(scrollSection)
    const observer=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting&&isInSection&&initialScrollPassed){const newSectionId=entry.target.dataset.section
    if(newSectionId!==currentSection){document.getElementById(currentSection).classList.add("exit")
    if(1){featuredImage.classList.remove("image-active")
    featuredImage.style.transform=`scale(0.95)`}
    setTimeout(()=>{textSections.forEach((section)=>{section.classList.remove("active","exit")})
    currentSection=newSectionId
    document.getElementById(newSectionId).classList.add("active")
    featuredImage.style.opacity="1";setTimeout(()=>{featuredImage.style.transform="";featuredImage.classList.add("image-active")},50)},500)}}})},{threshold:0.5,},)
    function findVisibleTrigger(){const triggers=document.querySelectorAll(".trigger")
    for(let i=0;i<triggers.length;i++){if(isInViewport(triggers[i])){return triggers[i]}}
    return null}
    function isInViewport(element){const rect=element.getBoundingClientRect()
    return rect.top<=(window.innerHeight||document.documentElement.clientHeight)&&rect.bottom>=0}
    function activateSection(sectionId){textSections.forEach((section)=>{section.classList.remove("active","exit")});document.getElementById(sectionId).classList.add("active");currentSection=sectionId;featuredImage.classList.remove("image-exit");featuredImage.classList.add("image-active");featuredImage.style.opacity="1"}
    const boundaryObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{const boundaryType=entry.target.dataset.boundary
    if(boundaryType==="start"&&entry.isIntersecting){console.log("Start boundary crossed")}else if(boundaryType==="end"&&entry.isIntersecting){console.log("End boundary crossed")}})},{threshold:0.1,},)
    boundaries.forEach((boundary)=>{boundaryObserver.observe(boundary)})
    triggers.forEach((trigger)=>{observer.observe(trigger)})
    function checkInitialVisibility(){const scrollSectionVisible=isInViewport(scrollSection)
    updateScrollDirection()
    lastScrollDirection=scrollDirection
    if(scrollSectionVisible){isInSection=!0
    setTimeout(()=>{const scrollY=window.scrollY
    const sectionTop=scrollSection.offsetTop
    if(scrollY<sectionTop+initialScrollThreshold){contentWrapper.classList.add("initial-state")
    initialScrollPassed=!1}else{contentWrapper.classList.remove("initial-state")
    initialScrollPassed=!0
    const sectionHeight=scrollSection.offsetHeight
    const progress=(scrollY-sectionTop)/(sectionHeight-window.innerHeight)
    if(progress>0.8){activateSection("section5")}else if(progress>0.6){activateSection("section4")}else if(progress>0.4){activateSection("section3")}else if(progress>0.2){activateSection("section2")}else{activateSection("section1")}}
    featuredImage.classList.remove("image-enter","image-enter-bottom","image-exit")
    if(currentSection!=="section5"){featuredImage.classList.add("image-active")}},300)}else{isInSection=!1
    const sectionRect=scrollSection.getBoundingClientRect()
    if(sectionRect.top>window.innerHeight){featuredImage.classList.add("image-enter")
    featuredImage.classList.remove("image-active","image-exit","image-enter-bottom")}else{featuredImage.classList.add("image-enter-bottom")
    featuredImage.classList.remove("image-active","image-exit","image-enter")}
    contentWrapper.classList.add("initial-state")
    initialScrollPassed=!1}}
    checkInitialVisibility()})