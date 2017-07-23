# learn-angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3 and guiding in post [Simples aplicação real time com Angular 4 e firebase](https://braziljs.org/blog/simples-aplicacao-real-time-com-angular-4-e-firebase-parte-1/) on blog [BrazilJS](https://braziljs.org/blog/).


## before run application

1 - Install firebase functions dependencies with command "npm install" in your terminal in path "/functions".

2 - Create file "firebase.configs.ts" on path "src/environments" with this content:

```javascript
export const FirebaseConfig = {
  apiKey: "api-key",
  authDomain: "auth-domain",
  databaseURL: "database-url",
  projectId: "project-id",
  storageBucket: "storage-bucket",
  messagingSenderId: "messaging-sender-id"
};
```

`See this informations in your firebase console.`