import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    primary,
    secondary
  } from "../../data";
  

const Portfolio = () => {
    const [selected, setSelected] = useState("primary");
    const [data, setData] = useState([]);
    const list = [
        {
            id:"primary",
            title: "Primary"
        },
        {
            id:"secondary",
            title: "Secondary"
        }
    ]
    useEffect(() => {
        switch(selected){
            case "primary":
                setData(primary);
                break;
            case "secondary":
                setData(secondary);
                break;
            default:
                setData(primary);
                
        }
       
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Skills</h1>
            <ul>
               {list.map(item=>(
                   <PortfolioList title={item.title} 
                   active={selected===item.id}
                   setSelected={setSelected}
                   id ={item.id}/>
               ))}
            </ul>
            <div className="container">
                {
                data.map((d)=>(
                    <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                    ))
                }

                
                
                
            </div>
        </div>
    )
}

export default Portfolio
