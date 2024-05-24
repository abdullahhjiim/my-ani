"use server"

import { signIn } from "../../../auth";


export async function login(data) {
    try {
       const response = await signIn("credentials", {...data,
            redirect: false
        })
        return response;
    } catch(error) {
        console.log(error);
        throw new Error(error);
    }
}