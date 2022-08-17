<!--
 * @Author: 贾二小
 * @Date: 2022-07-02 00:06:51
 * @LastEditTime: 2022-08-16 23:51:13
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/views/other/login.vue
-->
<script setup lang="ts">
import { login } from '@/apis/auth'
import { CacheEnum } from '@/enum/cacheEnum'
import userStroe from '@/store/userStore'
import menuStroe from '@/store/menuStore'
import store from '@/utils/store'

const router = useRouter()

const form = ref({
  account: 'admin@example.com',
  password: '123456',
})

const submint = async () => {
  const data = await login(form.value).then((r) => r.data)
  store.set(CacheEnum.TOKEN_NAME, data.token)
  router.replace('/abort')
}
</script>
<template>
  <!-- component -->
  <div class="bg-gray-200 h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 md:1/2 lg:w-3/5 bg-white sm:mx-0">
        <div class="flex flex-col w-full md:w-3/5 2lg:w-1/2 p-4">
          <div class="md:p-12 md:mx-6">
            <div class="text-center">
              <img
                class="mx-auto w-48"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo" />
              <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">XXXX管理系统</h4>
            </div>
            <form>
              <p class="mb-4">请登录您的帐户</p>
              <div class="mb-4">
                <input
                  type="text"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  v-model="form.account"
                  placeholder="用户名" />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  v-model="form.password"
                  placeholder="密码" />
              </div>
              <div class="text-center pt-1 mb-12 pb-1">
                <button
                  class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                  @click="submint">
                  登 录
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          class="hidden md:flex md:items-center md:w-2/5 2lg:w-1/2 rounded-r-lg"
          style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
          <div class="text-white px-4 py-6 md:p-12 md:mx-6">
            <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="cc-myssl-id" style="position: fixed; right: 0; bottom: 0; width: 65px; height: 65px; z-index: 99">
    <a href="https://myssl.com/www.ipsoul.com?from=mysslid">
      <img src="https://static.myssl.com/res/images/myssl-id.png" alt="" style="width: 100%; height: 100%" />
    </a>
  </div>
</template>

<style lang="scss"></style>
