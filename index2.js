const nilai = 8
let nilaihuruf, ket 

//logika bercabang
if (nilai >= 85) {
    nilaihuruf ="A"
    ket ='Sangat baik'
}else if (nilai >= 75) {
    nilaihuruf ='B'
    ket ='Baik'
}else if (nilai >= 65) {
    nilaihuruf ='Cukup'
    ket = 'C'
}else if (nilai >= 55) {
    nilaihuruf ='D'
    ket = 'kurang'
}else{
    nilaihuruf ='E'
    ket ='Sangat Buruk'
    
}
    console.log('Nilai Anda' + nilaihuruf + '(' + ket +')')