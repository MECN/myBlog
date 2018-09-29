<template>
    <div>
        <aside class="fr" id="sidebar" :class="{sidebarFix:sideBarFixed}">
            <aside id="blog-search">
                <form method="get" id="searchform" class="clear" action="">
                    <input class="search-input fl" type="text" name="keyword" id="s" placeholder="搜索关键词...">
                    <button class="btn-search fr"><i class="fa fa-search"></i> 查找</button>
                </form>
            </aside>
            <aside>
                <div class="panel">
                    <div class="panel-heading">最新文章</div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="panel-list clear"> <a href="https://www.iyouhun.com/post-128.html" title="小程序的全栈开发新时代">小程序的全栈开发新时代</a></li>
                            <li class="panel-list clear"> <a href="https://www.iyouhun.com/post-127.html" title="如何只用 CSS代码让一台 iPhone/macOS 崩溃重启?">如何只用 CSS代码让一台 iPhone/macOS 崩溃重启?</a></li>
                            <li class="panel-list clear"> <a href="https://www.iyouhun.com/post-126.html" title="Jenkins配合github实现前端项目自动化构建部署">Jenkins配合github实现前端项目自动化构建部署</a></li>
                            <li class="panel-list clear"> <a href="https://www.iyouhun.com/post-125.html" title="CentOS 7 安装Node">CentOS 7 安装Node</a></li>
                            <li class="panel-list clear"> <a href="https://www.iyouhun.com/post-124.html" title="CentOS 7 安装 JAVA环境（JDK 1.8）">CentOS 7 安装 JAVA环境（JDK 1.8）</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <aside>
                <div class="panel">
                    <div class="panel-heading">网站收藏</div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li class="panel-list clear"><a href="http://www.shen.ee/" title="" target="_blank"><img src="https://f.ydr.me/https://www.shen.ee/" height="16px">&nbsp;MECN的网络日志</a></li>
                            <li class="panel-list clear"><a href="http://tools.id11.cn" title="" target="_blank"><img src="https://f.ydr.me/http://tools.id11.cn" height="16px">&nbsp;MECN工具箱</a></li>
                            <li class="panel-list clear"><a href="http://www.868432.net" title="" target="_blank"><img src="https://f.ydr.me/http://www.868432.net" height="16px">&nbsp;买卖淘</a></li>
                            <li class="panel-list clear"><a href="http://www.youhun.wang" title="" target="_blank"><img src="https://f.ydr.me/https://www.youhun.wang" height="16px">&nbsp;Youhun全自动网页制作系统</a></li>
                            <li class="panel-list clear"><a href="http://dt.youhun.wang" title="" target="_blank"><img src="https://f.ydr.me/http://dt.youhun.wang" height="16px">&nbsp;斗图在线制作</a></li>
                            <li class="panel-list clear"><a href="http://hongrenwang.cc" title="" target="_blank"><img src="https://f.ydr.me/http://hongrenwang.cc" height="16px">&nbsp;红人网秒赞</a></li>
                            <li class="panel-list clear"><a href="http://www.id11.cn" title="" target="_blank"><img src="https://f.ydr.me/http://www.id11.cn" height="16px">&nbsp;MECN代挂</a></li>
                            <li class="panel-list clear"><a href="http://music.868432.net/" title="" target="_blank"><img src="https://f.ydr.me/https://music.868432.net/" height="16px">&nbsp;MECN音乐在线播放</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
            <aside>
                <div class="panel">
                    <div class="panel-heading">站点统计</div>
                    <ul id="list-total">
                        <li>文章总数：68篇</li>
                        <li>微语总数：21条</li>
                        <li>评论总数：115条</li>
                        <li>网站运行：1627天</li>
                    </ul>
                </div>
            </aside>
        </aside>
    </div>
</template>

<script>
export default {
  data() {
    return {
      sideBarFixed: false,
      sideBaroffsetTop: ""
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.sideBaroffsetTop = document.querySelector("#sidebar").offsetTop;
  },
  created() {},
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      console.log(scrollTop);
      let sideRight =
        Math.ceil((document.body.clientWidth - 1170) / 2) + 8 + "px";
      // console.log(sideRight)
      console.log("sideBaroffsetTop" + this.sideBaroffsetTop);
      if (scrollTop > parseInt(this.sideBaroffsetTop - 68)) {
        this.sideBarFixed = true;
        document.querySelector("#sidebar").style.right = sideRight;
        console.log(document.querySelector("#sidebar").offsetTop);
      } else {
        this.sideBarFixed = false;
      }
    }
  },
};
</script>

<style scoped>
/* 侧边栏 */
#sidebar{
    width: 350px;
    margin:0 15px;
    text-align: left;
    height: 650px;
    overflow-y: scroll
}
#sidebar::-webkit-scrollbar {/*滚动条整体样式*/
        width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
#sidebar::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 5px;
        box-shadow: inset 0 0 5px rgba(248, 231, 231, 0.2);
        -webkit-box-shadow: inset 0 0 5px rgba(248, 231, 231, 0.2);
        background: rgb(201, 181, 240);
    }
#sidebar::-webkit-scrollbar-track {/*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba(248, 231, 231, 0.2);
        -webkit-box-shadow: inset 0 0 5px rgba(248, 231, 231, 0.2);
        border-radius: 5px;
        background: rgb(255, 255, 255);
    }
#searchform {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
}
.search-input{
    display: inline-block;
    width: 65%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    height: auto;
    border: 2px solid #c1c1c1;
    box-shadow: none;
    box-sizing: border-box;
}
.btn-search{
    width: 33%;
    color: #fff;
    background-color: #16a085;
    border: 2px solid #16a085;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    box-sizing: border-box;
}
.panel{
    margin-bottom: 20px;
    background-color: #fff;
}
.panel .panel-heading{
    color: #fff;
    background-color: #16a085;
    padding: 10px 15px;
}
.panel .panel-body{
    padding: 0 15px;
}
.list-group {
    margin-bottom: 20px;
    padding-left: 0;
}
.list-group .panel-list{
    padding: 15px 0;
    list-style: none;
    border-bottom: 1px solid #eee;
}
#list-total li {
    background: #fff;
    float: left;
    width: 50%;
    padding: 10px;
}
/* 侧边栏结束 */
</style>