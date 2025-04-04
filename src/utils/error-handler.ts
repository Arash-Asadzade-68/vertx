export function errorHandler(error:any) {
  let errMsg = 'errors.general';
  if (
    (error?.data && error?.data?.message) ||
    (error?.response && error?.response?.status)
  ) {
    const response = error?.data || error?.response?.data;
    const statusCode = error?.status || error?.response.status;

    switch (statusCode) {
      case 404:
        errMsg = 'errors.resourceNotFound';
        break;
      case 422:
        errMsg = response?.message;
        break;
      case 500:
        if (response?.message !== null) {
          errMsg = response?.message;
        } else {
          errMsg = 'errors.internalServerError';
        }
        break;
      default:
        errMsg = response?.message;
        break;
    }
  } else if (error?.message) {
    errMsg = error?.message;
  }
  return errMsg;
}