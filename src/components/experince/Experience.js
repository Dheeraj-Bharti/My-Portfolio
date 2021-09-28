import "./experience.scss";
import { experience } from "../../expeprince";
import { useEffect, useState } from "react";
import {DoubleArrow}  from '@material-ui/icons';

// const url = 'https://course-api.com/react-tabs-project';

const Experience = ()=> {
  // const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [info, setInfo] = useState(experience[value]);

  // const fetchJobs = async () => {
    // const response = await fetch(url);
    // const newJobs = await response.json();
    // setLoading(false);
  // }

  useEffect(() => {
  //  fetchJobs();
 
  // console.log(jobs[value]);
  setInfo(experience[value]);
  console.log(jobs[value]);
  }, [value]);

  // if(loading) {
  //   return (
  //     <section className="section loading">
  //       <h1>loading...</h1>
  //     </section>
  //   );
  // }

  // const {company,dates,duties,title} = jobs.length>0?jobs[value]:'';

  return  <div className="experience" id="experience">
    <h2>Experience</h2>
    <div className="title">
      <div className="underline"></div>
    </div>
 <section className="section">
   
    <div className="jobs-center">
      
      <div className="btn-container">
        {
          experience.map((item,index)=>{
            return <button key="item.id" onClick={()=> 
             setValue(index)}
             className={`job-btn ${index === value && 'active-btn'}`}
             >
              {item.company}
            </button>
          })
        }
      </div>

      <article className="job-info">
        <h3>{info?.title}</h3>
        <h4>{info?.company}</h4>
        <p className="job-dates">{info?.dates}</p> 
        {info?.duties.map((duty,index)=>{
          return <div key={index} className="job-desc">
            <DoubleArrow className="job-icon"/>
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>
  </section>

  </div>
  }

export default Experience
