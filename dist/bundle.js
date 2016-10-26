"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.registerAframeClickDragComponent = e();
  }
}(function () {
  return function e(t, n, o) {
    function r(u, c) {
      if (!n[u]) {
        if (!t[u]) {
          var a = "function" == typeof require && require;if (!c && a) return a(u, !0);if (i) return i(u, !0);var f = new Error("Cannot find module '" + u + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var d = n[u] = { exports: {} };t[u][0].call(d.exports, function (e) {
          var n = t[u][1][e];return r(n ? n : e);
        }, d, d.exports, e, t, n, o);
      }return n[u].exports;
    }for (var i = "function" == typeof require && require, u = 0; u < o.length; u++) {
      r(o[u]);
    }return r;
  }({ 1: [function (e, t, n) {
      "use strict";
      function o(e, t) {
        return t = { exports: {} }, e(t, t.exports), t.exports;
      }function r(e) {
        var t,
            n,
            o = e.length;if (1 === o) t = 0, n = e[0][1];else {
          for (var r, i, u, c = 0, a = 0, f = 0, d = 0, l = 0; l < o; l++) {
            r = e[l], i = r[0], u = r[1], c += i, a += u, f += i * i, d += i * u;
          }t = (o * d - c * a) / (o * f - c * c), n = a / o - t * c / o;
        }return { m: t, b: n };
      }function i(e) {
        return function (t) {
          return e.b + e.m * t;
        };
      }function u(e) {
        for (var t = e; t.parent;) {
          t = t.parent;
        }t.updateMatrixWorld(!0);
      }function c(e, t) {
        var n = e;for (t.set(n.components.position.data.x, n.components.position.data.y, n.components.position.data.z); n.attachedToParent;) {
          n = n.parentElement, n.components && n.components.position && t.set(t.x + n.components.position.data.x, t.y + n.components.position.data.y, t.z + n.components.position.data.z);
        }
      }function a(e, t, n) {
        return u(t), t.localToWorld(n);
      }function f(e, t, n, o, r, i) {
        return { x: (e - n) / r * 2 - 1, y: 2 * -((t - o) / i) + 1 };
      }function d(e, t, n) {
        var o = t / e.dot(n);return n.multiplyScalar(o);
      }function l(e, t, n, o, r, i, u) {
        function c(i) {
          var c = i.clientX,
              a = i.clientY;x = { clientX: c, clientY: a };var f = O(e, o, { x: c, y: a }),
              p = A(e, o, o.components.camera.camera, f, r),
              h = p.x,
              w = p.y,
              z = p.z;if (u) {
            var E = v.copy(l).multiply(d.getWorldQuaternion());g.set(n.x, n.y, n.z), g.applyQuaternion(E), E.multiply(s), y.setFromQuaternion(E, m), b.x = e.Math.radToDeg(y.x), b.y = e.Math.radToDeg(y.y), b.z = e.Math.radToDeg(y.z);
          }var D = { x: h - g.x, y: w - g.y, z: z - g.z };t.emit(j, { nextPosition: D, nextRotation: b, clientX: c, clientY: a }), t.setAttribute("position", D), u && t.setAttribute("rotation", b);
        }function a(e) {
          var t = p(e.changedTouches, 1),
              n = t[0];c(n);
        }function f(e) {
          var t = e.detail;"position" !== t.name && "rotation" !== t.name || h(t.oldData, t.newData) || c(x);
        }var d = (n.x, n.y, n.z, o.components.camera.camera),
            l = d.getWorldQuaternion().inverse(),
            s = t.object3D.getWorldQuaternion(),
            m = t.object3D.rotation.order,
            v = new e.Quaternion(),
            y = t.object3D.rotation.clone(),
            g = new e.Vector3(n.x, n.y, n.z),
            x = i,
            b = { x: e.Math.radToDeg(y.x), y: e.Math.radToDeg(y.y), z: e.Math.radToDeg(y.z) };return document.addEventListener("mousemove", c), document.addEventListener("touchmove", a), o.addEventListener("componentchanged", f), function (e) {
          document.removeEventListener("mousemove", c), document.removeEventListener("touchmove", a), o.removeEventListener("componentchanged", f);
        };
      }function s(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? b : arguments[1],
            n = e.THREE;e.registerComponent(t, { schema: { lockToLocalRotation: { default: !0 } }, init: function init() {
            k(this, n, t, this.data.lockToLocalRotation);
          }, update: function update() {}, remove: function remove() {
            V();
          }, pause: function pause() {
            V();
          }, play: function play() {
            k(this, n, t, this.data.lockToLocalRotation);
          } });
      }var p = function () {
        function e(e, t) {
          var n = [],
              o = !0,
              r = !1,
              i = void 0;try {
            for (var u, c = e[Symbol.iterator](); !(o = (u = c.next()).done) && (n.push(u.value), !t || n.length !== t); o = !0) {}
          } catch (e) {
            r = !0, i = e;
          } finally {
            try {
              !o && c.return && c.return();
            } finally {
              if (r) throw i;
            }
          }return n;
        }return function (t, n) {
          if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return e(t, n);throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }(),
          m = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return typeof e === "undefined" ? "undefined" : _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
      },
          v = o(function (e, t) {
        function n(e) {
          var t = [];for (var n in e) {
            t.push(n);
          }return t;
        }t = e.exports = "function" == typeof Object.keys ? Object.keys : n, t.shim = n;
      }),
          y = o(function (e, t) {
        function n(e) {
          return "[object Arguments]" == Object.prototype.toString.call(e);
        }function o(e) {
          return e && "object" == ("undefined" == typeof e ? "undefined" : m(e)) && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1;
        }var r = "[object Arguments]" == function () {
          return Object.prototype.toString.call(arguments);
        }();t = e.exports = r ? n : o, t.supported = n, t.unsupported = o;
      }),
          h = o(function (e) {
        function t(e) {
          return null === e || void 0 === e;
        }function n(e) {
          return !(!e || "object" !== ("undefined" == typeof e ? "undefined" : m(e)) || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0]);
        }function o(e, o, a) {
          var f, d;if (t(e) || t(o)) return !1;if (e.prototype !== o.prototype) return !1;if (u(e)) return !!u(o) && (e = r.call(e), o = r.call(o), c(e, o, a));if (n(e)) {
            if (!n(o)) return !1;if (e.length !== o.length) return !1;for (f = 0; f < e.length; f++) {
              if (e[f] !== o[f]) return !1;
            }return !0;
          }try {
            var l = i(e),
                s = i(o);
          } catch (e) {
            return !1;
          }if (l.length != s.length) return !1;for (l.sort(), s.sort(), f = l.length - 1; f >= 0; f--) {
            if (l[f] != s[f]) return !1;
          }for (f = l.length - 1; f >= 0; f--) {
            if (d = l[f], !c(e[d], o[d], a)) return !1;
          }return ("undefined" == typeof e ? "undefined" : m(e)) === ("undefined" == typeof o ? "undefined" : m(o));
        }var r = Array.prototype.slice,
            i = v,
            u = y,
            c = e.exports = function (e, t, n) {
          return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != ("undefined" == typeof e ? "undefined" : m(e)) && "object" != ("undefined" == typeof t ? "undefined" : m(t)) ? n.strict ? e === t : e == t : o(e, t, n));
        };
      }),
          g = r,
          x = i,
          b = "click-drag",
          w = "dragstart",
          j = "dragmove",
          z = "dragend",
          E = 300,
          D = function () {
        function e(e) {
          return n = new e.Matrix4(), !0;
        }var t = !1,
            n = void 0;return { unproject: function unproject(o, r, i) {
            var u = i.components.camera.camera;return t = t || e(o), r.applyProjection(n.getInverse(u.projectionMatrix)), a(o, u, r);
          } };
      }(),
          T = D.unproject,
          L = function () {
        function e(e) {
          return n = new e.Vector3(), o = new e.Vector3(), !0;
        }var t = !1,
            n = void 0,
            o = void 0;return { screenCoordsToDirection: function screenCoordsToDirection(r, i, u) {
            var a = u.x,
                d = u.y;t = t || e(r);var l = f(a, d, 0, 0, window.innerWidth, window.innerHeight),
                s = l.x,
                p = l.y;n.set(s, p, -1);var m = T(r, n, i);c(i, o);var v = m.sub(o).normalize(),
                y = v.x,
                h = v.y,
                g = v.z;return { x: y, y: h, z: g };
          } };
      }(),
          O = L.screenCoordsToDirection,
          M = function () {
        function e(e) {
          return n = new e.Vector3(), o = new e.Vector3(), !0;
        }var t = !1,
            n = void 0,
            o = void 0;return { directionToWorldCoords: function directionToWorldCoords(r, i, u, a, f) {
            var l = a.x,
                s = a.y,
                p = a.z;t = t || e(r), c(i, o), n.set(l, s, p);var m = d(u.getWorldDirection(), f, n),
                v = m.add(o),
                y = v.x,
                h = v.y,
                g = v.z;return { x: y, y: h, z: g };
          } };
      }(),
          A = M.directionToWorldCoords,
          S = function () {
        function e(e) {
          return i = new e.Plane(), n = new e.Vector3(), o = new e.Vector3(), r = new e.Raycaster(), r.far = 1 / 0, r.near = 0, !0;
        }var t = !1,
            n = void 0,
            o = void 0,
            r = void 0,
            i = void 0;return { selectItem: function selectItem(u, a, f, d, l) {
            t = t || e(u);var s = O(u, f, { x: d, y: l }),
                p = s.x,
                m = s.y,
                v = s.z;c(f, n), o.set(p, m, v), r.set(n, o);var y = Array.from(f.sceneEl.querySelectorAll("[" + a + "]")).map(function (e) {
              return e.object3D;
            }),
                h = !0,
                g = r.intersectObjects(y, h).filter(function (e) {
              return !!e.object.el;
            }).filter(function (e) {
              return e.object.parent.visible;
            })[0];if (!g) return {};var x = g.point,
                b = g.object;i.setFromNormalAndCoplanarPoint(f.components.camera.camera.getWorldDirection().clone().negate(), x.clone().sub(n));var w = i.constant,
                j = x.sub(b.getWorldPosition());return { depth: w, offset: j, element: b.el };
          } };
      }(),
          W = S.selectItem,
          C = function () {
        var e = void 0;return { initialize: function initialize(t, n, o) {
            function r() {
              for (var e = performance.now(); D.length && e - D[0].time > E;) {
                D.shift();
              }
            }function i(e) {
              var t = e.detail.nextPosition;r(), D.push({ position: Object.assign({}, t), time: performance.now() });
            }function u(e) {
              var r = e.clientX,
                  u = e.clientY,
                  c = W(t, n, v, r, u),
                  a = c.depth,
                  f = c.offset,
                  d = c.element;d && !function () {
                var e = l(t, d, f, v, a, { clientX: r, clientY: u }, o);h = d, b = { offset: { x: f.x, y: f.y, z: f.z }, depth: a, clientX: r, clientY: u }, d.emit(w, b), d.addEventListener(j, i), y = function y(t) {
                  d.removeEventListener(j, i), e && e(), e = null;
                };
              }();
            }function c(e) {
              if (D.length < 2) return 0;var t = D.map(function (t) {
                return { time: t.time, value: t.position[e] };
              }).reduce(function (e, t, n, o) {
                if (0 === n) return e;var r = t.value - o[n - 1].value,
                    i = (t.time - o[n - 1].time) / 1e3;return e.push([t.time, r / i]), e;
              }, []),
                  n = x(g(t));return n(D[D.length - 1].time);
            }function a(e) {
              var t = e.clientX,
                  n = e.clientY;r();var o = { x: c("x"), y: c("y"), z: c("z") };h.emit(z, Object.assign({}, b, { clientX: t, clientY: n, velocity: o })), y && y(), y = void 0;
            }function f(e) {
              var t = p(e.changedTouches, 1),
                  n = t[0];u(n);
            }function d(e) {
              var t = p(e.changedTouches, 1),
                  n = t[0];a(n);
            }function s() {
              v = m.camera.el, document.addEventListener("mousedown", u), document.addEventListener("mouseup", a), document.addEventListener("touchstart", f), document.addEventListener("touchend", d), e = function e(_e) {
                document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", a), document.removeEventListener("touchstart", f), document.removeEventListener("touchend", d);
              };
            }var m = document.querySelector("a-scene"),
                v = void 0,
                y = void 0,
                h = void 0,
                b = void 0,
                D = [];m.hasLoaded ? s() : m.addEventListener("loaded", s);
          }, tearDown: function tearDown() {
            e && e(), e = void 0;
          } };
      }(),
          P = C.initialize,
          X = C.tearDown,
          Y = function () {
        var e = [];return { didMount: function didMount(t, n, o, r) {
            0 === e.length && P(n, o, r), e.indexOf(t) === -1 && e.push(t);
          }, didUnmount: function didUnmount(t) {
            var n = e.indexOf(t);n !== -1 && (e.splice(n, 1), 0 === e.length && X());
          } };
      }(),
          k = Y.didMount,
          V = Y.didUnmount;t.exports = s;
    }, {}] }, {}, [1])(1);
});
//# sourceMappingURL=aframe-click-drag-component.min.js.map
'use strict';

