function toFractionString(fraction) {
    if (fraction == undefined)
        return null
    let len = fraction.toString().length - 2;
    let denominator = Math.pow(10, len);
    let numerator = fraction * denominator;
    let divisor = gcd(numerator, denominator);

    numerator /= divisor;
    denominator /= divisor;

    if (denominator == 1) return numerator

    return `${Math.floor(numerator)}/${Math.floor(denominator)}`;
}

function copyArrayDeep(arrayToCopy){
    return JSON.parse(JSON.stringify(arrayToCopy))
}

function gcd(a, b) {
    if (b < 0.0000001) return a;

    return gcd(b, Math.floor(a % b));
}

export default {
    numToFractionString(val) {
        return toFractionString(val)
    },
    copyArray(val){
        return copyArrayDeep(val)
    }

}