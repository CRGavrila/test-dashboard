const timeConvertor24 = (time24) => {
  let ts = time24;
  let H = +ts.substr(0, 2);
  let h = (H % 12) || 12;
  let ampm = H < 12 ? " AM" : " PM";
  ts = h + ampm;
  return ts;
}

export default timeConvertor24;