module.exports = function transform(title, description, author, coverId, subjects) {
    let finalDesc = "";
    if (typeof (description) === "object") {
        finalDesc = description.value;
    }
    else if (typeof (description) === "undefined") {
        finalDesc = "No Description."
    }
    else {
        finalDesc = description;
    }

    let finalAuthor;
    if (typeof (author) === "object") {
        finalAuthor = author.name
    }
    else {
        finalAuthor = author[0].name;
    }

    let finalCovers;
    if (coverId === null) {
        finalCovers = {
            L: "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif",
            M: "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif",
            S: "https://blog.springshare.com/wp-content/uploads/2010/02/nc-md.gif",
        }
    }
    else {
        finalCovers = {
            L: `http://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
            M: `http://covers.openlibrary.org/b/id/${coverId}-M.jpg`,
            S: `http://covers.openlibrary.org/b/id/${coverId}-S.jpg`,
        }
    }

    let book = {
        title: title,
        description: finalDesc,
        covers: finalCovers,
        author: finalAuthor,
        subjects: subjects,
    };
    return book;
}
