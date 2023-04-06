let handles = ["dragoon_slayer" , "masked_pi" , "hafizr283" , "ashsifat1511" , "taut0logy" , "vallagenakisu" , "n8_hawk" , "apn7","mofazzal874" , "another_ded_girl" , "smsadik82" , "who_cares" , "uf61021"] ;

for(let i = 0 ; i < handles.length ; i++){
    let xhr = new XMLHttpRequest() ;
    let url = "https://lightoj.com/user/"+handles[i] ;
    xhr.open("GET" , url) ;
    xhr.send() ;

    xhr.onload = () =>{
        let doc = xhr.response ;
        const parser = new DOMParser() ;
        const xmlD = parser.parseFromString(doc , "text/html") ;
        let cnt = xmlD.querySelectorAll(".like-count")[0].outerText ;
        let count = cnt.substring(0 , cnt.indexOf(" ")) ;
        // console.log(xmlD.querySelectorAll(".like-count")[0].outerText) ;
        let name = xmlD.querySelector(".subheader-middle h2").innerText;
        // console.log(name) ;

        document.getElementById("tbl").innerHTML += `
            <tr>
                <td>${name} (<a href=${url} target="_blank">${handles[i]}</a>) </td>
                <td> ${count} </td>
            </tr>
        `
    }
}