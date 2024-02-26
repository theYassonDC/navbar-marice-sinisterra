function $(e) {
    return document.querySelector(e)
}

const box = $(".conteiner")
const sostinable = true
box.ondragstart = function () {
    return false;
};
box.addEventListener("mousedown", e => {
    console.log("click sostenido", e)
    // document.addEventListener("mousemove", e => {
    //     box.style.left = `${e.pageX}px`
    //     box.style.right = `${e.pageX}px`
    //     box.style.top = `${e.pageY}px`
    //     box.style.bottom = `${e.pageY}px`
    //     console.log("mouse moviendo", e)
    // })
    // box.onmouseup = () =>{
    //     document.removeEventListener('mousemove', onMouseMove);
    // }
})
box.addEventListener("dragstart", e => {
    console.log(e)
})
box.addEventListener("drag", e => {
    console.log(e)
})
box.addEventListener("dragend", e => {
    console.log("mouse suel11to de caja", e)
})
document.addEventListener("mouseup", e => {
    box.style.left = `${e.layerX}px`
    box.style.right = `${e.layerX}px`
    box.style.top = `${e.layerY}px`
    box.style.bottom = `${e.layerY}px`
    console.log("click suelto", e)
})
