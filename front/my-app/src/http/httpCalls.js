import axios from 'axios';

const pathPrefix = "http://52.6.197.90:8080"
export const getEntranceRateData = async () => {
    const path = pathPrefix+ `/getEntranceRateData`;
    return axios.get(path)
        .then(res => {
            return res.data
        })
 
}

export const getExitRateData = async () => {
    const path = pathPrefix+`/getExitRateData`;
    return axios.get(path)
        .then(res => {
            return res.data
        })
 
}
export const getAverageCustomersRateData = async () => {
    const path = `http://52.6.197.90:8080/getAverageCustomersRateData`;
    return axios.get(path)
        .then(res => {
            return res.data
        })
 
}

export const getAverageCapacityRateData = async () => {
    const path = pathPrefix+`/getAverageCapacityRateData`;
    return axios.get(path)
        .then(res => {
            return res.data
        })
 
}

export const getDailyFlowData = async () => {
    const path = pathPrefix+`/getDailyFlowData`;
    return axios.get(path)
        .then(res => {
            return res.data
        })
}

export const getDailyCapacity = async () => {
    const path = pathPrefix + '/getDailyCapacityData'
    return axios.get(path)
        .then(res => {
            return res.data
        })
}

export const getDensityData = async () => {
    const path = pathPrefix + `/getDensityData`
    return axios.get(path)
        .then(res => {
            return res.data
        })
}

export const getCovidData = async () => {
    const path = pathPrefix + `/getCovidTickerData`
    return axios.get(path)
        .then(res => {
            return res.data
        })
}