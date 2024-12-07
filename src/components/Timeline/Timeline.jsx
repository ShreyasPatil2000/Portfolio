import "./Timeline.scss";
import { useState } from "react";
import { TIMELINE } from "../../utils/data";
import TimelineButton from "../TimelineButton/TimelineButton";
import TimelineChart from "../TimelineChart/TimelineChart";

const Timeline = () => {
  const [selectTimeline, setSelectTimeline] = useState(TIMELINE[0]);
  const handleSelectTimeline = (data) => setSelectTimeline(data);

  return (
    <section className="timeline-container">
      <h3 className="heading">Timeline</h3>
      <div className="timeline-content">
        <div className="timelines">
          {TIMELINE.map((item) => (
            <TimelineButton
              key={item.title}
              title={item.title}
              isActive={selectTimeline.title === item.title}
              onClick={() => handleSelectTimeline(item)}
            />
          ))}
        </div>
        <div className="timeline-info">
          <TimelineChart
            title={selectTimeline.title}
            details={selectTimeline.details}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
