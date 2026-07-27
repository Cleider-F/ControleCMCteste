// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZ6sSQrD2mwhRYulB-5yvsTXtX5Oty27w",

  authDomain: "controlefinanceiro-738dc.firebaseapp.com",

  projectId: "controlefinanceiro-738dc",

  storageBucket: "controlefinanceiro-738dc.firebasestorage.app",

  messagingSenderId: "361251861150",

  appId: "1:361251861150:web:16457340493253907d018f"
};

const app = initializeApp(firebaseConfig);

// 🔥 EXPORTS
export const db = getFirestore(app);
export const auth = getAuth(app);

// 🔥 FORÇA O USO DO BUCKET CORRETO
export const storage = getStorage(
  app,
  "gs://controle-manutencao-cc96e.firebasestorage.app"
);
