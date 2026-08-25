import '@testing-library/jest-dom/vitest';

// Membuat tiruan localStorage agar bisa diakses oleh Vitest/Node
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = String(value);
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

// Terapkan mock ke objek global
global.localStorage = localStorageMock;