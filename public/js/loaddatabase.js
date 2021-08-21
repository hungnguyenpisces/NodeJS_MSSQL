function ass5dh() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "Ass5",
			table: "DonHang",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#ass5donhang").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaSoDonHang}</td>
                    <td>${rs[key].Ngay}</td>
                    <td>${rs[key].TongTien}</td>
                    <td>${rs[key].KhachHangID}</td>
                </tr>
                `;
				$("#ass5donhang").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function ass5dhsp() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "Ass5",
			table: "DonHangSP",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#ass5donhangsp").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaSoDonHang}</td>
                    <td>${rs[key].MaSP}</td>
                    <td>${rs[key].SoLuong}</td>
                    <td>${rs[key].ThanhTien}</td>
                </tr>
                `;
				$("#ass5donhangsp").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function ass5hh() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "Ass5",
			table: "HangHoa",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#ass5hanghoa").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaSP}</td>
                    <td>${rs[key].TenSP}</td>
                    <td>${rs[key].MoTa}</td>
                    <td>${rs[key].Gia}</td>
                    <td>${rs[key].DonVi}</td>
                </tr>
                `;
				$("#ass5hanghoa").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function ass5kh() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "Ass5",
			table: "KhachHang",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#ass5khachhang").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].ID}</td>
                    <td>${rs[key].TenKhachHang}</td>
                    <td>${rs[key].SoDienThoai}</td>
                    <td>${rs[key].DiaChi}</td>
                </tr>
                `;
				$("#ass5khachhang").append(result);
				console.log(rs[key]);
			}
		},
	});
}

function labs6dkcc() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "LabS6",
			table: "DangKyCungCap",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#labs6dangkycuncap").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaDKCC}</td>
                    <td>${rs[key].MaNCC}</td>
                    <td>${rs[key].MaDV}</td>
                    <td>${rs[key].DongXe}</td>
                    <td>${rs[key].MaMP}</td>
                    <td>${rs[key].NgayBatDauCC}</td>
                    <td>${rs[key].NgayKetThucCC}</td>
                    <td>${rs[key].SoLuongXeDangKy}</td>
                </tr>
                `;
				$("#labs6dangkycuncap").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function labs6dx() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "LabS6",
			table: "DongXe",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#labs6dongxe").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].DongXe}</td>
                    <td>${rs[key].HangXe}</td>
                    <td>${rs[key].SoChoNgoi}</td>
                </tr>
                `;
				$("#labs6dongxe").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function labs6ldv() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "LabS6",
			table: "LoaiDichVu",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#labs6loaidichvu").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaDV}</td>
                    <td>${rs[key].TenDV}</td>
                </tr>
                `;
				$("#labs6loaidichvu").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function labs6mp() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "LabS6",
			table: "MucPhi",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#labs6mucphi").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaMP}</td>
                    <td>${rs[key].DonGia}</td>
                    <td>${rs[key].MoTa}</td>
                </tr>
                `;
				$("#labs6mucphi").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function labs6ncc() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: "LabS6",
			table: "NhaCungCap",
			// database: $('#db-name').val(),
			// table: $('#table-name').val()
		},
		success: function (rs) {
			$("#labs6nhacungcap").html("");
			for (var key in rs) {
				var result = `
                <tr>
                    <td>${rs[key].MaNCC}</td>
                    <td>${rs[key].TenNCC}</td>
                    <td>${rs[key].DiaChi}</td>
                    <td>${rs[key].SDT}</td>
                    <td>${rs[key].MaSoThue}</td>
                </tr>
                `;
				$("#labs6nhacungcap").append(result);
				console.log(rs[key]);
			}
		},
	});
}
function loaddb() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			// database: "LabS6",
			// table: "NhaCungCap",
			database: $("#db-name").val(),
			table: $("#table-name").val(),
		},
		success: function (rs) {
			$("#w3head").html("");
			$("#w3body").html("");

			for (var key in rs) {
				if (key < 1) {
					for (var values in rs[0]) {
						var col = `
							<th>${values}</th>
						`;
						$("#w3head").append(col);
						// console.log(values);
					}
				} else break;
			}

			for (var key in rs) {
				var row = `
					<tr id="bodyrow${key}"></tr>
				`;
				$("#w3body").append(row);
				for (var values in rs[key]) {
					var td = `
						<td>${rs[key][values]}</td>
					`;
					$(`#bodyrow${key}`).append(td);
				}
				console.log(rs[key]);
			}
		},
	});
}

var childs = {
	Ass5: [
		{
			label: "Đơn Hàng",
			value: "DonHang",
		},
		{
			label: "Đơn Hàng Sản Phẩm",
			value: "DonHangSP",
		},
		{
			label: "Hàng Hóa",
			value: "HangHoa",
		},
		{
			label: "Khách Hàng",
			value: "KhachHang",
		},
	],
	LabS6: [
		{
			label: "Đăng Ký Cung Cấp",
			value: "DangKyCungCap",
		},
		{
			label: "Dòng Xe",
			value: "DongXe",
		},
		{
			label: "Loại Dịch Vụ",
			value: "LoaiDichVu",
		},
		{
			label: "Mức Phí",
			value: "MucPhi",
		},
		{
			label: "Nhà Cung Cấp",
			value: "NhaCungCap",
		},
	],
	Ass6: [
		{
			label: "Thương Hiệu",
			value: "Brands",
		},
		{
			label: "Kho Hàng",
			value: "KhoHang",
		},
		{
			label: "Sản Phẩm",
			value: "Products",
		},
	],
	LabS7: [
		{
			label: "Khách Hàng",
			value: "KhachHang",
		},
		{
			label: "Thuê Bao",
			value: "ThueBao",
		},
	],
	LabS8: [
		{
			label: "Danh Mục Sản Phẩm",
			value: "DanhMucSP",
		},
		{
			label: "Người Chịu Trách Nhiệm",
			value: "NguoiChiuTrachNhiem",
		},
		{
			label: "Sản Phẩm",
			value: "SanPham",
		},
	],
	W3DB: [
		{
			label: "Categories",
			value: "Categories",
		},
		{
			label: "Customers",
			value: "Customers",
		},
		{
			label: "Employees",
			value: "Employees",
		},
		{
			label: "Order Details",
			value: "OrderDetails",
		},
		{
			label: "Orders",
			value: "Orders",
		},
		{
			label: "Products",
			value: "Products",
		},
		{
			label: "Shippers",
			value: "Shippers",
		},
		{
			label: "Suppliers",
			value: "Suppliers",
		},
	],
};

function handleChange() {
	var x = document.getElementById("db-name").value;

	var childOptions = childs[x];
	var childSelect = document.getElementById("table-name");
	childSelect.innerHTML = "";

	childOptions.forEach(function (option) {
		var optionEle = document.createElement("option");
		optionEle.value = option.value;
		optionEle.label = option.label;

		childSelect.appendChild(optionEle);
	});
}
handleChange();
