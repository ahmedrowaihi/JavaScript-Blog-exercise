const PATH = "./data.json";
const fs = require('fs');

class Post{
    get(){
        return this.readData()
        /** Get Posts */
    }
    
    getIndividualBlog(postId){
        const posts = this.readData()
        const foundPost = posts.find((post) => post.id === postId);
        return foundPost;
        /** Get one Blog post */
    }

    add(newpost){
        const currentPosts = this.readData();
        currentPosts.unshift(newpost)
        this.storeData(currentPosts);
        /** add new post */
    }
    readData (){
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }
    storeData(rawdata){
        let data = JSON.stringify(rawdata);
        fs.writeFileSync(PATH, data);
    }
}
module.exports = Post;