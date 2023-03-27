let person = {
  cccd: 841861439,
  ho: "Huynh",
  ten: "Trung",
  email: "hvt9727@gmail.com",
  getFullName(){
      let name = this.ho +""+this.ten;
      return name ;
  }
}
console.log(person.getFullName());
class sinhvien {
  constructor(masv,hosv,tensv,email,sdt,namsinh){
      this.masv = masv;
      this.hosv = hosv;
      this.tensv= tensv;
      this.email=email;
      this.sdt= sdt;
      
      this.namsinh=namsinh;
  }
  getFullName(){
      let funllname = this.hoten+" "+this.tensv;
      return funllname;
  }
  getage(){
      let date = new date();
      let currentyear = date.getfunllyear();
      let age = currentyear - this.namsinh ;
      return age ;
  }
}
let sv1 = new sinhvien('pd001', 'tran','huy', 'thanh@gmail.com', '0235136823','2004');
let sv2 = new sinhvien('pd002', 'tran','ha', 'thanh@gmail.com', '0235136823','2008');
let sv3 = new sinhvien('pd003', 'tran','dat', 'thanh@gmail.com', '0235136823','2006');
let sv4 = new sinhvien('pd004', 'tran','hoan', 'thanh@gmail.com', '0235136823','2003');
let sv5 = new sinhvien('pd005', 'tran','anh', 'thanh@gmail.com', '0235136823','2005');

console.log(sv1);
console.log(sv2);
console.log(sv3);
console.log(sv4);
console.log(sv5);
console.log(age);
if (condition) {
  
}
