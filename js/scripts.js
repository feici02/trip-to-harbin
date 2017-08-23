var map = new AMap.Map('map', {
    resizeEnable: true,
    zoom: 12,
    center: [126.631475,45.760346]
});

AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
	for (var i = 0; i < places.length; i += 1) {
		var icon = new AMap.Icon({
			image: 'https://vdata.amap.com/icons/b18/1/2.png',
			size: new AMap.Size(24, 24)
		});

		var marker = new AMap.Marker({
			icon: icon,
			position: places[i].center.split(','),
			//offset: new AMap.Pixel(-12,-12),
			map: map
		});

		marker.content = '<strong>' + places[i].comment + '</strong>';
		marker.on('click', markerClick);
        marker.emit('click', {target: marker});
	}

	function markerClick(e) {
		/*
		var infoWindow = new SimpleInfoWindow({
	        infoTitle: '<strong>' + places[i].comment + '</strong>',
	        infoBody: '<p class="my-desc"><strong>这里是内容。</strong> <br/> 高德地图 JavaScript API，是由 JavaScript 语言编写的应用程序接口，' +
	            '它能够帮助您在网站或移动端中构建功能丰富、交互性强的地图应用程序</p>',
	        offset: new AMap.Pixel(0, -30)
	    });
		*/
		
		var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
});
