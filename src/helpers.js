function choice (items) {
    return items[Math.floor(Math.random() * items.length)];
}

function remove (items, item) {
    //  Why doesn't for (let i in items) work?
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return [...items.slice(0, i),...items.slice(i + 1)];
        }
    }
}

export {choice, remove}