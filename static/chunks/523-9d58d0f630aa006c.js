"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [523],
  {
    6523: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return I;
        },
      });
      var i = l(5893),
        a = l(7294);
      function c() {
        let [e, s] = (0, a.useState)("false");
        (0, a.useEffect)(
          () => (
            window.addEventListener("scroll", l),
            () => {
              window.removeEventListener("scroll", l);
            }
          )
        );
        let l = () => {
          window.scrollY > 100 && !e
            ? s(!0)
            : window.scrollY < 100 && e && s(!1);
        };
        return (0, i.jsx)(i.Fragment, {
          children:
            e &&
            (0, i.jsx)("a", {
              className: "scroll-to-top scroll-to-target ".concat(
                e && "d-block"
              ),
              href: "#top",
              children: (0, i.jsx)("span", { className: "fa fa-angle-up" }),
            }),
        });
      }
      function n(e) {
        let { breadcrumbTitle: s } = e;
        return (0, i.jsx)(i.Fragment, {});
      }
      var r = l(1664),
        d = l.n(r);
      function o() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            className: "main-footer footer-style-one",
            children: [
              (0, i.jsx)("div", { className: "bg bg-pattern-3" }),
              (0, i.jsx)("div", {
                className: "footer-upper",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "outer-box",
                    children: [
                      (0, i.jsx)("div", {
                        className: "upper-left",
                        children: (0, i.jsx)("div", {
                          className: "logo",
                          children: (0, i.jsx)("img", {
                            src: "images/logo.png",
                            alt: "Logo",
                            title: "Lav Weds Sheetal",
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "upper-center",
                        children: (0, i.jsxs)("div", {
                          className: "text",
                          children: [
                            "Semper libero, sit amet blandit vel, rhoncus venenatis ",
                            (0, i.jsx)("br", {}),
                            " luctus pulvinar, hendrerit id, lorem.",
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "upper-right",
                        children: (0, i.jsxs)("ul", {
                          className: "social-icon-one",
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "fab fa-facebook",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "fab fa-google",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "fab fa-twitter",
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
              (0, i.jsx)("div", {
                className: "widgets-section",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-4 col-lg-4 col-md-5 col-sm-12",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget contact-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Contact Us",
                            }),
                            (0, i.jsx)("div", {
                              className: "widget-content",
                              children: (0, i.jsxs)("ul", {
                                className: "contact-list light",
                                children: [
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon far fa-envelope",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "username@domain.com",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon far fa-mobile",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children:
                                          "+(123) 456 - 7890 - 456 - 7890",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon far fa-map-marker-alt",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "Street New York",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-8 col-lg-8 col-md-7 col-sm-12",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget newsletter-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Sign up to Our Newsletter",
                            }),
                            (0, i.jsxs)("div", {
                              className: "widgets-content",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children:
                                    "Receive fresh blog content and invites to our webinars.",
                                }),
                                (0, i.jsx)("div", {
                                  className: "newsletter-form-one",
                                  children: (0, i.jsx)("form", {
                                    method: "post",
                                    action: "#",
                                    children: (0, i.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        (0, i.jsx)("input", {
                                          type: "email",
                                          name: "email",
                                          className: "email",
                                          placeholder: "Enter your email....",
                                          required: !0,
                                        }),
                                        (0, i.jsx)("button", {
                                          type: "button",
                                          className:
                                            "theme-btn btn-style-one hover-light",
                                          children: (0, i.jsx)("span", {
                                            className: "btn-title",
                                            children: "Subscribe",
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
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "footer-bottom",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsx)("div", {
                    className: "copyright-text",
                    children:
                      "Copyright \xa9 Vendola kodesolution . All rights reserved.",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function h() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            className: "main-footer footer-style-two",
            children: [
              (0, i.jsx)("div", { className: "icon-flowers-8" }),
              (0, i.jsx)("div", { className: "icon-flowers-8 style-two" }),
              (0, i.jsx)("div", { className: "icon-flower-24" }),
              (0, i.jsx)("div", {
                className: "widgets-section",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-6 col-lg-4 col-md-6 col-sm-12 order-xl-1",
                        children: (0, i.jsx)("div", {
                          className: "footer-widget about-widget",
                          children: (0, i.jsxs)("div", {
                            className: "widget-content",
                            children: [
                              (0, i.jsx)("div", {
                                className: "logo",
                                children: (0, i.jsx)(d(), {
                                  href: "/",
                                  children: (0, i.jsx)("img", {
                                    src: "/images/logo-3.png",
                                    alt: "",
                                    title: "Lav Weds Sheetal",
                                  }),
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "text",
                                children: [
                                  "Semper libero, sit amet blandit vel, rh ",
                                  (0, i.jsx)("br", {}),
                                  " oncus venenatis luctus pulvinar, hend ",
                                  (0, i.jsx)("br", {}),
                                  " rerit id, lorem.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget contact-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Contact Information",
                            }),
                            (0, i.jsx)("div", {
                              className: "widget-content",
                              children: (0, i.jsxs)("ul", {
                                className: "contact-list-two",
                                children: [
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon fa fa-envelope",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "username@domain.com",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon fa fa-mobile",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children:
                                          "+(123) 456 - 7890 - 456 - 7890",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon fa fa-map-marker-alt",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "Street New York",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12 order-lg-2",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget icons-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Social Networking",
                            }),
                            (0, i.jsx)("div", {
                              className: "widgets-content",
                              children: (0, i.jsxs)("ul", {
                                className: "social-icon-one",
                                children: [
                                  (0, i.jsx)("li", {
                                    children: (0, i.jsx)(d(), {
                                      href: "#",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fab fa-facebook-f",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("li", {
                                    children: (0, i.jsx)(d(), {
                                      href: "#",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fab fa-google-plus",
                                      }),
                                    }),
                                  }),
                                  (0, i.jsx)("li", {
                                    children: (0, i.jsx)(d(), {
                                      href: "#",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fab fa-twitter",
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
              }),
              (0, i.jsx)("div", {
                className: "footer-bottom",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsx)("div", {
                    className: "copyright-text",
                    children:
                      "Copyright \xa9 Vendola kodesolution . All rights reserved.",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function x() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            className: "main-footer footer-style-three",
            children: [
              (0, i.jsx)("div", { className: "icon-leaves-12" }),
              (0, i.jsx)("div", { className: "icon-leaves-13" }),
              (0, i.jsx)("div", { className: "icon-bubbles" }),
              (0, i.jsx)("div", {
                className: "widgets-section",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12",
                        children: (0, i.jsx)("div", {
                          className: "footer-widget about-widget",
                          children: (0, i.jsxs)("div", {
                            className: "widget-content",
                            children: [
                              (0, i.jsx)("div", {
                                className: "logo",
                                children: (0, i.jsx)(d(), {
                                  href: "/",
                                  children: (0, i.jsx)("img", {
                                    src: "/images/logo.png",
                                    alt: "",
                                    title: "Lav Weds Sheetal",
                                  }),
                                }),
                              }),
                              (0, i.jsxs)("div", {
                                className: "text",
                                children: [
                                  "Semper libero, sit amet blandit vel, rhoncus ",
                                  (0, i.jsx)("br", {}),
                                  " ven enatis luctus pulvinar, hendrerit id, lore ",
                                  (0, i.jsx)("br", {}),
                                  " m. Semp er libero, sit amet blandit vel.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget contact-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Contact Information",
                            }),
                            (0, i.jsx)("div", {
                              className: "widget-content",
                              children: (0, i.jsxs)("ul", {
                                className: "contact-list-three light",
                                children: [
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon far fa-envelope",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "username@domain.com",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon far fa-mobile",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children:
                                          "+(123) 456 - 7890 - 456 - 7890",
                                      }),
                                    ],
                                  }),
                                  (0, i.jsxs)("li", {
                                    children: [
                                      (0, i.jsx)("i", {
                                        className: "icon fa fa-map-marker-alt",
                                      }),
                                      (0, i.jsx)(d(), {
                                        href: "#",
                                        children: "Street New York",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "footer-column col-xl-4 col-lg-6 col-md-6 col-sm-12",
                        children: (0, i.jsxs)("div", {
                          className: "footer-widget subscribe-widget",
                          children: [
                            (0, i.jsx)("h6", {
                              className: "widget-title",
                              children: "Subscribe Newsletter",
                            }),
                            (0, i.jsxs)("div", {
                              className: "widgets-content",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text",
                                  children:
                                    "Receive fresh blog content and invites to our webinars.",
                                }),
                                (0, i.jsx)("div", {
                                  className: "newsletter-form-two",
                                  children: (0, i.jsx)("form", {
                                    method: "post",
                                    action: "#",
                                    children: (0, i.jsxs)("div", {
                                      className: "form-group",
                                      children: [
                                        (0, i.jsx)("input", {
                                          type: "email",
                                          name: "email",
                                          className: "email",
                                          placeholder: "Enter your email....",
                                          required: "",
                                        }),
                                        (0, i.jsx)("button", {
                                          type: "button",
                                          className: "theme-btn",
                                          children: (0, i.jsx)("i", {
                                            className: "far fa-envelope",
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
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "footer-bottom",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "outer-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "copyright-text",
                        children:
                          "Copyright \xa9 Vendola kodesolution . All rights reserved.",
                      }),
                      (0, i.jsx)("div", {
                        className: "icons-box",
                        children: (0, i.jsxs)("ul", {
                          className: "social-icon-one",
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-facebook-f",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-google",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-twitter",
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
        });
      }
      function t() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            className: "main-footer footer-style-four",
            children: [
              (0, i.jsxs)("div", {
                className: "bg",
                children: [
                  (0, i.jsx)("div", { className: "icon-bubbles" }),
                  (0, i.jsx)("div", { className: "icon-leave-5 bounce-x" }),
                  (0, i.jsx)("div", { className: "icon-flower-19 bounce-y" }),
                  (0, i.jsx)("div", {
                    className: "icon-flower-20 bounce-y wow",
                    "data-wow-delay": "3s",
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "auto-container",
                children: (0, i.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, i.jsx)("div", {
                      className:
                        "form-column col-lg-5 col-md-12 col-sm-12 order-lg-2",
                      children: (0, i.jsxs)("div", {
                        className: "contact-form-four",
                        children: [
                          (0, i.jsx)("h6", {
                            className: "title",
                            children: "Are you Attending? ",
                          }),
                          (0, i.jsx)("form", {
                            method: "post",
                            action: "get",
                            id: "contact-form",
                            children: (0, i.jsxs)("div", {
                              className: "row",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-6",
                                  children: (0, i.jsxs)("label", {
                                    className: "custom-radio-box",
                                    children: [
                                      "Yes, I will be there",
                                      (0, i.jsx)("input", {
                                        type: "radio",
                                        name: "radio",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "checkmark",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-6",
                                  children: (0, i.jsxs)("label", {
                                    className: "custom-radio-box",
                                    children: [
                                      "Sorry, I can’t come",
                                      (0, i.jsx)("input", {
                                        type: "radio",
                                        name: "radio",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "checkmark",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-12",
                                  children: (0, i.jsx)("div", {
                                    className: "input-outer",
                                    children: (0, i.jsx)("input", {
                                      type: "text",
                                      name: "name",
                                      placeholder: "Complete Name",
                                      required: !0,
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-12",
                                  children: (0, i.jsx)("div", {
                                    className: "input-outer",
                                    children: (0, i.jsx)("input", {
                                      type: "email",
                                      name: "email",
                                      placeholder: "Email Address",
                                      required: !0,
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-12",
                                  children: (0, i.jsx)("div", {
                                    className: "input-outer",
                                    children: (0, i.jsx)("input", {
                                      type: "text",
                                      name: "number",
                                      placeholder: "Number of Guests",
                                      required: !0,
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-12",
                                  children: (0, i.jsx)("div", {
                                    className: "input-outer",
                                    children: (0, i.jsx)("textarea", {
                                      name: "message",
                                      placeholder: "Notes",
                                      required: !0,
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: "form-group col-lg-12",
                                  children: (0, i.jsx)("button", {
                                    className: "theme-btn btn-style-one green",
                                    type: "submit",
                                    name: "submit-form",
                                    children: (0, i.jsx)("span", {
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
                    (0, i.jsx)("div", {
                      className: "content-column col-lg-7 col-md-12 col-sm-12",
                      children: (0, i.jsx)("div", {
                        className: "widgets-section",
                        children: (0, i.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, i.jsx)("div", {
                              className:
                                "footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12",
                              children: (0, i.jsx)("div", {
                                className: "footer-widget about-widget",
                                children: (0, i.jsxs)("div", {
                                  className: "widget-content",
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "logo",
                                      children: (0, i.jsx)(d(), {
                                        href: "/",
                                        children: (0, i.jsx)("img", {
                                          src: "images/logo.png",
                                          alt: "",
                                          title: "Lav Weds Sheetal",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsxs)("div", {
                                      className: "text",
                                      children: [
                                        "Semper libero, sit amet blandit vel, rhoncus ",
                                        (0, i.jsx)("br", {}),
                                        " ven enatis luctus pulvinar, hendrerit id, lore ",
                                        (0, i.jsx)("br", {}),
                                        " m. Semp er libero, sit amet blandit vel.",
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12",
                              children: (0, i.jsxs)("div", {
                                className: "footer-widget contact-widget",
                                children: [
                                  (0, i.jsx)("h6", {
                                    className: "widget-title",
                                    children: "Contact Information",
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "widget-content",
                                    children: (0, i.jsxs)("ul", {
                                      className: "contact-list-three light",
                                      children: [
                                        (0, i.jsxs)("li", {
                                          children: [
                                            (0, i.jsx)("i", {
                                              className: "icon fa fa-envelope",
                                            }),
                                            (0, i.jsx)(d(), {
                                              href: "#",
                                              children: "username@domain.com",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsxs)("li", {
                                          children: [
                                            (0, i.jsx)("i", {
                                              className: "icon fa fa-mobile",
                                            }),
                                            (0, i.jsx)(d(), {
                                              href: "#",
                                              children:
                                                "+(123) 456 - 7890 - 456 - 7890",
                                            }),
                                          ],
                                        }),
                                        (0, i.jsxs)("li", {
                                          children: [
                                            (0, i.jsx)("i", {
                                              className:
                                                "icon fa fa-map-marker-alt",
                                            }),
                                            (0, i.jsx)(d(), {
                                              href: "#",
                                              children: "Street New York",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "footer-column col-xl-12 col-lg-12 col-md-6 col-sm-12",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "copyright-text",
                                  children:
                                    "Copyright \xa9 Vendola kodesolution . All rights reserved.",
                                }),
                                (0, i.jsx)("div", {
                                  className: "icons-box",
                                  children: (0, i.jsxs)("ul", {
                                    className: "social-icon-one",
                                    children: [
                                      (0, i.jsx)("li", {
                                        children: (0, i.jsx)(d(), {
                                          href: "#",
                                          children: (0, i.jsx)("i", {
                                            className: "icon fab fa-facebook-f",
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: (0, i.jsx)(d(), {
                                          href: "#",
                                          children: (0, i.jsx)("i", {
                                            className:
                                              "icon fab fa-google-plus",
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("li", {
                                        children: (0, i.jsx)(d(), {
                                          href: "#",
                                          children: (0, i.jsx)("i", {
                                            className: "icon fab fa-twitter",
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
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var j = l(2261),
        m = l(9304);
      let f = {
        modules: [m.pt, m.tl, m.W_],
        slidesPerView: 6,
        spaceBetween: 0,
        autoplay: { delay: 2500, disableOnInteraction: !1 },
        loop: !0,
        breakpoints: {
          320: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
          767: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          1199: { slidesPerView: 6 },
          1350: { slidesPerView: 6 },
        },
      };
      function N() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("footer", {
            className: "main-footer footer-style-five",
            children: [
              (0, i.jsx)("div", { className: "icon-flowers-3 bounce-y" }),
              (0, i.jsx)("div", { className: "icon-flowers-21" }),
              (0, i.jsxs)("div", {
                className: "auto-container",
                children: [
                  (0, i.jsx)("div", {
                    className: "float-text",
                    children: "Contact",
                  }),
                  (0, i.jsx)("h1", {
                    className: "title",
                    children: "Get in touch",
                  }),
                  (0, i.jsxs)("div", {
                    className: "row",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "form-column col-lg-8 col-md-12 col-sm-12 order-lg-2",
                        children: (0, i.jsxs)("div", {
                          className: "widgets-section",
                          children: [
                            (0, i.jsx)("div", {
                              className: "widget-title",
                              children: "Here's how to plan a wedding",
                            }),
                            (0, i.jsx)("div", {
                              className: "contact-form-five",
                              children: (0, i.jsx)("div", {
                                className: "row",
                                children: (0, i.jsx)("form", {
                                  method: "post",
                                  action: "get",
                                  id: "contact-form",
                                  children: (0, i.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className: "form-group col-lg-6",
                                        children: (0, i.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, i.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Complete Name",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "form-group col-lg-6",
                                        children: (0, i.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, i.jsx)("input", {
                                            type: "email",
                                            name: "email",
                                            placeholder: "Email Address",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, i.jsx)("div", {
                                          className: "input-outer",
                                          children: (0, i.jsx)("textarea", {
                                            name: "message",
                                            placeholder: "Message",
                                            required: !0,
                                          }),
                                        }),
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "form-group col-lg-12",
                                        children: (0, i.jsx)("button", {
                                          className:
                                            "theme-btn btn-style-one orange-bg",
                                          type: "submit",
                                          name: "submit-form",
                                          children: (0, i.jsx)("span", {
                                            className: "btn-title",
                                            children: "Send Message",
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
                      (0, i.jsx)("div", {
                        className:
                          "content-column col-lg-4 col-md-12 col-sm-12",
                        children: (0, i.jsx)("div", {
                          className: "widgets-section",
                          children: (0, i.jsxs)("div", {
                            className: "row",
                            children: [
                              (0, i.jsx)("div", {
                                className: "footer-column",
                                children: (0, i.jsxs)("div", {
                                  className: "footer-widget contact-widget",
                                  children: [
                                    (0, i.jsx)("h6", {
                                      className: "widget-title",
                                      children: "Contact Information",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "widget-content",
                                      children: (0, i.jsxs)("ul", {
                                        className: "contact-list-four",
                                        children: [
                                          (0, i.jsxs)("li", {
                                            children: [
                                              (0, i.jsx)("i", {
                                                className:
                                                  "icon fal fa-envelope",
                                              }),
                                              (0, i.jsx)(d(), {
                                                href: "#",
                                                children: "username@domain.com",
                                              }),
                                            ],
                                          }),
                                          (0, i.jsxs)("li", {
                                            children: [
                                              (0, i.jsx)("i", {
                                                className: "icon fal fa-mobile",
                                              }),
                                              (0, i.jsx)(d(), {
                                                href: "#",
                                                children:
                                                  "+(123) 456 - 7890 - 456 - 7890",
                                              }),
                                            ],
                                          }),
                                          (0, i.jsxs)("li", {
                                            children: [
                                              (0, i.jsx)("i", {
                                                className:
                                                  "icon fa fa-map-marker-alt",
                                              }),
                                              (0, i.jsx)(d(), {
                                                href: "#",
                                                children: "Street New York",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, i.jsx)("div", {
                                className: "footer-column",
                                children: (0, i.jsxs)("div", {
                                  className: "footer-widget links-widget",
                                  children: [
                                    (0, i.jsx)("h6", {
                                      className: "widget-title",
                                      children: "Get Connected",
                                    }),
                                    (0, i.jsx)("div", {
                                      className: "widget-content",
                                      children: (0, i.jsxs)("ul", {
                                        className: "social-icon-two",
                                        children: [
                                          (0, i.jsx)("li", {
                                            children: (0, i.jsx)(d(), {
                                              href: "#",
                                              children: (0, i.jsx)("i", {
                                                className: "fab fa-facebook",
                                              }),
                                            }),
                                          }),
                                          (0, i.jsx)("li", {
                                            children: (0, i.jsx)(d(), {
                                              href: "#",
                                              children: (0, i.jsx)("i", {
                                                className: "fab fa-google-plus",
                                              }),
                                            }),
                                          }),
                                          (0, i.jsx)("li", {
                                            children: (0, i.jsx)(d(), {
                                              href: "#",
                                              children: (0, i.jsx)("i", {
                                                className: "fab fa-twitter",
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
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "footer-lower",
                    children: (0, i.jsxs)(j.tq, {
                      ...f,
                      className:
                        "gallery-carousel-three owl-carousel owl-theme disable-navs",
                      children: [
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-1.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      className: "icon",
                                      children: (0, i.jsx)("i", {
                                        className: "fa fa-expand",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-2.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fa fa-expand",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-3.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fa fa-expand",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-4.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fa fa-expand",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-5.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fa fa-expand",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsx)(j.o5, {
                          children: (0, i.jsx)("div", {
                            className: "gallery-block-two",
                            children: (0, i.jsx)("div", {
                              className: "inner-box",
                              children: (0, i.jsxs)("div", {
                                className: "image-box",
                                children: [
                                  (0, i.jsx)("figure", {
                                    className: "image",
                                    children: (0, i.jsx)("img", {
                                      src: "images/resource/gallery4-6.jpg",
                                      alt: "Image",
                                    }),
                                  }),
                                  (0, i.jsx)("div", {
                                    className: "overlay",
                                    children: (0, i.jsx)(d(), {
                                      href: "page-gallery",
                                      children: (0, i.jsx)("i", {
                                        className: "icon fa fa-expand",
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
              (0, i.jsx)("div", {
                className: "footer-bottom",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsx)("div", {
                    className: "copyright-text",
                    children:
                      "Copyright \xa9 Vendola kodesolution . All rights reserved.",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function g() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("ul", {
            className: "navigation",
            children: [
              (0, i.jsxs)("li", {
                className: "current dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/", children: "Home" }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: "Home page 01",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-2",
                          children: "Home page 02",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-3",
                          children: "Home page 03",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-4",
                          children: "Home page 04",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-5",
                          children: "Home page 05",
                        }),
                      }),
                      (0, i.jsxs)("li", {
                        className: "dropdown",
                        children: [
                          " ",
                          (0, i.jsx)(d(), {
                            href: "#",
                            children: "Invitation",
                          }),
                          (0, i.jsxs)("ul", {
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation",
                                  children: "Style One",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation2",
                                  children: "Style Two",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation3",
                                  children: "Style Three",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation4",
                                  children: "Style Four",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "dropdown-btn",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-angle-down",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "#", children: "About" }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-about",
                          children: "About",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-rsvp",
                          children: "RSVP",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-gift",
                          children: "Gift",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-gallery",
                          children: "Gallery",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-bride-and-groom",
                          children: "Bride & Groom",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-our-story",
                          children: "Our Story",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-our-timeline",
                          children: "Our Timeline",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  " ",
                  (0, i.jsx)(d(), { href: "#", children: "Pages" }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsxs)("li", {
                        className: "dropdown",
                        children: [
                          " ",
                          (0, i.jsx)(d(), { href: "#", children: "Events" }),
                          (0, i.jsxs)("ul", {
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "page-events",
                                  children: "Events",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "page-event-details",
                                  children: "Events Details",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "dropdown-btn",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-angle-down",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        className: "dropdown",
                        children: [
                          " ",
                          (0, i.jsx)(d(), { href: "#", children: "Team" }),
                          (0, i.jsxs)("ul", {
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "page-team",
                                  children: "Team List",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "page-team-details",
                                  children: "Team Details",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "dropdown-btn",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-angle-down",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-pricing",
                          children: "Pricing",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-testimonial",
                          children: "Testimonial",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-faq",
                          children: "FAQ",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "page-error",
                          children: "Page 404",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/news-grid", children: "News" }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/news-grid",
                          children: "News Grid",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/news-details",
                          children: "News Details",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-contact",
                  children: "Contact",
                }),
              }),
            ],
          }),
        });
      }
      function v() {
        let [e, s] = (0, a.useState)({ status: !1, key: "" }),
          l = (l) => {
            e.key === l ? s({ status: !1 }) : s({ status: !0, key: l });
          };
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("ul", {
            className: "navigation clearfix",
            children: [
              (0, i.jsxs)("li", {
                className: "current dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/", children: "Home" }),
                  (0, i.jsxs)("ul", {
                    style: {
                      display: "".concat(1 == e.key ? "block" : "none"),
                    },
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: "Home page 01",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-2",
                          children: "Home page 02",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-3",
                          children: "Home page 03",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-4",
                          children: "Home page 04",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-5",
                          children: "Home page 05",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    onClick: () => l(1),
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-about",
                  children: "About",
                }),
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/page-team", children: "Team" }),
                  (0, i.jsxs)("ul", {
                    style: {
                      display: "".concat(2 == e.key ? "block" : "none"),
                    },
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-team",
                          children: "Team Grid",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-team-details",
                          children: "Team Details",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    onClick: () => l(2),
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), {
                    href: "/page-services",
                    children: "Services",
                  }),
                  (0, i.jsxs)("ul", {
                    style: {
                      display: "".concat(3 == e.key ? "block" : "none"),
                    },
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-services",
                          children: "Services Grid",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-service-details",
                          children: "Service Details",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    onClick: () => l(3),
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), {
                    href: "/page-projects",
                    children: "Projects",
                  }),
                  (0, i.jsxs)("ul", {
                    style: {
                      display: "".concat(4 == e.key ? "block" : "none"),
                    },
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-projects",
                          children: "Projects Grid",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/page-project-details",
                          children: "Project Details",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    onClick: () => l(4),
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("li", {
                className: "dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/news-grid", children: "News" }),
                  (0, i.jsxs)("ul", {
                    style: {
                      display: "".concat(5 == e.key ? "block" : "none"),
                    },
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/news-grid",
                          children: "News Grid",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/news-details",
                          children: "News Details",
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "dropdown-btn",
                    onClick: () => l(5),
                    children: (0, i.jsx)("i", {
                      className: "fa fa-angle-down",
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-contact",
                  children: "Contact",
                }),
              }),
            ],
          }),
        });
      }
      function p(e) {
        let {
          scroll: s,
          isMobileMenu: l,
          handleMobileMenu: a,
          isSearch: c,
          handleSearch: n,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: "main-header header-style-one ".concat(
              c ? "moblie-search-active" : ""
            ),
            children: [
              (0, i.jsx)("div", {
                className: "auto-container",
                children: (0, i.jsxs)("div", {
                  className: "main-box",
                  children: [
                    (0, i.jsx)("div", {
                      className: "logo",
                      children: (0, i.jsx)(d(), {
                        href: "/",
                        children: (0, i.jsx)("img", {
                          src: "/images/logo.png",
                          alt: "",
                          title: "Lav Weds Sheetal",
                        }),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "nav-outer",
                      children: [
                        (0, i.jsx)("nav", {
                          className: "nav main-menu",
                          children: (0, i.jsx)(g, {}),
                        }),
                        (0, i.jsxs)("div", {
                          className: "outer-box",
                          children: [
                            (0, i.jsxs)("ul", {
                              className: "social-icon-one",
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "#",
                                    children: (0, i.jsx)("i", {
                                      className: "icon fab fa-facebook",
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "#",
                                    children: (0, i.jsx)("i", {
                                      className: "icon fab fa-google-plus-g",
                                    }),
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "#",
                                    children: (0, i.jsx)("i", {
                                      className: "icon fab fa-twitter",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsxs)("button", {
                              className: "ui-btn ui-btn toggle-hidden-bar",
                              onClick: a,
                              children: [
                                (0, i.jsx)("span", { className: "dot" }),
                                (0, i.jsx)("span", { className: "dot" }),
                                (0, i.jsx)("span", { className: "dot" }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "mobile-nav-toggler",
                              onClick: a,
                              children: (0, i.jsx)("span", {
                                className: "icon lnr-icon-bars",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", { className: "menu-backdrop", onClick: a }),
                  (0, i.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "upper-box",
                        children: [
                          (0, i.jsx)("div", {
                            className: "nav-logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "close-btn",
                            onClick: a,
                            children: (0, i.jsx)("i", {
                              className: "icon fa fa-times",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(v, {}),
                      (0, i.jsxs)("ul", {
                        className: "contact-list-one light",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon lnr-icon-phone-handset",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Call Now",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/tel:+92880098670",
                                  children: "+92 (8800) - 98670",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-envelope1",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/mailto:help@company.com",
                                  children: "help@company.com",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-clock",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "social-links",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-pinterest",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "search-popup",
                children: [
                  (0, i.jsx)("span", {
                    className: "search-back-drop",
                    onClick: n,
                  }),
                  (0, i.jsx)("button", {
                    className: "close-search",
                    onClick: n,
                    children: (0, i.jsx)("span", { className: "fa fa-times" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "search-inner",
                    children: (0, i.jsx)("form", {
                      method: "post",
                      action: "",
                      children: (0, i.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, i.jsx)("input", {
                            type: "search",
                            name: "search-field",
                            placeholder: "Search...",
                            required: !0,
                          }),
                          (0, i.jsx)("button", {
                            type: "submit",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "sticky-header ".concat(
                  s ? "fixed-header animated slideInDown" : ""
                ),
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo-4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "main-menu",
                            children: (0, i.jsx)("div", {
                              className:
                                "navbar-collapse show collapse clearfix",
                              children: (0, i.jsx)(g, {}),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: a,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
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
        });
      }
      function u() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("ul", {
            className: "navigation",
            children: [
              (0, i.jsxs)("li", {
                className: "current dropdown",
                children: [
                  (0, i.jsx)(d(), { href: "/", children: "Home" }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: "Home page 01",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-2",
                          children: "Home page 02",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-3",
                          children: "Home page 03",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-4",
                          children: "Home page 04",
                        }),
                      }),
                      (0, i.jsx)("li", {
                        children: (0, i.jsx)(d(), {
                          href: "/index-5",
                          children: "Home page 05",
                        }),
                      }),
                      (0, i.jsxs)("li", {
                        className: "dropdown",
                        children: [
                          " ",
                          (0, i.jsx)(d(), {
                            href: "#",
                            children: "Invitation",
                          }),
                          (0, i.jsxs)("ul", {
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation",
                                  children: "Style One",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation2",
                                  children: "Style Two",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation3",
                                  children: "Style Three",
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "index-invitation4",
                                  children: "Style Four",
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "dropdown-btn",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-angle-down",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-our-story",
                  children: "Story",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-gallery",
                  children: "Gallery",
                }),
              }),
              (0, i.jsx)("li", {
                className: "logo",
                children: (0, i.jsx)(d(), {
                  href: "/",
                  children: (0, i.jsx)("img", {
                    src: "/images/logo-2.png",
                    alt: "",
                    title: "Lav Weds Sheetal",
                  }),
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-our-timeline",
                  children: "Timeline",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/news-grid",
                  children: "News",
                }),
              }),
              (0, i.jsx)("li", {
                children: (0, i.jsx)(d(), {
                  href: "/page-rsvp",
                  children: "RSVP",
                }),
              }),
            ],
          }),
        });
      }
      function b(e) {
        let {
          scroll: s,
          isSearch: l,
          handleSearch: a,
          isMobileMenu: c,
          handleMobileMenu: n,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: "main-header header-style-two ".concat(
              l ? "moblie-search-active" : ""
            ),
            children: [
              (0, i.jsx)("div", {
                className: "main-box",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "nav-outer",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "top-left",
                        children: [
                          (0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo-4.png",
                                alt: "",
                                title: "Lav Weds Sheetal",
                              }),
                            }),
                          }),
                          (0, i.jsxs)("button", {
                            className: "ui-btn ui-btn toggle-hidden-bar",
                            onClick: n,
                            children: [
                              (0, i.jsx)("span", { className: "dot" }),
                              (0, i.jsx)("span", { className: "dot" }),
                              (0, i.jsx)("span", { className: "dot" }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "top-center",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "nav main-menu",
                            children: (0, i.jsx)(u, {}),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "top-right",
                        children: (0, i.jsx)("div", {
                          className: "outer-box",
                          children: (0, i.jsxs)("ul", {
                            className: "social-icon-two",
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-facebook-f",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-google",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-twitter",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", { className: "menu-backdrop", onClick: n }),
                  (0, i.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "upper-box",
                        children: [
                          (0, i.jsx)("div", {
                            className: "nav-logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "close-btn",
                            onClick: n,
                            children: (0, i.jsx)("i", {
                              className: "icon fa fa-times",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(v, {}),
                      (0, i.jsxs)("ul", {
                        className: "contact-list-one",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon lnr-icon-phone-handset",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Call Now",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/tel:+92880098670",
                                  children: "+92 (8800) - 98670",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-envelope1",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/mailto:help@company.com",
                                  children: "help@company.com",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-clock",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "social-links",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-pinterest",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "search-popup",
                children: [
                  (0, i.jsx)("span", {
                    className: "search-back-drop",
                    onClick: a,
                  }),
                  (0, i.jsx)("button", {
                    className: "close-search",
                    onClick: a,
                    children: (0, i.jsx)("span", { className: "fa fa-times" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "search-inner",
                    children: (0, i.jsx)("form", {
                      method: "post",
                      action: "",
                      children: (0, i.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, i.jsx)("input", {
                            type: "search",
                            name: "search-field",
                            placeholder: "Search...",
                            required: !0,
                          }),
                          (0, i.jsx)("button", {
                            type: "submit",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "sticky-header ".concat(
                  s ? "fixed-header animated slideInDown" : ""
                ),
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo-4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "main-menu",
                            children: (0, i.jsx)("div", {
                              className:
                                "navbar-collapse show collapse clearfix",
                              children: (0, i.jsx)(g, {}),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
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
        });
      }
      function w() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("nav", {
            className: "nav main-menu",
            children: (0, i.jsxs)("ul", {
              className: "navigation",
              children: [
                (0, i.jsxs)("li", {
                  className: "current dropdown",
                  children: [
                    (0, i.jsx)(d(), { href: "/", children: "Home" }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index",
                            children: "Home 01",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-2",
                            children: "Home 02",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-3",
                            children: "Home 03",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-4",
                            children: "Home 04",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-5",
                            children: "Home 05",
                          }),
                        }),
                        (0, i.jsxs)("li", {
                          className: "dropdown",
                          children: [
                            " ",
                            (0, i.jsx)(d(), {
                              href: "#",
                              children: "Invitation",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation",
                                    children: "Style One",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation2",
                                    children: "Style Two",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation3",
                                    children: "Style Three",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation4",
                                    children: "Style Four",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "dropdown-btn",
                              children: (0, i.jsx)("i", {
                                className: "fa fa-angle-down",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-our-story",
                    children: "Story",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-gallery",
                    children: "Gallery",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-our-timeline",
                    children: "Timeline",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "news-grid",
                    children: "News",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-rsvp",
                    children: "RSVP",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function y(e) {
        let {
          scroll: s,
          isSearch: l,
          handleSearch: a,
          isMobileMenu: c,
          handleMobileMenu: n,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: "main-header header-style-three ".concat(
              l ? "moblie-search-active" : ""
            ),
            children: [
              (0, i.jsx)("div", {
                className: "header-lower",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "main-box",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "",
                            title: "Lav Weds Sheetal",
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "nav-outer",
                        children: (0, i.jsx)("nav", {
                          className: "nav main-menu",
                          children: (0, i.jsx)(w, {}),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "outer-box",
                        children: [
                          (0, i.jsxs)("button", {
                            className: "ui-btn ui-btn toggle-hidden-bar",
                            onClick: n,
                            children: [
                              (0, i.jsx)("span", { className: "dot" }),
                              (0, i.jsx)("span", { className: "dot" }),
                              (0, i.jsx)("span", { className: "dot" }),
                            ],
                          }),
                          (0, i.jsxs)("ul", {
                            className: "social-icon-one",
                            children: [
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-facebook-f",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-google-plus",
                                  }),
                                }),
                              }),
                              (0, i.jsx)("li", {
                                children: (0, i.jsx)(d(), {
                                  href: "#",
                                  children: (0, i.jsx)("i", {
                                    className: "icon fab fa-twitter",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", { className: "menu-backdrop", onClick: n }),
                  (0, i.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "upper-box",
                        children: [
                          (0, i.jsx)("div", {
                            className: "nav-logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "close-btn",
                            onClick: n,
                            children: (0, i.jsx)("i", {
                              className: "icon fa fa-times",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(v, {}),
                      (0, i.jsxs)("ul", {
                        className: "contact-list-one",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon lnr-icon-phone-handset",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Call Now",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/tel:+92880098670",
                                  children: "+92 (8800) - 98670",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-envelope1",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/mailto:help@company.com",
                                  children: "help@company.com",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-clock",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "social-links",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-pinterest",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "search-popup",
                children: [
                  (0, i.jsx)("span", {
                    className: "search-back-drop",
                    onClick: a,
                  }),
                  (0, i.jsx)("button", {
                    className: "close-search",
                    onClick: a,
                    children: (0, i.jsx)("span", { className: "fa fa-times" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "search-inner",
                    children: (0, i.jsx)("form", {
                      method: "post",
                      action: "",
                      children: (0, i.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, i.jsx)("input", {
                            type: "search",
                            name: "search-field",
                            placeholder: "Search...",
                            required: !0,
                          }),
                          (0, i.jsx)("button", {
                            type: "submit",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "sticky-header ".concat(
                  s ? "fixed-header animated slideInDown" : ""
                ),
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo-4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "main-menu",
                            children: (0, i.jsx)("div", {
                              className:
                                "navbar-collapse show collapse clearfix",
                              children: (0, i.jsx)(g, {}),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
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
        });
      }
      function k() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("nav", {
            className: "nav main-menu",
            children: (0, i.jsxs)("ul", {
              className: "navigation",
              children: [
                (0, i.jsxs)("li", {
                  className: "current dropdown",
                  children: [
                    (0, i.jsx)(d(), { href: "/", children: "Home" }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "/",
                            children: "Home 01",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-2",
                            children: "Home 02",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-3",
                            children: "Home 03",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-4",
                            children: "Home 04",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-5",
                            children: "Home 05",
                          }),
                        }),
                        (0, i.jsxs)("li", {
                          className: "dropdown",
                          children: [
                            " ",
                            (0, i.jsx)(d(), {
                              href: "#",
                              children: "Invitation",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation",
                                    children: "Style One",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation2",
                                    children: "Style Two",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation3",
                                    children: "Style Three",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation4",
                                    children: "Style Four",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "dropdown-btn",
                              children: (0, i.jsx)("i", {
                                className: "fa fa-angle-down",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-our-story",
                    children: "Story",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "news-grid",
                    children: "News",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-rsvp",
                    children: "RSVP",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function S(e) {
        let {
          scroll: s,
          isSearch: l,
          handleSearch: a,
          isMobileMenu: c,
          handleMobileMenu: n,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: "main-header header-style-four ".concat(
              l ? "moblie-search-active" : ""
            ),
            children: [
              (0, i.jsx)("div", {
                className: "main-box",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsx)("div", {
                    className: "nav-outer",
                    children: (0, i.jsxs)("nav", {
                      className: "nav main-menu",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "top-left",
                          children: [
                            (0, i.jsx)("div", {
                              className: "logo",
                              children: (0, i.jsx)(d(), {
                                href: "/",
                                children: (0, i.jsx)("img", {
                                  src: "/images/logo.png",
                                  alt: "",
                                  title: "Lav Weds Sheetal",
                                }),
                              }),
                            }),
                            (0, i.jsxs)("button", {
                              className: "ui-btn ui-btn toggle-hidden-bar",
                              onClick: n,
                              children: [
                                (0, i.jsx)("span", { className: "dot" }),
                                (0, i.jsx)("span", { className: "dot" }),
                                (0, i.jsx)("span", { className: "dot" }),
                              ],
                            }),
                            (0, i.jsx)(k, {}),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "top-center",
                          children: (0, i.jsx)("div", {
                            className: "logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "images/logo-3.png",
                                alt: "",
                                title: "Lav Weds Sheetal",
                              }),
                            }),
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "top-right",
                          children: [
                            (0, i.jsxs)(d(), {
                              href: "tel:+92(8800)9806",
                              className: "info-btn",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon fal fa-mobile",
                                }),
                                (0, i.jsx)("span", {
                                  children: "Phone No : +1 836 384 493",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "outer-box",
                              children: [
                                (0, i.jsxs)("ul", {
                                  className: "social-icon-two",
                                  children: [
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(d(), {
                                        href: "#",
                                        children: (0, i.jsx)("i", {
                                          className: "icon fab fa-facebook-f",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(d(), {
                                        href: "#",
                                        children: (0, i.jsx)("i", {
                                          className: "icon fab fa-google-plus",
                                        }),
                                      }),
                                    }),
                                    (0, i.jsx)("li", {
                                      children: (0, i.jsx)(d(), {
                                        href: "#",
                                        children: (0, i.jsx)("i", {
                                          className: "icon fab fa-twitter",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("div", {
                                  className: "mobile-nav-toggler",
                                  onClick: n,
                                  children: (0, i.jsx)("span", {
                                    className: "icon lnr-icon-bars",
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
              }),
              (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", { className: "menu-backdrop", onClick: n }),
                  (0, i.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "upper-box",
                        children: [
                          (0, i.jsx)("div", {
                            className: "nav-logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "close-btn",
                            onClick: n,
                            children: (0, i.jsx)("i", {
                              className: "icon fa fa-times",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(v, {}),
                      (0, i.jsxs)("ul", {
                        className: "contact-list-one",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon lnr-icon-phone-handset",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Call Now",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/tel:+92880098670",
                                  children: "+92 (8800) - 98670",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-envelope1",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/mailto:help@company.com",
                                  children: "help@company.com",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-clock",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "social-links",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-pinterest",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "search-popup",
                children: [
                  (0, i.jsx)("span", {
                    className: "search-back-drop",
                    onClick: a,
                  }),
                  (0, i.jsx)("button", {
                    className: "close-search",
                    onClick: a,
                    children: (0, i.jsx)("span", { className: "fa fa-times" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "search-inner",
                    children: (0, i.jsx)("form", {
                      method: "post",
                      action: "",
                      children: (0, i.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, i.jsx)("input", {
                            type: "search",
                            name: "search-field",
                            placeholder: "Search...",
                            required: !0,
                          }),
                          (0, i.jsx)("button", {
                            type: "submit",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "sticky-header ".concat(
                  s ? "fixed-header animated slideInDown" : ""
                ),
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo-4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "main-menu",
                            children: (0, i.jsx)("div", {
                              className:
                                "navbar-collapse show collapse clearfix",
                              children: (0, i.jsx)(g, {}),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
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
        });
      }
      function C() {
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("nav", {
            className: "nav main-menu",
            children: (0, i.jsxs)("ul", {
              className: "navigation",
              children: [
                (0, i.jsxs)("li", {
                  className: "current dropdown",
                  children: [
                    (0, i.jsx)(d(), { href: "/", children: "Home" }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "/",
                            children: "Home 01",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-2",
                            children: "Home 02",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-3",
                            children: "Home 03",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-4",
                            children: "Home 04",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "index-5",
                            children: "Home 05",
                          }),
                        }),
                        (0, i.jsxs)("li", {
                          className: "dropdown",
                          children: [
                            " ",
                            (0, i.jsx)(d(), {
                              href: "#",
                              children: "Invitation",
                            }),
                            (0, i.jsxs)("ul", {
                              children: [
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation",
                                    children: "Style One",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation2",
                                    children: "Style Two",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation3",
                                    children: "Style Three",
                                  }),
                                }),
                                (0, i.jsx)("li", {
                                  children: (0, i.jsx)(d(), {
                                    href: "index-invitation4",
                                    children: "Style Four",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className: "dropdown-btn",
                              children: (0, i.jsx)("i", {
                                className: "fa fa-angle-down",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "dropdown-btn",
                      children: (0, i.jsx)("i", {
                        className: "fa fa-angle-down",
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("li", {
                  className: "dropdown",
                  children: [
                    (0, i.jsx)(d(), { href: "#", children: "About" }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-about",
                            children: "About",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-rsvp",
                            children: "RSVP",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-gift",
                            children: "Gift",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-gallery",
                            children: "Gallery",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-bride-and-groom",
                            children: "Bride & Groom",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-our-story",
                            children: "Our Story",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-our-timeline",
                            children: "Our Timeline",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "dropdown-btn",
                      children: (0, i.jsx)("i", {
                        className: "fa fa-angle-down",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-services",
                    children: "Services",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-pricing",
                    children: "Prices",
                  }),
                }),
                (0, i.jsxs)("li", {
                  className: "dropdown",
                  children: [
                    (0, i.jsx)(d(), { href: "#", children: "News" }),
                    (0, i.jsxs)("ul", {
                      children: [
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-services",
                            children: "Services",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "page-gallery",
                            children: "Gallery",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "news-grid",
                            children: "Blog",
                          }),
                        }),
                        (0, i.jsx)("li", {
                          children: (0, i.jsx)(d(), {
                            href: "news-details",
                            children: "Blog single",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "dropdown-btn",
                      children: (0, i.jsx)("i", {
                        className: "fa fa-angle-down",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)(d(), {
                    href: "page-contact",
                    children: "Contact",
                  }),
                }),
              ],
            }),
          }),
        });
      }
      function H(e) {
        let {
          scroll: s,
          isSearch: l,
          handleSearch: a,
          isMobileMenu: c,
          handleMobileMenu: n,
        } = e;
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsxs)("header", {
            className: "main-header header-style-five ".concat(
              l ? "moblie-search-active" : ""
            ),
            children: [
              (0, i.jsx)("div", {
                className: "auto-container",
                children: (0, i.jsxs)("div", {
                  className: "main-box",
                  children: [
                    (0, i.jsx)("div", {
                      className: "logo",
                      children: (0, i.jsx)(d(), {
                        href: "/",
                        children: (0, i.jsx)("img", {
                          src: "/images/logo-5.png",
                          alt: "",
                          title: "Lav Weds Sheetal",
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "nav-outer",
                      children: (0, i.jsx)("nav", {
                        className: "nav main-menu",
                        children: (0, i.jsx)(C, {}),
                      }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "outer-box",
                      children: [
                        (0, i.jsx)("div", {
                          className: "btn-box",
                          children: (0, i.jsx)(d(), {
                            href: "page-contact",
                            className: "theme-btn btn-style-one orange-bg",
                            children: (0, i.jsx)("span", {
                              className: "btn-title",
                              children: "Book an Appointment",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "mobile-nav-toggler",
                          onClick: n,
                          children: (0, i.jsx)("span", {
                            className: "icon lnr-icon-bars",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: "header-lower",
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "bottom-left",
                        children: (0, i.jsxs)("ul", {
                          className: "list-style-one",
                          children: [
                            (0, i.jsxs)("li", {
                              children: [
                                (0, i.jsx)("i", { className: "fal fa-mobile" }),
                                " Phone No : ",
                                (0, i.jsx)(d(), {
                                  href: "tel:+1-836-384-493",
                                  children: " +1 836 384 493",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("li", {
                              children: [
                                (0, i.jsx)("i", {
                                  className: "fal fa-envelope",
                                }),
                                " Email Address : ",
                                (0, i.jsx)(d(), {
                                  href: "mailto:username@domain.com",
                                  children: "username@domain.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "bottom-right",
                        children: (0, i.jsxs)("ul", {
                          className: "social-icon-two",
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-facebook",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-google-plus",
                                }),
                              }),
                            }),
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)(d(), {
                                href: "#",
                                children: (0, i.jsx)("i", {
                                  className: "icon fab fa-twitter",
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
              (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", { className: "menu-backdrop", onClick: n }),
                  (0, i.jsxs)("nav", {
                    className: "menu-box",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "upper-box",
                        children: [
                          (0, i.jsx)("div", {
                            className: "nav-logo",
                            children: (0, i.jsx)(d(), {
                              href: "/",
                              children: (0, i.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "close-btn",
                            onClick: n,
                            children: (0, i.jsx)("i", {
                              className: "icon fa fa-times",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsx)(v, {}),
                      (0, i.jsxs)("ul", {
                        className: "contact-list-one",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("i", {
                                  className: "icon lnr-icon-phone-handset",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Call Now",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/tel:+92880098670",
                                  children: "+92 (8800) - 98670",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-envelope1",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                (0, i.jsx)(d(), {
                                  href: "/mailto:help@company.com",
                                  children: "help@company.com",
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsxs)("div", {
                              className: "contact-info-box",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "icon lnr-icon-clock",
                                }),
                                (0, i.jsx)("span", {
                                  className: "title",
                                  children: "Send Email",
                                }),
                                "Mon - Sat 8:00 - 6:30, Sunday - CLOSED",
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("ul", {
                        className: "social-links",
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-pinterest",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(d(), {
                              href: "/#",
                              children: (0, i.jsx)("i", {
                                className: "fab fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "search-popup",
                children: [
                  (0, i.jsx)("span", {
                    className: "search-back-drop",
                    onClick: a,
                  }),
                  (0, i.jsx)("button", {
                    className: "close-search",
                    onClick: a,
                    children: (0, i.jsx)("span", { className: "fa fa-times" }),
                  }),
                  (0, i.jsx)("div", {
                    className: "search-inner",
                    children: (0, i.jsx)("form", {
                      method: "post",
                      action: "",
                      children: (0, i.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, i.jsx)("input", {
                            type: "search",
                            name: "search-field",
                            placeholder: "Search...",
                            required: !0,
                          }),
                          (0, i.jsx)("button", {
                            type: "submit",
                            children: (0, i.jsx)("i", {
                              className: "fa fa-search",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "sticky-header ".concat(
                  s ? "fixed-header animated slideInDown" : ""
                ),
                children: (0, i.jsx)("div", {
                  className: "auto-container",
                  children: (0, i.jsxs)("div", {
                    className: "inner-container",
                    children: [
                      (0, i.jsx)("div", {
                        className: "logo",
                        children: (0, i.jsx)(d(), {
                          href: "/",
                          children: (0, i.jsx)("img", {
                            src: "/images/logo-4.png",
                            alt: "",
                          }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "nav-outer",
                        children: [
                          (0, i.jsx)("nav", {
                            className: "main-menu",
                            children: (0, i.jsx)("div", {
                              className:
                                "navbar-collapse show collapse clearfix",
                              children: (0, i.jsx)(g, {}),
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "mobile-nav-toggler",
                            onClick: n,
                            children: (0, i.jsx)("span", {
                              className: "icon lnr-icon-bars",
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
        });
      }
      var M = l(9008),
        E = l.n(M),
        F = (e) => {
          let { headTitle: s } = e;
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)(E(), {
              children: [
                (0, i.jsxs)("title", {
                  children: [
                    " ",
                    s || "Lav Weds Sheetal | Wedding & Planner React Nextjs Template",
                    " ",
                  ],
                }),
                (0, i.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&family=Great+Vibes&display=swap",
                  rel: "stylesheet",
                }),
              ],
            }),
          });
        };
      function I(e) {
        let {
            headerStyle: s,
            footerStyle: r,
            headTitle: d,
            breadcrumbTitle: j,
            children: m,
          } = e,
          [f, g] = (0, a.useState)(0),
          [v, u] = (0, a.useState)(!1),
          w = () => {
            u(!v),
              v
                ? document.body.classList.remove("mobile-menu-visible")
                : document.body.classList.add("mobile-menu-visible");
          },
          [k, C] = (0, a.useState)(!1),
          M = () => C(!k);
        return (
          (0, a.useEffect)(() => {
            document.addEventListener("scroll", () => {
              let e = window.scrollY > 100;
              e !== f && g(e);
            });
            let e = l(5541);
            (window.wow = new e.WOW({ live: !1 })), window.wow.init();
          }, []),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(F, {}),
              (0, i.jsxs)("div", {
                className: "page-wrapper",
                id: "top",
                children: [
                  !s &&
                    (0, i.jsx)(p, {
                      scroll: f,
                      isMobileMenu: v,
                      handleMobileMenu: w,
                      isSearch: k,
                      handleSearch: M,
                    }),
                  1 == s
                    ? (0, i.jsx)(p, {
                        scroll: f,
                        isMobileMenu: v,
                        handleMobileMenu: w,
                        isSearch: k,
                        handleSearch: M,
                      })
                    : null,
                  2 == s
                    ? (0, i.jsx)(b, {
                        scroll: f,
                        isMobileMenu: v,
                        handleMobileMenu: w,
                        isSearch: k,
                        handleSearch: M,
                      })
                    : null,
                  3 == s
                    ? (0, i.jsx)(y, {
                        scroll: f,
                        isMobileMenu: v,
                        handleMobileMenu: w,
                        isSearch: k,
                        handleSearch: M,
                      })
                    : null,
                  4 == s
                    ? (0, i.jsx)(S, {
                        scroll: f,
                        isMobileMenu: v,
                        handleMobileMenu: w,
                        isSearch: k,
                        handleSearch: M,
                      })
                    : null,
                  5 == s
                    ? (0, i.jsx)(H, {
                        scroll: f,
                        isMobileMenu: v,
                        handleMobileMenu: w,
                        isSearch: k,
                        handleSearch: M,
                      })
                    : null,
                  (0, i.jsxs)("main", {
                    className: "main",
                    children: [j && (0, i.jsx)(n, { breadcrumbTitle: j }), m],
                  }),
                  !r && (0, i.jsx)(o, {}),
                  1 == r ? (0, i.jsx)(o, {}) : null,
                  2 == r ? (0, i.jsx)(h, {}) : null,
                  3 == r ? (0, i.jsx)(x, {}) : null,
                  4 == r ? (0, i.jsx)(t, {}) : null,
                  5 == r ? (0, i.jsx)(N, {}) : null,
                ],
              }),
              (0, i.jsx)(c, {}),
            ],
          })
        );
      }
    },
  },
]);
