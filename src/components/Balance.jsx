import React from 'react';

const Balance = ({ balance }) => {
    const isLowBalance = balance < 500;

    return (
<div
  style={{
    background: "#ffffff",
    padding: "18px 20px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
    border: isLowBalance ? "1px solid #fecaca" : "1px solid #e2e8f0",
    display: "inline-block",
    minWidth: "220px",
  }}
>
  <p
    style={{
      fontFamily: "Segoe UI, sans-serif",
      fontSize: "15px",
      margin: 0,
      color: "#475569",
    }}
  >
    Ваш баланс:
    <span
      style={{
        marginLeft: "8px",
        fontWeight: 700,
        fontSize: "18px",
        color: isLowBalance ? "#dc2626" : "#0f172a",
      }}
    >
      ${balance}
    </span>
  </p>

  {isLowBalance && (
    <p
      style={{
        margin: "8px 0 0 0",
        fontSize: "13px",
        color: "#dc2626",
      }}
    >
      Низький баланс
    </p>
  )}
</div>
    );
};

export default Balance;
