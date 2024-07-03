import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { User } from "../types/types";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type CreateUserTypes = {
    auth0Id: string;
    email: string;
}

export const useCreateUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    const createUserRequest = async (user: CreateUserTypes ) => {
        const access_token = await getAccessTokenSilently();
        const response = await fetch(`${BASE_URL}/api/users/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if(!response.ok) {
            throw new Error("Failed to create user.");
        }
    }

    const {mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation(createUserRequest)

    return {createUser, isLoading, isError, isSuccess}
}

type UpdateUserTypes = {
    name: string;
    city: string;
    country: string;
}

export const useUpdateUser = () => {
    const {getAccessTokenSilently} = useAuth0();

    const updateUserRequest = async (formData: UpdateUserTypes ) => {
        const access_token = await getAccessTokenSilently();
        const response = await fetch(`${BASE_URL}/api/users/user`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if(!response.ok) {
            throw new Error("Failed to update user.");
        }

        return response.json()
    }


    const {mutateAsync: updateUser, isLoading, isSuccess, error, reset} = useMutation(updateUserRequest)

    if(isSuccess) {
        toast.success("User updated successfully!")
    }

    if(error) {
        toast.error(error.toString());
        reset();
    }

    return {updateUser, isLoading, isSuccess, error, reset}
}

export const useGetUser = () => {
    const {getAccessTokenSilently} = useAuth0();

    const getUserRequest = async (): Promise<User> => {
        const access_token = await getAccessTokenSilently();
        const response = await fetch(`${BASE_URL}/api/users/user`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok) {
            throw new Error("Failed to fetch user.");
        }

        return response.json()
    }

    const {data: currentUser, isLoading, error} = useQuery("fetchCurrentUser", getUserRequest)

    if(error) {
        toast.error(error.toString())
    }

    return {currentUser, isLoading, error}
}