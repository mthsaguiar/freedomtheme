const divElement = document.createElement('script');
divElement.setAttribute('src',"/assets/SortScript.js");
console.log('PageSpeed');
window.addEventListener('load', ()=>{
    setTimeout(()=>{
        document.querySelector('head').appendChild(divElement)
    },5000)
})