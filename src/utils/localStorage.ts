import CryptoJS from 'crypto-js';
const secretKey = "test";
// Load state from localStorage
export const loadState = () => {
    try {
      const encryptedState = localStorage.getItem('reduxState');

      if (encryptedState === null) {
        return undefined; // If no state is saved, return undefined
      }
      const bytes = CryptoJS.AES.decrypt(encryptedState, secretKey); // Decrypt the state
     const decryptedState = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedState); // Parse saved state
    } catch (err) {
      console.error('Could not load state from localStorage:', err);
      return undefined; // If an error occurs, return undefined
    }
  };
  
  // Save state to localStorage
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      const encryptedState = CryptoJS.AES.encrypt(serializedState, secretKey).toString(); // Encrypt the state
      localStorage.setItem('reduxState', encryptedState); // Save serialized state
    } catch (err) {
      console.error('Could not save state to localStorage:', err);
    }
  };