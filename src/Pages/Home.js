import React, { useState, useEffect } from "react";
import pixel from "../images/transparent_2024-03-01T00-27-27.png";

const Home = () => {
  // 初始化 dot 的初始位置
  const [dotPosition, setDotPosition] = useState({ top: 0, left: 0 });

  // 添加键盘事件监听
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "w":
          setDotPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top - 10 }));
          break;
        case "a":
          setDotPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left - 10 }));
          break;
        case "s":
          setDotPosition((prevPosition) => ({ ...prevPosition, top: prevPosition.top + 10 }));
          break;
        case "d":
          setDotPosition((prevPosition) => ({ ...prevPosition, left: prevPosition.left + 10 }));
          break;
        default:
          break;
      };
    };
    const handleMousePress = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      setDotPosition((prevPosition) => ({...prevPosition,left : mouseX}));
      setDotPosition((prevPosition) => ({...prevPosition,top:mouseY}));
      console.log(mouseX,mouseY)
      console.log(dotPosition)
    };
    

    // 添加事件监听器
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleMousePress);

    // 移除事件监听器
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousedown",handleMousePress);
    };
  }, []); // 依赖为空数组，表示只在组件挂载和卸载时执行

  return (
    <div className="home">
      <div className="container">
        <div className="dot" style={{ top: dotPosition.top, left: dotPosition.left }}>
          <img src={pixel} alt="pixel" />
        </div>
      </div>
    </div>
  );
};

export default Home;
