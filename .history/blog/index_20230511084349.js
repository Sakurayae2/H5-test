// 文章跳转
var card = document.getElementsByClassName('card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        window.location.href = 'www.baidu.com'
    })
}
// 导航栏隐藏
var top = document.getElementsByClassName('top')
var goTop = document.getElementById('goTop')

window.onscroll = function () {

}
goTop.onclick = function () {
    window.scrollTo({
        top: 0,

    })
}