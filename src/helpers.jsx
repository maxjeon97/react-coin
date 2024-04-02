/**Returns a randomly selected item from array of items */
function choice(items) {
    const randomIndex = getRandomInt(0, items.length);
    return items[randomIndex];
}

/**Returns a random integer between two integers */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default choice;