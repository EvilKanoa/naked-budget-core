const response = (res, value, success = true, status) => {
    res.status(success ? 200 : (status || 500));
    if (typeof value === 'string') {
        res.json({
            message: value,
            success
        });
    } else {
        res.json({
            ...value,
            success
        });
    }
};

const to = (promise) => promise.then((data) => [null, data]).catch((err) => [err, null]);

export { response, to };