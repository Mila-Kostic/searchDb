alert("Happy codding!");

let users = [
    {
        name:"danilo",
        status:"admin",
    },
    {
        name:"zarko",
        status:"bot",
    },
    {
        name:"marko",
        status:"admin",
    },
    {
        name:"darko",
        status: "user",
    },
    {
        name:"marko",
        status: "guest",
        age:35,
    }
    {
        name: "marko",
        status: "user"
    },
];

init();

function init() {
    let db = {
        userName: null,
        returnedUsers: [],
        config: {
            status: ["admin", "user", "guest", "bot"],
            setProps: ["godine", "posao", "grad"],
        }, 
        search: function (usersDb) {
            this.returnersUsers = userDb.filter(
                (user) => user.name === this.user.userName
            );
            console.log("Pretraga u toku...");
            setTimeout(existUser, 2000);
        },
        add: function (usersDb, data) {
            usersDb.push(data);
            this.returnedUsers = usersDb;
        },
        getAll:function (usersDb) {
            this.returnedUsers = usersDb;
        },
    }
}

db.userName = prompt("pretrazi korisnika")č
db.search(users);

function existUser() { 
    if (db.returnedUsers.length === 0) {
        addUser();
    } else {
        displayUsers();
    }
}

function displayUsers() {
    console.log(`U bazi su pronadjena ${db.returnedUsers.length}
    korisnika:`);
    db.returnedUsers.foreach((user, index) => {
        letinfo = "";
        // foor loop jer se mo\e desiti da nemaju svi user-i iste property-je
for (key in user) {
    if (user[key] !== null) {
        info += key + ": " + user[key] + " - ";
    }
}
    });
}