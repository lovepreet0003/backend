const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const POSTS_FILE = path.join(__dirname, 'posts.json');


app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


const readPosts = () => {
    try {
        if (!fs.existsSync(POSTS_FILE)) return []; // Return empty array if file does not exist
        const data = fs.readFileSync(POSTS_FILE, 'utf8');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.error('Error reading posts file:', err);
        return [];
    }
};


const writePosts = (posts) => {
    try {
        fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
    } catch (err) {
        console.error('Error writing to posts file:', err);
    }
};


app.get('/posts', (req, res) => {
    const posts = readPosts();
    res.render('posts', { posts });
});


app.get('/post', (req, res) => {
    const posts = readPosts();
    const post = posts.find(p => p.id == req.query.id);
    if (post) {
        res.render('post', { post });
    } else {
        res.status(404).send('<h1>Post not found</h1><a href="/posts">Go back</a>');
    }
});


app.post('/add-post', (req, res) => {
    const posts = readPosts();
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    const newPost = {
        id: newId,
        title: req.body.title.trim(),
        content: req.body.content.trim()
    };

    if (!newPost.title || !newPost.content) {
        return res.status(400).send('<h1>Title and content are required</h1><a href="/posts">Go back</a>');
    }

    posts.push(newPost);
    writePosts(posts);
    res.redirect('/posts');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
