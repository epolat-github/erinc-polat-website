export const formatGalleryIndexText = (index: number) => {
    const number = index + 1;

    if (number < 10) {
        return "0".concat(number.toString());
    }

    return number.toString();
};
