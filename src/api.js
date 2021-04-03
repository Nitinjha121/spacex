export const homePage = "https://api.spacexdata.com/v3/launches?limit=8";

export const successFilter = function (id) {
  return `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${id}`;
};

export const landSuccessFilter = (id) => {
  return `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=${id}`;
};

export const allFilter = function (year) {
  return `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${year}`;
};
