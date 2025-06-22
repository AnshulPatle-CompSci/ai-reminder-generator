import React, { useState } from 'react';
import axios from 'axios';

export default function ReminderPage() {
  const [date, setDate] = useState('');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [inputAI, setInputAI] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const handleAICreation = async () => {
    setLoading(true);
    setSuccess(false);
    try {
      const res = await axios.post('http://localhost:3001/api/ai/reminder', { input: inputAI });
      const { date, field1, field2, field3 } = res.data;
      setDate(date);
      setField1(field1);
      setField2(field2);
      setField3(field3);
      setSuccess(true);
    } catch (err) {
      alert('AI failed to generate reminder');
    } finally {
      setLoading(false);
    }
  };
  
  {success && <p style={{ color: 'green' }}>Fields filled with AI successfully!</p>}

  return (
    <div>
      <h1>Reminder Page</h1>
      <input type="text" value={inputAI} onChange={(e) => setInputAI(e.target.value)} placeholder="Describe your need..." />
      <button onClick={handleAICreation} disabled={loading}>
        {loading ? "Loading..." : "Create with AI"}
      </button>
      <br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="text" value={field1} onChange={(e) => setField1(e.target.value)} placeholder="Field 1" />
      <input type="text" value={field2} onChange={(e) => setField2(e.target.value)} placeholder="Field 2" />
      <input type="text" value={field3} onChange={(e) => setField3(e.target.value)} placeholder="Field 3" />
      <button>Set Reminder</button>
    </div>
  );
}
