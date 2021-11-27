import { createApp, defineComponent, h, reactive, ref, Ref } from 'vue'
import { createUseStyles } from 'vue-jss'
import MonacoEditor from './components/MonacoEditor'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}
const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})
const schema = { type: 'string' }
export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)
    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {
        // some code
      }
      schemaRef.value = schema
    }
    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
