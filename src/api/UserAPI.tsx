import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

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