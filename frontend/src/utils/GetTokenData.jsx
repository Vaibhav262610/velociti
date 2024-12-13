import jwtDecode from "jwt-decode";

// Decode the token to extract data
export const getTokenData = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded; // Contains payload data
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
};
