const people = [
  {
    id: 0,
    name: "klastill",
    age: 24,
    gender: "male"
  }
];

const resolvers = {
  Query: {
    people: () => people
  }
};

export default resolvers;