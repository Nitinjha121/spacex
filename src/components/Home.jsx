import React, { useEffect } from "react";
import "../styles/Home.css";
import Data from "./Data";
import homeAction from "../actions/homeAction";
import yearAction from "../actions/yearAction";
import landAction from "../actions/landAction";
import launchAction from "../actions/launchAction";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

function Home() {
  const { homeData, isLoading } = useSelector((state) => state.home);
  const { yearData, isLoading1 } = useSelector((state) => state.year);
  const { launchData, isLoading2 } = useSelector((state) => state.launch);
  const { landData, isLoading3 } = useSelector((state) => state.land);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const arr = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];

  useEffect(() => {
    dispatch(homeAction());
    if (pathname.includes("year")) {
      dispatch(yearAction(pathname.slice(6)));
    }
  }, [dispatch]);

  const valHandler = function (val) {
    if (pathname.includes("year")) {
      history.push(`/year/${val}`);
      dispatch(yearAction(val));
    }
    if (pathname.includes("launch")) {
      history.push(`/launch=${val}`);
      dispatch(launchAction(val));
    }
    if (pathname.includes("land")) {
      history.push(`/launch=true/land=${val}`);
      dispatch(landAction(val));
    }
  };

  const renderData = (isLoading, data) => {
    return isLoading ? (
      <div className="lds-dual-ring"></div>
    ) : (
      data.map((data) => (
        <Data
          name={data.mission_name}
          number={data.flight_number}
          launch_year={data.launch_year}
          launch_success={data.launch_success}
          land_success={data.land_success || false}
          img={data.links.mission_patch}
          mission_id={data.mission_id}
          key={data.flight_number}
        />
      ))
    );
  };

  console.log(yearData);
  return (
    <div className="home">
      <h1>SpaceX Launch Program</h1>
      <div className="home__container">
        <div className="home__filter">
          <div className="filter__containner">
            <h3>Filter</h3>
            <p className="filter__yearRow">Launch Year</p>
            <div className="filter__year">
              {arr.map((year) => (
                <button
                  key={year}
                  onClick={valHandler.bind(null, year)}
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
                onClick={valHandler.bind(null, true)}
              >
                True
              </button>
              <button
                className="filter__yearBtn"
                onClick={valHandler.bind(null, false)}
              >
                False
              </button>
            </div>

            <p className="filter__yearRow">Successful Landing</p>
            <div className="filter__boolean">
              <button
                className="filter__yearBtn"
                onClick={valHandler.bind(null, true)}
              >
                True
              </button>
              <button
                className="filter__yearBtn"
                onClick={valHandler.bind(null, false)}
              >
                False
              </button>
            </div>
          </div>
        </div>
        <div className="home__dataContainer">
          <Switch>
            <Route path="/" exact>
              {renderData(isLoading, homeData)}
            </Route>
            <Route path={`/year/:year`}>
              {renderData(isLoading1, yearData)}
              {/* {!yearData.length && <p>None</p>} */}
            </Route>
            <Route path="/launch=:boolean">
              {renderData(isLoading2, launchData)}
            </Route>
            <Route path="/launch=true/land=:boolean">
              {renderData(isLoading3, launchData)}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;
