//fontSize
const book = document.querySelector(".book");
const fontSize = Array.from(document.querySelectorAll(".font-size"));

for (let i=0; i<fontSize.length; i++){
    fontSize[i].onclick = function(){

        let fontSizeActive = document.querySelector(".font-size_active");
        book.classList.remove("book_fs-small","book_fs-big")

        fontSizeActive.classList.remove("font-size_active");
        fontSize[i].classList.add('font-size_active');

        if (fontSize[i].classList.contains("font-size_small")){
            book.classList.toggle('book_fs-small')
        } else if(fontSize[i].classList.contains("font-size_big")){
            book.classList.toggle('book_fs-big')
        }

        return false;
    }   
}


//text
const bookControlColor=document.querySelector(".book__control_color");
const textColor = Array.from(bookControlColor.querySelectorAll('.color'));

for (let i=0; i<textColor.length; i++){
    textColor[i].onclick = function(){

        let textColorActive = bookControlColor.querySelector(".color_active");
        book.classList.remove("book_color-black","book_color-gray", "book_color-whitesmoke")

        textColorActive.classList.remove("color_active");
        textColor[i].classList.add('color_active');

        if (textColor[i].classList.contains("text_color_black")){
            book.classList.add('book_color-black')
        } else if(textColor[i].classList.contains("text_color_gray")){
            book.classList.add('book_color-gray')
        } else if(textColor[i].classList.contains("text_color_whitesmoke")){
            book.classList.add('book_color-whitesmoke')     
        }
        
        return false;
    }   
}

//background
const bookControlBgColor = document.querySelector(".book__control_background");
const bgColor = Array.from(bookControlBgColor.querySelectorAll('.color'));

for (let i=0; i<bgColor.length; i++){
    bgColor[i].onclick = function(){

        let textColorActive = bookControlBgColor.querySelector(".color_active");
        book.classList.remove("book_bg-black","book_bg-gray", "book_bg-whitesmoke")

        textColorActive.classList.remove("color_active");
        bgColor[i].classList.add('color_active');

        if (bgColor[i].classList.contains("bg_color_black")){
            book.classList.add('book_bg-black')
        } else if(bgColor[i].classList.contains("bg_color_gray")){
            book.classList.add('book_bg-gray')
        } else if(bgColor[i].classList.contains("bg_color_whitesmoke")){
            book.classList.add('book_bg-whitesmoke')     
        }
        
        return false;
    }   
}