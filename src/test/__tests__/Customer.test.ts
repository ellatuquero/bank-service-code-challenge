import { Bank, Customer } from '../../repo';
import { CustomerList as customers } from '../data';


describe("Customer Related Test", () => {

    let customerJuan : Customer 
    let customerAndrea : Customer 

    beforeEach(() => {
        const bank = new Bank();
        // Initial Deposit 1,000
        customerJuan = new Customer(customers[0].name, customers[0].initialDeposit) 
        // Initial Deposit 500
        customerAndrea = new Customer(customers[1].name, customers[1].initialDeposit) 
        bank.addCustomer(customerJuan);
        bank.addCustomer(customerAndrea);
    });

    test('Should ALLOW customer Juan to DEPOSIT 2,000 --- New Balance: 3,000', () => {
        customerJuan.deposit(2000);
        expect(customerJuan.getBalance()).toBe(3000);
    });

    test('Should ALLOW customer Juan to WITHDRAW 500 --- New Balance: 2,500 ', () => {
        customerJuan.deposit(2000);
        customerJuan.withdraw(500);
        expect(customerJuan.getBalance()).toBe(2500);
    });

    test('Should ALLOW customer Juan to TRANSFER 1,000 to customer Andrea --- New Balance: 1,500 ', () => {
        customerJuan.deposit(2000);
        customerJuan.withdraw(500);
        customerJuan.transfer(1000, customerAndrea)
        expect(customerAndrea.getBalance()).toBe(1500);
    });

    test('Should ALLOW customer Juan to CHECK Balance --- Current Balance:  1,500', () => {
        customerJuan.deposit(2000);
        customerJuan.withdraw(500);
        customerJuan.transfer(1000, customerAndrea)
        expect(customerJuan.getBalance()).toBe(1500);
    });

    test('Should NOT ALLOW customer Juan to WITHDRAW 2,000 --- Insufficient Funds', () => {
        customerJuan.deposit(2000);
        customerJuan.withdraw(500);
        customerJuan.transfer(1000, customerAndrea)
        expect(() => customerJuan.withdraw(2000)).toThrow('Insufficient funds');
    });

    test('Should NOT ALLOW customer Juan to TRANSFER 3,000 to Customer Andrea -- Insufficient Funds', () => {
        customerJuan.deposit(2000);
        customerJuan.withdraw(500);
        customerJuan.transfer(1000, customerAndrea)
        expect(() => customerJuan.transfer(3000, customerAndrea)).toThrow('Insufficient funds');
    });

})
