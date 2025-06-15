(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7885], {
        34326: function(A, e, t) {
            Promise.resolve().then(t.t.bind(t, 30703, 23)), Promise.resolve().then(t.bind(t, 58621)), Promise.resolve().then(t.bind(t, 63342)), Promise.resolve().then(t.bind(t, 1835)), Promise.resolve().then(t.bind(t, 33650)), Promise.resolve().then(t.bind(t, 634)), Promise.resolve().then(t.bind(t, 2802)), Promise.resolve().then(t.bind(t, 20848)), Promise.resolve().then(t.bind(t, 24570)), Promise.resolve().then(t.bind(t, 53641)), Promise.resolve().then(t.bind(t, 2830)), Promise.resolve().then(t.bind(t, 81108)), Promise.resolve().then(t.bind(t, 15240)), Promise.resolve().then(t.bind(t, 92432)), Promise.resolve().then(t.bind(t, 12406)), Promise.resolve().then(t.bind(t, 5601)), Promise.resolve().then(t.bind(t, 17417)), Promise.resolve().then(t.bind(t, 85844)), Promise.resolve().then(t.bind(t, 8367)), Promise.resolve().then(t.bind(t, 25607)), Promise.resolve().then(t.bind(t, 89506)), Promise.resolve().then(t.bind(t, 1537)), Promise.resolve().then(t.bind(t, 49097)), Promise.resolve().then(t.bind(t, 88233)), Promise.resolve().then(t.bind(t, 25514)), Promise.resolve().then(t.bind(t, 78472)), Promise.resolve().then(t.bind(t, 35243)), Promise.resolve().then(t.bind(t, 17672)), Promise.resolve().then(t.bind(t, 89537)), Promise.resolve().then(t.bind(t, 25308)), Promise.resolve().then(t.bind(t, 9656)), Promise.resolve().then(t.bind(t, 64840)), Promise.resolve().then(t.bind(t, 63777)), Promise.resolve().then(t.bind(t, 71024)), Promise.resolve().then(t.bind(t, 58969)), Promise.resolve().then(t.bind(t, 31024)), Promise.resolve().then(t.bind(t, 79666)), Promise.resolve().then(t.bind(t, 83912)), Promise.resolve().then(t.bind(t, 66996)), Promise.resolve().then(t.bind(t, 44297)), Promise.resolve().then(t.bind(t, 84911)), Promise.resolve().then(t.bind(t, 24202)), Promise.resolve().then(t.bind(t, 13802)), Promise.resolve().then(t.bind(t, 16241)), Promise.resolve().then(t.bind(t, 4648)), Promise.resolve().then(t.bind(t, 18711)), Promise.resolve().then(t.bind(t, 87405)), Promise.resolve().then(t.bind(t, 45566)), Promise.resolve().then(t.bind(t, 63629)), Promise.resolve().then(t.bind(t, 66083)), Promise.resolve().then(t.bind(t, 68499)), Promise.resolve().then(t.bind(t, 27447)), Promise.resolve().then(t.bind(t, 92729)), Promise.resolve().then(t.bind(t, 19795)), Promise.resolve().then(t.bind(t, 33788)), Promise.resolve().then(t.bind(t, 33661)), Promise.resolve().then(t.bind(t, 71123))
        },
        63629: function(A, e, t) {
            "use strict";
            t.d(e, {
                default: function() {
                    return n
                }
            });
            var i = t(78174),
                a = t(93186),
                r = t(21893),
                l = t(80780);

            function n(A) {
                let {
                    value: e,
                    className: t = "",
                    duration: n = 2,
                    delay: s = 0,
                    unit: g,
                    numberWidth: o,
                    lang: h
                } = A, {
                    enClass: c
                } = (0, a.EO)(h), {
                    ref: d,
                    inView: u
                } = (0, l.YD)({
                    threshold: .3,
                    triggerOnce: !0
                });
                return (0, i.jsxs)("div", {
                    ref: d,
                    className: "flex items-end ".concat(t),
                    children: [(0, i.jsx)("div", {
                        className: c("!w-[100px] text-right mr-1"),
                        style: {
                            width: "".concat(o, "px")
                        },
                        children: (0, i.jsx)(r.ZP, {
                            end: e,
                            duration: n,
                            separator: "",
                            delay: s,
                            decimals: 0,
                            enableScrollSpy: !1,
                            startOnMount: !1,
                            ...u ? {
                                start: 0
                            } : {
                                start: void 0
                            }
                        })
                    }), (0, i.jsx)("div", {
                        className: "text-[#1880FF] text-[36px] leading-[36px] font-normal mb-4 ml-2",
                        children: g
                    })]
                })
            }
        },
        68499: function(A, e, t) {
            "use strict";
            t.d(e, {
                default: function() {
                    return E
                }
            });
            var i = t(78174),
                a = t(2968),
                r = t(62909),
                l = t(9373),
                n = t(45803),
                s = t(46644),
                g = t(69623),
                o = t(67468),
                h = t(4121),
                c = t(43192),
                d = t(69893),
                u = t(47356),
                b = t(59027),
                m = t(32364),
                B = t(32187),
                w = t(66083),
                U = t(93186),
                E = A => {
                    let {
                        dict: e
                    } = A, {
                        t
                    } = (0, U.Hi)(e), [E, f] = (0, d.useState)(0), R = {
                        robot: {
                            title: t("在线客服"),
                            icon: m.default
                        },
                        call: {
                            title: t("呼叫中心"),
                            icon: u.default
                        },
                        "ai-bot": {
                            title: t("大模型获客机器人"),
                            icon: b.default
                        },
                        "all-livechat": {
                            title: t("全渠道在线客服"),
                            icon: B.default
                        }
                    }, C = [{
                        image: s.Z,
                        products: ["all-livechat"],
                        description: t("我们使用美洽全渠道在线客服 8 年了，智能分配准确性高，能完全满足我们对渠道、地域的分配规则的要求，功能一直在迭代，强大好用，我们信赖美洽")
                    }, {
                        image: h.Z,
                        products: ["all-livechat", "ai-bot"],
                        description: t("使用美洽全渠道在线客服 2 年多了，在线流量可以自定义分配，效率很高，目前在用大模型获客机器人，效果不错，人机协同顺畅高效，能保证获线留资")
                    }, {
                        image: g.Z,
                        products: ["all-livechat", "ai-bot"],
                        logoClassName: "h-[37px]",
                        description: t("升级后的大模型机器人应答非常自然精准，效果超出了我们预期，启用1个月时间，获线率直线上升了近 40%，现在非人工客服接待已全面使用大模型获客机器人了，非常期待下个升级版本")
                    }, {
                        image: n.Z,
                        products: ["all-livechat", "robot"],
                        description: t("美洽客服机器人现在是我们团队中不可或缺的部分，对于常见问答客服机器人可以完全独立接待，一些复杂情况人机协作也十分顺畅，帮助我们解放了部分人力，效率也大幅提升")
                    }, {
                        image: l.Z,
                        products: ["all-livechat", "ai-bot"],
                        description: t("我们日常线上咨询量非常大，我们现在接入多个美洽大模型机器人，大大降低了人工接待的压力，美洽获客大模型机器人独立接待效果不错，人机协同流畅效率很高，连续几个月获线率一直很稳定")
                    }, {
                        image: o.Z,
                        products: ["all-livechat", "ai-bot", "call"],
                        description: t("我们线上渠道多，美洽工作台操作简单，所有渠道访客来源一目了然，常见咨询与售后问题量大，客服机器人完全能处理常规接待，关键环节和特殊问题转接人工也方便顺畅，使用美洽 3 年多，非常满意")
                    }], x = () => {
                        f(A => (A + 1) % C.length)
                    }, v = (0, d.useRef)();
                    (0, d.useEffect)(() => (v.current = setInterval(x, 5e3), () => clearInterval(v.current)), []);
                    let p = () => {
                            clearInterval(v.current)
                        },
                        M = () => {
                            v.current = setInterval(x, 5e3)
                        };
                    return (0, i.jsx)("div", {
                        className: "mt-[96px] overflow-hidden w-full h-[435px]  flex justify-center bg-cover",
                        style: {
                            backgroundImage: "url(".concat("../../../_next/static/media/bg_home_carousel.eff8693d.png", ")")
                        },
                        children: (0, i.jsxs)(w.default, {
                            className: "relative max-w-[1200px] w-full overflow-hidden",
                            children: [(0, i.jsx)("div", {
                                className: "relative flex w-full h-full ",
                                children: C.map((A, e) => {
                                    var a, r;
                                    let l = e === E,
                                        n = (E + 1) % C.length === e;
                                    return (0, i.jsxs)("div", {
                                        className: "absolute w-full h-full flex items-center transform duration-500 ease-in-out will-change-transform flex-col justify-center flex-shrink-0 ".concat(l ? "left-0 z-2 opacity-1" : "z-0 left-[-100%] opacity-0", " ").concat(n ? "left-[100%]" : ""),
                                        onMouseEnter: p,
                                        onMouseLeave: M,
                                        children: [(0, i.jsxs)("div", {
                                            className: "h-[56px] flex items-center",
                                            children: [(0, i.jsx)(c.default, {
                                                src: A.image,
                                                className: "object-contain text-right h-[48px] ".concat(null !== (r = A.logoClassName) && void 0 !== r ? r : ""),
                                                alt: ""
                                            }), (0, i.jsx)("div", {
                                                className: "w-[1px] bg-[#040F42] h-full mr-[35px]"
                                            }), (0, i.jsxs)("div", {
                                                className: "flex flex-col justify-between h-full",
                                                children: [(0, i.jsx)("p", {
                                                    className: "font-normal text-xs text-[#040F42] leading-[24px]",
                                                    children: t("使用产品")
                                                }), (0, i.jsx)("div", {
                                                    className: "flex gap-[24px]",
                                                    children: null === (a = A.products) || void 0 === a ? void 0 : a.map(A => {
                                                        let {
                                                            title: e,
                                                            icon: t
                                                        } = R[A];
                                                        return (0, i.jsxs)("span", {
                                                            className: "inline-flex font-normal text-base text-[#040F42]",
                                                            children: [(0, i.jsx)(c.default, {
                                                                src: t.src,
                                                                width: 20,
                                                                height: 20,
                                                                className: "mr-[4px]",
                                                                alt: e
                                                            }), e]
                                                        }, A)
                                                    })
                                                })]
                                            })]
                                        }), (0, i.jsx)("p", {
                                            className: "font-normal text-xl text-[#040F42] leading-[32px] mt-[32px] max-w-[800px] text-center",
                                            children: A.description
                                        })]
                                    }, e)
                                })
                            }), (0, i.jsx)("ol", {
                                className: "absolute bottom-[10%] left-1/2 translate-x--1/2 z-10 flex gap-2",
                                onMouseEnter: p,
                                onMouseLeave: M,
                                children: C.map((A, e) => (0, i.jsx)("li", {
                                    onClick: () => f(e),
                                    className: "w-2 h-2 rounded-full  cursor-pointer transition-colors hover:opacity-50 hover:bg-[#1880FF] ".concat(E === e ? "bg-[#1880FF]" : "bg-[#C9E3FF]")
                                }, e))
                            }), (0, i.jsx)("button", {
                                onClick: () => {
                                    f(A => (A - 1 + C.length) % C.length)
                                },
                                onMouseEnter: p,
                                onMouseLeave: M,
                                className: "size-[48px] absolute top-1/2 -translate-y-1/2 left-4 z-10 p-[10px] rounded-full transition-colors text-[#606787] border-[1px] border-solid border-[#CDCFD9] hover:border-[#606787]",
                                children: (0, i.jsx)(c.default, {
                                    src: a.Z,
                                    alt: ""
                                })
                            }), (0, i.jsx)("button", {
                                onClick: x,
                                onMouseEnter: p,
                                onMouseLeave: M,
                                className: "size-[48px] absolute top-1/2 -translate-y-1/2 right-4 z-10 p-[10px] rounded-full transition-colors text-[#606787] border-[1px] border-solid border-[#CDCFD9] hover:border-[#606787]",
                                children: (0, i.jsx)(c.default, {
                                    src: r.Z,
                                    alt: ""
                                })
                            })]
                        })
                    })
                }
        },
        92729: function(A, e, t) {
            "use strict";
            var i = t(78174),
                a = t(45226),
                r = t(33661);
            e.default = A => {
                let {
                    text: e,
                    ...t
                } = A;
                return (0, i.jsx)(r.default, {
                    type: "primary",
                    text: e,
                    onClick: () => {
                        (0, a.$)()
                    },
                    ...t
                })
            }
        },
        33788: function(A, e, t) {
            "use strict";
            var i = t(78174),
                a = t(93186),
                r = t(19795),
                l = t(81754);
            e.default = A => {
                let {
                    className: e = "",
                    dict: t
                } = A, {
                    t: n
                } = (0, a.Hi)(t);
                return (0, i.jsxs)("div", {
                    className: "flex items-center justify-center gap-x-3 z-[2] ".concat(e),
                    children: [(0, i.jsx)(r.default, {
                        text: n("预约演示")
                    }), (0, i.jsx)(l.Z, {
                        text: n("免费试用")
                    })]
                })
            }
        },
        63342: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/douyin.018691a2.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEXNz9nMztrT1eDT1N7j5Orw8fT0igIOAAAAA3RSTlP/b/L1OBRrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nDWLQRIAMAwBNyH//3In2rqwBoqoaK2rgxNAHifY13lFC2X87wcKiABNCHmCoQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        58621: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/douyin_active.d62c38fc.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUAAAAAAAABAAAkKSqpq6+PipANDA1yTlhMTk6Ba3NWWF3Atr7VGDzqAAAAAnRSTlNv8sdFKWAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicNYtbDgAgCMNGFXzd/74GjPtqllaiJtkDyyN6A0HbZxT48pRg9pFgECX//AIYkwCx2zrayQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        2968: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/icn_left_arrow.bd8e4c9a.png",
                height: 56,
                width: 56,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXFYYZdgZoVgZ4ZfZoZeZoZdZIZx4Qc/AAAAB3RSTlMAA2BLgnQwiexzNwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwti0EOADAIwgro/v/kRTcuNKEAOgIQLiQxvUnpJAnVxLah+00aWvnfLw5mAGeZ6WPrAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        62909: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/icn_right_arrow.0dd46bf8.png",
                height: 56,
                width: 56,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXFmZpFfZodgZodhaIdhZohgZYVSSVF9AAAAB3RSTlMAA3xWR2Qv3iHN+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC9JREFUeJwty8ENAEAIAsFFxP5LvpjzNwkLACNAElUsYYWTeNXdPZRv8sX5sfb+AA0sAGA1Qay+AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        1835: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_laigu.0ac933e2.png",
                height: 60,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEWhEyfyJD/IULKaTqrymQkRAADzJT7xJ0AFAQL0JT/vJT/5J0EAAAAAAAD/KkT1JkAAAAB7enWIAAAAEXRSTlMBVHV1LxCCJGqxdOFJPlnOTZ+p4e0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAnSURBVHicY2BnZIAANi52Hg4BFmYGfm4+Xg4OFiYGTk52BlZWBgYADCkAuTPwPl0AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        33650: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_mixdesk.e0097871.png",
                height: 48,
                width: 186,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEUAAAAAAAAAAQEA3l4AAAAA42EA2VwAAADG1sQnAAAACHRSTlM5TWGZRoPcXXJckrIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY2BjZmBiYWRhYWBmZWBiZGdiBAABuwAugQkxeQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        2802: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/videoaccount.ad9ee6a4.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXMztjT1eDMztrM0drk5evX2eHS093t7fBrbkHhAAAABHRSTlP+8m9vXAKrEQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwly8kNACAMxEAH9ui/YyTi13zM5XcZG+wBNakAufJCi1RqYOLEGc7u5wEaNwDAdgFgDQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        634: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/videoaccount_active.453e556f.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX5nDn9oTr6nDv6nj77mjT8sF/7pk38y5f93br90KL8xIlJcrDVAAAABHRSTlP98m9vTrcE/wAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJwly7EBACAMwzAXkqbw/8EMaBcbgdiULdkFme4JKD7HEbpOfAU9yTSU3G0V6/f1ACbZARPOE9uWAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        24570: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/weixin.518eb5c3.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXMztrU1uDNz9nS1N7v7/P9/f3g4efFPTGgAAAAAnRSTlNv8sdFKWAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicNYtBCgBBDMJstP3/kwcX1lOQROKbNMbgEWSvF7fJFZzsmrpOoHJ59OcPF3AAo5VVgjgAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        20848: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/weixin_active.cca6b8c6.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEVRxDJQwzJTyjNQwzFJwCn2/PRcxz/H7L296bFzz1rW8c6D1W2h3pGT2n8iwl4bAAAAA3RSTlP9b/L2vMAFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nBWLwQ3AMAyEcO5sJ2m7/7qVX0gICCQgWFJJLFQ7Xwv85O0PjenMY8Cnd02FPQjmJn4huQDlT3FY+wAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        2830: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/xiaohongshu.d43d8f5e.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEXO0NrMztrU1t/q6+/i4+lLstQdAAAAAnRSTlP9bwqMLgEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicTYtBCgAwDMJs9P9vHhMKzUFzUI3KSPxuLEliIxxXBATOaO8PCeAASTOZPDwAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        53641: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/xiaohongshu_active.2d068018.png",
                height: 48,
                width: 48,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXzJ0H5JUHzJ0D1OlLzJ0L2JkHzITz4Iz/5j536nqr1R1z7sLn2WW33aHv0Nk74hZNC6ikgAAAABnRSTlP+8m/+b/duadWdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOElEQVR4nC2LWw7AIAyAqC61L7v739bMjE8CDC4DWaC6BEXpz7Vtez0nlebmWRBdO2IiS/XG//4cLBYBUongzJ8AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        87405: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/QRcode_video.e6dac331.png",
                height: 320,
                width: 322,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEVMaXHG+v/f3+Fyc3O5urrU6v/h//+qra/T2uHX3eN9fn/////m6/Gen5/h5uipqquRpLKNi4qSkpGv3gyAAAAAEXRSTlMAG038ywYV+mhz/ANd8GbE+UZHo2EAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicHcu3EQAgDMBAAQaT0/7DcljVNwJojZ8XWeKBcmq407D15I9bgyGrDu1ATM6laJ/1ADSOAVaSnx4wAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        45566: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/QRcode_weixin.748b09ef.png",
                height: 320,
                width: 322,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEV/f39MaXHN+v/j//+qq6zV3eSnqKmZmZnLztPR2ODX19vS1NaSrL2ru8WNi4rbTX+uAAAADnRSTlP9ABgEyWX6+mZzTXL5+a3zfHQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicLcZBEsAgCATBHUAwRv3/c61Y6VMLcAfEiIgYiLek6ohHc+12I930zMovbmbmiN8BI8IA6/qDtn0AAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        81108: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/bg_footer.72f17ba3.webp",
                height: 480,
                width: 1440,
                blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAMAAkA4JYgCdAEO/gPIAAD+/b7o1iJDjaA9PLCWpAAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        15240: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/bg_home_demo.b5f9a317.png",
                height: 1164,
                width: 2336,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAABlBMVEXa6vXF5/WOkoh+AAAAAnRSTlNNTTspwV0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAVSURBVHicY2AAA0ZGGI3GYGRkZAQAAMQADeZCwjsAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        92432: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/bg_mix_brand_wall.ab0d66cd.png",
                height: 1226,
                width: 2200,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVVVFocSoBxX1BvbYsZZ4SiqrqVPzw5fbvQ7zswAAAACHRSTlMUGR8kDy4qNSj5/lAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAkSURBVHicHcWxEQAwCAOxtw1k/41z0EjEjtIGAaqjNuKZfuIDBH4AR+sszxYAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        12406: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/footer_faker.83ecb52b.png",
                height: 212,
                width: 378,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAASFBMVEUJJYUygNQUXM4lMJksSZ5QoeKYyeoQLY0QLKcNN50qO5QGQsIsULZEhtVbrecqifALTMGRosiQocsqZb+FqNtGfs6YueQlgu/RYb8NAAAACXRSTlP9////////+/szur4EAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBhwEAIAgDsIqAe6//PzWBC/QaBYDHVr0zAryknmyBboyU5D8WPQEwPgGf3gAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        8367: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_1.7025cc9b.png",
                height: 136,
                width: 136,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX4+vxMaXH09PT7/P3////6+/38/P3S6v/u8Pz///+Jwv9OrP+53v92sf690Pza2TzbAAAACXRSTlP2AC+wLLPr+/ko3xVPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nEXLuRHAIAwAwQMB8vH1X64jj/NdSuvQW6EO1VEJyZ0GuNeZAs51rhDmvI/x46+/NeYBhJD3dsAAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        25607: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_2.a0b2c3ea.png",
                height: 136,
                width: 136,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX6+vr5+vz///9MaXH8/P38/P37/P3////B3P6g0v8ynP9yrP1irv+J1q6YAAAAB3RSTlMt9fkA67Cz6G97TQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJw9y8kRACAMw0CbSwnQf70MD3ivpKphD1WpATSpUzILXSbnTCwTewW+FHHpx28/LBsBOC0uXFIAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        89506: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_3.04c88a44.png",
                height: 136,
                width: 136,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEX////7+/36+vr8/P32+fxMaXHk8f8oi/6Vvv0zo/8wlP/B5f/O4v623v8kX10DAAAABnRSTlP+7y2y+QC6RiifAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nD3LuREAIAzEQJ1tfui/XcYBxCtRzCPcCiYAGQ7rgCPqaBshYraKknpP+vHbLxrNALq8dC3OAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        1537: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_4.03250954.png",
                height: 136,
                width: 136,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEX6+vrH4/+v1v/6/P1MaXH8/P39///5+vz6+/3m8f76+v3///+u1/+Kx/9ps/+Tvf3I2PxdyfOCAAAAC3RSTlMt+fmzAOv+9bL8sN3os1IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicHctBFoAwCMTQUWkphKr3P60Pd1n8yLTcl0wazMmQkog6STm1d+Ed9xO4kqPeYDWGxv9+yT5FMAHusYQoZQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        49097: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_1.5196f1d7.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXHd8P3b8f9Cqv/c9f/l+//X6P/Q7//Z///f8/7k8vxZvP902/5ny//A5f1s2f9exP956/9p0/9w1P9axf934v+L1P/KSDFKAAAAE3RSTlMAvU5n7P4tFQnXaKBl3ew2QZtBPyZ6FgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJxjYGAQEmAAAx5hEWYwQ1BUmBvM4OcV4+MCs9hZWFnYQAwOTlZGsAgHOxMnO0QjAwcDAwA2UgFBGrWLwQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        88233: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_2.b57a76e4.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXH/3Ob/1+H92uT94uT/6dP84eT/3ej/4+f/5+j/tYL/j3/+vML///X/2MH9rbX/7ub95eX/n6r/5uj/9PH/oZD/rqii+QpjAAAAE3RSTlMANDTl8BJUBQ33i078T9TtvuIYg3OtTwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJw9yksOgDAIANFRoYC/qlTvf1STmvhWsxj46XJZj/muZ8HQ/VlbFNhaZGaM6BEiMg1g7u7f3r07HAGYAyogkgAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        25514: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_3.a85ae51c.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXHo3fTr8Pz07/rq9vz09P3t9f3x8/vy+f2ZoOngtPGyzvP86/nz4/n8+//k2P8ENvygAAAADnRSTlMABf2XYJsx130jhold/fj/T0kAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicNYxJEsAgDMPkJBDokv7/t52WwScdJIPEnvoI4GppNQCv26yDOB7L35tnNVbhsUDfwwsdKQDF7phkFgAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        78472: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_4.f39ccbeb.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXHy7/vy8v2L5P7v8PqJ1fv1j+L09v3w7vr18v7X6/v72PnV8/3+ku351PL/yv/K8/840A+eAAAAD3RSTlMAYLKkdDw8DfP95vHxpOYqIZUgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAN0lEQVR4nCWLUQ6AIAzFOhzuTUW4/2nN5KtNkwIREQDnK10dGDNzHVXuzKcKJlkRWtt0yX/Z+wcskQEP4B9IBwAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        35243: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_5.07a3f0e0.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHR8+fo+PLh9fXt/vuO4drD7d35///b8vXn9fXl///d8fhXwso+t9Lk9vSW29C65et91sfv+vTe+/vH6+ls0tlrA3+PAAAAE3RSTlMAVor3V/38/qEaCiZ6OXT4rKJ0exlyBAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJxFyzkSwCAMwEABBmNycOb/X80MRaJ6BV82vL8NEFVVAVxKYTqgx7rCAZxPnHnrq+Xyv7wqawE2q5eoOQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        17672: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_home_why_card_6.6b617562.png",
                height: 128,
                width: 128,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEVMaXGc2vzd8/1sy/7m8v9Vvv/i9P910v9VyP/d8/8zpf+Ay/9Ls/9o2P/r/f+i7P/i9f/d/f9kzP+U6f/H8P85DNBdAAAAEXRSTlMA+ejxFYaG/RVpacboacbGxiKJ//YAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicTYs7FsAgDIDQRKP9adT7n7XPqWVhAfjQnHW7RvdYgcdDWB1o08RO4BYb17GjklL5vS8pKwEp+85O/AAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        89537: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/icn_tick_black.860119b3.png",
                height: 25,
                width: 29,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/eFplAAAADHRSTlMABYU26bkXxvvQUF8ftGE/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nB2KUQ4AIAiFeGpZev/7NvsCNgAQttCwjv/201BihyHCyDWjx70aoXMPHxCYAJNv34SIAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 7
            }
        },
        25308: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_call_1.399d553b.png",
                height: 880,
                width: 1516,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEXN2uqJlp7r8fvk7vji7vn9/ft4dHXKzMmgqLp7cnNWTou84P+/xdLp///Bws2ascuTh7ClpKWhqtmhprKutcba8v9eUkrW4ujDyeMCJ94JAAAAFXRSTlNo/mhoFjv8afxn+/n4O/78/v78aGjU1eloAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBBwIAEAwEsDOr9ir+/1IJDJEBtMWLXWoQhxlDyr45XDVEHV+AtTUx2w8hvwGVOABg/AAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        9656: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_call_2.9641286f.png",
                height: 880,
                width: 1516,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEWU1+Dq7eVzxdBuy9zV6+Xa6ufa8fHE4uGv5uiv3uG+5eXq7uPc7O2Q2eJ50+Xj6+TK8PH2/PTj+PSp7fTif/SDAAAAEHRSTlNoZxY7+Gj+afpo+fz+/Dtn+f8pkAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJwVykcOACAIBMBVlGILyP//apzzoHQRAyqC13XPg9naUN2EuOzqSShd7J8HHygBW92PkKEAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        64840: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_livechat_1.c7f3bec6.png",
                height: 490,
                width: 800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEXp7/bz9Pbn6vLh4eHc3ejo6vPp6+nz9Pb4+P/////1+v7wAARcAAAACnRSTlP8X3ElYPpjciX+7yTRZAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJxjYGZjBAEOBiZOMGBnYOJiZWBg5WJiYOdi4AIzQGpYWFiYAREkAL4k+PgXAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        63777: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_livechat_2.3f8474d3.png",
                height: 490,
                width: 800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEXG5PKw2fi/6vri3d7f5vHr+P/j6vHV8//r7/e36NTEytzO3ea857zZ5u647PTK7OuV1e+s3f/a/f/7//+W2qjH9+Gm4vna6/VvJeYlAAAAEnRSTlNgJXH4Y/4l/XJf+/j8Xl78Y3Kki0NqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAXBiQGAIAwAseNtKypQVPbf1IQwbjPLlfn19zmXEneTIxUluoiXpQSAK9cfJnABfGGQntMAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        71024: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_robot_1.bd479536.png",
                height: 490,
                width: 800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEX29/f29PX29/nu7vH4+Pjj4+P+/v789EuAAAAAB3RSTlNgcvz7JSX+yOutegAAAAlwSFlzAAALEwAACxMBAJqcGAAAACZJREFUeJxjYGEAAxYGRjY2JjY2NkYGRiYmZmYmEIMNDBgZWKFqAAmDAG4VUIsOAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        58969: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/imgcard_home_robot_2.8c27113d.png",
                height: 490,
                width: 800,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAMFBMVEUhjvk7q/gxtfoUf/soqf8wrPgXf/hOqPtfsfRMo/pov/qK0f4hlP+Dw/g4v/9Do/+6I35pAAAADnRSTlNgYHJy/iUl+/v4+Pz//mbJ0n0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicHcq3EQAgDASwfweibfbfloNOhdAAkHToycxdAo3Zx/qIMCvBOyD9AhYQAPBUsp00AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        9373: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_changjietong.79225574.png",
                height: 98,
                width: 266,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEXuqbDqf4n41tn////e4uL44uXrnqXl6unrsLbyub729/fX3NvncHwV6yOdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVR4nGNgZGRi4GFiY2Rg4GTi4GBlY2BgZuZiZ2HhZgcABQQAcT7FR0kAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        45803: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_dongao.160dc041.png",
                height: 98,
                width: 334,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEUjFxUWEBIWDguMVB7oqGv/7NeEYkTyxpnzt34nGhU7C/jIAAAACnRSTlM9Wi1ktOY04+Vh/8XxDQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYOFgZuRkYGBkYGdlY2JgYGIAAAIdADFV/r0aAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        31024: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_ailibaba.e38c5a26.webp",
                height: 78,
                width: 216,
                blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAMi8rLA9kWggjIxgXQh5FEXN2anFhNjQ6AFZQOCAgAAAAUAEAnQEqCAADAAJAOCUAToAuoAD+75rGBJWrNrLAAAA=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        79666: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_aodi.2e3a4350.webp",
                height: 64,
                width: 182,
                blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWp5bp1qeWlgHd096T3gKYEmgUKtRoEtWAFZQOCAgAAAAUAEAnQEqCAADAAJAOCUAToAoAAD+75rGBJWrNrXiAAA=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        83912: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_baojie.3bbd7f51.webp",
                height: 72,
                width: 148,
                blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAcJ+SQqDYDM0sJGpqqN+YoF4dJChT90JVhdCT3SPaAAAVlA4ICYAAABQAQCdASoIAAQAAkA4JQBOgCgAAP7vvl/RhJ+Uu2BJWrNrXiAAAA==",
                blurWidth: 8,
                blurHeight: 4
            }
        },
        66996: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_huanqiu.7a0d45ae.webp",
                height: 72,
                width: 206,
                blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAy3ZibQorZmdWZkxWHyVlS11QX2Z1U2hiAFZQOCAkAAAAcAEAnQEqCAADAAJAOCWMAnQBQAAA/ujvFNh04oMttoaN1AAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        44297: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_jindie.1c2fcbf9.webp",
                height: 78,
                width: 132,
                blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAK1MAAAAAAAgNi4mDhAjC3kRUVZvd3BWAJk4AAUAAAAAACg0AAAAAABWUDggJAAAAHABAJ0BKggABQACQDgllAJ0AUAAAP7vdrpY1iVHh+x4IYAAAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        84911: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_qiaowai.34ae5359.webp",
                height: 40,
                width: 230,
                blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAW2loUl1FPS8AVlA4ICIAAABwAQCdASoIAAEAAkA4JYwCdAF1AAD+71uOqy1EOQPHAAAA",
                blurWidth: 8,
                blurHeight: 1
            }
        },
        24202: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_xindongfang.88c785dd.webp",
                height: 74,
                width: 218,
                blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAHyZdbks0SDRfbrKAqmF+bh0mLYBsTmdIAFZQOCAgAAAAUAEAnQEqCAADAAJAOCUAToAoAAD+73bWBJWrNrosgAA=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        13802: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_hero_zailairen.51b05f33.webp",
                height: 40,
                width: 244,
                blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAA2ndwbjU5MyUAVlA4ICAAAABQAQCdASoIAAEAAkA4JQBOgCgAAP7vdtYElas2ssAAAA==",
                blurWidth: 8,
                blurHeight: 1
            }
        },
        46644: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_huanqiu.9495850d.webp",
                height: 96,
                width: 274,
                blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAv2xWYQgnWVpOVkNLGR9YQ1JHU1poSVtVAFZQOCAyAAAA8AEAnQEqCAADAAJAOCWoAnS6AAMGxiKAAP3hW4He0qO/8/M/3T/ow/vpfigFLPhgAAA=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        69623: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_meishijiaoyu.71934dd9.png",
                height: 74,
                width: 436,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEUAP5tYNmcuOHsAQaIAQJj2U/gpAAAABXRSTlNqvH5CVy9iNPUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAARSURBVHicY2BgZGJmYGFgAAAANwALvfJuMQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 1
            }
        },
        67468: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_ritao.96ff4f86.png",
                height: 98,
                width: 374,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAIVBMVEX1Ym7Pdo3vZnbQeIn/WGOIjbj7eEsvsvP6jxuQjbb2ZnMLtNaXAAAAC3RSTlNZNG8mF3BEcTdYPgq87asAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAaSURBVHicY+Bg4GRk4WJmZmBjYmdlYGJgBAACogA+98tNwgAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        16241: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/logo_shunfeng.70baf507.webp",
                height: 80,
                width: 216,
                blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAUmpMPlFXUUWDfGllXkVcZllsREMtJDdCAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77nMAA",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        4121: function(A, e) {
            "use strict";
            e.Z = {
                src: "../../../_next/static/media/logo_xindongfang.216be487.png",
                height: 98,
                width: 414,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAHlBMVEUCAgINs7kABARmrXQHrrpfmGJAr5AGtMMGssAAAACbD6jKAAAACnRSTlMpmh5sVUN2eHIaDbliIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGTkYGfhZGJiYGFjZmZlYGAAAAJWADi/CPj/AAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        4648: function(A, e, t) {
            "use strict";
            t.r(e), e.default = {
                src: "../../../_next/static/media/nav_header_bg.362c8cb3.webp",
                height: 930,
                width: 1441,
                blurDataURL: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAsAAAABD9D/iAgUMKL/AQBWUDggKgAAANABAJ0BKggABQADADgliAJ0AQ7+A8gAAP79vCZYj9jv8pwAvJcoXuAAAA==",
                blurWidth: 8,
                blurHeight: 5
            }
        }
    },
    function(A) {
        A.O(0, [4746, 6720, 6884, 6615, 9567, 325, 1744], function() {
            return A(A.s = 34326)
        }), _N_E = A.O()
    }
]);