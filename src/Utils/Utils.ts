import { constant } from "../constants/constant";
import { Card, Challenge } from "../typescript/typescript";

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

export function getDataFromLocalStorage<T>(key: string): { data: T | null; exists: boolean } {
  // Retrieve data from local storage
  const storedData = localStorage.getItem(key);

  if (storedData) {
    try {
      // Try to parse the data if it's in JSON format
      const parsedData: T = JSON.parse(storedData);
      return { data: parsedData, exists: true };
    } catch (error) {
      // If parsing fails, return the raw data as a string
      console.error("Error parsing stored data:", error);
      return { data: storedData as unknown as T, exists: true };
    }
  }

  // If no data is found, return null and false
  return { data: null, exists: false };
}

export function generateRandomMongoDBId(): { id: string; success: boolean } {
  try {
    // Generate a random 24-character hexadecimal string similar to a MongoDB ObjectID
    const id = Array.from({ length: 24 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join("");

    // Return the generated ID and a success flag
    return { id, success: true };
  } catch (error) {
    console.error("Error generating random ID:", error);
    return { id: "", success: false };
  }
}

export const findCardById = (cards: Card[], id: any): Card | undefined => {
  return cards.find(card => card.id === id);
};

export function removeObjecteById(challenges: Challenge[], id: string): Challenge[] {
  return challenges.filter(challenge => challenge.id !== id);
}

export function determineDateStatus(startDate: Date, endDate: Date): string {
  const currentDate = new Date();

  // Clear time components for accurate comparison
  // currentDate.setHours(0, 0, 0, 0);
  // startDate.setHours(0, 0, 0, 0);
  // endDate.setHours(0, 0, 0, 0);

  if (endDate < currentDate) {
    return 'Past';
  } else if (startDate <= currentDate && endDate >= currentDate) {
    return 'Active';
  } else if (startDate > currentDate) {
    return 'Upcoming';
  } else {
    return 'Unknown'; // In case none of the conditions match
  }
}

