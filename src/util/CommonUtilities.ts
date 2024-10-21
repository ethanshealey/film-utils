import {v4 as uuidv4} from 'uuid';

class CommonUtilities {

    static uuid = () =>  uuidv4()

    static gcd = (a: number, b: number): number => {
        if(!b) return a
        return this.gcd(b, a % b)
    }

    static convertDecimalToFraction = (decimal: number): string => {
        // Convert the decimal to a fraction
        let tolerance = 1.0E-10;  // A small tolerance to handle floating-point imprecision
        let numerator = 1;
        let denominator = 1;
        let bestNumerator = 0;
        let bestDenominator = 1;

        // Reduce the fraction by searching for the closest match
        while (Math.abs(decimal - numerator / denominator) > tolerance) {
            if (numerator / denominator < decimal) {
                numerator++;
            } else {
                denominator++;
                numerator = Math.round(decimal * denominator);
            }
        }

        // Compute the greatest common divisor (GCD) to simplify the fraction
        let gcdValue = this.gcd(numerator, denominator);

        // Reduce the numerator and denominator by the GCD
        bestNumerator = numerator / gcdValue;
        bestDenominator = denominator / gcdValue;

        console.log(bestNumerator, bestDenominator)

        if(bestDenominator === 1) return `${bestNumerator}`
        else if(bestNumerator > bestDenominator) return `${(bestNumerator/bestDenominator).toFixed(2)}`

        return `${bestNumerator}/${bestDenominator}`;
    }

}

export default CommonUtilities