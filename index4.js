//Array
//const lisNilai =['A', 'B', 'C']

//console.log(listNilai);
const dataMahasiswa = [
{
    nama :'Fika ismah',
    npm :'19421044',
    prodi :'Informatika'
},{
    nama :'Diah Ayu Ningtias',
    npm :'19421044',
    prodi :'Sistem Informasi'
}

]
//console.log(dataMahasiswa[1].npm)

for(let i in dataMahasiswa){
    console.log(dataMahasiswa [i].nama +'_' + dataMahasiswa [i].npm +'_' +dataMahasiswa [i].prodi)
}