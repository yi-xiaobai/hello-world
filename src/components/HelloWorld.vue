<template>
  <div class="hello">
    <a-upload
      name="file"
      :multiple="false"
      @change="changeFile"
      :customRequest="customRequest"
      accept=".csv"
      ref="upload"
    >
      <a-button type="primary">上传</a-button>
    </a-upload>

    <a-button type="warning" @click="save">保存</a-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      file: null,
    };
  },
  methods: {
    changeFile(info) {
      console.log("选择文件");
      console.log(info);
      if (info.fileList.length == 0) {
        this.file = null;
      } else {
        this.file = info.file;
      }
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log("上传成功");
        // this.$message.success(`${info.file.name} 上传成功`);
      } else if (info.file.status === "error") {
        console.log("上传失败");
        // this.$message.error(`${info.file.name} 上传失败.`);
      }
    },
    customRequest(data) {
      console.log("111");
      const formData = new FormData();
      formData.append("file", data.file);
      //   formData.append("settleId", this.settleId);
      //   formData.append("memberTime", this.memberTime);
      this.formData = formData;
    },

    // 上传到java接口
    save() {
      console.log("==>Get this.file", this.file);
      const formData = new FormData();
      formData.append("file", this.file);
      console.log("==>Get formData", formData);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
