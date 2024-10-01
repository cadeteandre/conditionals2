const schoolGrade: number = Math.ceil(Math.random() * 10);

console.log(schoolGrade);

switch(true) {
    case (schoolGrade === 1):
        console.log('sehr gut');
    break;
    case (schoolGrade === 2):
        console.log('gut');
    break;
    case (schoolGrade === 3):
        console.log('befriedigend');
    break;
    case (schoolGrade === 4):
        console.log('ausreichend');
    break;
    case (schoolGrade === 5):
        console.log('mangelhaft');
    break;
    case (schoolGrade === 6):
        console.log('ungenügend');
    break;
    default:
        console.log('Das ist keine gültige Schulnote.');
}