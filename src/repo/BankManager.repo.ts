import { Bank } from './Bank.repo';

class BankManager {
    constructor(private bank: Bank) { }

    getTotalBankBalance(): number {
        return this.bank.getTotalBalance();
    }
}

export { BankManager };

