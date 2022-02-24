window.addEventListener('load', ()=>{
    const accordionBtn = document.querySelectorAll(".accordion-image__img-content .accordion");
    console.log(accordionBtn);
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



/*
window.addEventListener('load', ()=>{
    let acc2 = document.querySelectorAll(".accordion-image__img-content .accordion");
    let i;
    
    for (i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function() {
        console.log(acc2);
        this.classList.toggle("active");
        document.querySelectorAll(".accordion-image__img-content .accordion").forEach(e=>{
            if(e != this){
                e.classList.remove('active');
                let nextElement = e.nextElementSibling;
                nextElement.style.height = "0";
            }
        })
        let panel2 = this.nextElementSibling;
        let scrollHeight = panel2.scrollHeight;
        console.log(panel2,panel2.style.height);
        if (panel2.style.height === scrollHeight+'px' || panel2.style.height == 'auto') {
            panel2.style.height = "0";
        } else {
            panel2.style.height = scrollHeight+'px';
        }
    });
    }
})*/