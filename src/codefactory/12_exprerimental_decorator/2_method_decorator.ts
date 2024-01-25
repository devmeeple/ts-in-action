/**
 * method decorator
 */
class Idol {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance() {
        return `${this.name}가 춤을춥니다.`
    }
}

// target - static method에 데코레이팅을 할 경우 생성자 함수
//        - instance method에 데코레이팅 할 경우 인스턴스의 prototype
// propertyKey - 메서드의 이름
// descriptor - property descriptor
function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('LogCall');
    console.log('--- target ---');
    console.log(target);
    console.log('--- propertyKey ---');
    console.log(propertyKey);
    console.log('--- descriptor ---');
    console.log(descriptor);
}

const rose = new Idol('로제');
console.log('--- run dance ---');
rose.dance();

function Configurable(configurable: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Idol.prototype));

function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log(`[${env}] running function: ${propertyKey}`);

            return originalMethod.apply(this, ...args);
        };
    };
}

console.log(rose.dance());