var mang = [1, 2, 3, 4, 4, 5, 6, 6];
var phanTuDuyNhat = null;

for (var i = 0; i < mang.length; i++) {
  var phanTuHienTai = mang[i];
  var daXuatHien = false;

  for (var j = 0; j < mang.length; j++) {
    if (i !== j && mang[j] === phanTuHienTai) {
      daXuatHien = true;
      break;
    }
  }

  if (!daXuatHien) {
    phanTuDuyNhat = phanTuHienTai;
    break;
  }
}

if (phanTuDuyNhat !== null) {
  console.log("Phần tử đầu tiên duy nhất là: " + phanTuDuyNhat);
} else {
  console.log("Không có phần tử duy nhất trong mảng.");
}