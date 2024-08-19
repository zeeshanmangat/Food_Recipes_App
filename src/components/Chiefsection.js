import ChiefCrad from "./ChiefCrad";

const Chiefsection = () => {
  const chiefs = [
    {
      name: "Awais Mangat",
      img: "img/top-chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Aranian",
    },
    {
      name: "ZeeshanMangat",
      img: "img/top-chiefs/img_2.jpg",
      recipesCount: "10",
      cuisine: "Aranian",
    },
    {
      name: " Zain Mangat",
      img: "img/top-chiefs/img_3.jpg",
      recipesCount: "10",
      cuisine: "Aranian",
    },
    {
      name: "Awais Mangat",
      img: "img/top-chiefs/img_4.jpg",
      recipesCount: "10",
      cuisine: "Arabic",
    },
  ];
  return (
    <div className="section chief">
      <h1>Our Top Chiefs</h1>
      <div className="top-chiefs-container">
        {/* <ChiefCrad/>
            <ChiefCrad/>
            <ChiefCrad/>
            <ChiefCrad/>
            <ChiefCrad/> */}
        {chiefs.map((chief) => (
          <ChiefCrad key={chief.name} chief={chief} />
        ))}
      </div>
    </div>
  );
};

export default Chiefsection;
