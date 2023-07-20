const app = require("./server");

app.post('/api/addUser', async (req, res) => {
  const { firstName, lastName, address, phoneNumber } = req.body;
  try {
    const queryText = 'INSERT INTO users (first_name, last_name, address, phone_number) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstName, lastName, address, phoneNumber];
    const result = await pool.query(queryText, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add the user to the database' });
  }
});

// Route to add hobbies for a specific user to the "hobbies" table
app.post('/api/addHobbies', async (req, res) => {
  const { userId, hobbies } = req.body;
  try {
    const queryText = 'INSERT INTO hobbies (user_id, hobbies) VALUES ($1, $2) RETURNING *';
    const values = [userId, hobbies];
    const result = await pool.query(queryText, values);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Unable to add hobbies to the database' });
  }
});

// Route to get all users and their hobbies
app.get('/api/users', async (req, res) => {
  try {
    const queryText = 'SELECT u.*, h.hobbies FROM users u LEFT JOIN hobbies h ON u.id = h.user_id';
    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch users and hobbies from the database' });
  }
});

// Route to delete a user and their hobbies
app.delete('/api/deleteUser/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const queryText = 'DELETE FROM users WHERE id = $1';
    const result = await pool.query(queryText, [userId]);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the user from the database' });
  }
});