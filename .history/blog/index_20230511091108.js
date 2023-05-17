// 文章跳转
var card = document.getElementsByClassName('card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        window.location.href = 'www.baidu.com'
    })
}
// 导航栏隐藏
var title = document.querySelector('.title')
var nav = document.querySelector('.nav')
var search = document.querySelector('.search')
var goTop = document.getElementById('goTop')

window.onscroll = function () {
    var jhlheight = document.documentElement.scrollTop || document.body.scrollTop
    jhlheight >= 300 ? goTop.style.display = 'block' : goTop.style.display = 'none'
}
//点击按钮事件
goTop.onclick = function () {
    window.scrollTo({
        //设置滚动条位置
        top: 0, //回到顶部
        behavior: "smooth", //平滑过渡
    });
};
top.onmouseout = function () {
    setTimeout(function () {
        title.style.display = 'none'
        nav.style.display = 'none'
        search.style.display = 'none'
    }, 1000)
}
top.onmouseover = function () {
    title.style.display = 'block'
    nav.style.display = 'block'
    search.style.display = 'block'
}