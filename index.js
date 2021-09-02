var express = require("express");
var app = express();
var port = process.env.PORT || 7000;

//only for localhost debug
var morgan = require("morgan");
app.use(morgan("dev"));
//comment before commit

app.listen(port, function () {
	console.log("Node server is runing...");
});

app.use(express.static("public")); //cấp quyền cho user truy cập các file trong thư mục public
app.set("view engine", "ejs");

var mssql = require("mssql");
var config = {
	// thong tin may chu database
	server: "localhost",
	user: "sa",
	password: "0222",
	database: "",
	stream: false,
	port: 1433,
	options: {
		trustedConnection: true,
		encrypt: true,
		enableArithAbort: true,
		trustServerCertificate: true,
	},
};
// ket noi voi database
mssql.connect(config, function (err) {
	if (err) console.log(err);
	else console.log("Database is connected...");
});
// tao doi tuong truy van du lieu
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/insertdb", function(req,res){
	var ten = req.body;
	var txt_sql = "insert into <table>(colum,colum...)values(req.body.value)";
	console.log(ten);
})

var sql = new mssql.Request();
app.get("/database", function (req, res) {
	var database = req.query.database;
	var table = req.query.table;
	var dbquery = `use ${database} select * from ${table}`;
	sql.query(dbquery, function (err, rs) {
		if (err) res.send(err);
		else res.send(rs.recordset);
	});
});
app.get("/search", function (req, res) {
	var database = req.query.database;
	var table = req.query.table;
	var column = req.query.column;
	var keyword = req.query.keyword;
	var dbquery = `use ${database} select * from ${table} where ${column} like N'%${keyword}%'`;
	sql.query(dbquery, function (err, rs) {
		if (err) res.send(err);
		else res.send(rs.recordset);
	});
});

// routing - bo dinh tuyen (nhan vien cua van phong)
app.get("/", function (req, res) {
		res.render("home");
});

app.get("/hang-hoa", function (req, res) {
	// lay thong tin tu form tim kiem
	var kw = req.query.keyword || "";
	// can lay danh sach khach hang
	var txt_sql = "select * from HangHoa where TenSP like '%" + kw + "%';";
	sql.query(txt_sql, function (err, rs) {
		if (err) res.send(err);
		else
			res.render("thome", {
				hanghoa: rs.recordset,
			});
	});
});
app.get("/chi-tiet-sp", function (req, res) {
	var id = req.query.id;
	var txt_sql = "select * from HangHoa where MaSP = " + id + ";";
	sql.query(txt_sql, function (err, rs) {
		if (err) res.send(err);
		else if (rs.recordset.length > 0) {
			res.render("chitiet", {
				p: rs.recordset[0],
			});
		} else res.status(404).send("Not found?");
	});
});
