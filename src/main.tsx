import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

// Enable high performance rendering
const container = document.getElementById("root")!;
const root = createRoot(container, {
  // Enable concurrent features for better performance
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
