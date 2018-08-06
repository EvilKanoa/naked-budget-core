const response = (res, value, success = true, status = 500) => {
    res.status(success ? 200 : status);
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

export { response };