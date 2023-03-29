import { URL_REGEX } from '../constants/product.constant';
import { setSuccess } from './form-success-message';
import { setError } from './form-error-message';

/**
 * Validate input
 * @param Input input element
 * @returns error status
 */
export const checkValidate = (): boolean => {
  const inputName = document.getElementById('productName') as HTMLInputElement;
  const inputPrice = document.getElementById('productPrice') as HTMLInputElement;
  const inputDesc = document.getElementById('productDesc') as HTMLTextAreaElement;
  const inputUrl = document.getElementById('productUrl') as HTMLInputElement;
  const submitBtn = document.getElementById('submit') as HTMLButtonElement;
  let isCheck = true;

  if (!inputName.value) {
    setError(inputName, submitBtn, 'Please enter product name');
    isCheck = false;
  } else {
    setSuccess(inputName);
  }

  if (!inputPrice.value) {
    submitBtn.disabled = true;
    setError(inputPrice, submitBtn, 'Please enter product price');
    isCheck = false;
  } else if (Number(inputPrice.value) <= 0) {
    setError(
      inputPrice,
      submitBtn,
      'Please enter product price not include negative or equal to 0'
    );
  } else {
    setSuccess(inputPrice);
  }

  if (!inputDesc.value) {
    submitBtn.disabled = true;
    setError(inputDesc, submitBtn, 'Please enter product description');
    isCheck = false;
  } else {
    setSuccess(inputDesc);
  }

  if (!inputUrl.value || !inputUrl.value.match(URL_REGEX)) {
    submitBtn.disabled = true;
    setError(inputUrl, submitBtn, 'Please enter valid product Url');
    isCheck = false;
  } else {
    setSuccess(inputUrl);
  }

  return isCheck;
};