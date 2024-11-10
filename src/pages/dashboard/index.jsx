import React from 'react';
import pfp from "../../assets/pfp.jpg";
import "./style.css";

const Dashboard = () => {
    const videos = [
        { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/I6qkFNOVebo" },
        { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/8q69_gDP9PU" },
        { id: 3, title: "Video 3", url: "https://www.youtube.com/embed/Osy2tKV66v8" }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="profile-section">
                    <img src={pfp} alt="Profile" className="profile-picture" />
                    <h1>Welcome Debo!</h1>
                </div>
            </div>

            <div className="video-section">
                <h2>Some Inspiring Videos</h2>
                <div className="video-cards">
                    {videos.map((video) => (
                        <div className="video-card" key={video.id}>
                            <iframe
                                width="100%"
                                height="200"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p>{video.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
