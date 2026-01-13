//api/user.js
export const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw new Error("Failed to Fetch Data");
    }

    return res.json();
}