const satellitelist = {
  status: 0,
  success: true,
  data: [
    {
      id: 2,
      NAME: '星敏',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 3,
      NAME: '太敏',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 4,
      NAME: '接口装置',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 14,
      NAME: '飞轮',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 5,
      NAME: '磁力矩器',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 6,
      NAME: '微型星敏',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 7,
      NAME: 'GNCC',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 8,
      NAME: 'GNSS',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 9,
      NAME: '喷气系统',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 10,
      NAME: '高度表',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 11,
      NAME: '左V',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 12,
      NAME: '右V',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    },
    {
      id: 13,
      NAME: '阻力板舵',
      FATHERNAME: 'GNC分系统',
      FATHERID: 1
    }
  ],
  size: 13,
  message: '成功'
}

const graph = {
  status: 0,
  success: true,
  data: {
    nodesdata: [{
      NAME: 'GNC分系统',
      ONLYSIGN: '1',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '分系统'
    }, {
      NAME: 'GNCC',
      ONLYSIGN: '2',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '功能模块级',
      DES: '1/4冗余备份系统'
    }, {
      NAME: 'GNCC A机',
      ONLYSIGN: '7',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '单机'
    }, {
      NAME: 'GNSS',
      ONLYSIGN: '3',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '功能模块级',
      DES: '1/3冗余备份系统'
    }, {
      NAME: '接口装置',
      ONLYSIGN: '4',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '功能模块级'
    }, {
      NAME: '接口装置输出异常',
      ONLYSIGN: '5',
      STAGESIGN: 1,
      STAGENAME: '空间运行段',
      TYPE: '故障模式'
    }, {
      NAME: '左V',
      ONLYSIGN: '6',
      STAGESIGN: 2,
      STAGENAME: '再入返回段',
      TYPE: '单机'
    }],
    linkdata: [{
      ID: '1',
      NAME: '父类',
      SOURCE: '1',
      TARGET: '2',
      DES: '分系统与单机之间的关系'
    }, {
      ID: '2',
      NAME: '父类',
      SOURCE: '1',
      TARGET: '3',
      DES: '分系统与单机之间的关系'
    }, {
      ID: '3',
      NAME: '父类',
      SOURCE: '1',
      TARGET: '4',
      DES: '分系统与单机之间的关系'
    }, {
      ID: '4',
      NAME: '有故障模式',
      SOURCE: '4',
      TARGET: '5',
      DES: '实体与故障模式的关系'
    }, {
      ID: '5',
      NAME: '父类',
      SOURCE: '1',
      TARGET: '6',
      DES: '分系统与单机之间的关系'
    }, {
      ID: '6',
      NAME: '父类',
      SOURCE: '2',
      TARGET: '7',
      DES: '模块与单机之间的关系'
    }]
  }
}
// 异常检测模型列表
const detemodel = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    NAME: '光纤IMU1陀螺检测模型1',
    STUDYSOURCENAME: '',
    STAGENAME: '空间运行段',
    ERRORFACT: '陀螺输出异常',
    ONLYSIGN: '10',
    PHYSICALNAME: 'Gx陀螺仪',
    parts: '光纤IMU1',
    TESTVARS: '陀螺累计脉冲数'
  }, {
    id: 2,
    NAME: '光纤IMU1陀螺检测模型2',
    STUDYSOURCENAME: '光纤IMU1陀螺检测模型1',
    TIME: '2020-12-12 16:15:02',
    STAGENAME: '空间运行段',
    ERRORFACT: '陀螺输出异常',
    ONLYSIGN: '11',
    PHYSICALNAME: 'Gy陀螺仪',
    parts: '光纤IMU1',
    TESTVARS: '陀螺累计脉冲数'
  }],
  size: 2,
  message: '成功'
}

