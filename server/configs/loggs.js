import moment from "moment-timezone";

const getTimeStamp = () => {
    return moment.tz('America/mexico_city').format('HH:mm:ss')
}

const info = (namespace, message, object) => {
    const typelog = 'INFO';
    if (object) {
        console.info(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`, object);
    } else {
        console.info(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`);
    }
}

const warn = (namespace, message, object) => {
    const typelog = 'WARN';
    if (object) {
        console.warn(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`);
    }
}

const error = (namespace, message, object) => {
    const typelog = 'ERROR';
    if (object) {
        console.error(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`);
    }
}

const debug = (namespace, message, object) => {
    const typelog = 'DEBUG';
    if (object) {
        console.debug(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}][${typelog}][${namespace}] ${message}`);
    }
}


export default {
    info,
    warn,
    error,
    debug
}