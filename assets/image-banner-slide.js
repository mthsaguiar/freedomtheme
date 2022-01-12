const elementBannerSlide = document.querySelector('.banner__swiper-slide')

if(elementBannerSlide != null){
    new Flickity(elementBannerSlide, {
        fade: false,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: 4000,
        on: {
            ready: function(){
                document.querySelectorAll('.banner__swiper-slide li:not(:first-child) .banner__media').forEach(e=>{
                    e.style.display = "block"
                })
            }
        }
    })
}