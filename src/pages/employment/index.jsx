import React, { useEffect, useState } from 'react';
import JobCard from '../../components/jobcard';
import './style.css';

const Employment = () => {
  const [jobData, setJobData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/JobPostings/get_item_by_location?location=${value === '' ? 'AB' : value}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setJobData([]);
        } else {
          setJobData(data);
        }
      });
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="employment-container">
      <h1>Find Your Next Job Opportunity</h1>
      <input type="text" value={value} onChange={handleChange} placeholder="Enter location" />

      {/* Job cards displayed in pairs */}
      <div className="job-card-container">
        {jobData.map((job, index) => (
          <JobCard
            key={index}
            Title={job.Title}
            CompanyName={job.CompanyName}
            Desc={job.Desc}
            Location={job.Location}
            DatePosted={job.DatePosted}
            Link={job.Link}
            Image={job.Image}
          />
        ))}
      </div>
    </div>
  );
};

export default Employment;