require('aframe');

require('aframe-click-drag-component');

/**
 * Created by xenia on 25.10.16.
 */

init();
function init() {
    alert("loaded");
    window.registerAframeClickDragComponent(window.AFRAME);
    window.onkeyup = function (e) {
        var key = e.keyCode ? e.keyCode : e.which;

        if (key == 81) {
            console.log('PRESSED Q');
            var camros = document.getElementById("mycamentity").getAttribute("rotation");
            var campos = document.getElementById("mycamentity").getAttribute("position");
            console.log(campos);

            var x = campos.x;
            var y = campos.y;
            var z = campos.z;

            camros.y += 4;
            campos.x -= 0.1;

            document.getElementById("mycamentity").setAttribute("rotation", camros);
        }

        if (key == 69) {
            var locked = document.getElementById("mycam").getAttribute('look-controls');
            console.log(locked);

            if (locked.enabled === "true") {
                document.getElementById("mycam").setAttribute('look-controls', { enabled: 'false' });
            } else {
                document.getElementById("mycam").setAttribute('look-controls', { enabled: 'true' });
            }
        }
    };
}

function loadNewText() {
    var yourtext = document.getElementById("newtext").value;
    var yourcolor = document.getElementById("newcolor").value;

    var textnode = document.createElement("A-ENTITY");
    textnode.setAttribute('click-drag', 1);
    textnode.setAttribute('position', { x: 1, y: 1, z: 0 });

    textnode.setAttribute("bmfont-text", "text: " + yourtext + "; color:" + yourcolor + "; width:1000");
    textnode.setAttribute("scale", { x: 5, y: 5, z: 1 });

    console.log(textnode);
    document.getElementById("myscene").appendChild(textnode);
}
"use strict";

