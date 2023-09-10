function changeBodyBackgoundToPurple() {
    if (document.querySelector('body').className == 'pp-bg') {
        document.querySelector('body').className = ''
    } else {
        document.querySelector('body').className = 'pp-bg'
    }
}