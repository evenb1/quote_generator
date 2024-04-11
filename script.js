let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote: "The best way to find yourself is to lose yourself in the service of others.", person: "Mahatma Gandhi"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", person: "Abraham Lincoln"},
    {quote: "The only way to do great work is to love what you do.", person: "Steve Jobs"},
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt"},
    {quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky"},
    {quote: "Life is what happens when you're busy making other plans.", person: "John Lennon"},
    {quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt"},
    {quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius"},
    {quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt"},
    {quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt"},
    {quote: "You must be the change you wish to see in the world.", person: "Mahatma Gandhi"},
    {quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu"},
    {quote: "It is never too late to be what you might have been.", person: "George Eliot"},
    {quote: "The mind is everything. What you think you become.", person: "Buddha"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson"},
    {quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates"},
    {quote: "A person who never made a mistake never tried anything new.", person: "Albert Einstein"},
    {quote: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.", person: "Albert Einstein"},
    {quote: "Life isn't about finding yourself. Life is about creating yourself.", person: "George Bernard Shaw"},
    {quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", person: "Marie Curie"},
    {quote: "Happiness is not something ready made. It comes from your own actions.", person: "Dalai Lama XIV"},
    {quote: "The only way to do great work is to love what you do.", person: "Steve Jobs"},
    {quote: "It's not what you look at that matters, it's what you see.", person: "Henry David Thoreau"},
    {quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas A. Edison"},
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})