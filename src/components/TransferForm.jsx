import { useState } from "react";
import { toast } from 'react-toastify';

const TransferForm = ({ maxLimit, onTransfer }) => {
  const [amount, setAmount] = useState(0);
  const [comment, setComment] = useState("");
  const isOverLimit = amount > maxLimit;

  const sendMoney = () => {
    if (amount > 0 && !isOverLimit) {
      onTransfer(Number(amount), comment);
      setAmount(0);
      setComment("");

      toast.success(`${amount}₴ was transfered`);
    } else {
      toast.error(`Transaction was failed`)
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "24px",
        borderRadius: "20px",
        border: isOverLimit ? "2px solid #ef4444" : "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        maxWidth: "600px",
        width: '100%',
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "24px",
          fontWeight: "700",
          color: "#1e293b",
        }}
      >
        Зробити платіж
      </h3>

      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        placeholder="Введіть суму платежу"
        style={{
          padding: "12px 14px",
          width: "100%",
          fontSize: "16px",
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <input
        type="text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Введіть коментар"
        style={{
          padding: "12px 14px",
          width: "100%",
          fontSize: "16px",
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      {isOverLimit && (
        <p
          style={{
            margin: 0,
            color: "#dc2626",
            fontSize: "14px",
            fontWeight: "500",
            background: "#fef2f2",
            padding: "10px 12px",
            borderRadius: "10px",
            border: "1px solid #fecaca",
          }}
        >
          Недостатньо коштів
        </p>
      )}

      <button
        onClick={sendMoney}
        disabled={isOverLimit}
        style={{
          marginTop: "4px",
          padding: "12px 20px",
          background: isOverLimit ? "#cbd5e1" : "linear-gradient(135deg, #4f46e5, #3b82f6)",
          color: "#ffffff",
          border: "none",
          borderRadius: "12px",
          cursor: isOverLimit ? "not-allowed" : "pointer",
          fontSize: "16px",
          fontWeight: "600",
          boxShadow: isOverLimit ? "none" : "0 8px 20px rgba(59, 130, 246, 0.25)",
          transition: "0.2s ease",
        }}
      >
        Надіслати
      </button>
    </div>
  );
};

export default TransferForm;
