<template>
    <div>
        <footer id="footer">
            <section class="copyright">
                <div> Powered by <a href="https://www.iyouhun.com" title="MECN博客">MECN博客</a> 
                    <a href="https://www.iyouhun.com/sitemap.xml" rel="sitemap"></a>
                    <br><a href="http://www.miibeian.gov.cn/" title="MECN博客" rel="nofollow">冀ICP备1000888号-2 </a> 
                </div>
            </section>
        </footer>
        <div class="toTop posifix" :class="[TOP?'fadeIn':'']" @click="toTop"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            TOP:false,
        }
    },
    methods:{
        toTop(){
            window.pageYOffset=0;
            document.body.scrollTop=0;
            document.documentElement.scrollTop=0;
        },
        topScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            console.log('toptop*****'+scrollTop);
           
            if (scrollTop > 50) {
                this.TOP = true;
                
            } else {
                this.TOP = false;
            }
        }
    },
    mounted(){
        window.addEventListener("scroll", this.topScroll);
    }
};
</script>

<style scoped>

#footer {
    margin-top: 40px
}

#footer a {
    color: #fff
}

#footer a:hover {
    color: #16a085
}

.copyright {
    color: #fff;
    margin: 0 auto;
    background-color: #0b445b;
    padding: 30px 0 30px 0;
    position: relative;
    text-align: center
}
.copyright a {
    color: #c1c1c1
}
.toTop{
    width: 48px;
    height: 48px;
    background: url(../../assets/img/toTop.png) no-repeat center center;
    right: 30px;
    bottom:120px;
    cursor: pointer;
    opacity: 0;
    -webkit-transition: all .5s ease-in;
    -moz-transition: all .5s ease-in;
    transition: all .5s ease-in;

}
.fadeIn{
    opacity: 1;
}
</style>