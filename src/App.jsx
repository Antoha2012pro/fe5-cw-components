import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import TransferForm from "./components/TransferForm";
import Balance from "./components/Balance";
import TransactionsHistory from "./components/TransactionsHistory";

function App() {
  const [balance, setBalance] = useState(1000);
  const [history, setHistory] = useState([
    {
      id: uuidv4(),
      type: "income",
      amount: 700,
      comment: "Зарплата",
    },
    {
      id: uuidv4(),
      type: "expense",
      amount: 699,
      comment: "За газ",
    },
  ]);

  const handleTransfer = (amount, comment) => {
    setBalance((value) => value - amount);
    setHistory([
      {
        id: uuidv4(),
        type: "expense",
        amount,
        comment,
      },
      ...history,
    ]);
  };

  return (
    <>
      <div
        style={{
          background: "#f4f7f6",
          minHeight: "100vh",
          padding: "20px",
          fontFamily: "Segoe UI",
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '32px'
        }}
      >
        <h1
          style={{
            color: "#1a1a2e",
            fontWeight: '800',
          }}
        >
          Bank app
        </h1>
        <Balance balance={balance} />
        <TransferForm onTransfer={handleTransfer} maxLimit={balance} />
        <TransactionsHistory transactions={history} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
