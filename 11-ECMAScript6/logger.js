export const TYPE_LOG = 'log';
export const TYPE_ERROR = 'error';
export const TYPE_WARN = 'warn';
function logger_import(log, type = TYPE_LOG){
    console[type](log);
}

export default logger_import;