import {Course} from './Course'
@Course({
    name : "Angular 9"
})
export class Student {
    constructor(private name: string, private age: number) {

    }
    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
    
}