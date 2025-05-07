import React from 'react';
import { createRoot } from 'react-dom/client';
import Biodata from './Biodata';
import MenuItem from './component/MenuItem';
import Menu from './component/Menu';

const root = createRoot(document.getElementById('root'));
root.render(<Menu/>)
