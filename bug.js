```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Some logic to fetch data from an external API
  const data = await fetchData();

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function fetchData() {
  // Simulate fetching data from an external API that might occasionally fail.
  const randomNum = Math.random();
  if (randomNum < 0.8) { // 80% chance of success
    return [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  } else {
    throw new Error('Failed to fetch data'); // Simulate API error
  }
}
```