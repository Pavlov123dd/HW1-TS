class School {
    directions: String[] = [];
  
    addDirection(direction: String) {
      this.directions.push(direction);
    }
  }
  
  class Direction {
    levels: Number[] = [];
    _name: String;
  
    get name(): String {
      return this._name;
    }
  
    constructor(name: String) {
      this._name = name;
    }
  
    addLevel(level: Number) {
      this.levels.push(level);
    }
  }
  
  class Level {
    groups: String[] = [];
    _name: String;
    _program: String;
  
    constructor(name: String, program: String) {
      this._name = name;
      this._program = program;
    }
  
    get name(): String {
      return this._name;
    }
  
    get program(): String {
      return this._program;
    }
  
    addGroup(group: String) {
      this.groups.push(group);
    }
  }
  
  class Group {
    _students: Object[] = [];
    directionName: String;
    levelName: String;
  
    get students(): Object[]  {
      return this._students;
    }
  
    constructor(directionName: String, levelName: String) {
      this.directionName = directionName;
      this.levelName = levelName;
    }
  
    addStudent(student: Object) {
      this._students.push(student);
    }
  
    showPerformance() {
        const sortedStudents: [] = this._students.toSorted(                //??
          (a: object, b: object) => b.getPerformanceRating() - a.getPerformanceRating()
        );
  
      return sortedStudents;
    }
  }
  
  class Student {
    grades: any = {};
    attendance: Number[] = [];
    firstName: String;
    lastName: String;
    birthYear: number;
  
    constructor(firstName: String, lastName: String, birthYear: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
    }
  
    get fullName(): String {
        return `${this.lastName} ${this.firstName}`;
      }
  
    set fullName(value: String) {
      [this.lastName, this.firstName] = value.split(" ");
    }
  
    get age(): Number {
      return new Date().getFullYear() - this.birthYear;
    }
  
    setGrade(subject: any, grade: Number) { 
      this.grades[subject] = grade;
    }
  
    markAttendance(present: Number) {
      this.attendance.push(present);
    }
  
    getPerformanceRating(): Number {
      const gradeValues: number[] = Object.values(this.grades);
  
      if (gradeValues.length === 0) return 0;
  
      const averageGrade: number =
        gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
  
      const attendancePercentage: number =
        (this.attendance.filter((present) => present).length /
          this.attendance.length) *
        100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }