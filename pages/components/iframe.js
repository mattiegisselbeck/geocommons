const MapIframe = () => {
  return (
    <div style={{ width: '100%', height: '500px', overflow: 'hidden' }}>
      <iframe
        src="https://umn.maps.arcgis.com/apps/instant/basic/index.html?appid=0f7b9679ac00410eb73f73ca731a8084"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};
