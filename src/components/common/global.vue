<script type="text/javascript">
function arrToObj (arr) {
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    let spli = arr[i].indexOf('=')
    let key = arr[i].substring(0, spli)
    result[key] = arr[i].substring(spli + 1)
  }
  return result
}
function strToObj (str) {
  let result = {}
  let spli = str.indexOf('=')
  let key = str.substring(0, spli)
  result[key] = str.substring(spli + 1)
  return result
}
export default {
  getSegment (index) {
    let url = ''
    if (location.hash !== '') {
      url = (location.hash).substring(2)
    } else {
      url = (location.pathname).substring(1)
    }
    let pathData = url.split('/')
    return pathData[index]
  },
  getQueryArgv (key) {
    let search = location.search
    if (!search) {
      return null
    }
    let newData = search.substring(1)
    if (newData.indexOf('&') !== -1) {
      let arr = newData.split('&')
      let obj = arrToObj(arr)
      return obj[key] || null
    } else {
      let obj = strToObj(newData)
      return obj[key] || null
    }
  }
}
</script>
