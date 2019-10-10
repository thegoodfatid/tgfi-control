import auth from '@feathersjs/authentication-client';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import config from 'config';
import io from 'socket.io-client';

const { apiEndpoint, authKey } = config;

const socket = io(apiEndpoint, {
  transports: ['websocket'],
  forceNew: true,
});

const client = feathers()
  .configure(socketio(socket))
  .configure(
    auth({
      cookie: authKey, // the name of the cookie to parse the JWT from when cookies are enabled server side
      storageKey: authKey, // the key to store the accessToken in localstorage or AsyncStorage on React Native
      storage: window.localStorage, // Passing a WebStorage-compatible object to enable automatic storage on the client.
    })
  );

export default client;

// const messageService = client.service('messages');

// messageService.on('created', message => console.log('Created a message', message));

// // Use the messages service from the server
// messageService.create({
//   text: 'Message from client',
// });
