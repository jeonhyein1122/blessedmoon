// 교수님 소스 
//////////////////////////////////////
// function showMarker(){
//     // 지도가 보여질 요소
//     var e= document.getElementById('map');

//     // 원하는 좌표객체
//     var mrhi= new google.maps.LatLng(37.63810244424352, 127.02682927646147);
//     // 표시될 지도의 옵션객체
//     var opts={
//         center: mrhi,
//         zoom: 14
//     }

//     // 지도 보이기
//     var map= new google.maps.Map( e, opts);

//     // 지도에 붙일 마커객체 만들기
//     var marker= new google.maps.Marker({
//         position: mrhi,
//         title: "aaa"
//     });
//     // 지도에 마커 붙이기
//     marker.setMap(map);
// }
///////////////////////////////////////
// 이자카야 술집 맛있음.
// 37.63810244424352, 127.02682927646147

// 구글에서 찾은 소스
///////////////////////////////////
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 37.63810244424352, lng: 127.02682927646147};

    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 14, center: uluru});
  
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({position: uluru, map: map});
}