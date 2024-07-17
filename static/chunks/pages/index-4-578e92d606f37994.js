(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [359],
  {
    5593: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/index-4",
        function () {
          return a(7834);
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
        let n = Date.now(),
          r = c(new Date(e.endDateTime).getTime() - n);
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("div", {
            className: "time-countdown",
            children: [
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", { className: "count", children: r.days }),
                  (0, l.jsx)("span", { className: "title", children: "Days" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", { className: "count", children: r.hours }),
                  (0, l.jsx)("span", { className: "title", children: "Hours" }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "counter-column",
                children: [
                  (0, l.jsx)("span", {
                    className: "count",
                    children: r.minutes,
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
                    children: r.seconds,
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
    7834: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return k;
          },
        });
      var l = a(5893),
        i = a(6523),
        c = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "banner-section-four",
              children: [
                (0, l.jsx)("div", { className: "bg bg-pattern-7" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "content-box",
                    children: [
                      (0, l.jsx)("div", {
                        className: "banner-frame wow fadeIn",
                        "data-wow-delay": "300ms",
                      }),
                      (0, l.jsxs)("div", {
                        className: "date wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: [
                          "Save Our Date ",
                          (0, l.jsx)("br", {}),
                          " ",
                          (0, l.jsx)("strong", { children: "17 . 09 . 24" }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "name wow fadeInUp",
                        "data-wow-delay": "900ms",
                        children: [
                          "Kate",
                          (0, l.jsx)("span", { children: "&" }),
                          "Mike",
                        ],
                      }),
                      (0, l.jsx)("span", {
                        className: "sub-title wow fadeInUp",
                        "data-wow-delay": "1200ms",
                        children: "are getting married",
                      }),
                      (0, l.jsx)("div", {
                        className: "address wow fadeInUp",
                        "data-wow-delay": "1500ms",
                        children: "Borcue Church United State",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        n = a(1664),
        r = a.n(n),
        d = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "clients-section-four pt-0",
              children: [
                (0, l.jsx)("div", { className: "icon-flower-15 bounce-y" }),
                (0, l.jsx)("div", { className: "icon-flower-16 bounce-y" }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title style-four",
                      children: [
                        (0, l.jsx)("span", {
                          className: "sub-title",
                          children: "Thank you for giving",
                        }),
                        (0, l.jsx)("h2", { children: "valuable partner" }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "outer-box wow fadeInUp",
                      children: [
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-1.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-1.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-2.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-3.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-4.png",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "client-block-four",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image",
                                children: (0, l.jsx)(r(), {
                                  href: "page-gift",
                                  children: (0, l.jsx)("img", {
                                    src: "images/clients/2-5.png",
                                    alt: "",
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
        o = a(7294),
        m = a(3798),
        t = () => {
          let e = new Date();
          return (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "countdown-section-four pt-0",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsx)("div", {
                    className: "content-box",
                    children: (0, l.jsx)("div", {
                      className: "inner-box",
                      children: (0, l.jsxs)("div", {
                        className: "caption-box",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "date",
                            children: "October 20th, 2025",
                          }),
                          (0, l.jsxs)("div", {
                            className: "address",
                            children: [
                              "LILOU HOTEL NEW YORK 198 West ",
                              (0, l.jsx)("br", {}),
                              " 27th Street, NY",
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "time-counter",
                    children: (0, l.jsx)(m.Z, {
                      endDateTime: e.setDate(e.getDate() + 55),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        x = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "couple-section-three",
              children: [
                (0, l.jsx)("span", { className: "icon-flowers-12 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "auto-container",
                  children: (0, l.jsxs)("div", {
                    className: "outer-box",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "anim-icons",
                        children: [
                          (0, l.jsx)("div", { className: "icon-flower-13" }),
                          (0, l.jsx)("div", { className: "icon-flower-14" }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "couple-image-block-two col-lg-4 col-md-12 col-sm-12 order-lg-2 wow fadeInUp",
                            children: (0, l.jsx)("div", {
                              className: "inner-box",
                              children: (0, l.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, l.jsx)("figure", {
                                    className: "image",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/couple3-1.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-leaves-14",
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "icon-leaves-15",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "couple-block-three col-lg-4 col-md-6 col-sm-6 wow fadeInleft",
                            "data-wow-delay": "300ms",
                            children: (0, l.jsx)("div", {
                              className: "inner-box",
                              children: (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "The Bride",
                                  }),
                                  (0, l.jsx)("h4", {
                                    className: "name",
                                    children: "Kate Damson",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text",
                                    children: [
                                      "My name is Thomas, and I'm filled ",
                                      (0, l.jsx)("br", {}),
                                      " with joy and excitement to be ",
                                      (0, l.jsx)("br", {}),
                                      " marrying the love of my life. I feel ",
                                      (0, l.jsx)("br", {}),
                                      " overwhelmed with gratitude.",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "couple-block-three style-two col-lg-4 col-md-6 col-sm-6 order-lg-3 wow fadeInRight",
                            "data-wow-delay": "600ms",
                            children: (0, l.jsx)("div", {
                              className: "inner-box",
                              children: (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "designation",
                                    children: "The Groom",
                                  }),
                                  (0, l.jsx)("h4", {
                                    className: "name",
                                    children: "Mike Walker",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text",
                                    children: [
                                      "My name is Thomas, and I'm filled ",
                                      (0, l.jsx)("br", {}),
                                      " with joy and excitement to be ",
                                      (0, l.jsx)("br", {}),
                                      " marrying the love of my life. I feel ",
                                      (0, l.jsx)("br", {}),
                                      " overwhelmed with gratitude.",
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
              ],
            }),
          }),
        h = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "gallery-section-seven",
              children: [
                (0, l.jsx)("div", { className: "icon-leaves-21 bounce-y" }),
                (0, l.jsx)("div", {
                  className: "icon-leaves-22 bounce-y wow",
                  "data-wow-delay": "5s",
                }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsx)("div", {
                      className: "outer-container",
                      children: (0, l.jsxs)("div", {
                        className: "sec-title style-four",
                        children: [
                          (0, l.jsx)("span", {
                            className: "sub-title",
                            children: "some beautiful memories",
                          }),
                          (0, l.jsx)("h2", { children: "Wedding Clicks" }),
                          (0, l.jsxs)(r(), {
                            href: "#",
                            className: "view-all",
                            children: [
                              "View all photos ",
                              (0, l.jsx)("i", {
                                className: "icon fa fa-angle-right",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "row g-0",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-1.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-1.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-2.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-2.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-3.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-3.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-4.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-4.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven style-two col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-5.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-5.jpg",
                                    alt: "Image",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "gallery-block-seven col-lg-4 col-md-6 col-sm-6",
                          children: (0, l.jsx)("div", {
                            className: "inner-box",
                            children: (0, l.jsx)("div", {
                              className: "image-box",
                              children: (0, l.jsx)("figure", {
                                className: "image overlay-anim",
                                children: (0, l.jsx)(r(), {
                                  href: "images/resource/gallery7-6.jpg",
                                  className: "lightbox-image",
                                  "data-fancybox": "gallery",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/gallery7-6.jpg",
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
        j = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "news-section-three pt-0",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-four text-center",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "News & Updates",
                      }),
                      (0, l.jsx)("h2", { children: "Recent Updates" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "column col-xl-6 col-lg-12 col-md-12 col-sm-12",
                        children: (0, l.jsx)("div", {
                          className: "news-block-three wow fadeInUp",
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
                                      src: "images/resource/news3-1.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                }),
                              }),
                              (0, l.jsxs)("div", {
                                className: "content-box",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "category",
                                    children: "Photography",
                                  }),
                                  (0, l.jsx)("h3", {
                                    className: "title",
                                    children: (0, l.jsx)(r(), {
                                      href: "news-details",
                                      children:
                                        "Couple's wedding turns emotional as groom",
                                    }),
                                  }),
                                  (0, l.jsx)("div", {
                                    className: "text",
                                    children:
                                      "I'm filled with joy and excitement to be marrying the love of my life.",
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "author-box",
                                    children: [
                                      (0, l.jsx)("img", {
                                        src: "images/resource/news3-thumb.jpg",
                                        alt: "Image",
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "info-box",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "date",
                                            children: "December 14, 2024",
                                          }),
                                          (0, l.jsx)("h6", {
                                            className: "name",
                                            children: "By Thomas Willimes",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "column col-xl-6 col-lg-12 col-md-12 col-sm-12",
                        children: [
                          (0, l.jsx)("div", {
                            className: "news-block-four wow fadeInUp",
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
                                        src: "images/resource/news3-2.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "category",
                                      children: "Photography",
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(r(), {
                                        href: "news-details",
                                        children:
                                          "10 Most Effective Tips For Handling Wedding",
                                      }),
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-box",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src: "images/resource/news3-thumb.jpg",
                                          alt: "Image",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "info-box",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className: "date",
                                              children: "December 14, 2024",
                                            }),
                                            (0, l.jsx)("h6", {
                                              className: "name",
                                              children: "By Thomas Willimes",
                                            }),
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
                            className: "news-block-four wow fadeInUp",
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
                                        src: "images/resource/news3-3.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "category",
                                      children: "Photography",
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(r(), {
                                        href: "news-details",
                                        children:
                                          "Unique Lehenga Color Combinations We Spotted",
                                      }),
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-box",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src: "images/resource/news3-thumb.jpg",
                                          alt: "Image",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "info-box",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className: "date",
                                              children: "December 14, 2024",
                                            }),
                                            (0, l.jsx)("h6", {
                                              className: "name",
                                              children: "By Thomas Willimes",
                                            }),
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
                            className: "news-block-four wow fadeInUp",
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
                                        src: "images/resource/news3-4.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "category",
                                      children: "Photography",
                                    }),
                                    (0, l.jsx)("h4", {
                                      className: "title",
                                      children: (0, l.jsx)(r(), {
                                        href: "news-details",
                                        children:
                                          "Guide to Your Dream Wedding Day!",
                                      }),
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-box",
                                      children: [
                                        (0, l.jsx)("img", {
                                          src: "images/resource/news3-thumb.jpg",
                                          alt: "Image",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "info-box",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className: "date",
                                              children: "December 14, 2024",
                                            }),
                                            (0, l.jsx)("h6", {
                                              className: "name",
                                              children: "By Thomas Willimes",
                                            }),
                                          ],
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
                      (0, l.jsx)("div", {
                        className: "btn-box text-center",
                        children: (0, l.jsx)(r(), {
                          href: "news-grid",
                          className: "theme-btn btn-style-one",
                          children: (0, l.jsx)("span", {
                            className: "btn-title",
                            children: "View all news",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        g = a(2261),
        N = a(9304);
      let v = {
        modules: [N.pt, N.tl, N.W_],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          1199: { slidesPerView: 2 },
          1350: { slidesPerView: 2 },
        },
      };
      var u = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "story-section-two pt-0",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-four",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Our Story",
                      }),
                      (0, l.jsx)("h2", { children: "Wedding Timeline" }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "carousel-outer",
                    children: (0, l.jsxs)(g.tq, {
                      ...v,
                      className:
                        "two-items-carousel owl-carousel owl-theme default-navs",
                      children: [
                        (0, l.jsx)(g.o5, {
                          children: (0, l.jsx)("div", {
                            className: "story-block-two",
                            children: (0, l.jsxs)("div", {
                              className: "inner-box",
                              children: [
                                (0, l.jsx)("i", {
                                  className: "icon flaticon-wedding-arch",
                                }),
                                (0, l.jsx)("span", {
                                  className: "sub-title",
                                  children: "Wedding",
                                }),
                                (0, l.jsx)("div", {
                                  className: "designation",
                                  children: "Ceremony",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "text",
                                  children: [
                                    "Duis autem vel eum iriure dolor in vulp utate velit esse ",
                                    (0, l.jsx)("br", {}),
                                    " molestie conse quat, vel illum olore eu feugiat Duis aut ",
                                    (0, l.jsx)("br", {}),
                                    " em vel eum iriure dolor in vulp utate.",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/story2-1.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-leaves-16",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)(g.o5, {
                          children: (0, l.jsx)("div", {
                            className: "story-block-two",
                            children: (0, l.jsxs)("div", {
                              className: "inner-box",
                              children: [
                                (0, l.jsx)("i", {
                                  className: "icon flaticon-romantic-dinner",
                                }),
                                (0, l.jsx)("span", {
                                  className: "sub-title",
                                  children: "Wedding",
                                }),
                                (0, l.jsx)("div", {
                                  className: "designation",
                                  children: "Lunch Time",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "text",
                                  children: [
                                    "Duis autem vel eum iriure dolor in vulp utate velit esse ",
                                    (0, l.jsx)("br", {}),
                                    " molestie conse quat, vel illum olore eu feugiat Duis aut ",
                                    (0, l.jsx)("br", {}),
                                    " em vel eum iriure dolor in vulp utate.",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/story2-2.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-leaves-16",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsx)(g.o5, {
                          children: (0, l.jsx)("div", {
                            className: "story-block-two",
                            children: (0, l.jsxs)("div", {
                              className: "inner-box",
                              children: [
                                (0, l.jsx)("i", {
                                  className: "icon flaticon-wedding-arch",
                                }),
                                (0, l.jsx)("span", {
                                  className: "sub-title",
                                  children: "Wedding",
                                }),
                                (0, l.jsx)("div", {
                                  className: "designation",
                                  children: "Ceremony",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "text",
                                  children: [
                                    "Duis autem vel eum iriure dolor in vulp utate velit esse ",
                                    (0, l.jsx)("br", {}),
                                    " molestie conse quat, vel illum olore eu feugiat Duis aut ",
                                    (0, l.jsx)("br", {}),
                                    " em vel eum iriure dolor in vulp utate.",
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "image-box",
                                  children: [
                                    (0, l.jsx)("figure", {
                                      className: "image",
                                      children: (0, l.jsx)("img", {
                                        src: "images/resource/story2-1.jpg",
                                        alt: "Image",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "icon-leaves-16",
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
          }),
        b = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsx)("section", {
              className: "team-section-four",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-four text-center",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Wedding Friends",
                      }),
                      (0, l.jsx)("h2", { children: "The Groomsmen" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-1.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-17",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-18",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "petar Walker",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Groomsmen",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four style-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-2.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-19",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-20",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "Qarlos Robin",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Groomsmen",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-3.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-17",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-18",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "Rokki Ilues",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Groomsmen",
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
            children: (0, l.jsx)("section", {
              className: "team-section-four pt-0",
              children: (0, l.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, l.jsxs)("div", {
                    className: "sec-title style-four text-center",
                    children: [
                      (0, l.jsx)("span", {
                        className: "sub-title",
                        children: "Wedding Friends",
                      }),
                      (0, l.jsx)("h2", { children: "The Bridemaids" }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-4.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-17",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-18",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "Jessica Loran",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Bridemaids",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four style-two col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "300ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-5.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-19",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-20",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "Moniqa Romi",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Bridemaids",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "team-block-four col-lg-4 col-md-12 col-sm-12 wow fadeInUp",
                        "data-wow-delay": "600ms",
                        children: (0, l.jsxs)("div", {
                          className: "inner-box",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "image-box",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image overlay-anim",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: (0, l.jsx)("img", {
                                      src: "images/resource/team4-6.jpg",
                                      alt: "",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-17",
                                }),
                                (0, l.jsx)("div", {
                                  className: "icon-leaves-18",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "content-box",
                              children: [
                                (0, l.jsx)("h6", {
                                  className: "name",
                                  children: (0, l.jsx)(r(), {
                                    href: "page-bride-and-groom",
                                    children: "Biquioo Olive",
                                  }),
                                }),
                                (0, l.jsx)("span", {
                                  className: "designation",
                                  children: "Bridemaids",
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
      let w = {
        modules: [N.pt, N.tl, N.W_],
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
      };
      var p = () =>
          (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("section", {
              className: "testimonial-section-three",
              children: [
                (0, l.jsx)("div", { className: "icon-flower-17 zoom-two" }),
                (0, l.jsx)("div", { className: "icon-flower-18 zoom-two" }),
                (0, l.jsxs)("div", {
                  className: "auto-container",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "sec-title style-four text-center",
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
                    (0, l.jsxs)(g.tq, {
                      ...w,
                      className:
                        "testimonial-carousel-two owl-carousel owl-theme default-navs-two",
                      children: [
                        (0, l.jsx)(g.o5, {
                          children: (0, l.jsx)("div", {
                            className: "testimonial-block-three",
                            children: (0, l.jsxs)("div", {
                              className: "inner-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "testi3-frame",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "icon icon-quote",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for  you and your partner Christin.”",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "name",
                                      children: [
                                        "Rose Marko ",
                                        (0, l.jsx)("br", {}),
                                        " ",
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
                        (0, l.jsx)(g.o5, {
                          children: (0, l.jsx)("div", {
                            className: "testimonial-block-three",
                            children: (0, l.jsxs)("div", {
                              className: "inner-box",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "testi3-frame",
                                }),
                                (0, l.jsxs)("div", {
                                  className: "content-box",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "icon icon-quote",
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "text",
                                      children:
                                        "“ You have always been someone I can count on, and I hope you know that I'll always be here for you. I can't wait to see what the future holds for you and your partner Christin.”",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "name",
                                      children: [
                                        "Rafe Cameron ",
                                        (0, l.jsx)("br", {}),
                                        " ",
                                        (0, l.jsx)("span", {
                                          className: "designation",
                                          children: "Groom best friend, Uncle",
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
          }),
        y = a(1239),
        I = () => {
          let [e, s] = (0, o.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsxs)("section", {
                className: "video-section",
                children: [
                  (0, l.jsx)("div", { className: "icon-leaves-25 bounce-y" }),
                  (0, l.jsx)("div", { className: "icon-leaves-26 bounce-y" }),
                  (0, l.jsxs)("div", {
                    className: "auto-container",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "row",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "content-column col-lg-7 col-md-12 col-sm-12 order-lg-2 wow fadeInUp",
                            children: (0, l.jsx)("div", {
                              className: "inner-column",
                              children: (0, l.jsxs)("div", {
                                className: "sec-title style-four",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "sub-title",
                                    children: "Wedding FRIDAY TO SUNDAY",
                                  }),
                                  (0, l.jsxs)("h2", {
                                    children: [
                                      "Thank you a lot ",
                                      (0, l.jsx)("br", {}),
                                      " for joining us.",
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "text",
                                    children: [
                                      "The villa's garden is truly a work of art, with carefully cultivated ",
                                      (0, l.jsx)("br", {}),
                                      " flower beds and winding paths that invite us to explore the natural ",
                                      (0, l.jsx)("br", {}),
                                      " beauty around us.",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "video-column col-lg-5 col-md-12 col-sm-12 wow fadeInUp",
                            children: (0, l.jsxs)("div", {
                              className: "inner-column",
                              children: [
                                (0, l.jsx)("figure", {
                                  className: "image",
                                  children: (0, l.jsx)("img", {
                                    src: "images/resource/video-1.jpg",
                                    alt: "",
                                  }),
                                }),
                                (0, l.jsx)("a", {
                                  onClick: () => s(!0),
                                  className: "play-btn",
                                  children: (0, l.jsx)("i", {
                                    className: "icon fa fa-play",
                                    "aria-hidden": "true",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "date-box-outer",
                        children: (0, l.jsxs)("div", {
                          className: "event-date-box",
                          children: [
                            (0, l.jsx)("div", {
                              className: "icon-flower-21 zoom-one",
                            }),
                            (0, l.jsx)("div", { className: "icon-line" }),
                            (0, l.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, l.jsx)("div", {
                                  className:
                                    "date-block col-lg-6 col-md-12 col-sm-12",
                                  children: (0, l.jsxs)("div", {
                                    className: "inner-box",
                                    children: [
                                      (0, l.jsx)("h4", {
                                        className: "title",
                                        children: "Official Ceremony",
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "date",
                                        children: [
                                          "Monday, 12 Apr. 2022 ",
                                          (0, l.jsx)("br", {}),
                                          " 1:00 PM – 2:30 PM",
                                        ],
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "address",
                                        children:
                                          "4517 Washington Kentucky 39495",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "date-block col-lg-6 col-md-12 col-sm-12",
                                  children: (0, l.jsxs)("div", {
                                    className: "inner-box",
                                    children: [
                                      (0, l.jsx)("h4", {
                                        className: "title",
                                        children: "Lunch at the villa",
                                      }),
                                      (0, l.jsxs)("div", {
                                        className: "date",
                                        children: [
                                          "Tuesday, 12 Apr. 2022 ",
                                          (0, l.jsx)("br", {}),
                                          " 1:00 PM – 2:30 PM",
                                        ],
                                      }),
                                      (0, l.jsx)("div", {
                                        className: "address",
                                        children:
                                          "4517 Washington Kentucky 39495",
                                      }),
                                    ],
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
      function k() {
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)(i.Z, {
            headerStyle: 4,
            footerStyle: 4,
            children: [
              (0, l.jsx)(c, {}),
              (0, l.jsx)(x, {}),
              (0, l.jsx)(t, {}),
              (0, l.jsx)(u, {}),
              (0, l.jsx)(I, {}),
              (0, l.jsx)(b, {}),
              (0, l.jsx)(f, {}),
              (0, l.jsx)(d, {}),
              (0, l.jsx)(p, {}),
              (0, l.jsx)(h, {}),
              (0, l.jsx)(j, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [430, 239, 523, 888, 774, 179], function () {
      return e((e.s = 5593));
    }),
      (_N_E = e.O());
  },
]);
