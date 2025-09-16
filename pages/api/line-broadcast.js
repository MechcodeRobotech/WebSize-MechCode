// pages/api/line-broadcast.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { msg } = req.body;
  if (!msg) {
    return res.status(400).json({ error: 'Missing message' });
  }
  try {
    const lineRes = await fetch('https://api.line.me/v2/bot/message/broadcast', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 9TpswRJCB/nX/rEnruU41Db/1IcwcL4miql/3sQ/PkZ+ivehD1GeZIHaSyzcAjkopGvmNHkmRbn7xdeJcWr39RikPS5Uoth7HFJjZ+K7IdvjgldxTG99y+xlsIPGB4ayM4oHjrnh5tts+vkDfbT99wdB04t89/1O/w1cDnyilFU=',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            type: 'text',
            text: msg,
          },
        ],
      }),
    });
    const text = await lineRes.text();
    if (lineRes.ok) {
      return res.status(200).json({ success: true });
    } else {
      console.error('LINE API error:', text);
      return res.status(500).json({ error: text });
    }
  } catch (err) {
    console.error('API route error:', err);
    return res.status(500).json({ error: err.message });
  }
}
