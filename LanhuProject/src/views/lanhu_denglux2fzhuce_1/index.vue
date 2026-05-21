<template>
  <div class="page flex-col">
    <div class="group_1 flex-col">
      <div class="block_1 flex-row">
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
    <div class="group_2 flex-col">
      <div class="image-wrapper_1 flex-col">
        <img
          class="image_1"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNG90afb4e4cb1d3fd95cd7a298baec48dc.png"
        />
        <img
          class="image_2"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGff5ab2967728899a0a5195d627ccb15c.png"
        />
        <img
          class="image_3"
          referrerpolicy="no-referrer"
          src="./assets/img/FigmaDDSSlicePNGc85798f02d6991e1e2717f7794f6fc39.png"
        />
      </div>
    </div>
    <div class="group_3 flex-col">
      <div class="text-wrapper_2 flex-row justify-between">
        <span class="text_3">会员登录通道</span>
        <span class="text_4">会员入驻通道</span>
      </div>
      <div class="box_1 flex-col"></div>
      <div class="list_1 flex-col">
        <div
          class="list-items_1 flex-row"
          :style="{ background: item.lanhuBg0 }"
          v-for="(item, index) in loopData0"
          :key="index"
        >
          <div class="box_2 flex-col justify-between">
            <div class="text-wrapper_3 flex-row justify-between">
              <span class="text_5" :style="{ color: item.lanhufontColor0 }" v-html="item.lanhutext0"></span>
              <span class="text_6" :style="{ color: item.lanhufontColor1 }" v-html="item.lanhutext1"></span>
            </div>
            <span class="text_7" v-html="item.lanhutext2"></span>
          </div>
          <img class="image_4" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
        </div>
      </div>
      <div class="text-wrapper_4 flex-col"><span class="text_8">&nbsp;立即入住</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loopData0: [
        {
          lanhuBg0: 'linear-gradient(91deg, rgba(248,237,197,1.000000) 0, rgba(242,211,125,1.000000) 100.000000%)',
          lanhutext0: '黄金会员',
          lanhufontColor0: 'rgba(151,113,72,1.000000)',
          lanhutext1: '(￥8000/月)',
          lanhufontColor1: 'rgba(151,113,72,1.000000)',
          lanhutext2: '电话咨询，微信咨询<br/>黄金会员每日200条发帖',
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG66c52c22495281ff982893dadb402d7b.png'
        },
        {
          lanhuBg0: 'linear-gradient(270deg, rgba(166,226,242,1.000000) 0, rgba(241,244,244,1.000000) 100.000000%)',
          lanhutext0: '星耀会员',
          lanhufontColor0: 'rgba(6,84,98,1.000000)',
          lanhutext1: '(￥79998/年)',
          lanhufontColor1: 'rgba(6,84,98,1.000000)',
          lanhutext2: '价格享8折优惠，电话咨询<br/>微信咨询，星耀年费会员每日不限量发帖',
          lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1e16f3a555aef2dfdebe3d547c015996.png'
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
</script>
<style scoped lang="css" src="./assets/index.rem.css" />