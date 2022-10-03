import { Request } from 'express';
import ImageDataType from '../modules/images/consts/imageDataType';

const defaultQty = 10;
const imageWidthDefault = 640;
const imageHeightDefault = 480;

const getQtyFromRequest = (request: Request | null, overrideDefaultQty?: number | null): number => {
  var value = parseInt(request.params.qty);
  if (value > 100) {
    value = 100;
    return;
  }

  return value ? value : overrideDefaultQty ? overrideDefaultQty : defaultQty;
};

const getImageDataFromRequest = (request: Request | null): ImageDataType => {
  const qty = request.params.qty ? parseInt(request.params.qty) : defaultQty;
  const height = request.params.height ? parseInt(request.params.height) : imageHeightDefault;
  const width = request.params.width ? parseInt(request.params.width) : imageWidthDefault;
  return {
    Width: width,
    Height: height,
    Qty: qty,
  };
};

export { getQtyFromRequest, getImageDataFromRequest };
