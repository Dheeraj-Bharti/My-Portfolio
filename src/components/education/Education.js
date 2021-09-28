import "./education.scss";

const Education = () => {
  const data = [
    {
      id: 1,
      course: "B.E.(Nagpur University)",
      percentage: "64%",
      img: "assets/rtmnu.jpg",
      name:"KITS, Ramtek",
      year: "2012-2016",
      featured: true,
    },
    {
      id: 2,
      course: "CDAC ",
      percentage: "63%",
      img: "assets/cdac.jpg",
      year: "Aug/2016 - Feb/2017",
      name:"CDAC (eCity,Bangaluru) ",
    },
    {
      id: 3,
      course: "Senior Secondary",
      percentage: "72%",
      img: "assets/cbse.jpg",
      year: "2011 pass out",
      name:"Tulsi Vidya Niketan,Varanasi",
    },
    {
      id: 3,
      course: "Higher Secondary",
      percentage: "87%",
      year: "2009 pass out",
      img: "assets/cbse.jpg",
      name:"DAV public School, Bachra",
    },
  ];
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <img className="user" src={d.img} alt="" />
            <div className="bottom">
                <h3>{d.name}</h3>
                <h4>{d.year}</h4>
              <h3>{d.course}</h3>
              <h4>{d.percentage}</h4>
            </div>
            {/* <div className="top"> */}
            {/* <img src="assets/right-arrow.png" alt="" className="left" /> */}

            {/* <img className="right" src={d.icon} alt="" /> */}
            {/* </div> */}
            {/* <div className="center">
                  {d.desc}
                </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
