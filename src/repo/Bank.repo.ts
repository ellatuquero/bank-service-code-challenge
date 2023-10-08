import { Customer }  from './Customer.repo';

class Bank {

    private customers: Customer[] = [];

    addCustomer(customer: Customer): void {
        this.customers.push(customer);
    }

    getTotalBalance(): number {
        return this.customers.reduce((total, customer) => total + customer.getBalance(), 0);
    }
}

export { Bank };