// 故障预测模型列表
const predmodel = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    NAME: '陀螺等效零偏X的检测模型',
    STUDYSOURCENAME: '',
    STAGENAME: '空间运行段',
    TESTVARS: '陀螺等效零偏X',
    INPUTLEN: '60',
    OUTPUTLEN: '1',
    ONLYSIGN: 1,
    PHYSICALNAME: '光纤IMU',
    ERRORFACT: '陀螺等效零偏X异常'
  }, {
    id: 2,
    NAME: '模陀螺等效零偏X的再学习模型',
    STUDYSOURCENAME: '陀螺等效零偏X的检测模型',
    TIME: '2020-12-19 16:05:02',
    STAGENAME: '空间运行段',
    TESTVARS: '陀螺等效零偏X',
    INPUTLEN: '60',
    OUTPUTLEN: '1',
    ONLYSIGN: 1,
    PHYSICALNAME: '光纤IMU',
    ERRORFACT: '陀螺等效零偏X异常'
  }],
  size: 2,
  message: '成功'
}

// 获取项目管理中变量管理列表
const vari = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    TESTVARNAME: '星敏v-x',
    TESTVARCODE: '140258-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '星敏',
    THRESHOLD: '(10,30)'
  }, {
    id: 2,
    TESTVARNAME: '星敏v-y',
    TESTVARCODE: '143058-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '星敏',
    THRESHOLD: '(30, 50)'
  }, {
    id: 3,
    TESTVARNAME: '星敏v-z',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '星敏',
    THRESHOLD: '(23, 50)'
  }, {
    id: 4,
    TESTVARNAME: 'HADIF-1',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '接口装置',
    THRESHOLD: '(23, 50)'
  }, {
    id: 5,
    TESTVARNAME: 'hfrghr-2',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '接口装置',
    THRESHOLD: '(23, 50)'
  }, {
    id: 6,
    TESTVARNAME: 'irohroghs-3',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: 'GNCC',
    THRESHOLD: '(23, 50)'
  }, {
    id: 7,
    TESTVARNAME: '飞轮v-z',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '飞轮',
    THRESHOLD: '(36, 50)'
  }, {
    id: 8,
    TESTVARNAME: '太敏XX5-z',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '太敏',
    THRESHOLD: '(23, 50)'
  }, {
    id: 9,
    TESTVARNAME: '太敏XX5',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '太敏',
    THRESHOLD: '(33, 50)'
  }, {
    id: 10,
    TESTVARNAME: '太敏XX1',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: '太敏',
    THRESHOLD: '(23, 50)'
  }, {
    id: 11,
    TESTVARNAME: 'djoifjof——4',
    TESTVARCODE: '1420359-xxx',
    TYPE: 'float',
    PHYSICALENTITYNAME: 'GNSS',
    THRESHOLD: '(23, 50)'
  }],
  size: 11,
  message: '成功'
}

// 获取项目管理中阶段管理列表
const stage = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    name: '空间运行段',
    ip: '10'
  }, {
    id: 2,
    name: '再入返回段',
    ip: '28'
  }, {
    id: 3,
    name: '交会捕捉段',
    ip: '35'
  }],
  size: 2,
  message: '成功'
}

// 获取项目管理中元件管理列表
const element = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    NAME: '壳体',
    FATHERID: 1,
    FATHERNAME: '飞轮1'
  }, {
    id: 2,
    NAME: 'xxx',
    FATHERID: 2,
    FATHERNAME: '光纤IMU1'
  }, {
    id: 3,
    NAME: 'fdfisojsd',
    FATHERID: 3,
    FATHERNAME: '飞轮2'
  }, {
    id: 4,
    NAME: 'fdffjds',
    FATHERID: 4,
    FATHERNAME: '光纤IMU1'
  }, {
    id: 5,
    NAME: 'fadfadfa',
    FATHERID: 5,
    FATHERNAME: '飞轮3'
  }, {
    id: 6,
    NAME: 'afafdfd',
    FATHERID: 6,
    FATHERNAME: 'rttu7i55'
  }, {
    id: 7,
    NAME: 'hghh',
    FATHERID: 7,
    FATHERNAME: 'hdfgryuk7'
  }, {
    id: 8,
    NAME: 'dfbfxb',
    FATHERID: 8,
    FATHERNAME: 'yy6u6mnh'
  }, {
    id: 9,
    NAME: 'bgbgbg',
    FATHERID: 9,
    FATHERNAME: '2442jkh'
  }, {
    id: 10,
    NAME: 'bxvx',
    FATHERID: 10,
    FATHERNAME: 'uilili'
  }, {
    id: 11,
    NAME: 'zvdd',
    FATHERID: 11,
    FATHERNAME: 'zdvfy'
  }],
  size: 11,
  message: '成功'
}

