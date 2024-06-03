import io from 'socket.io-client';

const socket = io('https://codeshareserver-5.onrender.com:5050');

export default socket;