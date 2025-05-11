let i=document.querySelector('#text')
let submit=document.querySelector('#submit')
let cnm=document.querySelector('#cname')
let currency=document.querySelector('#cn')
let cc=document.querySelector('#cc')

submit.addEventListener('click',function(e){
    e.preventDefault()
    cnm.innerHTML=i.value
    if(i.value ===""){
        alert("enter country name")
    }else{
        fun(i.value)
       
    }
})

async function fun(val){
    let response= await fetch("https://restcountries.com/v3.1/name/"+val)
let res=await response.json()
console.log(res[0])

currency.innerHTML= Object.values(res[0].currencies)[0].name +'  '+Object.values(res[0].currencies)[0].symbol
cc.innerHTML= Object.values(res[0].capital)
}

