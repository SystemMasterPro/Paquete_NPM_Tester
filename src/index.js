const messages = [
    "Richard",
    "Jose",
    "Marco",
    "Sebastian",
    "Analia",
    "Georgina",
    "Messi"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };