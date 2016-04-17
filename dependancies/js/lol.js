var ip; //IP Address
var smask; //Subnet Mask - CIDR Form
var submask; //Subnet Mask - Expanded Form
var networkadd = [0, 0, 0, 0];//Default Gateway
var br = [0, 0, 0, 0];//Broadcast Address
var powers = [128, 64, 32, 16, 8, 4, 2, 1];
var ipadd;
var sumask;
var dg;
function clearAnswers() {
    "use strict";
    document.getElementById("SubnetMaskAns").innerHTML = "";
    document.getElementById("NetworkIPAns").innerHTML = "";
    document.getElementById("BroadcastIPAns").innerHTML = "";
    document.getElementById("DefaultGatewayAns").innerHTML = "";

    document.getElementById("SubnetMask").value = "";
    document.getElementById("NetworkIP").value = "";
    document.getElementById("BroadcastIP").value = "";
    document.getElementById("DefaultGateway").value = "";
    
    document.getElementById("SubnetMask").focus();
    document.getElementById("NetworkIP").focus();
    document.getElementById("BroadcastIP").focus();
    document.getElementById("DefaultGateway").focus();
    document.getElementById("SubnetMask").focus();
    
    document.getElementById("SubnetMask").setAttribute("class", "clear");
    document.getElementById("NetworkIP").setAttribute("class", "clear");
    document.getElementById("BroadcastIP").setAttribute("class", "clear");
    document.getElementById("DefaultGateway").setAttribute("class", "clear");
    document.getElementById("bdy").setAttribute("class", "");
}


function generateIP() {
    "use strict";
    document.getElementById('Ans').style.display='none';
    submask = "";
    clearAnswers();
    ipadd = [ Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    ip =  ipadd[0] + "." + ipadd[1] + "." + ipadd[2] + "." + ipadd[3];
    smask = Math.floor(Math.random() * 31) + 1;
    var i, j, temp, tmp;
    temp = smask;
    tmp = 0;
    for (i = 0; i < 4; i = i + 1) {
        for (j = 0; j < 8; j = j + 1) {
            if (temp > 0) {
                tmp = tmp + powers[j];
                temp = temp - 1;
            }
        }
        submask = submask + tmp + ".";
        /*jslint bitwise: true */
        networkadd[i] = (ipadd[i] & tmp);
        br[i] = (255 - tmp) + networkadd[i];
        
        tmp = 0;
    }
    submask = submask.slice(0, submask.length - 1);
    dg = networkadd[0] + "." + networkadd[1] + "." + networkadd[2] + "." + (networkadd[3] + 1);

    document.getElementById("IPAddress").value = ip + "/" + smask;
}

function showAnswers() {
    "use strict";
    document.getElementById("SubnetMaskAns").innerHTML = submask;
    document.getElementById("NetworkIPAns").innerHTML = networkadd[0] + "." + networkadd[1] + "." + networkadd[2] + "." + (networkadd[3]);
    document.getElementById("BroadcastIPAns").innerHTML = br[0] + "." + br[1] + "." + br[2] + "." + (br[3]);
    document.getElementById("DefaultGatewayAns").innerHTML = dg;
    document.getElementById("bdy").setAttribute("class", "cont");
    document.getElementById('Ans').style.display='block';
}


function checkIP() {
    "use strict";

    
    
    if ((document.getElementById("SubnetMask").value) === submask) {
        document.getElementById("SubnetMask").setAttribute("class", "right");
    } else {
        
        document.getElementById("SubnetMask").setAttribute("class", "wrong");
    }
    
    if ((document.getElementById("NetworkIP").value) === (networkadd[0] + "." + networkadd[1] + "." + networkadd[2] + "." + (networkadd[3]))) {
        document.getElementById("NetworkIP").setAttribute("class", "right");
    } else {
        
        document.getElementById("NetworkIP").setAttribute("class", "wrong");
    }
    
    if ((document.getElementById("DefaultGateway").value) === dg) {
        document.getElementById("DefaultGateway").setAttribute("class", "right");
    } else {
        
        document.getElementById("DefaultGateway").setAttribute("class", "wrong");
    }
    
    if ((document.getElementById("BroadcastIP").value) === br[0] + "." + br[1] + "." + br[2] + "." + br[3]) {
        document.getElementById("BroadcastIP").setAttribute("class", "right");
    } else {
        
        document.getElementById("BroadcastIP").setAttribute("class", "wrong");
    }
}

