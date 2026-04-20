const duaSabah = `
<b>Sabah Duası</b><br><br>
اللَّهُمَّ بِكَ أَصْبَحْنَا...<br><br>
Allah’ım seninle sabahladık...
`;

function kontrolEt(){
  const saat = new Date().getHours();

  if(saat === 7){
    document.getElementById("dua").innerHTML = duaSabah;
  } else {
    document.getElementById("dua").innerHTML = "Günün duaları burada görünecek";
  }
}

kontrolEt();
setInterval(kontrolEt, 60000);