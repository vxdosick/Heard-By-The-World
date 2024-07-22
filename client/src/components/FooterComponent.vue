<template>
    <footer class="footer">
      <div class="footer__container container">
        <div class="footer__copyright">
          <p class="small__text">&copy; 2024 heardbytheworld.com</p>
        </div>
        <div class="footer__authorinfo">
          <span class="small__text">
            Author:
            <a href="/">Jimmy Foteniuk</a>
          </span>
        </div>
      </div>
    </footer>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FooterComponent',
    data() {
      return {};
    },
    methods: {}
  });
  </script>
  
  <style scoped lang="scss">
  .footer {
    height: 15vh;
    border-top: 1px solid black;
    background-color: aquamarine;
    display: flex;
    align-items: center;
    .footer__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .footer__copyright {
      margin-right: auto;
    }
  }
  </style>
  