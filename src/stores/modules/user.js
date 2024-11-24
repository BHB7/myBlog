import { defineStore } from 'pinia'

export const useUserStore = defineStore("user", {
    persist: {
      enabled: true, //开启数据持久化
      strategies: [
        {
          key: "userState", //给一个要保存的名称
          storage: localStorage, //sessionStorage / localStorage 存储方式
        },
      ],
    },
    state: () => {
      return {
        blogAvatar: "",
        userInfo: {}, // 当前登陆人信息
        token: "",
        infoFlag: false,
        tokenFlag: false,
        showLogin: false,
      };
    },
    getters: {
      // 获取当前登录用户头像
      getBlogAvatar() {
        return this.blogAvatar;
      },
      // 获取当前登录人信息
      getUserInfo() {
        try {
          return this.infoFlag ? JSON.parse(_decrypt(this.userInfo)) : "";
        } catch (err) {
          console.error(err);
          // 防止由于 解密密码不一致 导致项目加载阻塞
          this.clearUserInfo();
        }
      },
      // 获取token
      getToken() {
        try {
          return this.tokenFlag ? _decrypt(this.token) : "";
        } catch (err) {
          console.error(err);
          this.clearUserInfo();
        }
      },
      getShowLogin() {
        return this.showLogin;
      },
    },
    actions: {
      // 设置头像
      setBlogAvatar(avatar) {
        this.blogAvatar = avatar;
      },
      // 设置用户信息
      setUserInfo(userInfo) {
        this.infoFlag = true;
        this.userInfo = _encrypt(userInfo);
      },
      // 设置token
      setToken(token) {
        this.tokenFlag = true;
        this.token = _encrypt(token);
      },
      // 清除用户信息
      clearUserInfo() {
        this.userInfo = {};
        this.token = "";
        this.tokenFlag = false;
        this.infoFlag = false;
      },
      setShowLogin(val) {
        this.showLogin = val;
      },
    },
  });