(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [907],
  {
    7429: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/page-team-details",
        function () {
          return s(7510);
        },
      ]);
    },
    3640: function (e, t, s) {
      "use strict";
      var a = s(5893),
        l = s(1664),
        r = s.n(l);
      s(7294),
        (t.Z = (e) =>
          (0, a.jsx)("section", {
            className: "page-title",
            style: {
              backgroundImage: "url(/images/background/page-title-bg.png)",
            },
            children: (0, a.jsx)("div", {
              className: "auto-container",
              children: (0, a.jsxs)("div", {
                className: "title-outer text-center",
                children: [
                  (0, a.jsx)("h1", {
                    className: "title",
                    children: e.pageName,
                  }),
                  (0, a.jsxs)("ul", {
                    className: "page-breadcrumb",
                    children: [
                      (0, a.jsx)("li", {
                        children: (0, a.jsx)(r(), {
                          href: "/",
                          children: "Home",
                        }),
                      }),
                      (0, a.jsx)("li", { children: e.pageName }),
                    ],
                  }),
                ],
              }),
            }),
          }));
    },
    8864: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var s in t)
            Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
        })(t, {
          default: function () {
            return n;
          },
          noSSR: function () {
            return i;
          },
        });
      let a = s(8754);
      s(5893), s(7294);
      let l = a._(s(6016));
      function r(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function i(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function n(e, t) {
        let s = l.default,
          a = {
            loading: (e) => {
              let { error: t, isLoading: s, pastDelay: a } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (a.loader = () => e)
          : "function" == typeof e
          ? (a.loader = e)
          : "object" == typeof e && (a = { ...a, ...e });
        let n = (a = { ...a, ...t }).loader;
        return (a.loadableGenerated &&
          ((a = { ...a, ...a.loadableGenerated }), delete a.loadableGenerated),
        "boolean" != typeof a.ssr || a.ssr)
          ? s({
              ...a,
              loader: () =>
                null != n ? n().then(r) : Promise.resolve(r(() => null)),
            })
          : (delete a.webpack, delete a.modules, i(s, a));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    572: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = s(8754)._(s(7294)).default.createContext(null);
    },
    6016: function (e, t, s) {
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
*/ Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = s(8754)._(s(7294)),
        l = s(572),
        r = [],
        i = [],
        n = !1;
      function c(e) {
        let t = e(),
          s = { loading: !0, loaded: null, error: null };
        return (
          (s.promise = t
            .then((e) => ((s.loading = !1), (s.loaded = e), e))
            .catch((e) => {
              throw ((s.loading = !1), (s.error = e), e);
            })),
          s
        );
      }
      class d {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
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
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function o(e) {
        return (function (e, t) {
          let s = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            r = null;
          function c() {
            if (!r) {
              let t = new d(e, s);
              r = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return r.promise();
          }
          if (!n) {
            let e = s.webpack ? s.webpack() : s.modules;
            e &&
              i.push((t) => {
                for (let s of e) if (t.includes(s)) return c();
              });
          }
          function o(e, t) {
            !(function () {
              c();
              let e = a.default.useContext(l.LoadableContext);
              e &&
                Array.isArray(s.modules) &&
                s.modules.forEach((t) => {
                  e(t);
                });
            })();
            let i = a.default.useSyncExternalStore(
              r.subscribe,
              r.getCurrentValue,
              r.getCurrentValue
            );
            return (
              a.default.useImperativeHandle(t, () => ({ retry: r.retry }), []),
              a.default.useMemo(() => {
                var t;
                return i.loading || i.error
                  ? a.default.createElement(s.loading, {
                      isLoading: i.loading,
                      pastDelay: i.pastDelay,
                      timedOut: i.timedOut,
                      error: i.error,
                      retry: r.retry,
                    })
                  : i.loaded
                  ? a.default.createElement(
                      (t = i.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, i])
            );
          }
          return (
            (o.preload = () => c()),
            (o.displayName = "LoadableComponent"),
            a.default.forwardRef(o)
          );
        })(c, e);
      }
      function m(e, t) {
        let s = [];
        for (; e.length; ) {
          let a = e.pop();
          s.push(a(t));
        }
        return Promise.all(s).then(() => {
          if (e.length) return m(e, t);
        });
      }
      (o.preloadAll = () =>
        new Promise((e, t) => {
          m(r).then(e, t);
        })),
        (o.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let s = () => ((n = !0), t());
            m(i, e).then(s, s);
          })
        )),
        (window.__NEXT_PRELOADREADY = o.preloadReady);
      let u = o;
    },
    7510: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return m;
          },
        });
      var a = s(5893),
        l = s(6523),
        r = s(3640),
        i = s(1664),
        n = s.n(i),
        c = s(5152);
      let d = s.n(c)()(
        () => Promise.all([s.e(798), s.e(12)]).then(s.bind(s, 12)),
        { loadableGenerated: { webpack: () => [12] }, ssr: !1 }
      );
      var o = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("section", {
              className: "team-details",
              children: (0, a.jsxs)("div", {
                className: "container pb-100",
                children: [
                  (0, a.jsx)("div", {
                    className: "team-details__top pb-70",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-xl-6 col-lg-6",
                          children: (0, a.jsx)("div", {
                            className: "team-details__top-left",
                            children: (0, a.jsxs)("div", {
                              className: "team-details__top-img",
                              children: [
                                " ",
                                (0, a.jsx)("img", {
                                  src: "/images/resource/team-details.jpg",
                                  alt: "",
                                }),
                                (0, a.jsx)("div", {
                                  className: "team-details__big-text",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-xl-6 col-lg-6",
                          children: (0, a.jsx)("div", {
                            className: "team-details__top-right",
                            children: (0, a.jsxs)("div", {
                              className: "team-details__top-content",
                              children: [
                                (0, a.jsx)("h3", {
                                  className: "team-details__top-name",
                                  children: "Aleesha Brown",
                                }),
                                (0, a.jsx)("p", {
                                  className: "team-details__top-title",
                                  children: "Managing Director & CEO",
                                }),
                                (0, a.jsx)("p", {
                                  className: "team-details__top-text-1",
                                  children:
                                    "I help my clients stand out and they help me grow.",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details-contact mb-30",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "mb-0",
                                      children: "Email Address",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "",
                                      children: (0, a.jsx)("span", {
                                        children: "needhelp@yourdomain.com",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details-contact mb-30",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "mb-0",
                                      children: "Phone Number",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "",
                                      children: (0, a.jsx)("span", {
                                        children: "+012-3456-789",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details-contact",
                                  children: [
                                    (0, a.jsx)("h5", {
                                      className: "mb-0",
                                      children: "Web Address",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "",
                                      children: (0, a.jsx)("span", {
                                        children: "www.yourdomain.com",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details__social",
                                  children: [
                                    " ",
                                    (0, a.jsx)(n(), {
                                      href: "#",
                                      children: (0, a.jsx)("i", {
                                        className: "fab fa-twitter",
                                      }),
                                    }),
                                    " ",
                                    (0, a.jsx)(n(), {
                                      href: "#",
                                      children: (0, a.jsx)("i", {
                                        className: "fab fa-facebook",
                                      }),
                                    }),
                                    " ",
                                    (0, a.jsx)(n(), {
                                      href: "#",
                                      children: (0, a.jsx)("i", {
                                        className: "fab fa-pinterest-p",
                                      }),
                                    }),
                                    " ",
                                    (0, a.jsx)(n(), {
                                      href: "#",
                                      children: (0, a.jsx)("i", {
                                        className: "fab fa-instagram",
                                      }),
                                    }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "team-details__bottom pt-100",
                    children: (0, a.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, a.jsx)("div", {
                          className: "col-xl-6 col-lg-6",
                          children: (0, a.jsxs)("div", {
                            className: "team-details__bottom-left",
                            children: [
                              (0, a.jsx)("h4", {
                                className: "team-details__bottom-left-title",
                                children: "Personal Experience",
                              }),
                              (0, a.jsx)("p", {
                                className: "team-details__bottom-left-text",
                                children:
                                  "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia",
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "col-xl-6 col-lg-6",
                          children: (0, a.jsx)("div", {
                            className: "team-details__bottom-right",
                            children: (0, a.jsxs)("div", {
                              className: "team-details__progress",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "team-details__progress-single",
                                  children: [
                                    (0, a.jsx)("h4", {
                                      className: "team-details__progress-title",
                                      children: "Tecnology",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "bar",
                                      children: (0, a.jsx)("div", {
                                        className: "bar-inner count-bar",
                                        "data-percent": "90%",
                                        style: { width: "77%" },
                                        children: (0, a.jsxs)("div", {
                                          className: "count-text",
                                          children: [
                                            (0, a.jsx)(d, {
                                              count: 90,
                                              time: 3,
                                            }),
                                            "%",
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details__progress-single",
                                  children: [
                                    (0, a.jsx)("h4", {
                                      className: "team-details__progress-title",
                                      children: "Marketing",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "bar",
                                      children: (0, a.jsx)("div", {
                                        className: "bar-inner count-bar",
                                        "data-percent": "80%",
                                        style: { width: "77%" },
                                        children: (0, a.jsxs)("div", {
                                          className: "count-text",
                                          children: [
                                            (0, a.jsx)(d, {
                                              count: 80,
                                              time: 3,
                                            }),
                                            "%",
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "team-details__progress-single",
                                  children: [
                                    (0, a.jsx)("h4", {
                                      className: "team-details__progress-title",
                                      children: "Business",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "bar marb-0",
                                      children: (0, a.jsx)("div", {
                                        className: "bar-inner count-bar",
                                        "data-percent": "75%",
                                        style: { width: "77%" },
                                        children: (0, a.jsxs)("div", {
                                          className: "count-text",
                                          children: [
                                            (0, a.jsx)(d, {
                                              count: 75,
                                              time: 3,
                                            }),
                                            "%",
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              className: "team-contact-form",
              children: (0, a.jsxs)("div", {
                className: "container pb-100",
                children: [
                  (0, a.jsxs)("div", {
                    className: "sec-title text-center",
                    children: [
                      " ",
                      (0, a.jsx)("span", {
                        className: "sub-title",
                        children: "Contact With Us Now",
                      }),
                      (0, a.jsxs)("h2", {
                        className: "section-title__title",
                        children: [
                          "Feel Free to Write Our ",
                          (0, a.jsx)("br", {}),
                          " Tecnology Experts",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "row justify-content-center",
                    children: (0, a.jsx)("div", {
                      className: "col-lg-8",
                      children: (0, a.jsxs)("form", {
                        id: "contact_form",
                        name: "contact_form",
                        action: "#",
                        method: "post",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-sm-6",
                                children: (0, a.jsx)("div", {
                                  className: "mb-3",
                                  children: (0, a.jsx)("input", {
                                    name: "form_name",
                                    className: "form-control",
                                    type: "text",
                                    placeholder: "Enter Name",
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-sm-6",
                                children: (0, a.jsx)("div", {
                                  className: "mb-3",
                                  children: (0, a.jsx)("input", {
                                    name: "form_email",
                                    className: "form-control required email",
                                    type: "email",
                                    placeholder: "Enter Email",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, a.jsx)("div", {
                                className: "col-sm-6",
                                children: (0, a.jsx)("div", {
                                  className: "mb-3",
                                  children: (0, a.jsx)("input", {
                                    name: "form_subject",
                                    className: "form-control required",
                                    type: "text",
                                    placeholder: "Enter Subject",
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "col-sm-6",
                                children: (0, a.jsx)("div", {
                                  className: "mb-3",
                                  children: (0, a.jsx)("input", {
                                    name: "form_phone",
                                    className: "form-control",
                                    type: "text",
                                    placeholder: "Enter Phone",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "mb-3",
                            children: (0, a.jsx)("textarea", {
                              name: "form_message",
                              className: "form-control required",
                              rows: "5",
                              placeholder: "Enter Message",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "mb-3 text-center",
                            children: [
                              (0, a.jsx)("input", {
                                name: "form_botcheck",
                                className: "form-control",
                                type: "hidden",
                                value: "",
                              }),
                              (0, a.jsx)("button", {
                                type: "submit",
                                className:
                                  "theme-btn btn-style-one mb-3 mb-sm-0 me-2",
                                "data-loading-text": "Please wait...",
                                children: (0, a.jsx)("span", {
                                  className: "btn-title",
                                  children: "Send message",
                                }),
                              }),
                              (0, a.jsx)("button", {
                                type: "reset",
                                className: "theme-btn btn-style-one",
                                children: (0, a.jsx)("span", {
                                  className: "btn-title",
                                  children: "Reset",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      function m() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(l.Z, {
            headerStyle: 1,
            footerStyle: 3,
            children: [
              (0, a.jsx)(r.Z, { pageName: "Team Details" }),
              (0, a.jsx)(o, {}),
            ],
          }),
        });
      }
    },
    5152: function (e, t, s) {
      e.exports = s(8864);
    },
  },
  function (e) {
    e.O(0, [430, 523, 888, 774, 179], function () {
      return e((e.s = 7429));
    }),
      (_N_E = e.O());
  },
]);
