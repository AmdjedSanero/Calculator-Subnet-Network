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
console.log(ConvertIptoBinary("192.168.100.154"));
console.log(ConvertIptoDec(ConvertIptoBinary("192.168.100.154")));

console.log("Class : " + ClassOfRsx("192.168.100.154"));
let msq = Masq(18);

console.log("msq = " + msq);

console.log(ConvertIptoDec(msq));
Main();
function Main() {
  ip = ConvertIptoBinary("192.168.100.154");
  let ipAfterSplit = ip.split(".");
  let [a, b, c, d] = ipAfterSplit;
  let ipWitoutDot = a + b + c + d;
  let ipAfterSlice = ipWitoutDot.slice(0, 18);
  for (let i = 18; i < 32; i++) {
    ipAfterSlice = ipAfterSlice + "0";
  }
  let q = ipAfterSlice.slice(0, 8);
  let w = ipAfterSlice.slice(8, 16);
  let e = ipAfterSlice.slice(16, 24);
  let r = ipAfterSlice.slice(24, 32);
  let ipOne = Array.from(ipAfterSlice);
  let ipLast = Array.from(ipAfterSlice);

  ipOne[31] = "1";
  ipOne = ipOne.join("");
  for (let i = 18; i < 32; i++) {
    ipLast[i] = "1";
    if (i == 31) {
      ipLast[i] = "0";
    }
  }
  ipLast = ipLast.join("");
  let t = ipOne.slice(0, 8);
  let y = ipOne.slice(8, 16);
  let u = ipOne.slice(16, 24);
  let i = ipOne.slice(24, 32);
  let HostOne = t + "." + y + "." + u + "." + i;
  console.log(ConvertIptoDec(HostOne));

  let z = ipLast.slice(0, 8);
  let x = ipLast.slice(8, 16);
  let v = ipLast.slice(16, 24);
  let n = ipLast.slice(24, 32);
  let HostLast = z + "." + x + "." + v + "." + n;
  console.log(ConvertIptoDec(HostLast));
  ipAfterSliceAll = q + "." + w + "." + e + "." + r;

  console.log(ConvertIptoDec(ipAfterSliceAll));
}
