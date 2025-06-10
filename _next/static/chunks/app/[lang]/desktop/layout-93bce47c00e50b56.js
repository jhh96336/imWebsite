(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [194], {
        15604: function(e, t, n) {
            Promise.resolve().then(n.bind(n, 58458)), Promise.resolve().then(n.bind(n, 56046)), Promise.resolve().then(n.bind(n, 96282))
        },
        58458: function(e, t, n) {
            "use strict";
            var o = n(78174),
                a = n(69893),
                i = n(65172);
            t.default = e => {
                let {
                    lang: t
                } = e, n = e => {
                    let t = "; ".concat(document.cookie),
                        n = null == t ? void 0 : t.split("; ".concat(e, "="));
                    return n && (null == n ? void 0 : n.length) === 2 ? n[1].split(";").shift() : ""
                };
                (0, a.useEffect)(() => {
                    let e = n("cookies_privacy");
                    setTimeout(() => {
                        var t, n, o, a;
                        "true" === e ? null === (n = window) || void 0 === n || null === (t = n.consentGrantedAdStorage) || void 0 === t || t.call(n) : "false" === e && (null === (a = window) || void 0 === a || null === (o = a.consentDeniedAdStorage) || void 0 === o || o.call(a))
                    }, 1)
                }, []);
                let l = {
                    en: {
                        title: "Cookie Policy\uD83C\uDF6A",
                        info: "We use cookies and localStorage to collect data that helps improve your experience on our site, as outlined in our ",
                        policy: "privacy policy",
                        accept: "Accept",
                        rejejct: "Decline"
                    },
                    zh: {
                        title: "隐私政策\uD83C\uDF6A",
                        info: "我们使用 Cookies 及 localStorage 来收集数据，以提升您在我们网站上的使用体验，具体说明请参见我们的",
                        policy: "隐私政策",
                        accept: "同意",
                        rejejct: "拒绝"
                    }
                };
                return (0, o.jsxs)(i.ZP, {
                    location: "bottom",
                    buttonText: l[t].accept,
                    enableDeclineButton: !0,
                    declineButtonText: l[t].rejejct,
                    style: {
                        background: "#ffffff",
                        color: "#040F42",
                        padding: "38px 48px",
                        margin: "0 48px 25px",
                        width: "calc(100% - 96px)",
                        borderRadius: "24px",
                        display: "flex",
                        alignItems: "flex-end",
                        zIndex: 99999999
                    },
                    buttonStyle: {
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#fff",
                        background: "#1880FF",
                        padding: "13px 31px",
                        borderRadius: "27px",
                        border: "1px solid #1880FF",
                        fontWeight: 600,
                        margin: "0 0 0 16px"
                    },
                    declineButtonStyle: {
                        fontSize: "16px",
                        lineHeight: "24px",
                        color: "#000",
                        background: "#ffffff",
                        padding: "13px 31px",
                        borderRadius: "27px",
                        border: "1px solid #000",
                        fontWeight: 600,
                        margin: "0"
                    },
                    expires: 365,
                    cookieName: "cookies_privacy",
                    contentStyle: {
                        margin: 0
                    },
                    onAccept: () => {
                        var e, t;
                        null === (t = window) || void 0 === t || null === (e = t.consentGrantedAdStorage) || void 0 === e || e.call(t)
                    },
                    onDecline: () => {
                        var e, t;
                        null === (t = window) || void 0 === t || null === (e = t.consentDeniedAdStorage) || void 0 === e || e.call(t)
                    },
                    children: [(0, o.jsx)("p", {
                        className: "text-[24px] leading-[32px] text-[#000] font-semibold pb-[12px]",
                        children: l[t].title
                    }), (0, o.jsxs)("div", {
                        className: "max-w-[680px] pr-[30px] text-[16px] leading-[22px] text-[#000]",
                        children: [l[t].info, (0, o.jsx)("a", {
                            href: "/privacy",
                            style: {
                                color: "#1880FF"
                            },
                            target: "_blank",
                            children: l[t].policy
                        }), "en" === t ? "." : "。"]
                    })]
                })
            }
        },
        56046: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return m
                }
            });
            var o = n(78174),
                a = {
                    src: "../../_next/static/media/icn_tookit_ad.8c675d86.svg",
                    height: 115,
                    width: 82,
                    blurWidth: 0,
                    blurHeight: 0
                },
                i = "../../_next/static/media/icn_toolkit_bubble.a925f184.png",
                l = {
                    src: "../../_next/static/media/icn_toolkit_call.aabfe7c0.svg",
                    height: 70,
                    width: 64,
                    blurWidth: 0,
                    blurHeight: 0
                },
                r = {
                    src: "@/_next/static/media/icn_toolkit_livechat.19f411ab.png",
                    height: 128,
                    width: 128,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXy+P8mnv/e7P8Zhv8ijP/L5v8knf8qnf8biP5MaXFTkvrm8v4xsf4vq/8sqP+Hu/43ifxhlfiIpPeeq/V1wP4biP82jP3Z6v8cgv0ijv+KpPZtmfh9GTmXAAAAHHRSTlP+3vv1ovf15ykA4fwpo9vq4vSjKenX5/vn2NjefJ51WQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwQcCwCAIBLBTUcC9uv//zybQXIwhUeQamN0hKGEDzREq+5TsGWHYAzZ+oOAv28aEPO7u411QoR7n0h9QPQKMK+wyRQAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                s = n(93186),
                c = n(45226),
                u = n(43192),
                d = n(40207),
                m = e => {
                    let {
                        lang: t
                    } = e, {
                        localeUrl: n
                    } = (0, s.EO)(t);
                    return (0, o.jsxs)("ul", {
                        className: "fixed z-[999] right-4 bottom-24 w-24 flex flex-col items-center gap-3",
                        children: [(0, o.jsxs)("li", {
                            className: "relative group",
                            children: [(0, o.jsx)(u.default, {
                                className: "w-16 cursor-pointer hover:opacity-90",
                                src: r,
                                alt: "",
                                onClick: () => (0, c.$)()
                            }), (0, o.jsx)("div", {
                                style: {
                                    backgroundImage: "url(".concat(i, ")")
                                },
                                className: "absolute right-20 top-1/2 -translate-y-1/2  w-[166px] h-[105px] bg-contain pt-2 px-2 pb-12 items-center justify-center flex",
                                children: (0, o.jsx)("span", {
                                    className: "font-semibold text-sm text-[#040F42]",
                                    children: "在线咨询\uD83D\uDC4B"
                                })
                            })]
                        })]
                    })
                }
        },
        96282: function(e, t, n) {
            "use strict";
            n.d(t, {
                default: function() {
                    return c
                }
            });
            var o = n(28688),
                a = n(69893);
            let i = [".com", ".org", ".net", ".int", ".edu", ".gov", ".mil", ".cn", ".hk", ".ca"],
                l = [{
                    url: ["baidu", "m.baidu", "wap.baidu"],
                    name: "百度"
                }, {
                    url: ["google", "m.google"],
                    name: "谷歌"
                }, {
                    url: ["sogou", "m.sogou", "wap.sougou"],
                    name: "搜狗"
                }, {
                    url: ["so", "m.so"],
                    name: "360"
                }, {
                    url: ["bing", "m.bing", "cn.bing", "wap.bing"],
                    name: "必应"
                }, {
                    url: ["dogedoge"],
                    name: "DogeDoge"
                }, {
                    url: ["m.sm", "so.m.sm"],
                    name: "神马"
                }, {
                    url: ["myquark"],
                    name: "夸克"
                }, {
                    url: ["search.yahoo", "m.yahoo", "m.search.yahoo"],
                    name: "雅虎"
                }, {
                    url: ["chinaso", "m.chinaso"],
                    name: "中国搜索"
                }, {
                    url: ["youdao", "m.youdao", "wap.youdao"],
                    name: "有道搜索"
                }, {
                    url: ["soso", "m.soso", "wap.soso"],
                    name: "搜搜"
                }, {
                    url: ["weixin.sogou"],
                    name: "微信搜索"
                }, {
                    url: ["m.toutiao"],
                    name: "头条搜索"
                }, {
                    url: ["naver", "m.search.naver"],
                    name: "Naver"
                }, {
                    url: ["yandex", "m.yandex", "wap.yandex"],
                    name: "Yandex"
                }, {
                    url: ["mijisou", "m.mijisou"],
                    name: "密迹搜索"
                }, {
                    url: ["duckduckgo"],
                    name: "DuckDuckGo"
                }, {
                    url: ["ecosia", "m.ecosia"],
                    name: "Ecosia"
                }, {
                    url: ["startpage"],
                    name: "Startpage"
                }, {
                    url: ["ask", "m.ask"],
                    name: "Ask"
                }, {
                    url: ["search.aol"],
                    name: "Aol"
                }, {
                    url: ["webcrawler", "m.webcrawler"],
                    name: "WebCrawler"
                }, {
                    url: ["qwant"],
                    name: "Qwant"
                }, {
                    url: ["gobaidugle"],
                    name: "联合搜索"
                }, {
                    url: ["search"],
                    name: "全球搜索"
                }, {
                    url: ["lookao"],
                    name: "Lookao"
                }];
            var r = () => ({
                    getVisitorInfo: (0, a.useCallback)(() => {
                        var e;
                        let t = sessionStorage.getItem("visitorInfo");
                        if (t) return JSON.parse(t || "{}");
                        let n = "",
                            a = (null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent) || "",
                            {
                                utm_source: r = "",
                                utm_medium: s = "",
                                utm_content: c = "",
                                utm_term: u = "",
                                utm_campaign: d = "",
                                rfc: m = ""
                            } = (0, o.D)(window.location.href),
                            {
                                referrer: p
                            } = document,
                            g = p.split("?")[0],
                            f = g.indexOf("http") > -1 ? g.split("/")[2] || "" : g,
                            h = f.indexOf("www.");
                        h > -1 && (f = f.substring(h + 4));
                        for (let e = 0; e < i.length; e += 1) {
                            let t = f.indexOf(i[e]);
                            if (t > -1) {
                                f = f.substring(0, t);
                                break
                            }
                        }
                        let x = l.find(e => {
                            let t = !1,
                                {
                                    url: n
                                } = e;
                            for (let e = 0; e < n.length && !(t = f === n[e]); e += 1);
                            return t
                        });
                        if (x) n = x.name;
                        else {
                            let e = p.match(/^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/);
                            n = e && e[1] || ""
                        }
                        let v = {
                            utm_browser: a,
                            utm_source: r,
                            utm_medium: s,
                            utm_content: c,
                            utm_term: u,
                            utm_campaign: d,
                            utm_search_engine: n,
                            rfc: m,
                            referral: window.encodeURIComponent(p)
                        };
                        return sessionStorage.setItem("visitorInfo", JSON.stringify(v)), v
                    }, [])
                }),
                s = n(26960);

            function c() {
                let {
                    getVisitorInfo: e
                } = r();
                return (0, a.useEffect)(() => {
                    (async () => {
                        if (!sessionStorage.getItem("visitor_id")) {
                            let t = (0, o.k1)(e()),
                                n = localStorage.getItem("visitor_id") || "";
                            fetch("/api/utm?".concat(t, "&id=").concat(n), {
                                method: "GET"
                            }).then(e => e.json()).then(e => {
                                let {
                                    uid: t
                                } = e;
                                t && (localStorage.setItem("visitor_id", "".concat(t)), sessionStorage.setItem("visitor_id", "".concat(t)), s.Z.set("visitor_id", "".concat(t), {
                                    path: "/",
                                    expires: 365,
                                    domain: ".meiqia.com"
                                }))
                            }).catch(() => {})
                        }
                    })()
                }, []), null
            }
        },
        93186: function(e, t, n) {
            "use strict";
            n.d(t, {
                EO: function() {
                    return s
                },
                Hi: function() {
                    return c
                },
                Um: function() {
                    return i
                }
            });
            let o = e => "en" === e,
                a = () => "/en" === location.pathname || location.pathname.startsWith("/en/"),
                i = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return a() ? e : t
                },
                l = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return o(e) ? t : n
                },
                r = (e, t, n) => o(e) ? t : n,
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh";
                    return {
                        enClass: (t, n) => l(e, t, n),
                        enEl: (t, n) => r(e, t, n),
                        localeUrl: t => {
                            let n = null == t ? void 0 : t.startsWith("/"),
                                a = o(e);
                            return n && a ? "/".concat(e).concat(t) : t
                        },
                        appendParams: t => "en" === e ? "".concat(t, "?lang=").concat(e) : t
                    }
                },
                c = e => ({
                    t: t => e[t] || t
                })
        }
    },
    function(e) {
        e.O(0, [6720, 6169, 7932, 9567, 325, 1744], function() {
            return e(e.s = 15604)
        }), _N_E = e.O()
    }
]);