// 移动端
fnResize()
window.onresize = function() {
    fnResize()
}

function fnResize() {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    console.log(deviceWidth)
    if(deviceWidth<=1920&&deviceWidth>1280){
        if (deviceWidth >= 1920) {
            deviceWidth = 1920
        }
        if (deviceWidth <= 1280) {
            deviceWidth = 1280
        }
        document.documentElement.style.fontSize = (deviceWidth /19.2) + 'px'
        // console.log( document.documentElement.style.fontSize = (deviceWidth / 19.2) + 'px')
    }else if(deviceWidth>=992&&deviceWidth<=1280){
        if (deviceWidth >= 1280) {
            deviceWidth = 1280
        }
        if (deviceWidth <= 992) {
            deviceWidth = 992
        }
        document.documentElement.style.fontSize = (deviceWidth / 12.8) + 'px'
        // console.log( document.documentElement.style.fontSize = (deviceWidth / 12.8) + 'px')
    }else if(deviceWidth>=750&&deviceWidth<992){
        if (deviceWidth >= 992) {
            deviceWidth = 992
        }
        if (deviceWidth <= 750) {
            deviceWidth = 750
        }
        document.documentElement.style.fontSize = (deviceWidth / 9.92 ) + 'px'
        // console.log( document.documentElement.style.fontSize = (deviceWidth /9.92 ) + 'px')

    }else{
        if (deviceWidth >= 750) {
            deviceWidth = 750
        }
        if (deviceWidth <= 320) {
            deviceWidth = 320
        }
        document.documentElement.style.fontSize = (deviceWidth / 7.5 * 2) + 'px'
    }
   
}
