// DynamicSvgIcon.js
import React, { useState, useEffect } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function DynamicSvgIcon({ svgPath }) {
  const [SvgComponent, setSvgComponent] = useState(null);

  useEffect(() => {
    const importSvg = async () => {
      try {
        const { default: Svg } = await import(`../${svgPath}`);
        setSvgComponent(() => Svg);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };
    importSvg();
  }, [svgPath]);

  if (!SvgComponent) {
    return null; // or some placeholder while loading
  }

  return <SvgIcon component={SvgComponent} viewBox="0 0 24 24" />;
}

export default DynamicSvgIcon;
