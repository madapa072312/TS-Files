import students from './Store'

students.forEach((s)=>{
    console.log(s.getName() , s.getAge(), s["subject"]());
});