// 获取项目管理中故障事实管理列表
const failure = {
  status: 0,
  success: true,
  data: [{
    id: 1,
    NAME: 'XXX-1',
    PHYSICALENTITYID: 1,
    PHYSICALENTITYNAME: '飞轮',
    TYPE: '单机',
    ISSINGLE: '否',
    SERIOUSGRADE: 'Ⅱ',
    VENTUREGRADE: 'E'
  }, {
    id: 2,
    NAME: 'xxx-2',
    PHYSICALENTITYID: 2,
    PHYSICALENTITYNAME: '光纤IMU1',
    TYPE: '单机',
    ISSINGLE: '否',
    SERIOUSGRADE: 'Ⅲ',
    VENTUREGRADE: 'E'
  }, {
    id: 3,
    NAME: 'xxx-3',
    PHYSICALENTITYID: 3,
    PHYSICALENTITYNAME: '光纤IMU2',
    TYPE: '单机',
    ISSINGLE: '否',
    SERIOUSGRADE: 'Ⅲ',
    VENTUREGRADE: 'E'
  }],
  size: 3,
  message: '成功'
}

// 获取故障诊断中异常检测模型管理列表
const detemodelList = {
  status: 0,
  success: true,
  data: [{
    name: '星敏X方向角速度模型',
    stage: '空间运行段',
    parts: '星敏',
    val: '星敏V-x',
    broken: '星敏角速度异常'
  }, {
    name: '星敏Y方向角速度模型',
    stage: '空间运行段',
    parts: '星敏',
    val: '星敏V-y',
    broken: '星敏角速度异常'
  }],
  size: 2,
  message: '成功'
}

// 获取故障诊断中异常检测任务列表
const tasklist = {
  status: 0,
  success: true,
  data: [{
    name: '星敏检测任务',
    stage: '空间运行段',
    startTime: undefined,
    endTime: undefined,
    state: '未执行'
  }, {
    name: '光纤检测任务',
    stage: '空间运行段',
    startTime: undefined,
    endTime: undefined,
    state: '未执行'
  }, {
    name: '太敏检测任务',
    stage: '空间运行段',
    startTime: '2021-01-02 18:24:17',
    endTime: '2021-01-05 10:24:10',
    state: '已执行'
  }],
  size: 3,
  message: '成功'
}

// 获取异常检测历史故障列表
const detefaultlist = {
  status: 0,
  success: true,
  data: [{
    brokenTime: '2020-05-06',
    taskname: '星敏检测任务',
    name: '星敏角速度异常',
    radio: '确切',
    form: '异常检测模型',
    brokerelation: '——',
    relation: '——',
    startime: '',
    parts: '星敏A',
    single: '否',
    badlevel: '否',
    risk: '否'
  }, {
    brokenTime: '2021-05-06',
    taskname: '星敏检测任务',
    name: '星敏功能模块角速度异常',
    radio: '可能',
    form: '故障知识图谱',
    brokerelation: '可能关系',
    relation: '星敏Y方向输出异常',
    startime: '',
    parts: '星敏A',
    single: '否',
    badlevel: '否',
    risk: '否'
  }],
  size: 2,
  message: '成功'
}

// 获取异常检测模型学习成果
const studyResult = {
  status: 0,
  success: true,
  data: {
    numRes: [{
      TYPE: '训练集',
      OUTLIERSNUM: 10,
      OUTLIERSPERCENTAGE: 12
    }, {
      TYPE: '测试集',
      OUTLIERSNUM: 8,
      OUTLIERSPERCENTAGE: 10
    }],
    ABNORMITYMODELID: 1,
    XLIST: {
      xAxis: [1, 2, 3, 4, 5],
      serise: [102, 235, 256, 236, 156]
    },
    CLIST: {
      xAxis: [5, 6, 7, 8, 9],
      serise: [102, 25, 26, 36, 56]
    }
  },
  size: 2,
  message: '成功'
}

