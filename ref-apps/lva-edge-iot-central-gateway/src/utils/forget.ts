export function forget(fireAndForgetAsyncFunc: any, ...params) {
    void (async () => {
        await fireAndForgetAsyncFunc(...params);
    })().catch();
}
