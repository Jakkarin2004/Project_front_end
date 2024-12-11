import React, { useState } from "react";
import "../../css/Slider.css";

const images = [
  { src: "https://images.unsplash.com/photo-1704984678196-a5eeb2ca7fec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "สเต็กเนื้อแมวเป้า" },
  { src: "https://images.unsplash.com/photo-1712189726339-a304fd330cc7?q=80&w=1405&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "เนื้อลิงปิ้งย่าง" },
  { src: "https://images.unsplash.com/photo-1697659206568-7a0148bc5482?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ซอยจุ๊เนื้อเด็ก" },
  { src: "https://images.unsplash.com/photo-1704092591250-c78222dd72e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ก้อยเนื้อเด็กเล็ก" },
  { src: "https://images.unsplash.com/photo-1680084564511-450d22500ce3?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ทอดเนื้อใส่ใบมะกรูด" },
  { src: "https://images.unsplash.com/photo-1705315861620-ef82f5810b48?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "ซอยจุ๊ตับหวาน" },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideshow-container">
      {/* แสดงภาพปัจจุบัน */}
      <div className="slide">
        {/* alt="{images[currentIndex].alt}" */}
        <img src={images[currentIndex].src} alt="" />
        <div className="caption">{images[currentIndex].alt}</div>
      </div>

      {/* ปุ่มเลื่อนซ้าย/ขวา */}
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      {/* แสดง Thumbnail */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
