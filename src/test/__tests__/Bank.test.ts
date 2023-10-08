import { Bank, BankManager, Customer } from '../../repo';
import { CustomerList as customers } from '../data';


describe("Bank Related Test", () => {

    let bank : Bank 
    let bankManager : BankManager 

    beforeEach(() => {
        bank = new Bank();
        bankManager = new BankManager(bank);
    });

    test('Should ALLOW bank manager to check the total bank balance', () => {
        customers.map(customer => {
            let customerDetails = new Customer(customer.name, customer.initialDeposit)
            bank.addCustomer(customerDetails);
        })
        expect(bankManager.getTotalBankBalance()).toBe(1500);
    });

})
