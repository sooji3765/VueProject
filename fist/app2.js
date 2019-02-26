Vue.component('todo-footer',{
    template: '<div>This is another child component</div>' 
});

var cmp = {
    template : '<p>This is another local child components</p>'
};

var app = new Vue({
    el:'#app',
    data :{
        message:'This is a parent component'
    },
    components:{
        'todo-list': cmp
    }
});