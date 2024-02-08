const clickLikeButton = () => {
    // if you inspect element. You will figure out Like text is inside Span.Hidden
    const allSpanBtns = document.querySelectorAll("span.Hidden")
    for(const btn of allSpanBtns){
        if(btn.textContent.includes('Like')){
            btn.click()
        }
    }
    // similarly other filters can be added to check for interests, hobbies, number of pics etc
}

//call at 200ms interval
setInterval(clickLikeButton, 200)