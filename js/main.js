var quotes=[
    {
        'author' : 'Oscar Wilde',
        'quote' :'"Be yourself; everyone else is already taken."'
    },
    {
        'author' : 'Mae West',
        'quote' : '"You only live once, but if you do it right, once is enough."'
    },
    {
        'author' : 'Mahatma Gandhi',
        'quote' : '"Be the change that you wish to see in the world."'
    },
    {
        'author' : 'Mahatma Gandhi',
        'quote' :'"Live as if you were to die tomorrow. Learn as if you were to live forever."'
    },
    {
        'author' : 'Mark Twain',
        'quote' :'"If you tell the truth, you do not have to remember anything."'
    }
]

function getQuote(){
    var random= Math.floor(Math.random() * quotes.length);
    var q= quotes[random];
    document.getElementById('quote').innerText=q.quote;
    document.getElementById('auther').innerText=q.author;
}