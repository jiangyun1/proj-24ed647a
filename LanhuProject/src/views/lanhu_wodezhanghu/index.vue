<template>
  <div class="page flex-col">
    <div class="section_1 flex-col">
      <div class="section_2 flex-row">
        <span class="text_1">12:46</span>
        <img
          class="label_1"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG94cb71e30d2d996f553895c465a05218.png"
        />
        <img
          class="label_2"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGbc8b2068f088ec7c32164fd3bab7d09a.png"
        />
        <img
          class="label_3"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG9d5b301c9341e350bc3d1e6f878ed4b8.png"
        />
      </div>
      <div class="text-wrapper_1 flex-col"><span class="text_2">http://www.haiyangcaijing.com</span></div>
    </div>
    <div class="section_3 flex-col">
      <div class="box_1 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG9cf3904f6a6a21980c3c3433343b1ade.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png"
          />
        </div>
        <div class="group_1 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="./assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png"
            />
          </div>
        </div>
        <img
          class="label_5"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png"
        />
      </div>
      <div class="box_2 flex-row">
        <span class="text_3">海洋财经</span>
        <img
          class="thumbnail_1"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png"
        />
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1">我的账户</span>
          <img
            class="thumbnail_2"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png"
          />
        </div>
      </div>
      <div class="box_3 flex-col"></div>
    </div>
    <div class="section_4 flex-col">
      <img
        class="image_3"
        referrerpolicy="no-referrer"
        src="./assets/img/FigmaDDSSlicePNGdd1814597a1b72dd05ccae47d8be3947.png"
      />
      <div class="text-group_2 flex-col justify-between">
        <span class="text_4">股神_2053【店铺主页】</span>
        <span class="text_5">北京&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;黄金会员</span>
      </div>
      <div class="section_5 flex-row justify-between">
        <div class="group_2 flex-row justify-between">
          <div class="text-group_3 flex-col justify-between">
            <span class="text_6">黄金会员</span>
            <span class="text_7">剩余116天</span>
          </div>
          <div class="text-wrapper_2 flex-col"><span class="text_8">升级会员</span></div>
        </div>
        <div class="group_3 flex-row justify-between">
          <div class="text-group_4 flex-col justify-between">
            <span class="text_9">星耀会员</span>
            <span class="text_10">剩余230天</span>
          </div>
          <div class="text-wrapper_3 flex-col"><span class="text_11">查看推广</span></div>
        </div>
      </div>
    </div>
    <div class="section_6 flex-col">
      <div class="group_4 flex-col">
        <div class="box_4 flex-row">
          <img
            class="label_6"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG2b8d7248a7a3a3848fe038b522290366.png"
          />
          <span class="text_12">有问必答</span>
          <img
            class="thumbnail_3"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
        <div class="box_5 flex-row"><div class="box_6 flex-col"></div></div>
        <div class="box_7 flex-row">
          <img
            class="label_7"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG98c2094b405e9ac7b00dd2b34d250cc2.png"
          />
          <span class="text_13">文章与资讯</span>
          <img
            class="thumbnail_4"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
        <div class="box_8 flex-row"><div class="box_9 flex-col"></div></div>
        <div class="box_10 flex-row">
          <img
            class="label_8"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNG600b48b23f3425fb02b54c49d5b966a4.png"
          />
          <span class="text_14">个人资料</span>
          <img
            class="thumbnail_5"
            referrerpolicy="no-referrer"
            src="./assets/img/FigmaDDSSlicePNGb059524319d385f9c7c0a5544d8c2958.png"
          />
        </div>
      </div>
      <div class="group_5 flex-col">
        <div class="list_1 flex-row">
          <div class="image-text_2 flex-col justify-between" v-for="(item, index) in loopData0" :key="index">
            <img class="image_4" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
            <span class="text-group_5" v-html="item.lanhutext0"></span>
          </div>
        </div>
        <div class="group_6 flex-col"></div>
        <span class="paragraph_1">
          京ICP备19048506号-2&nbsp;Copyright
          <br />
          &#64;&nbsp;2024&nbsp;中国海洋财经有限公司&nbsp;All&nbsp;Rights&nbsp;Reserved.
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '咨询'
        },
        {
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfcd97fd90f0f75097d6661238ccc7d77.png',
          lanhutext0: '关注'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />