var app = new Vue({

    el:'#app',
    data:{
        message : 'Hello Vue ~~!',
        todo:'할 일 1',
        uid : '20',
        flag : false
    },
    methods: {
        check(){
            console.log("hi");
        },
        eventBtn : function() {
            
            alert("eveent");
        }
        // check :function () {
        //     console.log("hi";)
        // }
    },  
});