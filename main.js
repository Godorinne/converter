

function totin(){
    let f = Number(document.querySelector("#input").value);

    let t= f/19;

    let p= t-parseInt(t);
    let fp=p*16;
    
    let pone= fp-parseInt(fp);
    let fpone=pone*8;

    document.querySelector("#result").innerHTML = parseInt(t)+"တင်း";
    document.querySelector("#result2").innerHTML=parseInt(fp)+"ပြည်";
    document.querySelector("#result3").innerHTML=parseInt(fpone)+"ပုံး";

    document.querySelector("#input").value = "";

}

