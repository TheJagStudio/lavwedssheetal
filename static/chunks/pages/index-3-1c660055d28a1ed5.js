(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [170],
  {
    7194: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-3",
        function () {
          return a(3113);
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
    3113: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return k;
          },
        });
      var l = a(5893),
        i = a(6523),
        c = a(1664),
        r = a.n(c),
        n = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "banner-section-three",
              children: [
                (0, l.jsx)("div", { className: "icon-bubbles-2" }),
                (0, l.jsx)("div", { className: "icon-leaves-23 bounce-x" }),
                (0, l.jsx)("div", { className: "icon-leaves-24 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "bg-image wow fadeIn",
                  "data-wow-delay": "1500ms",
                  children: (0, l.jsx)("img", {
                    src: "images/banner/banner-3.png",
                    alt: "Image",
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsx)("div", {
                    className: "row",
                    children: (0, l.jsx)("div", {
                      className:
                        "content-column col-lg-5 col-md-12 col-sm-12 wow fadeInLeft",
                      children: (0, l.jsxs)("div", {
                        className: "inner-column",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "name wow fadeInUp",
                            "data-wow-delay": "300ms",
                            children: [
                              "Olivia ",
                              (0, l.jsx)("br", {}),
                              " ",
                              (0, l.jsx)("span", { className: "icon-heart-2" }),
                              " ",
                              (0, l.jsx)("br", {}),
                              " Peter",
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "text wow fadeInUp",
                            "data-wow-delay": "600ms",
                            children: [
                              "ONE O’CLOCK IN THE AFTERNOON ",
                              (0, l.jsx)("br", {}),
                              " THE WHITE CHURCH",
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className: "date wow fadeInUp",
                            "data-wow-delay": "900ms",
                            children: "12. 12. 2024",
                          }),
                          (0, l.jsx)("div", {
                            className: "btn-box wow fadeInUp",
                            "data-wow-delay": "1200ms",
                            children: (0, l.jsx)(r(), {
                              href: "page-events",
                              className: "theme-btn btn-style-one green-bg",
                              children: (0, l.jsx)("span", {
                                className: "btn-title",
                                children: "Wedding",
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
        d = a(2261),
        m = a(9304);
      let o = {
        modules: [m.pt, m.tl, m.W_],
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
      var t = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "clients-section-three",
              children: [
                (0, l.jsx)("div", { className: "icon-leaves-28 bounce-x" }),
                (0, l.jsx)("div", { className: "icon-leaves-29 bounce-y" }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title text-center",
                      children: [
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "thank you for giving",
                        }),
                        (0, l.jsx)("h2", { children: "Valuable Partners" }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "sponsors-outer",
                      children: (0, l.jsxs)(d.tq, {
                        ...o,
                        className: "clients-carousel owl-carousel owl-theme",
                        children: [
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-1.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-2.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-3.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-4.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-5.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-1.png",
                                  alt: "Image",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, l.jsx)(d.o5, {
                            className: "client-block-three",
                            children: (0, l.jsxs)(r(), {
                              href: "#",
                              children: [
                                (0, l.jsx)("img", {
                                  src: "images/clients/3-2.png",
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
          }),
        x = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "contact-section-three",
              children: [
                (0, l.jsx)("div", { className: "icon-flower-25" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "contact-block col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("i", {
                              className: "icon flaticon-wedding-arch",
                            }),
                            (0, l.jsx)("h4", {
                              className: "title",
                              children: "The Reception",
                            }),
                            (0, l.jsxs)("div", {
                              className: "date",
                              children: [
                                "December 23, 2024 - Sunday ",
                                (0, l.jsx)("br", {}),
                                " ",
                                (0, l.jsx)("span", {
                                  children: "2:00 PM – 3:30 PM",
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", { className: "icon-heart-5" }),
                            (0, l.jsxs)("div", {
                              className: "address",
                              children: [
                                "Town 2341 Walori,19 West ",
                                (0, l.jsx)("br", {}),
                                " 21th Str. NY ",
                                (0, l.jsx)("br", {}),
                                " ",
                                (0, l.jsx)(r(), {
                                  href: "+1843-853-1810",
                                  className: "number",
                                  children: "+1 843-853-1810",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "contact-block right col-xl-4 col-lg-6 col-md-6 col-sm-12 order-xl-2 wow fadeInRight",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("i", {
                              className: "icon flaticon-wedding-ring",
                            }),
                            (0, l.jsx)("h4", {
                              className: "title",
                              children: "The Ceremony",
                            }),
                            (0, l.jsxs)("div", {
                              className: "date",
                              children: [
                                "December 23, 2024 - Sunday ",
                                (0, l.jsx)("br", {}),
                                " ",
                                (0, l.jsx)("span", {
                                  children: "2:00 PM – 3:30 PM",
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", { className: "icon-heart-5" }),
                            (0, l.jsxs)("div", {
                              className: "address",
                              children: [
                                "Town 2341 Walori,19 West ",
                                (0, l.jsx)("br", {}),
                                " 21th Str. NY ",
                                (0, l.jsx)("br", {}),
                                " ",
                                (0, l.jsx)(r(), {
                                  href: "+18438531810",
                                  className: "number",
                                  children: "+1 843-853-1810",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "form-column col-xl-4 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsx)("div", {
                          className: "inner-column",
                          children: (0, l.jsxs)("div", {
                            className: "contact-form-three wow fadeInUp",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "title",
                                children: "Are you Attending? ",
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
                                          "theme-btn btn-style-two green-bg",
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
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
      a(7294);
      var h = a(3798),
        j = () => {
          let e = new Date();
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "countdown-section-three p-0 ",
              children: [
                (0, l.jsxs)("div", {
                  className: "anim-icons",
                  children: [
                    (0, l.jsx)("div", { className: "icon-leaves-10" }),
                    (0, l.jsx)("div", { className: "icon-leaves-11" }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "small-container",
                  children: (0, l.jsx)("div", {
                    className: "outer-box wow fadeInUp",
                    children: (0, l.jsx)("div", {
                      className: "time-counter",
                      children: (0, l.jsx)(h.Z, {
                        endDateTime: e.setDate(e.getDate() + 55),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        g = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "gallery-section-five",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-three text-center",
                    children: [
                      (0, l.jsx)("span", {
                        className: "icon icon-green-heart",
                      }),
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Sweet Memories",
                      }),
                      (0, l.jsx)("h2", { children: "Wedding Gallery" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-1.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-1.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-2.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-2.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five style-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-3.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-3.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "900ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-4.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-4.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-5.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-5.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five style-three col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-6.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-6.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-7.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-7.jpg",
                                  alt: "Image",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "gallery-block-five style-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "900ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsx)("div", {
                            className: "image-box",
                            children: (0, l.jsx)("figure", {
                              className: "image overlay-anim",
                              children: (0, l.jsx)(r(), {
                                href: "images/resource/gallery5-8.jpg",
                                className: "lightbox-image",
                                "data-fancybox": "gallery",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/gallery5-8.jpg",
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
            }),
          });
      let N = {
        modules: [m.pt, m.tl, m.W_],
        slidesPerView: 10,
        spaceBetween: 0,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          767: { slidesPerView: 3 },
          991: { slidesPerView: 6 },
          1199: { slidesPerView: 10 },
          1350: { slidesPerView: 10 },
        },
      };
      var v = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "gallery-section-six pt-0",
              children: (0, l.jsxs)("div", {
                className: "large-container",
                children: [
                  (0, l.jsx)("h3", {
                    className: "title",
                    children: "Follow @domain.com",
                  }),
                  (0, l.jsxs)(d.tq, {
                    ...N,
                    className:
                      "gallery-carousel-two owl-carousel owl-theme disable-navs",
                    children: [
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery2-1.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery2-2.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery2-3.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery2-4.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery2-5.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-1.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-2.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-2.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-3.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-4.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                      (0, l.jsx)(d.o5, {
                        children: (0, l.jsx)("div", {
                          className: "gallery-block-two",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-gallery",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/gallery6-5.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "overlay",
                                  children: (0, l.jsx)(r(), {
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
                ],
              }),
            }),
          }),
        b = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "news-section-two pt-0",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-three text-center",
                    children: [
                      (0, l.jsx)("span", {
                        className: "icon icon-green-heart",
                      }),
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Recent Article",
                      }),
                      (0, l.jsx)("h2", { children: "News & Updates" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "news-details",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/news2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "date",
                                  children: "December 14, 2024",
                                }),
                                (0, l.jsx)("h3", {
                                  className: "title",
                                  children: (0, l.jsxs)(r(), {
                                    href: "news-details",
                                    children: [
                                      "Couple's wedding ",
                                      (0, l.jsx)("br", {}),
                                      " turns emotional as groom stands",
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
                                (0, l.jsx)(r(), {
                                  href: "news-details",
                                  className: "readmore",
                                  children: (0, l.jsx)("i", {
                                    className: "icon fa fa-angle-right",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "news-block-two style-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "news-details",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/news2-2.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "date",
                                  children: "December 14, 2024",
                                }),
                                (0, l.jsx)("h3", {
                                  className: "title",
                                  children: (0, l.jsxs)(r(), {
                                    href: "news-details",
                                    children: [
                                      "Couple's wedding ",
                                      (0, l.jsx)("br", {}),
                                      " turns emotional as groom stands",
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
                                (0, l.jsx)(r(), {
                                  href: "news-details",
                                  className: "readmore",
                                  children: (0, l.jsx)("i", {
                                    className: "icon fa fa-angle-right",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "news-block-two style-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "news-details",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/news2-3.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "date",
                                  children: "December 14, 2024",
                                }),
                                (0, l.jsx)("h3", {
                                  className: "title",
                                  children: (0, l.jsxs)(r(), {
                                    href: "news-details",
                                    children: [
                                      "Couple's wedding ",
                                      (0, l.jsx)("br", {}),
                                      " turns emotional as groom stands",
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
                                (0, l.jsx)(r(), {
                                  href: "news-details",
                                  className: "readmore",
                                  children: (0, l.jsx)("i", {
                                    className: "icon fa fa-angle-right",
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
        f = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "services-section-three pt-0",
              children: [
                (0, l.jsx)("div", { className: "icon-flowers-9 zoom-one" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "services-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service3-1.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "info-box",
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon flaticon-birthday-girl",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "date",
                                    children: "12. 12. 2024",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text",
                                    children:
                                      "Venue at Lucy Forks, Patriciafur, United States.",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "btn-box",
                                    children: (0, l.jsx)(r(), {
                                      href: "page-rsvp",
                                      className:
                                        "theme-btn btn-style-one green",
                                      children: (0, l.jsx)("span", {
                                        className: "btn-title",
                                        children: "RSVP",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "services-block-three col-lg-4 col-md-6 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service3-2.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "info-box",
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon flaticon-arch",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "date",
                                    children: "12. 12. 2024",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text",
                                    children:
                                      "Venue at Lucy Forks, Patriciafur, United States.",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "btn-box",
                                    children: (0, l.jsx)(r(), {
                                      href: "page-rsvp",
                                      className:
                                        "theme-btn btn-style-one green",
                                      children: (0, l.jsx)("span", {
                                        className: "btn-title",
                                        children: "RSVP",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "services-block-three col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service3-3.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "info-box",
                                children: [
                                  (0, l.jsx)("i", {
                                    className: "icon flaticon-cheers",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "date",
                                    children: "12. 12. 2024",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text",
                                    children:
                                      "Venue at Lucy Forks, Patriciafur, United States.",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "btn-box",
                                    children: (0, l.jsx)(r(), {
                                      href: "page-rsvp",
                                      className:
                                        "theme-btn btn-style-one green",
                                      children: (0, l.jsx)("span", {
                                        className: "btn-title",
                                        children: "RSVP",
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
        u = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "story-section pull-down",
              children: [
                (0, l.jsxs)("div", {
                  className: "anim-icons full-width",
                  children: [
                    (0, l.jsx)("span", {
                      className: "icon icon-flowers-10 bounce-y",
                    }),
                    (0, l.jsx)("span", {
                      className: "icon icon-flowers-11 bounce-y wow",
                      "data-wow-delay": "3s",
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title style-three text-center",
                      children: [
                        (0, l.jsx)("span", {
                          className: "icon icon-green-heart",
                        }),
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "Our Story",
                        }),
                        (0, l.jsx)("h2", { children: "Sweet love Story" }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "row",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "column col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft",
                          children: [
                            (0, l.jsx)("div", {
                              className: "story-block",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "date",
                                      children: "December 23, 2023",
                                    }),
                                    (0, l.jsxs)("h4", {
                                      className: "title",
                                      children: [
                                        "First Time ",
                                        (0, l.jsx)("br", {}),
                                        " We Meet",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", { className: "icon-heart-4" }),
                            (0, l.jsx)("div", {
                              className: "story-block",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "date",
                                      children: "December 23, 2023",
                                    }),
                                    (0, l.jsxs)("h4", {
                                      className: "title",
                                      children: [
                                        "Our First ",
                                        (0, l.jsx)("br", {}),
                                        " Date",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "column col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInRight order-xl-3",
                          children: [
                            (0, l.jsx)("div", {
                              className: "story-block ",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "date",
                                      children: "December 23, 2023",
                                    }),
                                    (0, l.jsxs)("h4", {
                                      className: "title",
                                      children: [
                                        "She said ",
                                        (0, l.jsx)("br", {}),
                                        " yes",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, l.jsx)("div", { className: "icon-heart-4" }),
                            (0, l.jsx)("div", {
                              className: "story-block ",
                              children: (0, l.jsx)("div", {
                                className: "inner-box",
                                children: (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "date",
                                      children: "December 23, 2023",
                                    }),
                                    (0, l.jsxs)("h4", {
                                      className: "title",
                                      children: [
                                        "Get love ",
                                        (0, l.jsx)("br", {}),
                                        "married",
                                      ],
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "From the vibrant flowers and trees to the gently flowing streams, this park provides the perfect backdrop.",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "image-column col-xl-6 col-lg-12 col-md-12 col-sm-12 wow fadeInUp",
                          children: (0, l.jsxs)(d.tq, {
                            slidesPerView: 1,
                            spaceBetween: 0,
                            autoplay: { delay: 2e3, disableOnInteraction: !1 },
                            pagination: { clickable: !0 },
                            modules: [m.pt, m.W_, m.tl],
                            className: "single-item-carousel",
                            children: [
                              (0, l.jsx)(d.o5, {
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: "/images/resource/story1-1.png",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)(d.o5, {
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: "/images/resource/story1-2.png",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)(d.o5, {
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: "/images/resource/story1-1.png",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsx)(d.o5, {
                                children: (0, l.jsx)("div", {
                                  className: "image-box",
                                  children: (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: "/images/resource/story1-2.png",
                                      alt: "Image",
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
              ],
            }),
          });
      let w = {
        modules: [m.pt, m.tl, m.W_],
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
      var p = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "team-section-three pt-0",
            children: (0, l.jsxs)("div", {
              className: "auto-container",
              children: [
                (0, l.jsxs)("div", {
                  className: "sec-title style-three text-center",
                  children: [
                    (0, l.jsx)("span", { className: "icon icon-green-heart" }),
                    (0, l.jsx)("span", {
                      className: "sub-title",
                      children: "Dear Friends and Family",
                    }),
                    (0, l.jsx)("h2", { children: "We are getting married" }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "team-block-outer wow fadeInLeft",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "image-column col-xl-4 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsx)("div", {
                          className: "inner-column",
                          children: (0, l.jsx)("div", {
                            className: "bride-image",
                            children: (0, l.jsx)("div", {
                              className: "inner-box",
                              children: (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image overlay-anim",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team3-1.jpg",
                                      alt: "",
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-leaves-8 wow zoom-two",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-leaves-9 wow zoom-two wow",
                                    "data-wow-delay": "3s",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "content-column col-xl-8 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsxs)("div", {
                          className: "inner-column",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "team-info-box",
                              children: [
                                (0, l.jsxs)("h2", {
                                  className: "name",
                                  children: [
                                    "Olivia ",
                                    (0, l.jsx)("span", {
                                      className: "designation",
                                      children: "The Bride",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.",
                                }),
                                (0, l.jsxs)("ul", {
                                  className: "social-icon-two",
                                  children: [
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
                                        href: "#",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fab fa-facebook",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
                                        href: "#",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fab fa-google",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
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
                            (0, l.jsx)("div", {
                              className: "carousel-outer",
                              children: (0, l.jsxs)(d.tq, {
                                ...w,
                                className:
                                  "team-carousel owl-carousel owl-theme disable-navs disable-dots",
                                children: [
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-2.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Willimes Dom",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Bridesmaid",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-3.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Jessica Jess",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Bridesmaid",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-4.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Moniqa Ron",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Bridesmaid",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-2.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Willimes Dom",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Bridesmaid",
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
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "team-block-outer style-two mb-0 wow fadeInRight",
                  "data-wow-delay": "300ms",
                  children: (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "image-column col-xl-4 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsx)("div", {
                          className: "inner-column",
                          children: (0, l.jsx)("div", {
                            className: "groom-image",
                            children: (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/team3-8.jpg",
                                    alt: "",
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-8",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-9",
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "content-column col-xl-8 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsxs)("div", {
                          className: "inner-column",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "team-info-box",
                              children: [
                                (0, l.jsxs)("h2", {
                                  className: "name",
                                  children: [
                                    "Peter ",
                                    (0, l.jsx)("span", {
                                      className: "designation",
                                      children: "The Groom",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "My name is Thomas, and I'm filled with joy and excitement to be marrying the love of my life. I feel overwhelmed with gratitude.",
                                }),
                                (0, l.jsxs)("ul", {
                                  className: "social-icon-two",
                                  children: [
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
                                        href: "#",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fab fa-facebook",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
                                        href: "#",
                                        children: (0, l.jsx)("i", {
                                          className: "icon fab fa-google",
                                        }),
                                      }),
                                    }),
                                    (0, l.jsx)("li", {
                                      children: (0, l.jsx)(r(), {
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
                            (0, l.jsx)("div", {
                              className: "carousel-outer",
                              children: (0, l.jsxs)(d.tq, {
                                ...w,
                                className:
                                  "team-carousel owl-carousel owl-theme disable-navs disable-dots",
                                children: [
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-5.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Thomas Willime",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Groomsmen",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-6.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Romin Noman",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Groomsmen",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-7.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Qlark Robik",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Groomsmen",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  (0, l.jsx)(d.o5, {
                                    children: (0, l.jsx)("div", {
                                      className: "team-block-three",
                                      children: (0, l.jsxs)("div", {
                                        className: "inner-box",
                                        children: [
                                          (0, l.jsxs)("div", {
                                            className: "image-box",
                                            children: [
                                              (0, l.jsx)("figure", {
                                                className: "image",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: (0, l.jsx)("img", {
                                                    src: "images/resource/team3-5.jpg",
                                                    alt: "Image",
                                                  }),
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "team3-frame",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsxs)("div", {
                                            className: "info-box",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "name",
                                                children: (0, l.jsx)(r(), {
                                                  href: "page-bride-and-groom",
                                                  children: "Thomas Willime",
                                                }),
                                              }),
                                              (0, l.jsx)("div", {
                                                className: "designation",
                                                children: "Groomsmen",
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
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      let y = {
        modules: [m.pt, m.tl, m.W_],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
      };
      var I = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "testimonial-section-two pt-0",
            children: (0, l.jsxs)("div", {
              className: "auto-container",
              children: [
                (0, l.jsxs)("div", {
                  className: "sec-title style-three",
                  children: [
                    (0, l.jsx)("span", {
                      className: "sub-title",
                      children: "Client’s Reviews",
                    }),
                    (0, l.jsxs)("h2", {
                      children: [
                        "thank you for the ",
                        (0, l.jsx)("br", {}),
                        " best wishes",
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)(d.tq, {
                  ...y,
                  className:
                    "single-item-carousel owl-carousel owl-theme default-navs default-dots",
                  children: [
                    (0, l.jsx)(d.o5, {
                      children: (0, l.jsx)("div", {
                        className: "testimonial-block-two",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/testi2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                                (0, l.jsx)("div", { className: "testi-frame" }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "name",
                                  children: [
                                    "Rose Marko ",
                                    (0, l.jsx)("span", {
                                      className: "designation",
                                      children: "Bride best friend, Aunt",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, l.jsx)(d.o5, {
                      children: (0, l.jsx)("div", {
                        className: "testimonial-block-two",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/testi2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                                (0, l.jsx)("div", { className: "testi-frame" }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "text",
                                  children:
                                    "“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "name",
                                  children: [
                                    "Rose Marko ",
                                    (0, l.jsx)("span", {
                                      className: "designation",
                                      children: "Bride best friend, Aunt",
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
          }),
        });
      function k() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(i.Z, {
            headerStyle: 3,
            footerStyle: 3,
            children: [
              (0, l.jsx)(n, {}),
              (0, l.jsx)(f, {}),
              (0, l.jsx)(p, {}),
              (0, l.jsx)(u, {}),
              (0, l.jsx)(j, {}),
              (0, l.jsx)(g, {}),
              (0, l.jsx)(I, {}),
              (0, l.jsx)(t, {}),
              (0, l.jsx)(x, {}),
              (0, l.jsx)(b, {}),
              (0, l.jsx)(v, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [430, 523, 888, 774, 179], function () {
      return e((e.s = 7194));
    }),
      (_N_E = e.O());
  },
]);
