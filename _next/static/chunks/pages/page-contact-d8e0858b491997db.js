(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [93],
  {
    6663: function (e, s, l) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/page-contact",
        function () {
          return l(218);
        },
      ]);
    },
    3640: function (e, s, l) {
      "use strict";
      var a = l(5893),
        n = l(1664),
        c = l.n(n);
      l(7294),
        (s.Z = (e) =>
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
                        children: (0, a.jsx)(c(), {
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
    218: function (e, s, l) {
      "use strict";
      l.r(s),
        l.d(s, {
          default: function () {
            return r;
          },
        });
      var a = l(5893),
        n = l(6523),
        c = l(3640),
        i = l(1664),
        t = l.n(i),
        m = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("section", {
                className: "contact-details",
                children: (0, a.jsx)("div", {
                  className: "container pb-80",
                  children: (0, a.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "col-xl-7 col-lg-6",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "sec-title mb-50",
                            children: [
                              (0, a.jsx)("span", {
                                className: "sub-title",
                                children: "Send us email",
                              }),
                              (0, a.jsx)("h3", {
                                children: "Feel free to write",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("form", {
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
                                        className:
                                          "form-control required email",
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
                                  rows: "7",
                                  placeholder: "Enter Message",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className: "mb-5",
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
                                      "theme-btn btn-style-one mb-2 mb-sm-0 me-2",
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
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "col-xl-5 col-lg-6",
                        children: (0, a.jsxs)("div", {
                          className: "contact-details__right",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "sec-title mb-40",
                              children: [
                                (0, a.jsx)("span", {
                                  className: "sub-title",
                                  children: "Need any help?",
                                }),
                                (0, a.jsx)("h3", {
                                  className: "mb-30",
                                  children: "Get in touch with us",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text",
                                  children:
                                    "Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.",
                                }),
                              ],
                            }),
                            (0, a.jsxs)("ul", {
                              className: "list-unstyled contact-details__info",
                              children: [
                                (0, a.jsxs)("li", {
                                  className:
                                    "d-block d-sm-flex align-items-center mt-xs-30",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "icon flex-shrink-0 mb-3 mb-sm-0",
                                      children: [
                                        " ",
                                        (0, a.jsx)("span", {
                                          className: "lnr-icon-phone-plus",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text ml-xs--0",
                                      children: [
                                        (0, a.jsx)("h6", {
                                          children: "Have any question?",
                                        }),
                                        (0, a.jsxs)(t(), {
                                          href: "tel:980089850",
                                          children: [
                                            (0, a.jsx)("span", {
                                              children: "Free",
                                            }),
                                            " +92 (020)-9850",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  className:
                                    "d-block d-sm-flex align-items-center mt-xs-30",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "icon flex-shrink-0 mb-3 mb-sm-0",
                                      children: [
                                        " ",
                                        (0, a.jsx)("span", {
                                          className: "lnr-icon-envelope1",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text ml-xs--0",
                                      children: [
                                        (0, a.jsx)("h6", {
                                          children: "Write email",
                                        }),
                                        (0, a.jsx)(t(), {
                                          href: "mailto:needhelp@company.com",
                                          children: "needhelp@kodesolution.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("li", {
                                  className:
                                    "d-block d-sm-flex align-items-center mt-xs-30",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "icon flex-shrink-0 mb-3 mb-sm-0",
                                      children: [
                                        " ",
                                        (0, a.jsx)("span", {
                                          className: "lnr-icon-location",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text ml-xs--0",
                                      children: [
                                        (0, a.jsx)("h6", {
                                          children: "Visit anytime",
                                        }),
                                        (0, a.jsx)("span", {
                                          children:
                                            "66 broklyn golden street. New York",
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
                }),
              }),
              (0, a.jsx)("section", {
                children: (0, a.jsx)("div", {
                  className: "container-fluid p-0",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("iframe", {
                      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843149788316!2d144.9537131159042!3d-37.81714274201087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1583760510840!5m2!1sbn!2sbd",
                      "data-tm-width": "100%",
                      height: "500",
                      frameborder: "0",
                      allowfullscreen: "",
                    }),
                  }),
                }),
              }),
            ],
          });
      function r() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)(n.Z, {
            headerStyle: 1,
            footerStyle: 3,
            children: [
              (0, a.jsx)(c.Z, { pageName: "Contact Us" }),
              (0, a.jsx)(m, {}),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [430, 523, 888, 774, 179], function () {
      return e((e.s = 6663));
    }),
      (_N_E = e.O());
  },
]);
