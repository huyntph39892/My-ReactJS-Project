import { useState } from "react";

const useFetchList = (path, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
};

const fetchList = async () => {
  try {
    setLoading(true);
    let queryString = new URLSearchParams(query).toString();
    console.log(`${path}?${queryString}`);
  } catch (error) {}
};
