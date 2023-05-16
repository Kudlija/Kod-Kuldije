const firebaseConfig = {
    apiKey: "AIzaSyDT7LjKPzsgNZokAisvb0vgzhFfX8t1w3U",
    authDomain: "da3-users.firebaseapp.com",
    projectId: "da3-users",
    storageBucket: "da3-users.appspot.com",
    messagingSenderId: "875532808090",
    appId: "1:875532808090:web:96881d83ca56268b7a9423"
  };
  
  
firebase.initializeApp(firebaseConfig);


const getData = async () => {
    const fireBaseUsers = await firebase.firestore().collection("Users").get();

    const users = [];

    for (let i = 0; i < fireBaseUsers.docs.lenght; i++){
        const data = fireBaseUsers.docs[i].data();
        if (!!data) {
            data.id = fireBaseUsers.docs[i]?.id;
            users.push(data);
        }
       
    }
    console.log(users);
}

getData();