let all = document.querySelector(".all");
let input = document.querySelector(".ip");
let tablauu = document.querySelector(".tablau");
let select2 = document.querySelector(".Select2");

let select = document.createElement("select");
let go = document.createElement("span");
select.className = "Select";
go.className = "ok";
go.innerText = "GO!";
for (let i = 1; i <= 32; i++) {
  select.innerHTML =
    select.innerHTML +
    `
  <option value="${i}">${i}</option>
  `;
}
all.appendChild(select);
let select3 = document.createElement("select");
select3.className = "Select3";
for (let i = 1; i <= 7; i++) {
  select3.innerHTML =
    select3.innerHTML +
    `
  <option value="${i}">${i}</option>
  `;
}

go.addEventListener("click", function () {
  var value = select.options[select.selectedIndex].value;
  var value2 = select.options[select3.selectedIndex].value;
  console.log("m : " + value + " n : " + value2);

  Main(input.value, value, value2);
  tablauu.style.display = "flex";
});

all.appendChild(select);
all.appendChild(select3);
all.appendChild(go);
select2.addEventListener("change", function () {
  var value = select.options[select.selectedIndex].value;
  var value2 = select.options[select3.selectedIndex].value;
  var value3 = select2.options[select2.selectedIndex].text;
  console.log("saadsafsdf" + value3);
  Main2(value3, value, value2);
});

function ToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    if (decimal % 2 == 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}
function ConvertIptoBinary(ip) {
  let myIpArray = ip.split(".");
  let [a, b, c, d] = myIpArray;
  a = To8(a);
  b = To8(b);
  c = To8(c);
  d = To8(d);
  let abcd = a + "." + b + "." + c + "." + d;
  return abcd;
}
function ConvertIptoDec(ip) {
  let myIpArray = ip.split(".");
  let [a, b, c, d] = myIpArray;
  a = ConvertToDec(a);
  b = ConvertToDec(b);
  c = ConvertToDec(c);
  d = ConvertToDec(d);
  let abcd = a + "." + b + "." + c + "." + d;
  return abcd;
}
function To8(dec) {
  let k = ToBinary(dec);
  while (k.length != 8) {
    k = "0" + k;
    k.length++;
  }
  return k;
}
function ToN(dec, o) {
  let k = ToBinary(dec);
  while (k.length != o) {
    k = "0" + k;
    k.length++;
  }
  return k;
}
function ConvertToDec(binary) {
  let sum = 0,
    i = 0;
  while (binary) {
    sum = sum + Math.pow(2, i) * (binary % 10);
    i++;
    binary = parseInt(binary / 10);
  }

  return sum;
}
function Xor(ip1, ip2) {
  let myIp1Array = ip1.split(".");
  let myIp2Array = ip2.split(".");
  let [a, b, c, d] = myIp1Array;
  let [a1, b1, c1, d1] = myIp2Array;
  let abcd = a + b + c + d;
  let abcd1 = a1 + b1 + c1 + d1;
  let xor = "";
  console.log(abcd);
  console.log(abcd1);
  for (let i = 0; i < abcd.length; i++) {
    if (abcd[i] != abcd1[i]) {
      xor = xor + "1";
    } else {
      xor = xor + "0";
    }
  }
  return xor;
}
function Or(ip1, ip2) {
  let myIp1Array = ip1.split(".");
  let myIp2Array = ip2.split(".");
  let [a, b, c, d] = myIp1Array;
  let [a1, b1, c1, d1] = myIp2Array;
  let abcd = a + b + c + d;
  let abcd1 = a1 + b1 + c1 + d1;
  let or = "";
  console.log(abcd);
  console.log(abcd1);
  for (let i = 0; i < abcd.length; i++) {
    if (abcd[i] == "1" || abcd1[i] == "1") {
      or = or + "1";
    } else {
      or = or + "0";
    }
  }
  return or;
}
function And(ip1, ip2) {
  let myIp1Array = ip1.split(".");
  let myIp2Array = ip2.split(".");
  let [a, b, c, d] = myIp1Array;
  let [a1, b1, c1, d1] = myIp2Array;
  let abcd = a + b + c + d;
  let abcd1 = a1 + b1 + c1 + d1;

  let and = "";
  // console.log(abcd);
  console.log(abcd + "\n                AND \n" + abcd1);
  for (let i = 0; i < abcd.length; i++) {
    if (abcd[i] == "1" && abcd1[i] == "1") {
      and = and + "1";
    } else {
      and = and + "0";
    }
  }
  let af = and.slice(0, 8);
  let bf = and.slice(8, 16);
  let cf = and.slice(16, 24);
  let df = and.slice(24, 32);
  and = af + "." + bf + "." + cf + "." + df;
  return and;
}
function AndCut(ip1, ip2) {
  let and = "";
  // console.log(abcd);
  console.log(ip1 + "\n                AND \n" + ip2);
  for (let i = 0; i < ip1.length; i++) {
    if (ip1[i] == "1" && ip2[i] == "1") {
      and = and + "1";
    } else {
      and = and + "0";
    }
  }

  return and;
}
function ClassOfRsx(ip) {
  let clas = "";

  let myIpArray = ip.split(".");
  let [a, b, c, d] = myIpArray;
  let aINT = parseInt(a);
  if (aINT >= 0 && aINT <= 126) {
    return (clas = "A");
  } else if (aINT >= 128 && aINT <= 191) {
    return (clas = "B");
  } else if (aINT >= 192 && aINT <= 223) {
    return (clas = "C");
  } else if (aINT >= 224 && aINT <= 240) {
    return (clas = "D");
  }
}
function Masq(m) {
  let adressMasq = "";
  for (let j = 0; j < m; j++) {
    adressMasq = adressMasq + "1";
  }
  for (let i = m; i < 32; i++) {
    adressMasq = adressMasq + "0";
  }
  let a = adressMasq.slice(0, 8);
  let b = adressMasq.slice(8, 16);
  let c = adressMasq.slice(16, 24);
  let d = adressMasq.slice(24, 32);
  adressMasq = a + "." + b + "." + c + "." + d;
  return adressMasq;
}

