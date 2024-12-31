export const ordersAPI = () => {
  const { $api } = useNuxtApp()

  const getOrders = () => useAsyncData('orders', () => $api('/orders'));

  const getOrderItem = (id) => useAsyncData(`order-${id}`, () =>
    $api(`/orders/${id}`)
  );

  const createOrder = (payload) => $api('/orders', {
    method: 'POST',
    body: payload
  });

  const deleteOrderItem = (id) => $api(`/orders/${id}`, {
    method: 'DELETE'
  });

  return {
    getOrders,
    getOrderItem,
    createOrder,
    deleteOrderItem
  }
}