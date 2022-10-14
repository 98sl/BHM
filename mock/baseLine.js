const baseLine = {
  'testBaseLine': 'sss2NVQFVJOO1',
  'testStage': '正样测试阶段',
  'labName': '整星测试实验室',
  'stationCode': 'A11901',
  'productInfoList': [{
    'productId': '2',
    'parentId': '1',
    'productName': 'donglianglun',
    'productCode': 'donglianglun377',
    'productNum': 'DFX244',
    'productStatus': '初样',
    'expiryTime': '2018-08-22',
    'testedSoftware': [{
      'testedSoftId': '2',
      'parentId': '1',
      'testedSoftName': 'dlx软件',
      'testedSoftCode': 'Dll789',
      'testedSoftVersion': 'V1',
      'testedSoftStatus': '激活',
      'testedSoftFilePath': '/homt/testedSoftware/v1'
    }, {
      'testedSoftId': '1',
      'parentId': '',
      'testedSoftName': 'dlx软件1',
      'testedSoftCode': 'Dll789',
      'testedSoftVersion': 'V1',
      'testedSoftStatus': '激活',
      'testedSoftFilePath': '/homt/testedSoftware/v1'
    }]
  }, {
    'productId': '1',
    'parentId': '',
    'productName': '帆板',
    'productCode': 'fanban231',
    'productNum': 'fanb244',
    'productStatus': '正样',
    'expiryTime': '2031-09-28',
    'testedSoftware': [{
      'testedSoftId': '2',
      'parentId': '1',
      'testedSoftName': 'fb软件',
      'testedSoftCode': 'fb789',
      'testedSoftVersion': 'V2',
      'testedSoftStatus': '激活',
      'testedSoftFilePath': '/homt/testedSoftware/v1/fbv1.0'
    }, {
        'testedSoftId': '1',
        'parentId': '',
        'testedSoftName': 'dlx软件',
        'testedSoftCode': 'Dll789',
        'testedSoftVersion': 'V1',
        'testedSoftStatus': '激活',
        'testedSoftFilePath': '/homt/testedSoftware/v1/fbv1.0'
    }]
  }],
  'testerInfo': [{
    'tester':'张杰',
    'testRole':'主测',
    'roleResponsibilities':'主测试'
  }, {
    'tester':'李想',
    'testRole':'备测',
    'roleResponsibilities':'备测'
  }],
  'testSite': '整星测试实验室',
  'testEquipment': [{
    'equipmentId': '2',
    'parentId': '1',
    'equipmentName': 'donglianglun',
    'equipmentModel': 'donglianglun377',
    'checkResult': '合格',
    'checkTime': '2018-08-21 11: 12: 13.1',
    'equipmentFilePath': '/homt/equipment/v1/fbv1.0'
  }, {
    'equipmentId': '1',
    'parentId': '',
    'equipmentName': '调理箱',
    'equipmentModel': 'tiaolix3*8',
    'checkResult': '合格',
    'checkTime': '2018-08-21 11: 12: 13.1',
    'equipmentFilePath': '/homt/equipment/tiaolix32.0'
  }],
  'testSoftware': [{
    'softId': '2',
    'parentId': '1',
    'softName': 'donglianglun',
    'softCode': 'donglianglun377',
    'softVersion': 'V12',
    'softStatus': '2018-08-21 11: 12: 13.1',
    'softFilePath': '/homt/software/v1/fbv1.0'
  },
  {
    'softId': '1',
    'parentId': '',
    'softName': 'donglianglun',
    'softCode': 'donglianglun377',
    'softVersion': 'V12',
    'softStatus': '2018-08-21 11: 12: 13.1',
    'softFilePath': '/homt/testSoftware/v1/fbv1.0'
  }],
  'basisFile': [{
    'fileId': '2',
    'parentId': '1',
    'fileName': '遥测指令规范',
    'fileCode': 'yaocezhilingguifan377',
    'approvalDate': '2018-08-21',
    'filePath': '/homt/software/v1/fbv1.0'
  }, {
    'fileId': '1',
    'parentId': '',
    'fileName': '测试设备校准规范',
    'fileCode': 'yaocezhilingguifan377',
    'approvalDate': '2018-08-21',
    'filePath': '/homt/file/v1/fbv1.0'
  }],
  'decodeFile': [{
    'fileId': '2',
    'parentId': '1',
    'fileName': '协议a.xml',
    'fileVersion': 'V1',
    'fileDesc': '解码协议',
    'filePath': '/homt/decodeFile/v1/fbv1.0'
  }, {
    'fileId': '1',
    'parentId': '',
    'fileName': '协议b.xml',
    'fileVersion': 'V2',
    'fileDesc': '解码协议b',
    'filePath': '/homt/decodeFile/v1/fbv1.0'
  }],
  'configFile': [{
    'fileId': '2',
    'parentId': '1',
    'fileName': '监显配置文件1.xml',
    'fileVersion': 'V1',
    'fileDesc': '曲线展示配置文件',
    'filePath': '/homt/quxianjianshi/v1/fbv1.0监显配置文件.xml/'
  }, {
    'fileId': '1',
    'parentId': '',
    'fileName': '监显配置文件2.xml',
    'fileVersion': 'V2',
    'fileDesc': '曲线展示配置文件',
    'filePath': '/homt/quxianjianshi/v1/fbv1.0/监显配置文件.xml'
  }],
  'remoteCrlCmd': [{
    'fileId': '2',
    'parentId': '1',
    'fileName': '遥控指令1.xml',
    'fileVersion': 'V1',
    'fileDesc': '遥控指令1文件',
    'filePath': '/homt/quxianjianshi/v1/遥控指令1.xml'
  }, {
    'fileId': '1',
    'parentId': '',
    'fileName': '遥控指令2.xml',
    'fileVersion': 'V2',
    'fileDesc': '遥控指令2',
    'filePath': '/homt/quxianjianshi/v1/遥控指令2.xml'
  }],
  'testScripts': [{
    'fileId': '2',
    'parentId': '1',
    'fileName': '测试细则1.xml',
    'fileVersion': 'V1',
    'fileDesc': '测试细则1文件',
    'filePath': '/homt/quxianjianshi/v1/测试细则1.xml'
  }, {
    'fileId': '1',
    'parentId': '',
    'fileName': '测试细则2.xml',
    'fileVersion': 'V2',
    'fileDesc': '测试细则2',
    'filePath': '/homt/quxianjianshi/v1/测试细则2.xml'
  }],
  'createTime': '2018-08-21 11:12:13.1',
  'modifyTime': '2018-08-22 11:12:13.1',
  'testBaseStatus': 'testing',
  'fileZipPath': {
    'fileLab': 'ftp://172.16.1.100:21',
    'fileLabUser': 'ftp100',
    'fileLabPwd': 'ftp100',
    'filePath': '/home/tbl/'
  },
  'testBaseLineDesc': '这是第三阶段测试'
}
const labInfo = [{
  'labName': '整星测试实验室',
  'department': '二室',
  'buildingName': '综合楼',
  'buildingNum': '534',
  'buildingSegment': 'A座',
  'floor': 'B1',
  'roomNum': 'A505',
  'labType': '试验',
  'stationNumber': '32',
  'functionDesc': '整星测试实验室',
  'IsClosed': '封闭',
  'liablePersion': '孔祥美',
  'tel': '18888888888'
}, {
  'labName': '零部件测试实验室',
  'department': '二室',
  'buildingName': '机关楼',
  'buildingNum': '544',
  'buildingSegment': 'A座',
  'floor': '9',
  'roomNum': 'A905',
  'labType': '试验',
  'stationNumber': '40',
  'functionDesc': '零部件测试实验室',
  'IsClosed': '封闭',
  'liablePersion': '王善',
  'tel': '18777777777'
}]
const stationInfo = [{
  'stationCode': 'A52',
  'satelliteCode': 'shenzhou8',
  'roomNumber': 'A114',
  'department': '二室1组',
  'dryingCabinet': '200柜',
  'swivelTable': 'A300',
  'otherEquipment': ['储物柜','更衣柜'],
  'liablePersion': '里昂',
  'tel': '18323333333',
  'historicalTestInfo': [{
    'satelliteCode':'shenzhou8',
    'holdingTime': '2020709-20200821'
  }, {
    'satelliteCode':'shenzhou7',
    'holdingTime': '2020609-2020080708'
  }]
}, {
  'stationCode': 'A50',
  'satelliteCode': 'shenzhou8',
  'roomNumber': 'A119',
  'department': '二室1组',
  'dryingCabinet': '300柜',
  'swivelTable': 'A301',
  'otherEquipment': ['储物柜', '更衣柜'],
  'liablePersion': '刘昂',
  'tel': '18323333333',
  'historicalTestInfo': [{
      'satelliteCode':'shenzhou8',
      'holdingTime': '2020709-20200821'
  }, {
    'satelliteCode':'shenzhou7',
    'holdingTime': '2020609-2020080708'
  }]
}]

module.exports = [
  {
    url: '/testsystem/testBaseLine/getTestBaseLine',
    type: 'get',
    response: config => {
      console.log(config)
      return {
        status: 0,
        success: true,
        data: baseLine
      }
    }
  }, {
    url: '/testsystem/resourceinfo/getLabInfoList',
    type: 'get',
    response: config => {
      console.log(config)
      return {
        status: 0,
        success: true,
        data: labInfo
      }
    }
  }, {
    url: '/testsystem/resourceinfo/getStationInfoList',
    type: 'get',
    response: config => {
      console.log(config)
      return {
        status: 0,
        success: true,
        data: stationInfo
      }
    }
  }
]
