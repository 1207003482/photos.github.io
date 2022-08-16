const spans=document.querySelectorAll('.change')
const video=document.querySelector('.video')
const search=document.querySelector('.fa-search')
const su=document.querySelector('.su')
const lbtVideo=document.querySelectorAll('.swiper-slide video')
const text=document.querySelector('.text')
const main=document.querySelector('.main')

var x=0
var len=text.innerHTML

const changeColor=document.querySelector("#login-btn")

changeColor.addEventListener('click',()=>{
    document.body.classList.add('rootActive')
})

changeColor.addEventListener('dblclick',()=>{
    document.body.classList.remove('rootActive')
})

for(let i=0;i<spans.length;i++){
    spans[i].addEventListener('click',()=>{
        document.querySelector('.change.active').classList.remove('active')
        spans[i].classList.toggle('active')
       
       video.src=spans[i].dataset.src
       video.play() 
    })
}
anima()
function anima(){
    main.innerHTML=len.substring(0,x++)+'|'
    if(x<=len.length){
        var v=Math.round(Math.random()*200)
        setTimeout(anima,v)
    }
}

search.addEventListener('click',()=>{
    su.style.display="block"    
})
window.addEventListener('scroll',()=>{
    su.style.display="none"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  for(let i=0;i<lbtVideo.length;i++){
    lbtVideo[i].addEventListener('click',()=>{
        lbtVideo[i].play()
    })
  }
  for(let i=0;i<lbtVideo.length;i++){
    lbtVideo[i].addEventListener('dblclick',()=>{
        lbtVideo[i].pause()
    })
  }