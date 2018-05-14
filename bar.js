// PATTERN 2: EXPORT AN ANONYMOUS FUNCTION


// ตรงนี้ ไม่มีการตั้งชื่อ function นะ
// ข้อเสียคือสร้างได้แค่ function เดียว
module.exports = function () { 
	console.log('bar!'); 
}
