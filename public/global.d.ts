export {}; // <-- Nécessaire pour que le fichier soit traité comme un module

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
