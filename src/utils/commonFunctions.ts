// Use for small, pure, general-purpose functions
// reusable functions that perform specific
// Formatting dates and numbers.
// Generating unique IDs.
// Performing mathematical calculations.
// String manipulation functions.
/**
 * Changes the body attribute
 */
const changeHTMLAttribute = (attribute: string, value: string): boolean => {
    if (document.documentElement) {
        document.documentElement.setAttribute(attribute, value);
    }
    return true;
};

// Function to set item in sessionStorage
const setSessionStorage = (key:string, value:any) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting sessionStorage item:', error);
    }
};

const getSessionStorage = (key: string): any => {
    try {
      const storedValue = sessionStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error('Error getting sessionStorage item:', error);
      return null;
    }
  };

export { changeHTMLAttribute,setSessionStorage ,getSessionStorage};