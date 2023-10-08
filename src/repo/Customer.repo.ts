class Customer {

    private balance: number;

    constructor(private name: string, private initialDeposit: number) {
        this.balance = initialDeposit;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
    }

    getBalance(): number {
        return this.balance;
    }

    transfer(amount: number, recipient: Customer): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        recipient.deposit(amount);
    }

}

export { Customer } ;