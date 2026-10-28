"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientYear() {
  return String(new Date().getFullYear());
}

function getServerYear() {
  return "";
}

export default function CurrentYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <>{year}</>;
}
