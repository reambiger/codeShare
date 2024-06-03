import io from 'socket.io-client';

// Replace 'http://localhost:5050' with your server URL
const socket = io('http://localhost:5050');

export default socket;