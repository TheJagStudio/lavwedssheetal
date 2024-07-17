(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [948],
  {
    3335: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-2",
        function () {
          return a(6099);
        },
      ]);
    },
    3798: function (e, s, a) {
      "use strict";
      var l = a(5893),
        i = a(7294);
      let c = (e) => ({
        days: Math.floor(e / 864e5),
        hours: Math.floor((e % 864e5) / 36e5),
        minutes: Math.floor((e % 36e5) / 6e4),
        seconds: Math.floor((e % 6e4) / 1e3),
      });
      s.Z = (e) => {
        let [s, a] = (0, i.useState)(new Date().toLocaleTimeString());
        (0, i.useEffect)(() => {
          let e = setTimeout(() => {
            a(new Date().toLocaleTimeString());
          }, 1e3);
          return () => {
            clearTimeout(e);
          };
        }, [s]);
        let r = Date.now(),
          n = c(new Date(e.endDateTime).getTime() - r);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: "time-countdown",
            children: [
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", { className: "count", children: n.days }),
                  (0, l.jsx)("span", { className: "title", children: "Days" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", { className: "count", children: n.hours }),
                  (0, l.jsx)("span", { className: "title", children: "Hours" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", {
                    className: "count",
                    children: n.minutes,
                  }),
                  (0, l.jsx)("span", {
                    className: "title",
                    children: "Minutes",
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", {
                    className: "count",
                    children: n.seconds,
                  }),
                  (0, l.jsx)("span", {
                    className: "title",
                    children: "Seconds",
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    3826: function (e, s, a) {
      "use strict";
      var l = a(5893),
        i = a(1664),
        c = a.n(i),
        r = a(2261),
        n = a(9304);
      let d = {
        modules: [n.pt, n.tl, n.W_],
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: !1,
        autoplay: { delay: 3500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1199: { slidesPerView: 4 },
          1350: { slidesPerView: 6 },
        },
      };
      s.Z = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("section", {
            className: "clients-section-two pt-0",
            children: [
              (0, l.jsx)("div", { className: "icon-flower-22 bounce-x" }),
              (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsx)("div", {
                    className: "sec-title text-center",
                    children: (0, l.jsx)("h3", {
                      children: "Wedding Design Companies",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "sponsors-outer",
                    children: (0, l.jsxs)(r.tq, {
                      ...d,
                      className: "clients-carousel owl-carousel owl-theme",
                      children: [
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-1.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-2.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-3.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-4.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-5.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-1.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                        (0, l.jsx)(r.o5, {
                          className: "client-block-two",
                          children: (0, l.jsxs)(c(), {
                            href: "#",
                            children: [
                              (0, l.jsx)("img", {
                                src: "images/clients/2-1.png",
                                alt: "Image",
                              }),
                              " ",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
    },
    6099: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return y;
          },
        });
      var l = a(5893),
        i = a(6523),
        c = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "banner-section-two",
              children: [
                (0, l.jsx)("div", { className: "icon-flowers-1 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "icon-flowers-2 bounce-y wow",
                  "data-wow-delay": "4s",
                }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "content-column col-lg-6 col-md-12 col-sm-12 order-lg-2 wow fadeInUp",
                        children: (0, l.jsxs)("div", {
                          className: "inner-column",
                          children: [
                            (0, l.jsx)("span", {
                              className: "sub-title wow fadeInUp",
                              "data-wow-delay": "900ms",
                              children: "Stepping Into Forever",
                            }),
                            (0, l.jsxs)("h2", {
                              className: "name wow fadeInUp",
                              "data-wow-delay": "1200ms",
                              children: [
                                "Jessica Loran ",
                                (0, l.jsx)("br", {}),
                                " ",
                                (0, l.jsx)("span", { children: "&" }),
                                " ",
                                (0, l.jsx)("br", {}),
                                " Thomas Walkar",
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "date wow fadeInUp",
                              "data-wow-delay": "1500ms",
                              children: "DEC 12th, 2022",
                            }),
                            (0, l.jsxs)("div", {
                              className: "address wow fadeInUp",
                              "data-wow-delay": "1800ms",
                              children: [
                                (0, l.jsx)("i", {
                                  className: "icon fa fa-map-marker-alt",
                                }),
                                "Bell View Peter United State",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "image-column col-lg-3 col-md-6 col-sm-12 wow fadeInLeft",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-column",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)("img", {
                                src: "images/banner/banner2-1.jpg",
                                alt: "Image",
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "image-column style-two col-lg-3 col-md-6 col-sm-12 order-lg-3 wow fadeInRight",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-column",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)("img", {
                                src: "images/banner/banner2-2.jpg",
                                alt: "Image",
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        r = a(3826),
        n = a(1664),
        d = a.n(n),
        o = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "contact-section-two",
              children: [
                (0, l.jsx)("div", { className: "icon-leaves-7 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "form-column col-xl-5 col-lg-6 col-md-12 col-sm-12",
                        children: (0, l.jsxs)("div", {
                          className: "inner-column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "icon-circle-star",
                            }),
                            (0, l.jsxs)("div", {
                              className: "contact-form-two wow fadeInLeft",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "icon-flower-8",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-flower-9",
                                }),
                                (0, l.jsx)("figure", {
                                  className: "image text-center",
                                  children: (0, l.jsx)("img", {
                                    src: "images/icons/icon-circle-star.png",
                                    alt: "Image",
                                  }),
                                }),
                                (0, l.jsx)("h3", {
                                  className: "title",
                                  children: "Are You Attending?",
                                }),
                                (0, l.jsx)("form", {
                                  method: "post",
                                  action: "get",
                                  id: "contact-form",
                                  children: (0, l.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "form-group col-lg-6 col-md-6 col-sm-6",
                                        children: (0, l.jsxs)("label", {
                                          className: "custom-radio-box",
                                          children: [
                                            "Yes, I will be there",
                                            (0, l.jsx)("input", {
                                              type: "radio",
                                              name: "radio",
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "checkmark",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "form-group col-lg-6 col-md-6 col-sm-6",
                                        children: (0, l.jsxs)("label", {
                                          className: "custom-radio-box",
                                          children: [
                                            "Sorry, I can’t come",
                                            (0, l.jsx)("input", {
                                              type: "radio",
                                              name: "radio",
                                            }),
                                            (0, l.jsx)("span", {
                                              className: "checkmark",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, l.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, l.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Complete Name",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, l.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, l.jsx)("input", {
                                            type: "email",
                                            name: "email",
                                            placeholder: "Email Address",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, l.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, l.jsx)("input", {
                                            type: "text",
                                            name: "number",
                                            placeholder: "Number of Guests",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, l.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, l.jsx)("textarea", {
                                            name: "message",
                                            placeholder: "Notes",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "form-group text-center col-lg-12",
                                        children: (0, l.jsx)("button", {
                                          className:
                                            "theme-btn btn-style-two yellow-bg",
                                          type: "submit",
                                          name: "submit-form",
                                          children: (0, l.jsx)("span", {
                                            className: "btn-title",
                                            children: "Submit Now",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "image-column col-xl-7 col-lg-6 col-md-12 wow fadeInRight",
                        "data-wow-delay": "200ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-column",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(d(), {
                                  href: "images/resource/contact2-1.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/contact2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)("img", {
                                    src: "images/icons/icon-cone.png",
                                    alt: "Image",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "title-box",
                                  children: [
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: "We Are Getting Married!",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "text",
                                      children: [
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
                                        (0, l.jsx)("br", {}),
                                        ". Nunc, egestas luctus hendrerit maecenas.",
                                      ],
                                    }),
                                    (0, l.jsx)(d(), {
                                      className: "theme-btn btn-style-two",
                                      href: "page-about",
                                      children: (0, l.jsx)("span", {
                                        className: "btn-title",
                                        children: "Discover Now",
                                      }),
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
                }),
              ],
            }),
          });
      a(7294);
      var m = a(3798),
        t = () => {
          let e = new Date();
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "countdown-section-two pt-0",
              children: [
                (0, l.jsx)("div", { className: "bg bg-pattern-4" }),
                (0, l.jsxs)("div", {
                  className: "anim-icons",
                  children: [
                    (0, l.jsx)("div", { className: "icon-flower-3" }),
                    (0, l.jsx)("div", { className: "icon-flower-4" }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title text-center style-two",
                      children: [
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "Stepping Into Forever",
                        }),
                        (0, l.jsx)("h2", {
                          children: "Join Us in Celebrating",
                        }),
                        (0, l.jsxs)("div", {
                          className: "text",
                          children: [
                            "We would love to meet up and chat about how we can ",
                            (0, l.jsx)("br", {}),
                            " make your dram wedding happen!",
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "outer-box wow fadeInUp",
                      children: (0, l.jsxs)("div", {
                        className: "time-counter",
                        children: [
                          (0, l.jsx)(m.Z, {
                            endDateTime: e.setDate(e.getDate() + 55),
                          }),
                          (0, l.jsx)("div", {
                            className: "btn-box",
                            children: (0, l.jsx)(d(), {
                              href: "page-rsvp",
                              className: "theme-btn btn-style-two",
                              children: (0, l.jsx)("span", {
                                className: "btn-title",
                                children: "RSVP",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        x = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "couple-section-two pt-0",
              children: [
                (0, l.jsx)("div", {
                  className: "icon-leave-4 bounce-y wow ",
                  "data-wow-delay": "3s",
                }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "couple-image-block col-xl-4 col-lg-4 col-md-12 col-sm-12 order-lg-2 wow fadeInUp",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/couple2-2.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "icon-flower-3 bounce-y",
                              }),
                              (0, l.jsx)("div", {
                                className: "icon-flower-4 bounce-y wow",
                                "data-wow-delay": "3s",
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "couple-block-two style-two col-xl-4 col-lg-4 col-md-6 col-sm-12 wow fadeInLeft",
                        "data-wow-delay": "200ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(d(), {
                                  href: "page-about",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/couple2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "The Bride",
                                }),
                                (0, l.jsx)("h4", {
                                  className: "name",
                                  children: (0, l.jsx)(d(), {
                                    href: "page-about",
                                    children: "Jessica Loran",
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "couple-block-two col-xl-4 col-lg-4 col-md-6 col-sm-12 order-lg-3 wow fadeInRight",
                        "data-wow-delay": "400ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(d(), {
                                  href: "page-about",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/couple2-3.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "The Groom",
                                }),
                                (0, l.jsx)("h4", {
                                  className: "name",
                                  children: (0, l.jsx)(d(), {
                                    href: "page-about",
                                    children: "Thomas Walkar",
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        h = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "event-section-two",
              children: [
                (0, l.jsxs)("div", {
                  className: "anim-icons full-width",
                  children: [
                    (0, l.jsx)("div", { className: "icon-flowers-6 bounce-y" }),
                    (0, l.jsx)("div", { className: "icon-leaves-5 bounce-x" }),
                    (0, l.jsx)("div", { className: "icon-leaves-6 bounce-x" }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title text-center style-two",
                      children: [
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "Wedding FRIDAY TO SUNDAY",
                        }),
                        (0, l.jsx)("h2", { children: "Ceremony Timeline" }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsx)("div", {
                          className: "event-block-two wow fadeInRight",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsx)("div", {
                                className: "date-column",
                                children: (0, l.jsxs)("div", {
                                  className: "date-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, l.jsx)("span", { children: "12" }),
                                        "November",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-6",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-7",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "image-column",
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/event2-2.jpg",
                                      className: "lightbox-image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/event2-2.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "content-column",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "time",
                                      children: [
                                        (0, l.jsx)("i", {
                                          className: "icon far fa-clock",
                                        }),
                                        " ",
                                        (0, l.jsx)("p", {
                                          children: "AT 02:00 PM",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-events",
                                        children: "Wedding Reception",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "event-block-two style-two wow fadeInLeft",
                          "data-wow-delay": "200ms",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsx)("div", {
                                className: "date-column",
                                children: (0, l.jsxs)("div", {
                                  className: "date-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, l.jsx)("span", { children: "13" }),
                                        "November",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-6",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-7",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "image-column",
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/event2-1.jpg",
                                      className: "lightbox-image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/event2-1.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "content-column",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "time",
                                      children: [
                                        (0, l.jsx)("i", {
                                          className: "icon far fa-clock",
                                        }),
                                        " ",
                                        (0, l.jsx)("p", {
                                          children: "AT 04:00 PM",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-events",
                                        children: "Now let's Party",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing  streams, this park provides the perfect backdrop for this joyous occasion.",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "event-block-two wow fadeInRight",
                          "data-wow-delay": "400ms",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsx)("div", {
                                className: "date-column",
                                children: (0, l.jsxs)("div", {
                                  className: "date-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "date",
                                      children: [
                                        (0, l.jsx)("span", { children: "14" }),
                                        "November",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-6",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-flower-7",
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "image-column",
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/event2-3.jpg",
                                      className: "lightbox-image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/event2-3.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "content-column",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "time",
                                      children: [
                                        (0, l.jsx)("i", {
                                          className: "icon far fa-clock",
                                        }),
                                        " ",
                                        (0, l.jsx)("p", {
                                          children: "AT 02:00 PM",
                                        }),
                                      ],
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-events",
                                        children: "Wedding Reception",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop for this joyous occasion.",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        j = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "gallery-section-three",
              children: [
                (0, l.jsx)("div", { className: "bg bg-pattern-5 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "left-column col-lg-6 col-md-12 col-sm-12 wow fadeInLeft",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "sec-title style-two",
                            children: [
                              (0, l.jsx)("span", {
                                className: "sub-title",
                                children: "Sweet Memories",
                              }),
                              (0, l.jsx)("h2", {
                                className: "title",
                                children: "Our Captured Moment",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "gallery-block-three col-lg-6 col-md-6 col-sm-6",
                                children: (0, l.jsx)("div", {
                                  className: "inner-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image overlay-anim",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/gallery3-1.jpg",
                                      className: "lightbox-image",
                                      "data-fancybox": "gallery",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/gallery3-1.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "gallery-block-three col-lg-6 col-md-6 col-sm-6",
                                children: (0, l.jsx)("div", {
                                  className: "inner-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image overlay-anim",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/gallery3-2.jpg",
                                      className: "lightbox-image",
                                      "data-fancybox": "gallery",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/gallery3-2.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "gallery-block-three col-lg-12 col-md-12 col-sm-12",
                                children: (0, l.jsx)("div", {
                                  className: "inner-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image overlay-anim",
                                    children: (0, l.jsx)(d(), {
                                      href: "images/resource/gallery3-3.jpg",
                                      className: "lightbox-image",
                                      "data-fancybox": "gallery",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/gallery3-3.jpg",
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
                      (0, l.jsx)("div", {
                        className:
                          "right-column col-lg-6 col-md-12 col-sm-12 wow fadeInRight",
                        children: (0, l.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "gallery-block-three col-lg-12 col-md-12 col-sm-12",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(d(), {
                                    href: "images/resource/gallery3-4.jpg",
                                    className: "lightbox-image",
                                    "data-fancybox": "gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery3-4.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "gallery-block-three col-lg-6 col-md-6 col-sm-6",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(d(), {
                                    href: "images/resource/gallery3-5.jpg",
                                    className: "lightbox-image",
                                    "data-fancybox": "gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery3-5.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "gallery-block-three col-lg-6 col-md-6 col-sm-6",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(d(), {
                                    href: "images/resource/gallery3-6.jpg",
                                    className: "lightbox-image",
                                    "data-fancybox": "gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery3-6.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "text-block col-lg-12",
                              children: (0, l.jsx)("div", {
                                className: "text",
                                children:
                                  "“ We Loved with a love that was more  than love ”",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        g = a(2261),
        N = a(9304);
      let v = {
        modules: [N.pt, N.tl, N.W_],
        slidesPerView: 6,
        spaceBetween: 30,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          991: { slidesPerView: 4 },
          1199: { slidesPerView: 5 },
          1350: { slidesPerView: 6 },
        },
      };
      var f = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "subscribe-section pb-0",
              children: [
                (0, l.jsx)("div", { className: "icon-leaves-6 style-two" }),
                (0, l.jsx)("div", { className: "icon-leaves-6 bounce-x" }),
                (0, l.jsx)("div", { className: "icon-flower-23" }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsx)("div", {
                          className: "title-column col-lg-5 col-md-12",
                          children: (0, l.jsxs)("div", {
                            className: "inner-column",
                            children: [
                              (0, l.jsx)("h2", {
                                className: "title wow fadeInLeft",
                                children: "Newsletter",
                              }),
                              (0, l.jsx)("div", {
                                className: "text",
                                children:
                                  "Receive fresh blog content and invites to our webinars.",
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "form-column col-lg-7 col-md-12 col-sm-12",
                          children: (0, l.jsx)("div", {
                            className: "subscribe-form-one wow fadeInRight",
                            children: (0, l.jsx)("form", {
                              method: "post",
                              action: "#",
                              children: (0, l.jsxs)("div", {
                                className: "form-group",
                                children: [
                                  (0, l.jsx)("input", {
                                    type: "email",
                                    name: "email",
                                    className: "email",
                                    placeholder: "Enter your email....",
                                    required: "",
                                  }),
                                  (0, l.jsx)("button", {
                                    type: "submit",
                                    className:
                                      "theme-btn btn-style-two yellow-bg",
                                    children: (0, l.jsx)("span", {
                                      className: "btn-title",
                                      children: "Subscribe",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "gallery-carousel-outer",
                      children: (0, l.jsxs)(g.tq, {
                        ...v,
                        className:
                          "gallery-carousel owl-carousel owl-theme disable-navs",
                        children: [
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-1.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        className: "icon",
                                        children: (0, l.jsx)("i", {
                                          className: "fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-2.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-3.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-4.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-5.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-6.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsx)(g.o5, {
                            children: (0, l.jsx)("div", {
                              className: "gallery-block-two",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        children: (0, l.jsx)("img", {
                                          src: "images/resource/gallery2-1.jpg",
                                          alt: "Image",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "overlay",
                                      children: (0, l.jsx)(d(), {
                                        href: "page-gallery",
                                        className: "icon",
                                        children: (0, l.jsx)("i", {
                                          className: "fa fa-expand",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        b = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "news-section",
              children: [
                (0, l.jsx)("div", { className: "icon-leave-4 bounce-y" }),
                (0, l.jsx)("div", { className: "icon-flower-12 zoom-one" }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title text-center style-two",
                      children: [
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "News and updates",
                        }),
                        (0, l.jsx)("h2", { children: "Recent Updates" }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "news-block wow fadeInUp",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)(d(), {
                                href: "news-details",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/news1-1.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "date",
                                children: [
                                  (0, l.jsx)("span", { children: "24" }),
                                  "December 2024",
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "title-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "title",
                                    children: (0, l.jsxs)(d(), {
                                      href: "news-details",
                                      children: [
                                        "Couple's wedding ",
                                        (0, l.jsx)("br", {}),
                                        " turns emotional as ",
                                        (0, l.jsx)("br", {}),
                                        " groom stands",
                                      ],
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text",
                                    children: [
                                      "I'm filled with joy and excitement to be ",
                                      (0, l.jsx)("br", {}),
                                      " marrying the love of my life.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "news-block style-two wow fadeInUp",
                      "data-wow-delay": "200ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)(d(), {
                                href: "news-details",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/news1-2.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "date",
                                children: [
                                  (0, l.jsx)("span", { children: "24" }),
                                  "December 2024",
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "title-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "title",
                                    children: (0, l.jsxs)(d(), {
                                      href: "news-details",
                                      children: [
                                        "Photography is the ",
                                        (0, l.jsx)("br", {}),
                                        " important part of ",
                                        (0, l.jsx)("br", {}),
                                        " wedding.",
                                      ],
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text",
                                    children: [
                                      "I'm filled with joy and excitement to be ",
                                      (0, l.jsx)("br", {}),
                                      " marrying the love of my life.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: "btn-box text-center",
                      children: (0, l.jsx)(d(), {
                        href: "news-grid",
                        className: "theme-btn btn-style-two yellow-bg",
                        children: (0, l.jsx)("span", {
                          className: "btn-title",
                          children: "View all News",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        u = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "services-section-two",
              children: (0, l.jsx)("div", {
                className: "auto-container",
                children: (0, l.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)(d(), {
                                href: "page-events",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/services2-1.png",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("span", {
                                className: "sub-title",
                                children: "Venue",
                              }),
                              (0, l.jsx)("h4", {
                                className: "title",
                                children: (0, l.jsx)(d(), {
                                  href: "page-events",
                                  children: "The Orchard",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "text",
                                children: [
                                  "At the base of Mt Warning, lies ",
                                  (0, l.jsx)("br", {}),
                                  " a beautiful macadamia.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      "data-wow-delay": "300ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)(d(), {
                                href: "page-events",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/services2-2.png",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("span", {
                                className: "sub-title",
                                children: "Dining",
                              }),
                              (0, l.jsx)("h4", {
                                className: "title",
                                children: (0, l.jsx)(d(), {
                                  href: "page-events",
                                  children: "Lunch Together",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "text",
                                children: [
                                  "At the base of Mt Warning, lies ",
                                  (0, l.jsx)("br", {}),
                                  " a beautiful macadamia.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "services-block-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      "data-wow-delay": "600ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image",
                              children: (0, l.jsx)(d(), {
                                href: "page-events",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/services2-3.png",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("span", {
                                className: "sub-title",
                                children: "After Party",
                              }),
                              (0, l.jsx)("h4", {
                                className: "title",
                                children: (0, l.jsx)(d(), {
                                  href: "page-events",
                                  children: "Photography",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "text",
                                children: [
                                  "At the base of Mt Warning, lies ",
                                  (0, l.jsx)("br", {}),
                                  " a beautiful macadamia.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
      let w = {
        modules: [N.pt, N.tl, N.W_],
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: { clickable: !0 },
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          1199: { slidesPerView: 3 },
          1350: { slidesPerView: 4 },
        },
      };
      var p = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("section", {
            className: "team-section-two pt-0",
            children: [
              (0, l.jsx)("div", { className: "icon-flowers-7 bounce-y" }),
              (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title text-center style-two",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Our Friends",
                      }),
                      (0, l.jsx)("h2", { children: "Bridesmaids & Groomsmen" }),
                    ],
                  }),
                  (0, l.jsxs)(g.tq, {
                    ...w,
                    className: "four-items-carousel",
                    children: [
                      (0, l.jsx)(g.o5, {
                        children: (0, l.jsx)("div", {
                          className: "team-block-two",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/team2-1.jpg",
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-10",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-11",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "name",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: "Robina Molines",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "Bridesmaid",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "social-icon-two",
                                    children: [
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                      }),
                      (0, l.jsx)(g.o5, {
                        children: (0, l.jsx)("div", {
                          className: "team-block-two",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/team2-2.jpg",
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-10",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-11",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "name",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: "Willimes Dom",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "Bridesmaid",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "social-icon-two",
                                    children: [
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                      }),
                      (0, l.jsx)(g.o5, {
                        children: (0, l.jsx)("div", {
                          className: "team-block-two",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/team2-3.jpg",
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-10",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-11",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "name",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: "Qarlos Robin",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "Groomsmen",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "social-icon-two",
                                    children: [
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                      }),
                      (0, l.jsx)(g.o5, {
                        children: (0, l.jsx)("div", {
                          className: "team-block-two",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/team2-4.jpg",
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-10",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-11",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "name",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: "Peter Parkar",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "Groomsmen",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "social-icon-two",
                                    children: [
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                      }),
                      (0, l.jsx)(g.o5, {
                        children: (0, l.jsx)("div", {
                          className: "team-block-two",
                          children: (0, l.jsxs)("div", {
                            className: "inner-box",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/team2-1.jpg",
                                        alt: "",
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-10",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-flower-11",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("h6", {
                                    className: "name",
                                    children: (0, l.jsx)(d(), {
                                      href: "page-bride-and-groom",
                                      children: "Robina Molines",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "Bridesmaid",
                                  }),
                                  (0, l.jsxs)("ul", {
                                    className: "social-icon-two",
                                    children: [
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, l.jsx)("li", {
                                        children: (0, l.jsx)(d(), {
                                          href: "#",
                                          children: (0, l.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      function y() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(i.Z, {
            headerStyle: 2,
            footerStyle: 2,
            children: [
              (0, l.jsx)(c, {}),
              (0, l.jsx)(u, {}),
              (0, l.jsx)(x, {}),
              (0, l.jsx)(t, {}),
              (0, l.jsx)(h, {}),
              (0, l.jsx)(o, {}),
              (0, l.jsx)(p, {}),
              (0, l.jsx)(j, {}),
              (0, l.jsx)(b, {}),
              (0, l.jsx)(r.Z, {}),
              (0, l.jsx)(f, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [430, 523, 888, 774, 179], function () {
      return e((e.s = 3335));
    }),
      (_N_E = e.O());
  },
]);
