var eventBus = new Vue();


Vue.component('child-component',{
    template : '<div>하위 컴포넌트 영역입니다.'
    +'<input type="text" id="inputs">'
    +'<button v-on:click="showLog">show</button></div>',
    methods:{
        showLog:function(){
            var inputs = document.getElementById('inputs').value;
            eventBus.$emit('triggerEventBus',inputs);
        }
    }
});

var message;
var app = new Vue({

    el : '#app',
    created : function(){
        eventBus.$on('triggerEventBus',function(value){
            console.log("전달 값 :",value);
            message = value;
        });
    }


});