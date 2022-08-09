<template>
  <div class="home-container">
    <!-- 头部 -->
    <van-nav-bar title="新闻头条" fixed />

    <!-- 内容部分 -->
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的~~"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示的数据条数
      limit: 10,
      // 文章的数据
      artlist: [],
      // 是否加载下一页数据，如果loading为true，则不会反复触发
      // 每当下一页数据请求回来之后，把loading从true改为false
      loading: true,
      // 所有数据加载完毕，如果没有更多数据，一定要把finished改为true
      finished: false,
      // 是否下拉刷新
      isLoading: false
    }
  },
  created() {
    this.iniArticleList()
  },
  methods: {
    // 封装文章列表数据的方法
    async iniArticleList(isRefresh) {
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // console.log(res)
      if (isRefresh) {
        // 如果下拉刷新则为true，
        this.artlist = [...res, ...this.artlist]

        this.isLoading = false
      } else {
        // 上拉更多
        // 新数据在后，旧数据在前
        this.artlist = [...this.artlist, ...res]

        this.loading = false
      }
      // 如果没有新数据，就直接把finished改为true
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要onLoad被调用，就应该请求下一页数据，上拉更多
    onLoad() {
      // console.log('触发了onLoad')
      // 1.让页码值加1
      this.page++
      // 2.请求新数据
      this.iniArticleList()
    },
    // 下拉页面刷新
    onRefresh() {
      console.log('下拉刷新')
      // 1.让页面加一
      this.page++
      // 2.请求数据
      this.iniArticleList(true)
    }
  },
  components: { ArticleInfo }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
</style>
