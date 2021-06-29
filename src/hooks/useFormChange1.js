import {
    useRef,
    useState,
    useMemo
  } from 'react'
  
  /* 表单/表头搜素hooks */
  function useFormChange() {
    // const formData = useRef({})
    // const [, forceUpdate] = useState(null)
    const [formData, setFormData] = useState({name:'',options:'',select:''})
    const handerForm = useMemo(()=>{
      /* 改变表单单元项 */
      const setFormItem = (keys, value) => {
        // const form = formData.current
        formData[keys] = value
        setFormData(formData)
      }
          /* 重置表单 */
      const resetForm = () => {
        // const current = formData.current
        for (let i in formData) {
          formData[i] = ''
        }
        setFormData(formData) // 目的是迫使render函数执行，已使页面得到刷新
      }
      return [ setFormItem ,resetForm ]
    },[])
  
    return [ formData,...handerForm ]
  }
  
  export default useFormChange
  