import { useState } from "react";

function App2() {
    const [files, setFiles] = useState([]);
    const [detectedItems, setDetectedItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handleUpload = async () => {
        if (files.length === 0) return alert("Please select images!");

        const formData = new FormData();
        files.forEach((file) => formData.append('images', file));

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5500/upload', {
                method: 'POST',
                body: formData
            });

            const data = await res.json();
            setDetectedItems(data.items || []);
        } catch (err) {
            console.error("Upload failed:", err);
            alert("Failed to upload");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App" style={{ padding: '40px', fontFamily: 'Arial' }}>
            <h2>Upload Fridge or Grocery Images</h2>
            <input type="file" multiple accept="image/*" onChange={handleChange} />
            <br />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Detecting...' : 'Upload & Detect'}
            </button>

            <h3 style={{ marginTop: '30px' }}>Detected Items:</h3>
            <ul>
                {detectedItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App2;