import React, { useEffect, useState } from 'react';
import JobCard from '../../components/card';
import './style.css';

const Employment = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/get_item_by_location?location=AB`)
      .then(response => response.json())
      .then(data => {
        setJobData(data);
      });
  }, []);

  return (
    <div className="employment-container">
      {jobData.map((job, index) => (
        <JobCard
          key={index}
          Title={job.Title}
          Desc={job.Desc}
          Location={job.Location}
          DatePosted={job.DatePosted}
          Link={job.Link}
          Image={job.Image}
        />
      ))}
    </div>
  );
};

export default Employment;
