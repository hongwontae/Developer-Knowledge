class Service{
    deleteUser(){
        console.log('delete User Success')
    }
}

class UserServiceProxy{

    constructor(user, service){
        this.user = user;
        this.service = service
    }

    deleteUser(){
        if(this.user.role === 'admin'){
            this.service.deleteUser()
        } else {
            console.log('권한이 없습니다.')
        }
    }
}

const generalUser = {username : 'hwt', role : 'general'};
const adminUser = {username : 'HWT', role : 'admin'};

const service = new Service()

const adminProxy = new UserServiceProxy(adminUser, service)
const generalProxy = new UserServiceProxy(generalUser, service)

adminProxy.deleteUser();
generalProxy.deleteUser();