const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, order) => sum + order.likes, 0)
}

const favouriteBlog = (blogs) => {
    var likes = blogs.map(value => value.likes)
    var maks = Math.max(...likes)
    //console.log(likes, maks)
    return blogs.filter(blog => blog.likes === maks)
}

const mostBlogs = (blogs) => {
    var mf = 1
    var m = 0
    var author;

    for (var i = 0; i < blogs.length; i++) {
        for (var j = 1; j < blogs.length; j++) {
            if (blogs[i].author === blogs[j].author) {
                m++;
            }
            if (mf < m) {
                mf = m;
                author = blogs[i].author;
            }

        }
        m = 0;
    }
    const ans = [{
        author: author,
        blogs: mf
    }]
    return ans
}

const mostLikes = (blogs) => {

    var mostLikes = 0
    var likes = 0
    var author;

    for (var i = 0; i < blogs.length; i++) {
        likes = blogs[i].likes
        for (var j = 1; j < blogs.length; j++) {
            if (blogs[i].author === blogs[j].author && i!==j) {
                likes += blogs[j].likes;
            }
            if (mostLikes < likes) {
                mostLikes = likes;
                author = blogs[i].author;
            }

        }

    }

    return [{author: author, likes: mostLikes}]
}


module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs,
    mostLikes
}