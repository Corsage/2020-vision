/**
 * Socket Management.
 * Primarily used for sending/receiving calls between clients. 
 */

const io = require('socket.io');

/**
 * Initializes when a connection is made.
 * @param {SocketIO.socket} socket 
 */
function initSocket(socket) {
    console.log("New client connected: " + socket.id);

    socket
        .on('init', (data) => {
            
        })
        .on('request', (data) => {
            
        })
        .on('call', (data) => {
            
        })
        .on('end', (data) => {
            // Call ended by either participant.
            // TODO: Delete call, keep notes (?)
        })
        .on('disconnect', (reason) => {
            console.log(socket.id + " disconnected reason: " +  reason);
        })
}

module.exports = (server) => {
    io.listen(server, { log: true })
      .on('connection', initSocket);
};