"use server"

import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    console.log('User created welcome page');
    const newUser = {
    };
    
    return parseStringify(newUser);
}