const os = require("os");

const user = os.userInfo();
console.log(user);
console.log(os.uptime());

const currentOs = {
  name: os.type(),
  Release: os.release(),
  TotalMem: os.totalmem(),
  FreeMem: os.freemem(),
};
console.log(currentOs);