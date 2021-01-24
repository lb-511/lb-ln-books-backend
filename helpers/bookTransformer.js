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

    let book = {
        title: title,
        description: finalDesc,
        covers: {
            L: `http://covers.openlibrary.org/b/id/${coverId}-L.jpg`,
            M: `http://covers.openlibrary.org/b/id/${coverId}-M.jpg`,
            S: `http://covers.openlibrary.org/b/id/${coverId}-S.jpg`,
        },
        author: finalAuthor,
        subjects: subjects,
    };
    return book;
}
