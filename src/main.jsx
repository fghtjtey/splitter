//from react
import React from 'react'
import { createRoot } from 'react-dom/client'
//from App
import App  from './App.jsx';

//index  css
import './index.css'

//from fonts
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';

createRoot(document.getElementById('root')).render(<App />)
