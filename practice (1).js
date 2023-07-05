
// ADICIONE SUS LINKS FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyAR_z1I8yXZutmpbM6E7ZeVSSk7lFNOA1M",
  authDomain: "kwitter-50038.firebaseapp.com",
  databaseURL: "https://kwitter-50038-default-rtdb.firebaseio.com",
  projectId: "kwitter-50038",
  storageBucket: "kwitter-50038.appspot.com",
  messagingSenderId: "221479482085",
  appId: "1:221479482085:web:bee5c6ccb7a35c0f319a0c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser()
{
  userName = document.getElementById("userName").value;
  firebase.database().ref("/").child(userName).update({
    purpose : "adding user"
  });
}


