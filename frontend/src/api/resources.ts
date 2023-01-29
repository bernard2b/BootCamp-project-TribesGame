import { useEffect, useState } from "react";
import fetchUserDetails from "./userDetails";

export default async function fetchResources() {
  const response = await fetch("/api/imperia/4/resources")
  const resourcesData = await response.json();

  return resourcesData;
}