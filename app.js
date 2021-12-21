fetch("https://raw.githubusercontent.com/DevFest-India/website-data-2021/main/speakers.json").then(res=>res.json()).then(data=>{
    console.log(data)
    
   let skill= data.filter(speaker=>speaker.type.includes("Upskilling"))
   let gain = data.filter(speaker=>speaker.type.includes("Networking"))
   printData(skill,"UpskillingSpeakerData")
   printData(gain,"NetworkingSpeakerData")

}).catch(err => console.log(err))

function printData(data,id){
    for(let i=0; i< data.length; i++){
        document.getElementById(id).innerHTML +=`
        <div class="col-md-2 mt-5 text-center mycard">
                <div class="card " >
                    <img src="./speakers/${data[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${data[i].name}</h5>
                      <p class="card-text">${data[i].company.name}</p>
                      <a href="${data[i].twitter}" ><i class="bi bi-twitter "></i></a>
                      <a href="${data[i].linkedin}"><i class="bi bi-linkedin"></i></a>
                    </div>
                  </div>
            </div>
        `
    }
}

let arr=[2,67,89,09,76,5,7]
let res= arr.includes(2)
console.log(res)