// 再学习保存异常检测模型接口
const savedeleRes = {
  status: 0,
  success: true,
  data: [],
  size: 0,
  message: '成功'
}

// 获取故障预测历史故障列表(废除)
// const faultlist = {
//   status: 0,
//   success: true,
//   data: [{
//     list: '1',
//     result: '异常',
//     startTime: '2020-12-01',
//     endTime: '2020-12-03',
//     starTime: '1',
//     model: '故障预测模型01',
//     taskname: '预测任务01',
//     realvalue: '1.234',
//     predict: '1.283'
//   }, {
//     list: '2',
//     result: '异常',
//     startTime: '2020-12-21',
//     endTime: '2020-12-23',
//     starTime: '2',
//     model: '故障预测模型02',
//     taskname: '预测任务02',
//     realvalue: '1.368',
//     predict: '1.456'
//   }],
//   size: 2,
//   message: '成功'
// }

// 获取故障预测中预测模型管理列表
const predmodelList = {
  status: 0,
  success: true,
  data: [{
    name: '星敏X方向角速度预测模型',
    stage: '空间运行段',
    parts: '星敏',
    val: '星敏V-x',
    broken: '星敏角速度异常'
  }, {
    name: '星敏Y方向角速度预测模型',
    stage: '空间运行段',
    parts: '星敏',
    val: '星敏V-y',
    broken: '星敏角速度异常'
  }],
  size: 2,
  message: '成功'
}

// 获取故障预测中预测任务列表
const predtasklist = {
  status: 0,
  success: true,
  data: [{
    name: '星敏故障预测任务',
    modelname: '星敏X方向角速度预测模型',
    stage: '空间运行段',
    startTime: undefined,
    endTime: undefined,
    state: '未执行'
  }, {
    name: '光纤陀螺故障预测任务',
    modelname: '光纤陀螺预测模型',
    stage: '空间运行段',
    startTime: undefined,
    endTime: undefined,
    state: '未执行'
  }, {
    name: '太敏故障预测任务',
    modelname: '太敏预测模型',
    stage: '空间运行段',
    startTime: '2021-01-02 18:24:17',
    endTime: '2021-01-05 10:24:10',
    state: '已执行'
  }],
  size: 3,
  message: '成功'
}

// 获取故障预测历史故障列表
const Predfaultlist = {
  status: 0,
  success: true,
  data: [{
    list: '1',
    result: '异常',
    brokenname: '星敏X方向角速度异常',
    brokenTime: '2020-12-01',
    starTime: '1',
    model: '星敏X方向角速度预测模型',
    taskname: '星敏故障预测任务',
    realvalue: '1.234',
    predict: '1.283'
  }, {
    list: '2',
    result: '异常',
    brokenname: '星敏Y方向角速度异常',
    brokenTime: '2020-12-21',
    starTime: '2',
    model: '星敏Y方向角速度预测模型',
    taskname: '星敏故障预测任务',
    realvalue: '1.368',
    predict: '1.456'
  }],
  size: 2,
  message: '成功'
}

// 获取故障预测再学习结果
const predreStudyRes = {
  status: 0,
  success: true,
  data: {
    ARR: [{
      TYPE: '初始模型测试集',
      RMSE: '3.23423',
      MEA: '2.32843',
      ACCURACY: '86.3922%'
    }, {
      TYPE: '再学习模型测试集',
      RMSE: '1.25373',
      MEA: '1.23344',
      ACCURACY: '92.2348%'
    }, {
      TYPE: '再学习模型训练集',
      RMSE: '1.02387',
      MEA: '1.13833',
      ACCURACY: '94.2386%'
    }],
    XLIST: {
      xAxis: [1, 2, 3, 4, 5],
      serise: [102, 235, 256, 236, 156]
    },
    CLIST: {
      xAxis: [5, 6, 7, 8, 9],
      serise: [102, 25, 26, 36, 56]
    },
    CTEST: {
      xAxis: [15, 16, 17, 18, 19],
      serise: [102, 205, 126, 306, 256]
    },
    ABNORMITYMODELID: 15
  },
  size: 2,
  message: '成功'
}

