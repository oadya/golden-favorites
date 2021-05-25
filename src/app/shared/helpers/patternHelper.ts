export class RegexPatterns {
    public static emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    // https://stackoverflow.com/questions/38483885/regex-for-french-telephone-numbers
    public static phonePattern = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/g;

    public static phonePattern2 = '^[0]{1}[1-9]{1}[0-9]{8}$';

    public static phonePattern2Bis = '^[0]{1}[1-9]{1} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}$';
}