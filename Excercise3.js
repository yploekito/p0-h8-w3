function dataHandling(arr){
out = ""
    for (i=0; i<arr.length; i++){
        for (j=0; j<arr[i].length; j++){
            var keterangan =""
            // console.log ("i saat ini adalah", i, "dengan j", j)
            switch (j){
                case 0: 
                    out = out + 'Nomor ID: ' + arr[i][j] +"\n"
                    // console.log(keterangan)
                    break
                case 1: 
                    out = out + 'Nama Lengkap: ' + arr[i][j] +"\n" 
                    break
                case 2:
                    out = out + 'TTL: ' + arr[i][j] + ' '
                    break
                case 3:
                    out = out + arr[i][j] +'\n'
                    break
                case 4:
                    out = out + 'Hobi: ' + arr[i][j]
            } 
        } 
        if (i !== arr.length -1) {
            out = out +"\n\n"
        }
    } return out
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]
console.log(dataHandling(input))
// dataHandling(input)
// console.log(input)
