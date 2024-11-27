let map = L.map('map').setView([34.643781838394645, 135.12190310073566], 15);

L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add markers with clickable links
L.marker([34.64298379846146, 135.13002408599783]).addTo(map)
    .bindPopup('<a href="#restaurant0">ノーショア：カフェ、パスタ、バーベキュ</a>');

L.marker([34.64344794627705, 135.124690919287]).addTo(map)
    .bindPopup('<a href="#restaurant1">レッドロブスター:シーフード、ステーキ</a>');

L.marker([34.64392679189439, 135.12391576086435]).addTo(map)
    .bindPopup('<a href="#restaurant2">スターバックス：カフェ</a>');

L.marker([34.64379479949287, 135.12569728836323]).addTo(map)
    .bindPopup('<a href="#restaurant3">YURT：バーベキュー、カフェ</a>');

L.marker([34.644347410598435, 135.12406128836327]).addTo(map)
    .bindPopup('<a href="#restaurant4">BREAD FLAVOR：カフェ、イタリア</a>');

L.marker([34.64408110511958, 135.12191057672646]).addTo(map)
    .bindPopup('<a href="#restaurant8">OTTO：ピザ、パスタ、イタリア</a>');

L.marker([34.642492110870485, 135.11327716930938]).addTo(map)
    .bindPopup('<a href="#restaurant6">GRATEFUL’S：ハンバーガ</a>');

L.marker([34.64267672452542, 135.11471079629146]).addTo(map)
    .bindPopup('<a href="#restaurant11">Riche：カフェ、洋食、ケーキ</a>');

L.marker([34.6429303769276, 135.116444626982068]).addTo(map)
    .bindPopup('<a href="#restaurant5">ビースタ：バーベキュ</a>');

L.marker([34.6421645318138, 135.1081221]).addTo(map)
    .bindPopup('<a href="#restaurant12">Ku-u-kan：カフェ</a>');