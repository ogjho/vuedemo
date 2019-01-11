<template>
  <div class="wrapper">
    <transition name="move" mode="out-in">
      <keep-alive>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
