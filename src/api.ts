import { TransactionsResponseSchema } from "./schemas"

export async function getSalesByDate(date: string) {
    const url = `${process.env.NEXT_PUBLIC_DOMAIN}/admin/sales/api?transactionDate=${date}`
    const req = await fetch(url)
    const json = await req.json()
    
    
    try {
        const transactions = TransactionsResponseSchema.parse(json)
        return transactions
    } catch (error) {
        console.log(error)
    }
}