// 保存故障预测再学习结果
// const TaskDetailRes = {
//   status: 0,
//   success: true,
//   data: [],
//   size: 0,
//   message: '成功'
// }

// 查看异常检测任务详情接口
const savepredreStudyRes = {
  status: 0,
  success: true,
  data: [],
  size: 0,
  message: '成功'
}

module.exports = [
  // 获取单机信息
  {
    url: '/PhysicalEntityManage/SingleMachineQuery/',
    type: 'get',
    response: config => {
      const { parts, page, size } = config.query
      const result = JSON.parse(JSON.stringify(satellitelist))
      if (parts) {
        // if (result.data.satelliteCode.indexOf(parts) > -1)
        result.data = result.data.filter(item => item.NAME.indexOf(parts) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 获取知识图谱的信息
  {
    url: '/KnowledgeGraphManage/KnowledgeGraphQuery/',
    type: 'get',
    response: config => {
      const { stage, parts } = config.query

      const result = JSON.parse(JSON.stringify(graph))
      console.log(stage)
      console.log(parts)
      if (stage) {
        result.data.nodesdata = result.data.nodesdata.filter(item => item.STAGENAME === stage)
      }
      if (parts) {
        // result.data.nodesdata = result.data.nodesdata.filter(item => item.id === parts)
        const linkdata = []
        const nodesdata = []
        result.data.linkdata.forEach(e => {
          if (e.SOURCE === parts || e.TARGET === parts) {
            linkdata.push(e)
            if (nodesdata.every(n => n.ONLYSIGN !== e.SOURCE)) {
              nodesdata.push(result.data.nodesdata.find(node => node.ONLYSIGN === e.SOURCE))
            }
            if (nodesdata.every(n => n.ONLYSIGN !== e.TARGET)) {
              nodesdata.push(result.data.nodesdata.find(node => node.ONLYSIGN === e.TARGET))
            }
          }
        })
        result.data = {
          nodesdata,
          linkdata
        }
        console.dir(result)
      }
      return result
    }
  },
  // 模型训练获取异常检测模型列表
  {
    url: '/AbnormityModelManage/AbnormityModelQuery/',
    type: 'get',
    response: config => {
      const { model, stage, element, page, size } = config.query
      const result = JSON.parse(JSON.stringify(detemodel))
      console.log(model, stage, element)
      if (model) {
        result.data = result.data.filter(item => item.NAME.indexOf(model) > -1)
      }

      if (stage) {
        result.data = result.data.filter(item => item.STAGENAME.indexOf(stage) > -1)
      }

      if (element) {
        result.data = result.data.filter(item => item.PHYSICALNAME.indexOf(element) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }

      return result
    }
  },
  // 模型训练获取故障预测模型列表
  {
    url: '/ForecastModelManage/ForecastModelQuery/',
    type: 'get',
    response: config => {
      const { model, stage, parts, variable, page, size } = config.query
      const result = JSON.parse(JSON.stringify(predmodel))
      console.log(model, stage, parts)
      if (model) {
        result.data = result.data.filter(item => item.NAME.indexOf(model) > -1)
      }

      if (stage) {
        result.data = result.data.filter(item => item.STAGENAME.indexOf(stage) > -1)
      }

      if (parts) {
        result.data = result.data.filter(item => item.PHYSICALNAME.indexOf(parts) > -1)
      }
      if (variable) {
        result.data = result.data.filter(item => item.TESTVARS.indexOf(variable) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }

      return result
    }
  },
  // 获取项目管理中变量管理列表
  {
    url: '/TestvarManage/TestvarQuery/',
    type: 'get',
    response: config => {
      const { variance, parts, page, size } = config.query
      const result = JSON.parse(JSON.stringify(vari))
      console.log(page, size)
      if (parts) {
        result.data = result.data.filter(item => item.PHYSICALENTITYNAME.indexOf(parts) > -1)
      }
      if (variance) {
        result.data = result.data.filter(item => item.TESTVARNAME.indexOf(variance) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 获取项目管理中阶段管理列表
  {
    url: '/StageManage/StageQuery/',
    type: 'get',
    response: () => {
      return stage
    }
  },
  // 获取项目管理中元件管理列表
  {
    url: '/PhysicalEntityManage/ComponentQuery/',
    type: 'get',
    response: config => {
      const { ele, page, size } = config.query
      const result = JSON.parse(JSON.stringify(element))
      if (ele) {
        result.data = result.data.filter(item => item.NAME.indexOf(ele) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 获取项目管理中故障事实管理列表
  {
    url: '/ErrorFact/Error_query/',
    type: 'get',
    response: config => {
      const { failurename, parts, page, size } = config.query
      const result = JSON.parse(JSON.stringify(failure))
      if (failurename) {
        result.data = result.data.filter(item => item.NAME.indexOf(failurename) > -1)
      }
      if (parts) {
        result.data = result.data.filter(item => item.PHYSICALENTITYNAME.indexOf(parts) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 获取故障诊断中异常检测模型管理列表
  {
    url: '/gncdata/deteModelList/getDeteModelList',
    type: 'get',
    response: config => {
      const { modelname, stage, parts, page, size } = config.query
      const result = JSON.parse(JSON.stringify(detemodelList))
      if (modelname) {
        result.data = result.data.filter(item => item.name.indexOf(modelname) > -1)
      }
      if (stage) {
        result.data = result.data.filter(item => item.stage.indexOf(stage) > -1)
      }
      // if (stage) {
      //   result.data = result.data.filter(item => item.stage === stage)
      // }
      if (parts) {
        result.data = result.data.filter(item => item.parts.indexOf(parts) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 删除故障诊断、模型训练中异常检测模型接口
  {
    url: '/AbnormityModelManage/AbnormityModelDelete/',
    type: 'post',
    response: config => {
      const { ABNORMITYMODELID } = config.query
      // const result = JSON.parse(JSON.stringify(detemodelList))
      console.log(detemodel.data.findIndex(e => e.id === ABNORMITYMODELID))
      console.log(ABNORMITYMODELID)
      if (ABNORMITYMODELID) {
        // result.data = result.data.filter(item => item.name.indexOf(modelname) > -1)
        // 删除异常检测模型管理列表
        // detemodelList.data.splice(detemodelList.data.findIndex(e => e.name === modelId), 1)
        // detemodelList.size = detemodelList.size - 1
        // 删除异常检测模型再学习获取的模型信息
        detemodel.data.splice(detemodel.data.findIndex(e => e.id === ABNORMITYMODELID), 1)
        detemodel.size = detemodel.size - 1
      }
      return detemodel
    }
  },
  // 获取故障诊断中异常检测任务列表
  {
    url: '/AbnormityTask/TaskQuery/',
    type: 'get',
    response: config => {
      const { taskname, state, starttime, endtime, page, size } = config.query
      console.log(taskname, state, starttime, endtime)
      const result = JSON.parse(JSON.stringify(tasklist))
      if (taskname) {
        result.data = result.data.filter(item => item.name.indexOf(taskname) > -1)
      }
      if (state) {
        result.data = result.data.filter(item => item.state === state)
      }
      if (starttime) {
        result.data = result.data.filter(item => (new Date(item.startTime) - new Date(starttime)) > 0)
      }
      if (endtime) {
        result.data = result.data.filter(item => (new Date(item.endTime) - new Date(endtime)) < 0)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      result.size = result.data.length
      return result
    }
  },
  // 删除故障诊断中异常检测任务
  {
    url: '/AbnormityTask/TaskDelete/',
    type: 'get',
    response: config => {
      const { taskname } = config.query
      // const result = JSON.parse(JSON.stringify(tasklist))
      if (taskname) {
        tasklist.data.splice(tasklist.data.findIndex(e => e.name === taskname), 1)
        detemodelList.size = detemodelList.size - 1
      }
      return tasklist
    }
  },
  // 获取异常检测模型学习成果
  {
    url: '/AbnormityModelManage/StudyAndResult/',
    type: 'post',
    response: () => {
      return studyResult
    }
  },
  // 再学习保存异常检测模型接口
  {
    url: '/AbnormityModelManage/AbnormityModelStudySave/',
    type: 'post',
    response: () => {
      return savedeleRes
    }
  },
  // 获取故障预测历史故障列表（废除）
  // {
  //   url: '/gncdata/faultHistory/getFaultHistory',
  //   type: 'get',
  //   response: config => {
  //     const {taskname, starttime, endtime, page, size} = config.query
  //     console.log(taskname)
  //     const result = JSON.parse(JSON.stringify(faultlist))
  //     if (taskname) {
  //       result.data = result.data.filter(item => item.taskname.indexOf(taskname) > -1)
  //     }
  //     if (page) {
  //       result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
  //     }
  //     if (starttime) {
  //       result.data = result.data.filter(item => (new Date(item.startTime) - new Date(starttime)) > 0)
  //     }
  //     if (endtime) {
  //       result.data = result.data.filter(item => (new Date(item.endTime) - new Date(endtime)) < 0)
  //     }
  //     return result
  //   }
  // },

  // 获取异常检测历史故障列表
  {
    url: '/AbnormityHisErr/HisErrQuery/',
    type: 'get',
    response: config => {
      const { taskname, starttime, radio, endtime, page, size } = config.query
      console.log(taskname)
      const result = JSON.parse(JSON.stringify(detefaultlist))
      if (taskname) {
        result.data = result.data.filter(item => item.taskname.indexOf(taskname) > -1)
      }
      if (radio) {
        result.data = result.data.filter(item => item.radio === radio)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      if (starttime) {
        result.data = result.data.filter(item => (new Date(item.brokenTime) - new Date(starttime)) > 0)
      }
      if (endtime) {
        result.data = result.data.filter(item => (new Date(item.brokenTime) - new Date(endtime)) < 0)
      }
      return result
    }
  },

  // 获取故障预测中预测模型管理列表
  {
    url: '/gncdata/predModelList/getPredModelList',
    type: 'get',
    response: config => {
      const { modelname, stage, parts, page, size } = config.query
      const result = JSON.parse(JSON.stringify(predmodelList))
      console.log(parts)
      if (modelname) {
        result.data = result.data.filter(item => item.name.indexOf(modelname) > -1)
      }
      // if (stage) {
      //   result.data = result.data.filter(item => item.stage.indexOf(stage) > -1)
      // }
      if (stage) {
        result.data = result.data.filter(item => item.stage === stage)
      }
      if (parts) {
        result.data = result.data.filter(item => item.parts.indexOf(parts) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      return result
    }
  },
  // 删除模型训练中预测模型模型接口
  {
    url: '/ForecastModelManage/ForecastModelDelete/',
    type: 'get',
    response: config => {
      const { model } = config.query
      console.log(model)
      // const result = JSON.parse(JSON.stringify(detemodelList))
      if (model) {
        // result.data = result.data.filter(item => item.name.indexOf(modelname) > -1)
        predmodel.data.splice(predmodel.data.findIndex(e => e.name === model), 1)
        predmodel.size = predmodel.size - 1
      }
      return predmodel
    }
  },
  // 获取故障预测中预测任务列表
  {
    url: '/ForecastTask/TaskQuery/',
    type: 'get',
    response: config => {
      const { taskname, state, starttime, endtime } = config.query
      console.log(taskname, state, starttime, endtime)
      const result = JSON.parse(JSON.stringify(predtasklist))
      if (taskname) {
        result.data = result.data.filter(item => item.name.indexOf(taskname) > -1)
      }
      if (state) {
        result.data = result.data.filter(item => item.state === state)
      }
      if (starttime) {
        result.data = result.data.filter(item => (new Date(item.startTime) - new Date(starttime)) > 0)
      }
      if (endtime) {
        result.data = result.data.filter(item => (new Date(item.endTime) - new Date(endtime)) < 0)
      }
      return result
    }
  },
  // 删除故障预测中预测任务列表
  {
    url: '/ForecastTask/TaskDelete/',
    type: 'post',
    response: config => {
      const { taskname } = config.query
      if (taskname) {
        predtasklist.data.splice(predtasklist.data.findIndex(e => e.name === taskname), 1)
        detemodelList.size = detemodelList.size - 1
      }
      return predtasklist
    }
  },
  // 获取故障预测历史故障列表
  {
    url: '/ForecastTask/HisErrQuery/',
    type: 'get',
    response: config => {
      const { taskname, starttime, endtime, page, size } = config.query
      console.log(taskname, starttime, endtime, page, size)
      const result = JSON.parse(JSON.stringify(Predfaultlist))
      if (taskname) {
        result.data = result.data.filter(item => item.taskname.indexOf(taskname) > -1)
      }
      if (page) {
        result.data = result.data.filter((item, index) => index < size * page && index >= size * (page - 1))
      }
      if (starttime) {
        result.data = result.data.filter(item => (new Date(item.brokenTime) - new Date(starttime)) > 0)
      }
      if (endtime) {
        result.data = result.data.filter(item => (new Date(item.brokenTime) - new Date(endtime)) < 0)
      }
      return result
    }
  },
  // 获取故障预测再学习结果
  {
    url: '/ForecastModelManage/StudyAndResult/',
    type: 'post',
    response: () => {
      return predreStudyRes
    }
  },
  // 保存故障预测再学习结果
  {
    url: '/ForecastModelManage/ForecastModelStudySave/',
    type: 'post',
    response: () => {
      return savepredreStudyRes
    }
  },
  // 故障诊断中，开启任务时往列表中添加开始时间并改变执行状态
  {
    url: '/gncdata/pushtasklist/getPushtasklist',
    type: 'get',
    response: config => {
      const { taskname, startTime, endtime, state } = config.query
      // const result = JSON.parse(JSON.stringify(tasklist))
      console.log(tasklist.data.findIndex(item => item.name === taskname))
      if (startTime) {
        tasklist.data[tasklist.data.findIndex(item => item.name === taskname)].startTime = startTime
      }
      if (endtime) {
        tasklist.data[tasklist.data.findIndex(item => item.name === taskname)].endTime = endtime
      }
      if (state) {
        tasklist.data[tasklist.data.findIndex(item => item.name === taskname)].state = state
      }
      return tasklist
    }
  },
  // 故障诊断中，新增诊断任务接口
  {
    url: '/AbnormityTask/TaskAdd/',
    type: 'post',
    response: config => {
      const { taskname, stage } = config.query
      if (taskname && stage) {
        tasklist.data.push({
          name: taskname,
          stage: stage,
          startTime: undefined,
          endTime: undefined,
          state: '未执行'
        })
      }
      console.log(tasklist)
      console.log(taskname, stage)
      return tasklist
    }
  },
  // 故障预测中，开启任务时往列表中添加开始时间并改变执行状态
  {
    url: '/gncdata/pushpredtasklist/getPushpredtasklist',
    type: 'get',
    response: config => {
      const { taskname, startTime, endtime, state } = config.query
      // const result = JSON.parse(JSON.stringify(tasklist))
      console.log(predtasklist.data.findIndex(item => item.name === taskname))
      if (startTime) {
        predtasklist.data[predtasklist.data.findIndex(item => item.name === taskname)].startTime = startTime
      }
      if (endtime) {
        predtasklist.data[predtasklist.data.findIndex(item => item.name === taskname)].endTime = endtime
      }
      if (state) {
        predtasklist.data[predtasklist.data.findIndex(item => item.name === taskname)].state = state
      }
      return predtasklist
    }
  },
  // 故障预测中，新增诊断任务接口
  {
    url: '/ForecastTask/TaskAdd/',
    type: 'post',
    response: config => {
      const { name, stage, modelname, startTime, endtime } = config.query
      console.log(modelname)
      if (name && stage && modelname) {
        predtasklist.data.push({
          name: name,
          stage: stage,
          startTime: startTime,
          endTime: endtime,
          state: '未执行'
        })
      }
      console.log(predtasklist)
      return predtasklist
    }
  },
  // 异常检测结果确认接口(新加)
  {
    url: '/AbnormityHisErr/HisErrSubmit/',
    type: 'post',
    response: () => {
      return true
    }
  },
  // 异常检测结果删除接口(新加)
  {
    url: '/AbnormityHisErr/HisErrDelete/',
    type: 'post',
    response: () => {
      return true
    }
  },
  // 保存故障预测再学习结果
  {
    url: '/AbnormityTask/TaskDetailQuery/',
    type: 'get',
    response: () => {
      return true
    }
  }
]
