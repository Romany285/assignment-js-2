function randomText (){
    var userName = ['― Oscar Wilde','― Albert Einstein','― Frank Zappa','― Marcus Tullius Cicero','― Dr. Seuss','― Mae West','― Mahatma Gandhi','― Robert Frost','― Mark Twain','― Elbert Hubbard'];
    var text = ['“Be yourself; everyone else is already taken.”','“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”','“So many books, so little time.”','“A room without books is like a body without a soul.”','“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”','“You only live once, but if you do it right, once is enough.”','“Be the change that you wish to see in the world.”','“In three words I can sum up everything Ive learned about life: it goes on.”','“If you tell the truth, you dont have to remember anything.”','“A friend is someone who knows all about you and still loves you.”'];
    var num = Math.floor(Math.random() * userName.length)
    document.getElementById("authorOutput").innerHTML =(userName[num])
    document.getElementById("quoteOutput").innerHTML =(text[num])
} 