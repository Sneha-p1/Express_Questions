const express = require('express');
const app = express();
const PORT =  3001;

app.use(express.json());

app.post('/submit-review', (req, res) => {
    const { title, review } = req.body;

    if (!title || !review) {
        return res.status(400).json({ error: 'Book title and review content are required' });
    }

    res.status(201).json({ message: 'Review submitted successfully', data: { title, review } });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

