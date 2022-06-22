export const suits = [ "clubs", "spades", "hearts", "diamonds" ];
export const ranks = [
    "ace",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "jack",
    "queen",
    "king"
];

export const ranksMap: any = {
    "ace": "A",
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "jack": "J",
    "queen": "Q",
    "king": "K"
}

export const suitsMap: any = {
    "diamonds": "♦",
    "clubs": "♣", 
    "hearts": "♥", 
    "spades": "♠" 
}

export const content = {
    draw: "DRAW",
    shuffle: "SHUFFLE",
    sort: "SORT",
    show: "SHOW",
    hide: "HIDE",
    reset: "RESET",
    deckTitle: "Deck of Cards",
    drawn: "Withdrawn",
}

export const deckSize = ranks.length * suits.length;