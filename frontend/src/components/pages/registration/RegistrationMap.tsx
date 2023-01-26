import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationMap.scss";
import { SubmitHandler } from "react-hook-form";
import fetchMap from "../../../api/mapFetch";
import $ from "jquery";
import blueSpaceship from "./blueSpaceship.png";
import { stringify } from "querystring";

function mapSelector() {
  const [imgage, setImage] = useState();
  const [error, setError] = useState("");
  const [position, setPosition] = useState("please select");
  let coordinates = 0;
  const imperiumId = 1;
  const navigate = useNavigate();

  function selected() {
    setImage;
  }

  $("body").click(function (evt) {
    if (evt.target.className == "button" || evt.target.id.length > 3) return;
    else if (evt.target.className !== "") return;
    const clicked = evt.target;
    const currentID = clicked.id || "No ID!";
    // $(clicked).html(currentID);
    coordinates = Number(currentID);
    setPosition(coordinates.toString());
    // $("#theDiv").prepend('<img id="ownSpaceship" src="blueSpaceship.png" />');
  });

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
      const data = { imperiumId, coordinates };
      await fetchMap(data);
      navigate("/");
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
          <img id="1" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="2" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="3" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="4" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="5" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="6" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="7" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="8" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="9" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="10" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="11" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="12" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="13" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="14" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="15" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="16" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="17" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="18" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="19" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="20" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="21" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="22" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="23" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="24" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="25" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="26" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="27" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="28" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="29" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="30" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="31" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="32" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="33" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="34" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="35" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="36" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="37" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="38" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="39" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="40" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="41" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="42" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="43" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="44" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="45" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="46" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="47" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="48" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="49" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="50" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="51" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="52" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="53" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="54" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="55" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="56" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="57" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="58" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="59" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="60" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="61" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="62" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="63" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="64" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="65" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="66" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="67" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="68" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="69" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="70" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="71" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="72" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="73" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="74" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="75" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="76" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="77" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="78" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="79" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="80" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="81" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="82" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="83" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="84" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="85" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="86" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="87" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="88" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="89" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="90" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="91" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="92" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="93" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="94" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="95" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="96" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="97" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="98" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="99" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="100" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="101" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="102" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="103" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="104" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="105" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="106" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="107" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="108" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="109" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="110" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="111" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="112" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="113" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="114" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="115" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="116" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="117" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="118" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="119" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="120" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="121" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="122" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="123" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="124" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="125" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="126" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="127" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="128" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="129" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="130" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="131" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="132" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="133" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="134" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="135" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="136" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="137" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="138" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="139" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="140" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="141" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="142" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="143" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="144" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="145" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="146" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="147" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="148" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="149" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="150" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="151" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="152" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="153" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="154" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="155" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="156" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="157" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="158" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="159" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="160" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="161" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="162" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="163" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="164" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="165" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="166" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="167" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="168" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="169" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="170" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="171" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="172" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="173" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="174" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="175" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="176" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="177" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="178" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="179" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="180" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="181" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="182" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="183" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="184" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="185" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="186" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="187" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="188" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="189" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="190" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="191" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="192" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="193" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="194" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="195" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="196" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="197" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="198" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="199" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="200" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="201" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="202" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="203" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="204" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="205" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="206" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="207" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="208" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="209" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="210" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="211" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="212" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="213" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="214" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="215" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="216" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="217" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="218" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="219" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="220" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="221" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="222" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="223" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="224" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="225" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="226" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="227" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="228" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="229" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="230" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="231" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="232" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="233" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="234" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="235" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="236" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="237" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="238" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="239" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="240" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="241" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="242" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="243" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="244" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="245" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="246" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="247" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="248" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="249" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="250" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="251" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="252" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="253" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="254" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="255" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="256" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="257" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="258" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="259" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="260" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="261" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="262" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="263" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="264" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="265" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="266" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="267" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="268" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="269" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="270" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="271" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="272" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="273" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="274" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="275" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="276" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="277" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="278" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="279" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="280" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="281" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="282" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="283" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="284" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="285" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="286" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="287" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="288" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="289" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="290" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="291" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="292" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="293" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="294" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="295" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="296" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="297" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="298" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="299" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="300" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="301" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="302" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="303" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="304" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="305" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="306" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="307" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="308" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="309" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="310" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="311" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="312" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="313" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="314" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="315" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="316" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="317" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="318" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="319" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="320" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="321" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="322" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="323" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="324" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="325" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="326" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="327" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="328" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="329" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="330" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="331" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="332" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="333" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="334" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="335" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="336" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="337" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="338" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="339" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="340" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="341" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="342" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="343" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="344" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="345" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="346" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="347" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="348" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="349" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="350" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="351" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="352" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="353" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="354" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="355" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="356" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="357" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="358" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="359" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="360" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="361" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="362" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="363" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="364" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="365" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="366" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="367" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="368" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="369" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="370" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="371" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="372" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="373" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="374" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="375" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="376" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="377" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="378" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="379" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="380" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="381" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="382" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="383" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="384" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="385" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="386" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="387" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="388" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="389" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="390" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="391" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="392" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="393" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="394" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="395" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="396" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="397" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="398" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="399" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="400" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="401" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="402" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="403" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="404" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="405" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="406" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="407" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="408" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="409" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="410" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="411" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="412" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="413" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="414" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="415" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="416" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="417" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="418" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="419" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="420" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="421" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="422" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="423" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="424" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="425" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="426" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="427" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="428" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="429" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="430" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="431" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="432" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="433" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="434" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="435" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="436" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="437" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="438" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="439" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="440" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="441" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="442" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="443" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="444" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="445" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="446" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="447" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="448" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="449" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="450" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="451" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="452" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="453" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="454" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="455" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="456" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="457" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="458" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="459" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="460" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="461" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="462" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="463" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="464" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="465" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="466" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="467" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="468" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="469" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="470" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="471" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="472" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="473" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="474" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="475" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="476" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="477" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="478" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="479" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="480" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="481" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="482" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="483" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="484" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="485" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="486" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="487" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="488" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="489" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="490" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="491" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="492" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="493" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="494" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="495" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="496" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="497" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="498" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="499" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="500" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="501" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="502" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="503" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="504" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="505" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="506" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="507" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="508" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="509" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="510" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="511" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="512" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="513" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="514" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="515" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="516" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="517" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="518" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="519" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="520" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="521" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="522" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="523" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="524" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="525" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="526" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="527" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="528" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="529" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="530" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="531" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="532" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="533" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="534" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="535" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="536" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="537" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="538" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="539" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="540" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="541" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="542" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="543" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="544" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="545" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="546" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="547" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="548" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="549" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="550" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="551" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="552" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="553" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="554" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="555" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="556" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="557" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="558" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="559" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="560" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="561" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="562" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="563" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="564" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="565" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="566" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="567" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="568" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="569" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="570" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="571" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="572" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="573" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="574" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="575" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="576" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="577" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="578" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="579" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="580" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="581" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="582" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="583" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="584" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="585" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="586" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="587" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="588" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="589" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="590" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="591" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="592" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="593" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="594" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="595" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="596" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="597" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="598" src={blueSpaceship} />
        </div>
        <div className="map">
          <img id="599" src={blueSpaceship} />
        </div>{" "}
      </div>
      <div className="buttons">
        <button className="button" onClick={randomButton}>
          RANDOM
        </button>
        <button className="button" onClick={confirmButton}>
          CONFIRM{" "}
        </button>
      </div>
      {/* <div className="selectedPosition">
        <h2>{position}</h2>
      </div> */}
    </div>
  );
}

export default mapSelector;
