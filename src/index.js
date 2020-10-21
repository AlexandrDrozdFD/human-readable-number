module.exports = function toReadable (number) {

    const obj = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };
    let unit = number % 10;
    let dozens = Math.floor(number % 100 / 10);
    let hundreds = Math.floor(number / 100);
    let result = '';

    if (number === 0) {
        return obj[0];
    }
    if (hundreds > 0) {
        result += obj[hundreds];
        result += ' hundred';
    }
    if (dozens > 1) {
        if (hundreds > 0) {
            result += ' ';
        }
        result += obj[dozens * 10];
        if (unit > 0) {
            result += ' ';
            result += obj[unit];
        }
    } else if (dozens === 1 || unit > 0) {
        if (hundreds > 0) {
            result += ' ';
        }
        result += obj[dozens *10 + unit]
    }

    return result;
}
