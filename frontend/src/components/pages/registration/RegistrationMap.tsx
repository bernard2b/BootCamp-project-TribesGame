import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetchMap from "../../../api/mapFetch";

function mapSelector() {

  const onSubmit = async () => {
    setError("");
    try {
      await fetchMap(data);
      navigate("/")
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        console.error(error.message);
      }
    }
  };

  return <div className="mapSelector"></div>;
}

export default mapSelector;
