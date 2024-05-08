import React, {
  CSSProperties,
  useState,
  useMemo,
  useRef,
  MouseEvent,
} from "react";

export interface ZoomProps {
  className?: string;
  height?: number;
  width?: number;
  maxwidth?: number;
  repeat?: string;
  position?: string;
  bgsize?: string;
  cursor?: string;
  bordercolor?: string;
  size?: number;
  imagesrc?: string;
  borderpixel?: number;
  style?: CSSProperties;
}

const DEFAULT_ZOOM_PROPS: ZoomProps = {
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
  imagesrc:
    "https://res.cloudinary.com/dacp0r5b7/image/upload/v1662844267/icons/github/Screenshot_63_ll09rf.png",
};

export const Zoom: React.FC<ZoomProps> = ({
  className,
  height = DEFAULT_ZOOM_PROPS.height,
  borderpixel = DEFAULT_ZOOM_PROPS.borderpixel,
  bordercolor = DEFAULT_ZOOM_PROPS.bordercolor,
  maxwidth = DEFAULT_ZOOM_PROPS.maxwidth,
  width = DEFAULT_ZOOM_PROPS.width,
  repeat = DEFAULT_ZOOM_PROPS.repeat,
  position = DEFAULT_ZOOM_PROPS.position,
  size = DEFAULT_ZOOM_PROPS.size,
  bgsize = DEFAULT_ZOOM_PROPS.bgsize,
  cursor = DEFAULT_ZOOM_PROPS.cursor,
  imagesrc = DEFAULT_ZOOM_PROPS.imagesrc,
  style,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [pos, setPos] = useState<string>("");

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement> | never) => {
    const { left, top, width, height } =
      divRef.current?.getBoundingClientRect() ?? {
        left: 0,
        top: 0,
        width: 1,
        height: 1,
      };
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPos(`${x}% ${y}%`);
  };

  const handleMouseOut = () => {
    divRef.current?.style.setProperty("background-position", "center");
    handleMouseLeave();
  };

  const zoomStyles: CSSProperties = useMemo(
    () => ({
      backgroundImage: `url(${imagesrc})`,
      height: `${height}px`,
      maxWidth: `${maxwidth}px`,
      width: `${width}%`,
      backgroundRepeat: repeat,
      cursor,
      backgroundPosition: isHovering ? pos : position,
      backgroundSize: isHovering ? `${size}%` : bgsize,
      border: isHovering ? `${borderpixel}px solid ${bordercolor}` : "",
      ...style,
    }),
    [
      imagesrc,
      height,
      maxwidth,
      width,
      repeat,
      cursor,
      isHovering,
      pos,
      position,
      size,
      bgsize,
      borderpixel,
      bordercolor,
      style,
    ]
  );

  return (
    <div
      ref={divRef}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
      onMouseMove={handleMouseMove}
      style={zoomStyles}
    />
  );
};
