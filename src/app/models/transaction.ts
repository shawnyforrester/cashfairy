import { Customer } from "./customer";

export interface Transaction{

    id: number;
    sender_id: number;
    receiver_id: number;
    date: any;
    amount: number;
    sender: Customer;
}