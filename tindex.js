var express = require("express");
var app = express(); // tao 1 ung dung tu express module
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("Server is running....");
});
// cap quyen truy cap cac file static (css, img, jquery...)
app.use(express.static("public"));
app.set("view engine","ejs");// Báo rằng sẽ sử dụng ejs làm view engine
// khai bao de ket noi database
var mssql = require("mssql");
// var config = { // thong tin may chu
//     server: "DESKTOP-LDE3KDI",
//     user:"sa",
//     password:"sa123",
//     database:"T2104E",
//     stream: false,
//     port:1433,
//     options: {
//         trustedConnection: true,
//         encrypt: true,
//         enableArithAbort: true,
//         trustServerCertificate: true,
//     },
// }
var config = { // thong tin may chu
    server: "t2004e-waddbserver.database.windows.net",
    user:"demosql",
    password:"Abcd@123",
    database:"WebApplication3_db",
    stream: false,
    port:1433,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
}
// ket noi voi database
mssql.connect(config,function (err){
    if(err) console.log(err);
    else console.log("connected database!");
})
// tao doi tuong truy van du lieu
var sql = new mssql.Request();
// routing - bo dinh tuyen (nhan vien cua van phong)
app.get("/",function (req,res){ // trang chu
    res.send("Trang chu");
});
app.get("/khach-hang",function (req,res){
    // can lay danh sach khach hang
    var txt_sql = "select * from Ass5_KhachHang;";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.send(rs.recordset);// rows.recordset : 1 array, mỗi element là 1 object từ table
    })
});
// liet ke danh sachs hang hoa
app.get("/hang-hoa",function (req,res){
    // lay thong tin tu form tim kiem
    var kw = req.query.keyword||"";
    // can lay danh sach khach hang
    var txt_sql = "select * from Ass5_HangHoa where TenSP like '%"+kw+"%';";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.render("home",{
            hanghoa:rs.recordset
        })
    })
});
app.get("/chi-tiet-sp",function (req,res){
    var id = req.query.id;
    var txt_sql = "select * from Ass5_HangHoa where MaSP = "+id+";";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else if(rs.recordset.length > 0){
            res.render("chitiet",{
                p:rs.recordset[0]
            })
        }else res.status(404).send('Not found?');
    })
})
// liet ke danh sach don hang
app.get("/don-hang",function (req,res){
    // can lay danh sach khach hang
    var txt_sql = "select * from Ass5_DonHang inner join Ass5_KhachHang on Ass5_DonHang.KhachHangID = Ass5_KhachHang.ID;";
    sql.query(txt_sql,function (err,rs){
        if(err) res.send(err);
        else res.send(rs.recordset);// rows.recordset : 1 array, mỗi element là 1 object từ table
    })
});