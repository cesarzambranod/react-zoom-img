# React Zoom Img

## Overview
React component for desktop browsers for image zoom on mouse hover.

### **Installation**

```sh
   npm install react-img-zoomer
```

### Simple Example

```tsx
<Zoom imgsrc={Image} />
```

This will include default properties of the Component and renders.

### Usage

```jsx
import Zoom from "react-img-zoomer";
import Image from "./assets/imgs/image.png";

function Example() {
  return (
    <Zoom
      width={150} // width in percent default is 100%
      height={500} // height of the box
      maxwidth={500} // width of the box
      repeat="repeat" // default is no-repeat
      position="center" // cover
      imagesrc={Image} // Image component | URL
      size={200} // it is in percent
      bgsize="cover" // background-size
      cursor="zoom-in" // pointer
      borderpixel={2} // size of border
      bordercolor="red" // color of border
      style={{ margin: "20px" }} // add custom style
      className="img-box" // classname for box
      color="red" // color when image not loaded
    />
  );
}
```

### Default values

| key         | Value       | Guide / What they does      |
| ----------- | ----------- | --------------------------- |
| imgsrc      | default url | source of Image             |
| height      | 400         | height 400px                |
| width       | 100         | width 100%                  |
| maxwidth    | 400         | Width of container          |
| repeat      | no-repeat   | css bg-repeat property      |
| position    | center      | css position property       |
| bgsize      | cover       | css bg property             |
| size        | 100         | How zoomed image should be? |
| cursor      | zoom-in     | css cursor property         |
| borderpixel | 1           | border width                |
| color       | #8f8f8f     | Color of container          |
| bordercolor | #ddd        | Color of border             |
