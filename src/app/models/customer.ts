import { Account } from "./account";

export interface Customer{
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    city: string;
    email: string;
    dob: string;
    telephone: string;
    role: string;
    transactions: [];
    accounts: Account[];
}