function IPtoDecWithoutDot(ip) {
  let af = ip.slice(0, 8);
  let bf = ip.slice(8, 16);
  let cf = ip.slice(16, 24);
  let df = ip.slice(24, 32);
  and = af + "." + bf + "." + cf + "." + df;
  return and;
}
function BinFormat(number, o) {
  let ip = [];
  let n = ToN(number, o);
  ip.push(n);
  for (let index = o; index < 8; index++) {
    ip.push("0");
  }
  ip = ip.join("");

  console.log(":" + ip);
  return ip;
}
function Main(ipAddr, m, o) {
  m = parseInt(m);
  o = parseInt(o);
  console.log(typeof m);
  console.log(typeof o);
  m = m + o;

  select2.innerHTML = `
  <option value="${ipAddr}">${ipAddr}</option>
  `;
  console.log(ConvertIptoBinary(ipAddr));

  console.log(ConvertIptoDec(ConvertIptoBinary(ipAddr)));

  console.log("Class : " + ClassOfRsx(ipAddr));

  let PageMasq = document.querySelector(".CA");
  PageMasq.innerText = "Class " + ClassOfRsx(ipAddr);
  let msq = Masq(m);

  console.log("msq = " + msq);

  console.log(ConvertIptoDec(msq));
  ip = ConvertIptoBinary(ipAddr);
  let ipAfterSplit = ip.split(".");
  let [a, b, c, d] = ipAfterSplit;
  let ipWitoutDot = a + b + c + d;
  console.log("A " + a);
  console.log("B " + b);
  console.log("C " + c);
  console.log("D " + d);
  let ipSR = "";
  let zeroByte = "00000000";
  let aBool = false;
  let bBool = false;
  let cBool = false;
  let dBool = false;

  if (m < 8) {
    ipSR = a + zeroByte + zeroByte + zeroByte;
    aBool = true;
  } else if (m > 8 && m < 16) {
    ipSR = a + zeroByte + zeroByte + zeroByte;
    bBool = true;
  } else if (m > 16 && m < 24) {
    ipSR = a + b + zeroByte + zeroByte;
    cBool = true;
  } else if (m > 24 && m < 30) {
    ipSR = a + b + c + zeroByte;
    dBool = true;
  }
  console.log("IPSR " + ipSR);
  console.log(IPtoDecWithoutDot(ipSR));
  console.log(ConvertIptoDec(IPtoDecWithoutDot(ipSR)));
  console.log(cBool);
  let allSubAvaibleNumbers = Math.pow(2, o);
  console.log(allSubAvaibleNumbers);

  for (let indexX = 0; indexX < allSubAvaibleNumbers; indexX++) {
    let IpSub;
    let bin = BinFormat(indexX, o);
    if (aBool == true) {
      IpSub = a + "." + bin + "." + zeroByte + "." + zeroByte;
    } else if (bBool == true) {
      IpSub = a + "." + bin + "." + zeroByte + "." + zeroByte;
    } else if (cBool == true) {
      IpSub = a + "." + b + "." + bin + "." + zeroByte;
    } else if (dBool == true) {
      IpSub = a + "." + b + "." + c + "." + bin;
    }
    console.log(indexX + " " + ConvertIptoDec(IpSub));
    select2.innerHTML =
      select2.innerHTML +
      `
  <option value="${ConvertIptoDec(IpSub)}">${ConvertIptoDec(IpSub)}</option>
  `;
  }

  let ipAfterSlice = ipWitoutDot.slice(0, m);
  for (let i = m; i < 32; i++) {
    ipAfterSlice = ipAfterSlice + "0";
  }
  let q = ipAfterSlice.slice(0, 8);
  let w = ipAfterSlice.slice(8, 16);
  let e = ipAfterSlice.slice(16, 24);
  let r = ipAfterSlice.slice(24, 32);
  let ipOne = Array.from(ipAfterSlice);
  let ipLast = Array.from(ipAfterSlice);

  let ipBroadCast = Array.from(ipAfterSlice);

  for (let i = m; i < 32; i++) {
    ipBroadCast[i] = "1";
  }
  ipBroadCast = ipBroadCast.join("");

  let tb = ipBroadCast.slice(0, 8);
  let yb = ipBroadCast.slice(8, 16);
  let ub = ipBroadCast.slice(16, 24);
  let ib = ipBroadCast.slice(24, 32);
  let HostCast = tb + "." + yb + "." + ub + "." + ib;
  console.log("BroadCast : " + ConvertIptoDec(HostCast));
  let PageAB = document.querySelector(".AB");
  PageAB.innerText = ConvertIptoDec(HostCast);
  ipOne[31] = "1";
  ipOne = ipOne.join("");
  for (let i = m; i < 32; i++) {
    ipLast[i] = "1";
    if (i == 31) {
      ipLast[i] = "0";
    }
  }
  let ipSubLast = Array.from(ipOne);
  console.log("ip one : " + ipOne);
  for (let k = m + o; k < 32; k++) {
    ipSubLast[k] = "1";
    if (k == 31) {
      ipSubLast[k] = "0";
    }
  }
  ipSubLast = ipSubLast.join("");

  let zt = ipSubLast.slice(0, 8);
  let xt = ipSubLast.slice(8, 16);
  let vt = ipSubLast.slice(16, 24);
  let tt = ipSubLast.slice(24, 32);
  let HostLastSub = zt + "." + xt + "." + vt + "." + tt;
  console.log("Last sub " + HostLastSub);
  console.log(ConvertIptoDec(HostLastSub));

  ipLast = ipLast.join("");
  let t = ipOne.slice(0, 8);
  let y = ipOne.slice(8, 16);
  let u = ipOne.slice(16, 24);
  let i = ipOne.slice(24, 32);
  let HostOne = t + "." + y + "." + u + "." + i;

  let z = ipLast.slice(0, 8);
  let x = ipLast.slice(8, 16);
  let v = ipLast.slice(16, 24);
  let n = ipLast.slice(24, 32);
  let HostLast = z + "." + x + "." + v + "." + n;
  if (m > 30) {
    console.log("First Host : " + "NaN");
    let PageAPM = document.querySelector(".APM");
    PageAPM.innerText = "NaN";
    console.log("Last Host : " + "NaN");
    let PageADM = document.querySelector(".ADM");
    PageADM.innerText = "NaN";

    let PageNM = document.querySelector(".NM");

    PageNM.innerText = `NaN`;
  } else {
    console.log("First Host : " + ConvertIptoDec(HostOne));
    let PageAPM = document.querySelector(".APM");
    PageAPM.innerText = ConvertIptoDec(HostOne);

    console.log("Last Host : " + ConvertIptoDec(HostLast));

    let PageADM = document.querySelector(".ADM");
    PageADM.innerText = ConvertIptoDec(HostLast);
    let nm = Math.pow(2, 32 - m);
    let PageNM = document.querySelector(".NM");

    PageNM.innerText = nm + ` (${nm - 2}) `;
  }
  let PageARB = document.querySelector(".ARB");
  let PageSM = document.querySelector(".SM");
  let PageSMB = document.querySelector(".SMB");
  PageARB.innerText = ConvertIptoBinary(ipAddr);
  PageSM.innerText = ConvertIptoDec(msq);
  PageSMB.innerText = msq;
  ipAfterSliceAll = q + "." + w + "." + e + "." + r;

  console.log("Network Adress : " + ConvertIptoDec(ipAfterSliceAll));
  let PageAR = document.querySelector(".AR");
  PageAR.innerText = ConvertIptoDec(ipAfterSliceAll);
  console.log(ipAfterSliceAll);
  console.log(ConvertIptoDec(ipAfterSliceAll));

  console.log(ipAfterSlice);
}
//////////////////
function Main2(ipAddr, m, o) {
  console.log(ConvertIptoBinary(ipAddr));

  console.log(ConvertIptoDec(ConvertIptoBinary(ipAddr)));

  console.log("Class : " + ClassOfRsx(ipAddr));

  let PageMasq = document.querySelector(".CA");
  PageMasq.innerText = "Class " + ClassOfRsx(ipAddr);
  let msq = Masq(m);

  console.log("msq = " + msq);

  console.log(ConvertIptoDec(msq));
  ip = ConvertIptoBinary(ipAddr);
  let ipAfterSplit = ip.split(".");
  let [a, b, c, d] = ipAfterSplit;
  let ipWitoutDot = a + b + c + d;

  let ipAfterSlice = ipWitoutDot.slice(0, m);
  for (let i = m; i < 32; i++) {
    ipAfterSlice = ipAfterSlice + "0";
  }
  let q = ipAfterSlice.slice(0, 8);
  let w = ipAfterSlice.slice(8, 16);
  let e = ipAfterSlice.slice(16, 24);
  let r = ipAfterSlice.slice(24, 32);
  let ipOne = Array.from(ipAfterSlice);
  let ipLast = Array.from(ipAfterSlice);

  let ipBroadCast = Array.from(ipAfterSlice);

  for (let i = m; i < 32; i++) {
    ipBroadCast[i] = "1";
  }
  ipBroadCast = ipBroadCast.join("");

  let tb = ipBroadCast.slice(0, 8);
  let yb = ipBroadCast.slice(8, 16);
  let ub = ipBroadCast.slice(16, 24);
  let ib = ipBroadCast.slice(24, 32);
  let HostCast = tb + "." + yb + "." + ub + "." + ib;
  console.log("BroadCast : " + ConvertIptoDec(HostCast));
  let PageAB = document.querySelector(".AB");
  PageAB.innerText = ConvertIptoDec(HostCast);
  ipOne[31] = "1";
  ipOne = ipOne.join("");
  for (let i = m; i < 32; i++) {
    ipLast[i] = "1";
    if (i == 31) {
      ipLast[i] = "0";
    }
  }
  let ipSubLast = Array.from(ipOne);
  console.log("ip one : " + ipOne);
  for (let k = m + o; k < 32; k++) {
    ipSubLast[k] = "1";
    if (k == 31) {
      ipSubLast[k] = "0";
    }
  }
  ipSubLast = ipSubLast.join("");

  let zt = ipSubLast.slice(0, 8);
  let xt = ipSubLast.slice(8, 16);
  let vt = ipSubLast.slice(16, 24);
  let tt = ipSubLast.slice(24, 32);
  let HostLastSub = zt + "." + xt + "." + vt + "." + tt;
  console.log("Last sub " + HostLastSub);
  console.log(ConvertIptoDec(HostLastSub));

  ipLast = ipLast.join("");
  let t = ipOne.slice(0, 8);
  let y = ipOne.slice(8, 16);
  let u = ipOne.slice(16, 24);
  let i = ipOne.slice(24, 32);
  let HostOne = t + "." + y + "." + u + "." + i;

  let z = ipLast.slice(0, 8);
  let x = ipLast.slice(8, 16);
  let v = ipLast.slice(16, 24);
  let n = ipLast.slice(24, 32);
  let HostLast = z + "." + x + "." + v + "." + n;
  if (m > 30) {
    console.log("First Host : " + "NaN");
    let PageAPM = document.querySelector(".APM");
    PageAPM.innerText = "NaN";
    console.log("Last Host : " + "NaN");
    let PageADM = document.querySelector(".ADM");
    PageADM.innerText = "NaN";

    let PageNM = document.querySelector(".NM");

    PageNM.innerText = `NaN`;
  } else {
    console.log("First Host : " + ConvertIptoDec(HostOne));
    let PageAPM = document.querySelector(".APM");
    PageAPM.innerText = ConvertIptoDec(HostOne);

    console.log("Last Host : " + ConvertIptoDec(HostLast));

    let PageADM = document.querySelector(".ADM");
    PageADM.innerText = ConvertIptoDec(HostLast);
    let nm = Math.pow(2, 32 - m);
    let PageNM = document.querySelector(".NM");

    PageNM.innerText = nm + ` (${nm - 2}) `;
  }
  let PageARB = document.querySelector(".ARB");
  let PageSM = document.querySelector(".SM");
  let PageSMB = document.querySelector(".SMB");
  PageARB.innerText = ConvertIptoBinary(ipAddr);
  PageSM.innerText = ConvertIptoDec(msq);
  PageSMB.innerText = msq;
  ipAfterSliceAll = q + "." + w + "." + e + "." + r;

  console.log("Network Adress : " + ConvertIptoDec(ipAfterSliceAll));
  let PageAR = document.querySelector(".AR");
  PageAR.innerText = ConvertIptoDec(ipAfterSliceAll);
  console.log(ipAfterSliceAll);
  console.log(ConvertIptoDec(ipAfterSliceAll));

  console.log(ipAfterSlice);
}
