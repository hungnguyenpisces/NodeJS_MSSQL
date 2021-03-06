$("form").submit(function (e) {
	e.preventDefault();
});
var formData = {};
function selectdb() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		return;
	} else {
		for (var key in formData) {
			delete formData[key];
		}
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
		},
		success: function (rs) {
			$("#search-col-name").html(
				`<option value="" disabled selected>Search on column</option>`
			);
			$("#update-col-name1").html(
				`<option value="" disabled selected>Update on column</option>`
			);
			$("#update-col-name2").html(
				`<option value="" disabled selected>Column to reference</option>`
			);
			$("#delete-col-name").html(
				`<option value="" disabled selected>Delete on column</option>`
			);
			$("#w3head").html("");
			$("#w3body").html("");
			$("#add-db-row").html("");
			for (var values in rs[0]) {
				var col = `
							<th>${values}</th>
						`;
				var colname = `
							<option value="${values}">${values}</option>
							`;
				var addDBrow = `
                                    <input type="text" class="form-control" placeholder="Enter ${values}" name="${values}" required>
				`;
				$("#w3head").append(col);
				$("#search-col-name").append(colname);
				$("#update-col-name1").append(colname);
				$("#update-col-name2").append(colname);
				$("#delete-col-name").append(colname);
				$("#add-db-row").append(addDBrow);
				formData[values] = "";
			}
			$("#add-db-row").append(`<div class="input-group-append">
			<button class="btn btn-success" onclick="insertdb()">Add</button>
		</div>`);
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
				// console.log(rs[key]);
			}
		},
	});
}

function insertdb() {
	console.log(formData);
	$.ajax({
		url: "/insertdb",
		method: "POST",
		data: {
			database: $("#db-name").val(),
			table: $("#table-name").val(),
			formData: formData
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
				// console.log(rs[key]);
			}
		},
	});
}

function searchEnter() {
	var column = $("#search-col-name").val();
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
			column: $("#search-col-name").val(),
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
				// console.log(rs[key]);
			}
		},
	});
}
var childs = {
	Ass5: [
		{
			label: "????n H??ng",
			value: "DonHang",
		},
		{
			label: "????n H??ng S???n Ph???m",
			value: "DonHangSP",
		},
		{
			label: "H??ng H??a",
			value: "HangHoa",
		},
		{
			label: "Kh??ch H??ng",
			value: "KhachHang",
		},
	],
	LabS6: [
		{
			label: "????ng K?? Cung C???p",
			value: "DangKyCungCap",
		},
		{
			label: "D??ng Xe",
			value: "DongXe",
		},
		{
			label: "Lo???i D???ch V???",
			value: "LoaiDichVu",
		},
		{
			label: "M???c Ph??",
			value: "MucPhi",
		},
		{
			label: "Nh?? Cung C???p",
			value: "NhaCungCap",
		},
	],
	Ass6: [
		{
			label: "Th????ng Hi???u",
			value: "Brands",
		},
		{
			label: "Kho H??ng",
			value: "KhoHang",
		},
		{
			label: "S???n Ph???m",
			value: "Products",
		},
	],
	LabS7: [
		{
			label: "Kh??ch H??ng",
			value: "KhachHang",
		},
		{
			label: "Thu?? Bao",
			value: "ThueBao",
		},
	],
	LabS8: [
		{
			label: "Danh M???c S???n Ph???m",
			value: "DanhMucSP",
		},
		{
			label: "Ng?????i Ch???u Tr??ch Nhi???m",
			value: "NguoiChiuTrachNhiem",
		},
		{
			label: "S???n Ph???m",
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

function addbtn() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		selectdb();
		return;
	} else {
		$("#add-db").slideToggle();
	}
}
function updatebtn() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		selectdb();
		return;
	} else {
		$("#update-db").slideToggle();
	}
}
function deletebtn() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		selectdb();
		return;
	} else {
		$("#delete-db").slideToggle();
	}
}
function searchbtn() {
	var database = $("#db-name").val();
	var table = $("#table-name").val();
	if (database == null || table == null) {
		selectdb();
		return;
	} else {
		$("#search-db").slideToggle();
	}
}
