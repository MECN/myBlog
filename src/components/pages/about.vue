<template>
    <div class="container clear">
        <!-- <art-list></art-list> -->
        <side-bar></side-bar>
    </div>
</template>

<script>
import sideBar from "@/components/component/aside";
import artList from "@/components/component/artList";

export default {
    // 注册组件
    components:{
        sideBar,artList
    }
};
</script>

<style scoped>


</style>