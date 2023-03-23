import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(

    <ThemeProvider theme={theme}>
       <App />
    </ThemeProvider>
)
