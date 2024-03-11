import React from "react";
import axios from "axios";

function GeoLocation() {
  const APIEndPoint = "https://api.ipify.org";
  //const APIKey = "d7d51505e6cbfe439316357d30680f16";
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [ip, setIP] = React.useState("");
  const [geo, setGeo] = React.useState("");

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });

    const getIPVisitor = async () => {
      try {
        const resp = await fetch(`${APIEndPoint}`);
        const data = await resp.text();
        setIP(data);
        console.log(`ini datanya : ${data}`);
      } catch (e) {
        console.log("Error Fetching!");
      }
    };
    // console.log(
    //   `${APIEndPoint}lat=${latitude}&lon=${longitude}&appid=${APIKey}`
    // );

    // getIPVisitor();
    // // let dataIP = "";
    // // axios.get(`${APIEndPoint}`).then((response) => {
    // //   dataIP = response.data;
    // // });
    // // console.log(`ini dataip : ${dataIP}`);
    // // axios.get(`http://ip-api.com/json/${dataIP}`).then((response) => {
    // //   console.log(response.data);
    // // });

    const fetchIPInformation = async () => {
      try {
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        setGeo(data);
        console.log(data);
      } catch (e) {
        console.log("Error get Geo!");
      }
    };
    //getIPVisitor();
    //fetchIPInformation();
  }, [latitude, longitude, ip, geo]);

  //getIPVisitor();
  //fetchIPInformation();

  return (
    <div>
      <input type="text" value={ip}></input>
    </div>
  );
}
export default GeoLocation;
