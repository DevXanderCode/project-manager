// AutoBind Function
export function autoBind(target, methodName, descriptor) {
    const originalMethod = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value;
    const adjDescription = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescription;
}
//# sourceMappingURL=autobind.js.map