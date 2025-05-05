"use client"

import { addProduct } from "@/actions/add-product-action"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"

export default function AddProductForm({children}:{children:React.ReactNode}){

    const router = useRouter()

    const[state,dispatch]=useActionState(addProduct,{
        errors:[],
        success:''
    })

    useEffect(()=>{
        if(state.errors){
            state.errors.forEach(error=>console.log(error))
        }
        if(state.success){
            console.log(state.success)
            router.push('/admin/products')
        }
    },[state,router])

    return(
        <form className="space-y-5"
            action={dispatch}
        >
            {children}
            <input type="submit" 
                className="rounded bg-green-400 font-bold py-2 w-full cursor-pointer"
                value={"Agregar producto"}
            />
        </form>
    )
}