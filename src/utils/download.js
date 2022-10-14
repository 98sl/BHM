/**
 * Params
 * data: 二进制流数据    filename：文件名.后缀    type：下载类型
 */
export default function(data, fileName, type) {
  const blob = new Blob([data], { type }) // 暂时必须填写下载文件类型
  const elink = document.createElement('a')
  elink.href = window.URL.createObjectURL(blob)
  elink.download = fileName
  elink.click()
  window.URL.revokeObjectURL(elink.href)
}

/** Mime 类型列表  https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 * application/msword                                                          doc
 * application/vnd.ms-excel	                                                   xls
 * application/vnd.openxmlformats-officedocument.wordprocessingml.document     docx
 * application/vnd.openxmlformats-officedocument.spreadsheetml.sheet           xlsx
 * application/pdf                                                             pdf
 * text/plain                                                                  txt
 * application/zip                                                             zip
 * application/x-rar-compressed                                                rar
 * application/xml(内容不可读)                                                  xml
 * text/xml(内容可读)                                                           xml
 * text/csv                                                                    csv
 */
