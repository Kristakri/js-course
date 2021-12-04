const upper = (text) => text.charAt(0).toUpperCase() + text.slice(1);
const welcome = ({ name }) => `Konichiva, ${upper(name)}`;

console.log(welcome({ name: "alex" }));
