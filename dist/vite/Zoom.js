import H, { useRef as I, useState as f, useMemo as Z } from "react";
const e = {
  height: 400,
  width: 100,
  maxwidth: 400,
  repeat: "no-repeat",
  position: "center",
  size: 100,
  bgsize: "cover",
  cursor: "zoom-in",
  borderpixel: 1,
  bordercolor: "#ddd",
  imagesrc: "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662844267/icons/github/Screenshot_63_ll09rf.png"
}, B = ({
  className: $,
  height: s = e.height,
  borderpixel: r = e.borderpixel,
  bordercolor: i = e.bordercolor,
  maxwidth: c = e.maxwidth,
  width: a = e.width,
  repeat: d = e.repeat,
  position: u = e.position,
  size: h = e.size,
  bgsize: g = e.bgsize,
  cursor: l = e.cursor,
  imagesrc: p = e.imagesrc,
  style: m
}) => {
  const n = I(null), [t, b] = f(!1), [M, x] = f(""), w = () => {
    b(!0);
  }, R = () => {
    b(!1);
  }, k = (o) => {
    var v;
    const { left: P, top: S, width: E, height: O } = ((v = n.current) == null ? void 0 : v.getBoundingClientRect()) ?? {
      left: 0,
      top: 0,
      width: 1,
      height: 1
    }, _ = (o.pageX - P) / E * 100, L = (o.pageY - S) / O * 100;
    x(`${_}% ${L}%`);
  }, y = () => {
    var o;
    (o = n.current) == null || o.style.setProperty("background-position", "center"), R();
  }, z = Z(
    () => ({
      backgroundImage: `url(${p})`,
      height: `${s}px`,
      maxWidth: `${c}px`,
      width: `${a}%`,
      backgroundRepeat: d,
      cursor: l,
      backgroundPosition: t ? M : u,
      backgroundSize: t ? `${h}%` : g,
      border: t ? `${r}px solid ${i}` : "",
      ...m
    }),
    [
      p,
      s,
      c,
      a,
      d,
      l,
      t,
      M,
      u,
      h,
      g,
      r,
      i,
      m
    ]
  );
  return /* @__PURE__ */ H.createElement(
    "div",
    {
      ref: n,
      className: $,
      onMouseEnter: w,
      onMouseLeave: y,
      onMouseMove: k,
      style: z
    }
  );
};
export {
  B as Zoom
};
