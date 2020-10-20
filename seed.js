const { green, red } = require("chalk");
const { getMaxListeners } = require("./server");
const { db, Campus, Student } = require("./server/db");

const campuses =[{
    name: 'Blue',
    imageUrl:'http://www.clker.com/cliparts/F/t/X/o/S/p/simple-blue-house-md.png',
    address: '5801 S Ellis Ave, Chicago, IL 60637',
    description: 'Blue campus is mainly for tech students'
  },{
    name: 'Green',
    imageUrl:'http://www.clker.com/cliparts/s/j/P/S/8/U/green-house-md.png',
    address: '5903 S LaSalle Ave, Chicago, IL 60637',
    description: 'Green campus is mainly for arts students'
  },
  {
    name: 'Yellow',
    imageUrl:'http://www.clker.com/cliparts/O/i/x/Y/q/P/yellow-house-md.png',
    address: '5500 S Ellis Ave, Chicago, IL 60637',
    description: 'Yellow campus is sports team members'
  }
];

const students =[{
    firstName: 'Randy',
    lastName: 'Smith',
    email: 'randySmith@gmail.com',
    imageUrl: 'http://www.clker.com/cliparts/6/3/8/1/11954257271018956707Machovka_Reading.svg.med.png',
    gpa: 3.2
  },{
    firstName: 'Anna',
    lastName: 'Korszhevsky',
    email: 'annaKorszhevsky@gmail.com',
    imageUrl: 'http://www.clker.com/cliparts/3/7/3/d/11954448501086497047Gerald_G_Girl_Face_Cartoon_2.svg.med.png',
    gpa: 3.5
  },{
    firstName: 'Henry',
    lastName: 'Hart',
    email: 'henryHart@gmail.com',
    gpa: 2.9
  },{
    firstName: 'Rose',
    lastName: 'McHenry',
    email: 'roseMcHenry@gmail.com',
    imageUrl:'http://www.clker.com/cliparts/e/9/d/b/1195444967386716910Gerald_G_Girl_Face_Cartoon_1.svg.med.png',
    gpa: 3.0
  }
]

const seed = async () => {
  try {
    await db.sync({ force: true });

    // seed your database here!
    await Promise.all(
      students.map(student => (Student.create(student))),
      campuses.map(campus => (Campus.create(campus)))
    );
    const campusesInDB = await Campus.findAll({
      order:['id']
    });
    const studentsInDB = await Student.findAll({
      order:['id']
    });
    await studentsInDB[0].setCampus(campusesInDB[0]);
    await studentsInDB[1].setCampus(campusesInDB[0]);
    await studentsInDB[2].setCampus(campusesInDB[1])

  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
