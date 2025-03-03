const logId = (id:string|number) =>{
    console.log(id)
}
logId('abc1234')
logId(1234567)

//the log id accepted the string and the number as parameters
type ID=string | number
const userid:ID="ideicewncn"
const orserId :ID=1233

type direction='UP'|"down"|"left"|"right"
type mpesaState= "success" | "failed"|"pending"
function smsService(transState:mpesaState) {
    if (transState === "success") {
        //sendMessageSuccess()
    }
    if(transState === "pending"){

    }
    if(transState === "failed"){}


    type DigitalFormat="MP3" | "FLAC"
    type  PhysicalFormat="LP" | "CD"|'Casette'
    type AlbumFormat="DigitalFormat" | "PhysicalFormat"
}



// const printValue(value:string|number)=>{
//     if(typeOf value==='string'){
//         console.log(value.toUpperCase())
//     } else {
//             console.log(value.tofixed(2))
//         }
//     }
// printValue("hello")
// printValue("123.5")






