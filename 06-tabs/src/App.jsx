import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('TOMMY')

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => { fetchData() }, []);

  return (
    <main className='section'>
      <h2 className='title'>Experience</h2>
      <div className="underline"></div>
      <div className="job-desc">
        <ul className="btn-container">
          {
            data.map((job, index) => {
              return (
                <li key={index}>
                  <button className={`job-btn ${job.company === selectedJob && "active-btn"}`} onClick={() => setSelectedJob(job.company)}>
                    {job.company}
                  </button>
                </li>
              )
            })
          }
        </ul>
        <section className="">
          {
            data.map((job, index) => {
              if (job.company === selectedJob) {
                return (
                  <section className="job-info" key={index}>

                    <h3>{job.title}</h3>
                    <h4>{job.company}</h4>
                    <p className="job-date">{job.dates}</p>

                    <ul>
                      {
                        job.duties.map((duty, index) => {
                          return (
                            <li className='job-desc' key={index}>
                              <FaAngleDoubleRight className='job-icon' />
                              <p>{duty}</p>
                            </li>
                          )
                        })
                      }

                    </ul>
                  </section>
                )
              }
            })
          }
          <button className="btn">More Info</button>
        </section>
      </div>
    </main>
  )
}

export default App
