import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(data);
        return setData(response[currency]);
      });
  }, [currency, data]);
  console.log(data);
  return data;
}
export default useCurrencyInfo;
