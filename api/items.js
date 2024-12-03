// api/items.js

const items = [
    { "id": 1, "name": "Sword", "damage": 50 },
    { "id": 2, "name": "Bow", "damage": 35 },
    { "id": 3, "name": "Axe", "damage": 60 }
];

// Handle GET request
module.exports = (req, res) => {
    const { id } = req.query;

    if (id) {
        const item = items.find(item => item.id === parseInt(id));
        if (item) {
            return res.status(200).json(item);
        } else {
            return res.status(404).json({ message: "Item not found" });
        }
    }

    return res.status(200).json(items);
};
