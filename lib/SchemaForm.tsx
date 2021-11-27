import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
  props: {
    schema: {
      type: Object as PropType<Schema>,
    },
  },
  name: 'SchemaForm',
  setup(props, { slots, emit, attrs }) {
    return () => {
      return <div>This is Form</div>
    }
  },
})
