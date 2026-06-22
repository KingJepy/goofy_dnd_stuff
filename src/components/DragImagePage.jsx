import { useState, useRef } from "react";
import background from "../assets/bigkyle.jpg";
import sword from "../assets/sword.webp"

function DragImagePage() {
  const [position, setPosition] = useState({
    x: 100,
    y: 100,
  });

  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dragging.current = true;

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const handleMouseUp = () => {
    dragging.current = false;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        style={{
          position: "relative",
          width: "800px",
          height: "500px",
          border: "2px solid black",
          overflow: "hidden",
        }}
      >
        <img
          src={background}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        <img
          src={sword}
          alt=""
          onMouseDown={handleMouseDown}
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            width: "150px",
            zIndex: 100,
            cursor: "grab",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
}

export default DragImagePage;