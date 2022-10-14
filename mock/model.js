const model = [{
  'nodes': [
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 417.015625,
      'y': 39,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '文件输入',
      'id': 'node239'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 416.015625,
      'y': 114,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据过滤',
      'id': 'node244'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 412.015625,
      'y': 186,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '列名设置',
      'id': 'node251'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 304.015625,
      'y': 286,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node258'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 536.015625,
      'y': 297,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node265'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 296.015625,
      'y': 398,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表切片',
      'id': 'node272'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 555.015625,
      'y': 394,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表切片',
      'id': 'node279'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 417.015625,
      'y': 482,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表合并',
      'id': 'node286'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 402.015625,
      'y': 570,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '空值清洗',
      'id': 'node293'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 395.015625,
      'y': 644,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '孤立森林',
      'id': 'node300'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 413.015625,
      'y': 730,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [],
      'label': '导出到本地',
      'id': 'node307'
    }
  ],
  'edges': [
    {
      'id': 'edge358',
      'source': 'node239',
      'target': 'node244',
      'sourceId': 'node239',
      'targetId': 'node244',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 416.78229166666665,
        'y': 56.5
      },
      'endPoint': {
        'x': 416.24895833333335,
        'y': 96.5
      }
    },
    {
      'id': 'edge387',
      'source': 'node244',
      'target': 'node251',
      'sourceId': 'node244',
      'targetId': 'node251',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 415.04340277777777,
        'y': 131.5
      },
      'endPoint': {
        'x': 412.98784722222223,
        'y': 168.5
      }
    },
    {
      'id': 'edge435',
      'source': 'node251',
      'target': 'node258',
      'sourceId': 'node251',
      'targetId': 'node258',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 393.115625,
        'y': 203.5
      },
      'endPoint': {
        'x': 322.915625,
        'y': 268.5
      }
    },
    {
      'id': 'edge493',
      'source': 'node251',
      'target': 'node265',
      'sourceId': 'node251',
      'targetId': 'node265',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 431.56517454954957,
        'y': 203.5
      },
      'endPoint': {
        'x': 516.4660754504505,
        'y': 279.5
      }
    },
    {
      'id': 'edge530',
      'source': 'node258',
      'target': 'node272',
      'sourceId': 'node258',
      'targetId': 'node272',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 302.765625,
        'y': 303.5
      },
      'endPoint': {
        'x': 297.265625,
        'y': 380.5
      }
    },
    {
      'id': 'edge565',
      'source': 'node265',
      'target': 'node279',
      'sourceId': 'node265',
      'targetId': 'node279',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 539.4434600515464,
        'y': 314.5
      },
      'endPoint': {
        'x': 551.5877899484536,
        'y': 376.5
      }
    },
    {
      'id': 'edge620',
      'source': 'node272',
      'target': 'node286',
      'sourceId': 'node272',
      'targetId': 'node286',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 321.2239583333333,
        'y': 415.5
      },
      'endPoint': {
        'x': 391.8072916666667,
        'y': 464.5
      }
    },
    {
      'id': 'edge673',
      'source': 'node279',
      'target': 'node286',
      'sourceId': 'node279',
      'targetId': 'node286',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 527.5724431818182,
        'y': 411.5
      },
      'endPoint': {
        'x': 444.4588068181818,
        'y': 464.5
      }
    },
    {
      'id': 'edge702',
      'source': 'node286',
      'target': 'node293',
      'sourceId': 'node286',
      'targetId': 'node293',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 414.03267045454544,
        'y': 499.5
      },
      'endPoint': {
        'x': 404.99857954545456,
        'y': 552.5
      }
    },
    {
      'id': 'edge731',
      'source': 'node293',
      'target': 'node300',
      'sourceId': 'node293',
      'targetId': 'node300',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 400.3602195945946,
        'y': 587.5
      },
      'endPoint': {
        'x': 396.6710304054054,
        'y': 626.5
      }
    },
    {
      'id': 'edge767',
      'source': 'node300',
      'target': 'node307',
      'sourceId': 'node300',
      'targetId': 'node307',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 398.67841569767444,
        'y': 661.5
      },
      'endPoint': {
        'x': 409.35283430232556,
        'y': 712.5
      }
    }
  ],
  'groups': []
}, {
  'nodes': [
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 606.015625,
      'y': 67,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '文件输入',
      'id': 'node999'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 594.015625,
      'y': 149,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': 'array转DataFrame',
      'id': 'node1004'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 589.015625,
      'y': 235,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '列名设置',
      'id': 'node1011'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 474.015625,
      'y': 325,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node1018'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 750.015625,
      'y': 322,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node1025'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 439.015625,
      'y': 398,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表切片',
      'id': 'node1032'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 788.015625,
      'y': 411,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表切片',
      'id': 'node1039'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 612.015625,
      'y': 476,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表合并',
      'id': 'node1046'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 601.015625,
      'y': 562,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '空值清洗',
      'id': 'node1053'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 576.015625,
      'y': 630,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': 'EMD_IMF能量特征',
      'id': 'node1060'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 599.015625,
      'y': 711,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '孤立森林',
      'id': 'node1067'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 615.015625,
      'y': 782,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [],
      'label': '导出到本地',
      'id': 'node1074'
    }
  ],
  'edges': [
    {
      'id': 'edge1115',
      'source': 'node999',
      'target': 'node1004',
      'sourceId': 'node999',
      'targetId': 'node1004',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 603.454649390244,
        'y': 84.5
      },
      'endPoint': {
        'x': 596.576600609756,
        'y': 131.5
      }
    },
    {
      'id': 'edge1149',
      'source': 'node1004',
      'target': 'node1011',
      'sourceId': 'node1004',
      'targetId': 'node1011',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 592.9981831395348,
        'y': 166.5
      },
      'endPoint': {
        'x': 590.0330668604652,
        'y': 217.5
      }
    },
    {
      'id': 'edge1186',
      'source': 'node1011',
      'target': 'node1018',
      'sourceId': 'node1011',
      'targetId': 'node1018',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 566.6545138888889,
        'y': 252.5
      },
      'endPoint': {
        'x': 496.3767361111111,
        'y': 307.5
      }
    },
    {
      'id': 'edge1234',
      'source': 'node1011',
      'target': 'node1025',
      'sourceId': 'node1011',
      'targetId': 'node1025',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 621.4006824712644,
        'y': 252.5
      },
      'endPoint': {
        'x': 717.6305675287356,
        'y': 304.5
      }
    },
    {
      'id': 'edge1270',
      'source': 'node1018',
      'target': 'node1032',
      'sourceId': 'node1018',
      'targetId': 'node1032',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 465.6252140410959,
        'y': 342.5
      },
      'endPoint': {
        'x': 447.4060359589041,
        'y': 380.5
      }
    },
    {
      'id': 'edge1294',
      'source': 'node1025',
      'target': 'node1039',
      'sourceId': 'node1025',
      'targetId': 'node1039',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 757.4875351123595,
        'y': 339.5
      },
      'endPoint': {
        'x': 780.5437148876405,
        'y': 393.5
      }
    },
    {
      'id': 'edge1353',
      'source': 'node1032',
      'target': 'node1046',
      'sourceId': 'node1032',
      'targetId': 'node1046',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 477.82972756410254,
        'y': 415.5
      },
      'endPoint': {
        'x': 573.2015224358975,
        'y': 458.5
      }
    },
    {
      'id': 'edge1402',
      'source': 'node1039',
      'target': 'node1046',
      'sourceId': 'node1039',
      'targetId': 'node1046',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 740.6310096153846,
        'y': 428.5
      },
      'endPoint': {
        'x': 659.4002403846154,
        'y': 458.5
      }
    },
    {
      'id': 'edge1454',
      'source': 'node1046',
      'target': 'node1053',
      'sourceId': 'node1046',
      'targetId': 'node1053',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 609.7772529069767,
        'y': 493.5
      },
      'endPoint': {
        'x': 603.2539970930233,
        'y': 544.5
      }
    },
    {
      'id': 'edge1495',
      'source': 'node1053',
      'target': 'node1060',
      'sourceId': 'node1053',
      'targetId': 'node1060',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 594.5818014705883,
        'y': 579.5
      },
      'endPoint': {
        'x': 582.4494485294117,
        'y': 612.5
      }
    },
    {
      'id': 'edge1520',
      'source': 'node1060',
      'target': 'node1067',
      'sourceId': 'node1060',
      'targetId': 'node1067',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 580.9847608024692,
        'y': 647.5
      },
      'endPoint': {
        'x': 594.0464891975308,
        'y': 693.5
      }
    },
    {
      'id': 'edge1543',
      'source': 'node1067',
      'target': 'node1074',
      'sourceId': 'node1067',
      'targetId': 'node1074',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 602.959286971831,
        'y': 728.5
      },
      'endPoint': {
        'x': 611.071963028169,
        'y': 764.5
      }
    }
  ],
  'groups': []
}, {
  'nodes': [
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 716.015625,
      'y': 85,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '文件输入',
      'id': 'node2'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 720.015625,
      'y': 167,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '列名设置',
      'id': 'node7'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 710.015625,
      'y': 245,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node14'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 703.015625,
      'y': 333,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表拆分',
      'id': 'node21'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 714.015625,
      'y': 415,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表归一化',
      'id': 'node28'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 727.015625,
      'y': 508,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': 'LSTM',
      'id': 'node35'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 734.015625,
      'y': 602,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [],
      'label': '导出到本地',
      'id': 'node42'
    }
  ],
  'edges': [
    {
      'id': 'edge62',
      'source': 'node2',
      'target': 'node7',
      'sourceId': 'node2',
      'targetId': 'node7',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 716.8692835365854,
        'y': 102.5
      },
      'endPoint': {
        'x': 719.1619664634146,
        'y': 149.5
      }
    },
    {
      'id': 'edge103',
      'source': 'node7',
      'target': 'node14',
      'sourceId': 'node7',
      'targetId': 'node14',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 717.7720352564103,
        'y': 184.5
      },
      'endPoint': {
        'x': 712.2592147435897,
        'y': 227.5
      }
    },
    {
      'id': 'edge142',
      'source': 'node14',
      'target': 'node21',
      'sourceId': 'node14',
      'targetId': 'node21',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 708.6235795454545,
        'y': 262.5
      },
      'endPoint': {
        'x': 704.4076704545455,
        'y': 315.5
      }
    },
    {
      'id': 'edge174',
      'source': 'node21',
      'target': 'node28',
      'sourceId': 'node21',
      'targetId': 'node28',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 705.3631859756098,
        'y': 350.5
      },
      'endPoint': {
        'x': 711.6680640243902,
        'y': 397.5
      }
    },
    {
      'id': 'edge204',
      'source': 'node28',
      'target': 'node35',
      'sourceId': 'node28',
      'targetId': 'node35',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 716.4618615591398,
        'y': 432.5
      },
      'endPoint': {
        'x': 724.5693884408602,
        'y': 490.5
      }
    },
    {
      'id': 'edge253',
      'source': 'node35',
      'target': 'node42',
      'sourceId': 'node35',
      'targetId': 'node42',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 728.3188164893617,
        'y': 525.5
      },
      'endPoint': {
        'x': 732.7124335106383,
        'y': 584.5
      }
    }
  ],
  'groups': []
}, {
  'nodes': [
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 720.015625,
      'y': 33,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '文件输入',
      'name': 'fileInput',
      'id': 'node2'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 724.015625,
      'y': 108,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '列名设置',
      'id': 'node7'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 719.015625,
      'y': 179,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '属性筛选',
      'id': 'node14'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 719.015625,
      'y': 247,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '时域特征',
      'id': 'node21'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 715.015625,
      'y': 331,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '小波包系数能量特征',
      'id': 'node28'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 720.015625,
      'y': 412,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表合并',
      'id': 'node35'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 725.015625,
      'y': 481,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': 'Isomap融合',
      'id': 'node42'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 727.015625,
      'y': 559,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表归一化',
      'id': 'node49'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 734.015625,
      'y': 628,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': '数据表拆分',
      'id': 'node56'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 736.015625,
      'y': 701,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [
        [
          1,
          0.5
        ]
      ],
      'label': 'LSTM',
      'id': 'node63'
    },
    {
      'size': [
        '170',
        '34'
      ],
      'type': 'node',
      'x': 741.015625,
      'y': 775,
      'shape': 'customNode',
      'color': '#1856b4',
      'image': '&#xe614;',
      'stateImage': '',
      'inPoints': [
        [
          0,
          0.5
        ]
      ],
      'outPoints': [],
      'label': '导出到本地',
      'name': 'importLocal',
      'id': 'node70'
    }
  ],
  'edges': [
    {
      'id': 'edge93',
      'source': 'node2',
      'target': 'node7',
      'sourceId': 'node2',
      'targetId': 'node7',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 720.9489583333334,
        'y': 50.5
      },
      'endPoint': {
        'x': 723.0822916666666,
        'y': 90.5
      }
    },
    {
      'id': 'edge157',
      'source': 'node7',
      'target': 'node14',
      'sourceId': 'node7',
      'targetId': 'node14',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 722.7832306338028,
        'y': 125.5
      },
      'endPoint': {
        'x': 720.2480193661972,
        'y': 161.5
      }
    },
    {
      'id': 'edge189',
      'source': 'node14',
      'target': 'node21',
      'sourceId': 'node14',
      'targetId': 'node21',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 719.015625,
        'y': 196.5
      },
      'endPoint': {
        'x': 719.015625,
        'y': 229.5
      }
    },
    {
      'id': 'edge244',
      'source': 'node21',
      'target': 'node28',
      'sourceId': 'node21',
      'targetId': 'node28',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 718.1822916666666,
        'y': 264.5
      },
      'endPoint': {
        'x': 715.8489583333334,
        'y': 313.5
      }
    },
    {
      'id': 'edge286',
      'source': 'node28',
      'target': 'node35',
      'sourceId': 'node28',
      'targetId': 'node35',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 716.0958719135803,
        'y': 348.5
      },
      'endPoint': {
        'x': 718.9353780864197,
        'y': 394.5
      }
    },
    {
      'id': 'edge319',
      'source': 'node35',
      'target': 'node42',
      'sourceId': 'node35',
      'targetId': 'node42',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 721.283740942029,
        'y': 429.5
      },
      'endPoint': {
        'x': 723.747509057971,
        'y': 463.5
      }
    },
    {
      'id': 'edge349',
      'source': 'node42',
      'target': 'node49',
      'sourceId': 'node42',
      'targetId': 'node49',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 725.464342948718,
        'y': 498.5
      },
      'endPoint': {
        'x': 726.566907051282,
        'y': 541.5
      }
    },
    {
      'id': 'edge399',
      'source': 'node49',
      'target': 'node56',
      'sourceId': 'node49',
      'targetId': 'node56',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 728.7909873188406,
        'y': 576.5
      },
      'endPoint': {
        'x': 732.2402626811594,
        'y': 610.5
      }
    },
    {
      'id': 'edge424',
      'source': 'node56',
      'target': 'node63',
      'sourceId': 'node56',
      'targetId': 'node63',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 734.4950770547945,
        'y': 645.5
      },
      'endPoint': {
        'x': 735.5361729452055,
        'y': 683.5
      }
    },
    {
      'id': 'edge452',
      'source': 'node63',
      'target': 'node70',
      'sourceId': 'node63',
      'targetId': 'node70',
      'start': {
        'x': 0,
        'y': 17
      },
      'end': {
        'x': 0,
        'y': -17
      },
      'shape': 'customEdge',
      'type': 'edge',
      'startPoint': {
        'x': 737.1980574324324,
        'y': 718.5
      },
      'endPoint': {
        'x': 739.8331925675676,
        'y': 757.5
      }
    }
  ],
  'groups': []
}]

module.exports = [
  {
    url: '/ALGORITHMINFOView/Query/',
    type: 'get',
    response: config => {
      const { templateId } = config.query
      return {
        status: 0,
        succeeded: true,
        data: model[templateId - 1] || { nodes: [], edges: [], groups: [] }
      }
    }
  }
]
