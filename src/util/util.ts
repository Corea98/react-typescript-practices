export const fetchFakeCount: () => Promise<number> = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100))
        }, 1500);
    })
}