import axios from "axios";
import generateUuid from "../utils/uuid";

const BASE_URL = "https://jo1gcjb33h.execute-api.us-east-2.amazonaws.com/dev";
const API_KEY = "GrMyne58gQ3bV4qGfPo9r6FgnjzT8pth9Dk2JI3p";

const requestData = async (options) => {
    try {
        const { data } = await axios(options);
        return data;
    } catch (e) {
        return e;
    }
};

const getBillsProvider = async () => {
    const options = {
        url: `${BASE_URL}/bills`,
        method: "get",
        headers: {
            "x-api-key": API_KEY
        }
    };
    const { body = []} = await requestData(options);
    return body;
};

const addBillProvider = async (bill) => {
    console.log(bill);
    const options = {
        url: `${BASE_URL}/bills`,
        method: "post",
        headers: {
            "x-api-key": API_KEY
        },
        data: {
            id: generateUuid(),
            ...bill,
        },
    };

    const response = await requestData(options);
    console.log(response);
}

export {
    getBillsProvider,
    addBillProvider
}