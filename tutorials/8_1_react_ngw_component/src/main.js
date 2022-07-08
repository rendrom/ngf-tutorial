
import React, {useRef} from 'react';
import { render } from 'react-dom';
import ReactNgwMap from '@nextgis/react-ngw-leaflet';
import { MapControl, ToggleControl } from '@nextgis/react-ngw-map';


function App() {
  const ngwMap = useRef();

  const mapOptions = {
    baseUrl: 'https://demo.nextgis.com',
    resources:[{resource: 6118, id: 'webmap', fit: true}],
    whenCreated: (n) => { 
      ngwMap.current = n;
    }, 
  }

  const onClick = (status) => {
    if (ngwMap.current) {
      ngwMap.current.toggleLayer('webmap', status);
      if (status) {
        ngwMap.current.fitLayer('webmap');
      }
    }
  }

  return <ReactNgwMap {...mapOptions} >
    <ToggleControl html={{on: 'Hide', off: 'Show'}} onClick={onClick} position={'top-right'} status={true}/>
    <MapControl position='bottom-right' margin>
      <a href="https://nextgis.com" target="_blank" rel="noreferrer">
        <img src="https://nextgis.com/img/nextgis.png" alt="NextGIS" />
      </a>
    </MapControl>
  </ReactNgwMap>
}



const rootNode = document.getElementById('app');
render(<App />, rootNode);

