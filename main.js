var reasons = [
    "Aanya Badkul",
    "Archit Badkul",
    "Ashok Badkul",
    "Aditi Badkul",
    "Ashish Badkul",
  ];
  
  var images = [ 
   "https://lh3.googleusercontent.com/-eOKlW-ZKhj0/X0Inw0oxweI/AAAAAAAAAAs/HFX06vAXv6sBq73RPC_92Fi46EnDfTNkACEwYBhgLKtQDABHVOhwB0At8wXgssvAHDpYuxNbb4JG_nAE6JIDiPIzkMe24m5_kC6s0LV_4mTmPQYqeebOeSzE9PELjsuXerOXzLjCixWr1lPRZa7kSycvGdWH4uJJeCbF5tSIWrpYHpi7RUrw6DyrZI7CXhtSltoGIy66MJTmegXKFEmt8HbDlwOBaIduQ81R_IWFGaHMhk-j3cKjCLu53rx3Y__r1anM84CWQaasqn_OsZGbNWz6h4CbWrraWa-SeTvd-1vRCqsr6KjQp46KHkvXZb2_3xj7bOh9j3FvkF1P1szmZ_wmrxoWlV9c1fV7AeSSkmo7wvv8SFETcjNyWdCdLJnHwV8Canf9kI0tMr2lbDmMEQY1A2MQVZn8t-i6rVzufj4zqMudQXGDLeO4msDt5Ha5c_hTb3bH8gdvSGkcfstuikUNsyjO6yo9bxAu-Cu-TLrpGzixBo2yLXMSdLNi26ZUb02sEGmzbE79SPt3klD-GiwDAvr3yIGReJXBpGZZ8-gLdZjfV26Y1f2-U2IrkSQokc-xKi0UEQTrbZioNL5xWHxzpKIYINJJO7dwLIe2BbXnCGOxwlOwvBjbK_DkGVIv8ZnoF4dVKpcgFRYa8LU3Qjhm6pzNTMPjhjogG/w140-h140-p/IMG_3305.HEIC", 
   "https://lh3.googleusercontent.com/-FwjzvS4ZJNI/XfSCr1KZyBI/AAAAAAAACD8/xca612sXI2oDnRiYSZGWnkT0CcZ4H01XACEwYBhgLKtMDABHVOhwC_NOsVuINiM8cgJ-BWafBN7k1fkmqFfJLxX6OyWiJT7AAJeVUOse7wCEIJcXY_psQ3ssdPbw_il7LRlJ14slHyJeSxQWQnkYwI1_LtNoX4kblE2EUIfIRab240959g0UTGaREHDiWXoKMIcX2nGzcxpaG0itrfafxSJhr3XwixsBhvQ2o8WWNKli98yWuytQgIHvAgwTLF7kUHUWhzD1HLql3ZPfzMTe7TD6DYiRVleWuv5cqY_iT-D_iKfhhAByb_-DdddRH-zMv-FibJRJrGrTWiiF-33Mqt20ncurzY5c1xs-AYxeFNktQOThYdj3U2JY2otceRpydrHtszC72fSs96Y2Bfvh-C70tLj5V7qqpYRZX8XbBEOsOMX9EUENQUNUqQduPMQEoXw0_JGEtZjnDc7e24V3tCwz6IP9Khw05JuTR94JCzVGwN0To_5UAl6F3RUbwRP8q9Tnr2Pud-YTg6M-Cpvg1XyodjsB2IFgCXnsOWnuwGOvweNc5N_uVnfSabKn-d8hlEYt7lfxouTQkwq6yMHfuU0IMZsDsmI9qeVGa-nXr4wGYPdY2jR3NCh8V_oxw-rPEgXs4WBWFjr1rdYUVW-B26XwYKzwwkuSOiAY/w139-h140-p/20190525_202331.jpg",
   "https://drive.google.com/file/d/1WE_mRXMnKeY9UuaydKvT5b0D6gfCYWt3/view?usp=sharing",
    "https://drive.google.com/file/d/1nWM5dc8WYdG8AAG2xPok4USMucotEPIf/view?usp=sharing", 
    "https://drive.google.com/file/d/1U7KJKFBAM3xM_8eYlkEf3IhiCCA035L1/view?usp=sharing",
    
  
  ];
  
  var i = 0;
  function nextslide(){ document.getElementById("reasontext").innerHTML = reasons[i];
  document.getElementById("album").src = images[i];
  i++;
                        document.getElementById("audio").play();
  }