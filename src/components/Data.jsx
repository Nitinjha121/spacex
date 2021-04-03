import React from "react";
import "../styles/Data.css";

function Data({
  name,
  number,
  launch_year,
  launch_success,
  land_success,
  mission_id,
  img,
}) {
  return (
    <div className="dataCard">
      <div className="dataCard__img">
        <img src={img} alt={name} />
      </div>
      <div className="dataCard__name">
        {name} #{number}
      </div>
      <div className="dataCard__name">
        Launch Year: <span className="dataCard__values">{launch_year}</span>
      </div>

      <div className="dataCard__name">
        SuccessFul Launch:{" "}
        <span className="dataCard__values">{String(launch_success)}</span>
      </div>

      <div className="dataCard__name">
        SuccessFul Landing:{" "}
        <span className="dataCard__values">{String(land_success)}</span>
      </div>
    </div>
  );
}

export default Data;
