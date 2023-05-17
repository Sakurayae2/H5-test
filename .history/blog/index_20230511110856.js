// 文章跳转
var card = document.getElementsByClassName('card')
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function () {
        window.location.href = 'www.baidu.com'
    })
}
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

// 鼠标点击爱心
!(function (e, t, a) {
    function r() {
        for (var e = 0; e < s.length; e++)
            s[e].alpha <= 0
                ? (t.body.removeChild(s[e].el), s.splice(e, 1))
                : (s[e].y--,
                    (s[e].scale += 0.004),
                    (s[e].alpha -= 0.013),
                    (s[e].el.style.cssText =
                        "left:" +
                        s[e].x +
                        "px;top:" +
                        s[e].y +
                        "px;opacity:" +
                        s[e].alpha +
                        ";transform:scale(" +
                        s[e].scale +
                        "," +
                        s[e].scale +
                        ") rotate(45deg);background:" +
                        s[e].color +
                        ";z-index:99999"));
        requestAnimationFrame(r);
    }

    function n() {
        var t = "function" == typeof e.onclick && e.onclick;
        e.onclick = function (e) {
            t && t(), o(e);
        };
    }

    function o(e) {
        var a = t.createElement("div");
        (a.className = "heart"),
            s.push({
                el: a,
                x: e.clientX - 5,
                y: e.clientY - 5,
                scale: 1,
                alpha: 1,
                color: c(),
            }),
            t.body.appendChild(a);
    }

    function i(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e));
        } catch (t) {
            a.styleSheet.cssText = e;
        }
        t.getElementsByTagName("head")[0].appendChild(a);
    }

    function c() {
        return (
            "rgb(" +
            ~~(255 * Math.random()) +
            "," +
            ~~(255 * Math.random()) +
            "," +
            ~~(255 * Math.random()) +
            ")"
        );
    }
    var s = [];
    (e.requestAnimationFrame =
        e.requestAnimationFrame ||
        e.webkitRequestAnimationFrame ||
        e.mozRequestAnimationFrame ||
        e.oRequestAnimationFrame ||
        e.msRequestAnimationFrame ||
        function (e) {
            setTimeout(e, 1e3 / 60);
        }),
        i(
            ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
        ),
        n(),
        r();
})(window, document);

// 蜘蛛网背景
!(function () {
    function n(n, e, t) {
        return n.getAttribute(e) || t;
    }

    function e(n) {
        return document.getElementsByTagName(n);
    }

    function t() {
        var t = e("script"),
            o = t.length,
            i = t[o - 1];
        return {
            l: o,
            z: n(i, "zIndex", -1),
            o: n(i, "opacity", 0.5),
            c: n(i, "color", "0,0,0"),
            n: n(i, "count", 99),
        };
    }

    function o() {
        (a = m.width =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth),
            (c = m.height =
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight);
    }

    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function (i, x) {
            for (
                i.x += i.xa,
                i.y += i.ya,
                i.xa *= i.x > a || i.x < 0 ? -1 : 1,
                i.ya *= i.y > c || i.y < 0 ? -1 : 1,
                r.fillRect(i.x - 0.5, i.y - 0.5, 1, 1),
                e = x + 1;
                e < u.length;
                e++
            )
                (n = u[e]),
                    null !== n.x &&
                    null !== n.y &&
                    ((o = i.x - n.x),
                        (m = i.y - n.y),
                        (l = o * o + m * m),
                        l < n.max &&
                        (n === y &&
                            l >= n.max / 2 &&
                            ((i.x -= 0.03 * o), (i.y -= 0.03 * m)),
                            (t = (n.max - l) / n.max),
                            r.beginPath(),
                            (r.lineWidth = t / 2),
                            (r.strokeStyle = "rgba(" + d.c + "," + (t + 0.2) + ")"),
                            r.moveTo(i.x, i.y),
                            r.lineTo(n.x, n.y),
                            r.stroke()));
        }),
            x(i);
    }

    var a,
        c,
        u,
        m = document.createElement("canvas"),
        d = t(),
        l = "c_n" + d.l,
        r = m.getContext("2d"),
        x =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (n) {
                window.setTimeout(n, 1e3 / 45);
            },
        w = Math.random,
        y = { x: null, y: null, max: 2e4 };
    (m.id = l),
        (m.style.cssText =
            "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o),
        e("body")[0].appendChild(m),
        o(),
        (window.onresize = o),
        (window.onmousemove = function (n) {
            (n = n || window.event), (y.x = n.clientX), (y.y = n.clientY);
        }),
        (window.onmouseout = function () {
            (y.x = null), (y.y = null);
        });
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a,
            g = w() * c,
            v = 2 * w() - 1,
            p = 2 * w() - 1;
        s.push({ x: h, y: g, xa: v, ya: p, max: 6e3 });
    }
    (u = s.concat([y])),
        setTimeout(function () {
            i();
        }, 100);
})();