module.exports = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
