# Bank Service Code Challenge
This repository contains a NodeJS application written in TypeScript, along with Jest tests for testing the application's functionality.

## Test Cases
- ALLOWING customer(s) to deposit, withdraw, transfer and check their funds.
- NOT ALLOWING customer(s) to deposit and withdraw funds that beyond of their total account balance.
- ALLOWING bank manager to check the total bank balance (summation of customer(s) funds).

## Prerequisites
Make sure you have `NodeJS` and `Yarn` installed on your system.

## Getting Started
1. Clone the repository:
> git clone https://github.com/ellatuquero/bank-service-code-challenge.git
2. Navigate to the project directory:
> cd bank-service-code-challenge
3. Install dependencies using Yarn:
> yarn install

## Writing Tests:
Write your tests in files with a `.test.ts` extension. For example, if you have a TypeScript file create-account.ts, create a test file named create-account.test.ts in the same directory.

## Running Tests
Jest is used for testing. To run tests, use the following command:
> yarn start-test

Jest will automatically discover and run all the test files with the `.test.ts` extension in your project. It will compile your TypeScript files to JavaScript on the fly and execute the tests. If all tests pass, Jest will provide a summary of the test results.

#### Developer:
- Ella Tuquero
