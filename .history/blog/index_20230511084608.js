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
    var jhlheight = document.documentElement.scrollHeight
}
//点击按钮事件
goTop.onclick = function () {
    window.scrollTo({
        //设置滚动条位置
        top: 0, //回到顶部
        behavior: "smooth", //平滑过渡
    });
};