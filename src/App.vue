<template>
    <div id="app">
        <header id="blog-header">
            <!-- logo -->
            <div id="header"></div>
            <!-- logo结束 -->
            <!-- 导航栏 -->
            <nav class="navbar" :class="{navfixed:navBarFixed}">
                <ul class="menu-nav">
                    <!-- <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/">首页</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/notes">生活随笔</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/web">Web前端</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/life">生活琐事</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/link">给我留言</router-link>
                  </li>
                  <li class="menu-item">
                      <router-link class="menu-itemTxt" to="/about">关于本站</router-link>
                  </li> -->
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{'act':$route.path === '/'}" to="/">首页</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{act:$route.path==='/notes'}" to="/notes">生活随笔</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{act:$route.path==='/web'}" to="/web">Web前端</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{act:$route.path==='/life'}" to="/life">生活琐事</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{act:$route.path==='/link'}" to="/link">给我留言</router-link>
                    </li>
                    <li class="menu-item">
                        <router-link class="menu-itemTxt" :class="{act:$route.path==='/about'}" to="/about">关于本站</router-link>
                    </li>
                </ul>
            </nav>
            <!-- 导航栏结束 -->
        </header>
        <!-- 引入路由 -->
        <router-view/>
        <footer-bar></footer-bar>
    </div>
</template>
<script>
import footerBar from "@/components/component/footer"
export default {
    name: "App",
    data() {
        return {
            navBarFixed: false,
            offsetTop:'',
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
        this.offsetTop = document.querySelector(".navbar").offsetTop;
    },
    created() {},
    methods: {
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(scrollTop);
           
            console.log('offsetTop'+this.offsetTop);
            if (scrollTop > this.offsetTop) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }
        }
    },
    watch:{
        $route(to,from){
            // this.navBarFixed=false;
            console.log('90909090')
            window.pageYOffset=0;
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
        }
    },
    components:{
        footerBar,
    }
};
</script>
<style>
/* 导入网站重置样式 */

@import "assets/css/reset.css";
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
.container{
    width: 1170px;
    margin: 20px auto 0;
}
#header {
    padding: 151px 20px 42px 20px;
    background: #515865 url("./assets/img/blog_topbg.jpg") center center no-repeat;
    font-size: 16px;
    font-weight: 500;
    background-size: cover;
}

.navfixed {
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 999;
}
.sidebarFix {
    position: fixed;
    background-color: #fff;
    top: 65px;
    z-index: 999;
}

.navbar {
    width: 100%;
    min-height: none;
    color: #fff;
    background-color: #0b445b;
    border: none;
}

.menu-nav {
    width: 1170px;
    padding: 0 35px;
    margin: 0 auto;
    text-align: left;
}

.menu-nav .menu-item {
    display: inline-block;
    margin-right: 50px;
}

.menu-nav .menu-item a {
    position: relative;
    display: block;
    padding: 10px 15px;
    color: #fff;
    border-bottom: 3px solid transparent;
}

.menu-nav .menu-item .menu-itemTxt:hover {
    background-color: #0b445b;
    border-bottom: 3px solid #16a085;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.menu-nav .menu-item .menu-itemTxt.act {
    background-color: #0b445b;
    border-bottom: 3px solid #16a085;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
</style>
