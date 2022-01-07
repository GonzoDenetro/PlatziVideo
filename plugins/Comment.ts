class Comment{
    author: string;
    comment: string;
    
    constructor({author, comment}){
        this.author = author;
        this.comment = comment;
    }

    addComment(container){
        container.innerHTML += `<div>
        <p>${this.author}</p>
        <p>${this.comment}</p>
        </div>`
    }
}

export default Comment