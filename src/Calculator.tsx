import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number | string>("");
  const [tipAmount, setTipAmount] = useState<number | string>("");
  const [totalBill, setTotalBill] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Stops page from refreshing

    const parsedBillAmount = parseFloat(billAmount.toString());
    const parsedTipPercentage = parseFloat(tipAmount.toString());

    if (!isNaN(parsedBillAmount) && !isNaN(parsedTipPercentage)) {
      setTotalBill(
        parsedBillAmount + (parsedBillAmount * parsedTipPercentage) / 100
      );
    } else {
      setTotalBill(null);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-contanier">
        <div className="amount-container">
          <label htmlFor="amount">Bill Amount</label>
          <input
            type="number"
            id="bill-amount"
            placeholder="What was your bill amount"
            value={billAmount !== undefined ? billAmount : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setBillAmount(event.target.value)
            }
          />
        </div>
        <div className="tip-container">
          <label htmlFor="tip">Tip Amount</label>
          <input
            type="number"
            id="tip-amount"
            placeholder="Enter your tip percent amount"
            value={tipAmount !== undefined ? tipAmount : ""}
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              setTipAmount(event.target.value)
            }
          />
        </div>
        <div className="button-container">
          <button type="submit">Calculate Bill</button>
        </div>
      </form>
      {totalBill !== null && (
        <div>
          <h2>your bill is {totalBill.toFixed(2)}$</h2>
        </div>
      )}
    </>
  );
};

export default Calculator;
