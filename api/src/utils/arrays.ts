/**
 * Takes an array and will return 1 item from that array.
 * @param array
 */
export const getRandomArrayItem = (array: any[]): any => {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Takes an array and will return a random subarray from that array.
 * @param array
 * @param qty
 */
export const getRandomSubArray = (array: any[], qty: number): any[] => {
    return [...Array(array.length).keys()]
        .sort(() => 0.5 - Math.random())
        .slice(0, qty)
        .map((index) => array[index]);
};
