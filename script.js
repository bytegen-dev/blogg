var ham = document.querySelector('.hamburger')
var ash = document.querySelector('.link-holder')

function drop(){
    // alert ('hey')
    ham.classList.toggle('showburger')
    ash.classList.toggle('show-link')

    // if (ham.className == 'hamburger showburger') {
    //     setTimeout(()=>{
    //         ham.classList.remove('showburger')
    //         ash.classList.remove('show-link')
    //     }, 10000)
    // }
}
