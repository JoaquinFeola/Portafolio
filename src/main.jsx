import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { PortfolioApp } from './PortfolioApp';
import './index.css'


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <PortfolioApp />
        </React.StrictMode>
    </BrowserRouter>
)
