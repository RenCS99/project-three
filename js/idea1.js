function idea1() {
    document.getElementById("title_head").innerHTML = "JavaScript Practice";
}

async function loginFunc () {
    const repsonse = await fetch.post(login, {
        auth: {
            username: email,
            password: password
        },
        body: {
            
        }
    })
}