
// console.log('aaa')

// let headline = document.querySelector('.header-line')
// console.log(headline)

// let newButton = document.createElement('div')
// console.log(newButton);



var addSearchWindow = ()=> {
  let Bar=location.host+""
  let q = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text)
  if (!q) q = prompt("\u8BF7\u8F93\u5165\u641C\u7D22\u7684\u5173\u952E\u8BCD:", "")
  if (q!=null) {
    let qlocation=" "
    qlocation=('http://www.google.com/search?num=30&hl=zh-CN&newwindow=1&q='+q+'&sitesearch='+Bar+'')
    window.open(qlocation)
  }
}