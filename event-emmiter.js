const EventEmitter = require('events');

const customEmmitter = new EventEmitter()

customEmmitter.on('Response', (name,id) =>{
 console.log(`Data recieved user ${name} and id:${id}`);
})
customEmmitter.on('Response', () =>{
 console.log(`some other logic`);
})
customEmmitter.emit('Response', 'john',34)