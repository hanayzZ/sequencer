$(function () {
    function a() {
        1 == K && $("#music_bg").animate({width: G + H, left: -J, top: -J}, N, function () {
            $("#music_bg").animate({width: G, left: 0, top: 0}, N, function () {
                a()
            })
        })
    }

    function s(a) {
        $("#wrap").css("top", 0), $(".main_1").css("top", $("#main_1").offset().top - a), $(".main_2").css("top", $("#main_2").offset().top - a), $(".main_3").css("top", $("#main_3").offset().top - a), $(".main_4").css("top", $("#main_4").offset().top - a), $(".main_5").css("top", $("#main_5").offset().top - a), $(".main_6").css("top", $("#main_6").offset().top - a)
    }

    function o() {
        $.fn.fullpage.setAllowScrolling(!1), $("#music").css("display", "none"), setTimeout(function () {
            var a = $("#wrap").offset().top, o = $("#main_1").offset().top, n = $("#m1top").offset().top;
            a ? s($("#wrap").offset().top) : o ? s($("#main_1").offset().top) : n && s($("#m1top").offset().top), $("#main_1").addClass("show"), $("#main_1 .clk").removeClass("noclk"), F.play()
        }, 500)
    }

    function n() {
        $("#wrap").css("top", 0), $(".main_1").css("top", 0), $("#main_1").removeClass("show")
    }

    function e() {
        $("#main_2").addClass("show"), $("#main_2 .clk").removeClass("noclk"), $(".p3_count").addClass("on"), A.play(), setTimeout(function () {
            // $(".p3_key").addClass("deng"), setTimeout(function () {
            //     x = w(3), $(".p3car").addClass("play" + x), $(".p3_key").removeClass("deng"), setTimeout(function () {
            //         $(".play" + x).addClass("done")
            //     }, 3800)
            // }, 3800)
            lottery();
        }, 4500)
    }

    function t() {
        $("#main_2").removeClass("show"), $(".p3car").removeClass("play" + x), $(".p3car").removeClass("done"), x || (x = 1), $(".p3_key").removeClass("deng" + M[x - 1])
    }

    function l() {
        U = 1, $("#main_3").addClass("show"), $("#main_3 .clk").removeClass("noclk"), A.play(), setTimeout(function () {
            v(), b = 1
        }, 5200)
    }

    function i() {
        $("#main_3").removeClass("show")
    }

    function c() {
        if (!$('.mstar').hasClass("on") && !$('.wstar').hasClass("on")) {
            $('.mstar').addClass("on");
        }
        $("#main_4").addClass("show"), $("#main_4 .clk").removeClass("noclk")
    }

    function d() {
        $("#main_4").removeClass("show")
    }

    function r() {
        $("#main_5").addClass("show"), $("#main_5 .clk").removeClass("noclk")
    }

    function p() {
        $(".rst").removeClass("on"), $("#main_6").removeClass("show")

    }

    function m() {
        $("#main_6").addClass("show"), $("#main_6 .clk").removeClass("noclk")
    }

    function u() {
        $(".rst").removeClass("on"), $("#main_6").removeClass("show")
    }

    function f(a, s) {
        var n = [o, e, l, c, r, m], t = n[s - 1];
        t && t()
    }

    function _(a, s, o) {
        var n = O[a - 1];
        n && n()
    }

    function C() {
        for (var a = $("img"), s = a.length, n = 0, e = 0; s > e; e++)!function (e) {
            var t = new Image;
            t.onload = function () {
                t.onload = null, n++, n == s && ($("#loading").hide(), $(".bokeh").removeClass("bokeh"), o())
            }, t.src = a.eq(e).attr("src")
        }(e)
    }

    function g() {
        j.play(), j.paused || (K = !0, z = !1, a(), $("#music_colse").hide())
    }

    function h() {
        j.pause(), K = !1, $("#music_colse").show()
    }

    function v() {
        T = setInterval(function () {
            $(".p4_god").removeClass("godFrame" + U), U = w(10), $(".p4_god").addClass("godFrame" + U)
        }, 500)
    }

    function k() {
        clearInterval(T)
    }

    function w(a) {
        return Math.floor(Math.random() * a + 1)
    }
    var flag = false;
    function lottery(){
        flag =true;
        var i=0;
        var timer;
        if(i>8){
            i=0;
        }
        function changeCard(){
            $('.current').removeClass('.current');
            i++;
            $(this).eq(i).addClass('.current');
        }
        timer = setInterval(changeCard,500);
        // var Result = Math.floor(Math.random() * 7 + 1);//点击产生随机数，最后将停在次数上;
        var arr = [1,2,3,4];
        var Result = arr[Math.floor((Math.random()*arr.length))];
        console.log(Result);
        var opar = {
            oTagClass : ".card",//全部跑马灯的类名;
            winResult :Result ,
            endFun:function(){
                window.STOPFLAG = !1;
                clearInterval(timer);
                $('.ul-sequencer li.current').addClass('key');
                setTimeout(function () {
                    $('.ul-sequencer li.card').removeClass('current');
                },200);
            }
        };
        new Game(opar).init();
        // setTimeout(function () {
        //     $('.ul-sequencer li.card').removeClass('current');
        // },4000);
    }
    window.toggle = true;
    $(".card").click(function () {
        if(window.toggle){
            window.toggle = false;
            if($(this).hasClass('key')){
                $('.p3_god_ok').addClass('on');
                $('.p3_rst_ok').addClass('on');
            }else {
                $('.p3_god_wrong').addClass('on');
                $('.p3_rst_wrong').addClass('on');
            }
            setTimeout(function () {
                $('.p3_car_up').addClass('on');
            },3000);
        }
    });
    var y = ($(window).width() - 0, $(window).height() - 0, 0), b = 0, T = 0, U = 0, x = 0, S = [2.5, 10, 3, 2, 6, 9.5, 8, 5.5, 4, 4.5], M = [3, 1, 2], L = $("#drops")[0];
    L.autoplay = !1, L.loop = !1;
    var A = $("#tik")[0];
    A.autoplay = !1, A.loop = !1;
    var F = $("#eng")[0];
    F.autoplay = !0, F.loop = !1;
    var I = $("#kuaimen")[0];
    I.autoplay = !1, I.loop = !1;
    var q = $("#pok")[0];
    q.autoplay = !1, q.loop = !1;
    var D = $("#pohoh")[0];
    D.autoplay = !1, D.loop = !1;
    var j = $("#bg-music")[0];
    j.autoplay = !1, j.loop = !1;
    var z = !0, B = !0, E = !0, G = $("#music").width(), H = ($("#music").height(), 6), J = H / 2, K = !1, N = 300, O = [n, t, i, d, p, u];
    C(), $("#music").bind("touchstart click", function () {
        j.paused ? g() : h()
    }), $("#main_1").bind("touchstart", function () {
        E && (E = !1, A.load(), F.load(), I.load(), q.load(), D.load(), L.load())
    }), $("#main_4").bind("touchstart", function () {
        B && (B = !1, j.load())
    }), $("#wrap").fullpage({
        css3: !1,
        scrollingSpeed: 300,
        afterLoad: f,
        onLeave: _
    }), $.fn.fullpage.setAllowScrolling(!1);
    var P = 0;
    $(".rdurl").click(function (a) {
        rdUrl && (window.location.href = rdUrl)
    }),
        $("#sbg").click(function (a) {
            P && clearTimeout(P), $("#sbg").css("display", "none")
        }),
        $(".clk").bind("touchstart click", function (a) {
            var s = a.target.id, o = 800;
            if (!$(a.target).hasClass("noclk")) {
                if ("share" == s)return $("#sbg").css("display", "block"), P = setTimeout(function () {
                    $("#sbg").css("display", "none")
                }, 3e3), !1;
                if ("redo" == s)$(".check").removeClass("check"), $(".gone").addClass("clk"), $(".gone").removeClass("gone"), $.fn.fullpage.moveTo(1, 0); else if ("sbg" == s); else if ("gonext" == s); else {
                    if (y)return;
                    if ($(a.target).hasClass("nogone") || $(a.target).siblings(".elem").addClass("gone"), $(a.target).hasClass("smen"))L.play(), $(".smen").addClass("chk"), $(".p2_god").addClass("chkl"), $(".wstar").addClass("on"); else if ($(a.target).hasClass("swmen"))L.play(), $(".swmen").addClass("chk"), $(".p2_god").addClass("chkr"), $(".mstar").addClass("on"); else if ($(a.target).hasClass("p1_start"))$(a.target).addClass("gone"), F.play(); else {
                        if ($(a.target).hasClass("p6_button"))return;
                        if ($(a.target).hasClass("star"))j.play(), wx.onMenuShareTimeline({
                            title: nshareTitleTimeline + $(".cname_" + s).html(),
                            link: lineLink,
                            imgUrl: imgUrl,
                            success: function () {
                            },
                            cancel: function () {
                            }
                        }), wx.onMenuShareAppMessage({
                            title: nshareTitleFriend,
                            desc: ndescContent + $(".cname_" + s).html(),
                            link: lineLink,
                            imgUrl: imgUrl,
                            type: "",
                            dataUrl: "",
                            success: function () {
                            },
                            cancel: function () {
                            }
                        }), rdUrl && (rdUrl += s), $(".cname_" + s).addClass("on"), $(".ctxt_" + s).addClass("on"), $(".ctips_" + s).addClass("on"), $(".ccar_" + s).addClass("on"), $(a.target).addClass("on"), o = 2500; else {
                            if ($(a.target).hasClass("p4_pai"))return void(b && (I.play(), $(".p4_pp").addClass("on"), k(), U || (U = 1), $("#gscore").html(S[U - 1]), $(".p4_score").addClass("on"), $(".p4_txt02").addClass("gone"), $(".p4_pai").removeClass("on"), $(".p4_pai").addClass("gone"), setTimeout(function () {
                                $(".p4_car_up").addClass("on")
                            }, 2200)));
                            if ($(a.target).hasClass("p3car"))return $(a.target).hasClass("done") ? (x || (x = 1), $(".p3_key").removeClass("gone"), $(".p3_key").addClass("deng" + M[x - 1]), $(a.target).addClass("chk"), s == "car" + M[x - 1] ? (q.play(), $(".p3_god_ok").addClass("on"), $(".p3_rst_ok").addClass("on")) : (D.play(), $(".p3_god_wrong").addClass("on"), $(".p3_rst_wrong").addClass("on")), $(".p3_txt02").addClass("gone"), setTimeout(function () {
                                $(".p3_car_up").addClass("on")
                            }, 2500), void $(".done").removeClass("done")) : void 0;
                            $(a.target).addClass("gone")
                        }
                    }
                    y || setTimeout(function () {
                        y = 0, $.fn.fullpage.moveSectionDown()
                    }, o), y = 1
                }
            }
        })
});
