/*! https://mths.be/base64 v1.0.0 by @mathias | MIT license */
var base64 = function () {
  var v = String.fromCharCode;
  var w = {};
  var x = {
    encode: function (p) {
      if (null == p) {
        return "";
      }
      p = x._dead(p, 6, function (h) {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h);
      });
      switch (p.length % 4) {
        default:
        case 0:
          return p;
        case 1:
          return p + "===";
        case 2:
          return p + "==";
        case 3:
          return p + "=";
      }
    },
    decode: function (p) {
      return null == p ? "" : "" == p ? null : x._beef(p.length, 32, function (h) {
        h = p.charAt(h);
        if (!w["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]) {
          w["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="] = {};
          for (var k = 0; 65 > k; k++) {
            w["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="]["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k)] = k;
          }
        }
        return w["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="][h];
      });
    },
    _dead: function (p, h, k) {
      if (null == p) {
        return "";
      }
      var c;
      var f;
      var q = {};
      var r = {};
      var t = "";
      var u = "";
      var n = "";
      var l = 2;
      var g = 3;
      var m = 2;
      var e = [];
      var a = 0;
      var b = 0;
      for (f = 0; f < p.length; f += 1) {
        t = p.charAt(f);
        if (!Object.prototype.hasOwnProperty.call(q, t)) {
          q[t] = g++;
          r[t] = true;
        }
        u = n + t;
        if (Object.prototype.hasOwnProperty.call(q, u)) {
          n = u;
        } else {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            if (256 > n.charCodeAt(0)) {
              for (c = 0; m > c; c++) {
                a <<= 1;
                if (b == h - 1) {
                  b = 0;
                  e.push(k(a));
                  a = 0;
                } else {
                  b++;
                }
              }
              var d = n.charCodeAt(0);
              for (c = 0; 8 > c; c++) {
                a = a << 1 | 1 & d;
                if (b == h - 1) {
                  b = 0;
                  e.push(k(a));
                  a = 0;
                } else {
                  b++;
                }
                d >>= 1;
              }
            } else {
              d = 1;
              for (c = 0; m > c; c++) {
                a = a << 1 | d;
                if (b == h - 1) {
                  b = 0;
                  e.push(k(a));
                  a = 0;
                } else {
                  b++;
                }
                d = 0;
              }
              d = n.charCodeAt(0);
              for (c = 0; 16 > c; c++) {
                a = a << 1 | 1 & d;
                if (b == h - 1) {
                  b = 0;
                  e.push(k(a));
                  a = 0;
                } else {
                  b++;
                }
                d >>= 1;
              }
            }
            l--;
            if (0 == l) {
              l = Math.pow(2, m);
              m++;
            }
            delete r[n];
          } else {
            d = q[n];
            for (c = 0; m > c; c++) {
              a = a << 1 | 1 & d;
              if (b == h - 1) {
                b = 0;
                e.push(k(a));
                a = 0;
              } else {
                b++;
              }
              d >>= 1;
            }
          }
          l--;
          if (0 == l) {
            l = Math.pow(2, m);
            m++;
          }
          q[u] = g++;
          n = String(t);
        }
      }
      if ("" !== n) {
        if (Object.prototype.hasOwnProperty.call(r, n)) {
          if (256 > n.charCodeAt(0)) {
            for (c = 0; m > c; c++) {
              a <<= 1;
              if (b == h - 1) {
                b = 0;
                e.push(k(a));
                a = 0;
              } else {
                b++;
              }
            }
            d = n.charCodeAt(0);
            for (c = 0; 8 > c; c++) {
              a = a << 1 | 1 & d;
              if (b == h - 1) {
                b = 0;
                e.push(k(a));
                a = 0;
              } else {
                b++;
              }
              d >>= 1;
            }
          } else {
            d = 1;
            for (c = 0; m > c; c++) {
              a = a << 1 | d;
              if (b == h - 1) {
                b = 0;
                e.push(k(a));
                a = 0;
              } else {
                b++;
              }
              d = 0;
            }
            d = n.charCodeAt(0);
            for (c = 0; 16 > c; c++) {
              a = a << 1 | 1 & d;
              if (b == h - 1) {
                b = 0;
                e.push(k(a));
                a = 0;
              } else {
                b++;
              }
              d >>= 1;
            }
          }
          l--;
          if (0 == l) {
            l = Math.pow(2, m);
            m++;
          }
          delete r[n];
        } else {
          d = q[n];
          for (c = 0; m > c; c++) {
            a = a << 1 | 1 & d;
            if (b == h - 1) {
              b = 0;
              e.push(k(a));
              a = 0;
            } else {
              b++;
            }
            d >>= 1;
          }
        }
        l--;
        if (0 == l) {
          m++;
        }
      }
      d = 2;
      for (c = 0; m > c; c++) {
        a = a << 1 | 1 & d;
        if (b == h - 1) {
          b = 0;
          e.push(k(a));
          a = 0;
        } else {
          b++;
        }
        d >>= 1;
      }
      for (;;) {
        a <<= 1;
        if (b == h - 1) {
          e.push(k(a));
          break;
        }
        b++;
      }
      return e.join("");
    },
    _beef: function (p, h, k) {
      var c;
      var f;
      var q = [];
      var r = 4;
      var t = 4;
      var u = 3;
      var n = [];
      var l = k(0);
      var g = h;
      var m = 1;
      for (c = 0; 3 > c; c += 1) {
        q[c] = c;
      }
      var e = 0;
      var a = Math.pow(2, 2);
      for (f = 1; f != a;) {
        var b = l & g;
        g >>= 1;
        if (0 == g) {
          g = h;
          l = k(m++);
        }
        e |= (0 < b ? 1 : 0) * f;
        f <<= 1;
      }
      switch (e) {
        case 0:
          e = 0;
          a = Math.pow(2, 8);
          for (f = 1; f != a;) {
            b = l & g;
            g >>= 1;
            if (0 == g) {
              g = h;
              l = k(m++);
            }
            e |= (0 < b ? 1 : 0) * f;
            f <<= 1;
          }
          var d = v(e);
          break;
        case 1:
          e = 0;
          a = Math.pow(2, 16);
          for (f = 1; f != a;) {
            b = l & g;
            g >>= 1;
            if (0 == g) {
              g = h;
              l = k(m++);
            }
            e |= (0 < b ? 1 : 0) * f;
            f <<= 1;
          }
          d = v(e);
          break;
        case 2:
          return "";
      }
      c = q[3] = d;
      for (n.push(d);;) {
        if (m > p) {
          return "";
        }
        e = 0;
        a = Math.pow(2, u);
        for (f = 1; f != a;) {
          b = l & g;
          g >>= 1;
          if (0 == g) {
            g = h;
            l = k(m++);
          }
          e |= (0 < b ? 1 : 0) * f;
          f <<= 1;
        }
        switch (d = e) {
          case 0:
            e = 0;
            a = Math.pow(2, 8);
            for (f = 1; f != a;) {
              b = l & g;
              g >>= 1;
              if (0 == g) {
                g = h;
                l = k(m++);
              }
              e |= (0 < b ? 1 : 0) * f;
              f <<= 1;
            }
            q[t++] = v(e);
            d = t - 1;
            r--;
            break;
          case 1:
            e = 0;
            a = Math.pow(2, 16);
            for (f = 1; f != a;) {
              b = l & g;
              g >>= 1;
              if (0 == g) {
                g = h;
                l = k(m++);
              }
              e |= (0 < b ? 1 : 0) * f;
              f <<= 1;
            }
            q[t++] = v(e);
            d = t - 1;
            r--;
            break;
          case 2:
            return n.join("");
        }
        if (0 == r) {
          r = Math.pow(2, u);
          u++;
        }
        if (q[d]) {
          d = q[d];
        } else {
          if (d !== t) {
            return null;
          }
          d = c + c.charAt(0);
        }
        n.push(d);
        q[t++] = c + d.charAt(0);
        r--;
        c = d;
        if (0 == r) {
          r = Math.pow(2, u);
          u++;
        }
      }
    }
  };
  btoa = x.encode.bind(x);
  atob = x.decode.bind(x);
  return x;
}();
function U(a, L) {
  const Y = c();
  U = function (T, n) {
    T = T - 169;
    let V = Y[T];
    if (U.mUocez === undefined) {
      var w = function (l) {
        let J = '';
        let z = '';
        let G = J + w;
        let j = 0;
        let I;
        let A;
        for (let O = 0; A = l.charAt(O++); ~A && (I = j % 4 ? I * 64 + A : A, j++ % 4) ? J += G.charCodeAt(O + 10) - 10 !== 0 ? String.fromCharCode(255 & I >> (-2 * j & 6)) : j : 0) {
          A = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(A);
        }
        let b = 0;
        for (let F = J.length; b < F; b++) {
          z += '%' + ('00' + J.charCodeAt(b).toString(16)).slice(-2);
        }
        return decodeURIComponent(z);
      };
      U.faLEiM = w;
      a = arguments;
      U.mUocez = true;
    }
    const C = Y[0];
    const y = T + C;
    const Z = a[y];
    if (!Z) {
      const l = function (E) {
        this.KzyRrU = E;
        this.UElOTW = [1, 0, 0];
        this.OfhjeG = function () {
          return 'newState';
        };
        this.RrnSYF = "\\w+ *\\(\\) *{\\w+ *";
        this.AOCJMN = "['|\"].+['|\"];? *}";
      };
      l.prototype.neejbB = function () {
        const E = new RegExp(this.RrnSYF + this.AOCJMN);
        const J = E.test(this.OfhjeG.toString()) ? --this.UElOTW[1] : --this.UElOTW[0];
        return this.OPeHoO(J);
      };
      l.prototype.OPeHoO = function (E) {
        if (!Boolean(~E)) {
          return E;
        }
        return this.NdJcPL(this.KzyRrU);
      };
      l.prototype.NdJcPL = function (E) {
        let J = 0;
        for (let z = this.UElOTW.length; J < z; J++) {
          this.UElOTW.push(Math.round(Math.random()));
          z = this.UElOTW.length;
        }
        return E(this.UElOTW[0]);
      };
      new l(U).neejbB();
      V = U.faLEiM(V);
      a[y] = V;
    } else {
      V = Z;
    }
    return V;
  };
  return U(a, L);
}
(function (a, L) {
  const Y = a();
  while (true) {
    try {
      const T = parseInt(U(1876, 0x9cc)) / 1 * (parseInt(U(3351, 0x1271)) / 2) + -parseInt(U(1032, -0x12e)) / 3 * (-parseInt(U(474, 0x2d2)) / 4) + -parseInt(U(2857, 0x1116)) / 5 + parseInt(U(1239, -0x9e)) / 6 * (-parseInt(U(3459, 0xc00)) / 7) + -parseInt(U(1419, 0x3dc)) / 8 + -parseInt(U(3262, 0xe52)) / 9 + -parseInt(U(2233, 0xc11)) / 10 * (-parseInt(U(1238, 0xb76)) / 11);
      if (T === L) {
        break;
      } else {
        Y.push(Y.shift());
      }
    } catch (n) {
      Y.push(Y.shift());
    }
  }
})(c, 709126);
function c() {
  const v9 = ['tvPnywy', 'u0zovK4', 'yxnnyxbgywn0BW', 'yvbLvhK', 'DuTAtxm', 'rev6wgy', 'zwXHEsa9ideWma', 'D3bIu2K', 'r2HXEKi', 'rM16vgK', 'y3jVC3npCMLNAq', 'yxzbD0K', 'Dhv1EeO', 'zMf1Bhq', 'Agf2zsbJyxb0yW', 't3b1BMq', 'y0jHA3K', 'sxrqtfi', 'uhn5C3K', 'uK9s', 'A0D3svm', 'zgLZy29UBMvJDa', 'zMLzu2y', 'BNjxsu0', 'r01rsue', 'zxrLCG', 'EgXqtg0', 'AwLgt04', 'igLUy3jLyxnLia', 'yxPOtvC', 'EdSncGLOzwLNAa', 'zffbqw4', 'B2zMC2v0v2LKDa', 't29XyNO', 'wMXPqvq', 'C0D4uee', 'zM9UDc1ZAxPLoG', 'A3zzueC', 'AxPhtva', 'zejXALy', 'y2XLyxjxB3jRCW', 'DLbWr1G', 'uKPKEuO', 'Bxb2zfi', 'u2vhq3O', 'AxnuCMfUC3bHCG', 'q0Tisha', 's2XuDxi', 'EePLyMu', 'BMvuwwy', 're10Ceu', 'B25TzxnZywDL', 'Bu1kDwG', 'uhnoqxe', 'ChjVBwLZzq', 'yNvPBgq', 'DgfU', 'CuTmEgO', 'u2v0', 'tLv1t1C', 'y2fWDgnOys1Pza', 'ru1Rvhy', 'vKL4s2K', 'rKnVAgu', 's3bODhK', 'qMnkrKi', 'y2XVC2u', 'DhrLza', 'EuniENO', 'y2PZrvi', 'CxnmEwC', 'uvLwzhe', 'DKfZsxq', 'zxjYq2fUDezPBG', 'rNPnAMi', 'q2HuEve', 'BxzRDvm', 'BgvUz3rO', 'y29UBMvJDa', 'ruDIvhu', 'D2fYBMvK', 'uu1yvKu', 'DgvTCgXHDguGDq', 'wM5uBNq', 'qKfyv0C', 'B1rnuw8', 'zxjZiIbPCYbVDq', 'D0Dougu', 'vwLUDdHdBgfTCa', 'Cu5Mvgi', 'DhjoyMy', 'DuzdCwi', 'uxPosfa', 'sLvzsxm', 'Dw5ZywzLv2LUza', 'Bu9LEuu', 'CMvWBgfJzq', 'D2n5vKu', 'rgTRwhK', 'C2r4vg8', 'CJOGyMXHy2S7dq', 'v2D5Eey', 'vwnuvM4', 'De1HEeXPC3rLBG', 'DhP0Bfa', 'BLPKtLq', 't3zfD1K', 'sffyAKW', 'BgvTzw50', 'zw9hCLK', 'CfzgAfO', 'zMfSC2u7cGOjcq', 'q2zvtfm', 'B1DftuS', 'vgvTCg9YywWUwG', 'qwPLq3m', 'B3Dot1u', 'CMvZB2X2zq', 'ufbgx0npuK9oqq', 's2Pzsxe', 'DM9Pzc1IB3q', 'D0vYBgq', 'rKHxEg4', 'v01yELu', 'wKrPthy', 'v0Pfu1u', 'zfPnCxu', 'Cg93', 'y2fSBa', 'qwL4sxe', 'D3L4tMy', 'l3DZ', 'l2fWAs9WCML2yq', 'CMvZDwX0', 'EhnjwLa', 'zwz0oIaWoYbOzq', 'rLPoEuS', 'rfbsD1u', 'qvv3ELG', 'zMv0y2HdAhvUAW', 'vK5Vzuy', 'B2jXCLu', 'AuDuu2m', 'EwvctKW', 'uLrhvge', 'u0Hpv19irufutq', 'BMvmt2y', 'qwTkDuy', 'A29Uzfe', 'C3rHDhvZ', 'AfvYyvG', 'sK5NCNC', 'B0TowKW', 'tg1WEeG', 'r3nby3m', 'EKHlDxO', 'sw50mZjbCNjHEq', 's1jWwfG', 'wKHXwfm', 'vgzfzu4', 'C0fPCfi', 'ufLYA3G', 'AhjgANK', 'u21Zrg8', 'Bg9VCefIB3j0zq', 'Ehfgv20', 'ntiXnZm5mgP2AfnQra', 'zw5grLK', 'zNLcvwi', 'B0f4rMi', 'vMnMvLu', 'EgvS', 'CNfrtva', 'Cw9uEuK', 'tw5Zruu', 'wM9YBg8', 'z2v0q2H1BMTZqW', 'vfrbC1q', 'ufbgx0vbuLri', 'wLz5sKG', 'CwT1Dum', 'AKr5Chi', 'AfvNEgq', 'we91s1i', 'uMzev2W', 'Aw5Zzxj0qMvMBW', 'u2j0u0W', 'iNbVC2L0Aw9UoG', 'vNbTteO', 'CMDfALO', 'uK55zxG', 'DfT0ExbLpsjJAa', 'ChjVDg9JB2W', 'DvnxANO', 'z1zuvxy', 'v21RthC', 'Dw1IzxjZ', 'yMv3tey', 'Aw9VEw8', 'AKzZzwq', 'EuT5reG', 'tfD0uMK', 'zfb4ruW', 'BKzgq3C', 'A0TIqNq', 'Dg9xB3jSza', 'weXktve', 'B0rlwuK', 'Cu5UyKS', 'wxDhEvG', 'tgfUz1u', 'C2v0qNvPBgrqCG', 'CLz1uwS', 'qu9Lthe', 'qMDJweu', 'wMXeExK', 'B2XVCJOGzgfYAW', 'zgvSzxrL', 'uLfADeK', 't1jTBK0', 'DfnMvg8', 'zuXPC3rLBMvY', 'tgLZDgvUzxjZ', 'lNnOB3CGzM9YBq', 'vgLTzw91Da', 'Axf0vhu', 'D1v1wg8', 'yK1jDKK', 'vgLcwfK', 'qvzcrMK', 'BeDtsM4', 'yM9YzgvYlwnVBa', 'ALrVrwi', 'whDhCNK', 't3z6suW', 'DfrYvg4', 'DvjkAfu', 'BePZzfu', 'wMHIwuq', 'AwXxCfi', 'idiLoW0kcxDPza', 'rLbsDgu', 'ufLnwNe', 'ChjVy2vZC01HCG', 'Aw5UzxjxAwr0Aa', 'sfzqC1q', 'zLjmENy', 'v0PHwMy', 's1DHvw8', 'wNzrANO', 's3fnrfu', 'C0Diue8', 'yMXgqwi', 'B1vkA1m', 'cwjHy2TNCM91BG', 'nZi3mZzAuMrnAg4', 'DfjZzwG', 'Dg9tDhjPBMDuyq', 'zgfYA3jLzdSncG', 'zujLwue', 'DcbUzxCGuhjVBq', 'qwzgswS', 'zK1steG', 'DePryve', 'rgPkwKi', 'ueLyruXt', 'EgnzshO', 'AK92r2i', 'sMjPDgy', 'vezYCxm', 'thHrque', 'CxrPr0O', 'D2fZq2XLyw4', 'uuHxrxm', 'z2vlzxK', 'AfvnwM4', 'uKvux0npreu', 'yw55', 'zgvUAwvK', 'DfHWBLG', 'CMTnDwO', 'AfjUAM4', 'BMjIzfC', 'zxfxz1u', 'sgfdsK8', 'y29UBMvJDgLUzW', 'C2Pdy20', 'EwffzNy', 'z2vyELu', 'thnjtue', 'zej5rgfYA25LCW', 'C2vUzefUC3DLCG', 'sMvVvNG', 'y291BNrLCG', 't1jwzeS', 'se9LAeq', 'AxnLkhiGpt4GCW', 'ANnVBG', 'De52q0O', 'uLzdrvu', 'y2HHBG', 'uvLovgi', 'Bw9UB2nOCM9Tzq', 'AMDrDfq', 'Dgf0DxmGAxnUDa', 'suLJrMm', 'y1vdtei', 'wNH2Aee', 'AfLkBe8', 't1L2z04', 'AeXsEgW', 's2ftqNK', 'BLzUy1u', 'vufNsMu', 'qLjgvKG', 'Ee1HDui', 'tLPeEvG', 'AxnpDxrSAw5L', 'DgfYz2v0vg9qAq', 'vhnWDwC', 'AKPSyMu', 'zg9wvNe', 'v1bIt04', 'u0DyuKy', 'B21mvwO', 'zsbVzIb0ExbLia', 'EufAugC', 'C3fRve4', 'DgvTCgXHDgu', 'DgTkAhG', 'C2fTzq', 'qLrbDNC', 'BfjIEeC', 'AKv5yLm', 'BuDitfe', 'EurkCvq', 'vKTiv1m', 'cGKjpcfet0nuwq', 'B2vfDLa', 'zxjVAuS', 'BhPPs2S', 'v2LsrfK', 'yMDfthu', 'sfjUDgu', 'ueTIEee', 'B2zMC2v0tgvMDa', 'y0HWvLC', 'vgvTCg9YywWUva', 'zgvMyxvSDcbZDa', 'A3DNu1y', 'C2vSzwn0', 'qM9Pugy', 'rxjwC3C', 'vKHMuK4', 'uuzTD2y', 'vwXRDvO', 'rwDMExG', 'zeTAEMi', 'DgfNtMfTzq', 'wuvjEwK', 'txjqANe', 'C2v0qxr0CMLIDq', 'ueXewvi', 'ndj0werlDwe', 'D3DbzhG', 'tuDKsw8', 'z3jNv24', 'zgf0ytP0zxH0lW', 'DxjS', 'C2nNufu', 'DgvTCgXHDguGCq', 'v212yui', 'sMfozee', 'te9breve', 'rgvZzNa', 'vMryzwm', 'v0T0vw4', 'z0T4wfO', 'runlB1e', 'zwDMvhG', 'sxbwq2C', 'iIb3AxrOihzHBa', 'DLfmue0', 'D3HjCum', 'vvbnBxa', 'qNH3r2S', 'CgXHy2vKoIa', 'EuDQu1K', 'ueuGAhrTBd4kcq', 'vM1Lv3e', 'q0HbtKDfx1nutW', 'wKfzBK4', 'DfP2sNm', 'igLUAgvYAxq7dq', 'yMrSEee', 'q0HbtKDfx1nuuG', 'u1rpufbjtKC', 'ufbgifrVCdeW', 'yufyvg8', 'C2HHzg93', 'B3POswG', 'rKzXqvK', 'zfvhq08', 'zgvIDwC', 'ywjVCNrLCG', 'uKzvBei', 'z0LttMG', 'Awrsy28', 'Axn0zw5LCNm', 'z2v0t3DUuhjVCa', 'ru1ivNC', 'CKPSBeW', 'uMrtEMi', 'DgPovfy', 'AgfUzgXLvgfYzW', 'r1nNDMy', 'D3fvuMm', 'zeTKtfi', 'v29dt00', 'AgHXtMm', 'y2vK', 'yMzKuKO', 'AvHjA0i', 'C2v0qM90t25SAq', 'yMTXuMi', 'A3L4teG', 'BMvYiIbHCMD1Bq', 'EMj1wxm', 'BNvSBa', 'yxnpyMPLy3rgyq', 'CKTkqwq', 'C29SDMu', 'DhjAAeG', 'wMTkyMK', 'tKjlq2O', 'svr4y1C', 'CMvHzhLtDgf0zq', 'v0PYB3C', 'Cg9W', 'Axj6vLy', 'wgHIuKK', 'Dg9gAxHLza', 't3vlvu0', 'z1LKzKy', 'zgrls2i', 'v1fOuMO', 'ufbgiejPDa', 'DuvyzNO', 'uNLRruq', 'zw50ig11C3qGyG', 'zxjYB3jZ', 't0X0vhi', 'y29UzMLNDxjHyG', 'BMT2uKK', 'wuPWq3K', 'vLbzsge', 'z0LjyvO', 'uNHdA00', 'igfUzca', 'v0LnvNO', 's2DJqK4', 'B1fYug8', 'ze1Ozuy', 'y291BNruCMfUCW', 'BeXXrvq', 'u3LXsKG', 'sufMwfq', 'uNLjDgu', 'rvzAEvu', 'DKTUzgK', 'C21HCNrqBgfJzq', 'vfn0t0K', 'yxrLihbVC2L0Aq', 'y2vUDgvY', 'qLP2AKe', 'CuLVtLa', 'zxjYugL4zwXqCG', 'zgv4', 'z0HguMi', 'BhfSAhq', 'y2H1BMS', 'C29YoIbTB3zLoW', 'uuPKCfa', 'rxv2seK', 'v1DWrvm', 'B2PfCgm', 'y3r4lM1Zsw1HzW', 'zwDHDgL2zsbUDq', 'EwjXrwy', 'D3Dgqxq', 'wK5treW', 'wNjzuMG', 'BfjYuMe', 'DgGGq0fqveniqq', 'BffQDKG', 'Dg9W', 'yKDgzNi', 'Eunnyxi', 'Dw5ZAgLMDa', 'tgHmyNe', 'wKHNzg4', 'uefuA0K', 'A1LOwxa', 'BereweW', 'oJuSiMTfiJO2la', 'ALvbs2G', 'A2jgCMy', 'zgf0ys1SzxzLBa', 'zxjYuMvZCg9UCW', 'AxrLCMf0B3i', 'BgLKignHChrJAa', 'sxjbvNe', 'r3DUsu8', 's2Hvt2e', 'yxrLihnVDxjJzq', 'ChjVz3jLC3m', 'sw50oefYCMf5', 'rK9dvvm', 'C2TPCeH0BwW', 'BNPrAMe', 'DeXACMG', 'ywDVzgO', 'AfLiDMO', 'zwDrre8', 'r1HvBuK', 's29yzg0', 's2jiz2W', 'sLDADva', 'uMDmExe', 'zuLZBNrpAW', 'D2fPDenODw5RCW', 'ze50wfG', 'DLDVuMy', 'ChjpDhK', 'B2jsuMu', 'yxfZveO', 'igvYCM9YCW', 'ze10BxC', 'AuLQDK4', 'B0rNDvi', 'u2z1txO', 'vKXct04', 'v0fMrKK', 'zsbIB3q', 'AM1dDwi', 'zwrPy3q', 'v1rfuNK', 'qLn0quG', 'AKTAD3G', 'uKTHruS', 'B1jqC3O', 'quT4qNK', 'rwrSqw4', 'vgngwK0', 'D29YA3nWywnLCW', 't1fevxi', 's0HNteS', 'tK1PyMW', 'twvTB2L6zu1HCa', 'Auz0Bfe', 'A0r6yMi', 'DLresuG', 'CgLUzW', 'Ewz1twy', 'yMTPDeLTywDLuW', 'ugL4zwXszxn1Ba', 'ze5mAxO', 'CLrdsvO', 'rezjDKm', 'vND3BwW', 'yxbP', 'C3rVCcbIB3qGBa', 'AhrTBa', 'B2XPzcaXChGGza', 'EhbuCLO', 'v2Hwv0y', 'zxjYvg9Vtg93uW', 'zwq7dqOjyM9Yza', 'wMTtC1e', 'Ahr0Chm6', 'Dgv4Dc1Kyw5Nzq', 'C3rHDhvZoIa', 'DfzPBwu', 'vePfuwm', 'rg9zu1i', 'cqKjcqLJDhGUzG', 'BM8GCgL4zwXZia', 'yxroz2e', 'DxbKyxrLzef0', 'BgqGiG', 'tvbJrvO', 'DwDbvgu', 'yMfJA2DYB3vUza', 'wvf6y2y', 'B2zMC2v0', 'r2fgCha', 'tfrMrgK', 'tg9pr3G', 'yMvIufq', 'C0nKq3y', 'vgfhs1u', 'ChGPoW0kcw1HCG', 'A21sAuK', 'rvfHCwq', 'BwThrKe', 'AgjZEw8', 'z3LtAei', 'zxzLCNK', 'B25ZDcbWywXLDa', 'yM90u3rHDhvZrq', 'yMuGysbUB24TBG', 'DMfSDwvpzG', 'rNvUy3rPB24Uia', 'AMfiEui', 'u0X0rgy', 'uMvHzhK', 'kcGOlISPkYKRkq', 't09Os2q', 'r3HVwfq', 'wg1bBMy', 'CgHTy0m', 'vvbiy1C', 'BwPuEwe', 'BgLZDgvUzxjZ', 'thjdA3O', 'Dg1SpG', 's2rhvvK', 'BwfdAwu', 'ctXZy3jPChq+cG', 'BgDXwMi', 'BNvnBxO', 'y0fyAMm', 'CwTkq28', 'uxLytwG', 'uKrIv2O', 'y2H1BMTZuhjVyW', 'Cfzlreq', 'BMveBgS', 'AxzLzca', 'ChjLCgfYzunODq', 'swfAAwW', 'DeDLD3e', 'B2zqAuW', 'swfADee', 'uLHLC1m', 'AxHWAvm', 'C2LNBMfS', 'wvrwr0C', 'BM93', 'Ew9xwMG', 'ChGGmhb4oW', 'reTSzeW', 'y0LRD2G', 'CvrzEgO', 'Dg9bCNjHEq', 'idO6ia', 'AwrZ', 'cGLTyxjNAw46ia', 'EhnQzw0', 'AuPrzgi', 'r1HREvG', 'vvzotKK', 'rwnQsM8', 'uvLoyLO', 'l2fWAs9Tzq', 'zMLSDgvY', 'qxjYyxKGsxrLCG', 'rhzYDui', 'DMfSDwu', 'D2Lft0q', 'idy0lca2ncWGma', 'BKDsyuq', 'q3f2BLy', 'Ew90D2C', 'sNHTrKe', 'tLDdthe', 'uLbsqMe', 'D2LKDgG6ideYCa', 'CM1VA20', 'tKfNrwy', 'zw1PDhrLCG', 'EMfqrhq', 'DfrJENq', 'sw9uyxO', 'CePNrMS', 'rgT3uuS', 'rKLLqMK', 'Bg9VCa', 'Dw50', 'Dg8GCgXHy2u', 'y2HHBMDLv29YAW', 'AvvSEe4', 'vgHLicjLBwL0Da', 'nZyXndHQEKn2ugi', 'v05VB1m', 'zNH3Bha', 'EvzLwgC', 'sKnHDum', 'twTNu0u', 'v1jMzhC', 'thHMwMC', 'EhqOjZjKjYK7cG', 'u1buB3e', 'qw5hD1q', 'uwv2qw8', 'r3b0wei', 'z2v0vwLUDde2', 'twrMBem', 'CMzABMq', 'te5AAKG', 'tNn0veS', 'uNHvEva', 'CLncBvu', 'DhnHswS', 'C3bHy2u', 's2rez3O', 'BxjoExO', 'veLdtxq', 'swjJr3y', 'r1f1sMy', 'u09oEM0', 'vNvLsMe', 'vgDTqwu', 'AvDxChK', 'y2fJAgu', 'ieHutuWGphvSpG', 'CLDdzMO', 'z2P6sKe', 'sKXlyKC', 'D1rPDLq', 'seLJs3m', 'Dgv4Dc1ZDwnJzq', 'BwLTzvr5CgvZ', 'rfDdDLm', 'l2fWAs9NzxrPAq', 'C1vetxO', 'EMnIrvC', 'ug9ZC2LIBguGrq', 'uMzhAgO', 's3zSsvK', 'Axn2zvO', 'z1zts2K', 'tgrvwwC', 's2v5qG', 'yuvjt1C', 'tg5uy00', 'y09LA2y', 'AwXHBLq', 'A2vxwxa', 'x2v2zw50CW', 'y2ffs0i', 'vhnfzxG', 'rwzAzei', 'twf4tgLZDgvUzq', 'yK9ry0C', 'CNKGywDHAw4U', 'tePwufm', 'zwfKzxjdzwXSrq', 'y2XPzw50wq', 'AxPkvfi', 'suLjqKu', 'ywrKrxzLBNrmAq', 'z2v0vwLUDdG', 'zxjVCY5MDw4', 'BgfPBKrHDgvuAq', 'zKvQz0e', 'ww91ihrVB2SGDa', 'CgDvwhe', 'Ahq6igjVBgq7dq', 'BgLTvwe', 'rgrTB0u', 'yvvQBLe', 'v0rLqxK', 'y3jLyxrLrwXLBq', 'C3nsywO', 'uvvbtLrjwKve', 'ywDIrKq', 'DgfUy2u', 'lIbjDcbTDxn0ia', 'C09iEMq', 'zxjYugfYywXSzq', 'Awr0AcWGAgvPzW', 'wNfbCgq', 'yM5bCNG', 'CMvKDwnL', 'zLzAA0q', 'qKTdrKy', 'zxjYtxvZDef1Da', 'u2njuhm', 'AgvHzgvYCW', 'EYjpsYi6mcWIBq', 'DLzAvfa', 'vxr6reK', 'tLffvKO', 'rfL5BwS', 'A1Lqu3i', 'D3m6', 'idm7cGKjcqKjcq', 'EvvbCLq', 'zxHW', 'ufbgienVCM9Uyq', 'sNHnse8', 'ywjVCNq', 'r2TXu3i', 'vwDNug4', 'AKj4the', 'zeX3q1O', 'twfWieL0zxjHDa', 'rMXeA1q', 'qwLcu2e', 'Aw9NEfC', 'yMX3BhO', 'vKvfqLq', 'BgfPBK1VBNrOra', 'AMvJDf0', 'BMfTzq', 'rfn1y0K', 'pt0GysKGEWOjcq', 'rw5HyMXLzca9ia', 'suDhAw4', 'DgT5seW', 'y2HH', 'ufbgx1bA', 'C2vSzwn0q2fUDG', 'tgPvuxu', 'wevlthy', 'y2fUDMfZ', 'D3jiAgu', 'BLn5wgK', 'v2vIu29JA2v0', 'u09PuNu', 'uM91Buq', 'AwTbwKi', 'CgrRrLm', 'zxnbA0m', 'vhjqseK', 'DMvUDevTAxr0zq', 'y2fWDgnOyvn0BW', 'sfLhsvi', 'y29Z', 'zNvXvgS', 'Eg5WrxC', 'qKrcwMS', 'B25VCgvU', 'ANfqwNG', 'EhrOy1O', 'BM5vqKy', 'quXnu0O', 'B0LPzui', 'DxnTBe0', 'DgvUzxi', 'qKrWA2G', 'tNPprNa', 'C2v0sxrLBq', 'DgHYzwfKCW', 'yNL0zuXLBMD0Aa', 'CffnCNq', 'qu5pBxq', 'zMv0y2G', 'vfrSBhe', 'zw51BwvYywjSzq', 'BLjVDW', 'BwPKDwq', 'Ee5Vs3C', 'y0fWsKm', 'tgDYD28', 'CeDHBKC', 'u2nfs2O', 'u29sCwO', 'C2v0vgvTCgXHDa', 'ENnpq3e', 'wKL0uNi', 'uhPIvKO', 'CwXHA0G', 't2HJz3u', 'l2fWAs9JAgf0Aa', 'ideXmcu7ign1CG', 'DgnTz24', 'ufjyBNO', 'Agzqru4', 'qu9Kt3O', 'tuGIoJqSiKf3iG', 'rvDMzM4', 'BMP4sMK', 'rLDZBLq', 'idnWEcaWChGGmW', 'CM91BMqTy29SBW', 'ChrhwvK', 'CM50Beq', 'r0fWu2G', 'y2H1BMTtAxPL', 'vunku2e', 'v2vSzvG', 'y291BNruyxjNzq', 'EKnpqNG', 'D0X6rxC', 'AfnjueC', 'BNn0yw50', 'EuLSu3i', 'zxruAw1LB3v0ka', 'vMnOCNy', 'u0vFue9tsvrjtW', 'ANLHu2O', 'yxnbCNjHExm', 'vLnzCei', 'C3vJAeS', 'BLrhEee', 's2jjyNu', 'zLvgCfu', 'EMHqyLC', 'AevZzMy', 'AwDODdOGmtaWjq', 'rNbivgi', 'CgfYC2u', 'x21HEeXPC3rLBG', 'Dw5RBM93BIbYzq', 'vwnkBfi', 'EerQEfu', 'A1nXC1O', 'AwzbrMG', 'sePAqvK', 'ww16A3m', 'CLbezKK', 'wfzryKy', 'CMPJwK4', 'zgfKA2u', 'sffRDum', 'l2nHChrJAgeUCW', 'u3jit3q', 'rgXgtKe', 'u2PkBfa', 'BwjLCI4GuMvJzq', 'zKLxv3C', 'C2LOrhq', 'i3DTic5ZAg93', 'rhbPvhK', 'EMPVt3e', 'sNPyBhy', 'tLbfC3e', 'DeT5r1y', 'zxjYqvbjsxnUDa', 'r3j6qKu', 'C1LgrKS', 'vwjvB0m', 'vwL6sfe', 'tg1NwvO', 'BMv3tgLZDgvUzq', 'BwvZC2fNzq', 'yMHbsuO', 'CvnWuLq', 'BsbZB2X2zxiGiG', 'zgrlrKm', 'q2fHrgK', 'wKz0see', 'BNPJvMq', 'weHyBxK', 'BhzTtxi', 'qKHQBeW', 'CgL4zwXZ', 'A1zlBue', 'BwXLCNG', 'refpEvi', 'wLfoAwm', 'vwf4Cu0', 'CMvTB3zLtgLZDa', 'Bg9JywXtDg9Yyq', 'zw50', 'DermvxC', 'EW0kcwjHy2TNCG', 's1LqAeS', 'yMT6u20', 'ChnqALO', 'CIWGzgvSyxKPkq', 'igzVCIbOyxnOia', 'EurVBve', 'C3vYwuG', 'BfHtyxi', 'DgnVzgu6ia', 'tLzIC1m', 'tMfsBgS', 'uKrkz08', 'suPYsha', 'B1jPuxy', 'BvvsAeC', 'z1HXtxK', 'u3jhsLq', 'shvnz3u', 'yM90', 'qufHzeK', 'sKfnC08', 'ug56suO', 'D3jzDvq', 't3DhCKC', 'reLyBhO', 'zM9YrwfJAa', 's1rwtfu', 'DLrjseC', 'tK9ND1G', 'vNPeAK4', 'y2H1BMTxAwr0Aa', 'tLbyENa', 'Aw50zxjZzwn0CW', 'y2fJAgvK', 'BvLitLi', 'ufbgx1bd', 'EwTevuK', 'CIGNy2fUDMfZjW', 'DMv2DfK', 'tMHADeu', 'yNvPBgrqCMvKAq', 'zMDeDuS', 'zgPOBfu', 'wez4Evy', 'BxrLvee', 'C2HHzg93uM9VDa', 'wxzcqNK', 'BNrO', 'EM1PCNa', 'BvDdvLC', 'vMfTEwO', 'y2fUDcbJCMvHDa', 'vg9grMe', 'DfzqwNG', 'rw9Ir2W', 'Ag9ZDa', 'ze55rLy', 'oxW0Fdz8n3WYFa', 'AgrgqwC', 'yw1Ztu0', 'rxLHBMu', 'Awr5DMe', 'D3LnuNK', 'CgL4zwXuB1rHCG', 'vhnRC2u', 'wNDHtxu', 'A0ndC2C', 'z3PQtNC', 'AgX3u3e', 'C3jJ', 'C1jOv1a', 'rM1VAgu', 'BgrqzKW', 'AgvHDg1HCcbJyq', 'yuXsz2y', 'AcbHyM9YDgvY', 'CeztzKm', 'ueXbq0vFueLyrq', 'wLDYtei', 'AgfZAa', 'u1LvEfm', 'y29WEq', 'tfvQug0', 'wxLjuMi', 'zMLUze9Yq3jLyq', 'cqKjy29UC3qGza', 'EufxzNq', 'q0HbtKDfx01pvq', 'r2vUzxjHDg9Y', 'tNLpz2S', 'ufD1Exe', 'De1jzKe', 'x2nVDw50rxjYBW', 'DfvjDuy', 'A3Hdz3i', 'mxWYFdr8mhW5Fa', 'uMrAEw4', 'DgL0Bgu', 'tNvWyw8', 'vgvTCg9YywWUra', 'Dg9uAwXLza', 'y29SB3iTyM94', 'tK5nvfO', 'z0DetKO', 'DgfYz2v0zxiGAq', 'uuLPteW', 'Ae9Uy1q', 'sLvmBNu', 'EMHlDNy', 'mdSGAsaHpt0GDa', 'qvPVq1O', 'Dc50Ehq', 'CMv0DxjUicHMDq', 'BgrVD24', 'uMzWz1a', 'Aw15tNK', 'BMrLzMLUzwq', 'BgnZCNG', 'ugXYq04', 'AgfZv29YA3nWyq', 'EuLUChv0', 's0XMCKC', 'BLHnq1y', 'rvHbswi', 'A1POyKu', 't1vvs2e', 'BMfUB3nLy29Uza', 'yMHrEM4', 't1HNrfi', 'DKvbu1q', 'rMzqwKm', 'Bezrzuu', 'u3r5BguGpsaNCG', 'A05Rwvq', 'sMjNEfu', 'z2v0shvTyw5SAq', 'yxDNENq', 'yKTptKe', 'rgz5rxm', 'B3DUs2v5CW', 'weThtwm', 'ueX6Cw8', 'rgjdAMG', 'u3jit3m', 'qvrfr1K', 'DMThzhy', 'Be5kqLi', 'DgvZDa', 'CMvHzhK', 'rg9JDw1LBNq', 'swnywMC', 'CMvXDwvZDfbLCG', 'shvxvvm', 'rLnrt2q', 'y1ntrg8', 'wuj4s0q', 'v2viuhG', 'y2j4qMW', 'z2v0ugLUz0rLBa', 'AfvcvgW', 'Axflqve', 'y291BNrfCNjVCG', 'C1vZAw5NvgfYzW', 'q09otKvdva', 'EgvbAMm', 'BeDXteS', 'CgDkvvu', 'y0TVCMK', 'AKXMrM8', 'yNztB1K', 'C3qGCgL4zwXZqq', 't1r2qLO', 'EdOG', 'CKPKufK', 'tuPIEhu', 'z2XVyMfS', 'kgfZEw5JicGPia', 'rLzsrKG', 'AMHJsMu', 'qufsDLi', 'vez6re4', 'vgPTsMC', 'CNKGywDHAw4UlG', 'zej6Egy', 'wLPWDgK', 'DMTfvwO', 'zw1PDa', 'whLnzwm', 'v0D1BKC', 'EMjiy3a', 'y2XLyxi', 'vw5Oyw5KBgvKia', 'ChrJAge', 'yxbWBhK', 'uuTQEhG', 'AunUr00', 'swLOsM4', 'v3fls0u', 'wKr4tNq', 'zhz5Awq', 'ENPyq0O', 'qMXdtu8', 'wxbIDeK', 't2jQzwn0ia', 'A2zPsKe', 'zM5gvwe', 'BNzcD1y', 'zw5LCG', 'B21gu1u', 'AM1LvK8', 'vNfpEuO', 'Bw92zq', 'BLnhzuq', 'wLj4t3q', 'ugrTvKm', 'uf9ptL9dqvbuqW', 'z1HUuxq', 'AxD3vu4', 'ufbgx1rpua', 'BNzHCZ4kcqKjcq', 'q3PhB3K', 'CKDRuMm', 'DdOGAw5OzxjPDa', 'yxjYyxLIDwzMzq', 'AKDxtNy', 's2nxwfG', 'vefWA0q', 'ywrKu3rYyxrLzW', 'EhjrAvC', 'seLss3C', 'DuDSDgm', 'CenTAfa', 'sw5tEhu', 'D2LQyva', 'C3npv04', 'werxt0u', 'Cxrwrwq', 'cqKjctWVC2nYAq', 'rw9iD3q', 'AKHgAhO', 'AgTXC1K', 'y29UDMvYDa', 'tKjKrfa', 'sfrntevSzw1LBG', 'zxq9DxrMltGS', 'uLv3t04', 'ChG7dqP9dqOncG', 'r2n4zNe', 'zLPltLG', 'DgfYz2v0zxjuBW', 's3fUCNK', 'y095Dei', 'BvL0Dxe', 'cGKjcqKjcx0kcq', 'D3nJEfq', 'oIbIBgfJAZSncG', 'B3vUzc1JB2XVCG', 'uM1psK0', 'C3rVCcbVBIbJyq', 'v0T5tfe', 'z2Dbt2m', 't2r5rxu', 'zwzPBMvK', 'sLPzqKq', 'wLnZEha', 'D3bxCLC', 'BwfW', 'y1v1svy', 'igLZig1PC3nPBG', 'vvnyuK8', 'z25vuNi', 'oWOkcqKjcqLJBW', 'D3HRDK0', 'yM1ZsNq', 'y29TCg9Zzwrqyq', 'vfflr2K', 'De9Uy2uGpsaXma', 'ywXS', 'rxjHtfq', 'ChHZs1y', 'AvLZrNO', 'A2v5', 'mZzkDvrsC2O', 'shHVyNO', 'y0fdDva', 'ihrVCdOGmdSGBa', 'BM9ZDhjHDa', 'rw9vCKS', 'Bgv0DgvBAL0Sia', 'Ce1tELq', 'rNzYtLK', 'EfnpyKi', 'zxj0Eq', 'tg9JyxrPB24', 'zLrAqwq', 'z1PmAwy', 'sgvTswy', 'D1rbvgu', 'C3P6Ahe', 'yvDjBMO', 'uvL6t00', 'thDduLe', 'uuvzzuO', 'v05irui', 'zsb0yxjNzxrLCG', 'Bg9N', 'quXZEKq', 't2LSDgm', 'sujksLq', 'AgvHDhDLyG', 'CMvTB3zLrxzLBG', 'DgfYz2v0CW', 'qNnKu0K', 'Egjrrvu', 'wenPthG', 'vxLKDei', 'ywzsuhK', 'zNjVBuvUDhjPzq', 'AurKBxi', 'iGP1C2uGzgvMyq', 'zefxA24', 'ELriquO', 'ENvRu0q', 'zxjYtM9qBgfJzq', 'CMv0DxjUihrOAq', 'CMv3Bee', 'zfrVu0i', 'qKXREeO', 'svLLDKi', 'uergy0C', 'zNPQv3m', 'BK5rtve', 'sMT0z2q', 'BefzBNq', 'CwPvwM8', 'rxngrwm', 'BvPgrue', 'y2HLy2TLza', 'z3Hes24', 'B1jsCNu', 'zuPnuLe', 'vxbkwvu', 'vwvowLa', 'AMTWqu0', 'uvPOBMy', 'BK5yEMi', 'C2HHCMq', 'ihDPzhrOid0G', 'DK9WquG', 'wfvjv04', 'tM9qBgfJzvbPEa', 'yM5OvfK', 'AxrLBxnoyw1L', 'qLHRwLi', 'zwjNzhi', 'yxr0ywnOu2HHza', 'tu1AveC', 'EuTWEgW', 'oWOjcqKjcwnVBG', 'turttfe', 'i3zVAwqTyM90ia', 'DvbSBxy', 'Efnluw8', 'uwHqAK0', 'rhDlzg4', 'B3zIqNy', 'u0L1zMm', 'Dhj5ihrVigr1Ca', 'z3jLyxqGywDHAq', 'tvH2CKi', 'Bwf0y2G', 'D21WrxK', 'qNvvAeK', 'uLvNrhi', 'qMHVCgC', 'D1fgyNq', 't1bWBfK', 'uwnHr1G', 'tLLACxe', 'EfnJDwO', 'B2yGiM4IigLZia', 'Aw5WDxq', 'qwXswhG', 'DLD5zuy', 'C3bHBG', 'vKzwqK4', 'rvjst1i', 'vu5fz3C', 'teHOr1a', 'v2Lpt2G', 'AvnSvwK', 'ugX1z2LUqxjYyq', 'EhH5uMu', 'vwLUDdHbCNjHEq', 'B0zmuMW', 'l2nODw5RCY8', 'Bur1wxy', 'D1LSzxq', 'Dg9tDhjPBMC', 'EuPQA24', 'B3jPuum', 'zxiTy29SB3i6ia', 'xsK7cGKjcqKjyW', 'CuHyDMC', 'uwrmCKK', 'BwzLzNe', 'D2LUzg93lNK', 'BLPvy0q', 'AvvgsMq', 'wMXUyu8', 'Eg5Oy3O', 'AhvTz1m', 'vuPTyMW', 'rufiwfG', 'Dg90ywW', 's2PJEKq', 'shndsLG', 'CKjuqvm', 'rhjwsNq', 'BKXgwKe', 'EgXly1O', 'rxLurfO', 'CgXLvMi', 'CMDLDhnBAv0Sia', 'qK56DeO', 'D2fPDa', 'r0n3Bey', 'q0jABey', 'D29YBgrxAwr0Aa', 'yxbPigLZihjLyq', 'txHbtve', 'CK1suwm', 'Efvizgq', 'rwHsCxe', 'DerksKW', 'qNbUu24', 'tfbLtfi', 'tKXvz3m', 'B3rLy3rLza', 'AgfUzgXLqxjYAq', 'vNrSv2O', 'y2XPy2S', 'CNLjDxm', 'v3Hyv04', 'C3vIC3rYAw5N', 'CvDRrxK', 'ywTYzKi', 'D3Dbtfi', 'sw50mtzbCNjHEq', 'q1jWyxO', 'q3L4B0m', 'ueLorW', 't2jQzwn0', 'u1Djvenix0jpva', 'r0XQEfG', 'l2fWAs9HDxrO', 'uePOzgu', 'zvLQC3m', 'sg5pDe0', 'z05TuLe', 'z2v0sw50mty', 's2DTqKy', 'BM8Gy29UBMvJDa', 'A3jOrMO', 'C3nozfm', 'sxHquwG', 'tgL1reS', 'y3jLyxrLt2jQzq', 'DfPUANu', 'B29WihDPDgGGyq', 't0Hgsxu', 'EvDbzKe', 'Ahbwy2K', 'z3jPsNi', 'DM9MrLu', 'Aw5MBW', 'uKPLvMi', 'CgL4zwXZqxrpBG', 'werjtwq', 'twznr00', 'u1vmva', 'ELvOBeW', 'sw5Lq1i', 'ExflCum', 'u1nFsu5gtW', 'zdSncGLWywrKAq', 'y0PND3a', 'l2fWAs9Iyw5PBG', 'mtu0B1P3sxnV', 'nJa0nti0EwrduLPR', 'C2fjC0C', 'EgvSCgXHBMv0lG', 'lMnVBg9YlwjVEa', 'vwnrA0u', 'BwTlquu', 'DKrSCei', 'uev2yxu', 'svHMAMC', 'EeLUChv0', 'qNHVzxu', 'igvSzw1LBNq', 'ywrKtgLZDgvUzq', 'A2PQC0K', 'qKfrweO', 'yKTrteW', 'zxiIigfYz3vTzq', 'Dg8Gy2fUDMfZia', 'AhjLzG', 'ALjKrfG', 'rg5eDge', 'sfjqveK', 'BgvMDca', 'zMXVyxq6igXLzG', 'CKDirMy', 'y29TCgfYyxrVCG', 'tLrrwKS', 'BwLU', 'B25SAw5L', 'Cevxt2q', 'rvDxuKK', 'te9breLorW', 'zw9vrgu', 'wKLIuuO', 'u0DpzvO', 'twvHqMC', 'DxfOtxi', 'DuHqwha', 'zLbPD0e', 'A05jreG', 'Dg5tqKq', 'DhrLw2OGkYaYxq', 'CgfSzxr0zvTQia', 'surmrq', 'y3L6sui', 'mIWICLuIoJmSiG', 'CgLUz3m', 'Dxr0B24GC2vSzq', 'BgTjC0G', 'CM9Jq2q', 'AffHqva', 'DgfIBgu', 'v2Hmrei', 'qLHkB0C', 'qxfksgi', 'tLbdBfq', 'CgvpzG', 'yNnQvu0', 'CuLlyLC', 'vKTQsKK', 'zsbLBwL0DgvYlG', 's2PJu0O', 'quDtsee', 'AePVzgC', 'Ahr0Chm6lY9Yyq', 't29jzLq', 'zejVufu', 'CMf0zwD5igrVzq', 'q2z5EMC', 's3rzsK4', 'qwP0y00', 'BwjPD3u', 'zxzLBNroyw1LCW', 'Bhjjzca9ic0XoW', 'ExbqBwy', 'yu5crNG', 'qKH0BfC', 'DhfIwKS', 'BfrnC3G', 'C250icjVAYi', 'z0flzui', 'uMPfz3u', 'ALHfy0m', 'rMLjChi', 'yMXVyG', 'AgvPz2H0', 'zgvSyxLLzfbPEa', 'C3rVCe9Uq2fWDa', 'qNblwM8', 'zg1Uz2e', 'yMvMB3jLq2HHBG', 'D2f6Bu8', 'vKLhD0m', 'DNDzz0O', 'C0DpqNG', 'DuT6Ahi', 'DhnpCKC', 'zdSncGLMB250oG', 'qMzOANy', 'txHKsuy', 'Awr3y1q', 'DuXOywG', 'yxnuDxbSzxngyq', 'z2uUieL0ig11CW', 'yxnbCNjHExngyq', 'CvrsD1q', 'seP4Ege', 'C2HPzNq', 'u3LTyM9S', 'uKHmwuy', 'ExbLia', 'ChjVz3jLC3m6ia', 'run1rMG', 'vhjPz2DLCMvK', 'svb1CMK', 'Aw9U', 'BgrpuKK', 'rM5oy20', 'DcbIzsbHig5VBG', 'y2PRDgm', 'DMfSDwvZ', 'zgfpB2S', 'yKXRsfm', 'l29UBgLUzq', 'BeznsMu', 'sgDTDNC', 'uNPLBxi', 'Cw5juKG', 'A1jVvhy', 'CfPbtLi', 'B0LWwM8', 'sK5Jy0u', 'y29Kzq', 'AwjNDeC', 'sfr0se4', 'EunNzw8', 'CYa9ig5LDYbvAq', 'u3rYAw5NieL0zq', 'uNPUD2q', 'yvjeqvi', 'sg1PsfK', 'tePiCxu', 'vunRvMi', 'zgz4wha', 'q0XLwei', 'rKvpq0W', 'v0fhBM4', 'yvjjCKO', 'EhvTqxC', 'C3LTyM9S', 'rgDWy0K', 'AuDwvgu', 'r2PyuvC', 'A2jJqKy', 'CePAB2i', 'A0joCu4', 'C0DLy0y', 'ueLjBNrLCMfJDa', 'vYi6msWIr1GIoG', 'CxjkBhe', 'BNqGBxvZDcbIzq', 'txLSrhG', 'A3HIvNe', 'u2z3CLq', 'D3rhtwS', 'EKvktgS', 'Euvbugy', 'A2vK', 'y2znBfy', 'DgjRrMG', 'zxfSx18', 'q3nrsfK', 'vNfvEw8', 'DfHQs3y', 'zgL2ihn0EwXLpq', 'tuT6r1G', 'DhjHBNnWyxjLBG', 'u05lrxy', 'CMvZCg9UC2uGCW', 'pc9KAxy+cGKjcq', 'mteXnJK1mJHyz1jlq0K', 'zxLyy2K', 'qKL4sNO', 'zMLSzq', 'yxrVCG', 'rfj3DfC', 'CI4GuMvJzwL2zq', 'uvrcAhC', 'q1DLwgq', 'quLtA2K', 's2vMqwK', 'rfbqwKS', 'sunksvy', 'tLrRvNu', 't29yzLu', 'C3fYDa', 'yM9VBgvHBG', 'D2jiA0y', 'vvPWEwK', 'zezgqvC', 'BhzqDwy', 'thbjB1i', 'C2vSzwn0zwq', 'DdiWma', 'Bg9YoIbYzwq7dq', 'FcaXxsWGmsWGmq', 'Cw9MuhO', 'ser2q2K', 'zKnUAM8', 'ihrVihnVBhzLCG', 'z0zoDg0', 'Ahq7', 'ufH2Eg0', 'BgfJzq', 'sgL1vLC', 'tevbqvu', 'shjyzuG', 'Bw92zvG', 'z2PrEfe', 'rNznrKS', 'cwXLDcbWCMv2qW', 'EKvjBMG', 'zhzpr3q', 'y2fUDcbKzwzPBG', 'y29TCgXLDgu', 'EuXoBKK', 'yKjIsuK', 'BwLZC2LVBG', 'swPJv0W', 'zNfzA2u', 'rvLlqvm', 'CKjfywu', 'Bu9PsNe', 'C25kr0q', 'CffRqKC', 'AuTjy04', 'B1Hizhe', 'ENjeA3K', 'C0Tivei', 'C3r5Bgu', 'yMDNwLG', 't0rqrLK', 'qLbdDMW', 'DxHNuNO', 'DgLTzxi', 'B0jiuMK', 'D25SEe4', 'Bvfjy00', 'wwDOCNy', 'uMzPwMG', 'qNLyEhG', 'DevMyKq', 'A3jYCgm', 'shbXu3a', 'Asa+pIaXksaVia', 'qKXpq0Trvu9urq', 'Bfn5AKW', 'CuTvyMC', 'Bezqz2u', 'AfvnvLy', 'qMDOr0m', 'ExvsB1O', 'A05ZB3e', 'ANjyELy', 'sNbdwLK', 'igfIC29SDxrLoW', 'qwnhv2C', 'ru5MD3a', 'uwryzNm', 'D3PrA20', 'DgfYz2v0', 'v1LJvvK', 'CMvHzefZrgf0yq', 'zvbVC2L0Aw9U', 'DNPUwLO', 'sxPuuvO', 'DgnOlM1L', 'y29VCMrZvg9jBG', 'qLnOu2i', 'C3rYyxrLz3K', 'yM9KEq', 'tvPJuey', 'qKnzshi', 'C3LnAuK', 'zwXZ', 'DLbyzeO', 'sMLZs2O', 'vw1cq20', 'tg9QDNi', 'DMjnq24', 's2XQy0m', 'tNPWzxK', 'weLsquy', 'C0nLD0K', 'EeTcDxK', 'tuHguwW', 'r0Piwgm', 'BKDgzvi', 'B2r5pGOjctWVAa', 'rKXiAfi', 'zgf0yq', 'qKDmBwy', 'CKH1uM8', 'C3rLCI9ZzwnYzq', 'zxj5u2vSzwn0BW', 'B3vAtwG', 'C3rHCNq', 'CKLKCW', 'yu1bvKK', 'zwXHEq', 'zwfRigrLDgvJDa', 'sgXYyNK', 'BgLZDgvUzxjdBW', 'CNrLCG', 'C29YDa', 'ChjVDg90ExbL', 'BgnKs20', 'C1PezuS', 'cqLJDhGUzMLSBa', 'uffMAgK', 'Dgv4Dc1PBMzV', 'CNr5sNm', 'u1rssu5h', 't1bftIbVCIbdtW', 'D2LdBLe', 'C1fjEKi', 'ueXbvevFu1jd', 'vwPAwwi', 'C3rYAw5N', 'CNHevw4', 'ugzqtgK', 'qvnRtg4', 'qKH0sNe', 'qMjTzLO', 'qxHiyKG', 'BwHTwNy', 'DY5NAxrODwj1CW', 'DMfzu2G', 'twzos2K', 'lwnVBg9YoIbIBa', 'B3D5rue', 'C2v0', 'cqKjcwn0Ec53zq', 'zuzgD3m', 'DgffzMC', 'zgvMyxvSDa', 'qK1lv04', 'C3fkDxG', 'EhvhtLa', 'Cu5Jvxe', 'Bg9Hzff1zxvL', 'D29YBgrz', 'quDbEei', 'BgLTAxq', 'ugX0qwO', 'sxjUr0m', 'Bfbsv1e', 'qMTwwxy', 'tNvTyMvY', 'seziu1u', 'svjhqvy', 'AfjJsfi', 'CgXHy2u', 'Aca9ihDPzhrOoW', 'Ber6z3G', 'rwfht0K', 'u0fyrfa', 'sNnwtxm', 'ihSncGLKAxnWBa', 'DLPiq3i', 'A2v5C0zHy3rVCG', 'AhjKr0q', 'DMfiCwm', 'z3vey2e', 'ENjiufC', 'sxv1vLK', 'ywrKv29YA3nWyq', 'qxb2yNO', 'A3zsD2K', 'rvrlyuK', 'AhzHzhy', 'rK1iy1C', 'whj4ufq', 'ENjJuu4', 'nxb4oW0kFq0kdq', 'Eff4Dhu', 'wfbzzwS', 'AM9PBG', 'B3b0Aw9UCW', 'EhDMB0W', 'AwruB1jhqG', 'zhHyweS', 'shzfsLm', 'rLHQqLa', 'CufIAeO', 'uNfmtfC', 'D2fPDejLy2f1CW', 'AxfSzfG', 'ywrK', 'DvHks1a', 'uNHoEgG', 'z2nVsNi', 'iIWGC2vUzcb0BW', 'rNnlr0i', 'y29UC3qGAwqGpq', 'ANz0vxa', 'u29SDxrPB24', 'iJOXmIWIztuIoG', 'AuvJvNy', 'Dhj1BMm', 'sLnHqxq', 'DgvTCgXHDguUEa', 'z3L4t1K', 'DgvTCgXHDguUCW', 'AhzUrva', 'sLHjD1O', 'yuXWwuu', 'vufvEwm', 'AvfuweK', 'yuHkD04', 'wKvREfm', 'u2f0rgi', 'z2iOjYaRifTWyq', 'qK9ux1bst0Dsrq', 'DeDhAey', 'qNLlseu', 'zxjYrNvSBfn0yq', 'DgHYB3C', 'uxL4q2W', 'v1Hfy0u', 'zsbIzwnHDxnLia', 'Bwf4', 'C0XKA0i', 'wxHus1K', 'uxzOCMm', 'CgfYzw50', 'AMLQDKy', 'ihSkcqKjcqKjcq', 'wufmvMi', 'y2HHBMDLvgfYzW', 'C250igv4Axn0CW', 'Efjgvxi', 'DgvNEq', 'vvryt3e', 'A0TYBvC', 'qxPuAfu', 'CgL4zwXZrgvSyq', 'Aw5J', 'wxbPwvq', 'AhLwyxu', 'u0nkvwK', 'whPIDvy', 'yw52yxmUD2LKDa', 'wwfrrey', 'CMjfBM0', 'uNzVtNG', 'zhjVCenODw5RCW', 'EgndzKS', 'D2LKDgG6mtaWjq', 'wwvuseC', 'EtOG', 'ueLoBKS', 'yLr0uNi', 'Cu5XrhO', 'te9vBK8', 'CY9qAxHLBfbSyq', 'y1vZtvK', 'uvLQzKe', 'w1rsqunfxsa', 'svvxAgS', 'zg9JDw1LBNq', 'lJmPoYi+pc9Jyq', 'dqOjDg9WoIaYjq', 'BMjPBLm', 'CgvYBwLZC2LVBG', 'tenxwva', 'C3DQANO', 'zezuDgq', 'D3LYwem', 'qKXvuG', 'tu5jqK8', 'CMvTB3zLqwXSta', 'lwjSB2nRoW0kcq', 'AgfSzG', 'ExrUvgG', 'v3rsseO', 'qLjhC3a', 'txb3Cfi', 'yNnwzvO', 'DwXLvfK', 'zMLUzeLUzgv4', 'CMf3tgLZDgvUzq', 'ueLor19fuLjpuG', 'Bw91C2v1Ca', 'y3jLyxrL', 'qxzYA2y', 'tNHQAeK', 'u3blv0G', 'C3rYyxrLz3LfBa', 'zgnzz24', 'zM9YBwf0sw50tG', 'z0nltfG', 'B3vUzdOGyMXHyW', 'EKzxvLy', 'yMuGywrTAw5Zia', 'B2zMC2v0vg9W', 'zMLUza', 's1HwuNm', 'x19LC01VzhvSzq', 'yK9xuu8', 'vMj0qK8', 'ExfIENC', 'yxjNzxrZlMXLBG', 'v09xzhC', 'CMvNAxn0zxjqAq', 'CvjuDum', 'BMD1Beq', 'qMvMqvy', 'ruzzzfy', 'zMTkA1C', 'Dg9mB2nHBgvuAq', 'AwzbB0W', 'uLrxq3u', 'CgXHy2vqAxHLBa', 'y29Yzq', 'vwz5B3u', 'q3zquMK', 'yKzrv2C', 'tNPJt1G', 'qNbNyuK', 'CwDsA2G', 'yNjACK0', 'cIn2B2LKlwjVDa', 'AgLPvfK', 'yxfWELy', 'y29UC3rYDwn0BW', 'CMzZzfK', 'uuPOr1O', 'BM8GywnJzxnZia', 'wvrvzvG', 'thveq2S', 'B2yGiMrLzMf1Ba', 'B25ZDcbHid0Gka', 'zLH5DLi', 'u3H3zKS', 'ChjLCgvUze9UyW', 'B29Yzhm', 'wxrpsem', 'rMXVyxqZmKfYCG', 'zw5gs0u', 'rgrhtMy', 'Dg9eyxrHvvjm', 'psjUDw1IzxiIxq', 'Ae11yKO', 'uLnZwNi', 'AhzPwvy', 'EMLWCgvYmG', 'wKDcCg8', 'CKjHBLu', 'DgHLBG', 'AfvtrKW', 'y0PQB3O', 'zxjZ', 'BgfJAZSncGLJBW', 'zvnTB290AgLUzW', 'C1bkr08', 'wwDuBwi', 'u2v0ieL0zxjHDa', 's2rttLK', 'A2v5CW', 'BNvTyMvYlIbszq', 'thj0s0m', 'DxvKAKq', 'EfPHAuq', 'Aw9fAeC', 'se9qBNC', 'wgHOyKi', 'sxLvyxG', 'rxvKtuS', 'zg9Uzq', 'wgrXsuC', 'zLnjqLC', 'Aw5KzxHpzG', 'u0rnrfO', 'wfrotNa', 'ufDTtMC', 'D3jeyvq', 'qMn4D1m', 'qMfHqNC', 'ywLbrfi', 'EvbtrKK', 'ignVBg9YC1TPia', 'B09ts0y', 'yuLwCvC', 'zgniDMW', 'uLflz0i', 'C2v0twf4tgLZDa', 'zxf1ywXZ', 'BMvkt0W', 'A1vPthe', 'zgvZDhjVEq', 'CfnHuei', 'zLj5DMi', 'EMvmrgq', 'A2v5tMfTzq', 'ywjVCNrqBgfJAq', 'uMvNrxHW', 'EKXXBMm', 'u2zkwfm', 'DfLOD0G', 'DKntDM4', 'uwr4EuS', 'AKfRAxi', 'u1Lqzxq', 'yu9Wqvu', 'ALzAuwG', 'yM9YDgvY', 'EMv6ChK', 'rvzSAuG', 'BgDlDei', 'rKXQvvu', 'DgLTzw91Da', 'sLLzz28', 'vgHLicjSAxn0zq', 'svf6Beq', 'vu5mt0feruq', 'zxjYB3iU', 'ufbgx01pt04', 'cwLMicH+FMeGpq', 'shnxr24', 'uLDhwgG', 'B25LCNjVCG', 'DKTUB1u', 's09Yu3i', 'ywr6BMC', 'wMj5sNO', 'qxn3yvy', 'mxrVv2PREa', 'Axnoyu4', 'C3rVCa', 'vuTmsLG', 'revgqvvmvfm', 'rw96tuq', 'z0vACfO', 'C3rYyxrLz3KGDq', 'ueXbvevFwq', 'z2nqtKC', 'zgfYA25LC3nFyG', 'CMf0B3i', 'ChG7', 'oW0kcxjPz2H0oG', 'B3jRzNG', 'zw5KigLUoIa', 'cGLIB3jKzxiTyW', 'sfrntfrHyMXLra', 'tvbfr1K', 'yxvRq1i', 'zKDjC0u', 'DwTkDKu', 'q2LoA1C', 'ywXLCW', 'uKvbrfK', 'zw5LCNm', 'vgDbBva', 'BMf2D3G', 'BMzxvfu', 'y3rVCIGICMv0Dq', 'DgfYz2v0zxi', 'rufgwhm', 'D1fotMu', 'CuP0EMW', 'CxrsDNe', 'yNv0Dg9U', 'BgTqC1u', 'vgrAq28', 'vw5HugK', 'BKHIuuK', 's0zjEgW', 'ueHcu1a', 'CgfZCW', 'A1fRA2m', 'BgveugC', 'uNrmsfC', 'vMDhsgS', 'zxjYsw52ywXPza', 'zgvMAw5Lza', 'zhnqtvK', 'qM9VBgvHBG', 'uur5yLy', 'senSCMO', 'uMfXvNq', 'uvvwCei', 'z0LpEeO', 'vfLkqK8', 'vNPzy3y', 'D2jbq0m', 'DLjbB0y', 'z0nTvKm', 'ueXuAMm', 'DNf5ruu', 'BgzRExq', 'suHVAvK', 'C2v0vwLUDdG', 'yuX1B3K', 'AhvZs2q', 'DgL6zq', 'CNPHtLy', 'wenJwwW', 'txnHEg0', 'q2Dizw0', 'z2v0sxrLBq', 'EKjNzMe', 'tu5myu0', 'yMPfsNC', 'wuTJDhi', 'BNnnrxC', 'Dennsuy', 'sM9cvfe', 'Aw5WDxrBDhLWzq', 'quf3twy', 'ENzmueK', 'y29kyM8', 'Euz4qMG', 'ALvODui', 'A2LHBMK', 'wxPUqNG', 'zM5RyKG', 'zgvMyxvSDe1HEa', 'rxrlvKG', 'A1rvDxK', 'qxPrs2m', 'BLLZD1a', 'qxjNDw1LBNrZ', 'y0vXvhm', 'uvPstNG', 's1L0t2K', 'DNDWDLa', 'seLcA0G', 'CgfJzxm', 'y2uGAxmGCMvHza', 'BLzytw0', 'zLzwy3m', 'EMXlEgq', 'D0rSA3u', 'yLj2CKq', 'B3i6igrHCMTYzq', 'y2fUDMfZswq', 't3ndyM8', 'wKHfDhy', 'uKvZrfe', 'zgvMAw5LuhjVCa', 'q296zgy', 'CxvHBNrPEMu', 'vfHrEKe', 'x19WCM90B19F', 'CgX1z2LUCW', 'ruH5A3O', 'rMTus2q', 'EKzOvuO', 'AxnbCNjHEq', 'r2zIy0G', 'sfrntff1B3rLrq', 'weTLC2q', 'y2TND2W', 'y2XHC3m', 'uNrguvq', 'EuzwsuC', 'uMXcyvu', 'BgfPBLrPBwu', 'uMzfyMq', 'BMf2AwDHDg9Y', 'r2DxrwO', 'zfjrzhG', 'Eu9Tsue', 'CgfSzxr0zq', 'DLrOExG', 't0Dju2W', 'D2fYBG', 'v0PJCuG', 'BurOzxG', 'zMfMzve', 'iJO4lcjjmYi6oq', 'B1DNs3y', 'EvHXuNq', 'zvrhDNO', 'CKTcrKK', 'Cu1LuhO', 'vffdDxu', 'DMXItK0', 'Egz6C0m', 'z1D0rMm', 'AwHNv0m', 'whj6zwy', 'yMnK', 'tfDIqLa', 'D3fVuvO', 'r3jADwC', 'zw1LBNq', 'Dw1sugC', 'B28GBg9UzYWGDa', 'BwLVv2W', 'u3LkBwC', 'A2zIBhO', 'B3fbqM8', 'uNbOsMK', 'EgHkwwW', 'yM90t25SAw5L', 'DxjHDgLVBG', 'igjLy2f1C2uG', 'wwDJvei', 'DwXowNO', 'zfL1DKu', 'wM1MueO', 'r2fUuMu', 'u1LWsLq', 'kYaXxsWGCgfSzq', 'ue9tva', 'Dgv4Da', 'CK9sugq', 'vwjZyNu', 'y3rVCNK', 'yxvSDa', 'BNDkBe8', 'yLHUswq', 'C2v0sw50mty', 't3r6qMe', 'y2fWDgnOysbSBW', 'vgHLihzHBhvLia', 'r25twKO', 'B25SB2fK', 'zeDYB2O', 'whbHBhi', 'tMf5yKe', 't2fHB2e', 'reLtq09otKvdva', 't3rtA3m', 'BeXkug8', 'sufArwq', 'C2LU', 'rg5ksfe', 'se9hB0y', 'y1LsqxK', 'z2v0rxHPC3rZ', 'rK1MAxy', 'DKLRC3u', 'yuDky2O', 'zgLgBMS', 'sfv3Bha', 'Aw5UzxjuzxH0', 'AffWu3i', 'z3jVDxa', 'BLn6vfK', 'AM54AKK', 'yKHUz1q', 'DwL3Duq', 'sMLor3m', 'sKvhuw8', 'qKHVvhq', 'ENz6se4', 'vKPyB3e', 'CI1JB2XVCJOGza', 'De5VELO', 'DuvqCe4', 'CgHcy2O', 'z2zREum', 'tK55wue', 'vMTkuwy', 'quPdBKO', 'AhbTt28', 'EwrRthC', 'zwDJz3y', 'EhfuuNy', 'C2nzCfm', 'Bgr6rxi', 'wK13sfq', 'yxPStLm', 'senwuvy', 'z2v0', 'tNnmr1m', 'lZaV', 'Ecb5', 'ufjgCuG', 'tMr5wMS', 'C29SDMvY', 'xsaRicCPjZSkcq', 'C3rVCcbIB3qGCa', 'zezvAw0', 'CMfUzg9T', 'DLLQvMu', 'BMvnCuG', 'B25tr1q', 'veDfte8', 'zgf0ytPPBwfNzq', 'rgLTB1q', 'ugfLBLe', 'y29TCgfYzq', 'BwvTB2L6zq', 'C29Tzq', 'Dgzbzwi', 'zNzbC0O', 'B3jPz2LU', 'DevvC3a', 'DLnkuNi', 'sNflwuS', 'qxbgAu4', 'iLPgiJO3lcjICG', 'tuPZt1u', 'zLbNvg0', 'wvPcthu', 'AfDvr0G', 'ze1uEuK', 'vuv0vuq', 'yw90BfC', 'Ee1dq2m', 'z1v3DKy', 'vgfVDuq', 'rvfbwNy', 'lI4U', 'AgHdz1e', 'suP3zgG', 'BMTZ', 'qKrjs3K', 'Ahr0Ca', 'sNDNDeS', 'yM5Xu1C', 'Bg1juee', 'qvDsq3K', 'Be9PA1e', 'vwPbyw0', 'BgrxtKC', 'swvdwwK', 'zxjYB3jZoIa', 'lMjTCa', 't0TIwwG', 'rNrXC1y', 'Dgfcy2O', 'CgDOB3u', 'ufbgievHCNrO', 'qKLwzfG', 'wxLetuG', 'zfvwz2i', 'Ew56Awe', 'vMLAuM8', 'wNnWCfK', 'zxjYu2v2zxjHBa', 'Dhj5ignVBM5LyW', 'wLnbB08', 'Bw91C2vKB3DU', 'tfrWDu4', 'ANnmELi', 'vvHYELm', 'tLjXwge', 'EwLeyue', 'qMvTAve', 'Ee1Iz08', 'zefmwMe', 'ywjZ', 'AgLWAhK', 'C3bSAxq', 'svzQDg8', 'Bw9gtuq', 'zxj0Evn5BwjVBa', 'CuzOz2e', 'qwThyMy', 'z2H0id0GAgvPzW', 's2TAy3a', 'DxL5C00', 'zLnMCeu', 'BMv4Dhm', 'AhHlELq', 'B3frA0e', 'C3rYyxrLz3K6ia', 'qxPYqMu', 'zKXcuuO', 'weLur2G', 'se5fEvq', 'AezWtNi', 'A3HArKu', 'u29ouKm', 'ugrMuvG', 'yNnyv0W', 'qM1VD3O', 'Exrbrfe', 'y2HLy2TuyxjNzq', 'zMLYzwq', 'DgTcDwy', 'BgLZDgvUzxi', 'y2fIrMe', 'qvfTsKW', 'sgTKv3i', 'uNbKrui', 'DKXrt0K', 'verps1a', 'x19PBxbVCNrezq', 'mJu2nZu0men5zKXuuW', 'uvDoD2W', 'ue51D1K', 'z2veyxrH', 'veLsCKK', 'zt0IAgvPz2H0oG', 'zfriDMe', 'Dergz08', 'Exr1Cum', 'q2vqswi', 'txPMyuu', 'CfDHEva', 'sMXRB2i', 'zxjYq2fWDgnOyq', 'Bvrnzhu', 'ANDlDgy', 'ywjSzwqGpsbMyq', 'DwuGiG', 'rK5QugW', 'y21rzNu', 'vvjm', 'sw1hEfK', 'AwzQqK0', 'C3rHy2S', 'ywz0zxjdAgfUzW', 'vu1juwC', 'yKTzs3a', 'z1jNvfi', 'wLzwtuS', 'y0Xrsgm', 'zMDNDLm', 'AvPbC2y', 'BhjjyvO', 'rKv5sMG', 'ruPYzuy', 'D2vVuxy', 'qujuCwS', 'EuLVBvq', 'y29SB3jZ', 'uKjotLu', 'v0jJy1e', 'CMvJB25Uzwn0ra', 'tKPvDNG', 'rKzZCfG', 'zdSGBwfYz2LUoG', 'zeP4yK8', 'qMLyDNO', 'sNzszey', 'yxrHq2vSBevSzq', 'z3fxrMK', 'zw50CMLLCW', 'zvn0yxr1C0LZBG', 'yLDfvwK', 'ueLMAwu', 'tKPyzhm', 'AwTlB1u', 'rNPqvuO', 'yMzArhu', 'B1z6tg4', 'u3bzwNm', 'DvLbzvq', 'twPPugS', 'vurLAuS', 'yMjyBue', 'q3P6s2W', 'rgOIoJeXlcjeoa', 'BKn0z3m', 'wNLNCKK', 'wLDMBgC', 'C25MvxC', 'rgf0yvzPzxC', 'CgXHy2LUz0fIBW', 'y2Xbu24', 'sePOsNy', 'C3rLBMvY', 'rxr5ELK', 'uufZCKG', 'rfv5zeG', 'zKT5zey', 'y2fUDcbSB2fKia', 'wMv6vKC', 'y29VBgrVD24', 'tLHSBum', 'vgrjA3q', 'C2vgzLO', 'y29VBgrVD246ia', 'qxf0yM8', 'CwD4Due', 'CejUrgi', 's2DmzwG', 'u1bSwhC', 'y2XPzw50wa', 'EwvdEg8', 'r1r0tuq', 's1L6quW', 'wMrlAuW', 'Aw5ZDgfUy2u', 'yNjLywTuzxH0', 'zunxrgm', 'u2PSyvC', 'BMC6idnWEdSncG', 'BfbSywnL', 'D1HWChC', 'rgf0zq', 'sKfXExy', 'CLHOB3e', 'u1H3ExO', 'sMHuCgC', 'ChjLCgvUzeXPCW', 'qw9XqK4', 'DvjXB24', 'z3jVDxbqAxHLBa', 'AuTdEuS', 'rxv6wgO', 'C2v0sw50oa', 'DLjJCha', 'AwjKqMu', 'venrEgC', 'yuLzwLC', 'sefLq3m', 'q0HbtKDfx1rftq', 'ywXLBMrHCG', 'w0LorK9Dia', 'qvnPv3a', 'D1LiD1K', 'CNDTu1a', 'vgHLihrHCMDLDa', 'zLzitxm', 'CuLIBhC', 's1HxqNu', 'oWOjcqKjcqKjFq', 'y2jNvhi', 'sgfJyvC', 'Agf2zvn0ywnR', 'tuPbtuS', 'B2n1BwvUDc5XDq', 'zMfkueu', 'EgX0ANm', 'DgfYz2v0C1TPia', 'yK1ysgG', 'zMv0y2Hnzq', 'y29Uy2f0', 'D1PgtMW', 'whnlqxm', 'zfjsswW', 'BeLxELy', 'DhjHy2u', 'D0fOuem', 'DvP5BLC', 'oW0kFq0kdqOJDG', 'whftC2O', 'zxjJB250zw50lG', 'EejxvLa', 'txnZDxe', 'zeHwAxe', 'A1vwu08', 'zxjYww91qxjLua', 'AgfZ', 'ywz0zxiG', 'uLnkwLu', 'sgDhuwG', 'Dg9YqwXS', 'lMnVB3jIB3G', 'AhjYywS', 'CgL4zwW', 't0Hrz2S', 'D3zjD0K', 'rwL3qMm', 'ywjVCNrmB29W', 'ugDkruu', 's0vYthC', 'ExfJseC', 'D3jVBMCGAwq', 'tLDkqxa', 'AKzfq3O', 'B25Jzq', 'wefVtwC', 'y3qOmcWGmcWGDW', 'ywDdB0W', 'AfHRv1q', 'zfrhu1G', 'EujntLy', 'vwTJEwy', 'Dw5KzwzPBMvK', 'DwX0icGIEMLWCa', 'zNDRzhq', 'sK1JwKS', 'q2nnBMm', 'EuTnDfG', 'CwLot3m', 'zgLJDa', 'wLbcDMe', 'A0Hqv0m', 'v1PMswC', 'v2TRAxq', 'u05wtM8', 'Bg9JywXdzw50zq', 'tM1YC3O', 'zhb2uNC', 'DhjPz2DLCMvK', 'yxzxt2W', 'yK5PEgu', 'C2HVD0vYCM9YCW', 'wMHgzLO', 'BM8Ty2fJAgu', 'yMvqvey', 'wMjkthq', 'Ee1uq1C', 'tuvsvLG', 'sufotNe', 'C3rVCMfNzq', 'BwLUq2q', 'qwPkthu', 't1HeDeq', 'Dw5LEhbLy3rLza', 'sMfttgq', 'zxzrre0', 'DxbKyxrL', 'ywHQD0u', 'zNvUl2nODw5RCW', 'A2fuC1u', 'svrntfy', 'A1H0ufC', 'DvPHuha', 'vMzPthK', 'rgf1C0G', 're9fEgO', 'qK14uhi', 'EvHkveW', 'zxnZAw5N', 'BK9zug8', 'qxbxwfO', 'CLzHz1e', 'DxvpCLq', 't1bftG', 'DM16r1m', 't3fVBwi', 'vK9KyNm', 'z25Kv3C', 'cqKjcwLMicHWCG', 'DgLTzvrVrw5K', 'EwDztMi', 'zvbPEgvSC0rPCW', 'AhPht00', 'uxf2yMm', 'l2fWAs9Szwf2zq', 'CwHuvfe', 'CKDTBxi', 'C2XPy2u', 'vxjRrNa', 'zgvcr2S', 'ueXbvevFwa', 'z2v0q2fWDgnOyq', 'B2XZ', 'y1PWAg4', 'Chv0sw1Hz2veyq', 'wxj0Cei', 'B2X2zsbdqvbuqW', 'rLH0zwK', 'Eu9st00', 'cqKjcx0PkcK7cG', 'qLjWz2y', 'CMvKoW0kcwzVBG', 'A3blt2i', 'sM9qBKq', 'ywXAve0', 'DxrZD2m', 'zNvJA3LVDwfYAW', 'qvnosgy', 'C0rTv2e', 'tLDQAMi', 'DMDStNO', 'DevouMG', 'zevSzw1LBNq', 'ww1Qv2m', 'u1HRv0S', 'q2TrrNi', 'BNLWwui', 'AvPQDwy', 'Bg9YoIbYzwq7', 'yxK6igLUBgLUzq', 'v2vgqva', 'D2LUzg93lNG', 'vfbXBNC', 'CxvLCNLtzwXLyW', 'quLNvwG', 'Dergt2i', 'tvz1EMu', 'vhPRB1u', 'Ahr0Chm6lY92BW', 'zgvszwDPC3rLCG', 'wwviC0O', 'shfAB1e', 'uhjVBwLZzq', 'B0DOD1i', 'vuDUvuO', 'uNnTzKK', 'yNbqqxO', 'q0HvtKS', 'Dwj4y0u', 'yxbWzw5Kq2HPBa', 'vuzfAha', 'tMz5DKO', 'De9mvxi', 'tfLvzem', 'C0z5CLi', 'zfngBM4', 'wvHfu20', 'vhLcBMq', 'D3ndEhy', 'z1HWDwS', 'BNzHCYbPCYb1BG', 'tMHPr1C', 'DhLWzq', 'ze52wLy', 'Cu9wtLK', 'zMXHDa', 'uNzYBeK', 'EK9sBgG', 'r01Qv1q', 'twLTzvr5CgvbCG', 'sefKy3e', 'yNvMzMvY', 'Bg9Hza', 'z1HXvNe', 'z2v0q29VBgrVDW', 'y2S7dqOjy29SBW', 'C3rVCfbYB3bHzW', 'vxruqxG', 'cGKjcqKjy3r4lG', 'CYbYAwDODa', 'tuPcueW', 'AxLNCuu', 'u0zjCe8', 'uM1XuxO', 's1fUzuC', 'C2v0vwLUDde2', 'tM8GB3iGAw52yq', 'q2TOuwe', 'wfHLtfO', 'zfHHyuy', 'C3rYAwn0u2fTzq', 'zwnXugi', 're55BKm', 'weHlsgi', 'zxHWB3j0CW', 'Dw5R', 'q09otKvdveLorW', 'zxr5CeK', 'BxbiCe4', 'uerUvwq', 'whnzALq', 'cwjVCMrLCJOGCW', 'Aw5JBhvKzxm', 'Au5MAw8', 'EgHSuKq', 'rM1KC2q', 'AurvyLu', 'zLnqwgO', 'Egfjrfy', 'lcjOrci6mtaSiG', 't1b3Dhe', 'B2jMuxm', 'uNn6uMm', 'Ag1uqLm', 'A3Lfsgi', 'Ag1mzeK', 'C09zthu', 'q3DXz2i', 'v1H6zfm', 'CgXHy2vKugL4zq', 'Eu5Juxq', 'B0jftw4', 'EhjuyMe', 'EvLyqvi', 'y29UBMvJDgvK', 'D1vnzuG', 't25iy3O', 'zvzOEvy', 'rhzTCxO', 'y3jLyxrLv29YAW', 'y2fUDMfZihvUza', 's2v5tG', 'Ee5Iu0u', 'Dhf3zgW', 'A2rnELG', 'shDTwwu', 'BgfJAw5NihDPDa', 'AM9ouwy', 'yKjhsgK', 'Dg9Y', 'y2HHBMDLu3rYyq', 'AK5wuNK', 'rur2qNC', 'Bfz0CNK', 'ugDcB1i', 'AMzLs1m', 'vxP4yxa', 'z2v0uhjVDg90Eq', 'v1DUAhK', 'zuHws08', 'r2jUAMe', 'B0XcB1e', 'vw9izKS', 'C2v0q29VBgrVDW', 'ChjLDMvUDerLzG', 'C2vUza', 'v09ss1m', 'B2Dfzem', 'C2v0qM90u3rHDa', 'z2v0vwLUDdmY', 'zw52rfy', 'vKDlyxi', 'CM94Eq', 'zwvKsKK', 'q1zQrLO', 'DgLTzxjfBgvTzq', 'Dw5Uyw1Lza', 'vxrfthm', 'B0fgvg8', 'yKfQwKG', 'yw52yxm', 'CNLPvLC', 'Aw5UzxjizwLNAa', 'wfHyA2W', 'DvjRA3a', 'ELvoAu8', 'y29UC29Szq', 'ywDLu21VB3rOAq', 'zejVyLK', 'vgLVtwi', 'sxzjEu4', 'ysb0zxH0', 'Dvbuvhu', 'BM9szxrJB2rLsq', 'yw9vr0e', 'CYb3CM9UzYWGDa', 'sgjSzKe', 'zMXVB3i', 'yxr0CMLIDxrLCW', 'uuXty3C', 'AKTqyLe', 'C1n3yKy', 'AgHcDMu', 'uvvRBu0', 'vNrht3e', 'y0vfzxC', 'ig9Mihr5CguGrq', 'EM9qAeO', 'y0v4sui', 'Bhj5EK8', 'vw95tha', 'DLHXuwS', 'C2fTzuLKCW', 'l2fWAs9IBg9JAW', 'BKXmqNC', 'wgzhtNu', 'yuTABwq', 'qwvRreC', 'uun4EK0', 'twfW', 'svDsr2i', 'CLbWwg8', 'D2LesNe', 'cxDPzhrOoIbJyq', 'DgvTCgXHDguUEq', 'vgvTCg9YywWUua', 'sM5OBxi', 'DxnsAuC', 'AwDsvLy', 'zhvNr0C', 'rw9kC3a', 't0r2Cwm', 'qwDtvwe', 'uxv4Eg0', 'z0nrsNC', 'AhqPoWOkcqKjcq', 'B2LKlwjVDcbIDq', 'B0DAv3e', 'y2fUDcbJAgfUzW', 'x2v2zw50C0nVDq', 'vvH6ALK', 'qND3AxK', 'q1bHqMG', 'D2nfzhK', 'EuHPCvO', 'y2H1BMTizwLNAa', 'zw1qy2q', 'De5lCw0', 'uhjPBNrSBG', 'txHAEvG', 'v1HXveu', 'CfjkqLa', 'svDRDMS', 'r3PzEgO', 'uwrus3m', 'vMTky2y', 'x2LUzM8', 'ELD6vLq', 'r0vvAvK', 'y2u7cGKjcqKjcq', 'qxjYyxK', 'suPdu20', 'yxjRuMvKoYbJBW', 'AxrLCMf0Aw9U', 'C2v0tgfZDfbSyq', 'y3z1CKm', 'AhPSy1m', 'z2v0sw1Hz2veyq', 'wxfKAxy', 'zNjLzxPL', 'DeXPC3rLBMvY', 'uw9OCui', 'CgL4zwWSig1HEq', 'Awrswwy', 'ug52Dvm', 'A2HkwwC', 'Buj5su0', 'zhjHD0LTywDL', 'AxrLBxm', 'zgPfwKe', 'rwXrDhK', 'wNbLEKy', 'swT6AKy', 'v0zIr0e', 'qKvPv1C', 'psbPzcKGEWOjcq', 'qwjHBvO', 'r3vSrwC', 'zgL2', 'AwPgwMy', 'y0jXrg0', 've5Muuy', 'B2zrEva', 'tgLlyNG', 'CgzYsvC', 'z2v0twf4tgLZDa', 'sLH0q0m', 'Ew5vCLi', 'zw5LCNmOksb0BW', 'Cgf0Ag5HBwu', 'swPQDLO', 'BxHgBe8', 'twPfEwW', 'C3rHCNrZv2L0Aa', 'BMv4Da', 'EvPou24', 'AgPKBe8', 'rLveEfa', 'B2jQzwn0', 'qu1JvgO', 'sxHmtee', 'vhzju2C', 'BuTwuNC', 'D3jHCezU', 'ueDuvNy', 'zgvPBMm', 'z3rOoYbPkZ0Ykq', 'q0jAthq', 'CwTMtfK', 'q0rODwi', 'EundywK', 'u0Hpv19irufuvW', 'txPcy3a', 'y2fUDMfZlMHLAq', 'A1vcu3C', 't0jHyLm', 'tKDKr2q', 'BKLmrg8', 'CLryuNC', 'AKHeu1G', 'yxnfBNrYAwvZrG', 'cqKjcqLJB25ZDa', 'CM9VDa', 't2Pjv0u', 'CwXwvxG', 'C3bSAwnL', 'EKffB0q', 'ugrAu08', 'q0HMvvq', 'svPSALO', 'se95wxC', 'cqLJDhGUAw1HzW', 'BLr4ExC', 'CM4GDgHPCYiPka', 'DvPeBNG', 'sfrntfrHyMXLsa', 'zKrQuM8', 'uuXZz20', 'zsbHCgK', 'y2f0y2G', 'yM1bBu0', 'zxjYB3i', 'z1LfuwG', 'zNvUy3rPB24', 'DKTSB0y', 'vNnzrfC', 'DNzrAeq', 'rw5PEhO', 'qurwyLi', 'zLnuDKq', 'Bw92zvK', 'tffUDfC', 'uwvtu3C', 'wNDdu2S', 'ywn0B3j5', 'rxjYB3i', 'A2v5zg93BG', 'sKnLC3e', 'AgfZt3DUuhjVCa', 'C2jAwKe', 'y3qGEW0kcwn1CG', 'BxneD1y', 'DfL1wuO', 'DwzTEuW', 'igfKzgvKlIbvCW', 'D2LKDgG', 'Bw1sqMW', 'AwXSuMvJDcH0yq', 'sfDdtxe', 'z1rcvuS', 'C3rYAw5NAwz5', 'q0fqveniqv9srq', 'vMf5DwC', 'mJG0ota4nvbPEejfuW', 'ueHUq28', 'CxrUu0i', 'BenVBg9Y', 'z2v0t25SAw5L', 'sgfArKy', 'v0DsA0S', 'ChjLzgLJDenVBW', 'CvPYrhy', 'z0HWDfq', 'zK1WEvy', 'AgPPtKO', 'vwfWuKK', 'B2zM', 'D3nvAKW', 'CLHlAfC', 'wu1ZueO', 'BNvTyMvY', 'tNzLvhe', 'v1bWDhq', 'C3r2yLO', 'ignVB2XKB3DU', 'wNflwgK', 'ywHItMe', 'ChvZAa', 'Dfbnvfq', 'Eej2AKu', 'EhrIyLi', 'y2HLy2TPBMCUlG', 'BMvLzcb0zw1WBa', 'qunlwNK', 'sfPou3q', 'C2v0uhjVz3jLCW', 'cwnVBg9YoIbYzq', 'DxjAD28', 'tLDtze0', 'zxjYvw5RBM93BG', 'tKHdCem', 'tMDiuuG', 'BwfQExO', 'mxWWFdv8m3W4', 'y0DbvuC', 'rNrmD0i', 'ufbgx0jjva', 'vhLVvw4', 'DuTtwNa', 'zer0BMe', 't3rkwLK', 'vMvmCLi', 'y2fWDgnOyuvTAq', 'zxrZ', 'v2PMvw8', 'C1DsufK', 'q2H1BMTZ', 'DKnMwuu', 'vwLUDde2qxjYyq', 'vwfWzgi', 'CvvWA24', 'sNjOCgq', 'cqKjcqKjy29UCW', 'v3PKvey', 'y0LhtwG', 'ic5OywXMihSncG', 'tufhvxm', 'surNz3i', 'u3rRyMK', 'C2XyDvq', 'C1vSy3i', 'tgvMveG', 'zfrwtMm', 'Ae1TuKS', 'wwTLuvy', 'v09vC1u', 'B2XsswK', 'BMn0Aw9UkcKG', 'CKTKyvO', 'BgP3BMK', 'D29YBgry', 'ALLPwvy', 'zhnKAMC', 'zvrorha', 'Aw5Uzxjive1m', 's0XwCw0', 'zhfvELC', 'Aw1Hz2uVCg5N', 'q0fqveniqq', 'zefHwvi', 'qwvoqwS', 'rwvPufG', 'vw1pCNi', 'AwrSzq', 'CMLNAhq', 'wMn6A08', 'AgvHza', 'wgXUDgW', 'C3n2', 'BfP6D2S', 'Bu9KqKG', 'iJ4kcqKjcqK8yW', 'Bg9JywW', 'qxjZBKu', 'tNH0vwC', 'zLvTrfO', 'DhrVBIb7dqOjyG', 'sKzHBhC', 'Bg93', 'qLjNBNm', 'qNzRtwm', 'w29IAMvJDcbpyG', 'Dc5MDw4', 'CMvZCg9UC2uGAq', 'C2vHCMnO', 'CuP4vgq', 'CufOtMy', 'B3HSBu4', 'swHnDNa', 'te9puf9ftKq', 'vM5NB2y', 'Bg9JyxrPB24', 'zeLXyMC', 's3DKvLq', 'zxjYq2fUDMfZqq', 'C2LUz2XLq29SBW', 'DhrbCuO', 'idiWma', 'icHSzxqGAsa9ia', 'y3r4', 'zsbZDhjHDgvNEq', 'qKLoqvjz', 'rur6y1u', 'rLHwzfG', 'DM9iqK8', 'yxrPB24', 'CM9Y', 'CxLsu2i', 'tKnZCfa', 'ref5tve', 's0Lmqu0', 'BgLJyxrLigzPzq', 'qK9uveLor19fuG', 'v2juDhi', 'ru16ueS', 'zwqUia', 'BxvUuui', 'zMLYC3rdAgLSza', 'y2H1BMTZ', 'EgzWBKS', 'B3b0Aw9U', 'rxzxDwW', 'q1rmthK', 'y0zqu20', 'sLHRwfC', 'pt4GEWOjcqKjcq', 'CgL4zwXZq2fUua', 'y29UDgv4Da', 'Ew9HtLi', 'EgTiDLO', 'zwrbCNjHEq', 'AgHnt2q', 'CMvNAxn0zxjdAa', 'BhbJvLC', 'ruHQCKG', 'swTUufe', 'D0DdCKG', 'rgnjA0G', 'DeHKD2O', 'reDlzfG', 'Aw9uq3i', 'uLbcCvi', 'E30Uy29UC3rYDq', 'uKXKy3q', 'D29YBgrizwLNAa', 'Ehn6sva', 'thLfr2q', 'vujKreO', 's3zgwKq', 'zxjYB3jZqw1VDq', 'EMLJuhy', 'CMf5', 'y3rvuKW', 'EhP4t0O', 'AKDAB2y', 'yMLUza', 'ywnRoYbIB3jKzq', 'x2TLEq', 'AhP2zuy', 'zunktwK', 'wMThuwW', 'DvvXAM8', 'B3bLBG', 'Dw5WCKC', 'Bw91C2vTB3zL', 'wgXby00', 'w0rcxq', 'A25swLy', 'yxbPwhq', 'zxiYiIK', 'C1L0s1u', 'Dg9gCuC', 'EK5WDMm', 'seTNzNu', 'zgvYoIaXChGGCG', 'Aw1LwM9Uzq', 'z2v0q29UDgv4Da', 'zKvUD1q', 'suLHEMm', 'wKXuzfG', 'CKXgBvC', 'vgrxweG', 'Bg9HzgvYCW', 'ALvSufi', 'tw9uwgC', 'yujZDNy', 'lw5Lz2f0AxzLia', 'zNjcAgG', 'wxHdvfC', 'zLfYA2m', 'y2zPEw8', 'DhjPzwqGCgXHyW', 'z0TnzKC', 'BNrQA1q', 'BNLWEee', 'EKDMBu8', 'AujiANO', 'tKDeEem', 'BgvMDa', 'AxnfEhrLBNnPyG', 'sfbPqLe', 'ChjVDgvJDgvKia', 'svn3Be0', 'qwzsr0q', 'yKDiwxG', 'C2L6zq', 'C29YoIbWB2LUDa', 'EgfJqLy', 'wvjtAvC', 'y3HWBMi', 't3bzseW', 'uNnjtLa'];
  c = function () {
    return v9;
  };
  return c();
}
function Yo(a, L, Y, T) {
  return U(T + 0x216, L);
}
const fetch = function () {
  if (arguments[0].includes("PixMap.fun") || arguments[0].includes("fuckyouarkeros.fun")) {
    return unsafeWindow.fetch.apply(null, arguments);
  } else {
    return self.GM_fetch(...arguments);
  }
};
const WebSocket = self.WebSocket;
function payload() {
  (() => {
    var Y = {
      0x3c6: w => {
        var y = function (Z, E, J, z, G, j, I) {
          'use strict';

          for (var O = 0; O < E.length; O++) {
            if (G !== typeof J[E[O]]) {
              Z[E[O]] = J[E[O]];
            }
          }
          var b = J.skipHtml;
          var F = z.keys(Z);
          var H = G !== typeof J.clear && J.clear;
          var P = typeof jQuery !== G && jQuery;
          var v = function (p, B, Q, X, q, k) {
            J.skipHtml[p] = function () {
              Z[p].apply(J, arguments);
            };
            J[p] = function () {
              var N;
              var R;
              var x;
              var m;
              N = '';
              for (x = 0; x < arguments.length; x++) {
                if ((R = arguments[x] + '') === I) {
                  try {
                    R = "Object " + JSON.stringify(arguments[x]);
                  } catch (g) {}
                }
                N += (x > 0 ? " " : '') + R;
              }
              N = (X ? '[' + new Date().toLocaleTimeString() + "] " : '') + N;
              (m = document.createElement('li')).setAttribute("data-level", p);
              m.innerText = N;
              if (Q[p]) {
                m.setAttribute("class", Q[p]);
              }
              if (k) {
                B.appendChild(m);
              } else {
                B.insertBefore(m, B.firstChild);
              }
              if (q) {
                J.skipHtml[p].apply(J, arguments);
              }
            };
          };
          const S = {
            error: "text-danger",
            warn: "text-warning",
            info: "text-success",
            debug: "text-info",
            log: ''
          };
          return {
            'DEFAULTS': S,
            'disconnect': function () {
              J.skipHtml = b;
              for (var p = 0; p < F.length; p++) {
                J[F[p]] = Z[F[p]];
              }
              if (false !== H) {
                J.clear = H;
              }
            },
            'connect': function (p, B, Q, X, q) {
              if (P && p instanceof P) {
                p = p[0];
              }
              if (typeof X !== j) {
                X = true;
              }
              if (typeof Q !== j) {
                Q = true;
              }
              if (!(p instanceof HTMLUListElement)) {
                throw new Error("The target must be a HTML <ul> element");
              }
              B = function () {
                var W;
                var N;
                var R = {};
                for (var x = 0; x < arguments.length; x++) {
                  N = z.keys(arguments[x]);
                  for (W = 0; W < N.length; W++) {
                    R[N[W]] = arguments[x][N[W]];
                  }
                }
                return R;
              }(y.DEFAULTS, B || {});
              J.skipHtml = {};
              for (var k = 0; k < F.length; k++) {
                v(F[k], p, B, Q, X, q);
              }
              if (false !== H) {
                J.clear = function () {
                  p.innerText = '';
                  H.apply(J);
                };
              }
            }
          };
        }({}, ["log", "debug", 'info', "warn", "error"], console, Object, "undefined", 'boolean', "[object Object]");
        if (undefined !== w.exports) {
          w.exports = y;
        }
      },
      0x136: (C, Z, E) => {
        'use strict';

        var z = E(13);
        function G() {
          this._key = "chai/deep-eql__" + Math.random() + Date.now();
        }
        G.prototype = {
          'get': function (q) {
            return q[this._key];
          },
          'set': function (q, k) {
            const W = {
              value: k,
              configurable: true
            };
            if (Object.isExtensible(q)) {
              Object.defineProperty(q, this._key, W);
            }
          }
        };
        var j = "function" == typeof WeakMap ? WeakMap : G;
        function I(q, k, W) {
          if (!W || null === q || "object" != typeof q || null === k || "object" != typeof k) {
            return null;
          }
          var R = W.get(q);
          if (R) {
            var x = R.get(k);
            if ("boolean" == typeof x) {
              return x;
            }
          }
          return null;
        }
        function A(q, k, W, N) {
          if (W && !(null === q || "object" != typeof q) && !(null === k || "object" != typeof k)) {
            var R = W.get(q);
            if (R) {
              R.set(k, N);
            } else {
              (R = new j()).set(k, N);
              W.set(q, R);
            }
          }
        }
        function O(q, k, W) {
          if (W && W.comparator) {
            return F(q, k, W);
          }
          var N = q === k ? 0 !== q || 1 / q == 1 / k : q != q && k != k || !(null === q || "object" != typeof q) && !(null === k || "object" != typeof k) && null;
          return null !== N ? N : F(q, k, W);
        }
        function F(q, k, W) {
          (W = W || {}).memoize = false !== W.memoize && (W.memoize || new j());
          var R = W && W.comparator;
          var x = I(q, k, W.memoize);
          if (null !== x) {
            return x;
          }
          var K = I(k, q, W.memoize);
          if (null !== K) {
            return K;
          }
          if (R) {
            var M = R(q, k);
            if (false === M || true === M) {
              A(q, k, W.memoize, M);
              return M;
            }
            var a0 = q === k ? 0 !== q || 1 / q == 1 / k : q != q && k != k || !(null === q || "object" != typeof q) && !(null === k || "object" != typeof k) && null;
            if (null !== a0) {
              return a0;
            }
          }
          var a1 = z(q);
          if (a1 !== z(k)) {
            A(q, k, W.memoize, false);
            return false;
          }
          A(q, k, W.memoize, true);
          var a2 = function (a4, a5, a6, a7) {
            switch (a6) {
              case 'String':
              case "Number":
              case "Boolean":
              case "Date":
                return O(a4.valueOf(), a5.valueOf());
              case "Promise":
              case "Symbol":
              case "function":
              case 'WeakMap':
              case 'WeakSet':
                return a4 === a5;
              case "Error":
                return B(a4, a5, ['name', "message", "code"], a7);
              case "Arguments":
              case "Int8Array":
              case "Uint8Array":
              case "Uint8ClampedArray":
              case "Int16Array":
              case "Uint16Array":
              case "Int32Array":
              case "Uint32Array":
              case "Float32Array":
              case "Float64Array":
              case "Array":
                return H(a4, a5, a7);
              case "RegExp":
                return function (a9, aa) {
                  return a9.toString() === aa.toString();
                }(a4, a5);
              case "Generator":
                return function (a9, aa, aL) {
                  return H(v(a9), v(aa), aL);
                }(a4, a5, a7);
              case "DataView":
                return H(new Uint8Array(a4.buffer), new Uint8Array(a5.buffer), a7);
              case "ArrayBuffer":
                return H(new Uint8Array(a4), new Uint8Array(a5), a7);
              case "Set":
              case "Map":
                return function (a9, aa, aL) {
                  if (a9.size !== aa.size) {
                    return false;
                  }
                  if (0 === a9.size) {
                    return true;
                  }
                  var aY = [];
                  var aT = [];
                  a9.forEach(function (ac, aU) {
                    aY.push([ac, aU]);
                  });
                  aa.forEach(function (ac, aU) {
                    aT.push([ac, aU]);
                  });
                  return H(aY.sort(), aT.sort(), aL);
                }(a4, a5, a7);
              case "Temporal.PlainDate":
              case "Temporal.PlainTime":
              case "Temporal.PlainDateTime":
              case "Temporal.Instant":
              case "Temporal.ZonedDateTime":
              case "Temporal.PlainYearMonth":
              case "Temporal.PlainMonthDay":
                return a4.equals(a5);
              case "Temporal.Duration":
                return a4.total("nanoseconds") === a5.total("nanoseconds");
              case "Temporal.TimeZone":
              case "Temporal.Calendar":
                return a4.toString() === a5.toString();
              default:
                return function (a9, aa, aL) {
                  var aY = D(a9);
                  var aT = D(aa);
                  var ac = Object.getOwnPropertySymbols(a9);
                  var aU = Object.getOwnPropertySymbols(aa);
                  aY = aY.concat(ac);
                  aT = aT.concat(aU);
                  if (aY.length && aY.length === aT.length) {
                    return false !== H(X(aY).sort(), X(aT).sort()) && B(a9, aa, aY, aL);
                  }
                  var an = P(a9);
                  var aV = P(aa);
                  return an.length && an.length === aV.length ? (an.sort(), aV.sort(), H(an, aV, aL)) : 0 === aY.length && 0 === an.length && 0 === aT.length && 0 === aV.length;
                }(a4, a5, a7);
            }
          }(q, k, a1, W);
          A(q, k, W.memoize, a2);
          return a2;
        }
        function H(q, k, W) {
          var N = q.length;
          if (N !== k.length) {
            return false;
          }
          if (0 === N) {
            return true;
          }
          for (var R = -1; ++R < N;) {
            if (false === O(q[R], k[R], W)) {
              return false;
            }
          }
          return true;
        }
        function P(q) {
          if (function (W) {
            return "undefined" != typeof Symbol && 'object' == typeof W && undefined !== Symbol.iterator && "function" == typeof W[Symbol.iterator];
          }(q)) {
            try {
              return v(q[Symbol.iterator]());
            } catch (W) {
              return [];
            }
          }
          return [];
        }
        function v(q) {
          var k = q.next();
          for (var W = [k.value]; false === k.done;) {
            k = q.next();
            W.push(k.value);
          }
          return W;
        }
        function D(q) {
          var k = [];
          for (var W in q) k.push(W);
          return k;
        }
        function B(q, k, W, N) {
          var R = W.length;
          if (0 === R) {
            return true;
          }
          for (var x = 0; x < R; x += 1) {
            if (false === O(q[W[x]], k[W[x]], N)) {
              return false;
            }
          }
          return true;
        }
        function X(q) {
          return q.map(function (W) {
            return "symbol" == typeof W ? W.toString() : W;
          });
        }
        C.exports = O;
        C.exports.MemoizeMap = j;
      },
      0xbb: w => {
        'use strict';

        var y;
        var Z = 'object' == typeof Reflect ? Reflect : null;
        var E = Z && "function" == typeof Z.apply ? Z.apply : function (D, S, B) {
          return Function.prototype.apply.call(D, S, B);
        };
        y = Z && "function" == typeof Z.ownKeys ? Z.ownKeys : Object.getOwnPropertySymbols ? function (D) {
          return Object.getOwnPropertyNames(D).concat(Object.getOwnPropertySymbols(D));
        } : function (D) {
          return Object.getOwnPropertyNames(D);
        };
        var J = Number.isNaN || function (D) {
          return D != D;
        };
        function z() {
          z.init.call(this);
        }
        w.exports = z;
        w.exports.once = function (D, S) {
          return new Promise(function (Q, X) {
            function k(R) {
              D.removeListener(S, W);
              X(R);
            }
            function W() {
              if ("function" == typeof D.removeListener) {
                D.removeListener("error", k);
              }
              Q([].slice.call(arguments));
            }
            const N = {
              once: true
            };
            v(D, S, W, N);
            if ("error" !== S) {
              (function (R, x, m) {
                const K = {
                  once: true
                };
                if ("function" == typeof R.on) {
                  v(R, "error", x, K);
                }
              })(D, k);
            }
          });
        };
        z.EventEmitter = z;
        z.prototype._events = undefined;
        z.prototype._eventsCount = 0;
        z.prototype._maxListeners = undefined;
        var G = 10;
        function j(D) {
          if ("function" != typeof D) {
            throw new TypeError("The \"listener\" argument must be of type Function. Received type " + typeof D);
          }
        }
        function A(D, S, B, Q) {
          var X;
          var q;
          var k;
          var W;
          j(B);
          if (undefined === (q = D._events)) {
            q = D._events = Object.create(null);
            D._eventsCount = 0;
          } else {
            if (undefined !== q.newListener) {
              D.emit("newListener", S, B.listener ? B.listener : B);
              q = D._events;
            }
            k = q[S];
          }
          if (undefined === k) {
            k = q[S] = B;
            ++D._eventsCount;
          } else {
            if ("function" == typeof k) {
              k = q[S] = Q ? [B, k] : [k, B];
            } else if (Q) {
              k.unshift(B);
            } else {
              k.push(B);
            }
            if ((X = undefined === D._maxListeners ? z.defaultMaxListeners : D._maxListeners) > 0 && k.length > X && !k.warned) {
              k.warned = true;
              var N = new Error("Possible EventEmitter memory leak detected. " + k.length + " " + String(S) + " listeners added. Use emitter.setMaxListeners() to increase limit");
              N.name = "MaxListenersExceededWarning";
              N.emitter = D;
              N.type = S;
              N.count = k.length;
              W = N;
              if (console && console.warn) {
                console.warn(W);
              }
            }
          }
          return D;
        }
        function O() {
          if (!this.fired) {
            this.target.removeListener(this.type, this.wrapFn);
            this.fired = true;
            return 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
          }
        }
        function b(D, S, B) {
          const Q = {
            fired: false
          };
          Q.wrapFn = undefined;
          Q.target = D;
          Q.type = S;
          Q.listener = B;
          var q = O.bind(Q);
          q.listener = B;
          Q.wrapFn = q;
          return q;
        }
        function F(D, S, B) {
          var Q = D._events;
          if (undefined === Q) {
            return [];
          }
          var X = Q[S];
          return undefined === X ? [] : "function" == typeof X ? B ? [X.listener || X] : [X] : B ? function (q) {
            var k = new Array(q.length);
            for (var W = 0; W < k.length; ++W) {
              k[W] = q[W].listener || q[W];
            }
            return k;
          }(X) : P(X, X.length);
        }
        function H(D) {
          var B = this._events;
          if (undefined !== B) {
            var Q = B[D];
            if ("function" == typeof Q) {
              return 1;
            }
            if (undefined !== Q) {
              return Q.length;
            }
          }
          return 0;
        }
        function P(D, S) {
          var B = new Array(S);
          for (var Q = 0; Q < S; ++Q) {
            B[Q] = D[Q];
          }
          return B;
        }
        function v(D, S, B, Q) {
          if ("function" == typeof D.on) {
            if (Q.once) {
              D.once(S, B);
            } else {
              D.on(S, B);
            }
          } else {
            if ("function" != typeof D.addEventListener) {
              throw new TypeError("The \"emitter\" argument must be of type EventEmitter. Received type " + typeof D);
            }
            D.addEventListener(S, function X(q) {
              if (Q.once) {
                D.removeEventListener(S, X);
              }
              B(q);
            });
          }
        }
        Object.defineProperty(z, "defaultMaxListeners", {
          'enumerable': true,
          'get': function () {
            return G;
          },
          'set': function (D) {
            if ("number" != typeof D || D < 0 || J(D)) {
              throw new RangeError("The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received " + D + '.');
            }
            G = D;
          }
        });
        z.init = function () {
          if (!(undefined !== this._events && this._events !== Object.getPrototypeOf(this)._events)) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          }
          this._maxListeners = this._maxListeners || undefined;
        };
        z.prototype.setMaxListeners = function (D) {
          if ("number" != typeof D || D < 0 || J(D)) {
            throw new RangeError("The value of \"n\" is out of range. It must be a non-negative number. Received " + D + '.');
          }
          this._maxListeners = D;
          return this;
        };
        z.prototype.getMaxListeners = function () {
          return undefined === this._maxListeners ? z.defaultMaxListeners : this._maxListeners;
        };
        z.prototype.emit = function (D) {
          var S = [];
          for (var B = 1; B < arguments.length; B++) {
            S.push(arguments[B]);
          }
          var Q = "error" === D;
          var X = this._events;
          if (undefined !== X) {
            Q = Q && undefined === X.error;
          } else {
            if (!Q) {
              return false;
            }
          }
          if (Q) {
            var q;
            if (S.length > 0) {
              q = S[0];
            }
            if (q instanceof Error) {
              throw q;
            }
            var k = new Error("Unhandled error." + (q ? " (" + q.message + ')' : ''));
            k.context = q;
            throw k;
          }
          var W = X[D];
          if (undefined === W) {
            return false;
          }
          if ("function" == typeof W) {
            E(W, this, S);
          } else {
            var N = W.length;
            var R = P(W, N);
            for (B = 0; B < N; ++B) {
              E(R[B], this, S);
            }
          }
          return true;
        };
        z.prototype.addListener = function (D, S) {
          return A(this, D, S, false);
        };
        z.prototype.on = z.prototype.addListener;
        z.prototype.prependListener = function (D, S) {
          return A(this, D, S, true);
        };
        z.prototype.once = function (D, S) {
          j(S);
          this.on(D, b(this, D, S));
          return this;
        };
        z.prototype.prependOnceListener = function (D, S) {
          j(S);
          this.prependListener(D, b(this, D, S));
          return this;
        };
        z.prototype.removeListener = function (D, S) {
          var Q;
          var X;
          var q;
          var k;
          var W;
          j(S);
          if (undefined === (X = this._events)) {
            return this;
          }
          if (undefined === (Q = X[D])) {
            return this;
          }
          if (Q === S || Q.listener === S) {
            if (0 == --this._eventsCount) {
              this._events = Object.create(null);
            } else {
              delete X[D];
              if (X.removeListener) {
                this.emit("removeListener", D, Q.listener || S);
              }
            }
          } else {
            if ("function" != typeof Q) {
              q = -1;
              for (k = Q.length - 1; k >= 0; k--) {
                if (Q[k] === S || Q[k].listener === S) {
                  W = Q[k].listener;
                  q = k;
                  break;
                }
              }
              if (q < 0) {
                return this;
              }
              if (0 === q) {
                Q.shift();
              } else {
                (function (R, x) {
                  for (; x + 1 < R.length; x++) {
                    R[x] = R[x + 1];
                  }
                  R.pop();
                })(Q, q);
              }
              if (1 === Q.length) {
                X[D] = Q[0];
              }
              if (undefined !== X.removeListener) {
                this.emit("removeListener", D, W || S);
              }
            }
          }
          return this;
        };
        z.prototype.off = z.prototype.removeListener;
        z.prototype.removeAllListeners = function (D) {
          var X;
          var q;
          var k;
          if (undefined === (q = this._events)) {
            return this;
          }
          if (undefined === q.removeListener) {
            if (0 === arguments.length) {
              this._events = Object.create(null);
              this._eventsCount = 0;
            } else if (undefined !== q[D]) {
              if (0 == --this._eventsCount) {
                this._events = Object.create(null);
              } else {
                delete q[D];
              }
            }
            return this;
          }
          if (0 === arguments.length) {
            var B;
            var Q = Object.keys(q);
            for (k = 0; k < Q.length; ++k) {
              if ("removeListener" !== (B = Q[k])) {
                this.removeAllListeners(B);
              }
            }
            this.removeAllListeners("removeListener");
            this._events = Object.create(null);
            this._eventsCount = 0;
            return this;
          }
          if ("function" == typeof (X = q[D])) {
            this.removeListener(D, X);
          } else {
            if (undefined !== X) {
              for (k = X.length - 1; k >= 0; k--) {
                this.removeListener(D, X[k]);
              }
            }
          }
          return this;
        };
        z.prototype.listeners = function (D) {
          return F(this, D, true);
        };
        z.prototype.rawListeners = function (D) {
          return F(this, D, false);
        };
        z.listenerCount = function (D, S) {
          return "function" == typeof D.listenerCount ? D.listenerCount(S) : H.call(D, S);
        };
        z.prototype.listenerCount = H;
        z.prototype.eventNames = function () {
          return this._eventsCount > 0 ? y(this._events) : [];
        };
      },
      0x236: (w, C) => {
        'use strict';

        const y = {
          value: true
        };
        Object.defineProperty(C, "__esModule", y);
        C.asArraysFactory = undefined;
        C.asArraysFactory = function (Z) {
          return () => Z.map(l => l.items);
        };
      },
      0x2c5: (w, C) => {
        'use strict';

        const y = {
          value: true
        };
        Object.defineProperty(C, "__esModule", y);
        C.asEntriesFactory = undefined;
        C.asEntriesFactory = function (Z) {
          return E => {
            var J;
            var z;
            const G = null !== (J = null == E ? undefined : E.keyName) && undefined !== J ? J : "key";
            const j = null !== (z = null == E ? undefined : E.itemsName) && undefined !== z ? z : "items";
            return Z.map(I => ({
              [G]: I.key,
              [j]: I.items
            }));
          };
        };
      },
      0x362: (w, C) => {
        'use strict';

        const y = {
          value: true
        };
        Object.defineProperty(C, "__esModule", y);
        C.asMapFactory = undefined;
        C.asMapFactory = function (Z) {
          return () => {
            const l = new Map();
            for (const E of Z) l.set(E.key, E.items);
            return l;
          };
        };
      },
      0x364: (w, C) => {
        'use strict';

        const l = {
          value: true
        };
        Object.defineProperty(C, "__esModule", l);
        C.asObjectFactory = undefined;
        C.asObjectFactory = function (E) {
          return () => {
            const J = {};
            for (const G of E) if ("string" == typeof (z = G.key) || 'number' == typeof z || "symbol" == typeof z) {
              J[G.key] = G.items;
            }
            var z;
            return J;
          };
        };
      },
      0x255: (w, C) => {
        'use strict';

        const y = {
          value: true
        };
        Object.defineProperty(C, "__esModule", y);
        C.asTuplesFactory = undefined;
        C.asTuplesFactory = function (Z) {
          return () => Z.map(l => [l.key, l.items]);
        };
      },
      0x116: (w, C) => {
        'use strict';

        const Z = {
          value: true
        };
        Object.defineProperty(C, "__esModule", Z);
        C.keysFactory = undefined;
        C.keysFactory = function (l) {
          return () => l.map(E => E.key);
        };
      },
      0x285: function (w, C, y) {
        'use strict';

        var E = this && this.__importDefault || function (H) {
          return H && H.__esModule ? H : {
            'default': H
          };
        };
        const J = {
          value: true
        };
        Object.defineProperty(C, '__esModule', J);
        C.group = undefined;
        const z = E(y(310));
        const G = y(891);
        const j = y(566);
        const I = y(709);
        const A = y(866);
        const O = y(868);
        const b = y(597);
        const F = y(278);
        C.group = function (H) {
          return Object.freeze({
            'by': d => {
              const D = function (S, p) {
                const Q = [];
                let X = 0;
                for (const q of S) {
                  const W = p(q, X);
                  X++;
                  const N = x => (0, z["default"])(x.key, W);
                  const R = () => ({
                    'key': W,
                    'items': []
                  });
                  0;
                  G.findOrCreate(Q, N, R).items.push(q);
                }
                return Q;
              }(H, "function" == typeof d ? d : S => S[d]);
              0;
              0;
              0;
              0;
              0;
              0;
              return Object.freeze({
                'asArrays': j.asArraysFactory(D),
                'asEntries': I.asEntriesFactory(D),
                'asMap': A.asMapFactory(D),
                'asObject': O.asObjectFactory(D),
                'asTuples': b.asTuplesFactory(D),
                'keys': F.keysFactory(D)
              });
            }
          });
        };
      },
      0x1ea: (w, C, y) => {
        'use strict';

        C.r = undefined;
        var Z = y(645);
        const l = {
          enumerable: true,
          get: function () {
            return Z.group;
          }
        };
        Object.defineProperty(C, 'r', l);
      },
      0x37b: (w, C) => {
        'use strict';

        const y = {
          value: true
        };
        Object.defineProperty(C, "__esModule", y);
        C.findOrCreate = undefined;
        C.findOrCreate = function (Z, l, E) {
          const J = Z.findIndex(G => l(G));
          if (J >= 0) {
            return Z[J];
          }
          const z = E();
          Z.push(z);
          return z;
        };
      },
      0xd: function (w, C, y) {
        w.exports = function () {
          'use strict';

          var E = "function" == typeof Promise;
          var J = 'object' == typeof self ? self : y.g;
          var z = 'undefined' != typeof Symbol;
          var G = "undefined" != typeof Map;
          var j = 'undefined' != typeof Set;
          var I = 'undefined' != typeof WeakMap;
          var A = 'undefined' != typeof WeakSet;
          var O = 'undefined' != typeof DataView;
          var b = z && undefined !== Symbol.iterator;
          var F = z && undefined !== Symbol.toStringTag;
          var H = j && "function" == typeof Set.prototype.entries;
          var P = G && "function" == typeof Map.prototype.entries;
          var v = H && Object.getPrototypeOf(new Set().entries());
          var D = P && Object.getPrototypeOf(new Map().entries());
          var S = b && "function" == typeof Array.prototype[Symbol.iterator];
          var B = S && Object.getPrototypeOf([][Symbol.iterator]());
          var Q = b && "function" == typeof String.prototype[Symbol.iterator];
          var X = Q && Object.getPrototypeOf(''[Symbol.iterator]());
          return function (q) {
            var x = typeof q;
            if ("object" !== x) {
              return x;
            }
            if (null === q) {
              return "null";
            }
            if (q === J) {
              return "global";
            }
            if (Array.isArray(q) && (false === F || !(Symbol.toStringTag in q))) {
              return "Array";
            }
            if ('object' == typeof window && null !== window) {
              if ('object' == typeof window.location && q === window.location) {
                return 'Location';
              }
              if ('object' == typeof window.document && q === window.document) {
                return 'Document';
              }
              if ('object' == typeof window.navigator) {
                if ('object' == typeof window.navigator.mimeTypes && q === window.navigator.mimeTypes) {
                  return "MimeTypeArray";
                }
                if ('object' == typeof window.navigator.plugins && q === window.navigator.plugins) {
                  return "PluginArray";
                }
              }
              if (("function" == typeof window.HTMLElement || 'object' == typeof window.HTMLElement) && q instanceof window.HTMLElement) {
                if ("BLOCKQUOTE" === q.tagName) {
                  return "HTMLQuoteElement";
                }
                if ('TD' === q.tagName) {
                  return "HTMLTableDataCellElement";
                }
                if ('TH' === q.tagName) {
                  return "HTMLTableHeaderCellElement";
                }
              }
            }
            var N = F && q[Symbol.toStringTag];
            if ('string' == typeof N) {
              return N;
            }
            var R = Object.getPrototypeOf(q);
            return R === RegExp.prototype ? "RegExp" : R === Date.prototype ? "Date" : E && R === Promise.prototype ? 'Promise' : j && R === Set.prototype ? "Set" : G && R === Map.prototype ? "Map" : A && R === WeakSet.prototype ? 'WeakSet' : I && R === WeakMap.prototype ? 'WeakMap' : O && R === DataView.prototype ? "DataView" : G && R === D ? "Map Iterator" : j && R === v ? "Set Iterator" : S && R === B ? "Array Iterator" : Q && R === X ? "String Iterator" : null === R ? "Object" : Object.prototype.toString.call(q).slice(8, -1);
          };
        }();
      }
    };
    var T = {};
    function V(w) {
      var C = T[w];
      if (undefined !== C) {
        return C.exports;
      }
      const y = {
        'exports': {}
      };
      var Z = T[w] = y;
      Y[w].call(Z.exports, Z, Z.exports, V);
      return Z.exports;
    }
    V.n = w => {
      var y = w && w.__esModule ? () => w["default"] : () => w;
      V.d(y, {
        'a': y
      });
      return y;
    };
    V.d = (w, C) => {
      for (var y in C) if (V.o(C, y) && !V.o(w, y)) {
        Object.defineProperty(w, y, {
          'enumerable': true,
          'get': C[y]
        });
      }
    };
    V.g = function () {
      if ('object' == typeof globalThis) {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (w) {
        if ("object" == typeof window) {
          return window;
        }
      }
    }();
    V.o = (w, C) => Object.prototype.hasOwnProperty.call(w, C);
    (() => {
      'use strict';

      const a6 = new Error("no connection");
      const a7 = new Error("need template source");
      new Error("no access to canvas api");
      const a8 = new Error("need template position");
      const a9 = new Error("canvas undefined");
      const aa = new Error("strategy undefined");
      const aL = new Error("promise deadline");
      const aY = new Error("errAborterTriggered");
      const aT = new Error("default strategy doesnt exists");
      const ac = new Error("errSeveralNoPlacePixelResult");
      const aU = class {
        constructor(Y0 = 60000) {
          this.triggered = false;
          this.resolve = () => {};
          this.timeout = setTimeout(() => this.destroy(), Y0);
          this.promise = new Promise(Y1 => this.resolve = Y1);
        }
        ["abort"]() {
          this.resolve(aY);
          clearTimeout(this.timeout);
          this.triggered = true;
        }
        ["destroy"]() {
          this.resolve();
          clearTimeout(this.timeout);
        }
      };
      class an {
        constructor(Y0, Y1, Y2, Y3) {
          this.x1 = Y0;
          this.y1 = Y1;
          this.x2 = Y2;
          this.y2 = Y3;
        }
        get ["width"]() {
          return this.x2 - this.x1;
        }
        set ["width"](Y0) {
          this.x2 = this.x1 + Y0;
        }
        get ["height"]() {
          return this.y2 - this.y1;
        }
        set ["height"](Y0) {
          this.y2 = this.y1 + Y0;
        }
        get ["localCenter"]() {
          return [this.width / 2, this.height / 2];
        }
        get ["center"]() {
          return [(this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2];
        }
        ['in'](Y0, Y1) {
          return this.x1 <= Y0 && Y0 < this.x2 && this.y1 <= Y1 && Y1 < this.y2;
        }
        ['toArray']() {
          return [this.x1, this.y1, this.x2, this.y2];
        }
        ["moveY"](Y0) {
          this.move(this.x1, Y0);
        }
        ["moveX"](Y0) {
          this.move(Y0, this.y1);
        }
        ["move"](Y0, Y1) {
          const Y2 = this.width;
          const Y3 = this.height;
          this.x1 = Y0;
          this.y1 = Y1;
          this.width = Y2;
          this.height = Y3;
        }
        ["copy"]() {
          return new an(this.x1, this.y1, this.x2, this.y2);
        }
      }
      var aV = V(187);
      var aw = V.n(aV);
      const aC = class extends aw() {
        ["wait"](Y0, Y1 = 5000) {
          return new Promise((Y3, Y4) => {
            const Y6 = setTimeout(() => Y4(aL), Y1);
            this.once(Y0, Y7 => {
              clearTimeout(Y6);
              Y3(Y7);
            });
          });
        }
      };
      const ay = class extends aC {
        ['on'](Y0, Y1) {
          return super.on(Y0, Y1);
        }
        ['once'](Y0, Y1) {
          return super.once(Y0, Y1);
        }
        ['wait'](Y0, Y1) {
          return super.wait(Y0, Y1);
        }
        ["off"](Y0, Y1) {
          return super.off(Y0, Y1);
        }
        ["emit"](Y0, Y1) {
          return undefined !== Y1 ? super.emit(Y0, Y1) : super.emit(Y0);
        }
      };
      var aZ;
      !function (Y0) {
        Y0[Y0.CONNECT = 0] = "CONNECT";
        Y0[Y0.DISCONNECT = 1] = "DISCONNECT";
        Y0[Y0.ERROR = 2] = "ERROR";
        Y0[Y0.STRING = 3] = "STRING";
        Y0[Y0.BINARY = 4] = "BINARY";
      }(aZ || (aZ = {}));
      const al = class extends ay {
        constructor(Y0, Y1) {
          super();
          this.ws = null;
          this.url = Y0;
          if (Y1 && Y1.reconnectDelay) {
            this.on(aZ.DISCONNECT, Y4 => {
              if (!Y4.wasClean) {
                setTimeout(() => this.connect(), Y1.reconnectDelay);
              }
            });
          }
        }
        get ["connected"]() {
          return null !== this.ws && this.ws.readyState === WebSocket.OPEN;
        }
        get ["disconnected"]() {
          return !this.connected;
        }
        get ["connecting"]() {
          return this.ws && this.ws.readyState === WebSocket.CONNECTING;
        }
        ["connect"]() {
          return new Promise((Y2, Y3) => {
            if (this.ws && [WebSocket.CONNECTING, WebSocket.OPEN].includes(this.ws.readyState)) {
              Y3(new Error("try connect when websocket is OPEN or CONNECTING"));
            }
            let Y6 = false;
            this.ws = new WebSocket(this.url);
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = () => {
              this.emit(aZ.CONNECT);
              Y6 = true;
              Y2();
            };
            this.ws.onclose = Y7 => {
              this.emit(aZ.DISCONNECT, Y7);
              if (!Y6) {
                Y3(Y7);
              }
            };
            this.ws.onerror = Y7 => {
              this.emit(aZ.ERROR, Y7);
            };
            this.ws.onmessage = ({
              data: Y7
            }) => {
              if ('string' == typeof Y7) {
                this.emit(aZ.STRING, Y7);
              } else {
                this.emit(aZ.BINARY, Y7);
              }
            };
          });
        }
        ['disconnect']() {
          Y1 = this;
          Y4 = function* () {
            if (this.ws) {
              this.ws.close();
              yield this.wait(aZ.DISCONNECT);
              this.ws = null;
            }
          };
          return new ((Y3 = undefined) || (Y3 = Promise))(function (Y5, Y6) {
            function Y8(YL) {
              try {
                Ya(Y4.next(YL));
              } catch (Yc) {
                Y6(Yc);
              }
            }
            function Y9(YL) {
              try {
                Ya(Y4["throw"](YL));
              } catch (Yc) {
                Y6(Yc);
              }
            }
            function Ya(YL) {
              var YY;
              if (YL.done) {
                Y5(YL.value);
              } else {
                YY = YL.value;
                (YY instanceof Y3 ? YY : new Y3(function (YT) {
                  YT(YY);
                })).then(Y8, Y9);
              }
            }
            Ya((Y4 = Y4.apply(Y1, undefined || [])).next());
          });
          var Y1;
          var Y3;
          var Y4;
        }
        ['send'](Y0) {
          if (null === this.ws || this.disconnected) {
            throw a6;
          }
          this.ws.send(Y0);
        }
      };
      const aE = class {
        constructor(Y0, Y1) {
          this.build = Y0;
          this.onerror = Y1;
          this.instance = null;
          this.aborter = null;
        }
        get ["ready"]() {
          return null !== this.instance && !(this.instance instanceof Promise);
        }
        ["clear"]() {
          var Y1;
          var Y2;
          var Y4;
          var Y5;
          Y2 = this;
          Y5 = function* () {
            let Y6;
            if (this.instance instanceof Promise) {
              Y6 = this.instance.then(Y7 => {
                if (Y7 && "destroy" in Y7) {
                  return Y7.destroy();
                }
              }).then(() => {});
              this.instance = null;
              if (!(null === (Y1 = this.aborter) || undefined === Y1)) {
                Y1.abort();
              }
              this.aborter = null;
            }
            if (null !== this.instance) {
              this.instance = null;
            }
            return Y6 || Promise.resolve();
          };
          return new ((Y4 = undefined) || (Y4 = Promise))(function (Y6, Y7) {
            function Y9(YY) {
              try {
                YL(Y5.next(YY));
              } catch (Yc) {
                Y7(Yc);
              }
            }
            function Ya(YY) {
              try {
                YL(Y5["throw"](YY));
              } catch (Yc) {
                Y7(Yc);
              }
            }
            function YL(YY) {
              var YT;
              if (YY.done) {
                Y6(YY.value);
              } else {
                YT = YY.value;
                (YT instanceof Y4 ? YT : new Y4(function (Yc) {
                  Yc(YT);
                })).then(Y9, Ya);
              }
            }
            YL((Y5 = Y5.apply(Y2, undefined || [])).next());
          });
        }
        ["get"]() {
          return null === this.instance ? (this.aborter = new aU(), this.instance = Promise.any([this.build().then(Y0 => this.instance = Y0)["catch"](Y0 => (this.onerror && this.onerror(Y0), null)), this.aborter.promise.then(() => null)])) : this.instance instanceof Promise ? this.instance : Promise.resolve(this.instance);
        }
        ["getExists"]() {
          return Promise.resolve(this.instance);
        }
        ["now"]() {
          return null === this.instance || this.instance instanceof Promise ? null : this.instance;
        }
      };
      var aJ;
      var az = function (Y0, Y1, Y2, Y3) {
        return new (Y2 || (Y2 = Promise))(function (Y5, Y6) {
          function Y8(YL) {
            try {
              Ya(Y3.next(YL));
            } catch (YT) {
              Y6(YT);
            }
          }
          function Y9(YL) {
            try {
              Ya(Y3["throw"](YL));
            } catch (YU) {
              Y6(YU);
            }
          }
          function Ya(YL) {
            var YY;
            if (YL.done) {
              Y5(YL.value);
            } else {
              YY = YL.value;
              (YY instanceof Y2 ? YY : new Y2(function (YT) {
                YT(YY);
              })).then(Y8, Y9);
            }
          }
          Ya((Y3 = Y3.apply(Y0, Y1 || [])).next());
        });
      };
      !function (Y0) {
        Y0[Y0.CONNECT = 0] = "CONNECT";
        Y0[Y0.DISCONNECT = 1] = "DISCONNECT";
        Y0[Y0.READY = 2] = 'READY';
        Y0[Y0.PIXELS = 3] = "PIXELS";
        Y0[Y0.PLACE_PIXELS = 4] = "PLACE_PIXELS";
        Y0[Y0.CHUNK = 5] = 'CHUNK';
        Y0[Y0.CAPTCHA_RESULT = 6] = "CAPTCHA_RESULT";
      }(aJ || (aJ = {}));
      const aG = class {
        constructor() {
          this.updatedAt = 0;
          this.cooldown = 0;
        }
        ["update"](Y0) {
          this.cooldown = Y0;
          this.updatedAt = Date.now();
        }
        ["get"]() {
          return Math.max(0, this.cooldown - (Date.now() - this.updatedAt));
        }
      };
      const aj = class {
        constructor() {
          this.timer = new aG();
        }
        get ["chunkSize"]() {
          return this.info.chunkWidth * this.info.chunkHeight;
        }
        ["getChunksCoords"](Y0, Y1, Y2, Y3) {
          Y0 = Math.floor((Y0 + this.info.worldWidth / 2) / this.info.chunkWidth);
          Y1 = Math.floor((Y1 + this.info.worldHeight / 2) / this.info.chunkHeight);
          Y2 = Math.floor((Y2 - 1 + this.info.worldWidth / 2) / this.info.chunkWidth);
          Y3 = Math.floor((Y3 - 1 + this.info.worldHeight / 2) / this.info.chunkHeight);
          const Y4 = [];
          for (let Y5 = Y0; Y5 <= Y2; Y5++) {
            for (let Y6 = Y1; Y6 <= Y3; Y6++) {
              Y4.push([Y5, Y6]);
            }
          }
          return Y4;
        }
        ["toTiled"](Y0, Y1) {
          Y0 += this.info.worldWidth >> 1;
          Y1 += this.info.worldHeight >> 1;
          return [Math.floor(Y0 / this.info.chunkWidth), Math.floor(Y1 / this.info.chunkHeight), Y1 % this.info.chunkHeight * this.info.chunkWidth + Y0 % this.info.chunkWidth];
        }
        ['toWorld'](Y0, Y1, Y2) {
          return [Y0 * this.info.chunkWidth - (this.info.worldWidth >> 1) + Y2 % this.info.chunkWidth, Y1 * this.info.chunkHeight - (this.info.worldHeight >> 1) + Math.floor(Y2 / this.info.chunkWidth)];
        }
      };
      class aI {
        constructor() {
          this.dict = new Map();
        }
        ["get"](Y0, Y1) {
          return this.dict.get(this.coordsToIndex(Y0, Y1));
        }
        ["delete"](Y0, Y1) {
          return this.dict["delete"](this.coordsToIndex(Y0, Y1));
        }
        ['has'](Y0, Y1) {
          return this.dict.has(this.coordsToIndex(Y0, Y1));
        }
        ["set"](Y0, Y1, Y2) {
          this.dict.set(this.coordsToIndex(Y1, Y2), Y0);
        }
        ["clear"]() {
          this.dict.clear();
        }
        ["coordsToIndex"](Y0, Y1) {
          return Y1 + '_' + Y0;
        }
      }
      class aA {
        constructor(Y0) {
          this.data = Y0;
        }
        get ["length"]() {
          return this.data.length;
        }
        ['get'](Y0) {
          return this.data[Y0];
        }
        ["set"](Y0, Y1) {
          this.data[Y0] = Y1;
        }
      }
      new Error("no connection");
      new Error("need template source");
      new Error("no access to canvas api");
      new Error("need template position");
      new Error("canvas undefined");
      new Error("strategy undefined");
      new Error("promise deadline");
      new Error("errAborterTriggered");
      new Error("default strategy doesnt exists");
      new Error("errSeveralNoPlacePixelResult");
      class aO {
        constructor(Y0, Y1, Y2, Y3) {
          this.x1 = Y0;
          this.y1 = Y1;
          this.x2 = Y2;
          this.y2 = Y3;
        }
        get ['width']() {
          return this.x2 - this.x1;
        }
        set ["width"](Y0) {
          this.x2 = this.x1 + Y0;
        }
        get ["height"]() {
          return this.y2 - this.y1;
        }
        set ["height"](Y0) {
          this.y2 = this.y1 + Y0;
        }
        get ["localCenter"]() {
          return [this.width / 2, this.height / 2];
        }
        get ["center"]() {
          return [(this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2];
        }
        ['in'](Y0, Y1) {
          return this.x1 <= Y0 && Y0 < this.x2 && this.y1 <= Y1 && Y1 < this.y2;
        }
        ["toArray"]() {
          return [this.x1, this.y1, this.x2, this.y2];
        }
        ["moveY"](Y0) {
          this.move(this.x1, Y0);
        }
        ["moveX"](Y0) {
          this.move(Y0, this.y1);
        }
        ["move"](Y0, Y1) {
          const Y2 = this.width;
          const Y3 = this.height;
          this.x1 = Y0;
          this.y1 = Y1;
          this.width = Y2;
          this.height = Y3;
        }
        ["copy"]() {
          return new aO(this.x1, this.y1, this.x2, this.y2);
        }
      }
      var ab;
      !function (Y0) {
        Y0[Y0.CONNECT = 0] = "CONNECT";
        Y0[Y0.DISCONNECT = 1] = "DISCONNECT";
        Y0[Y0.ERROR = 2] = 'ERROR';
        Y0[Y0.STRING = 3] = "STRING";
        Y0[Y0.BINARY = 4] = "BINARY";
      }(ab || (ab = {}));
      const aF = {
        offset: 0x0,
        colors: []
      };
      const ao = {
        'id': -1,
        'name': '',
        'palette': aF,
        'chunkWidth': 0x0,
        'chunkHeight': 0x0,
        'worldWidth': 0x0,
        'worldHeight': 0x0,
        'haveStack': false,
        'stack': 0x0,
        'minCd': 0x0,
        'maxCd': 0x0,
        'borders': new aO(0, 0, 0, 0)
      };
      var aH = V(490);
      function aP(Y0, Y1, Y2) {
        const Y3 = new ArrayBuffer(3 + 4 * Y2.length);
        const Y4 = new DataView(Y3);
        Y4.setUint8(0, 193);
        Y4.setUint8(1, Y0);
        Y4.setUint8(2, Y1);
        let Y5 = 2;
        let Y6 = Y2.length;
        for (; Y6;) {
          Y6 -= 1;
          const [Y8, Y9] = Y2[Y6];
          Y4.setUint8(Y5 += 1, Y8 >>> 16);
          Y4.setUint16(Y5 += 1, 65535 & Y8);
          Y4.setUint8(Y5 += 2, Y9);
        }
        return Y3;
      }
      const ad = JSON.parse("{\"OK\":0,\"mW\":1,\"GX\":2,\"rU\":3,\"MH\":4,\"Aw\":5,\"kE\":6,\"ZF\":7,\"br\":8,\"I3\":9,\"hD\":10,\"Dj\":11,\"D8\":12,\"e5\":13}");
      const av = {
        'errNoPlacePixelResult': new Error("errNoPlacePixelResult"),
        'errMustAuth': new Error("errMustAuth"),
        'errTooLowScore': new Error("errTooLowScore"),
        'errPixelProtected': new Error("errPixelProtected"),
        'errFullStack': new Error("errFullStack"),
        'errCaptcha': new Error("errCaptcha"),
        'errYouAreProxy': new Error("errYouAreProxy"),
        'errCanvasAPIInteraction': new Error("errCanvasAPIInteraction"),
        'errUnknownError': new Error("errUnknownError"),
        'errAPIIsntReady': new Error("errAPIIsntReady"),
        'errResponseIsntOk': new Error("response isnt \"ok\""),
        'errResponseStatusIsnt200': new Error("response status isnt 200"),
        'errParallelPlace': new Error("errParallelPlace")
      };
      const aD = {
        'errCaptchaTimeout': new Error("You took too long, try again."),
        'errInvalidSolution': new Error("No or invalid captcha text")
      };
      var aS;
      !function (Y0) {
        Y0[Y0.PMF_EARTH = 0] = "PMF_EARTH";
        Y0[Y0.PMF_MOON = 1] = "PMF_MOON";
        Y0[Y0.PMF_CORONA = 2] = "PMF_CORONA";
        Y0[Y0.PMF_PZ = 3] = "PMF_PZ";
        Y0[Y0.PMF_PC = 4] = "PMF_PC";
        Y0[Y0.PMF_BIT = 5] = 'PMF_BIT';
        Y0[Y0.PMF_TOP = 6] = "PMF_TOP";
      }(aS || (aS = {}));
      const ap = {
        [aS.PMF_EARTH]: "PMF Earth",
        [aS.PMF_MOON]: "PMF Moon",
        [aS.PMF_CORONA]: "PMF Corona",
        [aS.PMF_PZ]: "PMF PZ mirror",
        [aS.PMF_PC]: "PMF PixelCanvas",
        [aS.PMF_BIT]: "PMF Bit",
        [aS.PMF_TOP]: "PMF Top10"
      };
      var as;
      var aQ = function (Y0, Y1, Y2, Y3) {
        return new (Y2 || (Y2 = Promise))(function (Y5, Y6) {
          function Y8(YL) {
            try {
              Ya(Y3.next(YL));
            } catch (YT) {
              Y6(YT);
            }
          }
          function Y9(YL) {
            try {
              Ya(Y3["throw"](YL));
            } catch (YY) {
              Y6(YY);
            }
          }
          function Ya(YL) {
            var YY;
            if (YL.done) {
              Y5(YL.value);
            } else {
              YY = YL.value;
              (YY instanceof Y2 ? YY : new Y2(function (Yc) {
                Yc(YY);
              })).then(Y8, Y9);
            }
          }
          Ya((Y3 = Y3.apply(Y0, Y1 || [])).next());
        });
      };
      !function (Y0) {
        Y0[Y0.RET_CODE = 0] = "RET_CODE";
        Y0[Y0.CAPTCHA_RESULT = 1] = "CAPTCHA_RESULT";
      }(as || (as = {}));
      const aX = {
        '0': aS.PMF_EARTH,
        '1': aS.PMF_MOON,
        '3': aS.PMF_CORONA,
        '5': aS.PMF_PZ,
        '6': aS.PMF_PC,
        '7': aS.PMF_BIT,
        '8': aS.PMF_TOP
      };
      const aq = (() => {
        var Y0;
        if (!(null === (Y0 = null === unsafeWindow || undefined === unsafeWindow ? undefined : unsafeWindow.ssv) || undefined === Y0 ? undefined : Y0.shard) || "fuckyouarkeros.fun" === unsafeWindow.location.host) {
          return '';
        }
        const Y2 = window.location.host.split('.');
        if (Y2.length > 2) {
          Y2.shift();
        }
        return unsafeWindow.ssv.shard + '.' + Y2.join('.');
      })();
      const ak = aq && unsafeWindow.location.protocol + '//' + aq;
      aS.PMF_EARTH;
      aS.PMF_MOON;
      aS.PMF_CORONA;
      aS.PMF_PZ;
      aS.PMF_PC;
      aS.PMF_BIT;
      aS.PMF_TOP;
      const ar = Y0 => [Y0 >> 8, 255 & Y0];
      class aN extends aj {
        constructor(Y0) {
          super();
          this.canvasId = Y0;
          this._info = ao;
          this.loadQueue = [];
          this.pixelsDelay = 150 + 50 * Math.random();
          this.delayedPixels = [];
          this.chunks = new aI();
          this.threads = 5;
          this.loaders = [];
          this.chunksProcessing = false;
          this.emitter = new ay();
          this.local = new ay();
          this.timer = new aG();
          this.ws = new al(("https:" === window.location.protocol ? 'wss:' : "ws:") + '//' + (aq || window.location.host) + "/ws");
          this.ws.on(aZ.CONNECT, () => aQ(this, undefined, undefined, function* () {
            this.emitter.emit(aJ.CONNECT);
            this.selectCanvas(this.canvasId);
            for (this.emitter.emit(aJ.READY); this.ws.connected;) {
              yield LY(19000);
              this.ws.send(new Uint8Array([176]).buffer);
            }
          }));
          this.ws.on(aZ.BINARY, Y2 => {
            const Y4 = new DataView(Y2);
            switch (Y4.getUint8(0)) {
              case 193:    PMF
                this.handleArrivedPixel(function (Y7) {
                  const Y8 = Y7.getUint8(1);
                  const Y9 = Y7.getUint8(2);
                  const Ya = [];
                  let YL = Y7.byteLength;
                  for (; YL > 3;) {
                    const Yc = Y7.getUint8(YL -= 1);
                    const YU = Y7.getUint16(YL -= 2);
                    const Yn = Y7.getUint8(YL -= 1) << 16;
                    Ya.push([Yn | YU, Yc]);
                  }
                  const YY = {
                    i: Y8,
                    j: Y9,
                    pixels: Ya
                  };
                  return YY;
                }(Y4));
                break;
              case 195:
                const {
                  retCode: Y5,
                  wait: Y6
                } = function (Y7) {
                  return {
                    'retCode': Y7.getUint8(1),
                    'wait': Y7.getUint32(2),
                    'coolDownSeconds': Y7.getInt16(6),
                    'pxlCnt': Y7.getUint8(8),
                    'rankedPxlCnt': Y7.getUint8(9)
                  };
                }(Y4);
                this.timer.update(Y6);
                this.local.emit(as.RET_CODE, Y5);
                break;
              case 198:
                this.local.emit(as.CAPTCHA_RESULT, function (Y7) {
                  return Y7.getUint8(1);
                }(Y4));
                break;
              case 194:
                this.timer.update(function (Y7) {
                  return Y7.getUint32(1);
                }(Y4));
            }
          });
          this.ws.on(aZ.DISCONNECT, () => this.emitter.emit(aJ.DISCONNECT));
        }
        get ["info"]() {
          if (this._info === ao) {
            throw av.errAPIIsntReady;
          }
          return this._info;
        }
        static ["build"](Y0) {
          return aQ(this, undefined, undefined, function* () {
            const Y1 = new aN(Y0);
            yield Y1.fetchMe();
            yield Y1.ws.connect();
            return Y1;
          });
        }
        ["get"](Y0, Y1) {
          for (const Y2 of this.delayedPixels) {
            const Y3 = Y2.find(Y4 => Y4.x === Y0 && Y4.y === Y1);
            if (Y3) {
              return Y3.id;
            }
          }
          return this.getHumanlike(Y0, Y1);
        }
        ["getHumanlike"](Y0, Y1) {
          const Y2 = this.toTiled(Y0, Y1);
          return this.chunks.get(Y2[0], Y2[1]).get(Y2[2]);
        }
        ["dropChunks"](Y0) {
          const Y3 = [];
          for (const Y4 of Y0) {
            const Y5 = Y4[0] << 8 | Y4[1];
            if (this.chunks.has(Y4[0], Y4[1])) {
              Y3.push(Y4);
              this.chunks['delete'](Y4[0], Y4[1]);
              continue;
            }
            if (this.loadQueue.includes(Y5)) {
              this.loadQueue = this.loadQueue.filter(Y7 => Y7 !== Y5);
              continue;
            }
            const Y6 = this.loaders.filter(Y7 => Y7.chunk === Y5);
            if (Y6.length) {
              Y6.forEach(Y7 => Y7.aborter.abort());
              this.loaders = this.loaders.filter(Y7 => Y7.chunk !== Y5);
            }
          }
          if (Y3.length) {
            this.deRegisterChunks(Y3);
          }
        }
        ["prepareChunks"](Y0) {
          return aQ(this, undefined, undefined, function* () {
            if (this.ws.disconnected) {
              yield this.emitter.wait(aJ.READY);
            }
            Y0.forEach(Y3 => this.loadQueue.push(Y3[0] << 8 | Y3[1]));
            this.processMarked();
            yield this.waitChunks(Y0);
          });
        }
        ["placePixels"](Y0) {
          return aQ(this, undefined, undefined, function* () {
            const Y2 = this.groupPixels(Y0);
            let Y3 = null;
            for (const Y4 in Y2) {
              const Y5 = Y2[Y4];
              const Y6 = [+Y4 >> 8, 255 & +Y4];
              this.emitter.emit(aJ.PLACE_PIXELS, Y5.map(({
                offset: Y7,
                id: Y8
              }) => {
                const [Y9, Ya] = this.toWorld(Y6[0], Y6[1], Y7);
                const YL = {
                  x: Y9,
                  y: Ya,
                  id: Y8
                };
                return YL;
              }));
              this.ws.send(aP(Y6[0], Y6[1], Y5.map(Y7 => [Y7.offset, Y7.id])));
              Y3 = yield this.local.wait(as.RET_CODE, 500).then(Y7 => {
                ad.mW;
                ad.GX;
                ad.rU;
                ad.MH;
                switch (Y7) {
                  case ad.OK:
                    const Y9 = this.chunks.get(Y6[0], Y6[1]);
                    if (Y9) {
                      Y5.forEach(Ya => Y9.set(Ya.offset, Ya.id));
                    }
                    return null;
                  case ad.Aw:
                    return av.errCanvasAPIInteraction;
                  case ad.kE:
                    return av.errMustAuth;
                  case ad.ZF:
                    return av.errTooLowScore;
                  case ad.br:
                    return av.errPixelProtected;
                  case ad.I3:
                    return av.errFullStack;
                  case ad.hD:
                    return av.errCaptcha;
                  case ad.Dj:
                    return av.errYouAreProxy;
                  case ad.D8:
                    return av.errTooLowScore;
                  case ad.e5:
                    return av.errParallelPlace;
                  default:
                    return new Error("unknown retcode: " + Y7);
                }
              })["catch"](Y7 => Y7 === aL ? av.errNoPlacePixelResult : Y7);
              if (Y3) {
                return Y3;
              }
            }
            return Y3;
          });
        }
        ["getCaptcha"]() {
          return aQ(this, undefined, undefined, function* () {
            const Y2 = {
              cache: "no-cache"
            };
            const Y3 = yield fetch(ak + "/captcha.svg", Y2);
            if (!Y3.ok || 200 !== Y3.status) {
              throw av.errCanvasAPIInteraction;
            }
            const Y4 = URL.createObjectURL(yield Y3.blob());
            const Y5 = Y3.headers.get("captcha-id");
            if (null === Y5) {
              throw av.errCanvasAPIInteraction;
            }
            const Y6 = {
              'id': Y5,
              'svg': yield fetch(Y4).then(Y7 => Y7.text())
            };
            return Y6;
          });
        }
        ["sendAnswer"]({
          solution: Y0,
          id: Y1
        }) {
          return aQ(this, undefined, undefined, function* () {
            this.ws.send('cs,' + JSON.stringify([Y0, Y1]));
            const Y3 = yield this.local.wait(as.CAPTCHA_RESULT);
            const Y4 = [true, aD.errCaptchaTimeout, false, aD.errInvalidSolution, av.errCanvasAPIInteraction];
            return Y4.length > Y3 ? Y4[Y3] : av.errUnknownError;
          });
        }
        ["predictCooldown"](Y0, Y1) {
          const Y2 = this.toTiled(Y0, Y1);
          return this.chunks.get(Y2[0], Y2[1]).get(Y2[2]) < this.info.palette.offset ? this.info.minCd : this.info.maxCd;
        }
        ["destroy"]() {
          this.dropChunks(this.loadQueue.map(ar));
          return this.ws.disconnect();
        }
        ["groupPixels"](Y0) {
          0;
          const Y2 = aH.r(Y0).by(Y4 => this.toTiled(Y4.x, Y4.y).slice(0, 2)[0] << 8 | this.toTiled(Y4.x, Y4.y).slice(0, 2)[1]).asArrays();
          const Y3 = {};
          Y2.forEach(Y4 => {
            const Y5 = this.toTiled(Y4[0].x, Y4[0].y);
            const Y6 = Y5.slice(0, 2)[0] << 8 | Y5.slice(0, 2)[1];
            Y3[Y6] = Y4.map(Y7 => ({
              'offset': this.toTiled(Y7.x, Y7.y)[2],
              'id': Y7.id
            }));
          });
          return Y3;
        }
        ["waitChunks"](Y0) {
          return aQ(this, undefined, undefined, function* () {
            for (Y0 = Y0.slice().filter(Y2 => !this.chunks.has(Y2[0], Y2[1])); Y0.length;) {
              const Y2 = yield this.emitter.wait(aJ.CHUNK);
              const Y3 = Y2[0] << 8 | Y2[1];
              const Y4 = Y0.findIndex(Y5 => (Y5[0] << 8 | Y5[1]) === Y3);
              if (-1 !== Y4) {
                Y0.splice(Y4, 1);
              }
            }
          });
        }
        ["processMarked"]() {
          if (!this.chunksProcessing) {
            for (this.chunksProcessing = true; this.loaders.length < this.threads;) {
              const Y0 = this.loadQueue.pop();
              if (undefined === Y0) {
                break;
              }
              const Y1 = [Y0 >> 8, 255 & Y0];
              if (this.chunks.has(Y1[0], Y1[1]) || this.loaders.some(Y3 => Y3.chunk === Y0)) {
                continue;
              }
              const Y2 = {
                'chunk': Y0,
                'aborter': new AbortController()
              };
              this.loaders.push(Y2);
              this.fetchChunk(Y1, Y2.aborter).then(Y3 => {
                this.chunks.set(Y3, Y1[0], Y1[1]);
                this.registerChunk(Y1);
                this.loaders.splice(this.loaders.indexOf(Y2), 1);
                this.processMarked();
              });
            }
            this.chunksProcessing = false;
          }
        }
        ["fetchChunk"](Y0, Y1) {
          const Y3 = Y1 ? {
            'signal': Y1.signal
          } : {};
          return fetch(ak + "/chunks/" + this.canvasId + '/' + Y0[0] + '/' + Y0[1] + ".bmp", Y3).then(Y4 => {
            if (!Y4.ok) {
              console.debug(Y4);
              throw av.errResponseIsntOk;
            }
            if (200 !== Y4.status) {
              console.debug(Y4);
              throw av.errResponseStatusIsnt200;
            }
            return Y4.arrayBuffer();
          }).then(Y4 => {
            const Y5 = new Uint8Array(Y4);
            const Y6 = new Uint32Array(this.chunkSize);
            if (Y5.length === this.chunkSize) {
              for (let Y7 = 0; Y7 !== Y5.length; Y7++) {
                const Y8 = Y5[Y7];
                Y6[Y7] = Y8 >= 128 ? Y8 - 128 : Y8;
              }
            }
            this.emitter.emit(aJ.CHUNK, Y0);
            return new aA(Y6);
          });
        }
        ["registerChunk"](Y0) {
          this.ws.send(function (Y1) {
            const Y2 = new ArrayBuffer(3);
            const Y3 = new DataView(Y2);
            Y3.setInt8(0, 161);
            Y3.setInt16(1, Y1);
            return Y2;
          }(Y0[0] << 8 | Y0[1]));
        }
        ["deRegisterChunks"](Y0) {
          this.ws.send(function (Y1) {
            const Y2 = new ArrayBuffer(2 + 2 * Y1.length);
            const Y3 = new Uint16Array(Y2);
            Y3[0] = 164;
            for (let Y4 = 0; Y4 < Y1.length; Y4 += 1) {
              Y3[Y4 + 1] = Y1[Y4];
            }
            return Y2;
          }(Y0.map(Y1 => Y1[0] << 8 | Y1[1])));
        }
        ['toTiled'](Y0, Y1) {
          const Y2 = Y0 + (this.info.worldWidth >> 1);
          const Y3 = Y1 + (this.info.worldHeight >> 1);
          return [Y2 >> 8, Y3 >> 8, (255 & Y3) << 8 | 255 & Y2];
        }
        ["toWorld"](Y0, Y1, Y2) {
          const Y3 = {
            SrHOs: "template.y"
          };
          Y3.kwgSV = "template.src";
          return [(Y0 << 8) - (this.info.worldWidth >> 1) + (255 & Y2), (Y1 << 8) - (this.info.worldHeight >> 1) + (Y2 >> 8)];
        }
        ["selectCanvas"](Y0) {
          this.ws.send(function (Y2) {
            const Y3 = new ArrayBuffer(2);
            const Y4 = new DataView(Y3);
            Y4.setInt8(0, 160);
            Y4.setInt8(1, Number(Y2));
            return Y3;
          }(Y0));
        }
        ["fetchMe"]() {
          return aQ(this, undefined, undefined, function* () {
            const Y0 = (yield fetch(ak + "/api/me").then(Y4 => Y4.json())).canvases[this.canvasId];
            const {
              size: Y1
            } = Y0;
            const Y2 = aX[this.canvasId];
            const Y3 = {
              offset: Y0.cli,
              colors: Y0.colors
            };
            this._info = {
              'id': Y2,
              'name': ap[Y2],
              'palette': Y3,
              'chunkWidth': 0x100,
              'chunkHeight': 0x100,
              'worldWidth': Y1,
              'worldHeight': Y1,
              'haveStack': true,
              'stack': Y0.cds,
              'minCd': Y0.bcd,
              'maxCd': Y0.pcd,
              'borders': new an(-Y1 / 2, -Y1 / 2, Y1 / 2, Y1 / 2)
            };
          });
        }
        ["handleArrivedPixel"](Y0) {
          const Y1 = Y0.pixels.map(Y2 => {
            const [Y3, Y4] = this.toWorld(Y0.i, Y0.j, Y2[0]);
            const Y5 = {
              x: Y3,
              y: Y4,
              id: Y2[1]
            };
            return Y5;
          });
          this.emitter.emit(aJ.PIXELS, Y1);
          this.delayedPixels.push(Y1);
          setTimeout(() => {
            const Y2 = this.delayedPixels.indexOf(Y1);
            if (-1 !== Y2) {
              this.delayedPixels.splice(Y2, 1);
              const Y3 = this.chunks.get(Y0.i, Y0.j);
              if (Y3) {
                Y0.pixels.forEach(Y4 => Y3.set(Y4[0], Y4[1]));
              }
            }
          }, this.pixelsDelay);
        }
      }
      const aR = {
        [aS.PMF_EARTH]: () => aN.build(0),
        [aS.PMF_MOON]: () => aN.build(1),
        [aS.PMF_CORONA]: () => aN.build(3),
        [aS.PMF_PZ]: () => aN.build(5),
        [aS.PMF_PC]: () => aN.build(6),
        [aS.PMF_BIT]: () => aN.build(7),
        [aS.PMF_TOP]: () => aN.build(8)
      };
      const am = {};
      Object.entries(aR).forEach(([Y0, Y1]) => {
        am[Y0] = () => Y1().then(Y3 => new class {
          constructor(Y4) {
            this.low = Y4;
            this.workspaces = [];
            this.chunks = [];
            const {
              offset: Y6,
              colors: Y7
            } = this.info.palette;
            this.palette = new class {
              constructor(Y8, Y9) {
                this.offset = Y8;
                this.colors = Y9;
                this.monochromes = this.colors.map(YL => YL.reduce((YY, YT) => YY + YT) / 3);
                this.ids = Object.fromEntries(this.colors.map((YL, YY) => [YL.toString(), YY]));
                this.singleColorIds = Object.fromEntries(this.colors.map((YL, YY) => [YY, this.colors.findIndex((YT, Yc) => YY !== Yc && YL.every((YU, Yn) => YU === YT[Yn]))]).filter(([, YL]) => -1 !== YL));
              }
              ["monochrome"](Y8) {
                return this.monochromes[Y8];
              }
              ['sameIds'](Y8, Y9) {
                return Y8 === Y9 || this.singleColorIds[Y8] === Y9;
              }
              ["same"](Y8, Y9, Ya = 15) {
                return Math.abs(Y8[0] - Y9[0]) < Ya && Math.abs(Y8[1] - Y9[1]) < Ya && Math.abs(Y8[2] - Y9[2]) < Ya;
              }
              ["strictSame"](Y8, Y9) {
                return Y8[0] === Y9[0] && Y8[1] === Y9[1] && Y8[2] === Y9[2];
              }
              ['has'](Y8) {
                return undefined !== this.rgbToId(Y8);
              }
              ["idToRGB"](Y8) {
                return this.colors[Y8];
              }
              ["convert"](Y8, Y9, Ya) {
                let YY = 0;
                let YT = Infinity;
                for (let Yc = this.offset; Yc !== this.colors.length; Yc++) {
                  const YU = this.colors[Yc];
                  const Yn = (YU[0] - Y8) * (YU[0] - Y8) + (YU[1] - Y9) * (YU[1] - Y9) + (YU[2] - Ya) * (YU[2] - Ya);
                  if (0 === Yn) {
                    return Yc;
                  }
                  if (Yn < YT) {
                    YT = Yn;
                    YY = Yc;
                  }
                }
                return YY;
              }
              ['rgbToId'](Y8) {
                return this.ids[Y8.toString()] || null;
              }
            }(Y6, Y7);
          }
          get ["info"]() {
            return this.low.info;
          }
          ['on'](Y4, Y5) {
            return this.low.emitter.on(Y4, Y5);
          }
          ["emit"](Y4, Y5) {
            return this.low.emitter.emit(Y4, Y5);
          }
          ["wait"](Y4) {
            return this.low.emitter.wait(Y4);
          }
          ['getCaptcha']() {
            return this.low.getCaptcha();
          }
          ["sendAnswer"](Y4) {
            return this.low.sendAnswer(Y4);
          }
          ["getCooldown"]() {
            return this.low.timer.get();
          }
          ["pixelsCanPlace"]() {
            const Y4 = Math.max(this.info.minCd, this.info.maxCd);
            return Math.floor((this.info.stack - this.getCooldown()) / Y4);
          }
          ["get"](Y4, Y5) {
            return this.low.get(Y4, Y5);
          }
          ["compare"](Y4) {
            const Y5 = this.get(Y4.x, Y4.y);
            return this.palette.sameIds(Y5, Y4.id);
          }
          ["predictCooldown"](Y4, Y5) {
            return this.low.predictCooldown(Y4, Y5);
          }
          ["createWorkspace"](Y4, Y5, Y6, Y7) {
            return {
              'x1': Y4,
              'y1': Y5,
              'x2': Y6,
              'y2': Y7,
              'chunks': this.low.getChunksCoords(Y4, Y5, Y6, Y7)
            };
          }
          ["hasWorkspace"](Y4) {
            return this.workspaces.some(Y5 => Y5.x1 === Y4.x1 && Y5.y1 === Y4.y1 && Y5.x2 === Y4.x2 && Y5.y2 === Y4.y2);
          }
          ["changeWorkspace"](Y4) {
            return az(this, undefined, undefined, function* () {
              this.clearWorkspaces();
              yield this.addWorkspace(Y4);
            });
          }
          ["addWorkspace"](Y4) {
            return az(this, undefined, undefined, function* () {
              const Y6 = Y4.chunks.filter(Y7 => {
                Y8 = this.chunks;
                return !Y8.some(Ya => {
                  return (YL = Ya)[0] === Y7[0] && YL[1] === Y7[1];
                  var YL;
                });
                var Y8;
              });
              yield this.low.prepareChunks(Y6);
              this.chunks.push(...Y6);
              this.workspaces.push(Y4);
            });
          }
          ["clearWorkspaces"]() {
            if (this.chunks.length) {
              this.low.dropChunks(this.chunks);
            }
            this.chunks = [];
          }
          ["placePixels"](Y4) {
            return this.low.placePixels(Y4);
          }
          ["smartPlace"](Y4, Y5) {
            return az(this, undefined, undefined, function* () {
              Y4 = Y4.slice();
              const Y7 = new Promise(Y8 => az(this, undefined, undefined, function* () {
                for (;;) {
                  if (Y5 && Y5.triggered) {
                    return;
                  }
                  let Y9 = Y4.shift();
                  if (!Y9) {
                    break;
                  }
                  const Ya = yield this.low.placePixels([Y9]);
                  if (Ya) {
                    Y4.unshift(Y9);
                    return void Y8([Y4, Ya]);
                  }
                  if (Y4.length) {
                    yield this.waitBecausePixelsDistance(Y9, Y4[0]);
                  }
                }
                Y8([Y4, null]);
              }));
              if (Y5) {
                const Y8 = yield Promise.any([Y7, Y5.promise]);
                return Y8 instanceof Error ? (Y5.destroy(), [Y4, Y8]) : Y8;
              }
              return Y7;
            });
          }
          ['download'](Y4, Y5, Y6, Y7) {
            return az(this, undefined, undefined, function* () {
              yield this.low.prepareChunks(this.low.getChunksCoords(Y4, Y5, Y6, Y7));
              const Y8 = Y6 - Y4;
              const Y9 = Y7 - Y5;
              const Ya = document.createElement("canvas").getContext('2d');
              Ya.canvas.width = Y8;
              Ya.canvas.height = Y9;
              const YL = Ya.getImageData(0, 0, Y8, Y9);
              const YY = YL.data;
              let YT = Y5;
              for (let Yc = 0; YT !== Y7; YT++) {
                for (let YU = Y4; YU !== Y6; YU++, Yc += 4) {
                  const Yn = this.palette.idToRGB(this.get(YU, YT));
                  if (undefined !== Yn) {
                    YY[0 | Yc] = Yn[0];
                    YY[1 | Yc] = Yn[1];
                    YY[2 | Yc] = Yn[2];
                    YY[3 | Yc] = 255;
                  } else {
                    console.log("wrong id", this.get(YU, YT), 'at', YU, YT);
                  }
                }
              }
              Ya.putImageData(YL, 0, 0);
              LJ(Ya.canvas, this.info.name + '_' + Y4 + '_' + Y5 + '_' + Y6 + '_' + Y7);
            });
          }
          ["destroy"]() {
            return this.low.destroy();
          }
          ["waitBecausePixelsDistance"](Y4, Y5) {
            const Y6 = Math.sqrt((Y4.x - Y5.x) * (Y4.x - Y5.x) + (Y4.y - Y5.y) * (Y4.y - Y5.y));
            let Y7;
            Y7 = 1 === Y6 ? 50 : Y6 < 1.5 ? 100 : 125 * Y6;
            return LY(Math.min(0.75 * this.info.minCd, Y7));
          }
        }(Y3));
      });
      Object.keys(am);
      const ah = Y0 => {
        const Y1 = [];
        const Y2 = Y0.width;
        const Y3 = Y0.height;
        for (let Y4 = 0; Y4 !== Y3; Y4++) {
          for (let Y5 = 0; Y5 !== Y2; Y5++) {
            if (!Y0.isTransparent(Y5, Y4)) {
              Y1.push([Y5, Y4]);
            }
          }
        }
        return Y1;
      };
      const ag = {
        'random': Y0 => LU(ah(Y0)),
        'line_upToDown': ah,
        'line_downToUp': Y0 => {
          const Y1 = ah(Y0);
          for (let Y2 = 0; Y2 !== Y1.length >> 1; Y2++) {
            const Y3 = Y1.length - Y2 - 1;
            Ln(Y1, Y2, Y3);
          }
          return Y1;
        },
        'line_leftToRight': Y0 => LC(ah(Y0), Y1 => Y1[0]),
        'line_RightToLeft': Y0 => Lw(ah(Y0), Y1 => Y1[0]),
        'circle_inToOut': Y0 => {
          const [Y3, Y4] = Y0.localCenter;
          return Lw(ah(Y0), Y5 => Math.floor(Y5[0] - Y3) * Math.floor(Y5[0] - Y3) + Math.floor(Y5[1] - Y4) * Math.floor(Y5[1] - Y4));
        },
        'circle_outToIn': Y0 => {
          const [Y1, Y2] = Y0.localCenter;
          return LC(ah(Y0), Y3 => Math.floor(Y3[0] - Y1) * Math.floor(Y3[0] - Y1) + Math.floor(Y3[1] - Y2) * Math.floor(Y3[1] - Y2));
        },
        'throughLine': Y0 => {
          const Y2 = Y0.size;
          return LC(ah(Y0), Y3 => 0 == (1 & Y3[1]) ? Y3[0] + Y3[1] - Y2 : Y3[0] + Y3[1]);
        },
        'chess_1x1': Y0 => {
          const Y1 = Y0.size;
          return LC(ah(Y0), Y2 => (1 & Y2[0]) != (1 & Y2[1]) ? Y2[1] + Y1 : Y2[1]);
        },
        'chess_2x2': Y0 => {
          const Y1 = Y0.size;
          return LC(ah(Y0), Y2 => (3 & Y2[0] ^ 3 & Y2[1]) <= 1 ? Y2[1] - Y1 : Y2[1]);
        },
        'chess_3x3': Y0 => {
          const Y1 = Y0.size;
          return LC(ah(Y0), Y2 => (7 & Y2[0] ^ 7 & Y2[1]) <= 3 ? Y2[1] - Y1 : Y2[1]);
        },
        'chessCorner_1x1': Y0 => {
          const Y1 = Y0.size;
          return LC(ah(Y0), Y2 => (1 & Y2[0]) != (1 & Y2[1]) ? Y2[0] + Y2[1] + Y1 : Y2[0] + Y2[1]);
        },
        'woyken': Y0 => {
          const Y1 = Y0.size;
          const [Y2, Y3] = Y0.localCenter;
          return Lw(ah(Y0), Y4 => {
            const Y5 = Y4[0];
            const Y6 = Y4[1];
            if (0 !== Y5 && 0 !== Y6 && Y5 !== Y0.width - 1 && Y6 !== Y0.height - 1 && Y0.isOutline(Y5, Y6)) {
              return -Y1 + Y6;
            }
            if ((Y5 + Y6) % 8 == 0 || Math.abs(Y5 - Y6) % 8 == 0) {
              return Y6;
            }
            const Y7 = Math.floor(Y5 - Y2) * Math.floor(Y5 - Y2) + Math.floor(Y6 - Y3) * Math.floor(Y6 - Y3);
            return Y1 - Math.trunc(Math.sqrt(Y7));
          });
        },
        'colorByColor': Y0 => {
          let Y2 = ah(Y0);
          const Y3 = {};
          Y2.forEach(Y7 => {
            const Y8 = Y0.get(Y7[0], Y7[1]);
            const Y9 = Y3[Y8];
            if (Y9) {
              Y9.push(Y7);
            } else {
              Y3[Y8] = [Y7];
            }
          });
          Y2 = new Array(Y2.length);
          const Y4 = Y0.size;
          const Y5 = [Y0.width / 2, Y0.height / 2];
          let Y6 = 0;
          Object.values(Y3).forEach(Y7 => {
            LC(Y7, Y8 => Y4 - Math.trunc(Math.sqrt(Math.floor(Y8[0] - Y5[0]) * Math.floor(Y8[0] - Y5[0]) + Math.floor(Y8[1] - Y5[1]) * Math.floor(Y8[1] - Y5[1]))));
            Y7.forEach(Y8 => Y2[Y6++] = Y8);
          });
          return Y2;
        },
        'squareBySquare': Y0 => {
          const Y1 = [];
          for (let Y2 = 0; Y2 < Y0.height; Y2 += 8) {
            for (let Y3 = 0; Y3 < Y0.width; Y3 += 8) {
              for (let Y4 = Y2; Y4 !== Y2 + 8 && !(Y4 >= Y0.height); Y4++) {
                for (let Y5 = Y3; Y5 !== Y3 + 8; Y5++) {
                  if (!(Y5 >= Y0.width || Y0.isTransparent(Y5, Y4))) {
                    Y1.push([Y5, Y4]);
                  }
                }
              }
            }
          }
          return Y1;
        },
        'zipper': Y0 => LC(ah(Y0), Y1 => Math.trunc(Math.sqrt(Y1[0] + Y1[1]))),
        'zipper2': Y0 => LC(ah(Y0), Y1 => Math.trunc(Math.sqrt(Y1[0] + Y1[1] - 3 * Y0.get(Y1[0], Y1[1])))),
        'rhombLine': Y0 => {
          const [Y2, Y3] = Y0.localCenter;
          return ah(Y0).sort((Y4, Y5) => Math.sin(Math.abs(Y4[0] - Y2) + Math.abs(Y4[1] - Y3)) - Math.sin(Math.abs(Y5[0] - Y2) + Math.abs(Y5[1] - Y3)));
        },
        'rhombLine2': Y0 => {
          const [Y1, Y2] = Y0.localCenter;
          return ah(Y0).sort((Y3, Y4) => Math.tan(Math.abs(Y3[0] - Y1) + Math.abs(Y3[1] - Y2)) - Math.tan(Math.abs(Y4[0] - Y1) + Math.abs(Y4[1] - Y2)));
        },
        'alienRandom': Y0 => ah(Y0).sort((Y1, Y2) => Math.tan((Y1[0] - Y2[1]) * (Y1[0] - Y2[1]) - (Y1[1] - Y2[0]) * (Y1[1] - Y2[0]))),
        'alien1': Y0 => LC(ah(Y0), Y1 => Math.tan(Y1[0] * Y1[0] + Y1[1] * Y1[1])),
        'alien2': Y0 => LC(ah(Y0), Y1 => Math.exp(Math.cos(Y1[0] * Y1[1]))),
        'alien3': Y0 => {
          const Y2 = new Map();
          return LC(ah(Y0), Y3 => {
            let Y6 = Y2.get(Y3[0]);
            if (undefined === Y6) {
              Y6 = Math.pow(7, Y3[0] * Math.sin(Y3[0]));
              Y2.set(Y3[0], Y6);
            }
            return Y6 - Math.pow(Y3[0], 7 * Math.sin(Y3[1]));
          });
        },
        'alien4': Y0 => {
          const Y1 = new Map();
          const Y2 = new Map();
          return LC(ah(Y0), Y3 => {
            let Y5 = Y1.get(Y3[0]);
            if (undefined === Y5) {
              Y5 = Math.pow(Math.sin(Y3[0]), Y3[0]);
              Y1.set(Y3[0], Y5);
            }
            let Y6 = Y2.get(Y3[1]);
            if (undefined === Y6) {
              Y6 = Math.pow(Math.cos(Y3[1]), Y3[1]);
              Y2.set(Y3[1], Y6);
            }
            return Y5 + Y6;
          });
        },
        'complex': Y0 => {
          let [Y3, Y4] = function (Ya, YL) {
            const YT = Ya.width - 1;
            const Yc = Ya.height - 1;
            const YU = [];
            const Yn = [];
            YL.forEach(YV => {
              if (0 === YV[0] || 0 === YV[1] || YV[0] === YT || YV[1] === Yc || Ya.isOutline(YV[0], YV[1])) {
                YU.push(YV);
              } else {
                Yn.push(YV);
              }
            });
            return [YU, Yn];
          }(Y0, ah(Y0));
          const Y5 = Object.values(ae(Y0, Y4));
          const Y6 = Lw(Object.values(ae(Y0, Y3)), Ya => Ya.length);
          Y3 = Y4 = [];
          const Y7 = Y5.map(af);
          const Y8 = [];
          const Y9 = [];
          for (let Ya = 0; Ya !== Y6.length; Ya++) {
            const YL = Y6[Ya];
            const YY = af(YL);
            const YT = Y0.get(YL[0][0], YL[0][1]);
            Y9.push(aK(LU(YL)));
            let Yc = -1;
            let YU = Infinity;
            Y5.forEach((Yn, YV) => {
              const Yw = Y0.get(Yn[0][0], Yn[0][1]);
              if (YT !== Yw || Y8.includes(YV)) {
                return;
              }
              YZ = Y7[YV];
              const YC = (YY[0] - YZ[0]) * (YY[0] - YZ[0]) + (YY[1] - YZ[1]) * (YY[1] - YZ[1]);
              var YZ;
              if (YC < YU) {
                YU = YC;
                Yc = YV;
              }
            });
            if (-1 === Yc) {
              if (Y8.length === Y5.length) {
                Y9.push(...Y6.slice(Ya + 1).map(aK));
                break;
              }
              for (; -1 === Yc;) {
                Yc = Math.trunc(Math.random() * Y5.length);
                if (Y8.includes(Yc)) {
                  Yc = -1;
                }
              }
            } else {
              Y8.push(Yc);
              Y9.push(aK(Y5[Yc]));
            }
          }
          return [].concat(...Y9);
        },
        'binary': Y0 => LC(ah(Y0), Y1 => Y1[0] & Y1[1]),
        'near': Y0 => aK(LU(ah(Y0)))
      };
      function ae(Y0, Y1) {
        const Y4 = {};
        Y1.forEach(Y5 => {
          const Y6 = Y0.get(Y5[0], Y5[1]);
          let Y7 = Y4[Y6];
          if (!Y7) {
            Y7 = [];
            Y4[Y6] = Y7;
          }
          Y7.push(Y5);
        });
        return Y4;
      }
      function af(Y0) {
        let Y2 = 0;
        let Y3 = 0;
        Y0.forEach(Y4 => {
          Y2 += Y4[0];
          Y3 += Y4[1];
        });
        return [Math.trunc(Y2 / Y0.length), Math.trunc(Y3 / Y0.length)];
      }
      function aK(Y0) {
        if (Y0.length < 5) {
          return LU(Y0);
        }
        for (let Y2 = 0; Y2 !== Y0.length - 1; Y2++) {
          const Y3 = Y0[Y2];
          let Y4 = Y2 + 1;
          let Y5 = (Y3[0] - Y0[Y4][0]) * (Y3[0] - Y0[Y4][0]) + (Y3[1] - Y0[Y4][1]) * (Y3[1] - Y0[Y4][1]);
          for (let Y6 = Y2 + 2; Y6 !== Y0.length; Y6++) {
            const Y7 = (Y3[0] - Y0[Y6][0]) * (Y3[0] - Y0[Y6][0]) + (Y3[1] - Y0[Y6][1]) * (Y3[1] - Y0[Y6][1]);
            if (Y7 < Y5) {
              Y5 = Y7;
              Y4 = Y6;
            }
          }
          Ln(Y0, Y2 + 1, Y4);
        }
        return Y0;
      }
      const aM = new Error("template unloaded");
      const au = new Error("template unquantized");
      class L0 extends an {
        constructor(Y0) {
          super(Y0.x, Y0.y, Y0.x + (Y0.width || 0), Y0.y + (Y0.height || 0));
          this.readyState = L0.UNLOADED;
          this.ctx = null;
          this.ids = new Uint8Array(0);
          this.name = Y0.name;
        }
        get ["canvas"]() {
          var Y0;
          return null === (Y0 = this.ctx) || undefined === Y0 ? undefined : Y0.canvas;
        }
        get ["size"]() {
          return this.width * this.height;
        }
        ["get"](Y0, Y1) {
          return this.ids[Y0 + Y1 * this.width];
        }
        ["isTransparent"](Y0, Y1) {
          return 255 === this.get(Y0, Y1);
        }
        ["countTransparent"]() {
          if (this.readyState === L0.QUANTIZED) {
            let Y0 = 0;
            for (const Y1 of this.ids) if (255 === Y1) {
              Y0++;
            }
            return Y0;
          }
          throw au;
        }
        ["isOutline"](Y0, Y1) {
          const Y2 = this.get(Y0, Y1);
          return this.get(Y0 - 1, Y1 - 1) !== Y2 || this.get(Y0 - 1, Y1) !== Y2 || this.get(Y0 - 1, Y1 + 1) !== Y2 || this.get(Y0, Y1 - 1) !== Y2 || this.get(Y0, Y1 + 1) !== Y2 || this.get(Y0 + 1, Y1 - 1) !== Y2 || this.get(Y0 + 1, Y1) !== Y2 || this.get(Y0 + 1, Y1 + 1) !== Y2;
        }
        ["intersects"](Y0, Y1, Y2, Y3) {
          return this.x1 < Y2 && this.x2 > Y0 && this.y1 < Y3 && this.y2 > Y1;
        }
        ["load"](Y0) {
          this.readyState = L0.LOADING;
          return L7(Y0).then(Y1 => (this.ctx = document.createElement("canvas").getContext('2d'), this.ctx.canvas.width = this.width = Y1.width, this.ctx.canvas.height = this.height = Y1.height, this.ctx.drawImage(Y1, 0, 0), this.readyState = L0.LOADED, this));
        }
        ["quantize"](Y0) {
          if (!this.ctx) {
            throw aM;
          }
          const Y3 = this.ctx.getImageData(0, 0, this.width, this.height);
          const Y4 = Y3.data;
          this.ids = new Uint8Array(Y4.length >> 2);
          const Y5 = new Map();
          for (let Y6 = 0; Y6 !== Y4.length; Y6 += 4) {
            if (0 === Y4[3 | Y6]) {
              this.ids[Y6 >> 2] = 255;
              Y4[0 | Y6] = Y4[1 | Y6] = Y4[2 | Y6] = Y4[3 | Y6] = 0;
            } else {
              const Y8 = Y4[0 | Y6] << 16 | Y4[1 | Y6] << 8 | Y4[2 | Y6];
              let Y9 = Y5.get(Y8);
              if (!Y9) {
                Y9 = Y0.convert(Y8 >> 16, Y8 >> 8 & 255, 255 & Y8);
                Y5.set(Y8, Y9);
              }
              this.ids[Y6 >> 2] = Y9;
              const Ya = Y0.idToRGB(Y9);
              Y4[0 | Y6] = Ya[0];
              Y4[1 | Y6] = Ya[1];
              Y4[2 | Y6] = Ya[2];
              Y4[3 | Y6] = 255;
            }
          }
          this.ctx.putImageData(Y3, 0, 0);
          this.readyState = L0.QUANTIZED;
          return this;
        }
      }
      L0.UNLOADED = 0;
      L0.LOADING = 1;
      L0.LOADED = 2;
      L0.QUANTIZED = 3;
      const L1 = class {
        constructor(Y0, Y1) {
          this.api = Y0;
          this.template = Y1;
          if (this.template.readyState === L0.LOADED) {
            this.template.quantize(this.api.palette);
          }
        }
        get ["width"]() {
          return this.template.width;
        }
        get ['height']() {
          return this.template.height;
        }
        ["_countErrors"]() {
          const Y1 = this.api.palette;
          let Y2 = 0;
          let Y3 = 0;
          const Y4 = this.template.width;
          const Y5 = this.template.height;
          for (let Y7 = 0; Y7 != Y5; Y7++) {
            for (let Y8 = 0; Y8 != Y4; Y8++) {
              const Ya = this.template.get(Y8, Y7);
              if (255 === Ya) {
                continue;
              }
              const YL = Y8 + this.template.x1;
              const YY = Y7 + this.template.y1;
              const YT = this.api.get(YL, YY);
              if (!Y1.sameIds(Ya, YT)) {
                Y2++;
                Y3 += this.api.predictCooldown(YL, YY);
              }
            }
          }
          const Y6 = {
            errors: Y2,
            timeToEnd: Y3
          };
          return Y6;
        }
        ["checkTarget"](Y0) {
          return !this.api.palette.sameIds(this.template.get(Y0[0], Y0[1]), this.api.get(Y0[0] + this.template.x1, Y0[1] + this.template.y1));
        }
        ["handleTarget"](Y0) {
          const Y1 = this.template.get(Y0[0], Y0[1]);
          const Y2 = this.api.get(Y0[0] + this.template.x1, Y0[1] + this.template.y1);
          if (!this.api.palette.sameIds(Y1, Y2)) {
            return {
              'x': Y0[0] + this.template.x1,
              'y': Y0[1] + this.template.y1,
              'id': Y1
            };
          }
        }
        ["targetToPixel"](Y0) {
          return {
            'x': Y0[0] + this.template.x1,
            'y': Y0[1] + this.template.y1,
            'id': this.template.get(Y0[0], Y0[1])
          };
        }
        ["pixelToTarget"](Y0) {
          return [Y0.x - this.template.x1, Y0.y - this.template.y1];
        }
      };
      const L2 = class extends L1 {
        constructor(Y0, Y1, Y2) {
          super(Y0, Y1);
          this.targets = Y2(this.template);
          this.counter = new class {
            constructor(Y4) {
              this.max = Y4;
              this.value = 0;
            }
            ['get']() {
              return this.value;
            }
            ["inc"](Y4 = 1) {
              for (let Y6 = 0; Y6 !== Y4; Y6++) {
                this.value++;
                if (this.value === this.max) {
                  this.value = 0;
                }
              }
              return this.value;
            }
            ["deinc"]() {
              this.value--;
              if (-1 === this.value) {
                this.value = this.max - 1;
              }
              return this.value;
            }
          }(this.targets.length);
        }
        ["nexts"](Y0) {
          const Y1 = this.targets.length;
          const Y2 = [];
          const Y3 = this.handleTarget(this.targets[this.counter.get()]);
          if (Y3 && Y2.push(Y3) === Y0) {
            return Y2;
          }
          for (let Y4 = 0; Y4 !== Y1 && 0 !== this.counter.get(); Y4++) {
            const Y5 = this.handleTarget(this.targets[this.counter.deinc()]);
            if (!Y5) {
              break;
            }
            if (Y2.push(Y5) === Y0) {
              return Y2;
            }
          }
          for (let Y6 = 0; Y6 !== Y1; Y6++) {
            const Y8 = this.handleTarget(this.targets[this.counter.inc()]);
            if (Y8 && Y2.push(Y8) === Y0) {
              return Y2;
            }
          }
          return Y2;
        }
        ["countErrors"]() {
          return this.targets ? this.countErrorsUsingTargets() : this._countErrors();
        }
        ["countTargets"]() {
          return this.targets.length;
        }
        ["countErrorsUsingTargets"]() {
          const Y0 = this.api.palette;
          let Y1 = 0;
          let Y2 = 0;
          for (let Y4 = 0; Y4 !== this.targets.length; Y4++) {
            const Y5 = this.targets[Y4];
            const Y6 = Y5[0] + this.template.x1;
            const Y7 = Y5[1] + this.template.y1;
            if (!Y0.sameIds(this.template.get(Y5[0], Y5[1]), this.api.get(Y6, Y7))) {
              Y1++;
              Y2 += this.api.predictCooldown(Y6, Y7);
            }
          }
          const Y3 = {
            errors: Y1,
            timeToEnd: Y2
          };
          return Y3;
        }
      };
      const L3 = {};
      for (const Y0 in ag) L3[Y0] = (Y1, Y2) => new L2(Y1, Y2, ag[Y0]);
      const L4 = (Y1, Y2) => {
        if ("Notification" in window) {
          if ('granted' === Notification.permission) {
            new Notification(Y1, Y2);
          } else if ("denied" !== Notification.permission) {
            Notification.requestPermission(Y3 => 'granted' === Y3 && new Notification(Y1, Y2));
          }
        }
      };
      const L5 = (Y1, Y2, Y3 = []) => {
        const Y6 = document.createElement(Y1);
        if (!Y2) {
          return Y6;
        }
        const Y7 = {
          'mode': "open"
        };
        if (Y2.id) {
          Y6.setAttribute('id', Y2.id);
        }
        if (Y2["class"]) {
          Y6.setAttribute("class", Y2["class"]);
        }
        if (Y2.style) {
          Y6.setAttribute("style", Y2.style);
        }
        if (Y2.html) {
          Y6.innerHTML = Y2.html;
        } else if (Y2.text) {
          if (Y2.breakText) {
            Y6.innerText = Y2.text.split('').join('‎');
          } else {
            Y6.innerText = Y2.text;
          }
        }
        if (Y2.listeners) {
          Object.entries(Y2.listeners).forEach(([Y8, Y9]) => {
            if (Y8.startsWith('on')) {
              Y6.addEventListener(Y8.substring(2), Y9);
            } else {
              Y6.addEventListener(Y8, Y9);
            }
          });
        }
        if (Y2.attributes) {
          Object.entries(Y2.attributes).forEach(([Y8, Y9]) => Y6.setAttribute(Y8, Y9));
        }
        if (Y2.shadow) {
          Y6.attachShadow(Y7);
        }
        if (0 !== Y3.length) {
          const Y8 = Y6.shadowRoot || Y6;
          Y3.forEach(Y9 => Y8.appendChild(Y9));
        }
        return Y6;
      };
      const L7 = Y1 => new Promise((Y2, Y3) => {
        const Y4 = new Image();
        Y4.crossOrigin = '';
        Y4.onload = () => Y2(Y4);
        Y4.onerror = Y3;
        Y4.src = Y1;
      });
      const L8 = new Set();
      const L9 = () => (() => {
        let Y1 = 0;
        do {
          Y1 = parseInt(Math.random().toString().substring(2));
        } while (L8.has(Y1));
        L8.add(Y1);
        return Y1;
      })().toString().split('').map(Y1 => String.fromCharCode(65 + parseInt(Y1) % 26)).join('');
      const LY = Y1 => new Promise(Y2 => setTimeout(Y2, Y1));
      const LT = new RegExp(/-?\d+/g);
      const Lc = Y1 => {
        var Y2;
        return null === (Y2 = Y1.match(LT)) || undefined === Y2 ? undefined : Y2.map(parseFloat);
      };
      const LU = Y1 => {
        for (let Y2 = Y1.length - 1; -1 !== Y2; Y2--) {
          const Y3 = Math.floor(Math.random() * (Y2 + 1));
          const Y4 = Y1[Y2];
          Y1[Y2] = Y1[Y3];
          Y1[Y3] = Y4;
        }
        return Y1;
      };
      const Ln = (Y1, Y2, Y3) => {
        const Y4 = Y1[Y2];
        Y1[Y2] = Y1[Y3];
        Y1[Y3] = Y4;
      };
      const Lw = (Y1, Y2) => Y1.sort((Y3, Y4) => Y2(Y3) > Y2(Y4) ? 1 : -1);
      const LC = (Y1, Y2) => Y1.sort((Y3, Y4) => Y2(Y3) < Y2(Y4) ? 1 : -1);
      const Ly = Y1 => {
        let Y4 = 0;
        for (let Y5 = 0; Y5 !== Y1.length; Y5++) {
          Y4 = (Y4 << 5) - Y4 + Y1.charCodeAt(Y5);
          Y4 |= 0;
        }
        return Y4;
      };
      let Ll = null;
      document.addEventListener("keydown", Y1 => {
        if (Ll) {
          Y1.stopPropagation();
          Ll(Y1);
        }
      }, true);
      Ll = null;
      new DataView(new ArrayBuffer(4));
      new DataView(new ArrayBuffer(4));
      const LJ = (Y1, Y2 = "unnamed") => {
        const Y3 = document.createElement('a');
        Y3.setAttribute("href", Y1.toDataURL("image/png"));
        Y3.setAttribute('download', Y2);
        Y3.click();
      };
      var Lz;
      !function (Y1) {
        Y1[Y1.PING = 0] = 'PING';
        Y1[Y1.PING_ERROR = 1] = "PING_ERROR";
      }(Lz || (Lz = {}));
      const LG = class extends ay {
        constructor(Y1 = "https://voidserv.glitch.me") {
          super();
          this.online = null;
          this.url = Y1;
          (() => {
            var Y4;
            var Y6;
            var Y7;
            Y4 = this;
            Y7 = function* () {
              for (;;) {
                yield this.ping().then(Y8 => {
                  this.online = Y8;
                  this.emit(Lz.PING, this.online);
                })["catch"](Y8 => {
                  this.online = null;
                  this.emit(Lz.PING_ERROR, Y8);
                });
                yield LY(this.getPingDelay());
              }
            };
            new ((Y6 = undefined) || (Y6 = Promise))(function (Y8, Y9) {
              function YL(Yc) {
                try {
                  YT(Y7.next(Yc));
                } catch (Yn) {
                  Y9(Yn);
                }
              }
              function YY(Yc) {
                try {
                  YT(Y7['throw'](Yc));
                } catch (YU) {
                  Y9(YU);
                }
              }
              function YT(Yc) {
                var Yn;
                if (Yc.done) {
                  Y8(Yc.value);
                } else {
                  Yn = Yc.value;
                  (Yn instanceof Y6 ? Yn : new Y6(function (YV) {
                    YV(Yn);
                  })).then(YL, YY);
                }
              }
              YT((Y7 = Y7.apply(Y4, undefined || [])).next());
            });
          })();
        }
        ["getOnline"]() {
          return this.online;
        }
        ["getPingDelay"]() {
          return null === this.online ? 120000 : 900 * this.online + 40000;
        }
        ["ping"]() {
          return fetch(this.url + "/online", {
            'method': "POST"
          }).then(Y1 => Y1.text()).then(Y1 => +Y1);
        }
      };
      const Lj = {
        'void-bot': L9(),
        'half': L9(),
        'color-box': L9()
      };
      let LA = "#void-bot {\r\n\tbackground-color: black;\r\n\tcolor: red;\r\n\tpadding: 3px;\r\n\tposition: absolute;\r\n\ttop: 2%;\r\n\tright: 2%;\r\n\twidth: 40%;\r\n\tfont-weight: bold;\r\n}\r\n\r\n#void-bot input[type=\"checkbox\"] button select {\r\n\tcursor: pointer;\r\n}\r\n\r\n#void-bot input[type=\"number\"] {\r\n\tbackground-color: black;\r\n\tcolor: red;\r\n\tborder-color: darkred;\r\n\twidth: 60px;\r\n}\r\n\r\n#void-bot select {\r\n\tbackground-color: black;\r\n\tcolor: red;\r\n\tborder-color: darkred;\r\n\tfont: inherit;\r\n}\r\n\r\n#void-bot button {\r\n\tbackground-color: black;\r\n\tcolor: red;\r\n\tborder-color: darkred;\r\n\tfont: inherit;\r\n\tmargin: 5px;\r\n}\r\n\r\n#void-bot .half {\r\n\twidth: calc(50% - 5px);\r\n\tmargin-left:5px;\r\n}\r\n\r\n#void-bot .color-box {\r\n\tdisplay: inline-block;\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tborder: solid 1px darkred;\r\n}";
      Object.entries(Lj).forEach(([Y1, Y2]) => {
        LA = LA.replace(new RegExp(Y1, 'g'), Y2);
      });
      const LO = LA;
      var Lb;
      !function (Y1) {
        Y1[Y1.FOCUS = 0] = "FOCUS";
        Y1[Y1.BLUR = 1] = "BLUR";
        Y1[Y1.CHANGE_TEMPLATE_SRC = 2] = "CHANGE_TEMPLATE_SRC";
        Y1[Y1.CHANGE_TEMPLATE_X = 3] = "CHANGE_TEMPLATE_X";
        Y1[Y1.CHANGE_TEMPLATE_Y = 4] = "CHANGE_TEMPLATE_Y";
        Y1[Y1.SWITCH_BOT = 5] = 'SWITCH_BOT';
        Y1[Y1.CHANGE_STRATEGY = 6] = "CHANGE_STRATEGY";
        Y1[Y1.CHANGE_MOUSE_POSITION = 7] = "CHANGE_MOUSE_POSITION";
        Y1[Y1.BOTTING_ERROR = 8] = "BOTTING_ERROR";
        Y1[Y1.BOT_PROGRESS_INFO = 9] = "BOT_PROGRESS_INFO";
        Y1[Y1.PLACE_PIXELS = 10] = "PLACE_PIXELS";
        Y1[Y1.PIXELS = 11] = "PIXELS";
        Y1[Y1.CHANGE_STOP_ON_CAPTCHA = 12] = "CHANGE_STOP_ON_CAPTCHA";
        Y1[Y1.CAPTCHA = 13] = "CAPTCHA";
        Y1[Y1.SHOW_HEATMAP = 14] = "SHOW_HEATMAP";
        Y1[Y1.SHOW_HEATWEB = 15] = "SHOW_HEATWEB";
      }(Lb || (Lb = {}));
      const LF = {
        smartPlace: true,
        showErrors: true
      };
      const Lo = new ay();
      const LH = {};
      const LD = [16, 16];
      V(966);
      const LS = new Map();
      const Lp = Ly("zipper2").toString();
      LS.set(Lp, "zipper2");
      var LB = function (Y1, Y2, Y3, Y4) {
        return new (Y3 || (Y3 = Promise))(function (Y6, Y7) {
          function Y9(YY) {
            try {
              YL(Y4.next(YY));
            } catch (Yn) {
              Y7(Yn);
            }
          }
          function Ya(YY) {
            try {
              YL(Y4['throw'](YY));
            } catch (YU) {
              Y7(YU);
            }
          }
          function YL(YY) {
            var Yc;
            if (YY.done) {
              Y6(YY.value);
            } else {
              Yc = YY.value;
              (Yc instanceof Y3 ? Yc : new Y3(function (Yn) {
                Yn(Yc);
              })).then(Y9, Ya);
            }
          }
          YL((Y4 = Y4.apply(Y1, Y2 || [])).next());
        });
      };
      const Ls = new class {
        ["Println"](...Y1) {
          console.log("[INFO] ", ...Y1);
        }
      }();
      const LQ = new class {
        ["Println"](...Y1) {
          console.debug("[TRACE] ", ...Y1);
        }
      }();
      const LX = new class {
        ['Println'](...Y1) {
          console.warn("[TRACE] ", ...Y1);
        }
      }();
      var Lq;
      var Lk;
      !function (Y1) {
        Y1[Y1.BOT_PROGRESS_INFO = 0] = "BOT_PROGRESS_INFO";
        Y1[Y1.CAPTCHA = 1] = "CAPTCHA";
        Y1[Y1.LOOP_END = 2] = "LOOP_END";
      }(Lq || (Lq = {}));
      (function (Y1) {
        Y1[Y1.IDLE = 0] = "IDLE";
        Y1[Y1.STOPPING = 1] = "STOPPING";
        Y1[Y1.WORKS = 2] = "WORKS";
      })(Lk || (Lk = {}));
      class Li extends ay {
        constructor(Y1, Y2, Y3, Y4 = LF) {
          super();
          this.api = Y1;
          this.targeter = Y2;
          this.solver = Y3;
          this.options = Y4;
          this.status = Lk.IDLE;
          this.pings = [100];
          this.noRetcodeInRow = 0;
          this.captchaEmitted = false;
          this.targeterToSet = null;
          this.placingAborter = null;
          this.loopAborter = null;
        }
        ["start"]() {
          this.status = Lk.WORKS;
          return this.loop();
        }
        ["stop"]() {
          if (this.status !== Lk.IDLE) {
            if (!(this.status === Lk.STOPPING)) {
              this.status = Lk.STOPPING;
              this.abortPlacing();
              this.abortLoop();
            }
            return this.wait(Lq.LOOP_END);
          }
        }
        ["changeTargeter"](Y1) {
          this.abortPlacing();
          this.targeterToSet = Y1;
        }
        ["loop"]() {
          return LB(this, undefined, undefined, function* () {
            for (this.emit(Lq.BOT_PROGRESS_INFO, this.targeter.countErrors()); this.status === Lk.WORKS;) {
              if (null !== this.targeterToSet) {
                this.targeter = this.targeterToSet;
                this.targeterToSet = null;
              }
              const [Y4, Y5, Y6] = yield this.iteration();
              if (Y6) {
                return Y6;
              }
              if (this.status !== Lk.WORKS) {
                break;
              }
              Ls.Println("next tick after " + Y4.toString() + " :: " + Y5);
              this.loopAborter = new aU();
              yield Promise.any([LY(Y4), this.loopAborter.promise]);
              if (this.loopAborter) {
                this.loopAborter.destroy();
                this.loopAborter = null;
              }
            }
            this.status = Lk.IDLE;
            this.emit(Lq.LOOP_END);
            return null;
          });
        }
        ['iteration']() {
          return LB(this, undefined, undefined, function* () {
            const Y3 = this.api.info.minCd;
            const Y4 = this.api.pixelsCanPlace();
            if (this.api.info.haveStack && Y4 <= 1 || 0 === Y4) {
              const Y7 = this.api.getCooldown();
              let Y8 = 0;
              Y8 = Y7 < Y3 ? Y7 : Y7 - (0 + Math.floor(Math.random() * (Y3 - 0)));
              return [Y8, "cooldown", null];
            }
            const Y5 = this.targeter.nexts(Y4);
            if (0 === Y5.length) {
              return [3000 + Math.floor(Math.random() * (Math.min(5 * Y3, this.api.info.stack) - 3000)), "no pixels to place", null];
            }
            {
              LQ.Println("place", Y5.map(YY => '[' + YY.x + '_' + YY.y + " " + YY.id + ']').join(", "));
              let Ya = null;
              if (this.options.smartPlace) {
                this.placingAborter = new aU();
                try {
                  [, Ya] = yield this.api.smartPlace(Y5, this.placingAborter);
                } catch (YT) {
                  console.log(YT);
                } finally {
                  if (this.placingAborter) {
                    this.placingAborter.destroy();
                    this.placingAborter = null;
                  }
                }
              } else {
                const YV = Date.now();
                Ya = yield this.api.placePixels(Y5);
                Y6 = YV;
                const Yw = Date.now() - Y6;
                this.registerPing(Yw);
                LQ.Println("place ping", Yw);
              }
              if (Ya === av.errNoPlacePixelResult) {
                this.noRetcodeInRow++;
                if (this.noRetcodeInRow >= 3) {
                  return [0, '', ac];
                }
                LX.Println(av.errNoPlacePixelResult);
              } else if (Ya === av.errParallelPlace) {
                LX.Println(Ya);
              } else {
                this.noRetcodeInRow = 0;
              }
              switch (Ya) {
                case null:
                  this.captchaEmitted = false;
                  break;
                case aY:
                case av.errNoPlacePixelResult:
                  break;
                case av.errFullStack:
                  LX.Println("unexpected cooldown", this.api.getCooldown());
                  break;
                case av.errPixelProtected:
                  LX.Println("protected pixel");
                  L4("protected pixel, maybe admins catch you");
                  break;
                case av.errCaptcha:
                  if (null === this.solver) {
                    if (!this.captchaEmitted) {
                      this.emit(Lq.CAPTCHA);
                      this.captchaEmitted = true;
                    }
                  } else {
                    for (;;) {
                      Ls.Println("have captcha");
                      const YC = yield this.api.getCaptcha();
                      if (Ya) {
                        return [0, '', Ya];
                      }
                      Ls.Println("captcha loaded, send to solver...");
                      const Yy = yield this.solver.solve(YC);
                      Ls.Println("answer from solver \"" + Yy + "\", send to canvas...");
                      const YZ = yield this.api.sendAnswer(Yy);
                      if (YZ instanceof Error) {
                        return [0, '', YZ];
                      }
                      if (YZ) {
                        Ls.Println("solution is right");
                        break;
                      }
                      Ls.Println("solution is wrong, try again...");
                    }
                  }
                  return [6000, "tried place " + Y5.length + " pixels with CAPTCHA", null];
                default:
                  return [0, '', Ya];
              }
              const YL = this.targeter.countErrors();
              this.emit(Lq.BOT_PROGRESS_INFO, YL);
              return [50, this.options.showErrors ? "left " + YL.errors + " errors" : "pass", null];
            }
            var Y6;
          });
        }
        ["abortPlacing"]() {
          if (this.placingAborter) {
            Ls.Println("stop bot placing with aborter");
            this.placingAborter.abort();
          }
        }
        ["abortLoop"]() {
          if (this.loopAborter) {
            Ls.Println("stop bot loop with aborter");
            this.loopAborter.abort();
          }
        }
        ["registerPing"](Y1) {
          if (this.pings.length >= 5) {
            this.pings.shift();
          }
          this.pings.push(Y1);
        }
      }
      V(810);
      const LW = new Error("errCantFindElement");
      window.addEventListener("mousemove", () => {
        const Y1 = document.querySelector(".coorbox");
        if (!Y1) {
          throw LW;
        }
        const Y2 = Lc(Y1.textContent || '');
        if (Y2 && 2 === Y2.length) {
          Lo.emit(Lb.CHANGE_MOUSE_POSITION, [Y2[0], Y2[1]]);
        }
      });
      var Lr = function (Y1, Y2, Y3, Y4) {
        return new (Y3 || (Y3 = Promise))(function (Y6, Y7) {
          function Y9(YY) {
            try {
              YL(Y4.next(YY));
            } catch (YT) {
              Y7(YT);
            }
          }
          function Ya(YY) {
            try {
              YL(Y4["throw"](YY));
            } catch (Yc) {
              Y7(Yc);
            }
          }
          function YL(YY) {
            var YT;
            if (YY.done) {
              Y6(YY.value);
            } else {
              YT = YY.value;
              (YT instanceof Y3 ? YT : new Y3(function (YU) {
                YU(YT);
              })).then(Y9, Ya);
            }
          }
          YL((Y4 = Y4.apply(Y1, Y2 || [])).next());
        });
      };
      if (!L3.zipper2) {
        throw aT;
      }
      const LN = {
        localStorageKey: "darkness_bot"
      };
      LH.storage = new class extends aC {
        constructor(Y1) {
          super();
          this.localStorageData = {};
          this.data = {};
          this.localStorageKey = "storage";
          if (Y1 && Y1.localStorageKey) {
            this.localStorageKey = Y1.localStorageKey;
          }
          this.load();
        }
        ["set"](Y1, Y2, Y3 = true) {
          if (Y3 && Y1 in this.data || !Y3 && Y1 in this.localStorageData) {
            throw new Error("try to duplicate field \"" + Y1 + "\" with value \"" + Y2 + "\"");
          }
          if (Y3) {
            this.emit("beforeChangeLC." + Y1, Y2);
            this.localStorageData[Y1] = Y2;
            this.save();
            this.emit("afterChangeLC." + Y1, Y2);
          } else {
            this.emit("beforeChange." + Y1, Y2);
            this.data[Y1] = Y2;
            this.emit("afterChange." + Y1, Y2);
          }
        }
        ["get"](Y1) {
          return Y1 in this.data ? this.data[Y1] : Y1 in this.localStorageData ? this.localStorageData[Y1] : null;
        }
        ["has"](Y1) {
          return Y1 in this.data || Y1 in this.localStorageData;
        }
        ['save']() {
          if (Object.keys(this.localStorageData).length) {
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.localStorageData));
          }
        }
        ["load"]() {
          const Y1 = localStorage.getItem(this.localStorageKey);
          if (null !== Y1) {
            this.localStorageData = JSON.parse(Y1);
          }
        }
      }(LN);
      if (!LH.storage.has("strategy")) {
        LH.storage.set("strategy", "zipper2");
      }
      if (!LH.storage.has("stopOnCaptcha")) {
        LH.storage.set("stopOnCaptcha", true);
      }
      const LR = new class {
        constructor() {
          var Y2;
          var Y3;
          var Y4;
          var Y5;
          const Y6 = {
            'text': 'null'
          };
          const Y7 = {
            'text': '?'
          };
          const Y8 = {
            breakText: true,
            text: "progress: "
          };
          const Y9 = {
            text: '?'
          };
          const Ya = {
            text: '?'
          };
          const YL = {
            'type': 'checkbox'
          };
          const YY = {
            html: LO
          };
          this.addStrategy = Yc => {
            const YU = Ly(Yc).toString();
            LS.set(YU, Yc);
            this.strategyElement.appendChild(L5("option", {
              'breakText': true,
              'text': Yc,
              'attributes': {
                'value': YU
              }
            }));
          };
          this.root = L5('div', {
            'id': Lj["void-bot"],
            'style': "\n\t\t\t\ttop: " + (null !== (Y2 = LH.storage.get("window.y")) && undefined !== Y2 ? Y2 : LD[1]) + "px;"
          }, [this.title = L5('div', {
            'style': "font-size: 110%; cursor: move;",
            'breakText': true,
            'text': "Make Void great again!"
          }), L5('hr', {
            'style': "border-color: darkred; margin: 3px 0px 3px 0px;"
          }), this.left = L5('div', {
            'class': Lj.half,
            'style': "float: left;"
          }), this.right = L5('div', {
            'class': Lj.half,
            'style': "float: right;"
          })]);
          this.right.appendChild(L5('div', {
            'breakText': true,
            'text': "online: "
          }, [this.botOnline = L5("span", Y6)]));
          this.right.appendChild(L5('div', {
            'breakText': true,
            'text': "status: "
          }, [this.botStatusElement = L5("span")]));
          this.right.appendChild(L5("div", {
            'breakText': true,
            'text': "cooldown: "
          }, [this.timerElement = L5("span")]));
          this.right.appendChild(L5('div', {
            'breakText': true,
            'text': "errors: "
          }, [this.errorsAmount = L5("span", Y7)]));
          this.right.appendChild(L5('div', Y8, [this.progress = L5("span", Y9)]));
          this.right.appendChild(L5('div', {
            'breakText': true,
            'text': "end in: "
          }, [this.buildPredict = L5('span', Ya)]));
          this.right.appendChild(L5('div', {
            'breakText': true,
            'text': "placed: "
          }, [this.placedPixel = L5("span", {
            'breakText': true,
            'text': "x y"
          }), this.placedPixelColor = L5("span", {
            'class': Lj["color-box"]
          })]));
          this.left.appendChild(L5('div', {}, [L5("span", {
            'text': "x: "
          }, [this.xInput = L5("input", {
            'listeners': {
              'input': () => Lo.emit(Lb.CHANGE_TEMPLATE_X, +this.xInput.value)
            },
            'attributes': {
              'type': "number",
              'value': (null === (Y3 = LH.storage.get("template.x")) || undefined === Y3 ? undefined : Y3.toString()) || ''
            }
          })]), L5("span", {
            'text': "y: "
          }, [this.yInput = L5("input", {
            'listeners': {
              'input': () => Lo.emit(Lb.CHANGE_TEMPLATE_Y, +this.yInput.value)
            },
            'attributes': {
              'type': "number",
              'value': (null === (Y4 = LH.storage.get("template.y")) || undefined === Y4 ? undefined : Y4.toString()) || ''
            }
          })])]));
          this.left.appendChild(L5('div', {
            'breakText': true,
            'text': "strategy: "
          }, [this.strategyElement = L5("select", {
            'listeners': {
              'change': () => {
                const Yn = LS.get(this.strategyElement.value);
                if (Yn) {
                  Lo.emit(Lb.CHANGE_STRATEGY, Yn);
                } else {
                  console.warn("cant define strategy for hash \"" + this.strategyElement.value + "\"\nuse default (\"zipper2\")");
                  Lo.emit(Lb.CHANGE_STRATEGY, "zipper2");
                }
              }
            }
          })]));
          this.left.appendChild(L5('div', {}, [this.captchaStop = L5('input', {
            'attributes': YL,
            'listeners': {
              'click': () => Lo.emit(Lb.CHANGE_STOP_ON_CAPTCHA, this.captchaStop.checked)
            }
          }), L5("span", {
            'breakText': true,
            'text': "stop on captcha"
          })]));
          this.captchaStop.checked = null !== (Y5 = LH.storage.get("stopOnCaptcha")) && undefined !== Y5 ? Y5 : true;
          this.left.appendChild(L5('input', {
            'style': "background-color: black; border-color: darkRed; color: red;",
            'attributes': {
              'type': "file",
              'style': "width:100%;"
            },
            'listeners': {
              'change': Yc => {
                const YU = new FileReader();
                const {
                  files: Yn
                } = Yc.composedPath()[0];
                if (Yn && Yn.length) {
                  YU.readAsDataURL(Yn[0]);
                  YU.onerror = console.error;
                  YU.onload = () => Lo.emit(Lb.CHANGE_TEMPLATE_SRC, YU.result);
                }
              }
            }
          }));
          this.left.appendChild(L5("button", {
            'text': 'heatmap',
            'breakText': true,
            'listeners': {
              'click': () => Lo.emit(Lb.SHOW_HEATMAP)
            }
          }));
          this.left.appendChild(L5("button", {
            'text': "heatweb",
            'breakText': true,
            'listeners': {
              'click': () => Lo.emit(Lb.SHOW_HEATWEB)
            }
          }));
          this.left.appendChild(L5("button", {
            'breakText': true,
            'text': 'on/off',
            'listeners': {
              'click': () => Lo.emit(Lb.SWITCH_BOT)
            }
          }));
          document.body.appendChild(this.root);
          document.head.appendChild(L5("style", YY));
          let YT = LH.storage.get('window.x');
          this.root.style.left = YT ? YT.toString() + 'px' : (unsafeWindow.innerWidth - this.root.offsetWidth - LD[0]).toString() + 'px';
          ((Yc, YU, Yn) => {
            let Yw = 0;
            let YC = 0;
            let Yy = 0;
            let YZ = 0;
            YU.style.top = Math.max(0, Math.min(YU.offsetTop, unsafeWindow.innerHeight - YU.offsetHeight)) + 'px';
            YU.style.left = Math.max(0, Math.min(YU.offsetLeft, unsafeWindow.innerWidth - YU.offsetWidth)) + 'px';
            const YJ = YG => {
              YG.preventDefault();
              Yw = Yy - YG.clientX;
              YC = YZ - YG.clientY;
              Yy = YG.clientX;
              YZ = YG.clientY;
              YU.style.top = Math.max(0, Math.min(YU.offsetTop - YC, unsafeWindow.innerHeight - YU.offsetHeight)) + 'px';
              YU.style.left = Math.max(0, Math.min(YU.offsetLeft - Yw, unsafeWindow.innerWidth - YU.offsetWidth)) + 'px';
            };
            const Yz = () => {
              window.removeEventListener("mouseup", Yz);
              window.removeEventListener("mousemove", YJ);
              const Yj = Lc(YU.style.left);
              const YI = Lc(YU.style.top);
              if (Yj && YI && Yn) {
                Yn(Yj[0], YI[0]);
              }
            };
            Yc.addEventListener("mousedown", YG => {
              YG.preventDefault();
              Yy = YG.clientX;
              YZ = YG.clientY;
              window.addEventListener("mouseup", Yz);
              window.addEventListener('mousemove', YJ);
            });
          })(this.title, this.root, (Yc, YU) => {
            LH.storage.set("window.x", Yc);
            LH.storage.set("window.y", YU);
          });
        }
        ["setBotOnline"](Y1) {
          this.botOnline.innerText = null === Y1 ? '?' : Y1.toString();
        }
        ["setBotStatus"](Y1) {
          this.botStatusElement.innerText = ("string" == typeof Y1 ? Y1 : Y1.message).split('').join('‎');
        }
        ["setCooldown"](Y1) {
          this.timerElement.innerText = null === Y1 ? '?' : Y1.toFixed(2).toString();
        }
        ["setBuildPredict"](Y1, Y2) {
          if (null === Y1) {
            this.buildPredict.innerText = '?';
          } else {
            const Y4 = [Y1];
            if (undefined !== Y2 && Y1 !== Y2) {
              Y4.push(Y2);
            }
            if (Y4[0] > 7200) {
              this.buildPredict.innerText = Y4.map(Y5 => Y5 / 3600).map(Y5 => Y5.toFixed(1)).join('-') + 'h';
            } else if (Y4[0] > 120) {
              this.buildPredict.innerText = Y4.map(Y5 => Y5 / 60).map(Y5 => Y5.toFixed(1)).join('-') + 'm';
            } else {
              this.buildPredict.innerText = Y4.map(Y5 => Y5.toFixed(1)).join('-') + 's';
            }
          }
        }
        ["setProgress"](Y1, Y2) {
          if (null === Y1) {
            if (undefined === Y2) {
              this.errorsAmount.innerText = '?';
              this.progress.innerText = '?';
            } else {
              this.errorsAmount.innerText = '?';
              this.progress.innerText = '?/' + this.formatIntNumbers(Y2)[0];
            }
          } else {
            if (undefined === Y2) {
              this.errorsAmount.innerText = this.formatIntNumbers(Y1)[0];
              this.progress.innerText = '?';
            } else {
              const Y4 = Y2 - Y1;
              const Y5 = (Y4 / Y2 * 100).toFixed(2);
              this.errorsAmount.innerText = this.formatIntNumbers(Y1)[0];
              this.progress.innerText = this.formatIntNumbers(Y4, Y2).join('/') + (" (" + Y5 + '%)');
            }
          }
        }
        ["formatIntNumbers"](...Y1) {
          const Y2 = Y1.some(Y3 => Y3 > 1000) ? 1000 : 0;
          return Y1.map(Y3 => (Y3 = Math.floor(Y3), 0 === Y2 ? Y3.toString() : (Y3 / Y2).toFixed(1) + 'k'));
        }
        ["setLastPlaced"](Y1, Y2, Y3) {
          this.placedPixel.innerText = Y1 + " " + Y2 + " ";
          if ("number" == typeof Y3) {
            this.placedPixelColor.style.background = "transparent";
            this.placedPixelColor.innerText = Y3.toString();
          } else {
            this.placedPixelColor.style.background = 'rgb(' + Y3 + ')';
          }
        }
        ["changeStrategy"](Y1) {
          const Y2 = Ly(Y1).toString();
          LS.set(Y2, Y1);
          const Y3 = Array.from(this.strategyElement.querySelectorAll("option")).find(Y4 => Y4.value === Y2);
          return !!Y3 && (Y3.setAttribute("selected", ''), true);
        }
        ["setTemplatePosition"](Y1, Y2) {
          this.xInput.value = Y1.toString();
          this.yInput.value = Y2.toString();
        }
      }();
      LR.setBotStatus("idle");
      const Lx = new aE(() => Lr(undefined, undefined, undefined, function* () {
        const Y1 = yield Lg.get();
        if (!Y1) {
          return null;
        }
        yield LM();
        const Y2 = yield Lm.get();
        if (!Y2) {
          return null;
        }
        const Y3 = new Li(Y1, Y2, null).on(Lq.BOT_PROGRESS_INFO, Y4 => Lo.emit(Lb.BOT_PROGRESS_INFO, Y4)).on(Lq.CAPTCHA, () => Lo.emit(Lb.CAPTCHA));
        Lf("bot instance is ready");
        return Y3;
      }), Y1 => {
        Lf("cant create bot");
        Lf(Y1);
        LR.setBotStatus("error");
      });
      const Lm = new aE(() => Lr(undefined, undefined, undefined, function* () {
        const [Y2, Y3] = yield Promise.all([Lh.get(), Lg.get()]);
        if (!Y2 || !Y3) {
          return null;
        }
        !function (Y7, Y8) {
          if (Y7.readyState !== L0.QUANTIZED) {
            const Y9 = performance.now();
            Y7.quantize(Y8.palette);
            Lf("template quantized in", ((performance.now() - Y9) / 1000).toFixed(3), 's.');
          }
        }(Y2, Y3);
        const Y4 = LH.storage.has("strategy") && LH.storage.get("strategy") in L3 ? LH.storage.get("strategy") : "zipper2";
        const Y5 = performance.now();
        const Y6 = ((Y7, Y8, Y9) => "string" == typeof Y9 ? Y9 in L3 ? L3[Y9](Y7, Y8) : undefined : new L2(Y7, Y8, Y9))(Y3, Y2, Y4) || null;
        if (!Y6) {
          throw aa;
        }
        Lf("targeter is ready in", ((performance.now() - Y5) / 1000).toFixed(3), 's.');
        return Y6;
      }), Y1 => {
        Lf("cant create targeter");
        Lf(Y1);
        LR.setBotStatus(Y1);
      });
      const Lh = new aE(() => Lr(undefined, undefined, undefined, function* () {
        const Y1 = LH.storage.get("template.x");
        const Y2 = LH.storage.get('template.y');
        if (null === Y1 || null === Y2) {
          throw a8;
        }
        const Y3 = LH.storage.get("template.src");
        if (!Y3) {
          throw a7;
        }
        return new L0({
          'name': Y3.startsWith("data:image") ? "cached" : Y3.split('/')[0] || 'unknown',
          'x': Y1,
          'y': Y2
        }).load(Y3).then(Y4 => (Lf("template is ready"), Y4));
      }), Y1 => {
        Lf("cant load template");
        Lf(Y1);
        LR.setBotStatus(Y1);
      });
      const Lg = new aE(() => Lr(undefined, undefined, undefined, function* () {
        const Y3 = (() => {
          if (/.*:\/\/.*(PixMap)|(fuckyouarkeros)\.fun.*/.test(location.origin)) {
            const Y5 = location.hash.match(/#[a-z]/g);
            const Y6 = {
              d: aS.PMF_EARTH,
              m: aS.PMF_MOON,
              c: aS.PMF_CORONA,
              y: aS.PMF_PZ,
              z: aS.PMF_PC,
              w: aS.PMF_BIT,
              t: aS.PMF_TOP
            };
            return Y5 && Y5.length ? Y6[Y5[0][1]] : undefined;
          }
        })();
        if (undefined === Y3 || !(Y3 in aS)) {
          throw a9;
        }
        const Y4 = yield (Y5 => am[Y5]())(Y3);
        Lf("api is ready");
        Y4.on(aJ.PLACE_PIXELS, Y5 => Lo.emit(Lb.PLACE_PIXELS, Y5));
        Y4.on(aJ.PIXELS, Y5 => Lo.emit(Lb.PIXELS, Y5));
        return Y4;
      }), Y1 => (Lf("cant create api"), Lf(Y1), LR.setBotStatus(Y1), Promise.resolve(null)));
      function Le() {
        return Lr(this, undefined, undefined, function* () {
          const Y5 = yield Lx.get();
          if (Y5) {
            switch (Y5.status) {
              case Lk.WORKS:
                Y5.stop();
                break;
              case Lk.IDLE:
                Lu(Y5.start());
            }
          }
        });
      }
      function Lf(...Y1) {
        console.debug("[DB]", ...Y1.map(Y2 => "object" == typeof Y2 && Y2.hasOwnProperty("toString") ? Y2.toString() : Y2));
      }
      function LK() {
        return Lr(this, undefined, undefined, function* () {
          yield Lm.clear();
          if (Lx.ready) {
            const Y5 = yield Lm.get();
            const Y6 = Lx.now();
            if (!Y6 || !Y5) {
              const Y7 = [];
              if (!Y6) {
                Y7.push("bot");
              }
              if (!Y5) {
                Y7.push("targeter");
              }
              return void Lf("cant change targeter because " + Y7.join(" and ") + " is missing");
            }
            yield LM();
            Y6.changeTargeter(Y5);
          } else {
            yield LM();
          }
        });
      }
      function LM() {
        return Lr(this, undefined, undefined, function* () {
          const [Y2, Y3] = yield Promise.all([Lg.get(), Lh.get()]);
          if (!Y2 || !Y3) {
            const Y8 = [];
            if (!Y2) {
              Y8.push('api');
            }
            if (!Y3) {
              Y8.push("template");
            }
            return void Lf("cant change workspace because " + Y8.join(" and ") + " is missing");
          }
          let Y4 = false;
          let Y5 = Lx.now();
          if (Y5 && Y5.status !== Lk.IDLE) {
            Y4 = true;
            yield Y5.stop();
          }
          const Y6 = Y2.createWorkspace(...Y3.toArray());
          if (!Y2.hasWorkspace(Y6)) {
            yield Y2.changeWorkspace(Y6);
          }
          if (Y4) {
            Y5 = Lx.now();
            if (Y5) {
              Lu(Y5.start());
            }
          }
        });
      }
      function Lu(Y1) {
        LR.setBotStatus('works');
        return Y1.then(Y3 => {
          if (Y3) {
            Lf("error returned", Y3);
            Lo.emit(Lb.BOTTING_ERROR, Y3);
          } else {
            LR.setBotStatus("idle");
          }
        });
      }
      LH.bot = Lx;
      LH.targeter = Lm;
      LH.api = Lg;
      LH.template = Lh;
      unsafeWindow.db = LH;
      Lr(undefined, undefined, undefined, function* () {
        var Y2;
        yield (() => {
          const Y6 = [Lg.get()];
          if (LH.storage.has("template.x") && LH.storage.has('template.y') && LH.storage.has("template.src")) {
            Y6.push(Lh.get());
          }
          return Promise.all(Y6);
        })();
        setInterval(() => Lr(undefined, undefined, undefined, function* () {
          const Y6 = yield Lg.get();
          LR.setCooldown(Y6 ? Y6.getCooldown() / 1000 : null);
        }), 110);
        const Y3 = new LG("https://voidserv.glitch.me");
        Y3.on(Lz.PING, Y6 => LR.setBotOnline(Y6));
        Y3.on(Lz.PING_ERROR, Y6 => {
          console.error(Y6);
          LR.setBotOnline(null);
        });
        const Y4 = {
          worldX: 0x0,
          worldY: 0x0
        };
        Lo.on(Lb.CHANGE_TEMPLATE_X, Y6 => Lr(undefined, undefined, undefined, function* () {
          var Y7;
          var Y8;
          LH.storage.set('template.x', Y6);
          if (Lh.ready) {
            yield null === (Y7 = Lx.now()) || undefined === Y7 ? undefined : Y7.stop();
            if (!(null === (Y8 = Lh.now()) || undefined === Y8)) {
              Y8.moveX(Y6);
            }
          }
        }));
        Lo.on(Lb.CHANGE_TEMPLATE_Y, Y6 => Lr(undefined, undefined, undefined, function* () {
          var Y7;
          var Y8;
          LH.storage.set("template.y", Y6);
          yield null === (Y7 = Lx.now()) || undefined === Y7 ? undefined : Y7.stop();
          if (!(null === (Y8 = Lh.now()) || undefined === Y8)) {
            Y8.moveY(Y6);
          }
        }));
        Lo.on(Lb.CHANGE_TEMPLATE_SRC, Y6 => Lr(undefined, undefined, undefined, function* () {
          LH.storage.set("template.src", Y6);
          yield Lh.clear();
          LK();
        }));
        Lo.on(Lb.CHANGE_MOUSE_POSITION, ([Y6, Y7]) => {
          Y4.worldX = Y6;
          Y4.worldY = Y7;
        });
        Lo.on(Lb.SWITCH_BOT, Le);
        Lo.on(Lb.CHANGE_STRATEGY, Y6 => {
          LH.storage.set("strategy", Y6);
          Lf("change strategy to \"" + Y6 + "\"");
          LK();
        });
        Object.keys(L3).forEach(Y6 => LR.addStrategy(Y6));
        LR.changeStrategy(null !== (Y2 = LH.storage.get("strategy")) && undefined !== Y2 ? Y2 : "zipper2");
        Lo.on(Lb.BOTTING_ERROR, Y6 => {
          var Y7;
          LR.setBotStatus("error");
          if (!(null === (Y7 = Lx.now()) || undefined === Y7)) {
            Y7.stop();
          }
          Lf(Y6);
        });
        Lo.on(Lb.BOT_PROGRESS_INFO, Y6 => Lr(undefined, undefined, undefined, function* () {
          var Y7;
          var Y8;
          const [Ya, YL] = Y6 ? [Y6.errors, Y6.timeToEnd] : [null, null];
          const YY = null !== (Y8 = null === (Y7 = Lm.now()) || undefined === Y7 ? undefined : Y7.countTargets()) && undefined !== Y8 ? Y8 : undefined;
          if (YL) {
            if (YL instanceof Array) {
              LR.setBuildPredict(YL[0] / 1000, YL[1] / 1000);
            } else {
              LR.setBuildPredict(YL / 1000);
            }
          }
          LR.setProgress(Ya, YY);
        }));
        Lo.on(Lb.PLACE_PIXELS, Y6 => {
          var Y7;
          const Ya = Y6[Y6.length - 1];
          if (Ya) {
            const YL = Lg.now();
            LR.setLastPlaced(Ya.x, Ya.y, null !== (Y7 = null == YL ? undefined : YL.palette.idToRGB(Ya.id)) && undefined !== Y7 ? Y7 : Ya.id);
          }
        });
        Lo.on(Lb.CAPTCHA, () => {
          var Y8;
          var Y9;
          if (null !== (Y8 = LH.storage.get("stopOnCaptcha")) && undefined !== Y8 ? Y8 : true) {
            if (!(null === (Y9 = Lx.now()) || undefined === Y9)) {
              Y9.stop();
            }
          }
          L4("you need solve CAPTCHA");
        });
        Lo.on(Lb.SHOW_HEATMAP, () => Lr(undefined, undefined, undefined, function* () {
          const Y6 = yield Lm.get();
          if (!Y6) {
            return;
          }
          const Y7 = (Y8 => {
            if (!(Y8 instanceof L2)) {
              return;
            }
            const {
              width: Ya,
              height: YL,
              targets: YY
            } = Y8;
            const YT = document.createElement("canvas").getContext('2d');
            YT.canvas.width = Ya;
            YT.canvas.height = YL;
            const Yc = YT.getImageData(0, 0, Ya, YL);
            const {
              data: YU
            } = Yc;
            YY.forEach((Yn, YV) => {
              const Yw = Math.floor((YY.length - YV) / YY.length * 255);
              const YC = Yn[1] * Ya + Yn[0] << 2;
              YU[0 | YC] = Yw;
              YU[3 | YC] = 255;
            });
            YT.putImageData(Yc, 0, 0);
            return YT;
          })(Y6);
          if (Y7) {
            const Y9 = yield Lh.get();
            const Ya = (null == Y9 ? undefined : Y9.name) ? Y9.name + '_' + (LH.storage.get('strategy') || "nostrat") : undefined;
            LJ(Y7.canvas, Ya);
          } else {
            Lf("heatmap canvas is undefined");
          }
        }));
        Lo.on(Lb.SHOW_HEATWEB, () => Lr(undefined, undefined, undefined, function* () {
          const Y8 = yield Lm.get();
          if (!Y8) {
            return;
          }
          const Y9 = (Ya => {
            if (!(Ya instanceof L2)) {
              return;
            }
            const {
              width: YL,
              height: YY,
              targets: YT
            } = Ya;
            const Yc = new Array(YT.length << 1);
            const YU = new Array(YT.length);
            YT.forEach((YV, Yw) => {
              Yc[Yw << 1 | 0] = YV[0].toString();
              Yc[Yw << 1 | 1] = YV[1].toString();
              YU[Yw] = Ya.template.get(YV[0], YV[1]).toString();
            });
            const Yn = Ya.api.palette.colors.flat();
            return "\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t\t<body style=\"background: black;\">\n\t\t\t\t<div style=\"position: absolute; top: 0; left: 0; height: 100%\">\n\t\t\t\t\t<canvas style=\"height: 100%; border: 1px red solid; background: rgba(64, 64, 64, 0.3);\"></canvas>\n\t\t\t\t</div>\n\t\t\t\t<script>\n\t\t\t\t\tconst width = " + YL + ";\n\t\t\t\t\tconst height = " + YY + ";\n\t\t\t\t\tconst ctx = document.querySelector('canvas').getContext('2d');\n\t\t\t\t\tctx.canvas.width = width;\n\t\t\t\t\tctx.canvas.height = height;\n\t\t\t\t\tctx.clearRect(0, 0, width, height);\n\n\t\t\t\t\tctx.mozImageSmoothingEnabled = false;\n\t\t\t\t\tctx.webkitImageSmoothingEnabled = false;\n\t\t\t\t\tctx.msImageSmoothingEnabled = false;\n\t\t\t\t\tctx.imageSmoothingEnabled = false;\n\n\t\t\t\t\tconst delay = 100;\n\t\t\t\t\tconst pixelsAtOnce = 10;\n\n\t\t\t\t\tconst targets = new Uint16Array([" + Yc.join(',') + "]);\n\t\t\t\t\tconst colors = new Uint8Array([" + YU.join(',') + "]);\n\t\t\t\t\tconst palette = new Uint8Array([" + Yn.join(',') + "]);\n\n\t\t\t\t\t(async () => {\n\t\t\t\t\t\tlet prevClrId = -1;\n\t\t\t\t\t\tfor (let i = 0; i !== targets.length; i+=2) {\n\t\t\t\t\t\t\tconst id = colors[i >> 1];\n\t\t\t\t\t\t\tif (prevClrId !== id) {\n\t\t\t\t\t\t\t\tconst j = id * 3;\n\t\t\t\t\t\t\t\tctx.fillStyle = 'rgb(' + [palette[j], palette[j + 1], palette[j + 2]] + ')';\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tctx.fillRect(targets[i], targets[i | 1], 1, 1)\n\t\t\t\t\t\t\tconst a = (i >> 1) / pixelsAtOnce;\n\t\t\t\t\t\t\tif (~~a === a) {\n\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, delay));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t})();\n\t\t\t\t</script>\n\t\t\t</body>\n\t\t</html>";
          })(Y8);
          if (Y9) {
            const Ya = yield Lh.get();
            ((YL, YY = "unnamed") => {
              const Yc = document.createElement('a');
              Yc.setAttribute("href", "data:text/html;charset=utf-8," + encodeURIComponent(YL));
              Yc.setAttribute('download', YY);
              Yc.click();
            })(Y9, (null == Ya ? undefined : Ya.name) ? Ya.name + '_' + (LH.storage.get("strategy") || "nostrat") : undefined);
          }
        }));
        window.addEventListener("keydown", ({
          code: Y6
        }) => {
          if (!document.querySelector(".show form") && !document.querySelector("#wm .show")) {
            switch (Y6) {
              case "KeyB":
                Le();
                break;
              case "KeyN":
                Lo.emit(Lb.CHANGE_TEMPLATE_X, 0x0);
                Lo.emit(Lb.CHANGE_TEMPLATE_Y, 0x0);
                LR.setTemplatePosition(0x0, 0x0);
            }
          }
        });
      });
    })();
  })();
}
(function checkAndRun() {
  const V = function () {
    let E = true;
    return function (J, z) {
      const j = E ? function () {
        if (z) {
          const I = z.apply(J, arguments);
          z = null;
          return I;
        }
      } : function () {};
      E = false;
      return j;
    };
  }();
  const w = V(this, function () {
    return w.toString().search("(((.+)+)+)+$").toString().constructor(w).search("(((.+)+)+)+$");
  });
  w();
  const C = function () {
    let J = true;
    return function (z, G) {
      const j = J ? function () {
        if (G) {
          const I = G.apply(z, arguments);
          G = null;
          return I;
        }
      } : function () {};
      J = false;
      return j;
    };
  }();
  const y = C(this, function () {
    let Z;
    try {
      const J = Function("return (function() {}.constructor(\"return this\")( ));");
      Z = J();
    } catch (z) {
      Z = window;
    }
    const l = Z.console = Z.console || {};
    const E = ["log", "warn", "info", 'error', 'exception', "table", "trace"];
    for (let j = 0; j < E.length; j++) {
      const I = C.constructor.prototype.bind(C);
      const A = E[j];
      const O = l[A] || I;
      I.__proto__ = C.bind(C);
      I.toString = O.toString.bind(O);
      l[A] = I;
    }
  });
  y();
  console.log("checking...");
  if (document.readyState === "complete" && document.querySelector("canvas") && document.querySelector(".coorbox")) {
    console.log("run bot");
    payload();
  } else {
    setTimeout(checkAndRun, 100);
  }
})();
fetch = () => Promise.resolve(undefined);
