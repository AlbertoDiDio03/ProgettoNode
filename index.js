const fetch = require("node-fetch")

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => 
    {
        //1
        data
        .filter((element) => element.userId === 4)
        .forEach((element) => console.log(element.id))
        console.log("\n////////\n")
        //2
        data
        .filter((element) => element.id %2 === 1)
        .forEach((element) => console.log(element.id))
        console.log("\n////////\n")
        //3
        data
        .filter((element) => element.title.split(" ").length %2 === 0)
        .forEach((element) => console.log(element.id))
        console.log("\n////////\n")
        //4
        data
        .filter((element) => element.body.replace(" ","").length %3 === 0)
        .forEach((element) => console.log(element.id))
        console.log("\n////////\n")
        //5
        let bodySum = data
        .filter((element) => element.body[0] === "s")
        .reduce((string, element) => string + element.body + "\n\n")
        console.log(bodySum)

    })