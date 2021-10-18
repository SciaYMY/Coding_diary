const student=$('#student');
const age=student.find('.age'); //find 하위에 있는
// const photo=student.find('img');
const photo=student.find('.photo');
const img=student.find('img');
age.css({background: 'pink', padding: '10px', 'text-align': 'center'});
photo.css({width: '500px', background: 'yellow', textAlign: 'center', margin: "0 auto"})