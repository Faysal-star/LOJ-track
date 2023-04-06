let handles = ["dragoon_slayer" , "masked_pi" , "hafizr283" , "ashsifat1511" , "taut0logy" , "vallagenakisu" , "n8_hawk" , "apn7","mofazzal874" , "another_ded_girl" , "smsadik82" , "who_cares" , "uf61021", "rifat_15" , "faiyaz27" , "nafis_75" , "safin07" , "maria_joli" , "sujoy28" , "tasfia_007"] ;
let ii = 1 ;
for(let i = 0  ; i < handles.length ; i++){
    let xhr = new XMLHttpRequest() ;
    let url = "https://lightoj.com/user/"+handles[i] ;
    xhr.open("GET" , url) ;

    xhr.onload = () =>{
        if(xhr.status != 200){
            console.log(`${handles[i]} ${xhr.status}`);
        }
        let doc = xhr.response ;
        const parser = new DOMParser() ;
        const xmlD = parser.parseFromString(doc , "text/html") ;
        let cnt = xmlD.querySelectorAll(".like-count")[0].outerText ;
        let count = cnt.substring(0 , cnt.indexOf(" ")) ;

        let name = xmlD.querySelector(".subheader-middle h2").innerText;

        document.getElementById("tbl").innerHTML += `
            <tr>
                <td>${ii++}</td>
                <td>${name} (<a href=${url} target="_blank">${handles[i]}</a>) </td>
                <td> ${count} </td>
            </tr>
        `
    }
    xhr.send() ;
}