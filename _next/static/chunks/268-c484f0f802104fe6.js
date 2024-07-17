"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [268],
  {
    3798: function (e, s, a) {
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
    200: function (e, s, a) {
      var l = a(5893);
      s.Z = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("section", {
            className: "banner-section",
            children: [
              (0, l.jsx)("div", {
                className: "bg bg-pattern-1 wow fadeIn",
                "data-wow-delay": "1500ms",
              }),
              (0, l.jsx)("div", {
                className: "auto-container",
                children: (0, l.jsx)("div", {
                  className: "row",
                  children: (0, l.jsxs)("div", {
                    className: "content-box",
                    children: [
                      (0, l.jsx)("div", {
                        className: "date wow fadeInUp",
                        children: "December 23, 2023 - — Bali, Indonesia",
                      }),
                      (0, l.jsxs)("div", {
                        className: "name wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: [
                          "Jessica",
                          (0, l.jsx)("span", { className: "icon-heart" }),
                          "Roman",
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "text wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: [
                          "We would love to meet up and chat about how we can ",
                          (0, l.jsx)("br", {}),
                          " make your dram wedding happen!",
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
    },
    5912: function (e, s, a) {
      var l = a(5893);
      a(7294);
      var i = a(3798);
      s.Z = () => {
        let e = new Date();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "countdown-section pt-0",
            children: (0, l.jsxs)("div", {
              className: "auto-container",
              children: [
                (0, l.jsx)("div", {
                  className: "content-box wow fadeInUp",
                  children: (0, l.jsxs)("div", {
                    className: "inner-column",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "image-box",
                        children: [
                          (0, l.jsx)("figure", {
                            className: "image",
                            children: (0, l.jsx)("img", {
                              src: "images/resource/countdown-1.jpg",
                              alt: "",
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "icon-box",
                            children: (0, l.jsx)("div", {
                              className: "icon-flowers-1",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "caption-box",
                        children: [
                          (0, l.jsx)("div", {
                            className: "text",
                            children: "Missing Days to Our Wedding",
                          }),
                          (0, l.jsx)("span", { className: "icon-divider" }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "time-counter wow fadeInUp",
                  children: (0, l.jsx)(i.Z, {
                    endDateTime: e.setDate(e.getDate() + 55),
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    4276: function (e, s, a) {
      var l = a(5893),
        i = a(1664),
        c = a.n(i);
      s.Z = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "gallery-section",
            children: (0, l.jsx)("div", {
              className: "auto-container",
              children: (0, l.jsxs)("div", {
                className: "outer-box",
                children: [
                  (0, l.jsx)("div", { className: "bg bg-pattern-2" }),
                  (0, l.jsxs)("div", {
                    className: "sec-title light text-center wow fadeInUp",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Wedding Gallery",
                      }),
                      (0, l.jsx)("h2", { children: "Memories" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "images-box",
                    children: [
                      (0, l.jsx)("figure", {
                        className: "image image-1 wow zoomIn",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-1.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-1.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-2 wow zoomIn",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-2.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-2.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-3 wow zoomIn",
                        "data-wow-delay": "900ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-3.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-3.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-4 wow zoomIn",
                        "data-wow-delay": "1200ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-4.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-4.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-5 wow zoomIn",
                        "data-wow-delay": "1500ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-5.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-5.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-6 wow zoomIn",
                        "data-wow-delay": "1800ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-6.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-6.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                      (0, l.jsx)("figure", {
                        className: "image image-7 wow zoomIn",
                        "data-wow-delay": "2100ms",
                        children: (0, l.jsx)(c(), {
                          href: "images/resource/gallery1-7.jpg",
                          className: "lightbox-image",
                          "data-fancybox": "gallery",
                          children: (0, l.jsx)("img", {
                            src: "images/resource/gallery1-7.jpg",
                            alt: "Image",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
    },
    9286: function (e, s, a) {
      var l = a(5893),
        i = a(1664),
        c = a.n(i),
        r = a(2261),
        n = a(9304);
      let d = {
        modules: [n.pt, n.tl, n.W_],
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
      s.Z = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "gallery-section-two pt-0",
            children: (0, l.jsxs)("div", {
              className: "auto-container",
              children: [
                (0, l.jsx)("h3", {
                  className: "title",
                  children: "Follow @domain.com",
                }),
                (0, l.jsxs)(r.tq, {
                  ...d,
                  className:
                    "gallery-carousel owl-carousel owl-theme disable-navs",
                  children: [
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-2.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-3.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-4.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-5.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-6.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
                    (0, l.jsx)(r.o5, {
                      children: (0, l.jsx)("div", {
                        className: "gallery-block-two",
                        children: (0, l.jsx)("div", {
                          className: "inner-box",
                          children: (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(c(), {
                                  href: "page-gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery2-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "overlay",
                                children: (0, l.jsx)(c(), {
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
        });
    },
    7334: function (e, s, a) {
      var l = a(5893),
        i = a(1664),
        c = a.n(i);
      s.Z = () =>
        (0, l.jsx)(l.Fragment, {
          children: (0, l.jsx)("section", {
            className: "services-section",
            children: (0, l.jsxs)("div", {
              className: "auto-container",
              children: [
                (0, l.jsxs)("div", {
                  className: "sec-title text-center",
                  children: [
                    (0, l.jsx)("div", { className: "icon-divider" }),
                    (0, l.jsx)("span", {
                      className: "sub-title",
                      children: "Wedding arrangements",
                    }),
                    (0, l.jsx)("h2", { children: "Organization" }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", { className: "frame" }),
                          (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service1-1.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsx)("span", { className: "icon-shape" }),
                              (0, l.jsx)("i", {
                                className: "icon flaticon-wedding-arch",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "title",
                                children: (0, l.jsx)(c(), {
                                  href: "page-events",
                                  children: "The Reception",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "date",
                                children: "December 23, 2024 - Sunday",
                              }),
                              (0, l.jsx)("div", {
                                className: "time",
                                children: "2:00 PM – 3:30 PM",
                              }),
                              (0, l.jsx)("span", {
                                className: "icon-divider-3",
                              }),
                              (0, l.jsxs)("div", {
                                className: "address",
                                children: [
                                  "Ironic Town gnette,19 West ",
                                  (0, l.jsx)("br", {}),
                                  " 21th Str. NY",
                                ],
                              }),
                              (0, l.jsx)(c(), {
                                href: "tel:+1843-853-1810",
                                className: "phone",
                                children: "+1 843-853-1810",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      "data-wow-delay": "300ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", { className: "frame" }),
                          (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service1-2.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsx)("span", { className: "icon-shape" }),
                              (0, l.jsx)("i", {
                                className: "icon flaticon-marriage",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "title",
                                children: (0, l.jsx)(c(), {
                                  href: "page-events",
                                  children: "The Ceremony",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "date",
                                children: "December 23, 2024 - Sunday",
                              }),
                              (0, l.jsx)("div", {
                                className: "time",
                                children: "2:00 PM – 3:30 PM",
                              }),
                              (0, l.jsx)("span", {
                                className: "icon-divider-3",
                              }),
                              (0, l.jsxs)("div", {
                                className: "address",
                                children: [
                                  "Ironic Town gnette,19 West ",
                                  (0, l.jsx)("br", {}),
                                  " 21th Str. NY",
                                ],
                              }),
                              (0, l.jsx)(c(), {
                                href: "tel:+1843-853-1810",
                                className: "phone",
                                children: "+1 843-853-1810",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "services-block col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                      "data-wow-delay": "600ms",
                      children: (0, l.jsxs)("div", {
                        className: "inner-box",
                        children: [
                          (0, l.jsx)("div", { className: "frame" }),
                          (0, l.jsxs)("div", {
                            className: "image-box",
                            children: [
                              (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)("img", {
                                  src: "images/resource/service1-3.jpg",
                                  alt: "Image",
                                }),
                              }),
                              (0, l.jsx)("span", { className: "icon-shape" }),
                              (0, l.jsx)("i", {
                                className: "icon flaticon-musical-notes",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "content-box",
                            children: [
                              (0, l.jsx)("h6", {
                                className: "title",
                                children: (0, l.jsx)(c(), {
                                  href: "page-events",
                                  children: "Music Party",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "date",
                                children: "December 23, 2024 - Sunday",
                              }),
                              (0, l.jsx)("div", {
                                className: "time",
                                children: "2:00 PM – 3:30 PM",
                              }),
                              (0, l.jsx)("span", {
                                className: "icon-divider-3",
                              }),
                              (0, l.jsxs)("div", {
                                className: "address",
                                children: [
                                  "Ironic Town gnette,19 West ",
                                  (0, l.jsx)("br", {}),
                                  " 21th Str. NY",
                                ],
                              }),
                              (0, l.jsx)(c(), {
                                href: "tel:+1843-853-1810",
                                className: "phone",
                                children: "+1 843-853-1810",
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
        });
    },
  },
]);
