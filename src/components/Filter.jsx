import React, { useEffect } from "react";
import "../styles/Home.css";
import homeAction from "../actions/homeAction";
import yearAction from "../actions/yearAction";
import landAction from "../actions/landAction";
import launchAction from "../actions/launchAction";
import { useDispatch } from "react-redux";
import { arr } from "./arr";

import { useHistory, useLocation, useParams } from "react-router-dom";

function Filter() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("year")) {
      dispatch(yearAction(pathname.slice(6)));
    }

    if (pathname.includes("land")) {
      return pathname.includes("true")
        ? dispatch(landAction(true))
        : dispatch(landAction(false));
    }

    if (pathname.includes("launch")) {
      return pathname.includes("true")
        ? dispatch(launchAction(true))
        : dispatch(launchAction(false));
    }

    if (pathname === "/") {
      dispatch(homeAction());
    }
  }, [dispatch, pathname, params]);

  const yearHandler = function (year) {
    history.push(`/year/${year}`);
    dispatch(yearAction(year));
  };

  const launchHandler = function (val) {
    history.push(`/launch=${val}`);
    dispatch(launchAction(val));
  };

  const landHandler = function (val) {
    history.push(`/land=${val}`);
    dispatch(landAction(val));
  };

  return (
    <div className="home__filter">
      <div className="filter__containner">
        <h3>Filter</h3>
        <p className="filter__yearRow">Launch Year</p>
        <div className="filter__year">
          {arr.map((year) => (
            <button
              key={year}
              onClick={yearHandler.bind(null, year)}
              className="filter__yearBtn"
            >
              {year}
            </button>
          ))}
        </div>
        <p className="filter__yearRow">Successful Launch</p>
        <div className="filter__boolean">
          <button
            className="filter__yearBtn"
            onClick={launchHandler.bind(null, true)}
          >
            True
          </button>
          <button
            className="filter__yearBtn"
            onClick={launchHandler.bind(null, false)}
          >
            False
          </button>
        </div>

        <p className="filter__yearRow">Successful Landing</p>
        <div className="filter__boolean">
          <button
            className="filter__yearBtn"
            onClick={landHandler.bind(null, true)}
          >
            True
          </button>
          <button
            className="filter__yearBtn"
            onClick={landHandler.bind(null, false)}
          >
            False
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
