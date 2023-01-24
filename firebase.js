   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
   import { getDatabase,ref,set,onValue,remove,push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   const firebaseConfig = {
    databaseURL: "https://versionshantering-default-rtdb.europe-west1.firebasedatabase.app",
     apiKey: "AIzaSyCNPaLMcP10i9TdWae4Pkl6m9DEq7erO_U",
     authDomain: "versionshantering.firebaseapp.com",
     projectId: "versionshantering",
     storageBucket: "versionshantering.appspot.com",
     messagingSenderId: "793446011804",
     appId: "1:793446011804:web:f61e175c1dd62a3c11ee59"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const db = getDatabase (app);
   console.log(db)

   document.getElementById("submit-btn").addEventListener(  
    "click",(event) =>{
        let inputName= document.getElementById("inName").value
        console.log(inputName);
        set( ref(db, inputName) , {
            dateOfCretion: new Date().toString('yyyy-MM-dd hh:mm:ss'),
            
        
        });
    }
    )

    
    
    onValue(ref(db, '/'), (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childKey, childData)
    
        document.getElementById('message-container').innerHTML += ` <p> ${childKey}</p>`
    
    
    });
}

    );


    
   