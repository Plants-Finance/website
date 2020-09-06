function getPrice() {
    this.$http.get('https://roots-network-69742.firebaseio.com/chromes.json').then(function (data) {
        // this.bookmarks=data.body;
        console.log("test" +  data.json());
    })
    console.log('running')
}


function clickevent() {
    console.log('clicked');
}