const riddles = [
    { id: 1, question: "What has to be broken before you can use it?", answer: "Egg" },
    { id: 2, question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "Candle" },
    { id: 3, question: "What month of the year has 28 days?", answer: "February" },
    { id: 4, question: "What is full of holes but still holds water?", answer: "Sponge" },
    { id: 5, question: "What question can you never answer yes to?", answer: "Asleep" },
    { id: 6, question: "What is always in front of you but can’t be seen?", answer: "Future" }
];

module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allow headers

    const { id } = req.query;

    if (id) {
        const riddle = riddles.find(r => r.id === parseInt(id));
        if (riddle) {
            return res.status(200).json(riddle);
        } else {
            return res.status(404).json({ message: "Riddle not found" });
        }
    }

    return res.status(200).json(riddles);
};
