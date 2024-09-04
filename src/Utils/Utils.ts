import { constant } from "../constants/constant";

export function setLocalStorage<T>(key: string, value: T): boolean {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(key, serializedValue);
        console.log(`Data stored successfully under the key: "${key}"`);
        return true;
    } catch (error) {
        console.error("Error storing data in local storage:", error);
        return false;
    }
}

// Function to update any part of the constant object
export function updateConstant<T extends keyof typeof constant>(credentials: Partial<typeof constant[T]>): any {
    try {
        // Update the constant object using spread operator to keep other parts unchanged
        return { ...constant, credentials, boolean: true };
    } catch (error) {
        console.error('Error updating constant:', error);
        return { boolean: false };
    }
}
