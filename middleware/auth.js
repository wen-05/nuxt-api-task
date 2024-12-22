export default defineNuxtRouteMiddleware(async (to, from) => {
  const { users } = useAPI();
  const { data: userCheck } = await users.getUserCheck();

  if (userCheck.value?.status !== true) {
    // alert('請先登入會員');
    console.log('請先登入會員');

    return navigateTo('/account');
  }
})
