(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [772],
    {
        9415: function (e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/index-5",
                function () {
                    return a(9551);
                },
            ]);
        },
        8864: function (e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", { value: !0 }),
                (function (e, s) {
                    for (var a in s) Object.defineProperty(e, a, { enumerable: !0, get: s[a] });
                })(s, {
                    default: function () {
                        return n;
                    },
                    noSSR: function () {
                        return r;
                    },
                });
            let l = a(8754);
            a(5893), a(7294);
            let i = l._(a(6016));
            function c(e) {
                return { default: (null == e ? void 0 : e.default) || e };
            }
            function r(e, s) {
                return delete s.webpack, delete s.modules, e(s);
            }
            function n(e, s) {
                let a = i.default,
                    l = {
                        loading: (e) => {
                            let { error: s, isLoading: a, pastDelay: l } = e;
                            return null;
                        },
                    };
                e instanceof Promise ? (l.loader = () => e) : "function" == typeof e ? (l.loader = e) : "object" == typeof e && (l = { ...l, ...e });
                let n = (l = { ...l, ...s }).loader;
                return (l.loadableGenerated && ((l = { ...l, ...l.loadableGenerated }), delete l.loadableGenerated), "boolean" != typeof l.ssr || l.ssr)
                    ? a({
                          ...l,
                          loader: () => (null != n ? n().then(c) : Promise.resolve(c(() => null))),
                      })
                    : (delete l.webpack, delete l.modules, r(a, l));
            }
            ("function" == typeof s.default || ("object" == typeof s.default && null !== s.default)) && void 0 === s.default.__esModule && (Object.defineProperty(s.default, "__esModule", { value: !0 }), Object.assign(s.default, s), (e.exports = s.default));
        },
        572: function (e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", { value: !0 }),
                Object.defineProperty(s, "LoadableContext", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                });
            let l = a(8754)._(a(7294)).default.createContext(null);
        },
        6016: function (e, s, a) {
            "use strict";
            /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(s, "__esModule", { value: !0 }),
                Object.defineProperty(s, "default", {
                    enumerable: !0,
                    get: function () {
                        return x;
                    },
                });
            let l = a(8754)._(a(7294)),
                i = a(572),
                c = [],
                r = [],
                n = !1;
            function d(e) {
                let s = e(),
                    a = { loading: !0, loaded: null, error: null };
                return (
                    (a.promise = s
                        .then((e) => ((a.loading = !1), (a.loaded = e), e))
                        .catch((e) => {
                            throw ((a.loading = !1), (a.error = e), e);
                        })),
                    a
                );
            }
            class t {
                promise() {
                    return this._res.promise;
                }
                retry() {
                    this._clearTimeouts(), (this._res = this._loadFn(this._opts.loader)), (this._state = { pastDelay: !1, timedOut: !1 });
                    let { _res: e, _opts: s } = this;
                    e.loading &&
                        ("number" == typeof s.delay &&
                            (0 === s.delay
                                ? (this._state.pastDelay = !0)
                                : (this._delay = setTimeout(() => {
                                      this._update({ pastDelay: !0 });
                                  }, s.delay))),
                        "number" == typeof s.timeout &&
                            (this._timeout = setTimeout(() => {
                                this._update({ timedOut: !0 });
                            }, s.timeout))),
                        this._res.promise
                            .then(() => {
                                this._update({}), this._clearTimeouts();
                            })
                            .catch((e) => {
                                this._update({}), this._clearTimeouts();
                            }),
                        this._update({});
                }
                _update(e) {
                    (this._state = {
                        ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e,
                    }),
                        this._callbacks.forEach((e) => e());
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout);
                }
                getCurrentValue() {
                    return this._state;
                }
                subscribe(e) {
                    return (
                        this._callbacks.add(e),
                        () => {
                            this._callbacks.delete(e);
                        }
                    );
                }
                constructor(e, s) {
                    (this._loadFn = e), (this._opts = s), (this._callbacks = new Set()), (this._delay = null), (this._timeout = null), this.retry();
                }
            }
            function o(e) {
                return (function (e, s) {
                    let a = Object.assign(
                            {
                                loader: null,
                                loading: null,
                                delay: 200,
                                timeout: null,
                                webpack: null,
                                modules: null,
                            },
                            s
                        ),
                        c = null;
                    function d() {
                        if (!c) {
                            let s = new t(e, a);
                            c = {
                                getCurrentValue: s.getCurrentValue.bind(s),
                                subscribe: s.subscribe.bind(s),
                                retry: s.retry.bind(s),
                                promise: s.promise.bind(s),
                            };
                        }
                        return c.promise();
                    }
                    if (!n) {
                        let e = a.webpack ? a.webpack() : a.modules;
                        e &&
                            r.push((s) => {
                                for (let a of e) if (s.includes(a)) return d();
                            });
                    }
                    function o(e, s) {
                        !(function () {
                            d();
                            let e = l.default.useContext(i.LoadableContext);
                            e &&
                                Array.isArray(a.modules) &&
                                a.modules.forEach((s) => {
                                    e(s);
                                });
                        })();
                        let r = l.default.useSyncExternalStore(c.subscribe, c.getCurrentValue, c.getCurrentValue);
                        return (
                            l.default.useImperativeHandle(s, () => ({ retry: c.retry }), []),
                            l.default.useMemo(() => {
                                var s;
                                return r.loading || r.error
                                    ? l.default.createElement(a.loading, {
                                          isLoading: r.loading,
                                          pastDelay: r.pastDelay,
                                          timedOut: r.timedOut,
                                          error: r.error,
                                          retry: c.retry,
                                      })
                                    : r.loaded
                                    ? l.default.createElement((s = r.loaded) && s.default ? s.default : s, e)
                                    : null;
                            }, [e, r])
                        );
                    }
                    return (o.preload = () => d()), (o.displayName = "LoadableComponent"), l.default.forwardRef(o);
                })(d, e);
            }
            function m(e, s) {
                let a = [];
                for (; e.length; ) {
                    let l = e.pop();
                    a.push(l(s));
                }
                return Promise.all(a).then(() => {
                    if (e.length) return m(e, s);
                });
            }
            (o.preloadAll = () =>
                new Promise((e, s) => {
                    m(c).then(e, s);
                })),
                (o.preloadReady = (e) => (
                    void 0 === e && (e = []),
                    new Promise((s) => {
                        let a = () => ((n = !0), s());
                        m(r, e).then(a, a);
                    })
                )),
                (window.__NEXT_PRELOADREADY = o.preloadReady);
            let x = o;
        },
        9551: function (e, s, a) {
            "use strict";
            a.r(s),
                a.d(s, {
                    default: function () {
                        return _;
                    },
                });
            var l = a(5893),
                i = a(6523),
                c = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("section", {
                            className: "banner-section-five",
                            children: [
                                (0, l.jsx)("div", { className: "bg bg-pattern-9" }),
                                (0, l.jsx)("div", { className: "icon-flowers-13 bounce-y" }),
                                (0, l.jsx)("div", { className: "icon-flowers-14 bounce-y" }),
                                (0, l.jsx)("div", {
                                    className: "auto-container",
                                    children: (0, l.jsx)("div", {
                                        className: "row",
                                        children: (0, l.jsxs)("div", {
                                            className: "content-box",
                                            children: [
                                                (0, l.jsx)("div", { className: "icon-divider-5" }),
                                                (0, l.jsxs)("h2", {
                                                    className: "title wow fadeInUp",
                                                    children: ["Wedding & Event Planner ", (0, l.jsx)("br", {}), " For Colorful Couples"],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "text wow fadeInUp",
                                                    "data-wow-delay": "300ms",
                                                    children: "No matter your dreams - we can assist you in planning your",
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "icon-flower-26 zoom-one",
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "icon-flower-27 zoom-two",
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    }),
                r = a(1664),
                n = a.n(r),
                d = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("section", {
                            className: "event-section-three pt-0",
                            children: (0, l.jsx)("div", {
                                className: "auto-container",
                                children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        (0, l.jsx)("div", {
                                            className: "content-column col-xl-6 col-lg-6 wow fadeInLeft",
                                            "data-wow-delay": "600ms",
                                            children: (0, l.jsxs)("div", {
                                                className: "inner-column",
                                                children: [
                                                    (0, l.jsxs)("div", {
                                                        className: "sec-title style-five",
                                                        children: [
                                                            (0, l.jsx)("span", {
                                                                className: "sub-title",
                                                                children: "Welcome to Lav Weds Sheetal",
                                                            }),
                                                            (0, l.jsxs)("h2", {
                                                                children: ["Plan the Beautiful ", (0, l.jsx)("br", {}), " Wedding Event"],
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "text",
                                                                children: ["From the vibrant flowers and trees to the gently flowing streams, ", (0, l.jsx)("br", {}), " this park provides the perfect backdrop for this joyous occasion. ", (0, l.jsx)("br", {}), " As we stand here today, surrounded by the beauty of this park, ", (0, l.jsx)("br", {}), " we are reminded of the enduring power of love."],
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "info-block",
                                                        children: (0, l.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, l.jsx)("h4", {
                                                                    className: "title",
                                                                    children: "Experience:",
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: "text",
                                                                    children: "17 Years experience of wedding shopping and planning.",
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "info-block",
                                                        children: (0, l.jsxs)("div", {
                                                            className: "inner",
                                                            children: [
                                                                (0, l.jsx)("h4", {
                                                                    className: "title",
                                                                    children: "Event Plans:",
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: "text",
                                                                    children: ["Event planning involves the coordination of every detail of events ", (0, l.jsx)("br", {}), " such as meetings, conventions, trade shows, ceremony, retreats, ", (0, l.jsx)("br", {}), " or parties."],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "btn-box",
                                                        children: (0, l.jsx)(n(), {
                                                            href: "page-contact",
                                                            className: "theme-btn btn-style-one orange-bg",
                                                            children: (0, l.jsx)("span", {
                                                                className: "btn-title",
                                                                children: "Book an Appointment",
                                                            }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                        (0, l.jsx)("div", {
                                            className: "image-column col-xl-6 col-lg-6",
                                            children: (0, l.jsxs)("div", {
                                                className: "inner-column wow fadeInRight",
                                                children: [
                                                    (0, l.jsx)("figure", {
                                                        className: "image-1 overlay-anim wow fadeInUp",
                                                        children: (0, l.jsx)("img", {
                                                            src: "images/resource/event3-1.jpg",
                                                            alt: "Image",
                                                        }),
                                                    }),
                                                    (0, l.jsx)("figure", {
                                                        className: "image-2 overlay-anim wow fadeInLeft",
                                                        children: (0, l.jsx)("img", {
                                                            src: "images/resource/event3-2.jpg",
                                                            alt: "Image",
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "icon-leaves-30 bounce-y",
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "icon-leaves-31 bounce-y",
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: "icon-leaves-32 bounce-x",
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    }),
                t = a(5152);
            let o = a.n(t)()(() => Promise.all([a.e(798), a.e(12)]).then(a.bind(a, 12)), { loadableGenerated: { webpack: () => [12] }, ssr: !1 });
            var m = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("section", {
                            className: "fun-fact-section pt-0",
                            children: (0, l.jsx)("div", {
                                className: "auto-container",
                                children: (0, l.jsx)("div", {
                                    className: "fact-counter",
                                    children: (0, l.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",
                                                children: (0, l.jsx)("div", {
                                                    className: "inner",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-flower-30",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "count-box",
                                                                children: (0, l.jsx)(o, {
                                                                    count: 148,
                                                                    time: 3,
                                                                }),
                                                            }),
                                                            (0, l.jsxs)("h6", {
                                                                className: "counter-title",
                                                                children: ["Best wedding suppliers ", (0, l.jsx)("br", {}), " with quality products"],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",
                                                "data-wow-delay": "300ms",
                                                children: (0, l.jsx)("div", {
                                                    className: "inner",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-flower-30",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "count-box",
                                                                children: (0, l.jsx)(o, {
                                                                    count: 365,
                                                                    time: 3,
                                                                }),
                                                            }),
                                                            (0, l.jsxs)("h6", {
                                                                className: "counter-title",
                                                                children: ["We cover every day of the ", (0, l.jsx)("br", {}), " year for weddings"],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",
                                                "data-wow-delay": "600ms",
                                                children: (0, l.jsx)("div", {
                                                    className: "inner",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-flower-30",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "count-box",
                                                                children: (0, l.jsx)(o, {
                                                                    count: 271,
                                                                    time: 3,
                                                                }),
                                                            }),
                                                            (0, l.jsxs)("h6", {
                                                                className: "counter-title",
                                                                children: ["Types of ready-made and ", (0, l.jsx)("br", {}), " packaged dress"],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "counter-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp",
                                                "data-wow-delay": "900ms",
                                                children: (0, l.jsx)("div", {
                                                    className: "inner",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "content",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-flower-30",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "count-box",
                                                                children: (0, l.jsx)(o, {
                                                                    count: 184,
                                                                    time: 3,
                                                                }),
                                                            }),
                                                            (0, l.jsxs)("h6", {
                                                                className: "counter-title",
                                                                children: ["External collaborators will ", (0, l.jsx)("br", {}), " have a cool wedding"],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                        }),
                    }),
                x = a(2261),
                h = a(9304);
            let j = {
                modules: [h.pt, h.tl, h.W_],
                slidesPerView: 3,
                spaceBetween: 30,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
                breakpoints: {
                    320: { slidesPerView: 1 },
                    575: { slidesPerView: 1 },
                    767: { slidesPerView: 2 },
                    991: { slidesPerView: 2 },
                    1199: { slidesPerView: 3 },
                    1350: { slidesPerView: 3 },
                },
            };
            var g = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("section", {
                            className: "gallery-section-eight pt-0",
                            children: (0, l.jsxs)("div", {
                                className: "carousel-outer",
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "swiper gallery-slider",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "swiper-wrapper",
                                                children: (0, l.jsxs)(x.tq, {
                                                    ...j,
                                                    children: [
                                                        (0, l.jsx)(x.o5, {
                                                            children: (0, l.jsx)("div", {
                                                                className: "swiper-slide",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "gallery-block-eight",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "inner-box",
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "image-box",
                                                                            children: (0, l.jsx)("figure", {
                                                                                className: "image overlay-anim",
                                                                                children: (0, l.jsx)(n(), {
                                                                                    href: "images/resource/gallery8-1.jpg",
                                                                                    className: "lightbox-image",
                                                                                    children: (0, l.jsx)("img", {
                                                                                        src: "images/resource/gallery8-1.jpg",
                                                                                        alt: "Image",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsx)(x.o5, {
                                                            children: (0, l.jsx)("div", {
                                                                className: "swiper-slide",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "gallery-block-eight",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "inner-box",
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "image-box",
                                                                            children: (0, l.jsx)("figure", {
                                                                                className: "image overlay-anim",
                                                                                children: (0, l.jsx)(n(), {
                                                                                    href: "images/resource/gallery8-2.jpg",
                                                                                    className: "lightbox-image",
                                                                                    children: (0, l.jsx)("img", {
                                                                                        src: "images/resource/gallery8-2.jpg",
                                                                                        alt: "Image",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsx)(x.o5, {
                                                            children: (0, l.jsx)("div", {
                                                                className: "swiper-slide",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "gallery-block-eight",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "inner-box",
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "image-box",
                                                                            children: (0, l.jsx)("figure", {
                                                                                className: "image overlay-anim",
                                                                                children: (0, l.jsx)(n(), {
                                                                                    href: "images/resource/gallery8-3.jpg",
                                                                                    className: "lightbox-image",
                                                                                    children: (0, l.jsx)("img", {
                                                                                        src: "images/resource/gallery8-3.jpg",
                                                                                        alt: "Image",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsx)(x.o5, {
                                                            children: (0, l.jsx)("div", {
                                                                className: "swiper-slide",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "gallery-block-eight",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "inner-box",
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "image-box",
                                                                            children: (0, l.jsx)("figure", {
                                                                                className: "image overlay-anim",
                                                                                children: (0, l.jsx)(n(), {
                                                                                    href: "images/resource/gallery8-1.jpg",
                                                                                    className: "lightbox-image",
                                                                                    children: (0, l.jsx)("img", {
                                                                                        src: "images/resource/gallery8-1.jpg",
                                                                                        alt: "Image",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsx)(x.o5, {
                                                            children: (0, l.jsx)("div", {
                                                                className: "swiper-slide",
                                                                children: (0, l.jsx)("div", {
                                                                    className: "gallery-block-eight",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "inner-box",
                                                                        children: (0, l.jsx)("div", {
                                                                            className: "image-box",
                                                                            children: (0, l.jsx)("figure", {
                                                                                className: "image overlay-anim",
                                                                                children: (0, l.jsx)(n(), {
                                                                                    href: "images/resource/gallery8-2.jpg",
                                                                                    className: "lightbox-image",
                                                                                    children: (0, l.jsx)("img", {
                                                                                        src: "images/resource/gallery8-2.jpg",
                                                                                        alt: "Image",
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "swiper-pagination styled-pagination",
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: "gallery-navs",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "testi-prev",
                                                children: (0, l.jsx)("i", {
                                                    className: "fa fa-angle-left",
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "testi-next",
                                                children: (0, l.jsx)("i", {
                                                    className: "fa fa-angle-right",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                v = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("section", {
                            className: "gallery-section-nine",
                            children: [
                                (0, l.jsx)("div", { className: "icon-flowers-18 bounce-y" }),
                                (0, l.jsxs)("div", {
                                    className: "auto-container",
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: "sec-title style-five light",
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: "icon icon-green-heart",
                                                }),
                                                (0, l.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "Some Beautiful Memories",
                                                }),
                                                (0, l.jsx)("h2", {
                                                    children: "Beautiful Wedding Clicks",
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: "custom-row",
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-1.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-1.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    "data-wow-delay": "300ms",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-2.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-2.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    "data-wow-delay": "600ms",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-3.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-3.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    "data-wow-delay": "900ms",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-4.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-4.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-5.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-5.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "gallery-block-nine wow fadeInUp",
                                                    "data-wow-delay": "300ms",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)(n(), {
                                                                    href: "images/resource/gallery9-6.jpg",
                                                                    className: "lightbox-image",
                                                                    "data-fancybox": "gallery",
                                                                    children: (0, l.jsx)("img", {
                                                                        src: "images/resource/gallery9-6.jpg",
                                                                        alt: "Image",
                                                                    }),
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                u = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("div", {
                            className: "marquee-section",
                            children: (0, l.jsxs)("div", {
                                className: "marquee",
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "marquee-group",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Wedding",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Party",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Decoration",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Catering",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        "aria-hidden": "true",
                                        className: "marquee-group",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Wedding",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Party",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Decoration",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                            (0, l.jsx)("div", {
                                                className: "text",
                                                children: "Catering",
                                            }),
                                            (0, l.jsx)("div", { className: "icon-leaves-37" }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                N = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("section", {
                            className: "news-section-five",
                            children: [
                                (0, l.jsx)("div", { className: "icon-flowers-19 bounce-y" }),
                                (0, l.jsx)("div", { className: "icon-flowers-20 bounce-y" }),
                                (0, l.jsxs)("div", {
                                    className: "auto-container",
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: "sec-title style-five text-center",
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "Recent Articles",
                                                }),
                                                (0, l.jsx)("h2", { children: "News & Updates" }),
                                                (0, l.jsx)("div", { className: "icon-leaves-36" }),
                                            ],
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: "news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-flower-30",
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("div", {
                                                                        className: "date",
                                                                        children: "December 14, 2024",
                                                                    }),
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: "Couple's wedding turns emotional as groom stands for first time",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["I'm filled with joy and excitement to be ", (0, l.jsx)("br", {}), " marrying the love of my life."],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "image-box",
                                                                children: [
                                                                    (0, l.jsx)("figure", {
                                                                        className: "image",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: (0, l.jsx)("img", {
                                                                                src: "images/resource/news5-1.jpg",
                                                                                alt: "Image",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "name",
                                                                        children: [
                                                                            "by ",
                                                                            (0, l.jsx)("span", {
                                                                                children: "thomas willimes",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                                                    "data-wow-delay": "300ms",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("div", {
                                                                        className: "date",
                                                                        children: "December 14, 2024",
                                                                    }),
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: "Couple's wedding turns emotional as groom stands for first time",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["I'm filled with joy and excitement to be ", (0, l.jsx)("br", {}), " marrying the love of my life."],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "image-box",
                                                                children: [
                                                                    (0, l.jsx)("figure", {
                                                                        className: "image",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: (0, l.jsx)("img", {
                                                                                src: "images/resource/news5-1.jpg",
                                                                                alt: "Image",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "name",
                                                                        children: [
                                                                            "by ",
                                                                            (0, l.jsx)("span", {
                                                                                children: "thomas willimes",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "news-block-five col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                                                    "data-wow-delay": "600ms",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("div", {
                                                                        className: "date",
                                                                        children: "December 14, 2024",
                                                                    }),
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: "Couple's wedding turns emotional as groom stands for first time",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["I'm filled with joy and excitement to be ", (0, l.jsx)("br", {}), " marrying the love of my life."],
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "image-box",
                                                                children: [
                                                                    (0, l.jsx)("figure", {
                                                                        className: "image",
                                                                        children: (0, l.jsx)(n(), {
                                                                            href: "news-details",
                                                                            children: (0, l.jsx)("img", {
                                                                                src: "images/resource/news5-1.jpg",
                                                                                alt: "Image",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "name",
                                                                        children: [
                                                                            "by ",
                                                                            (0, l.jsx)("span", {
                                                                                children: "thomas willimes",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: "bottom-box text-center",
                                            children: [
                                                (0, l.jsxs)("h3", {
                                                    className: "title",
                                                    children: ["Take a look at Real Life Weddings and hints, tips and ", (0, l.jsx)("br", {}), " advice for finding the perfect wedding venue"],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "btn-box",
                                                    children: (0, l.jsx)(n(), {
                                                        href: "page-events",
                                                        className: "theme-btn btn-style-one orange-bg",
                                                        children: (0, l.jsx)("span", {
                                                            className: "btn-title",
                                                            children: "View All Venue",
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                f = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("section", {
                            className: "pricing-section pt-0",
                            children: (0, l.jsxs)("div", {
                                className: "auto-container",
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: "sec-title style-five text-center",
                                        children: [
                                            (0, l.jsx)("span", {
                                                className: "sub-title",
                                                children: "Wedding Pricing Plans",
                                            }),
                                            (0, l.jsx)("h2", { children: "Best Pricing Packages" }),
                                            (0, l.jsx)("div", { className: "icon-leaves-36" }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            (0, l.jsx)("div", {
                                                className: "pricing-block col-xl-6 col-lg-6 col-md-6 col-sm-12",
                                                children: (0, l.jsxs)("div", {
                                                    className: "inner-box",
                                                    children: [
                                                        (0, l.jsx)("div", { className: "icon-flower-29" }),
                                                        (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image overlay-anim",
                                                                children: (0, l.jsx)("img", {
                                                                    src: "images/resource/price1-1.jpg",
                                                                    alt: "Image",
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: "content-box",
                                                            children: [
                                                                (0, l.jsx)("h4", {
                                                                    className: "title",
                                                                    children: "Full Wedding",
                                                                }),
                                                                (0, l.jsxs)("ul", {
                                                                    className: "features-list",
                                                                    children: [
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Blairquhan Castle",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Three-course wedding meal",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Evening buffet with tea",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "One wedding per day",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Regency architecture",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsxs)("h4", {
                                                                    className: "price",
                                                                    children: [
                                                                        "$3400",
                                                                        (0, l.jsx)("span", {
                                                                            children: "/1 Night Package",
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: "btn-box",
                                                                    children: (0, l.jsx)(n(), {
                                                                        href: "page-pricing",
                                                                        className: "theme-btn btn-style-one orange-bg",
                                                                        children: (0, l.jsx)("span", {
                                                                            className: "btn-title",
                                                                            children: "Get Package",
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            (0, l.jsx)("div", {
                                                className: "pricing-block col-xl-6 col-lg-6 col-md-6 col-sm-12",
                                                children: (0, l.jsxs)("div", {
                                                    className: "inner-box",
                                                    children: [
                                                        (0, l.jsx)("div", { className: "icon-flower-29" }),
                                                        (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image  overlay-anim",
                                                                children: (0, l.jsx)("img", {
                                                                    src: "images/resource/price1-2.jpg",
                                                                    alt: "Image",
                                                                }),
                                                            }),
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className: "content-box",
                                                            children: [
                                                                (0, l.jsx)("h4", {
                                                                    className: "title",
                                                                    children: "Religious Wedding",
                                                                }),
                                                                (0, l.jsxs)("ul", {
                                                                    className: "features-list",
                                                                    children: [
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Blairquhan Castle",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Three-course wedding meal",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Evening buffet with tea",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "One wedding per day",
                                                                            ],
                                                                        }),
                                                                        (0, l.jsxs)("li", {
                                                                            children: [
                                                                                (0, l.jsx)("i", {
                                                                                    className: "fa-solid fa-check",
                                                                                }),
                                                                                "Regency architecture",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsxs)("h4", {
                                                                    className: "price",
                                                                    children: [
                                                                        "$3400",
                                                                        (0, l.jsx)("span", {
                                                                            children: "/1 Night Package",
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: "btn-box",
                                                                    children: (0, l.jsx)(n(), {
                                                                        href: "page-pricing",
                                                                        className: "theme-btn btn-style-one orange-bg",
                                                                        children: (0, l.jsx)("span", {
                                                                            className: "btn-title",
                                                                            children: "Get Package",
                                                                        }),
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                b = () =>
                    (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("section", {
                            className: "services-section-four pt-0",
                            children: [
                                (0, l.jsx)("div", { className: "icon-leaves-34 bounce-y" }),
                                (0, l.jsx)("div", { className: "icon-leaves-35 bounce-y" }),
                                (0, l.jsxs)("div", {
                                    className: "auto-container",
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: "sec-title style-five text-center",
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "Wedding Services For You",
                                                }),
                                                (0, l.jsxs)("h2", {
                                                    children: ["We Design Your Special Day ", (0, l.jsx)("br", {}), " & Event Plans"],
                                                }),
                                                (0, l.jsx)("div", { className: "icon-leaves-36" }),
                                            ],
                                        }),
                                        (0, l.jsxs)("div", {
                                            className: "row",
                                            children: [
                                                (0, l.jsx)("div", {
                                                    className: "service-image-block col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image",
                                                                children: (0, l.jsx)("img", {
                                                                    src: "images/resource/service4-1.jpg",
                                                                    alt: "Image",
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "service-block-four col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsx)("i", {
                                                                className: "icon flaticon-checklist",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "icon-leaves-33",
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)("a", {
                                                                            href: "page-services.html",
                                                                            children: "Wedding Planners",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["From the vibrant flowers and trees ", (0, l.jsx)("br", {}), " to the gently flowing streams, this ", (0, l.jsx)("br", {}), " park provides the perfect."],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "service-block-four pull-down col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-box",
                                                                children: (0, l.jsx)("i", {
                                                                    className: "icon flaticon-birthday-girl",
                                                                }),
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "icon-leaves-33",
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)("a", {
                                                                            href: "page-services.html",
                                                                            children: "Kids Party",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["From the vibrant flowers and trees ", (0, l.jsx)("br", {}), " to the gently flowing streams, this ", (0, l.jsx)("br", {}), " park provides the perfect."],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "service-block-four pull-up style-two col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsx)("div", {
                                                                className: "icon-box",
                                                                children: (0, l.jsx)("i", {
                                                                    className: "icon flaticon-dress",
                                                                }),
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "icon-leaves-33",
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)("a", {
                                                                            href: "page-services.html",
                                                                            children: "Bridal Shower",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["From the vibrant flowers and trees ", (0, l.jsx)("br", {}), " to the gently flowing streams, this ", (0, l.jsx)("br", {}), " park provides the perfect."],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "service-block-four col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsxs)("div", {
                                                        className: "inner-box",
                                                        children: [
                                                            (0, l.jsx)("i", {
                                                                className: "icon flaticon-romantic-dinner-1",
                                                            }),
                                                            (0, l.jsx)("div", {
                                                                className: "icon-leaves-33",
                                                            }),
                                                            (0, l.jsxs)("div", {
                                                                className: "content-box",
                                                                children: [
                                                                    (0, l.jsx)("h4", {
                                                                        className: "title",
                                                                        children: (0, l.jsx)("a", {
                                                                            href: "page-services.html",
                                                                            children: "Rehearsal Dinner",
                                                                        }),
                                                                    }),
                                                                    (0, l.jsxs)("div", {
                                                                        className: "text",
                                                                        children: ["From the vibrant flowers and trees ", (0, l.jsx)("br", {}), " to the gently flowing streams, this ", (0, l.jsx)("br", {}), " park provides the perfect."],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: "service-image-block col-lg-4 col-md-6 col-sm-12",
                                                    children: (0, l.jsx)("div", {
                                                        className: "inner-box",
                                                        children: (0, l.jsx)("div", {
                                                            className: "image-box",
                                                            children: (0, l.jsx)("figure", {
                                                                className: "image",
                                                                children: (0, l.jsx)("img", {
                                                                    src: "images/resource/service4-2.jpg",
                                                                    alt: "Image",
                                                                }),
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                p = a(7294),
                y = a(1239);
            let w = {
                modules: [h.pt, h.tl, h.W_],
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                loop: !0,
            };
            var k = () => {
                let [e, s] = (0, p.useState)(!1);
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)("section", {
                            className: "story-section-three",
                            children: [
                                (0, l.jsx)("div", { className: "icon-flowers-15 bounce-y" }),
                                (0, l.jsx)("div", { className: "icon-flowers-16 bounce-y" }),
                                (0, l.jsx)("div", { className: "icon-flowers-17" }),
                                (0, l.jsxs)("div", {
                                    className: "auto-container",
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: "sec-title style-five text-center",
                                            children: [
                                                (0, l.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "Get Inspired",
                                                }),
                                                (0, l.jsx)("h2", { children: "Wedding Stories" }),
                                                (0, l.jsx)("div", { className: "icon-leaves-36" }),
                                            ],
                                        }),
                                        (0, l.jsxs)(x.tq, {
                                            ...w,
                                            className: "single-item-carousel owl-carousel owl-theme default-navs",
                                            children: [
                                                (0, l.jsx)(x.o5, {
                                                    children: (0, l.jsx)("div", {
                                                        className: "story-block-three",
                                                        children: (0, l.jsxs)("div", {
                                                            className: "inner-box",
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: "content-box",
                                                                    children: [
                                                                        (0, l.jsx)("h3", {
                                                                            className: "name",
                                                                            children: "Jessica & Romin",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "date",
                                                                            children: "Rustic Wedding - December 20, 2024",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "video-box",
                                                                            children: (0, l.jsxs)("a", {
                                                                                onClick: () => s(!0),
                                                                                className: "play-btn-two",
                                                                                children: [
                                                                                    (0, l.jsx)("i", {
                                                                                        className: "icon fa fa-play",
                                                                                        "aria-hidden": "true",
                                                                                    }),
                                                                                    (0, l.jsx)("span", {
                                                                                        className: "title",
                                                                                        children: "Watch video",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: "image-box",
                                                                    children: [
                                                                        (0, l.jsx)("figure", {
                                                                            className: "image",
                                                                            children: (0, l.jsx)("img", {
                                                                                src: "images/resource/story3-1.jpg",
                                                                                alt: "Image",
                                                                            }),
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "story-frame",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "icon-flower-28",
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: "text-box",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "text",
                                                                        children: "“ I'm filled with joy and excitement to be marrying the love of my life. I feel over whelmed with gratitude for the love and support that we've received from our family and friends. ”",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                                (0, l.jsx)(x.o5, {
                                                    children: (0, l.jsx)("div", {
                                                        className: "story-block-three",
                                                        children: (0, l.jsxs)("div", {
                                                            className: "inner-box",
                                                            children: [
                                                                (0, l.jsxs)("div", {
                                                                    className: "content-box",
                                                                    children: [
                                                                        (0, l.jsx)("h3", {
                                                                            className: "name",
                                                                            children: "Jessica & Romin",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "date",
                                                                            children: "Rustic Wedding - December 20, 2024",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "video-box",
                                                                            children: (0, l.jsxs)("a", {
                                                                                onClick: () => s(!0),
                                                                                className: "play-btn-two",
                                                                                children: [
                                                                                    (0, l.jsx)("i", {
                                                                                        className: "icon fa fa-play",
                                                                                        "aria-hidden": "true",
                                                                                    }),
                                                                                    (0, l.jsx)("span", {
                                                                                        className: "title",
                                                                                        children: "Watch video",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: "image-box",
                                                                    children: [
                                                                        (0, l.jsx)("figure", {
                                                                            className: "image",
                                                                            children: (0, l.jsx)("img", {
                                                                                src: "images/resource/story3-1.jpg",
                                                                                alt: "Image",
                                                                            }),
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "story-frame",
                                                                        }),
                                                                        (0, l.jsx)("div", {
                                                                            className: "icon-flower-28",
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, l.jsx)("div", {
                                                                    className: "text-box",
                                                                    children: (0, l.jsx)("div", {
                                                                        className: "text",
                                                                        children: "“ I'm filled with joy and excitement to be marrying the love of my life. I feel over whelmed with gratitude for the love and support that we've received from our family and friends. ”",
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, l.jsx)(y.Z, {
                            channel: "youtube",
                            autoplay: !0,
                            isOpen: e,
                            videoId: "L61p2uyiMSo",
                            onClose: () => s(!1),
                        }),
                    ],
                });
            };
            function _() {
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)(i.Z, {
                        headerStyle: 5,
                        footerStyle: 5,
                        children: [(0, l.jsx)(c, {}), (0, l.jsx)(g, {}), (0, l.jsx)(d, {}), (0, l.jsx)(b, {}), (0, l.jsx)(u, {}), (0, l.jsx)(k, {}), (0, l.jsx)(v, {}), (0, l.jsx)(f, {}), (0, l.jsx)(m, {}), (0, l.jsx)(N, {})],
                    }),
                });
            }
        },
        5152: function (e, s, a) {
            e.exports = a(8864);
        },
    },
    function (e) {
        e.O(0, [430, 239, 523, 888, 774, 179], function () {
            return e((e.s = 9415));
        }),
            (_N_E = e.O());
    },
]);
