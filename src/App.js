import { useState } from "react";
import "./App.css";
import UseCurrency from "./hooks/UseCurrency";
import MainInput from "./component/MainInput";

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState("inr");
  let [to, setTo] = useState("usd");
  let [convert, setConvert] = useState(0);

  let currencyInfo = UseCurrency(from);
  let options = Object.keys(currencyInfo);

  let con = () => {
    setConvert(amount * currencyInfo[to]);
  };

  let swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
    >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                con();
              }}
            >
              <div className="w-full mb-1">
                <MainInput
                  label="From"
                  amount={amount}
                  amountChange={(amount) => setAmount(amount)}
                  options={options}
                  currencyChange={(currency) => setFrom(currency)}
                  setCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <MainInput
                  label="To"
                  amount={convert}
                  amountDisable
                  options={options}
                  currencyChange={(currency) => setTo(currency)}
                  setCurrency={to}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
