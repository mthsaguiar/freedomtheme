window.addEventListener('load', ()=>{
    let acc2 = document.querySelectorAll(".accordion-image__img-content .accordion");
    let i;
    console.log('AAAAAAAAAAA');
    for (i = 0; i < acc2.length; i++) {
    acc2[i].addEventListener("click", function() {
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
        if (panel2.style.height === scrollHeight+'px' || panel2.style.height == 'auto') {
            panel2.style.height = "0";
        } else {
            panel2.style.height = scrollHeight+'px';
        }
    });
    }
})