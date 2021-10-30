const randomDigit = () => {
    return Math.floor(Math.random() * 10)
};

// Simulating a person's account
const generateRandomCPF = () => {
    let cpf = `${randomDigit()}${randomDigit()}${randomDigit()}.${randomDigit()}${randomDigit()}${randomDigit()}.${randomDigit()}${randomDigit()}${randomDigit()}-${randomDigit()}${randomDigit()}`;
    return cpf;
};

export default generateRandomCPF;