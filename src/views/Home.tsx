export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
            主页
            <el-button type="primary">Primary</el-button>
            <div class="text-center">测试unocss</div>

            <el-icon size="20">
                    <i-ep-add-location />
            </el-icon>
            <el-button type="primary" icon={<i-ep-add-location/>} circle />
        </div>
      )
    }
  },
})
