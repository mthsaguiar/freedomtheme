window.addEventListener('load', ()=>{
    const accordionBtn = document.querySelectorAll(".accordion-image__img-content .accordion");
    accordionBtn.forEach( element=>{
        element.addEventListener('click', ()=>{
            element.classList.toggle('active')
            let elementNext = element.nextElementSibling;
            if(element.classList.contains('active')){
                elementNext.style.height = elementNext.scrollHeight + 'px'
            }else{
                elementNext.style.height = '0px'
            }
        })
    } )
})


