var myArr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  


function dataHandling2(arr){
    arr.splice(1 , 1, arr[1] + " Elsharaway");
    arr.splice(2, 1, "Provinsi " + arr[2])
    arr.splice(4, 1, "Pria", "SMA Internasional Metro")
    
    return arr
}

myArr = dataHandling2(myArr)

console.log(myArr)
var date = myArr[3].split("/")
var bulan = ""
    switch(date[1]){
        case "01":
            bulan = "Januari"
            break
        case "02":
            bulan = "Februari"
            break
        case "03":
            bulan = "Maret"
            break
        case "04":
            bulan = "April"
            break
        case "05":
            bulan = "Mei"
            break
        case "06":
            bulan = "Juni"
            break
        case "07":
            bulan = "Juli"
            break
        case "08":
            bulan = "Agustus"
            break
        case "09":
            bulan = "September"
            break
        case "10":
            bulan = "Oktober"
            break
        case "11":
            bulan = "November"
            break
        case "12":
            bulan = "Desember"
            break
    }
var counter = 0
var newDate = []
var max = Number(date[0])
var length = date.length
console.log(bulan)
// console.log(Number(date[0])/*21*/ > Number(date[2])/*1989*/)
for(var j = 0; j<length; j++){
    // console.log("j", j)
    max = Number(date[0])
    // console.log("date sebelum splice", date)
    counter = 0 
    for (var i = 0; i<date.length; i++){
        // console.log("max dalam i loop", max)
        // console.log("date[i] dalam i loop", date[i])
        if (max<Number(date[i])){
            counter = i
            max = date[i]
            // console.log("berhasil masuk")
        }
    }
    // console.log("counter adalah", counter)
    // console.log(" max adalah" ,max)
    newDate.push(date[counter])
    date.splice(counter,1)
    // console.log("date", date)
}
console.log(newDate)
var newFormatDate = myArr[3].split("/")
// console.log("ini nih", newFormatDate)
console.log(newFormatDate.join("-"))
var hasilSlice = myArr[1].slice(0,14)
console.log(hasilSlice)