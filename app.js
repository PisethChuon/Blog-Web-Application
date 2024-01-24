const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Sample Data (for demonstration purposes)
let posts = [
  { id: 1, title: 'First Post', content: 'This is my first blog post!' },
  { id: 2, title: 'Another Post', content: 'This is another blog post.' },
];

// Routes
app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.get('/new', (req, res) => {
  res.render('new');
});

app.post('/create', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  res.render('edit', { post });
});

app.post('/update/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = posts.findIndex((p) => p.id === postId);
  posts[postIndex] = { id: postId, title, content };
  res.redirect('/');
});

app.post('/delete/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((p) => p.id !== postId);
  res.redirect('/');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
