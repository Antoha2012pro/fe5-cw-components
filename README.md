# fe5-cw-components

A simple React banking UI that demonstrates component-based architecture, local state management, form handling, and transaction history rendering.

## Live Demo

[View Demo](https://fe5-cw-components.vercel.app)

## About the Project

This project is a small training application built with React. It simulates a basic banking interface where a user can:

- view the current balance;
- send a payment with a comment;
- see validation when the amount exceeds the available balance;
- track transaction history;
- receive success and error notifications.

The project is focused on practicing React component composition, props, state, conditional rendering, and basic UI logic.

## Tech Stack

- React
- React DOM
- React Scripts
- React Toastify
- UUID
- CSS

## Features

- Balance display with low balance warning
- Payment form with comment field
- Basic validation for insufficient funds
- Transaction history list
- Toast notifications for successful and failed operations
- State updates after each new transaction

## Project Structure

```text
fe5-cw-components/
├── public/
├── src/
│   ├── components/
│   │   ├── Balance.jsx
│   │   ├── TransactionsHistory.jsx
│   │   └── TransferForm.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md