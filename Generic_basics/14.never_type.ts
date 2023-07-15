function generateError(message: string, code: number) : never {
    throw { message: message, code: code };
}

// const result = generateError('An Error occurred', 500);
// console.log( result );

generateError('An Error occurred', 500);

// https://blog.bitsrc.io/secrets-of-never-types-in-typescript-de57795a34da