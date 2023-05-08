export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => {
      return (
        <div class="">
          你好，{props.msg}
        </div>
      )
    }
  },
})
