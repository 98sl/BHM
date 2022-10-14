const presetList = {
  data: new Array(10).fill({}).map((item, index) => {
    return {
      id: index + 1,
      name: `预置模板${index}`,
      model: `卫星${index}`,
      status: index !== 2,
      author: `管理员${index}`
    }
  }),
  status: 0,
  success: true,
  totalRows: 0
}
const customList = {
  data: new Array(10).fill({}).map((item, index) => {
    return {
      id: index + 1,
      name: `定制模板${index}`,
      model: `卫星${index}`,
      status: index !== 2,
      author: `研究员${index}`
    }
  }),
  status: 0,
  success: true,
  totalRows: 0
}

module.exports = [
  {
    url: '/template/preset/',
    type: 'get',
    response: config => {
      const { pageIndex: page, pageSize: size } = config.query
      const result = JSON.parse(JSON.stringify(presetList))
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      result.totalRows = result.data.length
      return result
    }
  },
  {
    url: '/template/custom/',
    type: 'get',
    response: config => {
      const { pageIndex: page, pageSize: size } = config.query
      const result = JSON.parse(JSON.stringify(customList))
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      result.totalRows = result.data.length
      return result
    }
  }
]
