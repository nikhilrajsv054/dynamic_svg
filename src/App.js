// App.js
import React from 'react';
import DynamicSvgIcon from './DynamicSvgIcon';

function App() {
  return (
    <div>
      <h1>Dynamic SVG Icon Example</h1>
      <DynamicSvgIcon svgPath="C:/Users/HP/Documents/Dynamic s/svg_icon/src/logo.svg" />
      {/* You can pass different SVG paths here */}
    </div>
  );
}

export default App;