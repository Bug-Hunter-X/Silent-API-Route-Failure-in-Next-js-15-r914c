```javascript
// pages/api/data.js
export default async function handler(req, res) {
  try {
    const data = await fetchData();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ error: 'No data found' });
    }
  } catch (error) {
    console.error('API Route Error:', error);
    res.status(500).json({ error: 'Failed to fetch data: ' + error.message });
  }
}

async function fetchData() {
  const randomNum = Math.random();
  if (randomNum < 0.8) {
    return [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  } else {
    throw new Error('Failed to fetch data from external API');
  }
}
```