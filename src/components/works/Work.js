import { useState } from "react";
import "./work.scss";

const Work = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [ {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Social Media With Messenger App",
        link: "https://github.com/Dheeraj-Bharti/social-media-with-messenger",
        desc:
          "Build Social-media app with messenger using MERN and Socket.io.",
        img:
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Hotel Management",
        link: "https://dheeraj-react-resort-app.netlify.app/",
        desc:
          "Build mobile responsive Hotel app using React and deployed using netlify",
        img:
          "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      },
      {
        id: "3",
        icon: "./assets/writing.png",
        title: "Vdo Games Site",
        link: "https://github.com/Dheeraj-Bharti/Vdo-Games-angular",
        desc:
        "Build mobile responsive Vdo game app using Angular",
        img:
          "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      }];

      const handleClick = (way) => {
          way ==="left" ?setCurrentSlide(currentSlide>0 ? currentSlide-1 : 2) : 
          setCurrentSlide(currentSlide<data.length-1? currentSlide+1:0);
      }

    return (
        <div className="work" id="works">
          
            <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
               { data.map((d)=>(
                  <div className="container">
                  <div className="item">
                      <div className="left">
                          <div className="leftContainer">
                              <div className="imgContainer">
                                  <img src={d.icon} alt="" />
                              </div>
                              <h2>{d.title}</h2>
                              <p>{d.desc}</p>
                              <a target="_blank" href={d.link}>Project</a>
                             
                          </div>
                      </div>
                      <div className="right">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
                           alt="" />

                      </div>
                  </div> 
                  </div>
               )) }
                
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt=""  onClick={()=>handleClick()} />
        </div>
    )
}

export default Work
