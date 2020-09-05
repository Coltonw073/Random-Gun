  var randomizer = document.getElementById("randomGunBut");
  var randimg = document.getElementById("gunImg");
  var randomGunImgs = new Array();
    randomGunImgs[0] = '../Gun Images/Shotguns/Pump/pump.png';

    randomGunImgs[1] = '../Gun Images/Shotguns/Pump/pump.png';

    randomGunImgs[2] = '../Gun Images/Shotguns/Pump/pump.png';
    
    randomGunImgs[3] = '../Gun Images/Shotguns/Pump/spump.png';
    
    randomGunImgs[4] = '../Gun Images/Shotguns/Pump/spump.png';
    
    randomGunImgs[5] = '../Gun Images/Shotguns/Combat/combat.png';
    
    randomGunImgs[6] = '../Gun Images/Shotguns/Combat/combat.png';
    
    randomGunImgs[7] = '../Gun Images/Shotguns/Combat/combat.png';
    
    randomGunImgs[8] = '../Gun Images/Shotguns/Charge/charge.png';
    
    randomGunImgs[9] = '../Gun Images/Shotguns/Charge/charge.png';
    
    randomGunImgs[10] = '../Gun Images/Shotguns/Charge/charge.png';
    
    randomGunImgs[11] = '../Gun Images/Shotguns/Charge/charge.png';
    
    randomGunImgs[12] = '../Gun Images/Shotguns/Charge/charge.png';
    
    randomGunImgs[13] = '../Gun Images/Assault Rifles/M16/M16.png';
    
    randomGunImgs[14] = '../Gun Images/Assault Rifles/M16/M16.png';
    
    randomGunImgs[15] = '../Gun Images/Assault Rifles/M16/M16.png';
    
    randomGunImgs[16] = '../Gun Images/Assault Rifles/M16/SM16.png';
    
    randomGunImgs[17] = '../Gun Images/Assault Rifles/M16/SM16.png';
    
    randomGunImgs[18] = '../Gun Images/Assault Rifles/Burst/Burst.png';
    
    randomGunImgs[19] = '../Gun Images/Assault Rifles/Burst/Burst.png';
    
    randomGunImgs[20] = '../Gun Images/Assault Rifles/Burst/Burst.png';
    
    randomGunImgs[21] = '../Gun Images/Assault Rifles/Burst/Burst.png';
    
    randomGunImgs[22] = '../Gun Images/Assault Rifles/Burst/Burst.png';
    
    randomGunImgs[23] = '../Gun Images/Assault Rifles/Scoped AR/SAR.png';
    
    randomGunImgs[24] = '../Gun Images/Assault Rifles/Scoped AR/SAR.png';
    
    randomGunImgs[25] = '../Gun Images/Assault Rifles/Scoped AR/SSAR.png';
    
    randomGunImgs[26] = '../Gun Images/Assault Rifles/Scoped AR/SSAR.png';
    
    randomGunImgs[27] = '../Gun Images/SMG/T-SMG/TSMG.png';
    
    randomGunImgs[28] = '../Gun Images/SMG/T-SMG/TSMG.png';
    
    randomGunImgs[29] = '../Gun Images/SMG/T-SMG/TSMG.png';
    
    randomGunImgs[30] = '../Gun Images/SMG/T-SMG/TSMG.png';
    
    randomGunImgs[31] = '../Gun Images/SMG/S-SMG/S-SMG.png';
    
    randomGunImgs[32] = '../Gun Images/SMG/S-SMG/S-SMG.png';
    
    randomGunImgs[33] = '../Gun Images/SMG/S-SMG/S-SMG.png';
    
    randomGunImgs[34] = '../Gun Images/Pistol/Pistol/Pistol.png';
    
    randomGunImgs[35] = '../Gun Images/Pistol/Pistol/Pistol.png';
    
    randomGunImgs[36] = '../Gun Images/Pistol/Pistol/Pistol.png';
    
    randomGunImgs[37] = '../Gun Images/Pistol/Revolver/Revolver.png';
    
    randomGunImgs[38] = '../Gun Images/Pistol/Revolver/Revolver.png';
    
    randomGunImgs[39] = '../Gun Images/Sniper/BASR/BASR.png';
    
    randomGunImgs[40] = '../Gun Images/Sniper/BASR/SBASR.png';
    
    randomGunImgs[41] = '../Gun Images/Sniper/BASR/SBASR.png';
    
    randomGunImgs[42] = '../Gun Images/RPG/RPG.png';
    
    randomGunImgs[43] = '../Gun Images/RPG/RPG.png';
    
    randomizer.addEventListener("click", function(){
    var randNum = Math.floor(Math.random() * randomGunImgs.length) + 0;
    randimg.src = randomGunImgs[randNum] ;
    if (randNum == 0) {
        new Audio('../Gun Sounds/Shotguns/Pump/pump.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Pump";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 1) {
        new Audio('../Gun Sounds/Shotguns/Pump/pump.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Pump";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 2) {
        new Audio('../Gun Sounds/Shotguns/Pump/pump.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Pump";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 3) {
        document.getElementById('gunnametext').innerHTML = "Epic Pump";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Shotguns/Pump/spump.mp3').play();
    }
    if (randNum == 4) {
        document.getElementById('gunnametext').innerHTML = "Legendary Pump";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Shotguns/Pump/spump.mp3').play();
    }
    if (randNum == 5) {
        document.getElementById('gunnametext').innerHTML = "Rare Combat";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
        new Audio('../Gun Sounds/Shotguns/Combat/combat.mp3').play();
    }
    if (randNum == 6) {
        document.getElementById('gunnametext').innerHTML = "Epic Combat";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Shotguns/Combat/combat.mp3').play();
    }
    if (randNum == 7) {
        document.getElementById('gunnametext').innerHTML = "Legendary Combat";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Shotguns/Combat/combat.mp3').play();
    }
    if (randNum == 8) {
        new Audio('../Gun Sounds/Shotguns/Charge/Charge.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Charge";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 9) {
        new Audio('../Gun Sounds/Shotguns/Charge/Charge.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Charge";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 10) {
        new Audio('../Gun Sounds/Shotguns/Charge/Charge.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Charge";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 11) {
        document.getElementById('gunnametext').innerHTML = "Epic Charge";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Shotguns/Charge/Charge.mp3').play();
    }
    if (randNum == 12) {
        document.getElementById('gunnametext').innerHTML = "Legendary Charge";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Shotguns/Charge/Charge.mp3').play();
    }
    if (randNum == 13) {
        new Audio('../Gun Sounds/Assault Rifles/M16/Assault Rifle.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common AR";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 14) {
        new Audio('../Gun Sounds/Assault Rifles/M16/Assault Rifle.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon AR";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 15) {
        new Audio('../Gun Sounds/Assault Rifles/M16/Assault Rifle.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare AR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 16) {
        document.getElementById('gunnametext').innerHTML = "Epic AR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Assault Rifles/M16/S Assault Rifle.mp3').play();
    }
    if (randNum == 17) {
        document.getElementById('gunnametext').innerHTML = "Legendary AR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Assault Rifles/M16/S Assault Rifle.mp3').play();
    }
    if (randNum == 18) {
        new Audio('../Gun Sounds/Assault Rifles/Burst/Burst.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Burst";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 19) {
        new Audio('../Gun Sounds/Assault Rifles/Burst/Burst.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Burst";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 20) {
        new Audio('../Gun Sounds/Assault Rifles/Burst/Burst.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Burst";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 21) {
        document.getElementById('gunnametext').innerHTML = "Epic Burst";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Assault Rifles/Burst/SBurst.mp3').play();
    }
    if (randNum == 22) {
        document.getElementById('gunnametext').innerHTML = "Legendary Burst";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Assault Rifles/Burst/SBurst.mp3').play();
    }
    if (randNum == 23) {
        new Audio('../Gun Sounds/Assault Rifles/SAR/SAR.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon SAR";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 24) {
        new Audio('../Gun Sounds/Assault Rifles/SAR/SAR.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare SAR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 25) {
        document.getElementById('gunnametext').innerHTML = "Epic SAR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Assault Rifles/SAR/SAR.mp3').play();
    }
    if (randNum == 26) {
        document.getElementById('gunnametext').innerHTML = "Legendary SAR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Assault Rifles/SAR/SAR.mp3').play();
    }
    if (randNum == 27) {
        new Audio('../Gun Sounds/SMG/T-SMG/T-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 28) {
        new Audio('../Gun Sounds/SMG/T-SMG/T-SMG.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 29) {
        document.getElementById('gunnametext').innerHTML = "Epic T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/SMG/T-SMG/T-SMG.mp3').play();
    }
    if (randNum == 30) {
        document.getElementById('gunnametext').innerHTML = "Legendary T-SMG";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/SMG/T-SMG/T-SMG.mp3').play();
    }
    if (randNum == 31) {
        new Audio('../Gun Sounds/SMG/S-SMG/S-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 32) {
        new Audio('../Gun Sounds/SMG/S-SMG/S-SMG.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 33) {
        new Audio('../Gun Sounds/SMG/S-SMG/S-SMG.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare S-SMG";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 34) {
        new Audio('../Gun Sounds/Pistol/Pistol/Pistol.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Common Pistol";
        document.getElementById('gunname').style.backgroundColor = "#cacaca";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-common-light),var(--rarity-common-dark))';
    }
    if (randNum == 35) {
        new Audio('../Gun Sounds/Pistol/Pistol/Pistol.mp3').play();
        document.getElementById('gunnametext').innerHTML = "Uncommon Pistol";
        document.getElementById('gunname').style.backgroundColor = "#80cf3f";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-uncommon-light),var(--rarity-uncommon-dark))';        
    }
    if (randNum == 36) {
        new Audio('../Gun Sounds/Pistol/Pistol/Pistol.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare Pistol";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 37) {
        document.getElementById('gunnametext').innerHTML = "Epic Rvlver";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Pistol/Revolver/Revolver.mp3').play();
    }
    if (randNum == 38) {
        document.getElementById('gunnametext').innerHTML = "Legendary Rvlver";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Pistol/Revolver/Revolver.mp3').play();
    }
    if (randNum == 39) {
        new Audio('../Gun Sounds/Sniper/BASR/BASR.mp3').play();        
        document.getElementById('gunnametext').innerHTML = "Rare BASR";
        document.getElementById('gunname').style.backgroundColor = "#2fd5e8";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-rare-light),var(--rarity-rare-dark))';
    }
    if (randNum == 40) {
        document.getElementById('gunnametext').innerHTML = "Epic BASR";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/Sniper/BASR/SBASR.mp3').play();
    }
    if (randNum == 41) {
        document.getElementById('gunnametext').innerHTML = "Legendary BASR";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/Sniper/BASR/SBASR.mp3').play();
    }
    if (randNum == 42) {
        document.getElementById('gunnametext').innerHTML = "Epic RPG";
        document.getElementById('gunname').style.backgroundColor = "#bd3ffa";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-epic-light),var(--rarity-epic-dark))';
        new Audio('../Gun Sounds/RPG/RPG.mp3').play();
    }
    if (randNum == 43) {
        document.getElementById('gunnametext').innerHTML = "Legendary RPG";
        document.getElementById('gunname').style.backgroundColor = "#fdae53";
        document.getElementById('gunImgBg').style.background = 'radial-gradient(var(--rarity-legendary-light),var(--rarity-legendary-dark))';
        new Audio('../Gun Sounds/RPG/RPG.mp3').play();
    }
});
