// 20201102  不使用该方法，data分类全部固定，只显示两个，id只有1和2

// 传进来dataClassification数组
const formatDcList = (list) => {
  const result = []
  list.forEach(e => {
    if (e.parentId === '') {
      const isHas = result.find(t => e.id === t.id || e.classId === t.id)
      if (!isHas) {
        result.push({
          id: e.classId || e.id,
          label: e.className || e.dcName,
          children: []
        })
      } else {
        isHas.label = e.className || e.dcName
      }
    } else {
      const isHas = result.find(t => e.parentId === t.id)
      if (isHas) {
        isHas.children.push({
          id: e.classId || e.id,
          label: e.className || e.dcName
        })
      } else {
        result.push({
          id: e.parentId,
          label: '空',
          children: [{
            id: e.classId || e.id,
            label: e.className || e.dcName
          }]
        })
      }
    }
  })
  return result
}

export default formatDcList
