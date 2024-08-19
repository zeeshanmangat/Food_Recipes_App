import { CustomImage } from "./CustomImage";
export const HeroSection = () => {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg",
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col">
        <h1 className="title">What Are We About </h1>
        <p className="info">
          Welcome to Kabab Mahali! At Kabab Mahali, we bring you the authentic
          flavors of Arabic and Iranian cuisine. Our chefs use traditional
          recipes and the freshest ingredients to create a dining experience
          that transports you to the heart of the Middle East. سلطة الروبيان
          المشوي مع الخس و الذرة الحلوة و الافوكادو مع عصير الليمون و زيت
          الزيتون 😋 .{" "}
        </p>
        <button className="btn"> explore now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"50%"} />
        ))}
      </div>
    </div>
  );
};
