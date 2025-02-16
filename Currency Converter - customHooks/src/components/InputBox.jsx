import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  amountDisbaled = false,
  onChangeAmount,
  selectCurrency = "usd",
  onChangeCurrency,
  currencyOptions = [],
  currencyDisabled = false,
}) => {
  const amountInputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label className="text-black mb-2 inline-block" htmlFor={amountInputId}>
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="outline-none w-full bg-transparent py-2"
          placeholder="Amount"
          value={amount}
          disabled={amountDisbaled}
          onChange={(e) => onChangeAmount(Number(e.target.value))}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          value={selectCurrency}
          onChange={(e) => onChangeCurrency(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
