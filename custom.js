console.log('file loaded');

//Make div on retraite page clickable
console.log(document.getElementsByClassName('retraite-carte'))
let testDiv = document.getElementsByClassName('retraite-carte');
for (let i = 0; i < testDiv.length; i++) {
    const element = testDiv[i];
    element.addEventListener('click', function (event) {
        let goToPage = element.getAttribute('id');
        //        console.log('div clickable')
        //        console.log(event);
        console.log(goToPage);
        let makeUrl = 'http://localhost/pranayoga/retraites/' + goToPage;
        console.log(window.location + goToPage);
        window.open(makeUrl, "_self");
    })   
}
//console.log(document.getElementsByClassName('retraite-carte'));
//console.log(typeof(document.getElementsByClassName('retraite-carte')))

//divRetraiteCarte.forEach(element => {
//    console.log(element)
//    //element.getElementsByClassName('link-to-page')
//    addEventListener('click', function (event) {
//        console.log('div clickable')
//        console.log(event);
//        
//    });
//})

