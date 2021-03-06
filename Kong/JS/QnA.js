function lock(){
    alert('비공개 문의내역은 작성자 본인만 확인하실 수 있습니다.');
}

function list(){
    $.ajax({
        type:"GET",
        url:"./list.html",
        success:function(data){
            $('#sub').html(data);
        },
        error:function(e){
            $('#sub').html(e.responseText);
        }
    });
}

// 버튼 이벤트
function allbox(id, id2){
    var n= document.getElementById(id);
    if(n.style.display != 'none'){
        n.style.display = 'none';
    }else{
        n.style.display = '';
    }
}

function showMap(){

    // 지도가 보여질 요소 찾아오ㅓ기
    var e= document.getElementById('map');

    // google 지도 생성 및 e요소에 붙여서 보이기 
    new google.maps.Map( e, {center:{lat:37.562161, lng:127.035199}, zoom:14} );
}

function showMarker(){
    // 지도가 보여질 요소
    var e= document.getElementById('map');

    // 원하는 좌표객체
    var mrhi= new google.maps.LatLng(37.562161, 127.035199);

    // 표시될 지도의 옵션객체
    var opts={
        center: mrhi,
        zoom: 14
    }

    // 지도 보이기
    var map= new google.maps.Map( e, opts);

    // 지도에 붙일 마커객체 만들기
    var marker= new google.maps.Marker({
        position: mrhi,
        title: "미래능력개발교육원"
    });
    // 지도에 마커 붙이기
    marker.setMap(map);

    // 마커 클릭 이벤트
    marker.addListener('click', function(){
        // 교육원 홈페이지 열기
        open('http://www.mrhi.or.kr','_blank');
    });

    // 두번째 마커 추가 이미지 변경
    var station= new google.maps.LatLng(37.561196, 127.038498);
    var marker2= new google.maps.Marker({
        position: station,
        title: "왕십리역",
        icon: "./access.png",
        map: map
    });

    // 마커 클릭 애니메이션
    marker2.addListener('click', function(){

        if(marker2.getAnimation()==null){
            marker2.setAnimation(google.maps.Animation.BOUNCE);

        }else{
            marker2.setAnimation(null);

        }

    });

    // 마커가 보여질때 애니메이션 처리도 가능함(여러개)

    // 왕십리역 약국들
    var pharmacys=[
        ["희망약국", 37.562516, 127.035679],
        ["이수프라자약국", 37.561155, 127.034560],
        ["연세우리약국", 37.560710, 127.035978],
        ["왕십리약국", 37.562162, 127.032171],

    ];

    for(var i=0; i<pharmacys.length; i++){
        var title= pharmacys[i][0];
        var pos= new google.maps.LatLng(pharmacys[i][1], pharmacys[i][2]);

        var m= new googel.maps.Marker({
            title: title,
            position: pos,
            icon:"./button-red.png",
            animation: google.maps.Animation.DROP,
            map: map
        });

        m.addListener('click', function(){
            alert(this.getTitle());
        });
    }


}