<template>
  <div class="mine__page">
    <div class="mine__page__heder" style="background-color: rgb(92, 204, 132); color: #fff">
      <div class="title">我的</div>
      <van-icon name="weapp-nav" />
    </div>
    <div class="mine__page__body">
      <div class="info">
        <div class="img">
          <img v-if="img" style="width: 100%; height: 100%" src="" />
        </div>
        <div class="title">
          <h3>立即登录</h3>
          <p>登录解锁更多功能</p>
        </div>
      </div>
      <div class="grid">
        <div class="grid__item" v-for="i in 4" :key="i">
          <van-icon name="records" />
          <p>订单</p>
        </div>
      </div>
      <van-cell-group>
        <van-cell title="我的优惠券" icon="location-o" is-link />
        <van-cell title="常见问题" icon="location-o" is-link />
        <van-cell title="设置" icon="location-o" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useCounterStore } from '@/stores'
// const store = useCounterStore()
// import { loginApi } from '@/services/user'
import { ref } from 'vue'
const img = ref('')
</script>

<style lang="scss" scoped>
.mine__page {
  &__heder {
    padding: 7px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    position: relative;
    box-sizing: border-box;

    .title {
      width: 235px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
    }

    .van-icon {
      position: absolute;
      right: 12px;
      font-size: 18px;
    }
  }

  &__body {
    position: relative;
    box-sizing: border-box;
    padding: 15px;
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 100%;
      height: 175px;
      background-color: #5ccc84;
      z-index: -99;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
    }
    .info {
      display: flex;
      .img {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        overflow: hidden;
      }
      .title {
        margin-left: 15px;
        color: #fff;
        > h3 {
          font-weight: normal;
          font-size: 17px;
        }
        > p {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
    .grid {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #fff;
      border-radius: 5px;
      padding: 15px 0;
      box-shadow: 0px 1px 6px rgba($color: #000, $alpha: 0.1);
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .van-icon {
          font-size: 20px;
          margin-bottom: 5px;
          color: rgba(254, 189, 0);
        }
        > p {
          font-size: 12px;
          color: #6c757d;
        }
      }
    }
    .van-cell-group {
      margin-top: 20px;
      --van-cell-icon-size: 20px;
      :deep(.van-cell__left-icon) {
        color: rgb(67, 150, 236);
      }
    }
  }
}
</style>
