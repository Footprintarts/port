const date = new Date();

const year = date.getFullYear();
const currentTime = date.toLocaleTimeString().slice(0, 4);
const pmAm = date.toLocaleTimeString().slice(8, 10);
console.log(pmAm);

const time = {
  year,
  currentTime,
  pmAm,
};

export default time;
