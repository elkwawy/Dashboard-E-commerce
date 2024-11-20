const BASE_URL = `http://ecommerce-dot-code.vercel.app/api`;

export const API = {
  /* ======= Authentication ======= */
  register: `${BASE_URL}/auth/register`,
  login: `${BASE_URL}/auth/login`,
  forgotPassword: `${BASE_URL}/auth/forgotPassword`,
  verifyResetCode: `${BASE_URL}/auth/verifyResetCode`,
  resetPassword: `${BASE_URL}/auth/resetPassword`,

  /* ======= User ======= */
  showUsers: `${BASE_URL}/user/show`,
  createUser: `${BASE_URL}/user/create`,
  getUser: `${BASE_URL}/user/showbyid`,
  updateUser: `${BASE_URL}/user/update`,
  deleteUser: `${BASE_URL}/user/delete`,
  /* ======= Product ======= */
  showProducts: `${BASE_URL}/product/show`,
  createProduct: `${BASE_URL}/product/create`,
  getProduct: `${BASE_URL}/product/showbyid`,
  updateProduct: `${BASE_URL}/product/update`,
  deleteProduct: `${BASE_URL}/product/delete`,
  /* ======= Orders ======= */
  showOrders: `${BASE_URL}/order/show`,
  createOrder: `${BASE_URL}/order/create`,
  getOrder: `${BASE_URL}/order/showbyid`,
  updateOrder: `${BASE_URL}/order/update`,
  deleteOrder: `${BASE_URL}/order/delete`,

  // adminInfo: `${BASE_URL}/auth/get-auth-admin`,
};
