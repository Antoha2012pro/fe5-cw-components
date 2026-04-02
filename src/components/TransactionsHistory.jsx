import React from 'react'

const TransactionsHistory = ({ transactions }) => {
    return (
        <div
            style={{
                marginTop: '30px',
                padding: '24px',
                background: '#f8fafc',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                maxWidth: '600px',
                width: '100%',
            }}
        >
            <h2
                style={{
                    marginBottom: '20px',
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#1e293b',
                }}
            >
                Transactions
            </h2>

            <ul
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                }}
            >
                {transactions.map(item => (
                    <li
                        key={item.id}
                        style={{
                            padding: '16px 18px',
                            borderRadius: '16px',
                            background: '#ffffff',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                            border: '1px solid #e2e8f0',
                            transition: '0.2s ease',
                        }}
                    >
                        {item.comment && (
                            <span
                                style={{
                                    display: 'block',
                                    marginBottom: '8px',
                                    fontSize: '15px',
                                    color: '#475569',
                                }}
                            >
                                {item.comment}
                            </span>
                        )}

                        <strong
                            style={{
                                fontSize: '20px',
                                fontWeight: '700',
                                color: item.type === 'income' ? '#16a34a' : '#dc2626',
                            }}
                        >
                            {item.type === 'income' ? '+' : '-'}${item.amount}
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TransactionsHistory
