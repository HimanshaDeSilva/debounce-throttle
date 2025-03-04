const input = document.querySelector("input")
const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")
const throttleText = document.getElementById("throttle")

input.addEventListener("input" ,e =>{
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})

//Debounce
const updateDebounceText = debounce((text)=>{
    // debounceText.textContent = text
    incrementCount(debounceText)// for mouse event
})

function debounce(callback,delay=1000){
    let timeout
    return(...args)=>{
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            callback(...args)
        },delay)
    }
}

//throttle
const updateThrottleText = throttle((text)=>{
    // throttleText.textContent = text
    incrementCount(throttleText)// for mouse event
})

function throttle(callback,delay=1000){
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc =()=>{
        if(waitingArgs == null){
            shouldWait = false
        }else{
            callback(...waitingArgs)
            waitingArgs = null
        setTimeout(timeoutFunc, delay)
        }
    }

    return(...args)=>{
        if(shouldWait) {
            waitingArgs = args
            return
        }
        callback(...args)
        shouldWait = true

        setTimeout(timeoutFunc,delay)
    }
}

document.addEventListener("mousemove", e => {
    incrementCount(defaultText)
    updateDebounceText()
    updateThrottleText()
  })
  
  function incrementCount(element) {
    element.textContent = (parseInt(element.innerText) || 0) + 1
  }