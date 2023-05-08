export default defineComponent({
  setup() {
    return () => {
      return (
        <div class="">
          <hello-world msg="zack" />
          <router-view></router-view>
        </div>
      )
    }
  },
})
