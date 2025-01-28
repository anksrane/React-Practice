import React from "react";
import "./Journey.css"; // Ensure you include your CSS file here

const Timeline = ({ title, events }) => {
  return (
    <div className="timeline-container">
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="timeline">
        <div className="timeline-end">{/* <p>Now</p> */}</div>

        <div className="timeline-continue">
          {events.map((event, index) => (
            <div
              key={index}
              className={`row ${
                index % 2 === 0 ? "timeline-right" : "timeline-left"
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-md-6 position-relative">
                    <p className="timeline-date">{event.date}</p>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="timeline-box">
                      <div className="timeline-icon">
                        <i className={event.icon}></i>
                      </div>
                      <div className="timeline-text">
                        <h3 className="main-heading">{event.title}</h3>
                        <h4 className="sub-heading">{event.companyname}</h4>
                        <ul className="list">
                        {event.description &&
                          event.description.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 position-relative d-md-none d-block">
                    <p className="timeline-date">{event.date}</p>
                  </div>
                  <div className="col-md-6 position-relative">
                    <div className="timeline-box">
                      <div className="timeline-icon">
                        <i className={event.icon}></i>
                      </div>
                      <div className="timeline-text">
                        <h3 className="main-heading">{event.title}</h3>
                        <h4 className="sub-heading">{event.companyname}</h4>
                        <ul className="list">
                        {event.description &&
                          event.description.map((element, index) => (
                            <li key={index}>{element}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 position-relative d-md-block d-none">
                    <p className="timeline-date">{event.date}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="timeline-start">{/* <p>Start</p> */}</div>
      </div>
    </div>
  );
};

export default Timeline;
