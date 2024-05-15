const { log } = require('console');
const os = require('os');
//info about current user
const user = os.userInfo();
log(user);

// method return the system uptime in seconds
log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  realese: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

log(currentOS);
