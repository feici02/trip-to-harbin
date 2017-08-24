var map = new AMap.Map('map', {
    resizeEnable: true,
    zoom: 12, center: [126.631475,45.760346] });

for (var i = 0; i < places.length; i += 1) {
    var icon = new AMap.Icon({
        image: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png',
        size: new AMap.Size(50, 50)
    });

    var marker = new AMap.Marker({
        icon: icon,
        position: places[i].location.split(','),
        //offset: new AMap.Pixel(-12,-12),
        map: map
    });

    marker.content = '<h4>' + places[i].name + '</h3><hr/>' + places[i].comment;
    marker.on('click', markerClick);
    //marker.emit('click', {target: marker});
}

function markerClick(e) {
    var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
    infoWindow.setContent(e.target.content);
    infoWindow.open(map, e.target.getPosition());
}
