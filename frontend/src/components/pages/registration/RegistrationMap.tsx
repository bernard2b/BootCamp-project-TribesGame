import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationMap.scss";
import { SubmitHandler } from "react-hook-form";
import { fetchAllImperia, fetchPutImperia } from "../../../api/mapFetch";
import $ from "jquery";
import blueSpaceship from "./img/blueSpaceship.png";
import enemy1 from "./img/enemy1.png";
import enemy2 from "./img/enemy2.png";
import mapInterface, { mapRequest } from "../../../interfaces/mapInterface";

function mapSelector() {
  const [image, setImage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState("");
  const [position, setPosition] = useState("please select");
  let coordinates: number;
   const imperiumId = 3;
  let name: string;
  const navigate = useNavigate();
  const [enemyImperia, setEnemyImperia] = useState<mapInterface[]>([]);

  useEffect(() => {
    fetchAllImperia().then((imperiumData) => {
      setEnemyImperia(imperiumData.imperia);
    });
  }, []);

  function selected() {
    setImage(blueSpaceship);
  }

  const selectedStyle = {
    opacity: 0.1,
  };

  $("body").click(function (evt) {
    if (evt.target.className == "mapButton" || evt.target.id.length > 3) return;
    else if (evt.target.className !== "") return;
    const clicked = evt.target;
    const currentID = clicked.id || "No ID!";
    coordinates = Number(currentID);
    setPosition(coordinates.toString());
    return coordinates;
  });

  const handleClick2 = (event: {
    currentTarget: {
      style: { backgroundColor: string; color: string; opacity: string };
      id: string;
      classList: { add: (arg0: string, arg1: string) => void };
    };
  }) => {
    if (event.currentTarget.style.opacity === "0") {
      event.currentTarget.style.opacity = "1";
    } else event.currentTarget.style.opacity = "0";
  };

  function randomButton(): number {
    const result = randomCoordinates(0, 600);
    return result;
  }

  function randomCoordinates(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    coordinates = Number(Math.floor(Math.random() * (max - min + 1) + min));
    setPosition(coordinates.toString());
    return coordinates;
  }

  const confirmButton = async () => {
    setError("");
    try {
      coordinates = Number(position);
      const data = { id: imperiumId, coordinates, name: name };
      await fetchPutImperia(data);
       navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error.message);
      }
    }
  };

  return (
    <div className="RegistrationMap">
      <h1 className="imperiumName">Choose a place in space to colonize it!</h1>{" "}
      <div className="MapGridContainer" id="parent">
        <div className="map">
          <img
            id="1"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map2">
          <img
            id="2"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="3"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="4"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="5"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="6"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="7"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="8"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="9"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="10"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="11"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="12"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="13"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="14"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="15"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="16"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="17"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="18"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="19"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="20"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="21"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="22"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="23"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="24"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="25"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="26"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="27"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="28"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="29"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="30"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="31"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="32"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="33"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="34"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="35"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="36"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="37"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="38"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="39"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="40"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="41"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="42"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="43"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="44"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="45"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="46"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="47"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="48"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="49"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="50"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="51"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="52"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="53"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="54"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="55"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="56"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="57"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="58"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="59"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="60"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="61"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="62"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="63"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="64"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="65"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="66"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="67"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="68"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="69"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="70"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="71"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="72"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="73"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="74"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="75"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="76"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="77"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="78"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="79"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="80"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="81"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="82"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="83"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="84"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="85"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="86"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="87"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="88"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="89"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="90"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="91"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="92"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="93"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="94"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="95"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="96"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="97"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="98"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="99"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="100"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="101"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="102"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="103"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="104"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="105"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="106"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="107"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="108"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="109"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="110"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="111"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="112"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="113"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="114"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="115"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="116"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="117"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="118"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="119"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="120"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="121"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="122"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="123"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="124"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="125"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="126"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="127"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="128"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="129"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="130"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="131"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="132"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="133"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="134"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="135"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="136"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="137"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="138"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="139"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="140"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="141"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="142"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="143"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="144"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="145"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="146"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="147"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="148"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="149"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="150"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="151"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="152"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="153"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="154"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="155"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="156"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="157"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="158"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="159"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="160"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="161"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="162"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="163"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="164"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="165"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="166"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="167"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="168"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="169"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="170"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="171"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="172"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="173"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="174"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="175"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="176"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="177"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="178"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="179"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="180"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="181"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="182"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="183"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="184"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="185"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="186"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="187"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="188"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="189"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="190"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="191"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="192"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="193"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="194"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="195"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="196"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="197"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="198"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="199"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="200"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="201"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="202"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="203"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="204"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="205"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="206"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="207"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="208"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="209"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="210"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="211"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="212"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="213"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="214"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="215"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="216"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="217"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="218"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="219"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="220"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="221"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="222"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="223"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="224"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="225"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="226"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="227"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="228"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="229"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="230"
            src={enemy1}
            style={{ opacity: isActive ? "1" : "1" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="231"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="232"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="233"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="234"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="235"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="236"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="237"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="238"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="239"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="240"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="241"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="242"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="243"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="244"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="245"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="246"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="247"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="248"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="249"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="250"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="251"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="252"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="253"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="254"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="255"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="256"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="257"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="258"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="259"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="260"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="261"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="262"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="263"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="264"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="265"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="266"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="267"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="268"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="269"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="270"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="271"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="272"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="273"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="274"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="275"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="276"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="277"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="278"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="279"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="280"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="281"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="282"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="283"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="284"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="285"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="286"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="287"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="288"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="289"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="290"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="291"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="292"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="293"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="294"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="295"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="296"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="297"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="298"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="299"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="300"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="301"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="302"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="303"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="304"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="305"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="306"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="307"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="308"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="309"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="310"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="311"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="312"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="313"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="314"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="315"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="316"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="317"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="318"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="319"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="320"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="321"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="322"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="323"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="324"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="325"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="326"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="327"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="328"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="329"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="330"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="331"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="332"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="333"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="334"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="335"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="336"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="337"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="338"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="339"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="340"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="341"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="342"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="343"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="344"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="345"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="346"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="347"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="348"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="349"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="350"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="351"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="352"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="353"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="354"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="355"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="356"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="357"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="358"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="359"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="360"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="361"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="362"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="363"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="364"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="365"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="366"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="367"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="368"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="369"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="370"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="371"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="372"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="373"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="374"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="375"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="376"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="377"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="378"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="379"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="380"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="381"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="382"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="383"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="384"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="385"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="386"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="387"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="388"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="389"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="390"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="391"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="392"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="393"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="394"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="395"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="396"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="397"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="398"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="399"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="400"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="401"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="402"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="403"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="404"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="405"
            src={enemy2}
            style={{ opacity: isActive ? "1" : "1" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="406"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="407"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="408"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="409"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="410"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="411"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="412"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="413"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="414"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="415"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="416"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="417"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="418"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="419"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="420"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="421"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="422"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="423"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="424"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="425"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="426"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="427"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="428"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="429"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="430"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="431"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="432"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="433"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="434"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="435"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="436"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="437"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="438"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="439"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="440"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="441"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="442"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="443"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="444"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="445"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="446"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="447"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="448"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="449"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="450"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="451"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="452"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="453"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="454"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="455"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="456"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="457"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="458"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="459"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="460"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="461"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="462"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="463"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="464"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="465"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="466"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="467"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="468"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="469"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="470"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="471"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="472"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="473"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="474"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="475"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="476"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="477"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="478"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="479"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="480"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="481"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="482"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="483"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="484"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="485"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="486"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="487"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="488"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="489"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="490"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="491"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="492"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="493"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="494"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="495"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="496"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="497"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="498"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="499"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="500"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="501"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="502"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="503"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="504"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="505"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="506"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="507"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="508"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="509"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="510"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="511"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="512"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="513"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="514"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="515"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="516"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="517"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="518"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="519"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="520"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="521"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="522"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="523"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="524"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="525"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="526"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="527"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="528"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="529"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="530"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="531"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="532"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="533"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="534"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="535"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="536"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="537"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="538"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="539"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="540"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="541"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="542"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="543"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="544"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="545"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="546"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="547"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="548"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="549"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="550"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="551"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="552"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="553"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="554"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="555"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="556"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="557"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="558"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="559"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="560"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="561"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="562"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="563"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="564"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="565"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="566"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="567"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="568"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="569"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="570"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="571"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="572"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="573"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="574"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="575"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="576"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="577"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="578"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="579"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="580"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="581"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="582"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="583"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="584"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="585"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="586"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="587"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="588"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="589"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="590"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="591"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="592"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="593"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="594"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="595"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="596"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="597"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="598"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="599"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>
        <div className="map">
          <img
            id="600"
            src={blueSpaceship}
            style={{ opacity: isActive ? "1" : "0" }}
            onClick={handleClick2}
          />
        </div>{" "}
      </div>
      <div className="selectedPosition">
        <h3>SELECTED POSITION: {position}</h3>
      </div>
      <div className="buttons">
        <button className="mapButton" onClick={randomButton}>
          RANDOM
        </button>
        <button className="mapButton" onClick={confirmButton}>
          CONFIRM{" "}
        </button>
      </div>
        <section className="enemyContainer">
          <ul className="enemyList">
            {enemyImperia.map((imperia) => {
              return (
                <li className="imperias" key={imperia.id}>
                  {imperia.name}, coordinates: {imperia.coordinates}
                </li>
              );
            })}
          </ul>
        </section>
    </div>
  );
}

export default mapSelector;
