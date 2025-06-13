(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        9665: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 42350, 23)), Promise.resolve().then(t.t.bind(t, 25764, 23)), Promise.resolve().then(t.t.bind(t, 44400, 23)), Promise.resolve().then(t.t.bind(t, 43660, 23)), Promise.resolve().then(t.bind(t, 24299))
        },
        24299: function(e, n, t) {
            "use strict";
            t.d(n, {
                default: function() {
                    return u
                }
            });
            var s = t(82177);
            "\n  (function(a, b, c, d, e, j, s) {\n    a[d] = a[d] || function() {\n      (a[d].a = a[d].a || []).push(arguments)\n    };\n    j = b.createElement(c),\n        s = b.getElementsByTagName(c)[0];\n    j.async = true;\n    j.charset = 'UTF-8';\n    j.src = 'https://static.meiqia.com/widget/loader.js';\n    s.parentNode.insertBefore(j, s);\n  })(window, document, 'script', '_MEIQIA');\n  _MEIQIA('entId', '".concat(s.vc.entId, "');\n  ").concat(s.vc.extraScript, "\n");
            let c = '\n    (function (a, b, c, d, j, s) {\n      a[d] = a[d] || function () {(a[d].q = a[d].q || []).push(arguments);};\n      (j = b.createElement(c)), (s = b.getElementsByTagName(c)[0]);\n      j.async = true;\n      j.charset = "UTF-8";\n      j.src = "'.concat(s.Z1.widgetUrl, '";\n      s.parentNode.insertBefore(j, s);\n    })(window, document, "script", "MyChat");\n    MyChat("init","').concat(s.Z1.entId, '");\n    ').concat(s.Z1.extraScript, "\n");
            var r = t(69893);

            function u() {
                let e = (0, r.useRef)(!1);
                return (0, r.useEffect)(() => {
                    if (e.current) return;
                    let n = document.createElement("script");
                    n.type = "text/javascript", n.text = c, document.body.appendChild(n), console.log("加载新的widget"), e.current = !0
                }, []), null
            }
        },
        82177: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z1: function() {
                    return r
                },
                q1: function() {
                    return s
                },
                vc: function() {
                    return c
                }
            });
            let s = ["/industry/enterprise-service", "/industry/education", "/industry/medical-beauty", "/industry/government-enterprise", "/industry/household-decoration", "/downloads", "/standard", "/about", "/agreement", "/privacy-clause", "/outbound"],
                c = {
                    entId: "b269235deb4454abab2f0e543d39725b",
                    extraScript: "\n        if (location.href.includes('privatization')) {\n            _MEIQIA('subSource', 'sub_source_40');\n        }\n        if (location.href.includes('industry')) {\n            _MEIQIA('subSource', 'sub_source_45');\n        }\n\n        if (location.href.includes('ai-bot')) {\n            _MEIQIA('subSource', 'sub_source_58');\n        }\n\n        if (location.href.includes('overseas-mixdesk')) {\n            _MEIQIA('subSource', 'sub_source_82');\n        }\n    ",
                    oldMeiqiaUrl: "https://www.meiqiacloud.com"
                },
                r = {
                    entId: "1b9bf35b81d6bc6de148033c7035499e",
                    widgetUrl: "https://link.mstatik.com/loader.js",
                    extraScript: "\n          // 新版营销机器人\n          if(location.href.includes('/ai-bot')) {\n            MyChat('subSource', 'sub_source_10');\n          } else if(location.href.includes('/livechat')) {    // 全渠道入口\n            MyChat('subSource', 'sub_source_11');\n          } else if(location.href.includes('/blog')) {   // 美洽博客\n            MyChat('subSource', 'sub_source_13');\n          } else if(location.href.includes('/help')) { // 帮助中心\n            MyChat('subSource', 'sub_source_2');\n          } else if(location.href.includes('/privatization')) { // 私有化部署\n            MyChat('subSource', 'sub_source_6');\n          } else if(location.href.includes('/en')) { // 英文客户咨询\n            MyChat('subSource', 'sub_source_8');\n          } else if(location.href.includes('overseas_mixdesk')) { // MIX 出海\n            MyChat('subSource', 'sub_source_14');\n          } else {\n            MyChat('subSource', 'sub_source_1');\n          }\n      "
                }
        },
        43660: function() {}
    },
    function(e) {
        e.O(0, [270, 2704, 9567, 325, 1744], function() {
            return e(e.s = 9665)
        }), _N_E = e.O()
    }
]);