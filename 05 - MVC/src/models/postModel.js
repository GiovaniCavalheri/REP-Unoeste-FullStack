let posts = [
  {
    id: "1",
    title: "Testando",
    content: "ASDIKASD",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Testando2",
    content: "ASDIKASD2222",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];



const postModel = {
    getAllPosts() {
        return posts; 
    }, 

    getPostsById(id) {
        return posts.find(post => post.id === id); 
    }, 

    createPost(title, content) {
        const post = {
            id: Date.now().toString(),
            title: title, 
            content: content,
            createdAt: new Date(), 
            updateAt: new Date()
        }
        return post; 
    }, 

    savePost(post) {
        posts.unshift(post); 
    },

    deletePost(id) {
        posts = posts.filter(post => post.id !== id); 
    }, 

    updatePost(id, updatedPost) {
        const index = posts.findIndex(post => post.id === id); 
        posts[index] = { ...posts[index], ...updatedPost, updatedAt: new Date() }
    }
}

module.exports = postModel; 