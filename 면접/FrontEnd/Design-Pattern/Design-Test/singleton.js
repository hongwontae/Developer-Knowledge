const singleton = (function(){
    let instance;

    function createObject(){
        return {name : 'HWT is good'}
    }

    return {
        getInstance(){
            if(!instance){
                instance = createObject()
            }
            return instance
        }
    }

})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();
console.log(instance1 === instance2);