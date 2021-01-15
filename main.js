const loadingText = document.querySelector('.loading-text')
const blur = document.querySelector('.blur')

let blureValue = 0
let interval = setInterval(getBlur, 50)


const blureScale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) +  out_min
}
function getBlur (){
    
    blureValue++,

    blureValue > 99 ? clearInterval(interval) :  null

    loadingText.innerText = `${blureValue}%`,
    loadingText.style.opacity =  blureScale(blureValue, 0, 100, 1 , 0),

    blur.style.filter =  `blur(${blureScale(blureValue, 0,  100 , 30, 0)}px)`;
}


