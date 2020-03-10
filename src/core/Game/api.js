"use strict";
function _defineProperty(t, r, e) {
  return (
    r in t
      ? Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[r] = e),
    t
  );
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
function isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
      !0
    );
  } catch (t) {
    return !1;
  }
}
function _construct(t, r, e) {
  return (_construct = isNativeReflectConstruct()
    ? Reflect.construct
    : function(t, r, e) {
        var n = [null];
        n.push.apply(n, r);
        var o = new (Function.bind.apply(t, n))();
        return e && _setPrototypeOf(o, e.prototype), o;
      }).apply(null, arguments);
}
function _setPrototypeOf(t, r) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function(t, r) {
      return (t.__proto__ = r), t;
    })(t, r);
}
function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var r = 0, e = new Array(t.length); r < t.length; r++) e[r] = t[r];
    return e;
  }
}
function _toArray(t) {
  return _arrayWithHoles(t) || _iterableToArray(t) || _nonIterableRest();
}
function _iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}
function _slicedToArray(t, r) {
  return (
    _arrayWithHoles(t) || _iterableToArrayLimit(t, r) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(t, r) {
  var e = [],
    n = !0,
    o = !1,
    a = void 0;
  try {
    for (
      var i, u = t[Symbol.iterator]();
      !(n = (i = u.next()).done) && (e.push(i.value), !r || e.length !== r);
      n = !0
    );
  } catch (t) {
    (o = !0), (a = t);
  } finally {
    try {
      n || null == u.return || u.return();
    } finally {
      if (o) throw a;
    }
  }
  return e;
}
function _arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}
(Date.unix = function() {
  return Math.floor(Date.now() / 1e3);
}),
  (window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(t) {
      setTimeout(t, 1e3 / 60);
    }),
  (String.prototype.htmlToText = function() {
    return $man("<p>")
      .$html(this)
      .$text();
  }),
  (window.Tools = new (function() {
    var t = this,
      r = function(t) {
        return null === t || void 0 === t;
      };
    (t.rand = function(t, r) {
      return Math.round(Math.random() * (r - t - 1)) + t;
    }),
      (t.log = {
        stackGet: function() {
          return new Error().stack;
        },
        stackShow: function() {
          console.log(t.log.stackGet());
        },
        deprecatedMessageShow: function(r) {
          console.warn(r + "\nin " + t.log.stackGet());
        },
        createPrefixedFn: function() {
          for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
          return function() {
            for (
              var t, e = arguments.length, n = new Array(e), o = 0;
              o < e;
              o++
            )
              n[o] = arguments[o];
            (t = console.log).call.apply(t, [console].concat(r, n));
          };
        }
      });
    var e = new Set([
      "mouseenter",
      "mousemove",
      "mousedown",
      "mouseup",
      "mouseleave",
      "click"
    ]);
    (t.preventMouseEmulation = function(t) {
      return function(r) {
        var n = r.target;
        try {
          clearTimeout(n.$data("prevent-to"));
        } catch (t) {}
        for (
          var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
          i < o;
          i++
        )
          a[i - 1] = arguments[i];
        return e.has(r.type)
          ? 1 !== n.$data("prevent-active")
            ? t.call.apply(t, [this, r].concat(a))
            : void 0
          : (n.$data("prevent-active", 1),
            n.$data(
              "prevent-to",
              setTimeout(function() {
                n.$dataRemove("prevent-active");
              }, 100)
            ),
            t.call.apply(t, [this, r].concat(a)));
      };
    }),
      (t.selectWordCase = function(t, r, e) {
        var n = function(n) {
          return (!0 === e ? t + " " : "") + r[n];
        };
        if (1 === Math.floor((t % 100) / 10)) return n(2);
        switch (t % 10) {
          case 1:
            return n(0);
          case 2:
          case 3:
          case 4:
            return n(1);
          default:
            return n(2);
        }
      }),
      (t.camelToDashed = function(t) {
        return t
          .replace(/(?!^)[A-Z][^A-Z0-9]/g, function(t) {
            return "-" + t;
          })
          .replace(/([a-z0-9])([A-Z])/g, function(t, r, e) {
            return r + "-" + e;
          })
          .toLowerCase();
      }),
      (t.time = new (function() {
        var t = {
          nom: [
            "СЏРЅРІР°СЂСЊ",
            "С„РµРІСЂР°Р»СЊ",
            "РјР°СЂС‚",
            "Р°РїСЂРµР»СЊ",
            "РјР°Р№",
            "РёСЋРЅСЊ",
            "РёСЋР»СЊ",
            "Р°РІРіСѓСЃС‚",
            "СЃРµРЅС‚СЏР±СЂСЊ",
            "РѕРєС‚СЏР±СЂСЊ",
            "РЅРѕСЏР±СЂСЊ",
            "РґРµРєР°Р±СЂСЊ"
          ],
          acc: [
            "СЏРЅРІР°СЂСЏ",
            "С„РµРІСЂР°Р»СЏ",
            "РјР°СЂС‚Р°",
            "Р°РїСЂРµР»СЏ",
            "РјР°СЏ",
            "РёСЋРЅСЏ",
            "РёСЋР»СЏ",
            "Р°РІРіСѓСЃС‚Р°",
            "СЃРµРЅС‚СЏР±СЂСЏ",
            "РѕРєС‚СЏР±СЂСЏ",
            "РЅРѕСЏР±СЂСЏ",
            "РґРµРєР°Р±СЂСЏ"
          ],
          short: [
            "СЏРЅРІ",
            "С„РµРІ",
            "РјР°СЂ",
            "Р°РїСЂ",
            "РјР°Р№",
            "РёСЋРЅ",
            "РёСЋР»",
            "Р°РІРі",
            "СЃРµРЅ",
            "РѕРєС‚",
            "РЅРѕСЏ",
            "РґРµРє"
          ]
        };
        (this.unix = function() {
          return Math.floor(Date.now() / 1e3);
        }),
          (this.parseTimestamp = function(r) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = new Date(1e3 * r),
              o = [
                n.getDate(),
                t[e.month_case || e.month_type || "short"][n.getMonth()],
                n.getFullYear(),
                n.getHours(),
                (n.getMinutes() < 10 ? "0" : "") + n.getMinutes()
              ],
              a = o[0],
              i = o[1],
              u = o[2],
              l = o[3],
              c = o[4];
            return 1 === e.only_day_month
              ? "".concat(a, " ").concat(i)
              : 1 === e.only_day_month_year
              ? ""
                  .concat(a, " ")
                  .concat(i, " ")
                  .concat(u)
              : 1 === e.only_time
              ? "".concat(l, ":").concat(c)
              : ""
                  .concat(a, " ")
                  .concat(i, " ")
                  .concat(u, ", ")
                  .concat(l, ":")
                  .concat(c);
          });
        var r = function(t, r) {
            var e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return (
              Array(r)
                .fill(e)
                .join("") + t
            ).substr(-1 * r);
          },
          e = Math.floor(1e12 * Math.random())
            .toString(2)
            .substr(-5),
          n = null,
          o = 0;
        this.snowflake = function() {
          var t = r((Date.now() - 14237856e5).toString(2), 42);
          if ((t !== n && ((n = t), (o = 0)), o > 4096))
            throw new Error("Snowflake increment overflow.");
          var a = t + "00001" + e + r(o.toString(2), 12);
          o++;
          for (var i = "", u = 1; 4 * u <= 4 * Math.ceil(a.length / 4); u++)
            i = parseInt(a.substr(-4 * u, 4), 2).toString(16) + i;
          for (; "0" === i[0]; ) i = i.substr(1);
          return i;
        };
      })()),
      (t.URL = function(t) {
        return new URL(t, location.protocol + "//" + location.hostname);
      });
    var n,
      o,
      a =
        ((n = new Set(Object.keys(HTMLAnchorElement.prototype))),
        (o = new Set(
          Object.keys(location).filter(function(t) {
            return n.has(t);
          })
        )).delete("toString"),
        o);
    t.URL = function(t) {
      var r = _slicedToArray($man("<a>"), 1)[0];
      r.href = t;
      var e = {},
        n = !0,
        o = !1,
        i = void 0;
      try {
        for (
          var u, l = a[Symbol.iterator]();
          !(n = (u = l.next()).done);
          n = !0
        ) {
          var c = u.value;
          e[c] = r[c];
        }
      } catch (t) {
        (o = !0), (i = t);
      } finally {
        try {
          n || null == l.return || l.return();
        } finally {
          if (o) throw i;
        }
      }
      return Object.freeze(e);
    };
    var i = window.URLSearchParams,
      u = "" === new i({}).toString();
    (t.querystring = {
      parse: function() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : location.search,
          r = {};
        if (i) {
          var e = new i(t),
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var u, l = e.keys()[Symbol.iterator]();
              !(n = (u = l.next()).done);
              n = !0
            ) {
              var c = u.value;
              r[c] = e.get(c);
            }
          } catch (t) {
            (o = !0), (a = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (o) throw a;
            }
          }
        } else {
          var f = ("?" === t[0] ? t.substr(1) : t).split("&");
          if (t.length > 0) {
            var s = !0,
              y = !1,
              h = void 0;
            try {
              for (
                var v, d = f[Symbol.iterator]();
                !(s = (v = d.next()).done);
                s = !0
              ) {
                var p = _toArray(v.value.split("=")),
                  g = p[0],
                  b = p.slice(1);
                r[g] = b.join("=");
              }
            } catch (t) {
              (y = !0), (h = t);
            } finally {
              try {
                s || null == d.return || d.return();
              } finally {
                if (y) throw h;
              }
            }
          }
        }
        return r;
      },
      stringify: function() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (i && u) return new i(t).toString();
        var r = [];
        for (var e in t) r.push(e + "=" + t[e]);
        return r.join("&");
      }
    }),
      (t.qs = t.querystring),
      (t.zerofill = function(t, r) {
        return (t = String(t)), new Array(r - t.length).fill(0).join("") + t;
      }),
      (t.asyncTimeout = function(t) {
        return new Promise(function(r) {
          setTimeout(r, t);
        });
      });
    var l = {},
      c = {
        hex: /^#((?:[0-9a-f]{3}){1,2})$/i,
        hex4: /^#((?:[0-9a-f]{4}){1,2})$/i,
        rgb: /^rgb\(([0-9]{1,3}),\s([0-9]{1,3}),\s([0-9]{1,3})\)$/i,
        rgba: /^rgba\(([0-9]{1,3}),\s([0-9]{1,3}),\s([0-9]{1,3}),\s(0?\.?[0-9]+)\)$/i
      },
      f = function(t) {
        return Tools.zerofill(t.toString(16), 2);
      };
    (l.convert = function(t) {
      var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "hex",
        e = null,
        n = 1;
      for (var o in c) {
        var a = c[o],
          i = t.match(a);
        if (i)
          switch (o) {
            case "hex":
            case "hex4":
              e = [];
              var u = i[1];
              if (3 === u.length || 4 === u.length) {
                var l = !0,
                  s = !1,
                  y = void 0;
                try {
                  for (
                    var h, v = u.split("")[Symbol.iterator]();
                    !(l = (h = v.next()).done);
                    l = !0
                  ) {
                    var d = h.value;
                    e.push(parseInt(d + d, 16));
                  }
                } catch (t) {
                  (s = !0), (y = t);
                } finally {
                  try {
                    l || null == v.return || v.return();
                  } finally {
                    if (s) throw y;
                  }
                }
              } else
                for (var p = 0; p < u.length; p += 2)
                  e.push(parseInt(u.substr(p, 2), 16));
              4 === e.length && (n = e.pop() / 255);
              break;
            case "rgb":
            case "rgba":
              i[4] && (n = parseFloat(i[4])), (e = []);
              for (var g = 1; g <= 3; g++) e.push(parseInt(i[g]));
          }
      }
      if (null === e || n > 1) throw new Error("Invalid input.");
      var b = !0,
        m = !1,
        w = void 0;
      try {
        for (
          var _, A = e[Symbol.iterator]();
          !(b = (_ = A.next()).done);
          b = !0
        ) {
          if (_.value > 255) throw new Error("Invalid input.");
        }
      } catch (t) {
        (m = !0), (w = t);
      } finally {
        try {
          b || null == A.return || A.return();
        } finally {
          if (m) throw w;
        }
      }
      switch (r) {
        case "hex":
          return "#" + e.map(f).join("");
        case "hex4":
          return "#" + e.map(f).join("") + f(Math.round(255 * n));
        case "rgb":
          return "rgb(".concat(e.join(", "), ")");
        case "rgba":
          return "rgba(".concat(e.join(", "), ", ").concat(n, ")");
        default:
          throw new Error("Invalid output format.");
      }
    }),
      (t.colors = Object.freeze(l)),
      (function() {
        var r = {
            hex: /^#((?:[0-9a-f]{3}){1,2})$/i,
            hex4: /^#((?:[0-9a-f]{4}){1,2})$/i,
            rgb: /^rgb\(([0-9]{1,3}),\s+([0-9]{1,3}),\s+([0-9]{1,3})\)$/i,
            rgba: /^rgba\(([0-9]{1,3}),\s+([0-9]{1,3}),\s+([0-9]{1,3}),\s+(0?\.?[0-9]+)\)$/i
          },
          e = function() {
            for (
              var t = [], e = arguments.length, n = new Array(e), o = 0;
              o < e;
              o++
            )
              n[o] = arguments[o];
            if ("string" == typeof n[0]) {
              var a = n[0];
              for (var i in r) {
                var u = r[i],
                  l = a.match(u);
                if (l)
                  switch (i) {
                    case "hex":
                    case "hex4":
                      var c = l[1];
                      if (3 === c.length || 4 === c.length) {
                        var f = !0,
                          s = !1,
                          y = void 0;
                        try {
                          for (
                            var h, v = c.split("")[Symbol.iterator]();
                            !(f = (h = v.next()).done);
                            f = !0
                          ) {
                            var d = h.value;
                            t.push(parseInt(d + d, 16));
                          }
                        } catch (t) {
                          (s = !0), (y = t);
                        } finally {
                          try {
                            f || null == v.return || v.return();
                          } finally {
                            if (s) throw y;
                          }
                        }
                      } else
                        for (var p = 0; p < c.length; p += 2)
                          t.push(parseInt(c.substr(p, 2), 16));
                      4 === t.length ? (t[3] = t[3] / 255) : (t[3] = 1);
                      break;
                    case "rgb":
                    case "rgba":
                      l[4] && (t[3] = parseFloat(l[4]));
                      for (var g = 1; g <= 3; g++) t[g - 1] = parseInt(l[g]);
                  }
              }
            } else {
              for (var b = 0; b <= 2; b++)
                if ("number" != typeof n[b] || n[b] < 0 || n[b] > 255)
                  throw new Error("Invalid input.");
              if (
                (t.push.apply(t, _toConsumableArray(n.slice(0, 3))),
                "number" == typeof n[3] && (n[3] < 0 || n[3] > 1))
              )
                throw new Error("Invalid input.");
              t[3] = n[3];
            }
            this.channels = t.map(function(t) {
              return Math.round(t);
            });
          },
          n = {
            clone: function() {
              return _construct(e, _toConsumableArray(this.channels));
            },
            getHSLA: function() {
              var t,
                r,
                e = this.r / 255,
                n = this.g / 255,
                o = this.b / 255,
                a = this.a,
                i = Math.min(e, n, o),
                u = Math.max(e, n, o),
                l = (u + i) / 2,
                c = u - i;
              switch (u) {
                case i:
                  t = 0;
                  break;
                case e:
                  t = (60 * (n - o)) / c;
                  break;
                case n:
                  t = (60 * (o - e)) / c + 120;
                  break;
                case o:
                  t = (60 * (e - n)) / c + 240;
              }
              return (
                (r = u === i ? 0 : l < 0.5 ? c / (2 * l) : c / (2 - 2 * l)),
                [(t %= 360), (r *= 100), (l *= 100), a]
              );
            },
            setAlpha: function(t) {
              return t >= 0 && t <= 1 && (this.channels[3] = t), this;
            },
            withAlpha: function(t) {
              return this.clone().setAlpha(t);
            },
            darken: function(t) {
              return e.darken(this, t);
            },
            lighten: function(t) {
              return e.lighten(this, t);
            },
            toCSSString: function() {
              var t = this.channels[3];
              return 0 === t
                ? "transparent"
                : 1 === t
                ? "#" +
                  this.channels
                    .slice(0, 3)
                    .map(function(t) {
                      return (t < 16 ? 0 : "") + t.toString(16);
                    })
                    .join("")
                : "rgba("
                    .concat(this.channels.join(","), ")")
                    .replace(/,0\./, ",.");
            }
          },
          o = function(t) {
            e.prototype[t] = function() {
              for (
                var r, e = arguments.length, o = new Array(e), a = 0;
                a < e;
                a++
              )
                o[a] = arguments[a];
              return (r = n[t]).call.apply(r, [this].concat(o));
            };
          };
        for (var a in n) o(a);
        var i = function(t, r, n) {
            var o = t.getHSLA();
            return (o[r] += n), e.fromHSLA.apply(e, _toConsumableArray(o));
          },
          u = {
            fromHSLA: function(t, r, n) {
              var o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 1;
              (t /= 360), (r /= 100);
              var a = (n /= 100) <= 0.5 ? n * (r + 1) : n + r - n * r,
                i = 2 * n - a,
                u = 255 * f(t + 1 / 3),
                l = 255 * f(t),
                c = 255 * f(t - 1 / 3);
              function f(t) {
                return (
                  t < 0 && ++t,
                  t > 1 && --t,
                  6 * t < 1
                    ? i + (a - i) * t * 6
                    : 2 * t < 1
                    ? a
                    : 3 * t < 2
                    ? i + (a - i) * (2 / 3 - t) * 6
                    : i
                );
              }
              return new e(u, l, c, o);
            },
            blend: function(t, r) {
              return new e(
                t.r * t.a + r.r * (1 - t.a),
                t.g * t.a + r.g * (1 - t.a),
                t.b * t.a + r.b * (1 - t.a),
                t.a + r.a - t.a * r.a
              );
            },
            darken: function(t, r) {
              return i(t, 2, -r);
            },
            lighten: function(t, r) {
              return i(t, 2, +r);
            }
          };
        for (var a in u) e[a] = u[a];
        var l = ["r", "g", "b", "a"],
          c = function(t) {
            Object.defineProperty(e.prototype, l[t], {
              get: function() {
                return this.channels[t];
              }
            });
          };
        for (var f in l) c(f);
        t.Color = e;
      })(),
      (t.sort = function(t, r) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          n = r.split(";");
        n.forEach(function(t, r) {
          var e = t.split("@");
          n[r] = { key: e[0], dir: "asc" === e[1] ? 1 : -1 };
        });
        var o = function(t, r) {
          return "string" == typeof t
            ? t.localeCompare(r)
            : Math.max(Math.min(t - r, 1), -1);
        };
        return t.sort(function(t, r) {
          for (var a = 0, i = 0; i < n.length; i++) {
            var u = n[i],
              l = t[u.key],
              c = r[u.key];
            (null !== l && void 0 !== l) ||
              void 0 === e.not_a_value ||
              (l = e.not_a_value),
              (null !== c && void 0 !== c) ||
                void 0 === e.not_a_value ||
                (c = e.not_a_value);
            var f = o(l, c);
            if (0 !== f) {
              a = u.dir * f;
              break;
            }
          }
          return a;
        });
      }),
      (t.clone = function(r, e) {
        var n;
        switch (_typeof(r)) {
          case "number":
          case "string":
          case "boolean":
          case "undefined":
            n = r;
            break;
          case "object":
            n = null === r ? null : r instanceof Array ? [] : {};
            break;
          case "function":
            n =
              "function" == typeof e
                ? e("(" + r.toString() + ")")
                : function() {
                    return r.apply(this, arguments);
                  };
        }
        switch (_typeof(r)) {
          case "object":
          case "function":
            if (null === r) return;
            for (var o = Object.keys(r), a = 0; a < o.length; a++) {
              var i = o[a],
                u = r[i];
              n[i] = t.clone(u, e);
            }
        }
        return n;
      }),
      (t.cloneJSON = function(t) {
        return r(t) ? t : JSON.parse(JSON.stringify(t));
      }),
      (t.getDeepProperty = function(t, e) {
        if (r(t)) return t;
        e = e.split(".");
        var n = !0,
          o = !1,
          a = void 0;
        try {
          for (
            var i, u = e[Symbol.iterator]();
            !(n = (i = u.next()).done);
            n = !0
          ) {
            if (((t = t[i.value]), r(t))) return t;
          }
        } catch (t) {
          (o = !0), (a = t);
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (o) throw a;
          }
        }
        return t;
      }),
      (t.debounce = function(t) {
        var r,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250;
        return function() {
          for (
            var n = this, o = arguments.length, a = new Array(o), i = 0;
            i < o;
            i++
          )
            a[i] = arguments[i];
          try {
            clearTimeout(r);
          } catch (t) {}
          r = setTimeout(function() {
            t.apply(n, a);
          }, e);
        };
      }),
      (t.throttle = function(t) {
        var r,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 250,
          n = 0,
          o = function(r, e) {
            t.apply(r, e), (n = Date.now());
          },
          a = function() {
            try {
              clearTimeout(r);
            } catch (t) {}
          },
          i = function() {
            for (
              var t = this, i = arguments.length, u = new Array(i), l = 0;
              l < i;
              l++
            )
              u[l] = arguments[l];
            a();
            var c = e - (Date.now() - n);
            c <= 0
              ? o(this, u)
              : (r = setTimeout(function() {
                  o(t, u);
                }, c));
          };
        return (
          (i.reset = function() {
            a(), (n = 0);
          }),
          i
        );
      }),
      (t.fnAttempts = function(t, r, e) {
        var n = r.interval,
          o = void 0 === n ? 1e3 : n;
        !(function r() {
          !1 === t() ? setTimeout(r, o) : e && e();
        })();
      }),
      (t.each = function(r, e, n) {
        t.log.deprecatedMessageShow("Do not use Tools.each."),
          "number" == typeof r && (r = new Array(r + 1).join("0").split(""));
        var o = Object.keys(r),
          a = "object" === _typeof(r) && r instanceof Array;
        for (var i in o) {
          var u = o[i];
          if (!1 === e(r[(u = a ? parseInt(u) : u)], u)) break;
        }
        n && n();
      }),
      (t.each.async = function(t, r, e) {
        "number" == typeof t && (t = new Array(t + 1).join("0").split(""));
        var n = Object.keys(t),
          o = "object" === _typeof(t) && t instanceof Array,
          a = 0;
        !(function i() {
          var u = n[a];
          u = o ? parseInt(u) : u;
          var l = t[u],
            c = 3 === r.length;
          if (a === n.length) e && e();
          else {
            var f = function(t) {
              !1 === t ? e && e() : (a++, c ? i() : setTimeout(i, 1));
            };
            c ? r(l, u, f) : f(r(l, u));
          }
        })();
      }),
      (t.crypto = {
        sha1: function(t) {
          var r,
            e,
            n,
            o,
            a,
            i,
            u,
            l,
            c,
            f = function(t, r) {
              return (t << r) | (t >>> (32 - r));
            },
            s = function(t) {
              var r,
                e = "";
              for (r = 7; r >= 0; r--) e += ((t >>> (4 * r)) & 15).toString(16);
              return e;
            },
            y = new Array(80),
            h = 1732584193,
            v = 4023233417,
            d = 2562383102,
            p = 271733878,
            g = 3285377520,
            b = (t = window.unescape(encodeURIComponent(t))).length,
            m = [];
          for (e = 0; b - 3 > e; e += 4)
            (n =
              (t.charCodeAt(e) << 24) |
              (t.charCodeAt(e + 1) << 16) |
              (t.charCodeAt(e + 2) << 8) |
              t.charCodeAt(e + 3)),
              m.push(n);
          switch (b % 4) {
            case 0:
              e = 2147483648;
              break;
            case 1:
              e = (t.charCodeAt(b - 1) << 24) | 8388608;
              break;
            case 2:
              e =
                (t.charCodeAt(b - 2) << 24) |
                (t.charCodeAt(b - 1) << 16) |
                32768;
              break;
            case 3:
              e =
                (t.charCodeAt(b - 3) << 24) |
                (t.charCodeAt(b - 2) << 16) |
                (t.charCodeAt(b - 1) << 8) |
                128;
          }
          for (m.push(e); m.length % 16 != 14; ) m.push(0);
          for (
            m.push(b >>> 29), m.push((b << 3) & 4294967295), r = 0;
            r < m.length;
            r += 16
          ) {
            for (e = 0; 16 > e; e++) y[e] = m[r + e];
            for (e = 16; 79 >= e; e++)
              y[e] = f(y[e - 3] ^ y[e - 8] ^ y[e - 14] ^ y[e - 16], 1);
            for (o = h, a = v, i = d, u = p, l = g, e = 0; 19 >= e; e++)
              (c =
                (f(o, 5) + ((a & i) | (~a & u)) + l + y[e] + 1518500249) &
                4294967295),
                (l = u),
                (u = i),
                (i = f(a, 30)),
                (a = o),
                (o = c);
            for (e = 20; 39 >= e; e++)
              (c =
                (f(o, 5) + (a ^ i ^ u) + l + y[e] + 1859775393) & 4294967295),
                (l = u),
                (u = i),
                (i = f(a, 30)),
                (a = o),
                (o = c);
            for (e = 40; 59 >= e; e++)
              (c =
                (f(o, 5) +
                  ((a & i) | (a & u) | (i & u)) +
                  l +
                  y[e] +
                  2400959708) &
                4294967295),
                (l = u),
                (u = i),
                (i = f(a, 30)),
                (a = o),
                (o = c);
            for (e = 60; 79 >= e; e++)
              (c =
                (f(o, 5) + (a ^ i ^ u) + l + y[e] + 3395469782) & 4294967295),
                (l = u),
                (u = i),
                (i = f(a, 30)),
                (a = o),
                (h = (h + (o = c)) & 4294967295),
                (v = (v + a) & 4294967295),
                (d = (d + i) & 4294967295),
                (p = (p + u) & 4294967295),
                (g = (g + l) & 4294967295);
          }
          return (c = s(h) + s(v) + s(d) + s(p) + s(g)).toLowerCase();
        }
      }),
      (t.waitForProperties = function(t, r) {
        (t = t.map(function(t) {
          if (Array.isArray(t)) {
            var r = _slicedToArray(t, 2);
            return { object: r[0], key: r[1] };
          }
          return t;
        })),
          (function e() {
            var n = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, u = t[Symbol.iterator]();
                !(n = (i = u.next()).done);
                n = !0
              ) {
                var l = i.value;
                if (l.key in l.object == !1) return void setTimeout(e, 100);
              }
            } catch (t) {
              (o = !0), (a = t);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (o) throw a;
              }
            }
            r && r();
          })();
      }),
      (t.Object = {}),
      (t.Object.assign =
        Object.assign ||
        function(t) {
          for (
            var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1;
            n < r;
            n++
          )
            e[n - 1] = arguments[n];
          for (var o = 0, a = e; o < a.length; o++) {
            var i = a[o],
              u = !0,
              l = !1,
              c = void 0;
            try {
              for (
                var f,
                  s = Tools.Object.getKeyValueIterator(i)[Symbol.iterator]();
                !(u = (f = s.next()).done);
                u = !0
              ) {
                var y = _slicedToArray(f.value, 2),
                  h = y[0],
                  v = y[1];
                t[h] = v;
              }
            } catch (t) {
              (l = !0), (c = t);
            } finally {
              try {
                u || null == s.return || s.return();
              } finally {
                if (l) throw c;
              }
            }
          }
          return t;
        }),
      (t.Object.unassignEquals = function(t) {
        for (
          var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          e[n - 1] = arguments[n];
        for (var o = 0, a = e; o < a.length; o++) {
          var i = a[o],
            u = !0,
            l = !1,
            c = void 0;
          try {
            for (
              var f, s = Tools.Object.getKeyValueIterator(i)[Symbol.iterator]();
              !(u = (f = s.next()).done);
              u = !0
            ) {
              var y = _slicedToArray(f.value, 2),
                h = y[0],
                v = y[1];
              h in t && t[h] === v && delete t[h];
            }
          } catch (t) {
            (l = !0), (c = t);
          } finally {
            try {
              u || null == s.return || s.return();
            } finally {
              if (l) throw c;
            }
          }
        }
        return t;
      }),
      (t.Object.getKeyValueIterator = function(t) {
        return window.Symbol && Symbol.iterator
          ? _defineProperty({}, Symbol.iterator, function() {
              return {
                next: function() {
                  var r = this.index;
                  if (r >= this.keys.length) return { done: !0 };
                  this.index++;
                  var e = this.keys[r];
                  return { value: [e, t[e]], done: !1 };
                },
                keys: Object.keys(t),
                index: 0
              };
            })
          : Object.entries(t);
      }),
      (t.Array = {}),
      (t.Array.addUnique = function(t, r) {
        -1 === t.indexOf(r) && t.push(r);
      }),
      (t.Array.delete = function(t, r) {
        var e = t.indexOf(r);
        e > -1 && t.splice(e, 1);
      }),
      (t.Array.last = function(t) {
        return t[t.length - 1];
      }),
      (t.Array.getKeyValueIterator = function(t) {
        return window.Symbol && Symbol.iterator
          ? _defineProperty({}, Symbol.iterator, function() {
              return {
                next: function() {
                  var r = this.index;
                  return r >= t.length
                    ? { done: !0 }
                    : (this.index++, { value: [r, t[r]], done: !1 });
                },
                index: 0
              };
            })
          : t.map(function(t, r) {
              return [r, t];
            });
      });
    var s = "flat" in Array.prototype;
    (t.Array.flat = function(r, e) {
      return s
        ? r.flat(e)
        : r.reduce(function(r, e) {
            return Array.isArray(e) ? r.concat(t.Array.flat(e)) : r.concat(e);
          }, []);
    }),
      (t.Array.filterMap = function(r, e) {
        var n = [],
          o = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var u, l = t.Array.getKeyValueIterator(r)[Symbol.iterator]();
            !(o = (u = l.next()).done);
            o = !0
          ) {
            var c = _slicedToArray(u.value, 2),
              f = c[0],
              s = e(c[1], f, r);
            void 0 !== s && n.push(s);
          }
        } catch (t) {
          (a = !0), (i = t);
        } finally {
          try {
            o || null == l.return || l.return();
          } finally {
            if (a) throw i;
          }
        }
        return n;
      }),
      (t.Set = {}),
      (t.Set.add = function(t) {
        for (
          var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          e[n - 1] = arguments[n];
        for (var o = 0, a = e; o < a.length; o++) {
          var i = a[o];
          t.add(i);
        }
      }),
      (t.Set.delete = function(t) {
        for (
          var r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          e[n - 1] = arguments[n];
        for (var o = 0, a = e; o < a.length; o++) {
          var i = a[o];
          t.delete(i);
        }
      });
    (t.Set.opAnd = function() {
      for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
        r[e] = arguments[e];
      return r.reduce(function(t, r) {
        return (function(t, r) {
          if (t.size > r.size) {
            var e = [r, t];
            (t = e[0]), (r = e[1]);
          }
          var n = new Set(),
            o = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var u, l = t[Symbol.iterator]();
              !(o = (u = l.next()).done);
              o = !0
            ) {
              var c = u.value;
              r.has(c) && n.add(c);
            }
          } catch (t) {
            (a = !0), (i = t);
          } finally {
            try {
              o || null == l.return || l.return();
            } finally {
              if (a) throw i;
            }
          }
          return n;
        })(t, r);
      });
    }),
      (t.Set.opOr = function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
          r[e] = arguments[e];
        return r.reduce(function(t, r) {
          return new Set(
            [].concat(_toConsumableArray(t), _toConsumableArray(r))
          );
        });
      }),
      (t.Set.opNot = function(r) {
        for (
          var e,
            n = new Set(r),
            o = arguments.length,
            a = new Array(o > 1 ? o - 1 : 0),
            i = 1;
          i < o;
          i++
        )
          a[i - 1] = arguments[i];
        var u = t.Set.opAnd(n, (e = t.Set).opOr.apply(e, a)),
          l = !0,
          c = !1,
          f = void 0;
        try {
          for (
            var s, y = u[Symbol.iterator]();
            !(l = (s = y.next()).done);
            l = !0
          ) {
            var h = s.value;
            n.delete(h);
          }
        } catch (t) {
          (c = !0), (f = t);
        } finally {
          try {
            l || null == y.return || y.return();
          } finally {
            if (c) throw f;
          }
        }
        return n;
      }),
      (t.Map = {}),
      (t.Map.fromArrayOfObjects = function(t, r) {
        return new Map(
          (t || []).map(function(t) {
            return [t[r], t];
          })
        );
      }),
      (t.fetch = {});
    var y = function(t, r) {
      !0 === r._nocache && (delete r._nocache, (r.cache = "no-store"));
      var e = fetch(t, r);
      return (
        r._parser &&
          (e = e.then(function(t) {
            return t[r._parser]();
          })),
        e
      );
    };
    (t.fetch.get = function(t, r) {
      return (r.method = "GET"), y(t, r);
    }),
      (t.fetch.post = function(r, e, n) {
        return (
          (n.method = "POST"),
          n.headers || (n.headers = {}),
          (n.headers["Content-Type"] =
            "application/x-www-form-urlencoded; charset=UTF-8"),
          (n.body = t.querystring.stringify(e)),
          y(r, n)
        );
      });
    (t.Lang = {
      gender: function(t, r) {
        return t.replace(/\{gender:([^,]{0,}),([^\}]{0,})\}/g, function(t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            n[o - 1] = arguments[o];
          return n[r];
        });
      },
      number: function(t, r) {
        return (t = (t = t.replace(
          /\{number:([^,]{0,}),([^,]{0,}),([^\}]{0,})\}/g,
          function(t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
              o < e;
              o++
            )
              n[o - 1] = arguments[o];
            return n[
              (function(t) {
                if (1 !== Math.floor((t % 100) / 10))
                  switch (t % 10) {
                    case 1:
                      return 0;
                    case 2:
                    case 3:
                    case 4:
                      return 1;
                  }
                return 2;
              })(r)
            ];
          }
        )).replace(/%val(ue)?%/g, String(r)));
      },
      plural: function(t, r) {
        return (
          "number" == typeof r && (r = 1 !== r),
          (r = Number(r)),
          t.replace(/\{plural:([^,]{0,}),([^\}]{0,})\}/g, function(t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1;
              o < e;
              o++
            )
              n[o - 1] = arguments[o];
            return n[r];
          })
        );
      }
    }),
      "Vue" in window &&
        (Vue.filter("genderify", function() {
          var r;
          return (r = t.Lang).gender.apply(r, arguments);
        }),
        Vue.filter("numberify", function() {
          var r;
          return (r = t.Lang).number.apply(r, arguments);
        }),
        Vue.filter("pluralize", function() {
          var r;
          return (r = t.Lang).plural.apply(r, arguments);
        }));
    var h = new Set();
    t.watchDOM = function(t, r, e) {
      var n = r.interval,
        o = void 0 === n ? null : n;
      if ((delete r.interval, "MutationObserver" in window)) {
        var a = new MutationObserver(function() {
          e();
        });
        return (
          a.observe(t, r),
          function() {
            a.disconnect();
          }
        );
      }
      return (
        "number" == typeof o && (e = Tools.throttle(e, o)),
        h.add(e),
        1 === h.size &&
          (function t() {
            var r = !0,
              e = !1,
              n = void 0;
            try {
              for (
                var o, a = h[Symbol.iterator]();
                !(r = (o = a.next()).done);
                r = !0
              )
                (0, o.value)();
            } catch (t) {
              (e = !0), (n = t);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (e) throw n;
              }
            }
            setTimeout(t, 250);
          })(),
        function() {
          h.delete(e);
        }
      );
    };
    var v = "Proxy" in window;
    (t.proxy = {}),
      (t.proxy.createImmutable = function(r) {
        return v && "object" === _typeof(r) && null !== r
          ? new Proxy(r, {
              get: function(r, e) {
                return t.proxy.createImmutable(r[e]);
              },
              set: function() {
                return !0;
              }
            })
          : r;
      }),
      (t.Lazy = function() {}),
      (t.Lazy.prototype.set = function(t, r) {
        var e = this;
        Object.defineProperty(this, t, {
          get: function() {
            var n = r();
            return Object.defineProperty(e, t, { value: n }), n;
          },
          configurable: !0
        });
      });
    var d = function(t) {
      var r = this,
        e = t.fn_load,
        n = void 0 === e ? function() {} : e,
        o = t.field_name;
      (this.storage = Vue.observable({})),
        (this.fn_load = n),
        (this.field_name = o),
        (this._ids_loading = new Set()),
        (this._ids_to_load = new Set()),
        (this._dispatchLoad = Tools.debounce(function() {
          var t,
            e = new Set(),
            n = !0,
            o = !1,
            a = void 0;
          try {
            for (
              var i, u = r._ids_to_load[Symbol.iterator]();
              !(n = (i = u.next()).done);
              n = !0
            ) {
              var l = i.value;
              if ((e.add(l), r._ids_to_load.delete(l), e.size >= 50)) break;
            }
          } catch (t) {
            (o = !0), (a = t);
          } finally {
            try {
              n || null == u.return || u.return();
            } finally {
              if (o) throw a;
            }
          }
          e.size > 0 &&
            ((t = Tools.Set).add.apply(
              t,
              [r._ids_loading].concat(_toConsumableArray(e))
            ),
            r.fn_load(_toConsumableArray(e), r.append.bind(r)),
            r._ids_to_load.size > 0 && r._dispatchLoad());
        }, 10));
    };
    (d.prototype._load = function(t) {
      var r = t.ids,
        e = t.force,
        n = void 0 !== e && e;
      Array.isArray(r[0])
        ? (r = r[0])
        : r[0] instanceof Set && (r = _toConsumableArray(r[0]));
      var o = new Set(),
        a = !0,
        i = !1,
        u = void 0;
      try {
        for (
          var l, c = r[Symbol.iterator]();
          !(a = (l = c.next()).done);
          a = !0
        ) {
          var f = l.value;
          !1 === this.storage.hasOwnProperty(f) && o.add(f);
        }
      } catch (t) {
        (i = !0), (u = t);
      } finally {
        try {
          a || null == c.return || c.return();
        } finally {
          if (i) throw u;
        }
      }
      if (n || o.size > 0) {
        var s,
          y = Tools.Set.opNot(n ? r : o, this._ids_loading);
        if (y.size > 0)
          (s = Tools.Set).add.apply(
            s,
            [this._ids_to_load].concat(_toConsumableArray(y))
          ),
            this._dispatchLoad();
        return !0;
      }
      return !1;
    }),
      (d.prototype.load = function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
          r[e] = arguments[e];
        return this._load({ ids: r });
      }),
      (d.prototype.reload = function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
          r[e] = arguments[e];
        return this._load({ ids: r, force: !0 });
      }),
      (d.prototype.appendOne = function(t, r) {
        if (
          t instanceof Object &&
          void 0 === r &&
          void 0 === (t = (r = t)[this.field_name])
        )
          throw new Error("Key is not defined.");
        this._ids_loading.delete(t), Vue.set(this.storage, t, r);
      }),
      (d.prototype.append = function(t) {
        var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : this.field_name;
        if (Array.isArray(t)) {
          if ("string" != typeof r)
            throw new Error(
              'Param "field" needed when source is instance of Array.'
            );
          var e = !0,
            n = !1,
            o = void 0;
          try {
            for (
              var a, i = t[Symbol.iterator]();
              !(e = (a = i.next()).done);
              e = !0
            ) {
              var u = a.value;
              this.appendOne(u[r], u);
            }
          } catch (t) {
            (n = !0), (o = t);
          } finally {
            try {
              e || null == i.return || i.return();
            } finally {
              if (n) throw o;
            }
          }
        } else if (t instanceof Map) {
          var l = !0,
            c = !1,
            f = void 0;
          try {
            for (
              var s, y = t[Symbol.iterator]();
              !(l = (s = y.next()).done);
              l = !0
            ) {
              var h = _slicedToArray(s.value, 2),
                v = h[0],
                d = h[1];
              this.appendOne(v, d);
            }
          } catch (t) {
            (c = !0), (f = t);
          } finally {
            try {
              l || null == y.return || y.return();
            } finally {
              if (c) throw f;
            }
          }
        } else for (var v in t) t.hasOwnProperty(v) && this.appendOne(v, t[v]);
      }),
      (t.AsyncStorage = d),
      (window.AsyncStorage = d);
    var p = new t.Lazy();
    p.set("time", function() {
      return new Vue({
        data: { ts_start: Date.now(), unix: Date.unix(), tickers: { 100: 0 } },
        methods: {
          mutate: function() {
            this.unix = Date.unix();
            var t = Date.now() - this.ts_start;
            for (var r in this.tickers) this.tickers[r] = Math.floor(t / r);
          },
          addInterval: function(t) {
            void 0 === this.tickers[t] &&
              (this.$set(this.tickers, t, 0), this.mutate());
          }
        },
        created: function() {
          setInterval(this.mutate, 50), this.mutate();
        }
      });
    }),
      p.set("ls", function() {
        return new Vue({
          data: { ls: {} },
          methods: {
            update: function(t) {
              Vue.set(this.ls, t, localStorage[t]);
            },
            attach: function(t) {
              var r = this,
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : String,
                n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : void 0;
              return (
                t in this.ls == !1 && this.update(t),
                {
                  get: function() {
                    var o = r.ls[t];
                    return void 0 === o || null === o
                      ? n
                      : Boolean === e
                      ? "1" === o
                      : Number === o
                      ? parseFloat(o)
                      : o;
                  },
                  set: function(o) {
                    o === n
                      ? localStorage.removeItem(t)
                      : Boolean === e
                      ? localStorage.setItem(t, o ? 1 : 0)
                      : localStorage.setItem(t, o),
                      r.update(t);
                  }
                }
              );
            }
          },
          created: function() {
            var t = this;
            window.addEventListener("storage", function(r) {
              t.update(r.key);
            });
          }
        });
      }),
      (t.requireVueLib = function(r) {
        return t.proxy.createImmutable(p[r]);
      });
  })());
