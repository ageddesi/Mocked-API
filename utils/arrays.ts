/**
 * Takes an array and will return 1 item from that array.
 * @param array 
 */
export const getRandomArrayItem = (array : any[]) : any => {
    return array[Math.floor(Math.random() * array.length)];
}