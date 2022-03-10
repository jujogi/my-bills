const billMapper = (bills = []) => {
    return bills.map(({ price, status, ...rest }) => ({
        ...rest,
        status: (status === 'notPayed') ? 'pending' : status,
        price: !isNaN(price) ? parseInt(price) : 0,
    }));
};

export default billMapper;