$("form").submit(function (e) {
	e.preventDefault();
});
function selectdb() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		$("#col-name").html(
			`<option value="" disabled selected hidden>Search on column</option>`
		);
	} else {
		$("#col-name").html("");
		loaddb();
	}
}
function loaddb() {
	$.ajax({
		url: "/database",
		method: "GET",
		data: {
			database: $("#db-name").val(),
			table: $("#table-name").val(),
			column: $("#col-name").val(),
		},
		success: function (rs) {
			$("#col-name").html("");
			$("#w3head").html("");
			$("#w3body").html("");

			for (var values in rs[0]) {
				var col = `
							<th>${values}</th>
						`;
				var colname = `
							<option value="${values}">${values}</option>
							`;
				$("#w3head").append(col);
				$("#col-name").append(colname);
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
function searchEnter() {
	var column = $("#col-name").val();
	var keyword = $("#keyword").val();
	if (column == null || keyword == "") {
		return;
	} else {
		searchdb();
	}
}
function searchdb() {
	$.ajax({
		url: "/search",
		method: "GET",
		data: {
			database: $("#db-name").val(),
			table: $("#table-name").val(),
			column: $("#col-name").val(),
			keyword: $("#keyword").val(),
		},
		success: function (rs) {
			$("#w3head").html("");
			$("#w3body").html("");

			for (var values in rs[0]) {
				var col = `
							<th>${values}</th>
						`;
				$("#w3head").append(col);
				// console.log(values);
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
// handleChange();
