import Data from "./Data" 


export default function Ex1() {
  const randomIndex = Math.floor(Math.random() * Object.keys(Data).length);
  const randomData = Data[Object.keys(Data)[randomIndex]];
  console.log("getting into the randeom function")
  return randomData;
}