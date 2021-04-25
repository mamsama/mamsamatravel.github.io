var menuClick = document.querySelector('.icon_menu-navbar')
var menuClick2 = document.querySelector('.icon_menu-navbar2')
var menuList = document.querySelector('.menu__base')
var menuList2 = document.querySelector('.menu__base2')
var menuclear = document.querySelector('.clear')
var menuclear2 = document.querySelector('.clear2')
menuClick.onclick = function(e) {
    menuList.classList.toggle('transfom')
}
menuclear.onclick = function(e) {
    menuList.classList.remove('transfom')
}
menuClick2.onclick = function(e) {
    menuList2.classList.toggle('transfom')
}
menuclear2.onclick = function(e) {
    menuList2.classList.remove('transfom')
}

// img animation
let img1 = document.querySelector('.main__information-img1')
let img2 = document.querySelector('.main__information-img2')
let img3 = document.querySelector('.main__information-img3')
let slider1 = document.querySelector('.item1')
let slider2 = document.querySelector('.item2')
let slider3 = document.querySelector('.item3')
setTimeout(function(){
    img1.classList.remove('none')
    img2.classList.add('none')
    img3.classList.add('none')
    slider1.classList.add('action')
    slider3.classList.remove('action')

    let imganimation = new Promise(function(resoel) {
        setTimeout(function() {
            img1.classList.add('none')
            img2.classList.remove('none')
            slider1.classList.remove('action')
            slider2.classList.add('action')
            resoel()
        },10000)
    })
    .then(function() {
        setTimeout(function() {
            img2.classList.add('none')
            img3.classList.remove('none')
            slider2.classList.remove('action')
            slider3.classList.add('action')
        },10000)
    })
},0)
setInterval(function() {
    img1.classList.remove('none')
    img3.classList.add('none')
    slider1.classList.add('action')
    slider3.classList.remove('action')

    let imganimation = new Promise(function(resoel) {
        setTimeout(function() {
            img1.classList.add('none')
            img2.classList.remove('none')
            slider1.classList.remove('action')
            slider2.classList.add('action')
            resoel()
        },10000)
    })
    .then(function() {
        setTimeout(function() {
            img2.classList.add('none')
            img3.classList.remove('none')
            slider2.classList.remove('action')
            slider3.classList.add('action')
        },10000)
    })
},30000)
