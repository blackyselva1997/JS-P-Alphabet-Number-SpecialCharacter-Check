let value1 = prompt("Enter your value");

if (/^[a-zA-Z]+$/.test(value1)) {
    document.write("This a Alphabet");
} else if (/^[0-9]+$/.test(value1)) {
    document.write("This a Number")
} else {
    document.write("This is special Character")
}