!function (t) {
   function e(n) {
      if (r[n]) return r[n].exports;var i = r[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
   }var r = {};return e.m = t, e.c = r, e.p = "", e(0);
}([function (t, e, r) {
   function n(t, e) {
      o(t.font, function (r, n) {
         if (r) throw r;var i = new THREE.TextureLoader();i.load(t.image, function (t) {
            e(n, t);
         });
      });
   }if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");var i = r(29),
       o = r(21),
       a = r(7);r(6), AFRAME.registerComponent("bmfont-text", { schema: { text: { type: "string" }, width: { type: "number", "default": 1e3 }, align: { type: "string", "default": "left" }, letterSpacing: { type: "number", "default": 0 }, lineHeight: { type: "number", "default": 38 }, fnt: { type: "string", "default": "https://cdn.rawgit.com/bryik/aframe-bmfont-text-component/aa0655cf90f646e12c40ab4708ea90b4686cfb45/assets/DejaVu-sdf.fnt" }, fntImage: { type: "string", "default": "https://cdn.rawgit.com/bryik/aframe-bmfont-text-component/aa0655cf90f646e12c40ab4708ea90b4686cfb45/assets/DejaVu-sdf.png" }, mode: { type: "string", "default": "normal" }, color: { type: "color", "default": "#000" }, opacity: { type: "number", "default": "1.0" } }, update: function update(t) {
         function e(t, e) {
            e.needsUpdate = !0, e.anisotropy = 16;var n = { font: t, text: o.text, width: o.width, align: o.align, letterSpacing: o.letterSpacing, lineHeight: o.lineHeight, mode: o.mode },
                u = i(n),
                s = new THREE.RawShaderMaterial(a({ map: e, side: THREE.DoubleSide, transparent: !0, color: o.color, opacity: o.opacity })),
                f = new THREE.Mesh(u, s);f.rotation.y = Math.PI, f.scale.multiplyScalar(-.005), r.setObject3D("bmfont-text", f);
         }var r = this.el,
             o = this.data;n({ font: o.fnt, image: o.fntImage }, e);
      }, remove: function remove() {
         this.el.removeObject3D("bmfont-text");
      } });
}, function (t, e, r) {
   (function (t, n) {
      /*!
      * The buffer module from node.js, for the browser.
      *
      * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
      * @license  MIT
      */
      "use strict";
      function i() {
         try {
            var t = new Uint8Array(1);return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
                  return 42;
               } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
         } catch (e) {
            return !1;
         }
      }function o() {
         return t.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }function a(e, r) {
         if (o() < r) throw new RangeError("Invalid typed array length");return t.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(r), e.__proto__ = t.prototype) : (null === e && (e = new t(r)), e.length = r), e;
      }function t(e, r, n) {
         if (!(t.TYPED_ARRAY_SUPPORT || this instanceof t)) return new t(e, r, n);if ("number" == typeof e) {
            if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");return h(this, e);
         }return u(this, e, r, n);
      }function u(t, e, r, n) {
         if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? l(t, e, r, n) : "string" == typeof e ? c(t, e, r) : d(t, e);
      }function s(t) {
         if ("number" != typeof t) throw new TypeError('"size" argument must be a number');if (t < 0) throw new RangeError('"size" argument must not be negative');
      }function f(t, e, r, n) {
         return s(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
      }function h(e, r) {
         if (s(r), e = a(e, r < 0 ? 0 : 0 | g(r)), !t.TYPED_ARRAY_SUPPORT) for (var n = 0; n < r; ++n) {
            e[n] = 0;
         }return e;
      }function c(e, r, n) {
         if ("string" == typeof n && "" !== n || (n = "utf8"), !t.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');var i = 0 | v(r, n);e = a(e, i);var o = e.write(r, n);return o !== i && (e = e.slice(0, o)), e;
      }function p(t, e) {
         var r = e.length < 0 ? 0 : 0 | g(e.length);t = a(t, r);for (var n = 0; n < r; n += 1) {
            t[n] = 255 & e[n];
         }return t;
      }function l(e, r, n, i) {
         if (r.byteLength, n < 0 || r.byteLength < n) throw new RangeError("'offset' is out of bounds");if (r.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");return r = void 0 === n && void 0 === i ? new Uint8Array(r) : void 0 === i ? new Uint8Array(r, n) : new Uint8Array(r, n, i), t.TYPED_ARRAY_SUPPORT ? (e = r, e.__proto__ = t.prototype) : e = p(e, r), e;
      }function d(e, r) {
         if (t.isBuffer(r)) {
            var n = 0 | g(r.length);return e = a(e, n), 0 === e.length ? e : (r.copy(e, 0, 0, n), e);
         }if (r) {
            if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || $(r.length) ? a(e, 0) : p(e, r);if ("Buffer" === r.type && Q(r.data)) return p(e, r.data);
         }throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }function g(t) {
         if (t >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");return 0 | t;
      }function y(e) {
         return +e != e && (e = 0), t.alloc(+e);
      }function v(e, r) {
         if (t.isBuffer(e)) return e.length;if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;"string" != typeof e && (e = "" + e);var n = e.length;if (0 === n) return 0;for (var i = !1;;) {
            switch (r) {case "ascii":case "latin1":case "binary":
                  return n;case "utf8":case "utf-8":case void 0:
                  return G(e).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                  return 2 * n;case "hex":
                  return n >>> 1;case "base64":
                  return J(e).length;default:
                  if (i) return G(e).length;r = ("" + r).toLowerCase(), i = !0;}
         }
      }function w(t, e, r) {
         var n = !1;if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";if (r >>>= 0, e >>>= 0, r <= e) return "";for (t || (t = "utf8");;) {
            switch (t) {case "hex":
                  return P(this, e, r);case "utf8":case "utf-8":
                  return U(this, e, r);case "ascii":
                  return M(this, e, r);case "latin1":case "binary":
                  return O(this, e, r);case "base64":
                  return B(this, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                  return L(this, e, r);default:
                  if (n) throw new TypeError("Unknown encoding: " + t);t = (t + "").toLowerCase(), n = !0;}
         }
      }function m(t, e, r) {
         var n = t[e];t[e] = t[r], t[r] = n;
      }function b(e, r, n, i, o) {
         if (0 === e.length) return -1;if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
            if (o) return -1;n = e.length - 1;
         } else if (n < 0) {
            if (!o) return -1;n = 0;
         }if ("string" == typeof r && (r = t.from(r, i)), t.isBuffer(r)) return 0 === r.length ? -1 : E(e, r, n, i, o);if ("number" == typeof r) return r = 255 & r, t.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, r, n) : Uint8Array.prototype.lastIndexOf.call(e, r, n) : E(e, [r], n, i, o);throw new TypeError("val must be string, number or Buffer");
      }function E(t, e, r, n, i) {
         function o(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
         }var a = 1,
             u = t.length,
             s = e.length;if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
            if (t.length < 2 || e.length < 2) return -1;a = 2, u /= 2, s /= 2, r /= 2;
         }var f;if (i) {
            var h = -1;for (f = r; f < u; f++) {
               if (o(t, f) === o(e, h === -1 ? 0 : f - h)) {
                  if (h === -1 && (h = f), f - h + 1 === s) return h * a;
               } else h !== -1 && (f -= f - h), h = -1;
            }
         } else for (r + s > u && (r = u - s), f = r; f >= 0; f--) {
            for (var c = !0, p = 0; p < s; p++) {
               if (o(t, f + p) !== o(e, p)) {
                  c = !1;break;
               }
            }if (c) return f;
         }return -1;
      }function A(t, e, r, n) {
         r = Number(r) || 0;var i = t.length - r;n ? (n = Number(n), n > i && (n = i)) : n = i;var o = e.length;if (o % 2 !== 0) throw new TypeError("Invalid hex string");n > o / 2 && (n = o / 2);for (var a = 0; a < n; ++a) {
            var u = parseInt(e.substr(2 * a, 2), 16);if (isNaN(u)) return a;t[r + a] = u;
         }return a;
      }function x(t, e, r, n) {
         return W(G(e, t.length - r), t, r, n);
      }function _(t, e, r, n) {
         return W(z(e), t, r, n);
      }function R(t, e, r, n) {
         return _(t, e, r, n);
      }function T(t, e, r, n) {
         return W(J(e), t, r, n);
      }function S(t, e, r, n) {
         return W(V(e, t.length - r), t, r, n);
      }function B(t, e, r) {
         return 0 === e && r === t.length ? Z.fromByteArray(t) : Z.fromByteArray(t.slice(e, r));
      }function U(t, e, r) {
         r = Math.min(t.length, r);for (var n = [], i = e; i < r;) {
            var o = t[i],
                a = null,
                u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;if (i + u <= r) {
               var s, f, h, c;switch (u) {case 1:
                     o < 128 && (a = o);break;case 2:
                     s = t[i + 1], 128 === (192 & s) && (c = (31 & o) << 6 | 63 & s, c > 127 && (a = c));break;case 3:
                     s = t[i + 1], f = t[i + 2], 128 === (192 & s) && 128 === (192 & f) && (c = (15 & o) << 12 | (63 & s) << 6 | 63 & f, c > 2047 && (c < 55296 || c > 57343) && (a = c));break;case 4:
                     s = t[i + 1], f = t[i + 2], h = t[i + 3], 128 === (192 & s) && 128 === (192 & f) && 128 === (192 & h) && (c = (15 & o) << 18 | (63 & s) << 12 | (63 & f) << 6 | 63 & h, c > 65535 && c < 1114112 && (a = c));}
            }null === a ? (a = 65533, u = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), i += u;
         }return I(n);
      }function I(t) {
         var e = t.length;if (e <= tt) return String.fromCharCode.apply(String, t);for (var r = "", n = 0; n < e;) {
            r += String.fromCharCode.apply(String, t.slice(n, n += tt));
         }return r;
      }function M(t, e, r) {
         var n = "";r = Math.min(t.length, r);for (var i = e; i < r; ++i) {
            n += String.fromCharCode(127 & t[i]);
         }return n;
      }function O(t, e, r) {
         var n = "";r = Math.min(t.length, r);for (var i = e; i < r; ++i) {
            n += String.fromCharCode(t[i]);
         }return n;
      }function P(t, e, r) {
         var n = t.length;(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);for (var i = "", o = e; o < r; ++o) {
            i += q(t[o]);
         }return i;
      }function L(t, e, r) {
         for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) {
            i += String.fromCharCode(n[o] + 256 * n[o + 1]);
         }return i;
      }function C(t, e, r) {
         if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }function k(e, r, n, i, o, a) {
         if (!t.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');if (r > o || r < a) throw new RangeError('"value" argument is out of bounds');if (n + i > e.length) throw new RangeError("Index out of range");
      }function j(t, e, r, n) {
         e < 0 && (e = 65535 + e + 1);for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) {
            t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
         }
      }function H(t, e, r, n) {
         e < 0 && (e = 4294967295 + e + 1);for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) {
            t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
         }
      }function Y(t, e, r, n, i, o) {
         if (r + n > t.length) throw new RangeError("Index out of range");if (r < 0) throw new RangeError("Index out of range");
      }function D(t, e, r, n, i) {
         return i || Y(t, e, r, 4, 3.4028234663852886e38, -3.4028234663852886e38), K.write(t, e, r, n, 23, 4), r + 4;
      }function N(t, e, r, n, i) {
         return i || Y(t, e, r, 8, 1.7976931348623157e308, -1.7976931348623157e308), K.write(t, e, r, n, 52, 8), r + 8;
      }function F(t) {
         if (t = X(t).replace(et, ""), t.length < 2) return "";for (; t.length % 4 !== 0;) {
            t += "=";
         }return t;
      }function X(t) {
         return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }function q(t) {
         return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }function G(t, e) {
         e = e || 1 / 0;for (var r, n = t.length, i = null, o = [], a = 0; a < n; ++a) {
            if (r = t.charCodeAt(a), r > 55295 && r < 57344) {
               if (!i) {
                  if (r > 56319) {
                     (e -= 3) > -1 && o.push(239, 191, 189);continue;
                  }if (a + 1 === n) {
                     (e -= 3) > -1 && o.push(239, 191, 189);continue;
                  }i = r;continue;
               }if (r < 56320) {
                  (e -= 3) > -1 && o.push(239, 191, 189), i = r;continue;
               }r = (i - 55296 << 10 | r - 56320) + 65536;
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);if (i = null, r < 128) {
               if ((e -= 1) < 0) break;o.push(r);
            } else if (r < 2048) {
               if ((e -= 2) < 0) break;o.push(r >> 6 | 192, 63 & r | 128);
            } else if (r < 65536) {
               if ((e -= 3) < 0) break;o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
            } else {
               if (!(r < 1114112)) throw new Error("Invalid code point");if ((e -= 4) < 0) break;o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
            }
         }return o;
      }function z(t) {
         for (var e = [], r = 0; r < t.length; ++r) {
            e.push(255 & t.charCodeAt(r));
         }return e;
      }function V(t, e) {
         for (var r, n, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) {
            r = t.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
         }return o;
      }function J(t) {
         return Z.toByteArray(F(t));
      }function W(t, e, r, n) {
         for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) {
            e[i + r] = t[i];
         }return i;
      }function $(t) {
         return t !== t;
      }var Z = r(10),
          K = r(16),
          Q = r(12);e.Buffer = t, e.SlowBuffer = y, e.INSPECT_MAX_BYTES = 50, t.TYPED_ARRAY_SUPPORT = void 0 !== n.TYPED_ARRAY_SUPPORT ? n.TYPED_ARRAY_SUPPORT : i(), e.kMaxLength = o(), t.poolSize = 8192, t._augment = function (e) {
         return e.__proto__ = t.prototype, e;
      }, t.from = function (t, e, r) {
         return u(null, t, e, r);
      }, t.TYPED_ARRAY_SUPPORT && (t.prototype.__proto__ = Uint8Array.prototype, t.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && t[Symbol.species] === t && Object.defineProperty(t, Symbol.species, { value: null, configurable: !0 })), t.alloc = function (t, e, r) {
         return f(null, t, e, r);
      }, t.allocUnsafe = function (t) {
         return h(null, t);
      }, t.allocUnsafeSlow = function (t) {
         return h(null, t);
      }, t.isBuffer = function (t) {
         return !(null == t || !t._isBuffer);
      }, t.compare = function (e, r) {
         if (!t.isBuffer(e) || !t.isBuffer(r)) throw new TypeError("Arguments must be Buffers");if (e === r) return 0;for (var n = e.length, i = r.length, o = 0, a = Math.min(n, i); o < a; ++o) {
            if (e[o] !== r[o]) {
               n = e[o], i = r[o];break;
            }
         }return n < i ? -1 : i < n ? 1 : 0;
      }, t.isEncoding = function (t) {
         switch (String(t).toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
               return !0;default:
               return !1;}
      }, t.concat = function (e, r) {
         if (!Q(e)) throw new TypeError('"list" argument must be an Array of Buffers');if (0 === e.length) return t.alloc(0);var n;if (void 0 === r) for (r = 0, n = 0; n < e.length; ++n) {
            r += e[n].length;
         }var i = t.allocUnsafe(r),
             o = 0;for (n = 0; n < e.length; ++n) {
            var a = e[n];if (!t.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i, o), o += a.length;
         }return i;
      }, t.byteLength = v, t.prototype._isBuffer = !0, t.prototype.swap16 = function () {
         var t = this.length;if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var e = 0; e < t; e += 2) {
            m(this, e, e + 1);
         }return this;
      }, t.prototype.swap32 = function () {
         var t = this.length;if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var e = 0; e < t; e += 4) {
            m(this, e, e + 3), m(this, e + 1, e + 2);
         }return this;
      }, t.prototype.swap64 = function () {
         var t = this.length;if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var e = 0; e < t; e += 8) {
            m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
         }return this;
      }, t.prototype.toString = function () {
         var t = 0 | this.length;return 0 === t ? "" : 0 === arguments.length ? U(this, 0, t) : w.apply(this, arguments);
      }, t.prototype.equals = function (e) {
         if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e || 0 === t.compare(this, e);
      }, t.prototype.inspect = function () {
         var t = "",
             r = e.INSPECT_MAX_BYTES;return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
      }, t.prototype.compare = function (e, r, n, i, o) {
         if (!t.isBuffer(e)) throw new TypeError("Argument must be a Buffer");if (void 0 === r && (r = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === o && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");if (i >= o && r >= n) return 0;if (i >= o) return -1;if (r >= n) return 1;if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;for (var a = o - i, u = n - r, s = Math.min(a, u), f = this.slice(i, o), h = e.slice(r, n), c = 0; c < s; ++c) {
            if (f[c] !== h[c]) {
               a = f[c], u = h[c];break;
            }
         }return a < u ? -1 : u < a ? 1 : 0;
      }, t.prototype.includes = function (t, e, r) {
         return this.indexOf(t, e, r) !== -1;
      }, t.prototype.indexOf = function (t, e, r) {
         return b(this, t, e, r, !0);
      }, t.prototype.lastIndexOf = function (t, e, r) {
         return b(this, t, e, r, !1);
      }, t.prototype.write = function (t, e, r, n) {
         if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e = 0 | e, isFinite(r) ? (r = 0 | r, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
         }var i = this.length - e;if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");n || (n = "utf8");for (var o = !1;;) {
            switch (n) {case "hex":
                  return A(this, t, e, r);case "utf8":case "utf-8":
                  return x(this, t, e, r);case "ascii":
                  return _(this, t, e, r);case "latin1":case "binary":
                  return R(this, t, e, r);case "base64":
                  return T(this, t, e, r);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
                  return S(this, t, e, r);default:
                  if (o) throw new TypeError("Unknown encoding: " + n);n = ("" + n).toLowerCase(), o = !0;}
         }
      }, t.prototype.toJSON = function () {
         return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };var tt = 4096;t.prototype.slice = function (e, r) {
         var n = this.length;e = ~~e, r = void 0 === r ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);var i;if (t.TYPED_ARRAY_SUPPORT) i = this.subarray(e, r), i.__proto__ = t.prototype;else {
            var o = r - e;i = new t(o, void 0);for (var a = 0; a < o; ++a) {
               i[a] = this[a + e];
            }
         }return i;
      }, t.prototype.readUIntLE = function (t, e, r) {
         t = 0 | t, e = 0 | e, r || C(t, e, this.length);for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
            n += this[t + o] * i;
         }return n;
      }, t.prototype.readUIntBE = function (t, e, r) {
         t = 0 | t, e = 0 | e, r || C(t, e, this.length);for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) {
            n += this[t + --e] * i;
         }return n;
      }, t.prototype.readUInt8 = function (t, e) {
         return e || C(t, 1, this.length), this[t];
      }, t.prototype.readUInt16LE = function (t, e) {
         return e || C(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, t.prototype.readUInt16BE = function (t, e) {
         return e || C(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, t.prototype.readUInt32LE = function (t, e) {
         return e || C(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, t.prototype.readUInt32BE = function (t, e) {
         return e || C(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, t.prototype.readIntLE = function (t, e, r) {
         t = 0 | t, e = 0 | e, r || C(t, e, this.length);for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) {
            n += this[t + o] * i;
         }return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n;
      }, t.prototype.readIntBE = function (t, e, r) {
         t = 0 | t, e = 0 | e, r || C(t, e, this.length);for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) {
            o += this[t + --n] * i;
         }return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o;
      }, t.prototype.readInt8 = function (t, e) {
         return e || C(t, 1, this.length), 128 & this[t] ? (255 - this[t] + 1) * -1 : this[t];
      }, t.prototype.readInt16LE = function (t, e) {
         e || C(t, 2, this.length);var r = this[t] | this[t + 1] << 8;return 32768 & r ? 4294901760 | r : r;
      }, t.prototype.readInt16BE = function (t, e) {
         e || C(t, 2, this.length);var r = this[t + 1] | this[t] << 8;return 32768 & r ? 4294901760 | r : r;
      }, t.prototype.readInt32LE = function (t, e) {
         return e || C(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, t.prototype.readInt32BE = function (t, e) {
         return e || C(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, t.prototype.readFloatLE = function (t, e) {
         return e || C(t, 4, this.length), K.read(this, t, !0, 23, 4);
      }, t.prototype.readFloatBE = function (t, e) {
         return e || C(t, 4, this.length), K.read(this, t, !1, 23, 4);
      }, t.prototype.readDoubleLE = function (t, e) {
         return e || C(t, 8, this.length), K.read(this, t, !0, 52, 8);
      }, t.prototype.readDoubleBE = function (t, e) {
         return e || C(t, 8, this.length), K.read(this, t, !1, 52, 8);
      }, t.prototype.writeUIntLE = function (t, e, r, n) {
         if (t = +t, e = 0 | e, r = 0 | r, !n) {
            var i = Math.pow(2, 8 * r) - 1;k(this, t, e, r, i, 0);
         }var o = 1,
             a = 0;for (this[e] = 255 & t; ++a < r && (o *= 256);) {
            this[e + a] = t / o & 255;
         }return e + r;
      }, t.prototype.writeUIntBE = function (t, e, r, n) {
         if (t = +t, e = 0 | e, r = 0 | r, !n) {
            var i = Math.pow(2, 8 * r) - 1;k(this, t, e, r, i, 0);
         }var o = r - 1,
             a = 1;for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) {
            this[e + o] = t / a & 255;
         }return e + r;
      }, t.prototype.writeUInt8 = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 1, 255, 0), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[r] = 255 & e, r + 1;
      }, t.prototype.writeUInt16LE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : j(this, e, r, !0), r + 2;
      }, t.prototype.writeUInt16BE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 2, 65535, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : j(this, e, r, !1), r + 2;
      }, t.prototype.writeUInt32LE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = 255 & e) : H(this, e, r, !0), r + 4;
      }, t.prototype.writeUInt32BE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 4, 4294967295, 0), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e) : H(this, e, r, !1), r + 4;
      }, t.prototype.writeIntLE = function (t, e, r, n) {
         if (t = +t, e = 0 | e, !n) {
            var i = Math.pow(2, 8 * r - 1);k(this, t, e, r, i - 1, -i);
         }var o = 0,
             a = 1,
             u = 0;for (this[e] = 255 & t; ++o < r && (a *= 256);) {
            t < 0 && 0 === u && 0 !== this[e + o - 1] && (u = 1), this[e + o] = (t / a >> 0) - u & 255;
         }return e + r;
      }, t.prototype.writeIntBE = function (t, e, r, n) {
         if (t = +t, e = 0 | e, !n) {
            var i = Math.pow(2, 8 * r - 1);k(this, t, e, r, i - 1, -i);
         }var o = r - 1,
             a = 1,
             u = 0;for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) {
            t < 0 && 0 === u && 0 !== this[e + o + 1] && (u = 1), this[e + o] = (t / a >> 0) - u & 255;
         }return e + r;
      }, t.prototype.writeInt8 = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 1, 127, -128), t.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[r] = 255 & e, r + 1;
      }, t.prototype.writeInt16LE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8) : j(this, e, r, !0), r + 2;
      }, t.prototype.writeInt16BE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 2, 32767, -32768), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 8, this[r + 1] = 255 & e) : j(this, e, r, !1), r + 2;
      }, t.prototype.writeInt32LE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 4, 2147483647, -2147483648), t.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & e, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24) : H(this, e, r, !0), r + 4;
      }, t.prototype.writeInt32BE = function (e, r, n) {
         return e = +e, r = 0 | r, n || k(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), t.TYPED_ARRAY_SUPPORT ? (this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = 255 & e) : H(this, e, r, !1), r + 4;
      }, t.prototype.writeFloatLE = function (t, e, r) {
         return D(this, t, e, !0, r);
      }, t.prototype.writeFloatBE = function (t, e, r) {
         return D(this, t, e, !1, r);
      }, t.prototype.writeDoubleLE = function (t, e, r) {
         return N(this, t, e, !0, r);
      }, t.prototype.writeDoubleBE = function (t, e, r) {
         return N(this, t, e, !1, r);
      }, t.prototype.copy = function (e, r, n, i) {
         if (n || (n = 0), i || 0 === i || (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (r < 0) throw new RangeError("targetStart out of bounds");if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");if (i < 0) throw new RangeError("sourceEnd out of bounds");i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);var o,
             a = i - n;if (this === e && n < r && r < i) for (o = a - 1; o >= 0; --o) {
            e[o + r] = this[o + n];
         } else if (a < 1e3 || !t.TYPED_ARRAY_SUPPORT) for (o = 0; o < a; ++o) {
            e[o + r] = this[o + n];
         } else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), r);return a;
      }, t.prototype.fill = function (e, r, n, i) {
         if ("string" == typeof e) {
            if ("string" == typeof r ? (i = r, r = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
               var o = e.charCodeAt(0);o < 256 && (e = o);
            }if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");if ("string" == typeof i && !t.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
         } else "number" == typeof e && (e = 255 & e);if (r < 0 || this.length < r || this.length < n) throw new RangeError("Out of range index");if (n <= r) return this;r >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0);var a;if ("number" == typeof e) for (a = r; a < n; ++a) {
            this[a] = e;
         } else {
            var u = t.isBuffer(e) ? e : G(new t(e, i).toString()),
                s = u.length;for (a = 0; a < n - r; ++a) {
               this[a + r] = u[a % s];
            }
         }return this;
      };var et = /[^+\/0-9A-Za-z-_]/g;
   }).call(e, r(1).Buffer, function () {
      return this;
   }());
}, function (t, e) {
   function r() {
      for (var t = {}, e = 0; e < arguments.length; e++) {
         var r = arguments[e];for (var i in r) {
            n.call(r, i) && (t[i] = r[i]);
         }
      }return t;
   }t.exports = r;var n = Object.prototype.hasOwnProperty;
}, function (t, e) {
   t.exports = function (t) {
      switch (t) {case "int8":
            return Int8Array;case "int16":
            return Int16Array;case "int32":
            return Int32Array;case "uint8":
            return Uint8Array;case "uint16":
            return Uint16Array;case "uint32":
            return Uint32Array;case "float32":
            return Float32Array;case "float64":
            return Float64Array;case "array":
            return Array;case "uint8_clamped":
            return Uint8ClampedArray;}
   };
}, function (t, e) {
   function r(t) {
      var e = n.call(t);return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt);
   }t.exports = r;var n = Object.prototype.toString;
}, function (t, e) {
   "use strict";
   function r(t) {
      if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
   }function n() {
      try {
         if (!Object.assign) return !1;var t = new String("abc");if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;for (var e = {}, r = 0; r < 10; r++) {
            e["_" + String.fromCharCode(r)] = r;
         }var n = Object.getOwnPropertyNames(e).map(function (t) {
            return e[t];
         });if ("0123456789" !== n.join("")) return !1;var i = {};return "abcdefghijklmnopqrst".split("").forEach(function (t) {
            i[t] = t;
         }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
      } catch (o) {
         return !1;
      }
   }var i = Object.prototype.hasOwnProperty,
       o = Object.prototype.propertyIsEnumerable;t.exports = n() ? Object.assign : function (t, e) {
      for (var n, a, u = r(t), s = 1; s < arguments.length; s++) {
         n = Object(arguments[s]);for (var f in n) {
            i.call(n, f) && (u[f] = n[f]);
         }if (Object.getOwnPropertySymbols) {
            a = Object.getOwnPropertySymbols(n);for (var h = 0; h < a.length; h++) {
               o.call(n, a[h]) && (u[a[h]] = n[a[h]]);
            }
         }
      }return u;
   };
}, function (t, e) {
   var r = AFRAME.utils.extendDeep,
       n = AFRAME.primitives.getMeshMixin();AFRAME.registerPrimitive("a-text", r({}, n, { defaultComponents: { "bmfont-text": {} }, mappings: { text: "bmfont-text.text", width: "bmfont-text.width", align: "bmfont-text.align", letterSpacing: "bmfont-text.letterSpacing", lineHeight: "bmfont-text.lineHeight", fnt: "bmfont-text.fnt", fntImage: "bmfont-text.fntImage", mode: "bmfont-text.mode", color: "bmfont-text.color", opacity: "bmfont-text.opacity" } }));
}, function (t, e, r) {
   var n = r(5);t.exports = function (t) {
      t = t || {};var e = "number" == typeof t.opacity ? t.opacity : 1,
          r = "number" == typeof t.alphaTest ? t.alphaTest : 1e-4,
          i = t.precision || "highp",
          o = t.color,
          a = t.map;return delete t.map, delete t.color, delete t.precision, delete t.opacity, n({ uniforms: { opacity: { type: "f", value: e }, map: { type: "t", value: a || new THREE.Texture() }, color: { type: "c", value: new THREE.Color(o) } }, vertexShader: ["attribute vec2 uv;", "attribute vec4 position;", "uniform mat4 projectionMatrix;", "uniform mat4 modelViewMatrix;", "varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * position;", "}"].join("\n"), fragmentShader: ["#ifdef GL_OES_standard_derivatives", "#extension GL_OES_standard_derivatives : enable", "#endif", "precision " + i + " float;", "uniform float opacity;", "uniform vec3 color;", "uniform sampler2D map;", "varying vec2 vUv;", "float aastep(float value) {", "  #ifdef GL_OES_standard_derivatives", "    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;", "  #else", "    float afwidth = (1.0 / 32.0) * (1.4142135623730951 / (2.0 * gl_FragCoord.w));", "  #endif", "  return smoothstep(0.5 - afwidth, 0.5 + afwidth, value);", "}", "void main() {", "  vec4 texColor = texture2D(map, vUv);", "  float alpha = aastep(texColor.a);", "  gl_FragColor = vec4(color, opacity * alpha);", 0 === r ? "" : "  if (gl_FragColor.a < " + r + ") discard;", "}"].join("\n") }, t);
   };
}, function (t, e) {
   function r(t) {
      return t.BYTES_PER_ELEMENT && "[object ArrayBuffer]" === n.call(t.buffer) || Array.isArray(t);
   }var n = Object.prototype.toString;t.exports = r;
}, function (t, e) {
   t.exports = function (t, e) {
      return "number" == typeof t ? t : "number" == typeof e ? e : 0;
   };
}, function (t, e) {
   "use strict";
   function r() {
      for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = 0, r = t.length; e < r; ++e) {
         u[e] = t[e], s[t.charCodeAt(e)] = e;
      }s["-".charCodeAt(0)] = 62, s["_".charCodeAt(0)] = 63;
   }function n(t) {
      var e,
          r,
          n,
          i,
          o,
          a,
          u = t.length;if (u % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");o = "=" === t[u - 2] ? 2 : "=" === t[u - 1] ? 1 : 0, a = new f(3 * u / 4 - o), n = o > 0 ? u - 4 : u;var h = 0;for (e = 0, r = 0; e < n; e += 4, r += 3) {
         i = s[t.charCodeAt(e)] << 18 | s[t.charCodeAt(e + 1)] << 12 | s[t.charCodeAt(e + 2)] << 6 | s[t.charCodeAt(e + 3)], a[h++] = i >> 16 & 255, a[h++] = i >> 8 & 255, a[h++] = 255 & i;
      }return 2 === o ? (i = s[t.charCodeAt(e)] << 2 | s[t.charCodeAt(e + 1)] >> 4, a[h++] = 255 & i) : 1 === o && (i = s[t.charCodeAt(e)] << 10 | s[t.charCodeAt(e + 1)] << 4 | s[t.charCodeAt(e + 2)] >> 2, a[h++] = i >> 8 & 255, a[h++] = 255 & i), a;
   }function i(t) {
      return u[t >> 18 & 63] + u[t >> 12 & 63] + u[t >> 6 & 63] + u[63 & t];
   }function o(t, e, r) {
      for (var n, o = [], a = e; a < r; a += 3) {
         n = (t[a] << 16) + (t[a + 1] << 8) + t[a + 2], o.push(i(n));
      }return o.join("");
   }function a(t) {
      for (var e, r = t.length, n = r % 3, i = "", a = [], s = 16383, f = 0, h = r - n; f < h; f += s) {
         a.push(o(t, f, f + s > h ? h : f + s));
      }return 1 === n ? (e = t[r - 1], i += u[e >> 2], i += u[e << 4 & 63], i += "==") : 2 === n && (e = (t[r - 2] << 8) + t[r - 1], i += u[e >> 10], i += u[e >> 4 & 63], i += u[e << 2 & 63], i += "="), a.push(i), a.join("");
   }e.toByteArray = n, e.fromByteArray = a;var u = [],
       s = [],
       f = "undefined" != typeof Uint8Array ? Uint8Array : Array;r();
}, function (t, e, r) {
   var n = r(1).Buffer;t.exports = function (t, e) {
      if (n.isBuffer(t) && n.isBuffer(e)) {
         if ("function" == typeof t.equals) return t.equals(e);if (t.length !== e.length) return !1;for (var r = 0; r < t.length; r++) {
            if (t[r] !== e[r]) return !1;
         }return !0;
      }
   };
}, function (t, e) {
   var r = {}.toString;t.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
   };
}, function (t, e, r) {
   function n(t, e, r) {
      if (!t) throw new TypeError("must specify data as first parameter");if (r = 0 | +(r || 0), Array.isArray(t) && Array.isArray(t[0])) {
         var n = t[0].length,
             o = t.length * n;e && "string" != typeof e || (e = new (i(e || "float32"))(o + r));var a = e.length - r;if (o !== a) throw new Error("source length " + o + " (" + n + "x" + t.length + ") does not match destination length " + a);for (var u = 0, s = r; u < t.length; u++) {
            for (var f = 0; f < n; f++) {
               e[s++] = t[u][f];
            }
         }
      } else if (e && "string" != typeof e) e.set(t, r);else {
         var h = i(e || "float32");0 === r ? e = new h(t) : (e = new h(t.length + r), e.set(t, r));
      }return e;
   }var i = r(3);t.exports = n;
}, function (t, e, r) {
   function n(t, e, r) {
      if (!u(e)) throw new TypeError("iterator must be a function");arguments.length < 3 && (r = this), "[object Array]" === s.call(t) ? i(t, e, r) : "string" == typeof t ? o(t, e, r) : a(t, e, r);
   }function i(t, e, r) {
      for (var n = 0, i = t.length; n < i; n++) {
         f.call(t, n) && e.call(r, t[n], n, t);
      }
   }function o(t, e, r) {
      for (var n = 0, i = t.length; n < i; n++) {
         e.call(r, t.charAt(n), n, t);
      }
   }function a(t, e, r) {
      for (var n in t) {
         f.call(t, n) && e.call(r, t[n], n, t);
      }
   }var u = r(4);t.exports = n;var s = Object.prototype.toString,
       f = Object.prototype.hasOwnProperty;
}, function (t, e) {
   (function (e) {
      "undefined" != typeof window ? t.exports = window : "undefined" != typeof e ? t.exports = e : "undefined" != typeof self ? t.exports = self : t.exports = {};
   }).call(e, function () {
      return this;
   }());
}, function (t, e) {
   e.read = function (t, e, r, n, i) {
      var o,
          a,
          u = 8 * i - n - 1,
          s = (1 << u) - 1,
          f = s >> 1,
          h = -7,
          c = r ? i - 1 : 0,
          p = r ? -1 : 1,
          l = t[e + c];for (c += p, o = l & (1 << -h) - 1, l >>= -h, h += u; h > 0; o = 256 * o + t[e + c], c += p, h -= 8) {}for (a = o & (1 << -h) - 1, o >>= -h, h += n; h > 0; a = 256 * a + t[e + c], c += p, h -= 8) {}if (0 === o) o = 1 - f;else {
         if (o === s) return a ? NaN : (l ? -1 : 1) * (1 / 0);a += Math.pow(2, n), o -= f;
      }return (l ? -1 : 1) * a * Math.pow(2, o - n);
   }, e.write = function (t, e, r, n, i, o) {
      var a,
          u,
          s,
          f = 8 * o - i - 1,
          h = (1 << f) - 1,
          c = h >> 1,
          p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          l = n ? 0 : o - 1,
          d = n ? 1 : -1,
          g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, a = h) : (a = Math.floor(Math.log(e) / Math.LN2), e * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), e += a + c >= 1 ? p / s : p * Math.pow(2, 1 - c), e * s >= 2 && (a++, s /= 2), a + c >= h ? (u = 0, a = h) : a + c >= 1 ? (u = (e * s - 1) * Math.pow(2, i), a += c) : (u = e * Math.pow(2, c - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + l] = 255 & u, l += d, u /= 256, i -= 8) {}for (a = a << i | u, f += i; f > 0; t[r + l] = 255 & a, l += d, a /= 256, f -= 8) {}t[r + l - d] |= 128 * g;
   };
}, function (t, e) {
   t.exports = function (t) {
      if (!t || "string" != typeof t) throw new Error("must specify property for indexof search");return new Function("array", "value", "start", ["start = start || 0", "for (var i=start; i<array.length; i++)", '  if (array[i]["' + t + '"] === value)', "      return i", "return -1"].join("\n"));
   };
}, function (t, e) {
   "function" == typeof Object.create ? t.exports = function (t, e) {
      t.super_ = e, t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } });
   } : t.exports = function (t, e) {
      t.super_ = e;var r = function r() {};r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
   };
}, function (t, e) {
   function r(t) {
      return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
   }function n(t) {
      return "function" == typeof t.readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0));
   } /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
   t.exports = function (t) {
      return null != t && (r(t) || n(t) || !!t._isBuffer);
   };
}, function (t, e, r) {
   function n(t) {
      this.glyphs = [], this._measure = this.computeMetrics.bind(this), this.update(t);
   }function i(t) {
      Object.defineProperty(n.prototype, t, { get: o(t), configurable: !0 });
   }function o(t) {
      return new Function(["return function " + t + "() {", "  return this._" + t, "}"].join("\n"))();
   }function a(t, e) {
      if (!t.chars || 0 === t.chars.length) return null;var r = d(t.chars, e);return r >= 0 ? t.chars[r] : null;
   }function u(t) {
      for (var e = 0; e < y.length; e++) {
         var r = y[e].charCodeAt(0),
             n = d(t.chars, r);if (n >= 0) return t.chars[n].height;
      }return 0;
   }function s(t) {
      for (var e = 0; e < v.length; e++) {
         var r = v[e].charCodeAt(0),
             n = d(t.chars, r);if (n >= 0) return t.chars[n];
      }return 0;
   }function f(t) {
      for (var e = 0; e < w.length; e++) {
         var r = w[e].charCodeAt(0),
             n = d(t.chars, r);if (n >= 0) return t.chars[n].height;
      }return 0;
   }function h(t, e, r) {
      if (!t.kernings || 0 === t.kernings.length) return 0;for (var n = t.kernings, i = 0; i < n.length; i++) {
         var o = n[i];if (o.first === e && o.second === r) return o.amount;
      }return 0;
   }function c(t) {
      return "center" === t ? A : "right" === t ? x : E;
   }var p = r(34),
       l = r(2),
       d = r(17)("id"),
       g = r(9),
       y = ["x", "e", "a", "o", "n", "s", "r", "c", "u", "m", "v", "w", "z"],
       v = ["m", "w"],
       w = ["H", "I", "N", "E", "F", "K", "L", "T", "U", "V", "W", "X", "Y", "Z"],
       m = "\t".charCodeAt(0),
       b = " ".charCodeAt(0),
       E = 0,
       A = 1,
       x = 2;t.exports = function (t) {
      return new n(t);
   }, n.prototype.update = function (t) {
      if (t = l({ measure: this._measure }, t), this._opt = t, this._opt.tabSize = g(this._opt.tabSize, 4), !t.font) throw new Error("must provide a valid bitmap font");var e = this.glyphs,
          r = t.text || "",
          n = t.font;this._setupSpaceGlyphs(n);var i = p.lines(r, t),
          o = t.width || 0;e.length = 0;var a = i.reduce(function (t, e) {
         return Math.max(t, e.width, o);
      }, 0),
          s = 0,
          d = 0,
          y = g(t.lineHeight, n.common.lineHeight),
          v = n.common.base,
          w = y - v,
          m = t.letterSpacing || 0,
          b = y * i.length - w,
          E = c(this._opt.align);d -= b, this._width = a, this._height = b, this._descender = y - v, this._baseline = v, this._xHeight = u(n), this._capHeight = f(n), this._lineHeight = y, this._ascender = y - w - this._xHeight;var _ = this;i.forEach(function (t, i) {
         for (var o, u = t.start, f = t.end, c = t.width, p = u; p < f; p++) {
            var l = r.charCodeAt(p),
                g = _.getGlyph(n, l);if (g) {
               o && (s += h(n, o.id, g.id));var v = s;E === A ? v += (a - c) / 2 : E === x && (v += a - c), e.push({ position: [v, d], data: g, index: p, line: i }), s += g.xadvance + m, o = g;
            }
         }d += y, s = 0;
      }), this._linesTotal = i.length;
   }, n.prototype._setupSpaceGlyphs = function (t) {
      if (this._fallbackSpaceGlyph = null, this._fallbackTabGlyph = null, t.chars && 0 !== t.chars.length) {
         var e = a(t, b) || s(t) || t.chars[0],
             r = this._opt.tabSize * e.xadvance;this._fallbackSpaceGlyph = e, this._fallbackTabGlyph = l(e, { x: 0, y: 0, xadvance: r, id: m, xoffset: 0, yoffset: 0, width: 0, height: 0 });
      }
   }, n.prototype.getGlyph = function (t, e) {
      var r = a(t, e);return r ? r : e === m ? this._fallbackTabGlyph : e === b ? this._fallbackSpaceGlyph : null;
   }, n.prototype.computeMetrics = function (t, e, r, n) {
      var i,
          o,
          a = this._opt.letterSpacing || 0,
          u = this._opt.font,
          s = 0,
          f = 0,
          c = 0;if (!u.chars || 0 === u.chars.length) return { start: e, end: e, width: 0 };r = Math.min(t.length, r);for (var p = e; p < r; p++) {
         var l = t.charCodeAt(p),
             i = this.getGlyph(u, l);if (i) {
            var d = (i.xoffset, o ? h(u, o.id, i.id) : 0);s += d;var g = s + i.xadvance + a,
                y = s + i.width;if (y >= n || g >= n) break;s = g, f = y, o = i;
         }c++;
      }return o && (f += o.xoffset), { start: e, end: e + c, width: f };
   }, ["width", "height", "descender", "ascender", "xHeight", "baseline", "capHeight", "lineHeight"].forEach(i);
}, function (t, e, r) {
   (function (e) {
      function n(t) {
         var e = Object.prototype.toString;return "[object ArrayBuffer]" === e.call(t);
      }function i(t) {
         if (p) return c(t, { responseType: "arraybuffer" });if ("undefined" == typeof window.XMLHttpRequest) throw new Error("your browser does not support XHR loading");var e = new window.XMLHttpRequest();return e.overrideMimeType("text/plain; charset=x-user-defined"), c({ xhr: e }, t);
      }var o = r(35),
          a = function a() {},
          u = r(23),
          s = r(25),
          f = r(24),
          h = r(22),
          c = r(2),
          p = function () {
         return window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
      }();t.exports = function (t, r) {
         r = "function" == typeof r ? r : a, "string" == typeof t ? t = { uri: t } : t || (t = {});var c = t.binary;c && (t = i(t)), o(t, function (i, o, c) {
            if (i) return r(i);if (!/^2/.test(o.statusCode)) return r(new Error("http status code: " + o.statusCode));if (!c) return r(new Error("no body result"));var p = !1;if (n(c)) {
               var l = new Uint8Array(c);c = new e(l, "binary");
            }h(c) && (p = !0, "string" == typeof c && (c = new e(c, "binary"))), p || (e.isBuffer(c) && (c = c.toString(t.encoding)), c = c.trim());var d;try {
               var g = o.headers["content-type"];d = p ? f(c) : /json/.test(g) || "{" === c.charAt(0) ? JSON.parse(c) : /xml/.test(g) || "<" === c.charAt(0) ? s(c) : u(c);
            } catch (y) {
               r(new Error("error parsing font " + y.message)), r = a;
            }r(null, d);
         });
      };
   }).call(e, r(1).Buffer);
}, function (t, e, r) {
   (function (e) {
      var n = r(11),
          i = new e([66, 77, 70, 3]);t.exports = function (t) {
         return "string" == typeof t ? "BMF" === t.substring(0, 3) : t.length > 4 && n(t.slice(0, 4), i);
      };
   }).call(e, r(1).Buffer);
}, function (t, e) {
   function r(t, e) {
      if (t = t.replace(/\t+/g, " ").trim(), !t) return null;var r = t.indexOf(" ");if (r === -1) throw new Error("no named row at line " + e);var i = t.substring(0, r);t = t.substring(r + 1), t = t.replace(/letter=[\'\"]\S+[\'\"]/gi, ""), t = t.split("="), t = t.map(function (t) {
         return t.trim().match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);
      });for (var o = [], a = 0; a < t.length; a++) {
         var u = t[a];0 === a ? o.push({ key: u[0], data: "" }) : a === t.length - 1 ? o[o.length - 1].data = n(u[0]) : (o[o.length - 1].data = n(u[0]), o.push({ key: u[1], data: "" }));
      }var s = { key: i, data: {} };return o.forEach(function (t) {
         s.data[t.key] = t.data;
      }), s;
   }function n(t) {
      return t && 0 !== t.length ? 0 === t.indexOf('"') || 0 === t.indexOf("'") ? t.substring(1, t.length - 1) : t.indexOf(",") !== -1 ? i(t) : parseInt(t, 10) : "";
   }function i(t) {
      return t.split(",").map(function (t) {
         return parseInt(t, 10);
      });
   }t.exports = function (t) {
      if (!t) throw new Error("no data provided");t = t.toString().trim();var e = { pages: [], chars: [], kernings: [] },
          n = t.split(/\r\n?|\n/g);if (0 === n.length) throw new Error("no data in BMFont file");for (var i = 0; i < n.length; i++) {
         var o = r(n[i], i);if (o) if ("page" === o.key) {
            if ("number" != typeof o.data.id) throw new Error("malformed file at line " + i + " -- needs page id=N");if ("string" != typeof o.data.file) throw new Error("malformed file at line " + i + ' -- needs page file="path"');e.pages[o.data.id] = o.data.file;
         } else "chars" === o.key || "kernings" === o.key || ("char" === o.key ? e.chars.push(o.data) : "kerning" === o.key ? e.kernings.push(o.data) : e[o.key] = o.data);
      }return e;
   };
}, function (t, e) {
   function r(t, e, r) {
      if (r > e.length - 1) return 0;var s = e.readUInt8(r++),
          f = e.readInt32LE(r);switch (r += 4, s) {case 1:
            t.info = n(e, r);break;case 2:
            t.common = i(e, r);break;case 3:
            t.pages = o(e, r, f);break;case 4:
            t.chars = a(e, r, f);break;case 5:
            t.kernings = u(e, r, f);}return 5 + f;
   }function n(t, e) {
      var r = {};r.size = t.readInt16LE(e);var n = t.readUInt8(e + 2);return r.smooth = n >> 7 & 1, r.unicode = n >> 6 & 1, r.italic = n >> 5 & 1, r.bold = n >> 4 & 1, n >> 3 & 1 && (r.fixedHeight = 1), r.charset = t.readUInt8(e + 3) || "", r.stretchH = t.readUInt16LE(e + 4), r.aa = t.readUInt8(e + 6), r.padding = [t.readInt8(e + 7), t.readInt8(e + 8), t.readInt8(e + 9), t.readInt8(e + 10)], r.spacing = [t.readInt8(e + 11), t.readInt8(e + 12)], r.outline = t.readUInt8(e + 13), r.face = f(t, e + 14), r;
   }function i(t, e) {
      var r = {};r.lineHeight = t.readUInt16LE(e), r.base = t.readUInt16LE(e + 2), r.scaleW = t.readUInt16LE(e + 4), r.scaleH = t.readUInt16LE(e + 6), r.pages = t.readUInt16LE(e + 8);t.readUInt8(e + 10);return r.packed = 0, r.alphaChnl = t.readUInt8(e + 11), r.redChnl = t.readUInt8(e + 12), r.greenChnl = t.readUInt8(e + 13), r.blueChnl = t.readUInt8(e + 14), r;
   }function o(t, e, r) {
      for (var n = [], i = s(t, e), o = i.length + 1, a = r / o, u = 0; u < a; u++) {
         n[u] = t.slice(e, e + i.length).toString("utf8"), e += o;
      }return n;
   }function a(t, e, r) {
      for (var n = [], i = r / 20, o = 0; o < i; o++) {
         var a = {},
             u = 20 * o;a.id = t.readUInt32LE(e + 0 + u), a.x = t.readUInt16LE(e + 4 + u), a.y = t.readUInt16LE(e + 6 + u), a.width = t.readUInt16LE(e + 8 + u), a.height = t.readUInt16LE(e + 10 + u), a.xoffset = t.readInt16LE(e + 12 + u), a.yoffset = t.readInt16LE(e + 14 + u), a.xadvance = t.readInt16LE(e + 16 + u), a.page = t.readUInt8(e + 18 + u), a.chnl = t.readUInt8(e + 19 + u), n[o] = a;
      }return n;
   }function u(t, e, r) {
      for (var n = [], i = r / 10, o = 0; o < i; o++) {
         var a = {},
             u = 10 * o;a.first = t.readUInt32LE(e + 0 + u), a.second = t.readUInt32LE(e + 4 + u), a.amount = t.readInt16LE(e + 8 + u), n[o] = a;
      }return n;
   }function s(t, e) {
      for (var r = e; r < t.length && 0 !== t[r]; r++) {}return t.slice(e, r);
   }function f(t, e) {
      return s(t, e).toString("utf8");
   }var h = [66, 77, 70];t.exports = function (t) {
      if (t.length < 6) throw new Error("invalid buffer length for BMFont");var e = h.every(function (e, r) {
         return t.readUInt8(r) === e;
      });if (!e) throw new Error("BMFont missing BMF byte header");var n = 3,
          i = t.readUInt8(n++);if (i > 3) throw new Error("Only supports BMFont Binary v3 (BMFont App v1.10)");for (var o = { kernings: [], chars: [] }, a = 0; a < 5; a++) {
         n += r(o, t, n);
      }return o;
   };
}, function (t, e, r) {
   function n(t) {
      var e = i(t);return e.reduce(function (t, e) {
         var r = o(e.nodeName);return t[r] = e.nodeValue, t;
      }, {});
   }function i(t) {
      for (var e = [], r = 0; r < t.attributes.length; r++) {
         e.push(t.attributes[r]);
      }return e;
   }function o(t) {
      return s[t.toLowerCase()] || t;
   }var a = r(26),
       u = r(36),
       s = { scaleh: "scaleH", scalew: "scaleW", stretchh: "stretchH", lineheight: "lineHeight", alphachnl: "alphaChnl", redchnl: "redChnl", greenchnl: "greenChnl", bluechnl: "blueChnl" };t.exports = function (t) {
      t = t.toString();var e = u(t),
          r = { pages: [], chars: [], kernings: [] };["info", "common"].forEach(function (t) {
         var i = e.getElementsByTagName(t)[0];i && (r[t] = a(n(i)));
      });var i = e.getElementsByTagName("pages")[0];if (!i) throw new Error("malformed file -- no <pages> element");for (var o = i.getElementsByTagName("page"), s = 0; s < o.length; s++) {
         var f = o[s],
             h = parseInt(f.getAttribute("id"), 10),
             c = f.getAttribute("file");if (isNaN(h)) throw new Error('malformed file -- page "id" attribute is NaN');if (!c) throw new Error('malformed file -- needs page "file" attribute');r.pages[parseInt(h, 10)] = c;
      }return ["chars", "kernings"].forEach(function (t) {
         var i = e.getElementsByTagName(t)[0];if (i) for (var o = t.substring(0, t.length - 1), u = i.getElementsByTagName(o), s = 0; s < u.length; s++) {
            var f = u[s];r[t].push(a(n(f)));
         }
      }), r;
   };
}, function (t, e) {
   function r(t) {
      return t.split(",").map(function (t) {
         return parseInt(t, 10);
      });
   }var n = "chasrset";t.exports = function (t) {
      n in t && (t.charset = t[n], delete t[n]);for (var e in t) {
         "face" !== e && "charset" !== e && ("padding" === e || "spacing" === e ? t[e] = r(t[e]) : t[e] = parseInt(t[e], 10));
      }return t;
   };
}, function (t, e, r) {
   var n = r(33),
       i = r(14),
       o = function o(t) {
      return "[object Array]" === Object.prototype.toString.call(t);
   };t.exports = function (t) {
      if (!t) return {};var e = {};return i(n(t).split("\n"), function (t) {
         var r = t.indexOf(":"),
             i = n(t.slice(0, r)).toLowerCase(),
             a = n(t.slice(r + 1));"undefined" == typeof e[i] ? e[i] = a : o(e[i]) ? e[i].push(a) : e[i] = [e[i], a];
      }), e;
   };
}, function (t, e, r) {
   var n = r(3),
       i = r(8),
       o = r(19),
       a = [0, 2, 3],
       u = [2, 1, 3];t.exports = function (t, e) {
      t && (i(t) || o(t)) || (e = t || {}, t = null), e = "number" == typeof e ? { count: e } : e || {};for (var r = "string" == typeof e.type ? e.type : "uint16", s = "number" == typeof e.count ? e.count : 1, f = e.start || 0, h = e.clockwise !== !1 ? a : u, c = h[0], p = h[1], l = h[2], d = 6 * s, g = t || new (n(r))(d), y = 0, v = 0; y < d; y += 6, v += 4) {
         var w = y + f;g[w + 0] = v + 0, g[w + 1] = v + 1, g[w + 2] = v + 2, g[w + 3] = v + c, g[w + 4] = v + p, g[w + 5] = v + l;
      }return g;
   };
}, function (t, e, r) {
   function n(t) {
      c.call(this), "string" == typeof t && (t = { text: t }), this._opt = s({}, t), t && this.update(t);
   }var i = r(20),
       o = r(18),
       a = r(28),
       u = r(32),
       s = r(5),
       f = r(31),
       h = r(30),
       c = THREE.BufferGeometry;t.exports = function (t) {
      return new n(t);
   }, o(n, c), n.prototype.update = function (t) {
      if ("string" == typeof t && (t = { text: t }), t = s({}, this._opt, t), !t.font) throw new TypeError("must specify a { font } in options");this.layout = i(t);var e = t.flipY !== !1,
          r = t.font,
          n = r.common.scaleW,
          o = r.common.scaleH,
          h = this.layout.glyphs.filter(function (t) {
         var e = t.data;return e.width * e.height > 0;
      });this.visibleGlyphs = h;var c = f.positions(h),
          p = f.uvs(h, n, o, e),
          l = a({ clockwise: !0, type: "uint16", count: h.length });if (u.index(this, l, 1, "uint16"), u.attr(this, "position", c, 2), u.attr(this, "uv", p, 2), !t.multipage && "page" in this.attributes) this.removeAttribute("page");else if (t.multipage) {
         var d = f.pages(h);u.attr(this, "page", d, 1);
      }
   }, n.prototype.computeBoundingSphere = function () {
      null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere());var t = this.attributes.position.array,
          e = this.attributes.position.itemSize;return !t || !e || t.length < 2 ? (this.boundingSphere.radius = 0, void this.boundingSphere.center.set(0, 0, 0)) : (h.computeSphere(t, this.boundingSphere), void (isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')));
   }, n.prototype.computeBoundingBox = function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3());var t = this.boundingBox,
          e = this.attributes.position.array,
          r = this.attributes.position.itemSize;return !e || !r || e.length < 2 ? void t.makeEmpty() : void h.computeBox(e, t);
   };
}, function (t, e) {
   function r(t) {
      var e = t.length / n;i.min[0] = t[0], i.min[1] = t[1], i.max[0] = t[0], i.max[1] = t[1];for (var r = 0; r < e; r++) {
         var o = t[r * n + 0],
             a = t[r * n + 1];i.min[0] = Math.min(o, i.min[0]), i.min[1] = Math.min(a, i.min[1]), i.max[0] = Math.max(o, i.max[0]), i.max[1] = Math.max(a, i.max[1]);
      }
   }var n = 2,
       i = { min: [0, 0], max: [0, 0] };t.exports.computeBox = function (t, e) {
      r(t), e.min.set(i.min[0], i.min[1], 0), e.max.set(i.max[0], i.max[1], 0);
   }, t.exports.computeSphere = function (t, e) {
      r(t);var n = i.min[0],
          o = i.min[1],
          a = i.max[0],
          u = i.max[1],
          s = a - n,
          f = u - o,
          h = Math.sqrt(s * s + f * f);e.center.set(n + s / 2, o + f / 2, 0), e.radius = h / 2;
   };
}, function (t, e) {
   t.exports.pages = function r(t) {
      var r = new Float32Array(4 * t.length * 1),
          e = 0;return t.forEach(function (t) {
         var n = t.data.page || 0;r[e++] = n, r[e++] = n, r[e++] = n, r[e++] = n;
      }), r;
   }, t.exports.uvs = function n(t, e, r, i) {
      var n = new Float32Array(4 * t.length * 2),
          o = 0;return t.forEach(function (t) {
         var a = t.data,
             u = a.x + a.width,
             s = a.y + a.height,
             f = a.x / e,
             h = a.y / r,
             c = u / e,
             p = s / r;i && (h = (r - a.y) / r, p = (r - s) / r), n[o++] = f, n[o++] = h, n[o++] = f, n[o++] = p, n[o++] = c, n[o++] = p, n[o++] = c, n[o++] = h;
      }), n;
   }, t.exports.positions = function i(t) {
      var i = new Float32Array(4 * t.length * 2),
          e = 0;return t.forEach(function (t) {
         var r = t.data,
             n = t.position[0] + r.xoffset,
             o = t.position[1] + r.yoffset,
             a = r.width,
             u = r.height;i[e++] = n, i[e++] = o, i[e++] = n, i[e++] = o + u, i[e++] = n + a, i[e++] = o + u, i[e++] = n + a, i[e++] = o;
      }), i;
   };
}, function (t, e, r) {
   function n(t, e, r, n) {
      "number" != typeof r && (r = 1), "string" != typeof n && (n = "uint16");var i = !t.index && "function" != typeof t.setIndex,
          a = i ? t.getAttribute("index") : t.index,
          u = o(a, e, r, n);u && (i ? t.addAttribute("index", u) : t.index = u);
   }function i(t, e, r, n, i) {
      if ("number" != typeof n && (n = 3), "string" != typeof i && (i = "float32"), Array.isArray(r) && Array.isArray(r[0]) && r[0].length !== n) throw new Error("Nested vertex array has unexpected size; expected " + n + " but found " + r[0].length);var a = t.getAttribute(e),
          u = o(a, r, n, i);u && t.addAttribute(e, u);
   }function o(t, e, r, n) {
      return e = e || [], !t || a(t, e, r) ? (e = u(e, n), t = new THREE.BufferAttribute(e, r), t.needsUpdate = !0, t) : (u(e, t.array), t.needsUpdate = !0, null);
   }function a(t, e, r) {
      if (t.itemSize !== r) return !0;if (!t.array) return !0;var n = t.array.length;return Array.isArray(e) && Array.isArray(e[0]) ? n !== e.length * r : n !== e.length;
   }var u = r(13);t.exports.attr = i, t.exports.index = n;
}, function (t, e) {
   function r(t) {
      return t.replace(/^\s*|\s*$/g, "");
   }e = t.exports = r, e.left = function (t) {
      return t.replace(/^\s*/, "");
   }, e.right = function (t) {
      return t.replace(/\s*$/, "");
   };
}, function (t, e) {
   function r(t, e, r, n) {
      var i = t.indexOf(e, r);return i === -1 || i > n ? n : i;
   }function n(t) {
      return f.test(t);
   }function i(t, e, r, n, i) {
      for (var o = [], a = r, s = r; s < n && s < e.length; s++) {
         var f = e.charAt(s),
             h = u.test(f);if (h || s === n - 1) {
            var c = h ? s : s + 1,
                p = t(e, a, c, i);o.push(p), a = s + 1;
         }
      }return o;
   }function o(t, e, i, o, a, u) {
      var f = [],
          h = a;for ("nowrap" === u && (h = Number.MAX_VALUE); i < o && i < e.length;) {
         for (var c = r(e, s, i, o); i < c && n(e.charAt(i));) {
            i++;
         }var p = t(e, i, c, h),
             l = i + (p.end - p.start),
             d = l + s.length;if (l < c) {
            for (; l > i && !n(e.charAt(l));) {
               l--;
            }if (l === i) d > i + s.length && d--, l = d;else for (d = l; l > i && n(e.charAt(l - s.length));) {
               l--;
            }
         }if (l >= i) {
            var g = t(e, i, l, h);f.push(g);
         }i = d;
      }return f;
   }function a(t, e, r, n) {
      var i = Math.min(n, r - e);return { start: e, end: e + i };
   }var u = /\n/,
       s = "\n",
       f = /\s/;t.exports = function (e, r) {
      var n = t.exports.lines(e, r);return n.map(function (t) {
         return e.substring(t.start, t.end);
      }).join("\n");
   }, t.exports.lines = function (t, e) {
      if (e = e || {}, 0 === e.width && "nowrap" !== e.mode) return [];t = t || "";var r = "number" == typeof e.width ? e.width : Number.MAX_VALUE,
          n = Math.max(0, e.start || 0),
          u = "number" == typeof e.end ? e.end : t.length,
          s = e.mode,
          f = e.measure || a;return "pre" === s ? i(f, t, n, u, r) : o(f, t, n, u, r, s);
   };
}, function (t, e, r) {
   "use strict";
   function n(t, e) {
      for (var r = 0; r < t.length; r++) {
         e(t[r]);
      }
   }function i(t) {
      for (var e in t) {
         if (t.hasOwnProperty(e)) return !1;
      }return !0;
   }function o(t, e, r) {
      var n = t;return c(e) ? (r = e, "string" == typeof t && (n = { uri: t })) : n = l(e, { uri: t }), n.callback = r, n;
   }function a(t, e, r) {
      return e = o(t, e, r), u(e);
   }function u(t) {
      function e() {
         4 === c.readyState && o();
      }function r() {
         var t = void 0;if (t = c.response ? c.response : c.responseText || s(c), E) try {
            t = JSON.parse(t);
         } catch (e) {}return t;
      }function n(t) {
         return clearTimeout(g), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, f(t, h);
      }function o() {
         if (!d) {
            var e;clearTimeout(g), e = t.useXDR && void 0 === c.status ? 200 : 1223 === c.status ? 204 : c.status;var n = h,
                i = null;return 0 !== e ? (n = { body: r(), statusCode: e, method: v, headers: {}, url: y, rawRequest: c }, c.getAllResponseHeaders && (n.headers = p(c.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), f(i, n, n.body);
         }
      }if ("undefined" == typeof t.callback) throw new Error("callback argument missing");var u = !1,
          f = function f(e, r, n) {
         u || (u = !0, t.callback(e, r, n));
      },
          h = { body: void 0, headers: {}, statusCode: 0, method: v, url: y, rawRequest: c },
          c = t.xhr || null;c || (c = t.cors || t.useXDR ? new a.XDomainRequest() : new a.XMLHttpRequest());var l,
          d,
          g,
          y = c.url = t.uri || t.url,
          v = c.method = t.method || "GET",
          w = t.body || t.data || null,
          m = c.headers = t.headers || {},
          b = !!t.sync,
          E = !1;if ("json" in t && (E = !0, m.accept || m.Accept || (m.Accept = "application/json"), "GET" !== v && "HEAD" !== v && (m["content-type"] || m["Content-Type"] || (m["Content-Type"] = "application/json"), w = JSON.stringify(t.json))), c.onreadystatechange = e, c.onload = o, c.onerror = n, c.onprogress = function () {}, c.ontimeout = n, c.open(v, y, !b, t.username, t.password), b || (c.withCredentials = !!t.withCredentials), !b && t.timeout > 0 && (g = setTimeout(function () {
         d = !0, c.abort("timeout");var t = new Error("XMLHttpRequest timeout");t.code = "ETIMEDOUT", n(t);
      }, t.timeout)), c.setRequestHeader) for (l in m) {
         m.hasOwnProperty(l) && c.setRequestHeader(l, m[l]);
      } else if (t.headers && !i(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");return "responseType" in t && (c.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(c), c.send(w), c;
   }function s(t) {
      if ("document" === t.responseType) return t.responseXML;var e = 204 === t.status && t.responseXML && "parsererror" === t.responseXML.documentElement.nodeName;return "" !== t.responseType || e ? null : t.responseXML;
   }function f() {}var h = r(15),
       c = r(4),
       p = r(27),
       l = r(2);t.exports = a, a.XMLHttpRequest = h.XMLHttpRequest || f, a.XDomainRequest = "withCredentials" in new a.XMLHttpRequest() ? a.XMLHttpRequest : h.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function (t) {
      a["delete" === t ? "del" : t] = function (e, r, n) {
         return r = o(e, r, n), r.method = t.toUpperCase(), u(r);
      };
   });
}, function (t, e) {
   t.exports = function () {
      return "undefined" != typeof window.DOMParser ? function (t) {
         var e = new window.DOMParser();return e.parseFromString(t, "application/xml");
      } : "undefined" != typeof window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLDOM") ? function (t) {
         var e = new window.ActiveXObject("Microsoft.XMLDOM");return e.async = "false", e.loadXML(t), e;
      } : function (t) {
         var e = document.createElement("div");return e.innerHTML = t, e;
      };
   }();
}]);
