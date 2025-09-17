function colorHandler(color){
        console.log(document.getElementById("bulb"));
        let ison=true;
     if(ison){
                bulb.style.backgroundColor=color;
                    ison=false;

            }
            else{
                bulb.style.backgroundColor=color;
                ison=true;}
            console.log(color);
            const bulb=document.getElementById("bulb");
            bulb.style.backgroundColor=color;
    }