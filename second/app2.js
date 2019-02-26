Vue.component('child-component',{
    template:'<button v-on:click="showLog">SHOW</button>',
    methods:{
        showLog: function(){
            this.$emit('show-log');
        }
    }
});

var app = new Vue({
    el:'#app',
    data:{
        message :'hello passed from parent'
    },
    methods:{
        printText: function(){
            console.log("received an event");
        }
    }
});