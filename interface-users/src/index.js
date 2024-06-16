import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import Way from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <Way />
    <GlobalStyles />
</>);


