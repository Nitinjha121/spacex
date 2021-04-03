import React from "react";
import "../styles/Home.css";
import Data from "./Data";
import { useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import Filter from "./Filter";

function Home() {
  const { homeData, isLoading } = useSelector((state) => state.home);
  const { yearData, isLoading1 } = useSelector((state) => state.year);
  const { launchData, isLoading2 } = useSelector((state) => state.launch);
  const { landData, isLoading3 } = useSelector((state) => state.land);
  const { pathname } = useLocation();

  const renderData = (isLoading, data) => {
    // console.log(data, isLoading);
    return isLoading ? (
      <div className="lds-dual-ring"></div>
    ) : (
      data?.map((data) => (
        <Data
          name={data.mission_name}
          number={data.flight_number}
          launch_year={data.launch_year}
          launch_success={data.launch_success}
          land_success={
            data.land_success || pathname.includes("land=true") ? true : false
          }
          img={data.links.mission_patch}
          mission_id={data.mission_id}
          key={data.flight_number}
        />
      ))
    );
  };
  return (
    <div className="home">
      <h1>SpaceX Launch Program</h1>
      <div className="home__container">
        <Filter />
        <div className="home__dataContainer">
          <Switch>
            <Route path="/" exact>
              {renderData(isLoading, homeData)}
            </Route>
            <Route path="/year/:year">
              {renderData(isLoading1, yearData)}
              {!yearData.length && !isLoading1 && (
                <h1 className="home__nothingFound">Not found</h1>
              )}
            </Route>
            <Route path="/launch=:boolean" exact>
              {renderData(isLoading2, launchData)}
              {!yearData.length && !isLoading1 && (
                <h1 className="home__nothingFound">Not found</h1>
              )}
            </Route>
            <Route path="/land=:boolean">
              {renderData(isLoading3, landData)}
              {!yearData.length && !isLoading1 && (
                <h1 className="home__nothingFound">Not found</h1>
              )}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Home;
