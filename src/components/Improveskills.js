import React from "react";

const Improveskills = () => {
  const list = [
    "طبق جديد وفريد ​​من نوعه ",
    "تشكيله مشاوى ٦ أشخاص",
    "تشکیله مشاوى 5 أشخاص",
    "تشکیله مشاوى ٤ أشخاص",
    "تشکیله مشاوی 3 أشخاص",
  ];
  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/img_10.jpg" alt="not found"></img>
      </div>
      <div className="col typography">
        <h1 className="title">
          Visit and Check Restuarant & زيارة ورؤية أطباق جديدة
        </h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn"> Sign Up</button>
      </div>
    </div>
  );
};

export default Improveskills;
