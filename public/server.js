const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Serve static images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/notesApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// MongoDB schema
const NoteSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  timestamp: Number
});
const Note = mongoose.model('Note', NoteSchema);

// Multer setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
  const uniqueName = Date.now() + '_' + file.originalname.replace(/\s+/g, '_');
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { title } = req.body;
    if (!req.file) {
      return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    // Use dynamic protocol and host
    const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
    console.log('Image uploaded with URL:', imageUrl);

    const newNote = new Note({ title, imageUrl, timestamp: Date.now() });
    await newNote.save();

    res.json({ success: true, note: newNote });
  } catch (err) {
    console.error('Upload failed:', err);
    res.status(500).json({ success: false, error: 'Upload failed' });
  }
});

// Fetch all notes
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find().sort({ timestamp: -1 });
    res.json({ success: true, notes });
  } catch (err) {
    console.error('Failed to fetch notes:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch notes' });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
