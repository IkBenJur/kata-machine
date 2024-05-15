export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        const middle_point = Math.floor(low + (high - low) / 2);
        const value = haystack[middle_point];

        if (value == needle) {
            return true;
        } else if (value > needle) {
            high = middle_point;
        } else {
            low = middle_point + 1;
        }
    };

    return false;
}