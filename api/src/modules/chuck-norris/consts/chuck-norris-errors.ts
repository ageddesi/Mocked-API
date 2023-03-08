const InvalidCategoryMessage = 'Invalid category';
const InvalidQuantityMessage = 'Invalid quantity';
const InvalidCategoryError = new Error(InvalidCategoryMessage);
const InvalidQuantityError = new Error(InvalidQuantityMessage);

export default {
    InvalidCategoryError,
    InvalidQuantityError,
    InvalidCategoryMessage,
    InvalidQuantityMessage,
};
