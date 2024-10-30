import userData from "../data/users.json" assert { "type": "json" };
const usersModel = userData ?? [
    {
        id: 1,
        username: "cristian",
        email: "cristiandracedo@hotmail.com"
    },
    
    {
        id: 2,
        username: "c215714n",
        email: "cristiandracedo@gmail.com"
    },
    
    {
        id: 3,
        username: "d477714n",
        email: "cristiandracedo@ymail.com"
    }
];
export default usersModel;