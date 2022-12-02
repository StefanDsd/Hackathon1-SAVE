import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

export default function CurrencyConverter() {
  const [response, setResponse] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const symbolsUrl = `https://api.apilayer.com/exchangerates_data/symbols`;

  const myHeaders = new Headers();
  myHeaders.append("apikey", process.env.REACT_APP_CURRENCY_APIKEY);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  useEffect(() => {
    fetch(symbolsUrl, requestOptions)
      .then((resp) => resp.json())
      .then((data) => setResponse(Object.keys(data.symbols)))
      .catch((err) => console.log(err));
  }, []);

  const handleCurrencyFetch = async () => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setConvertedAmount(result.result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={styles.big_container}>
      <div className={styles.title}>
        <h1>Currency Converter</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.select_container}>
          <h4>From</h4>
          <select onChange={(event) => setFromCurrency(event.target.value)}>
            <option>---</option>
            {response.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.select_container}>
          <h4>To</h4>
          <select onChange={(event) => setToCurrency(event.target.value)}>
            <option>---</option>
            {response.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.input_container}>
          <h4>Amount</h4>
          <input
            type="number"
            onChange={(event) => setAmount(event.target.value)}
          />
          <button
            onClick={() => handleCurrencyFetch()}
            className={styles.convert_button}
          >
            {" "}
            convert{" "}
          </button>
        </div>
        <div className={styles.input_container}>
          <h4 className={styles.result_container}>{convertedAmount}</h4>
        </div>
      </div>
    </div>
  );
}
