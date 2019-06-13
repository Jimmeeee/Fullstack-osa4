const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, order) => sum+order.likes,0)
}

const favouriteBlog = (blogs) => {
    var likes = blogs.map(value => value.likes)
    var maks = Math.max(...likes)
    //console.log(likes, maks)
    return blogs.filter(blog => blog.likes===maks)
}


module.exports = {
    dummy,
    totalLikes,
    favouriteBlog

}